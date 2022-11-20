import React, { useContext } from "react";
import { ScoreContext } from "./ScoreBase";
import { translateStringfy } from "../utils/translate";

// Context
type StaffContextType = {
  width: number;
  lines: number;
  staffLineThickness: number;
};

export const StaffContext = React.createContext<StaffContextType | null>(null);

// StaffPath is a component that renders a staff as a <path> element.
export const StaffPath: React.FC<React.ComponentPropsWithRef<"path">> =
  React.forwardRef(({ d, ...props }, ref) => {
    const { unit } = useContext(ScoreContext);
    const staff = useContext(StaffContext);

    if (staff === null) {
      return null;
    }
    const { width, lines, staffLineThickness } = staff;

    return (
      <path
        ref={ref}
        d={d || staffPath(lines, width, staffLineThickness, unit)}
        {...props}
      />
    );
  });

const staffPath = (
  lines: number,
  width: number,
  staffLineThickness: number,
  unit: number
) => {
  const stroke = staffLineThickness * unit;
  const boxWidth = width * unit;

  let path = "";
  for (let i = 0; i < lines; i++) {
    path += `M0 ${i * unit - stroke / 2}v${stroke}h${boxWidth}v-${stroke}z`;
  }
  return path;
};

// Staff is a component that renders a group of elements in a staff as a <g> element.
type StaffProps = {
  width: number;
  lines?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  staffPath?: JSX.Element | undefined;
  x?: number | undefined;
  y?: number | undefined;
  staffLineThickness: number; // SMuFL Metadata
};
export const Staff: React.FC<React.ComponentPropsWithRef<"g"> & StaffProps> =
  React.forwardRef(
    (
      {
        width,
        lines = 5,
        x = 0,
        y = 0,
        staffPath = <StaffPath />,
        staffLineThickness,
        children,
        transform,
        ...props
      },
      ref
    ) => {
      const { unit } = useContext(ScoreContext);
      const translate = translateStringfy(x * unit, y * unit);

      return (
        <StaffContext.Provider value={{ width, lines, staffLineThickness }}>
          <g
            ref={ref}
            transform={[translate, transform].filter(Boolean).join(" ")}
            {...props}
          >
            {staffPath}
            {children}
          </g>
        </StaffContext.Provider>
      );
    }
  );
