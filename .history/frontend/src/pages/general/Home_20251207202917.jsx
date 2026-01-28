import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../styles/reels.css'
import ReelFeed from '../../components/ReelFeed'

const Home = () => {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		let mounted = true
		axios.get('http://localhost:3000/api/food/', { withCredentials: true })
			.then((res) => {
				const foodItems = res.data.foodItems || []
				const mapped = foodItems.map((item) => ({
					_id: item._id,
					video: item.video,
					description: item.description,
					likeCount: item.likeCount,
					savesCount: item.savesCount,
					commentsCount: item.commentsCount,
					foodPartner: item.foodPartner,
				}))
				if (mounted) setVideos(mapped)
			})
			.catch(() => {
				// noop for now
			})

		return () => { mounted = false }
	}, [])

	const handleLike = async (item) => {
		try {
			await axios.post('http://localhost:3000/api/food/like', { foodId: item._id }, { withCredentials: true })
			setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: Math.max(0, (v.likeCount ?? 0) + 1) } : v))
		} catch {
			// noop
		}
	}

	const handleSave = async (item) => {
		try {
			await axios.post('http://localhost:3000/api/food/save', { foodId: item._id }, { withCredentials: true })
			setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: Math.max(0, (v.savesCount ?? 0) + 1) } : v))
		} catch {
			// noop
		}
	}

	return (
		<ReelFeed
			items={videos}
			onLike={handleLike}
			onSave={handleSave}
			emptyMessage="No videos available yet."
		/>
	)
}

export default Home