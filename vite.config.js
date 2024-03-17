// @ts-check

import handlebars from "vite-plugin-handlebars";
import tailwindcss from "tailwindcss";
import { resolve } from "path";
import pageData from "./pageData.json";

/**
 * @param {string} pagePath
 * @returns {import("./vite.config").PageData}
 */
function getPageData(pagePath) {
  const DEFAULT_DATA = {
    baseUrl: process.env.BASE_URL || "/",
    title: "EyeOdin's website",
    /** @type {import("./vite.config").SocialNetworkLink[]} */
    headerSocialNetworks: [
      {
        url: "https://www.twitch.tv/eyeodin",
        svg_path: "svg/logo_twitch",
        alt: "Twitch",
      },
      {
        url: "https://twitter.com/eyeodin_",
        svg_path: "svg/logo_twitter",
        alt: "Twitter (or X)",
      },
      {
        url: "https://github.com/EyeOdin",
        svg_path: "svg/logo_github",
        alt: "GitHub",
      },
      {
        url: "https://www.youtube.com/@eyeodin_",
        svg_path: "svg/logo_youtube",
        alt: "YouTube",
      },
    ],
  };

  return {
    ...DEFAULT_DATA,
    ...(pageData[pagePath] || {}),
  };
}

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context(pagePath) {
        return getPageData(pagePath);
      },
      helpers: {
        is_even: (index) => index % 2,
      },
    }),
  ],
  resolve: {},
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    outDir: resolve(__dirname, "docs"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        illustration: resolve(__dirname, "illustration.html"),
        vtubers: resolve(__dirname, "vtubers.html"),
        commissions: resolve(__dirname, "commissions/index.html"),
        "terms-of-service": resolve(__dirname, "terms-of-service/index.html"),
        tips: resolve(__dirname, "tips/index.html"),
        plugins: resolve(__dirname, "plugins/index.html"),
        // TODO: make this dynamic
        "plugins/imagine-board": resolve(
          __dirname,
          "plugins/imagine-board.html",
        ),
        "plugins/pigment-o": resolve(__dirname, "plugins/pigment-o.html"),
        "plugins/timer-watch": resolve(__dirname, "plugins/timer-watch.html"),
        "plugins/project-pages": resolve(
          __dirname,
          "plugins/project-pages.html",
        ),
      },
    },
  },
};
