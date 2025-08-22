# Amazon Hover Tooltip Chrome Extension

![icon](icons/icon128.png)

Amazon の商品画像にマウスホバーした際に、商品名をツールチップとして表示する Chrome 拡張機能です。

## 機能

- **ツールチップ表示**: Amazon の商品画像にマウスホバーした際に、 alt 属性の内容をツールチップとして表示します。
  - 画像から商品名がわからない場合でもマウスホバーするだけで商品名を確認できます。

![usage](images/usage.gif)

- **ON/OFF 切り替え**: 拡張機能アイコンクリックで機能の有効/無効を切り替えできます。
  - どの状態になるかは下図のアイコンを参考にしてください。

| enable                   | disable                            |
| ------------------------ | ---------------------------------- |
| ![ON](icons/icon128.png) | ![OFF](icons/icon128-disabled.png) |

## 対応サイト

- Amazon Japan (`amazon.co.jp`)
- Amazon US (`amazon.com`)

## インストール方法

1. このリポジトリをクローンまたはダウンロード
1. Chrome ブラウザで `chrome://extensions/` を開く
1. 右上の「デベロッパーモード」を有効化
1. 「パッケージ化されていない拡張機能を読み込む」をクリック
1. このプロジェクトのルートディレクトリを選択
