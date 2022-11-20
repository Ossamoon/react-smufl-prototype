import React from "react";
import {
  NoteheadBase,
  NoteheadProps,
} from "../../../base/components/NoteheadBase";

export const NoteheadHalf: React.FC<NoteheadProps> = React.forwardRef(
  (props, ref) => {
    const path =
      "M97 -125c-55 0 -97 30 -97 83c0 52 47 167 196 167c58 0 99 -32 99 -83c0 -33 -33 -167 -198 -167zM29 -44c0 -7 3 -14 6 -20c7 -12 19 -23 40 -23c48 0 189 88 189 131c0 7 -3 13 -6 19c-7 12 -18 21 -37 21c-47 0 -192 -79 -192 -128z";

    return (
      <NoteheadBase
        ref={ref}
        path={path}
        bBoxNE={[1.18, 0.5]}
        bBoxSW={[0.0, -0.5]}
        stemDownNW={[0.0, -0.168]}
        stemUpSE={[1.18, 0.168]}
        {...props}
      />
    );
  }
);
