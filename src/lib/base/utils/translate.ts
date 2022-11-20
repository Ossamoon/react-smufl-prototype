export const translateStringfy = (x: number, y: number) => {
  if (x === 0 && y === 0) {
    return "";
  }
  return `translate(${x}, ${y})`;
};

export const translateAnchorX = (
  anchorX: "left" | "center" | "opticalCenter" | "right" | "auto",
  bBoxLeft: number,
  bBoxRight: number,
  opticalCenter?: number
) => {
  const center = (bBoxLeft + bBoxRight) / 2;
  switch (anchorX) {
    case "left":
      return -bBoxLeft;
    case "center":
      return -center;
    case "opticalCenter":
      return opticalCenter === undefined ? -center : -opticalCenter;
    case "right":
      return -bBoxRight;
    case "auto":
      return 0;
  }
};

export const translateAnchorY = (
  anchorY: "top" | "center" | "bottom" | "auto",
  bBoxTop: number,
  bBoxBottom: number
) => {
  const center = (bBoxTop + bBoxBottom) / 2;
  switch (anchorY) {
    case "top":
      return -bBoxTop;
    case "center":
      return -center;
    case "bottom":
      return -bBoxBottom;
    case "auto":
      return 0;
  }
};
