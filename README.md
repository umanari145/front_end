# front_end

## sass(scss)


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
