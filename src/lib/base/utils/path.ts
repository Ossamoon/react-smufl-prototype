export const staffPath = (
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
