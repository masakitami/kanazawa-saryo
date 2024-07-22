import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    preact({ compat: true }),
    // swup({
    //   theme: true, //デフォルトで用意されている遷移アニメーションは使用しない
    //   smoothScrolling: false, //スムーズスクロール無効化
    //   updateBodyClass: true, //ページ遷移時にbody要素のクラス名を更新する
    //   reloadScripts: false, //遷移後にスクリプトを再読み込みさせない
    // }),
  ],
});
