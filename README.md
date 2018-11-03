# front_end

## sass(scss)
CSSプリプロセッサ

### 特徴、使用時のメリット
- 変数、配列の使用、他ファイルの読み込み
- 条件分岐、ループ
- 関数化、モジュール化
- ネストしたCSSの作成、スコープのコントロール
- クラスの継承



### インストール
node.js

Windows


Mac,Linux

```

npm install -g node-sass


```

### コンパイル方法

1. コマンドラインで直接
ex.sass sample.sass sample.css

2. エディタのプラグイン
保存時などに自動的にコンパイルされるなど
ex. atomのsass-autocompile

3. gulp(タスクランナー使用)
ファイル更新時に自動的に保存されるなど

### ファイル構成
- index.html HTML
- sample.scss 元となるscssファイル
- sample.css 生成されたcss
- _mixins.scss mixisについて
- _variables.scss 変数、配列などについて


## flexbox
複雑なを平易にできる

### 特徴、使用時のメリット
- 既存のfloat(overflow:hiddenやclear:fix)などのレイアウトのデメリットを解消
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
- animation,transition,transformなどを使ったアニメーション

### ファイル構成
- animation_basic.html animation,transitionなどの基本的な使い方について
- animation.html transitionを使った具体的なアニメーションに関して(html)
- animation.css transitionを使った具体的なアニメーションに関して(css)
- animation.js transitionを使った具体的なアニメーションに関して(js)
