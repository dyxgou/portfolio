// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact(), partytown()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: [300],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Source Code Pro",
      cssVariable: "--font-code",
      weights: [400],
      styles: ["normal"],
    },
  ],
});
