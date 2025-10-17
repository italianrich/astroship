import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from '@astrojs/partytown';


// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [mdx(), sitemap(), icon(),partytown({
      config: {
        forward: ["dataLayer.push"],
      },
})],
  vite: {
    plugins: [tailwindcss()],
  },
});
