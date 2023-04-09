//reference checkColorImage https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript

type getAverageRGBPropsType = {
  imgEl: HTMLImageElement;
  blockSize?: number;
};

function getAverageRGB({ imgEl, blockSize = 5 }: getAverageRGBPropsType) {
  const defaultRGB = { r: 0, g: 0, b: 0 };

  if (!imgEl) {
    return defaultRGB;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = imgEl.naturalWidth || imgEl.width);
  const height = (canvas.height = imgEl.naturalHeight || imgEl.height);

  if (!context) {
    console.warn("CanvasRenderingContext2D is not available.");
    return defaultRGB;
  }

  context?.drawImage(imgEl, 0, 0);

  const data = context.getImageData(0, 0, width, height).data;
  const length = data.length;
  let rgb = { r: 0, g: 0, b: 0 };
  let count = 0;

  for (let i = 0; i < length; i += blockSize * 4) {
    count++;
    rgb.r += data[i];
    rgb.g += data[i + 1];
    rgb.b += data[i + 2];
  }

  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  return rgb;
}

export default getAverageRGB;
