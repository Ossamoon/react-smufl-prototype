import React from "react";

// Context
export const ScoreContext = React.createContext<{ unit: number }>({
  unit: 250,
});

// Props
export type ScoreProps = React.ComponentPropsWithRef<"svg"> & {
  width: number; // CSS Pixel
  height: number; // CSS Pixel
  staffSpaceHeight: number; // CSS Pixel
};
export type ScoreBaseProps = ScoreProps & { upm: number };

// Component
export const ScoreBase: React.FC<ScoreBaseProps> = React.forwardRef(
  ({ width, height, staffSpaceHeight, upm, ...props }, ref) => {
    const unit = upm / 4;
    const viewBoxWidth = (width / staffSpaceHeight) * unit;
    const viewBoxHeight = (height / staffSpaceHeight) * unit;
    return (
      <ScoreContext.Provider value={{ unit }}>
        <svg
          ref={ref}
          width={width}
          height={height}
          viewBox={`0, 0, ${viewBoxWidth}, ${viewBoxHeight}`}
          {...props}
        />
      </ScoreContext.Provider>
    );
  }
);
