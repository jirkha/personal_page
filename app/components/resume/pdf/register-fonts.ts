import { Font } from "@react-pdf/renderer";

let fontsRegistered = false;

export function registerFonts() {
  if (fontsRegistered) return;
  Font.register({
    family: "Open Sans",
    src: "/fonts/Poppins-Regular.ttf",
  });
  Font.register({
    family: "Open Bold",
    src: "/fonts/Poppins-SemiBold.ttf",
  });
  Font.register({
    family: "Open Italic",
    src: "/fonts/Poppins-Italic.ttf",
  });
  // Zakázat dělení slov
  Font.registerHyphenationCallback((word) => [word]);
  fontsRegistered = true;
}
