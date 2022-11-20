import React, { useContext } from "react";
import { translateStringfy } from "../utils/translate";
import { ScoreContext } from "./ScoreBase";
import { StaffContext } from "./StaffBase";

//Props
export type OnStaffElementProps = React.ComponentPropsWithRef<"g"> & {
  line?: number | undefined;
  x?: number | undefined;
  y?: number | undefined;
};

export type OnStaffElementBaseProps = OnStaffElementProps & {
  path: string;
  bBoxNE: [number, number];
  bBoxSW: [number, number];
};

// Component
export const OnStaffElementBase: React.FC<OnStaffElementBaseProps> =
  React.forwardRef(
    (
      {
        line,
        x = 0,
        y = 0,
        path,
        bBoxNE,
        bBoxSW,
        transform,
        children,
        ...props
      },
      ref
    ) => {
      const { unit } = useContext(ScoreContext);
      const staff = useContext(StaffContext);

      const translate =
        staff === null || line === undefined
          ? translateStringfy(x * unit, y * unit)
          : translateStringfy(x * unit, (staff.lines - line) * unit);

      const yAxisReverse = "scale(1,-1)";

      return (
        <g
          ref={ref}
          transform={[translate, transform].filter(Boolean).join(" ")}
          {...props}
        >
          <path transform={yAxisReverse} d={path} />
          {children}
        </g>
      );
    }
  );
