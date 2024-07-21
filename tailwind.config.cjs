/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); //プラグインの読み込み
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontSize: {
        jpTextXs: ['0.8rem', '1.6rem'],
        jpTextSm: ['0.88rem', '1.49rem'],
        jpTextBase: ['1rem', 'max(150%,1.6rem)'],
        jpTextLg: ['1.14rem', '1.98rem'],
        jpTextXl: ['1.33rem', '1.99rem'],
        jpText2xl: ['1.6rem', '2rem'],
        jpText3xl: ['2rem', '3rem'],
        jpText4xl: ['2.66rem', '3.99rem'],
        jpText5xl: ['4rem', '4.48rem'],
        enTextBase: ['1rem', '1.5rem'],
        enTextLg: ['1.14rem', '1.98rem'],
        enTextXl: ['1.33rem', '1.99rem'],
        enText2xl: ['1.6rem', '2rem'],
        enText3xl: ['2rem', '3rem'],
        enText4xl: ['2.66rem', '3.99rem'],
        enText5xl: ['max(4vw,2.66rem)', 'max(108%,3.99rem)'],
        enText7xl: ['max(6vw,3.5rem)', 'max(108%,3.2rem)'],
        enText9xl: ['max(5vw,6rem)', 'max(100%,6.48rem)'],
        enText10xl: ['max(12vw,6rem)', 'max(100%,6rem)'],
      },
      colors: {
        'ks-bg': '#EAEAEB',
        'ks-grey': '#DADADA',
        'ks-black': '#070707',
        'invert(ks-white)': '#030201',
        'invert(ks-black)': '#F8F8F8',
        'ks-white': '#FCFDFE',
      },
      fontFamily: {
        jp: ['Noto Serif JP', 'serif'],
        en: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        'c-gutter-x': 'max(4.8vw,1.5rem)',
        'c-gutter-y': 'max(9vw, 4.5rem)',
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(-50%)',
          },
          to: {
            transform: 'translateX(var(--translate-x,0%))',
          },
        },
      },
      zIndex: {
        header: '100',
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      addVariant,
      theme,
      matchUtilities,
    }) {
      // スマホではホバー禁止
      addVariant(
        'hover',
        '@media(hover:hover){ &:where(:any-link, :enabled, summary):hover }',
      );
      // デフォルトCSS
      addBase({
        body: {
          'font-family': "'Noto Serif JP', 'Cormorant Garamond', 'serif'",
          'font-weight': '200',
          'background-color': theme('colors.ks-bg'),
          color: theme('colors.ks-black'),
          'overflow-x': 'hidden',
        },
        ':lang(en)': {
          'font-family': "'Cormorant Garamond', 'serif'",
        },
        img: {
          'max-width': '100%',
          'object-fit': 'cover',
          height: 'auto',
        },
        '.c-section': {
          '@apply sm:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-[max(2.6vw,1rem)]':
            {},
        },
        '.title-main': {
          '@apply mb-[.35em] lg:ml-[-.1em] text-[max(4vw,theme(fontSize.enText4xl))]/[max(4.48vw,3.2rem)] lg:ml-0 block':
            {},
        },
        '.title-sub': {
          '@apply text-[max(1.14vw,theme(fontSize.jpTextSm))]/[1em] block tracking-[.05em]':
            {},
        },
      });
      addComponents({});
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
        '.u-sticky-for-grid': {
          'align-self': 'start',
        },
      });
      matchUtilities({
        intrincSize: (value) => {
          return {
            'contain-intrinsic-size': value,
          };
        },
      });
    }),
  ],
};
