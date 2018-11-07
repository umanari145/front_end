# front_end


## basic
CSSで気をつけるべきポイント
- basic/css_tips.md に記載

## less/sass
CSSプリプロセッサ

### 特徴、使用時のメリット(一部sassのみのものあり)
- 変数、配列の使用、他ファイルの読み込み
- 条件分岐、ループ
- 関数化、モジュール化
- ネストしたCSSの作成、スコープのコントロール
- クラスの継承


### インストール

Windows,Mac,Linux共通

1 https://nodejs.org/ja/download/ よりnode.js,npmのインストール
参考リンク https://ics.media/entry/3290

2 下記コマンドでsassのインストール
```
npm install -g node-sass
```

### コンパイル方法

1. コマンドラインで直接&監視コマンド
```
#一番シンプルなコマンド
sass sample.sass sample.css
lessc sample.sass sample.css
#監視(自動で更新される)
sass --watch *.scss
```
2. エディタのプラグイン
保存時などに自動的にコンパイルされるなど
ex. atomのsass-autocompile

3. gulp(タスクランナー使用)
ファイル更新時に自動的に保存されるなど

### ファイル構成
- sass以下
- index.html HTML
- sample.scss 元となるscssファイル
- sample.css 生成されたcss
- _mixins.scss mixisについて
- _variables.scss 変数、配列などについて

- less以下
- index.html HTML
- sample.less 元となるscssファイル
- sample.css 生成されたcss
- libs.less mixisについて
- variables.scss 変数について


## flexbox
複雑なレイアウトを平易に表現できる

### 特徴、使用時のメリット
- 既存のfloat(overflow:hiddenやclear:fixの組み合わせ)などのレイアウトのデメリットを解消
- 均等配置など従来のCSSでは難しかった配置が簡単にできる
- 縦中央ぞろえなどもプロパティ1つでできる

### 特徴、使用時のメリット
- 非対応のブラウザが一部あり

### ファイル構成
- flex.html 基本的なflexのプロパティに関して(html)
- style.css 基本的なflexのプロパティに関して(css)
- flex2.html 主にflex-start flex-grow flex-shirkのショートハンドプロパティに関して(html)
- style2.css 主にflex-start flex-grow flex-shirkのショートハンドプロパティに関して(css)

## アニメーション関連
animation,transition,transformなどを使ったアニメーション

### ファイル構成
- animation以下
- animation_basic.html animation,transitionなどの基本的な使い方について
- animation.* transitionを使った具体的なアニメーションに関して
- original_pararax.* パララックスを扱ったサンプル

## レスポンシブ + gulp + ejs
- PCとスマホを横幅(メディアクエリ)によって切り替え
- gulpの実行
- ejs テンプレート

### gulp

タスクランナー<br>
ウェブ制作に置ける様々な処理を自動化させることのできるツール。

- less/sassのコンパイル
- ローカルサーバーの起動と自動更新
- ejsのコンパイル
- 監視
- etc・・・

### インストール
参考リンク https://ics.media/entry/3290
Mac,Win共通
1. https://nodejs.org/ja/download/ よりソースをダウンロード
2. npm -vでバージョンが表示されればOK
3. ```npm install``` package.jsonより関連ライブラリがインストールされる
4. ```mv gulpfile1.js gulpfile.js```
5. ```npx gulp sample_task```
6. ```npx gulp```

### ファイル構成
- responsive以下
- index.html 生成されたhtml
- style.css  生成されたcss
- image サンプル画像
- src
  - ejs
    - header.ejs  ヘッダー
    - index.ejs   本体
    - layout.ejs  layoutファイル
  - sass
    - style.scss

## PHPスクール題材

### ファイル構成
- phpschool以下
- index.html
- src(コンパイル元ファイル)
  - css
      - _variables.scss 変数
      - _mixins.scss 関数
      - _reset.scss リセットCSS
      - _common.scss 共通情報  
      - _parts.scss パーツ(サイドのリンクなど)
      - _header.css ヘッダー    
      - _footer.css フッター
      - _top.css トップ画面固有のCSS
  - ejs
      - footer.ejs フッター
      - header.ejs ヘッダー
      - index.ejs トップのHTML
      - layout.ejs レイアウトファイル
      - parts.ejs 他パーツ
- css
  - style.css 実際に読み込まれるCSS
- images 画像

### 実行
1. ```mv gulpfile2.js gulpfile.js```
3. ```npx gulp```
