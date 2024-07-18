# 金沢茶寮リブランディング課題

![screenshot](https://github.com/masakitami/kanazawa-saryo/blob/main/public/images/ogp.png)

## 🖋 概要
金沢茶寮さまWEBリブランディングの開発環境です。フロントエンドツールには「vite」を利用しているため、高速に静的サイトを開発することが可能です。
また、フレームワークはAstroを採用し、ホスティングサービスはVercelを使用しています。

- [既存サイトURL](https://www.kanazawasaryo.jp/)
- [新サイトのデザインデータ(figma)](https://x.gd/bUZGC)
- [新サイトのテストサイトURL](https://kanazawa-saryo.vercel.app/)

> 🚨 **注意点**
>
> 新サイトを制作するにあたって既存サイトとコンテンツが重複してしまい、既存サイトがペナルティを受ける可能性があるため新サイトにはノーインデックスを設定しています。

## 👨‍💻 準備
ローカル環境で利用するには以下のツールをマシンにインストールしておく必要があります。
- node.js >= 18.16.0
- git

## 📖 WEBアーキテクチャー整理
![screenshot](https://github.com/masakitami/kanazawa-saryo/blob/main/public/images/architecture.png)
金沢茶寮さまのWEBサイトのリブランディングにあたり、JAMstackを導入しました。これにより、バックエンドシステムが不要となり、ユーザーフレンドリーでありながら、ページの読み込み速度が非常に速くなるという利点とセキュリティの堅牢さを担保できるため、ユーザーにとって快適な閲覧体験を提供することができます。また、**既存サイトではURLの最後に「/wp-admin」を追加すると管理画面にアクセスでき、IDもわかってしまうため、クラッキング（ハッキング）のリスク**がありますが、JAMstackの場合はバックエンドシステムがないため、その心配がありません。CMSはHeadlessCMSのNEWTを採用しました。


## 💨 デプロイ方法
[Vercel](https://vercel.com/)とGithubをAPI連携させているためローカル環境からリモート環境にプッシュした時点で本番サイトにデプロイされます。