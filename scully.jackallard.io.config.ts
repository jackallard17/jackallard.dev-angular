import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "jackallard.io",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  puppeteerLaunchOptions: {
    executablePath: 'node_modules/puppeteer/.local-chromium/linux-970485/chrome-linux/chrome'
  },
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};