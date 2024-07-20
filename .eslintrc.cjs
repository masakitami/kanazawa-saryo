module.exports = {
  root: true,
  plugins: ['tailwindcss', 'import'],
  extends: ['plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      classRegex: '^(active)?[cC]lass(Name)?$',
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2023,
  },
  rules: {
    'tailwindcss/no-custom-classname': [
      1,
      {
        whitelist: ['js-.+', "'u-.+'"],
      },
    ],
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      extends: ['plugin:astro/recommended'],
      // Enable this plugin
      plugins: ['astro', 'import'],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2023: true,
      },
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      rules: {
        // Enable recommended rules
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
};

// module.exports = {
//   ignorePatterns: ['*.d.ts', '*.cjs'],
//   extends: [
//     'eslint:recommended',
//     'plugin:import/typescript',
//     'plugin:astro/recommended',
//     'plugin:tailwindcss/recommended',
//   ],
//   settings: {
//     tailwindcss: {
//       classRegex: '^(active)?[cC]lass(Name)?$',
//     },
//   },
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: './tsconfig.json',
//   },
//   globals: {
//     astroHTML: true,
//   },
//   plugins: ['@typescript-eslint', 'import', 'tailwindcss'],
//   rules: {
//     '@typescript-eslint/consistent-type-imports': [
//       2,
//       {
//         prefer: 'type-imports',
//       },
//     ],
//     'import/order': [2, { alphabetize: { order: 'asc' } }],
//     'tailwindcss/no-custom-classname': [
//       1,
//       {
//         whitelist: ['js-.+'],
//       },
//     ],
//   },
//   overrides: [
//     {
//       // Define the configuration for `.astro` file.
//       files: ['*.astro'],
//       // Allows Astro components to be parsed.
//       parser: 'astro-eslint-parser',
//       // Parse the script in `.astro` as TypeScript by adding the following configuration.
//       // It's the setting you need when using TypeScript.
//       parserOptions: {
//         parser: '@typescript-eslint/parser',
//         extraFileExtensions: ['.astro'],
//       },
//       rules: {
//         // override/add rules settings here, such as:
//         'astro/no-set-html-directive': 'error',
//       },
//     },
//     {
//       files: ['*.ts'],
//       parser: '@typescript-eslint/parser',
//     },
//   ],
// };
