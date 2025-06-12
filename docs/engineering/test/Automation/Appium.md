# Appiumを用いたモバイルアプリケーションのテスト自動化

## Appiumとは
Appiumは、モバイルアプリケーション（iOS/Android）のテスト自動化を実現するオープンソースのツールです。WebDriverプロトコルを使用し、ネイティブアプリ、ハイブリッドアプリ、モバイルWebアプリケーションのテストを可能にします。
#test #Automation

## セットアップ手順

### 前提条件
- Node.js（最新の安定版）
- Java Development Kit (JDK)
- Android Studio（Androidテスト用）
- Xcode（iOSテスト用）
- Appium Server
- Appium Inspector

### インストール手順

```bash
# Appiumのインストール
npm install -g appium

# Appium Doctorのインストール（環境チェック用）
npm install -g appium-doctor

# ドライバーのインストール
appium driver install xcuitest    # iOS用
appium driver install uiautomator2 # Android用
```

## 基本的な使用方法

### Python用のサンプルコード

```python
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy

# Desired Capabilities の設定
caps = {
    'platformName': 'iOS',  # または 'Android'
    'platformVersion': '15.0',  # プラットフォームのバージョン
    'deviceName': 'iPhone 13',  # デバイス名
    'automationName': 'XCUITest',  # iOS用。Androidの場合は 'UiAutomator2'
    'app': '/path/to/your/app.app'  # アプリケーションのパス
}

# Appiumサーバーに接続
driver = webdriver.Remote('http://localhost:4723/wd/hub', caps)

# テスト例
try:
    # 要素の検索と操作
    login_button = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value='login_button')
    login_button.click()
    
    # テキスト入力
    username_field = driver.find_element(by=AppiumBy.CLASS_NAME, value='XCUIElementTypeTextField')
    username_field.send_keys('testuser')
    
finally:
    driver.quit()
```

## ベストプラクティス

1. **要素の特定**
   - アクセシビリティIDを優先的に使用
   - XPathは最後の手段として使用
   - 一意の識別子を使用

2. **待機戦略**
   - 明示的待機を使用
   - 暗黙的待機は適切に設定

3. **テストの構造化**
   - Page Object Modelパターンの採用
   - テストデータの外部化
   - 再利用可能なヘルパー関数の作成

## よくある問題とその解決方法

1. **接続の問題**
   - Appiumサーバーが起動していることを確認
   - ポート番号の競合をチェック
   - デバイスの接続状態を確認

2. **要素の特定の失敗**
   - Appium Inspectorを使用して要素を確認
   - 待機時間の調整
   - 要素の可視性の確認

3. **パフォーマンスの問題**
   - テストの並列実行
   - リソースの適切な解放
   - キャッシュの活用

## CI/CD統合

### Jenkins統合の例
```yaml
pipeline {
    agent any
    stages {
        stage('Setup') {
            steps {
                sh 'npm install -g appium'
                sh 'appium &'
            }
        }
        stage('Test') {
            steps {
                sh 'python -m pytest tests/'
            }
        }
    }
}
```

## 参考リンク
- [Appium公式ドキュメント](http://appium.io/docs/en/2.0/)
- [Appium GitHub](https://github.com/appium/appium)
- [Appium Pro](https://appiumpro.com/)

## ローカルデバイスでのテスト実行

### iOS実機でのテスト実行
1. **デバイスの準備**
   - デバイスをMacに接続
   - デバイスの開発者モードを有効化
   - デバイスのUDIDを取得（Xcodeのデバイス管理から確認可能）

2. **WebDriverAgentの設定**
   ```bash
   # WebDriverAgentのセットアップ
   cd /usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent
   mkdir -p Resources/WebDriverAgent.bundle
   ./Scripts/bootstrap.sh -d
   ```

3. **実行時の設定例**
   ```python
   caps = {
       'platformName': 'iOS',
       'platformVersion': '15.0',  # デバイスのiOSバージョン
       'deviceName': 'iPhone',
       'udid': 'あなたのデバイスのUDID',
       'automationName': 'XCUITest',
       'app': '/path/to/your/app.app',
       'xcodeOrgId': 'あなたのTeam ID',
       'xcodeSigningId': 'iPhone Developer'
   }
   ```

### Android実機でのテスト実行
1. **デバイスの準備**
   - USBデバッグを有効化（設定 > 開発者オプション）
   - デバイスをPCに接続し、USBデバッグを許可
   ```bash
   # デバイスが認識されているか確認
   adb devices
   ```

2. **環境変数の設定**
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

3. **実行時の設定例**
   ```python
   caps = {
       'platformName': 'Android',
       'deviceName': 'Android Device',
       'automationName': 'UiAutomator2',
       'app': '/path/to/your/app.apk',
       'noReset': True,  # アプリデータを保持
       'autoGrantPermissions': True  # 権限を自動で許可
   }
   ```

### デバイス固有の注意点

1. **iOS実機テスト時の注意**
   - 有効な開発者証明書が必要
   - WebDriverAgentは実機用に署名が必要
   - プロビジョニングプロファイルの設定確認
   ```bash
   # WebDriverAgentの署名確認
   xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=<device-udid>' test
   ```

2. **Android実機テスト時の注意**
   - メーカー固有の設定確認
   - USB接続モードをファイル転送に設定
   - adbの接続状態確認
   ```bash
   # デバイスの詳細情報確認
   adb shell getprop
   
   # アプリのインストール確認
   adb shell pm list packages | grep <package-name>
   ```

### デバッグとトラブルシューティング

1. **ログの取得**
   ```python
   # Appiumサーバーログの詳細設定
   caps['printPageSourceOnFindFailure'] = True
   caps['eventTimings'] = True
   ```

2. **デバイス情報の取得**
   ```python
   # デバイスの詳細情報を取得
   device_info = driver.get_device_info()
   print(device_info)
   
   # 現在の画面の階層構造を取得
   page_source = driver.page_source
   print(page_source)
   ```

3. **スクリーンショットの取得**
   ```python
   def take_screenshot_on_failure(func):
       def wrapper(*args, **kwargs):
           try:
               return func(*args, **kwargs)
           except Exception as e:
               driver.get_screenshot_as_file(f"error_{func.__name__}.png")
               raise e
       return wrapper
   ```
