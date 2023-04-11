import { useState, useEffect } from "react";
import checkTransparency from "./checkTransparency";

type useCheckTransparencyPropsType = {
  imageUrl: string;
};

function useCheckTransparency({ imageUrl }: useCheckTransparencyPropsType) {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      console.warn("imageUrl useCheckTransparency is not available.");
      return;
    }

    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const result = checkTransparency({ imgEl: img });
      setIsTransparent(result);
    };
  }, [imageUrl]);

  return isTransparent;
}

export default useCheckTransparency;
