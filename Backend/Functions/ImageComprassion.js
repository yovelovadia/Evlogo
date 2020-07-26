const imagemin = require("imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const imageWebp = require("imagemin-webp");
const imageminPngquant = require("imagemin-pngquant");
const isJpg = require("is-jpg");
const sharp = require("sharp");

const convertToWebp = async (image) => {
  // if (isJpg(image)) {
  //   return image;
  // }

  return sharp(image).webp().toBuffer();
};

const ImageComprassion = async (image) => {
  const compress = await imagemin.buffer(image, {
    plugins: [convertToWebp, imageminPngquant()], // from some reason using imagemin webp wont make image transparent so sticking with this for now
  });
  return compress;
};

module.exports = ImageComprassion;
