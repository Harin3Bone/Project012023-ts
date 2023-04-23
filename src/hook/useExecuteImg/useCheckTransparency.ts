import { useState, useEffect, useRef } from "react";
import checkTransparency from "./checkTransparency";

type useCheckTransparencyPropsType = {
  imageUrl: string;
};

function useCheckTransparency({ imageUrl }: useCheckTransparencyPropsType) {
  const [isTransparent, setIsTransparent] = useState<boolean>(false);
  const preImageUrl = useRef<string | null>(null);
  const preIsTransparent = useRef<boolean>(false);

  useEffect(() => {
    if (!imageUrl) {
      console.warn("imageUrl useCheckTransparency is not available.");
      return;
    }

    if (imageUrl !== preImageUrl.current) {
      preImageUrl.current = imageUrl;

      const img = new Image();
      img.src = imageUrl;
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const result = checkTransparency({ imgEl: img });
        setIsTransparent(result);
        preIsTransparent.current = result;
      };
    } else {
      setIsTransparent(preIsTransparent.current);
    }
  }, [imageUrl]);

  return isTransparent;
}

export default useCheckTransparency;
