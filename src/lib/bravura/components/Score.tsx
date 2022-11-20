import React from "react";
import { ScoreBase, ScoreProps } from "../../base/components/ScoreBase";

export const Score: React.FC<ScoreProps> = React.forwardRef((props, ref) => {
  return <ScoreBase ref={ref} upm={1000} {...props} />;
});
