/**
 * Central palette for the white-first UI. Use these for gradients and
 * any non-Tailwind color needs; prefer Tailwind neutral utilities in markup.
 */
export const palette = {
  ink: "#0a0a0a",
  inkSoft: "#171717",
  gray700: "#404040",
  gray600: "#525252",
  gray500: "#737373",
  gray400: "#a3a3a3",
  gray300: "#d4d4d4",
  canvas: "#ffffff",
  canvasSubtle: "#fafafa",
} as const;

/** Animated gradient text — hero (black ↔ light gray, premium contrast). */
export const gradientTextHero: string[] = [
  palette.ink,
  palette.gray700,
  palette.gray400,
  palette.gray300,
  palette.gray400,
  palette.gray700,
  palette.ink,
];

/** Section / page titles using gradient text (monochrome, readable). */
export const gradientTextSection: string[] = [
  palette.ink,
  palette.gray500,
  palette.gray400,
  palette.ink,
];

/** ReactBits FaultyTerminal: light neutral tint (white-toned particles on white canvas). */
export const faultyTerminalTint = "#ececee";

/** Slightly softer scanline / brightness tuning lives in BackgroundLayer props only. */
