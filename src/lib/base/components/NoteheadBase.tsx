import React, { useContext } from "react";
import { translateStringfy } from "../utils/translate";
import { ScoreContext } from "./ScoreBase";
import { StaffContext } from "./StaffBase";

// Context
export const NoteheadContext = React.createContext<{
  stemDownNW: [number, number];
  stemUpSE: [number, number];
} | null>(null);

// Props
export type NoteheadProps = React.ComponentPropsWithRef<"g"> & {
  line?: number | undefined;
  x?: number | undefined;
  y?: number | undefined;
};

export type NoteheadBaseProps = NoteheadProps & {
  path: string;
  bBoxNE: [number, number];
  bBoxSW: [number, number];
  stemDownNW: [number, number];
  stemUpSE: [number, number];
};

// Component
export const NoteheadBase: React.FC<NoteheadBaseProps> = React.forwardRef(
  (
    {
      line,
      x = 0,
      y = 0,
      path,
      bBoxNE,
      bBoxSW,
      stemDownNW,
      stemUpSE,
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
      <NoteheadContext.Provider value={{ stemDownNW, stemUpSE }}>
        <g
          ref={ref}
          transform={[translate, transform].filter(Boolean).join(" ")}
          {...props}
        >
          <path transform={yAxisReverse} d={path} />
          {children}
        </g>
      </NoteheadContext.Provider>
    );
  }
);
