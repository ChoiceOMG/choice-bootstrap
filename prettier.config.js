/** @type {import('prettier').PrettierConfig} */

const prettierConfig = {
  arrowParens: "avoid",
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  semi: false,
  proseWrap: "always",
  printWidth: 80,
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-organize-imports"
  ],
  tailwindFunctions: ['clsx'],
}

module.exports = prettierConfig