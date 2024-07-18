# 金沢茶寮リブランディング課題

![screenshot](https://github.com/masakitami/kanazawa-saryo/blob/main/public/images/ogp.png)

## 概要
金沢茶寮リブランディングの開発環境です。フロントエンドツールには「vite」を利用しているため、高速に静的サイトを開発することが可能です。
また、フレームワークはastroを採用してホスティングはvercelを使用しました。

- [既存サイト](https://www.kanazawasaryo.jp/)
- [新サイトのデザインデータ(figma)](https://x.gd/bUZGC)
- [新サイトのテストサイト](https://kanazawa-saryo.vercel.app/)

> 🚨 注意点

新サイトを制作するにあたって既存サイトとコンテンツが重複してしまい、既存サイトがペナルティを受ける可能性があるため新サイトにはノーインデックスを設定している。

## 準備
ローカル環境で利用するには以下のツールをマシンにインストールしておく必要があります。
- node.js >= 18.16.0
- git

## デプロイ方法
[Vercel](https://vercel.com/)とGithubをAPI連携させているためローカル環境からリモート環境にプッシュした時点で本番サイトにデプロイされます。