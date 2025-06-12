---
sidebar_position: 1
tag:
  - test
  - Automation
---

# Appium Inspectorの初期設定

この記事ではAppium Inspectorの初期設定の方法を解説していこうと思う
モバイルアプリのテストの自動化を行う上では欠かせないツールだと個人的には思っているのでセットアップ方法はぜひみに蹴ておいてほしい。

## Appium Inspector とは
Appium Inspectorは、Appiumというオープンソースツールを用いてモバイルサプリケーションのUI要素を検査するツール
テストの自動化に必要な要素を取得するために使用される

一番近いのはChromeのF12で開かれるでペロッパーツールになり
画面の要素のソースや構造を分析できる

またAppium Inspector内で実践テストを実際にコードに落としてくれる機能もある...らしい  
これに関してはまだ使用したことがないためこれから学びつつ勉強していきたいと考えている。

## インストール方法
1. [Appium Inspector公式ページ](https://github.com/appium/appium-inspector/releases)から最新版をダウンロード
2. お使いのOSに合わせたインストーラーを実行
   - macOS: `.dmg`ファイル
   - Windows: `.exe`ファイル
   - Linux: `.AppImage`ファイル

## 基本的な使用方法

### 1. 接続設定
1. Appium Serverを起動
2. Appium Inspectorを起動
3. 以下の接続情報を設定：
   - Remote Host: `localhost`
   - Remote Port: `4723`（デフォルト）
   - Remote Path: `/`

### 2. Capability Builder の設定

- Android
```json
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "${端末名}",
  "appium:appPackage": "${パッケージ名}",
  "appium:udid": "${UIDI}",
  "appium:appActivity": "${パッケージ名}.MainActivity",
  "appium:noReset": true
}
```



### 3. 要素の検査方法
1. 「Start Session」をクリック
2. 画面上の要素をクリックして選択
3. 以下の情報が表示されます：
   - XPath
   - ID
   - アクセシビリティID
   - クラス名
   - その他の属性

### 4. 主な機能
- **要素ツリー表示**: 画面のUI階層構造を表示
- **要素検索**: XPathや各種セレクタによる要素の検索
- **要素の属性表示**: 選択した要素の全属性を表示
- **スクリーンショット**: 現在の画面のスクリーンショットを取得
- **要素の操作**: タップ、スワイプなどの操作をテスト

## トラブルシューティング

### よくある問題と解決方法
1. 接続エラー
   - Appium Serverが起動しているか確認
   - ポート番号が正しいか確認
   - デバイスが正しく接続されているか確認

2. 要素が見つからない
   - ページソースを更新
   - 要素が画面内に表示されているか確認
   - 正しいコンテキストにいるか確認

3. セッション開始エラー
   - Desired Capabilitiesの設定を確認
   - デバイスのUDIDが正しいか確認
   - アプリのパスが正しいか確認

## ベストプラクティス
1. 要素の特定には可能な限り一意の識別子を使用
2. XPathは最後の手段として使用
3. 定期的にページソースを更新
4. セッション開始前にデバイスとの接続を確認

## 参考リンク
- [Appium 公式ドキュメント](http://appium.io/docs/en/about-appium/intro/)
- [Appium Inspector GitHub](https://github.com/appium/appium-inspector)

## デバイス情報の取得方法

### iOSデバイスの場合

1. **デバイスのUDID**:
   - Macでデバイスを接続した状態で以下のコマンドを実行：
   ```zsh
   xcrun xctrace list devices
   ```
   または
   ```zsh
   instruments -s devices
   ```
   - このコマンドで接続されているデバイスの一覧とそれぞれのUDIDが表示されます。

2. **デバイス名**:
   - 上記のコマンドで表示される実機の名前を使用できます
   - または、iPhoneの「設定」→「一般」→「情報」→「名前」で設定されている名前

3. **アプリのパス**:
   - `.ipa`ファイルの場合：ビルドされたipaファイルの絶対パス
   - 開発中のアプリの場合：
     ```zsh
     /Users/ユーザー名/Library/Developer/Xcode/DerivedData/アプリ名-xxx/Build/Products/Debug-iphoneos/アプリ名.app
     ```

### Androidデバイスの場合

1. **デバイスのUDID**:
   - Macでデバイスを接続した状態で以下のコマンドを実行：
   ```zsh
   adb devices
   ```
   - このコマンドで接続されているデバイスのシリアル番号（UDID）が表示されます

2. **デバイス名**:
   - 以下のコマンドで詳細な情報を取得できます：
   ```zsh
   adb shell getprop ro.product.model
   ```
   - または、端末の「設定」→「端末情報」で確認できるモデル名

3. **アプリのパス**:
   - `.apk`ファイルの場合：ビルドされたapkファイルの絶対パス
   - インストール済みアプリのパッケージ名を確認する場合：
   ```zsh
   adb shell pm list packages | grep アプリ名
   ```

### 注意点

1. iOSデバイスの場合：
   - デバイスが開発用に登録されている必要があります
   - Xcodeで一度デバイスを認識させておく必要があります

2. Androidデバイスの場合：
   - USBデバッグを有効にする必要があります
   - デバイスドライバーが正しくインストールされている必要があります

### Desired Capabilities の設定例

```json
// iOSの場合
{
  "platformName": "iOS",
  "automationName": "XCUITest",
  "deviceName": "取得したデバイス名",
  "udid": "取得したUDID",
  "app": "アプリの絶対パス"
}

// Androidの場合
{
  "platformName": "Android",
  "automationName": "UiAutomator2",
  "deviceName": "取得したデバイス名",
  "udid": "取得したUDID",
  "app": "アプリの絶対パス"
}
```

## SDKをインストールするディレクトリを作成
mkdir ~/android-sdk
cd ~/android-sdk

# コマンドラインツールをダウンロード
wget https://dl.google.com/android/repository/commandlinetools-linux-latest.zip

# 解凍
unzip commandlinetools-linux-latest.zip
