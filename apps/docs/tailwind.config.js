/** @type {import('tailwindcss').Config} */
const sharedConfig = require("tailwindconfig");
module.exports = {
  ...sharedConfig,
  content: [
    "../../packages/acme-core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
}
