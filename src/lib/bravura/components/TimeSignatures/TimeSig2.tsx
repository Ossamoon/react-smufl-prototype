import React from "react";
import {
  OnStaffElementBase,
  OnStaffElementProps,
} from "../../../base/components/OnStaffElementBase";

export const TimeSig2: React.FC<OnStaffElementProps> = React.forwardRef(
  (props, ref) => {
    const path =
      "M20 118c0 27 11 52 28 73c49 57 111 63 181 63c93 0 197 -46 197 -152c0 -83 -63 -112 -133 -131c-22 -6 -107 -36 -129 -72c11 4 24 6 37 6c41 0 88 -16 108 -24c10 -5 17 -6 30 -11c7 -2 12 -3 17 -3c21 0 29 19 39 43c0 1 1 2 1 3c2 6 5 10 13 10c7 0 12 -2 12 -14c-16 -155 -93 -159 -136 -159c-89 0 -104 54 -144 54c-59 0 -71 -61 -93 -61c-20 0 -25 24 -25 39c17 63 56 112 111 147c72 44 147 113 147 204c0 29 -1 96 -90 96c-59 0 -77 -24 -79 -38c0 -20 69 -23 69 -83c0 -25 -9 -88 -70 -88c-36 0 -67 24 -82 55c-6 15 -9 29 -9 43z";
    return (
      <OnStaffElementBase
        ref={ref}
        path={path}
        bBoxNE={[1.704, 1.016]}
        bBoxSW={[0.08, -1.028]}
        {...props}
      />
    );
  }
);
