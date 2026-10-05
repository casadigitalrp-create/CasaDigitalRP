// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  // Mesmo endereço canônico do site atual (sem www), levantado em 04/10/2026.
  site: "https://casadigitalrp.com.br",
  integrations: [sitemap()],
  // URLs do site anterior que mudaram de endereço.
  redirects: {
    "/privacidade": "/politica-de-privacidade/",
  },
  // Fonte servida pelo próprio site, com fallback de métricas ajustadas (evita "pulo" do texto ao carregar).
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Nunito",
      cssVariable: "--font-nunito",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2"],
            weight: "200 1000",
            style: "normal",
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
