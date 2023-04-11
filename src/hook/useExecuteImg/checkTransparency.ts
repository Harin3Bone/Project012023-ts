type checkTransparencyPropsType = {
  imgEl: HTMLImageElement;
  threshold?: number;
};

function checkTransparency({ imgEl, threshold = 0.2 }: checkTransparencyPropsType) {
  if (!imgEl) {
    console.warn("No image checkTransparency element provided.");
    return false;
  }
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = imgEl.naturalWidth || imgEl.width);
  const height = (canvas.height = imgEl.naturalHeight || imgEl.height);

  if (!context) {
    console.warn("CanvasRenderingContext2D checkTransparency is not available.");
    return false;
  }

  context.drawImage(imgEl, 0, 0);
  const data = context.getImageData(0, 0, width, height).data;
  const length = data.length;

  let transparentPixelCount = 0;
  const totalPixels = width * height;

  for (let i = 3; i < length; i += 4) {
    if (data[i] < 255) {
      transparentPixelCount++;
    }
  }

  const transparencyRatio = transparentPixelCount / totalPixels;

  return transparencyRatio > threshold;
}

export default checkTransparency;
