---
sidebar_position: 1
---

# Docusaurus のインストール方法から github Pages で公開するまで

ここでは「Docusaurus」をインストールしてから「github Pages」で公開するまでの手順を解説していこうと思う。  
正直かなり手こずったし、日本語の解説がかなり少ないこともあって時間がかかった。  
そんな「Docusaurus」のインストール方法を紹介していきたいと思う

## Docusaurusのインストール

正直これは簡単、
```markdown
npx create-docusaurus@latest ${ファイル名} classic
```

これを実行するだけだ。  
もちろん、ファイル名は好きなものにすればいい

一つだけ補足しておくと `classic` というのはプリセットらしい  
なので `classic`はなくても動作はする  
他にもあるようなので気になる人は確かめてみてほしい

## リポジトリの作成
GitHub でリポジトリを作成する

これも簡単、GitHubのアカウントを作ってそのアカウントのrepositoriesを開く  
おそらくそこにnewというボタンがあるはずなのでそこで作ってくれ

正直ここでリポジトリ作成の詳細な方法を話すのは趣旨とは外れるだろうから関連のドキュメントでも作って今後リンクでも貼れるようにしようと思う

<!-- TODO: リポジトリの作成方法 -->

ここまできたらプロジェクトファイルのを一度リポジトリにプッシュしちゃってもいいだろう  
Pushの方法についてだが...  
恥ずかしながら私はgitコマンドで実行する方法を知らない。  
SourceTreeというgitクライアントを用いて行ったため説明できないのだ

<!-- TODO: sourceTreeでのPush方法 -->
今後頑張ってできるようにはなりたいのでその時に記述しようと思う。

<!-- TODO: コマンドでのPush方法 -->

## github pagesの設定
github pagesの方で公開するブランチを設定しよう  
設定方法は至極単純で、作成したリポジトリのsettingページを開き、左のサイドバーにあるpagesを開く  
そうするとブランチを設定する場所があると思うのでそちらを設定し保存する。

さっきのフェーズでPushしていない場合選択できるブランチがないと思うのでその時はブランチを作成してそのブランチを選択してしまおう

## docusaurus.config.ts の設定の変更

Docusaurusの初期設定をしていこう  
基本的にはDocusaurusの設定は「docusaurus.config.ts(.js)」で行うことになる（「.ts」なのか「.js」なのかはインストールの際どちらを選んだかによって異なる）

最初に設定しなければならない項目については以下になる
- url
- baseUrl
- organizationName
- projectName

具体的な内容としては以下を確認してほしい。
### url
これはgithub pagesのURLのこと。  
確認方法は対象リポジトリのsettingからサイドバーのpagesを開く

github pages の設定を済ませていればページの上部に表示される。  
github pages の設定がまだの場合は設定をし、しばらく待ってページをリロードすれば表示される。

独自ドメインを利用していない場合は

```markdown
https://${organizationName}.github.io/${リポジトリ名}/
```
といったURLが表示されると思うのでこのうち
```markdown
https://${organizationName}.github.io
```
の部分を設定してあげれば良い

### baseUrl
これもURLと同じくgithub pagesのURLのこと。  
確認方法は対象リポジトリのsettingからサイドバーのpagesを開く

github pages の設定を済ませていればページの上部に表示される。  
github pages の設定がまだの場合は設定をし、しばらく待ってページをリロードすれば表示される。

```markdown
https://${organizationName}.github.io/${リポジトリ名}/
```
といったURLが表示されると思うのでこのうち
```markdown
/${リポジトリ名}/
```
の部分を設定してあげれば良い

### organizationName
これはgithubに登録されている企業名、個人で制作している場合はユーザー名を記述してあげれば問題ない

### projectName
これはgithubで作成したリポジトリにつけた名前をつけてあげれば問題ない

## Docusaurusのビルドとデプロイ

次はビルドとデプロイ方法について見ていこう。

