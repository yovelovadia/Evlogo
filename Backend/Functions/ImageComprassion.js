const imagemin = require("imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const isJpg = require("is-jpg");
const sharp = require("sharp");

const convertToJpg = async (image) => {
  if (isJpg(image)) {
    return image;
  }

  return sharp(image).jpeg().toBuffer();
};

const ImageComprassion = async (image) => {
  const compress = await imagemin.buffer(image, {
    plugins: [convertToJpg, mozjpeg({ quality: 85 })],
  });
  console.log(compress);
  return compress;
};

module.exports = ImageComprassion;
