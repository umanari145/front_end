# CSSで気をつけるべきポイント

## 詳細度
1. !important
2. インラインスタイル
3. Idセレクタ
4. classセレクタ、属性セレクタ
5. 要素セレクタ、擬似要素
6. 全称セレクタ

## 画像(背景画像)の挙動
- 共に内部要素が包有要素をオーバーしてしまう。スマホサイトの場合、横揺れの原因になる。
- imgはwidth指定をする。しないとディフォルトで画像幅をとる。また%指定にした場合はmax(ormin)をとった方がいい。
- backgroundの場合は、100%とcontain,coverなどを使い分ける。

### 使用ファイル
- image.html 通常の画像の挙動に関して
- main_visual* 背景画像の挙動に関して(主にbackgroundプロパティ)

## 幅と高さの理解
常になぜその幅と高さを取っているのか?を考える。
わからない場合は大抵(ブロック、インラインがわかっていないか画像がらみ)

## floatの挙動に関して(あまり積極的に使わないかも・・・)
- floatは左右よせではなく、浮くことになるので子要素がすべてfloatした場合、親要素からみると存在しない状態になってしまう。
- 子がすべてfloatした場合は、親の高さが0になる。親要素にclass=”clearfix”を入れるか、overflow:hiddenを与える、後述要素にclear:bothを入れる方法が一般的。
- floatさせる要素はwidthを指定しないと幅が内部依存になる(ブラウザでmargin_float.htmlの幅を変えてみる)。

### 使用ファイル
- margin_float.html


## ブロック要素とインライン要素

### ブロック要素
- 基本的に改行され、縦に積まれるため、横に並べるにはfloatなどをする必要がある
- 幅(width)を決めた場合、その幅に。決めない場合親がいれば、親の幅の分、なければ一列分。
- 高さ(height)を決めた場合は、その高さになるが、決めていない場合は内包する要素による。

### インライン要素
- 改行されず、横に並び、幅や高さは内部要素に依存する。
- 上下のmargin,padding,height,widthなどが効かない。

## fontの指定
- px 絶対値指定。単純な解像度
- em 親要素を基準にその倍数をかける
- rem 親ではなくhtml要素に対して倍数をかける
- vw 画面幅に応じたフォントサイズ。1vwは画面幅の1/100

## display要素の把握
- display:block 通常のブロック要素になる。
- display:inliline インライン要素に変換。
- display:inline-block  横に並ぶが、幅や高さ、上下のmargin,paddingを設定できる。かなり汎用的に使える。
- display:table テーブルのような挙動をとるレイアウト。均等配置や領域をしっかり分けた時などに使える。縦中央(vertical-align)が楽。子要素にはdisplay:table-cellを設定する。

## 中央揃えに関して

横
- ブロック
  - width指定 & margin:0 auto;
- インライン(or inline-block)
  - text-align:center

縦
- ブロック
  - position:abosolute + margin: auto 画像などで使用
  - 幅指定せずにpaddingのみで決める
- インライン
  - vertical-align:middle(ただし全要素の中央になる)
  - line-heightでの設定
- table
  - vertical-align:middle(要素に対しての中央)

参考リンク<br>
https://www.granfairs.com/blog/staff/centering-by-css<br>

### 使用ファイル
- centering.html 主な中央揃えの技法に関して
- vertical.html vertical-alignの挙動に関して

## CSSをつける時のコツ
- なるべくクラスにつける(id要素、htmlなどにできるだけつけない)
- ネストを深くしすぎない
- 構造(幅、高さなどの形に関する部分)と見た目(主に色や枠線など)の分離
- 一つのクラスの中に情報を深く入れすぎない
