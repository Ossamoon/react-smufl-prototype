// for more information on engravingDefults, see https://w3c.github.io/smufl/latest/specification/engravingdefaults.html
export type EngravingDefaults = Partial<{
  textFontFamily: string[];
  staffLineThickness: number;
  stemThickness: number;
  beamThickness: number;
  beamSpacing: number;
  legerLineThickness: number;
  legerLineExtension: number;
  slurEndpointThickness: number;
  slurMidpointThickness: number;
  tieEndpointThickness: number;
  tieMidpointThickness: number;
  thinBarlineThickness: number;
  thickBarlineThickness: number;
  dashedBarlineThickness: number;
  dashedBarlineDashLength: number;
  dashedBarlineGapLength: number;
  barlineSeparation: number;
  thinThickBarlineSeparation: number;
  repeatBarlineDotSeparation: number;
  bracketThickness: number;
  subBracketThickness: number;
  hairpinThickness: number;
  octaveLineThickness: number;
  pedalLineThickness: number;
  repeatEndingLineThickness: number;
  arrowShaftThickness: number;
  lyricLineThickness: number;
  textEnclosureThickness: number;
  tupletBracketThickness: number;
  hBarThickness: number;
}>;

// for more information on glyphBBoxes, see https://w3c.github.io/smufl/latest/specification/glyphbboxes.html
export type glyphBBox = Partial<{
  bBoxNE: [number, number];
  bBoxSW: [number, number];
}>;

// for more information on glyphsWithAnchors, see https://w3c.github.io/smufl/latest/specification/glyphswithanchors.html
export type glyphsWithAnchor = Partial<{
  splitStemUpSE: [number, number];
  splitStemUpSW: [number, number];
  splitStemDownNE: [number, number];
  splitStemDownNW: [number, number];
  stemUpSE: [number, number];
  stemDownNW: [number, number];
  stemUpNW: [number, number];
  stemDownSW: [number, number];
  nominalWidth: number;
  numeralTop: [number, number];
  numeralBottom: [number, number];
  cutOutNE: [number, number];
  cutOutSE: [number, number];
  cutOutSW: [number, number];
  cutOutNW: [number, number];
  graceNoteSlashSW: [number, number];
  graceNoteSlashNE: [number, number];
  graceNoteSlashNW: [number, number];
  graceNoteSlashSE: [number, number];
  repeatOffset: [number, number];
  noteheadOrigin: [number, number];
  opticalCenter: [number, number];
}>;
