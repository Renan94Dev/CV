import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          bg_color: { value: "{colors.gray.200}" },
          border_color: { value: "{colors.neutral.200}" },
          header_bg_color: { value: "{colors.slate.900}" },
          header_text_color: { value: "{colors.slate.100}" },
          left_side_color: { value: "{current}" },
        },
        spacing: {
          padding_x: { value: "16px" },
        },
        borders: {
          border_divider: {
            value: "2px solid {colors.border_color}",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
