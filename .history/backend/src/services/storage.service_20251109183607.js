const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  try {
    const result = await imagekit.upload({
      file: file,          // buffer or base64
      fileName: fileName,  // any unique name (e.g., uuid)
    });
    return result;
  } catch (error) {
    console.error("ImageKit upload error:", error.message);
    throw error;
  }
}

module.exports = {
  uploadFile,
};
