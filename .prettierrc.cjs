/**
 * @type {import('prettier').Options}
 **/
// module.exports = {
//   singleQuote: true,
//   semi: true,
//   printWidth: 80,
//   proseWrap: 'always',
// };

module.exports = {
  singleQuote: true,
  semi: true,
  printWidth: 80,
  proseWrap: 'always',
  plugins: ['prettier-plugin-astro'],
  // overrides: [
  //   {
  //     files: '*.astro',
  //     options: {
  //       parser: 'astro',
  //     },
  //   },
  // ],
};
