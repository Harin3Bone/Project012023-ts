import { useState, useEffect } from "react"

import getAverageRGB from "./getAverageRGB"

type useAverageRGBPropsType  = {
  imageUrl:string
}

function useAverageRGB({imageUrl}:useAverageRGBPropsType) {
  const [averageColor, setAverageColor] = useState({ r: 0, g: 0, b: 0 });

  useEffect(() => {
    if (!imageUrl) {
      console.warn("imageUrl is not available.");
      return;
    }

    const img = new Image();
    img.src = imageUrl
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const color = getAverageRGB({ imgEl: img });
      setAverageColor(color)
    }

  }, [imageUrl])
  
  return averageColor
}

export default useAverageRGB