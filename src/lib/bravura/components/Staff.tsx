import React from "react";
import { Staff as StaffBase, StaffPath } from "../../base/components/StaffBase";

type StaffProps = {
  width: number;
  lines?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  staffPath?: JSX.Element | undefined;
  x?: number | undefined;
  y?: number | undefined;
};

export const Staff: React.FC<React.ComponentPropsWithRef<"g"> & StaffProps> =
  React.forwardRef((props, ref) => {
    return <StaffBase ref={ref} staffLineThickness={0.128} {...props} />;
  });

export { StaffPath };
