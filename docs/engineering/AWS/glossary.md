---
sidebar_position: 1
---

import GlossaryList from '@site/src/components/GlossaryList';

# AWS用語集

このページではAWSに関連する用語を五十音順とアルファベット順で整理しています。

<GlossaryList
  terms={[
    {
      term: "アベイラビリティーゾーン",
      reading: "あべいらびりてぃーぞーん",
      description: "AWSのデータセンターが存在する物理的な場所のこと。各リージョンには複数のアベイラビリティーゾーンが存在し、障害対策のために使用されます。"
    },
    {
      term: "セキュリティグループ",
      reading: "せきゅりてぃぐるーぷ",
      description: "AWSリソースに対する仮想ファイアウォール。インバウンドとアウトバウンドのトラフィックを制御するためのルールを設定できます。"
    },
    {
      term: "リージョン",
      reading: "りーじょん",
      description: "AWSのサービスを提供している地理的なロケーション。複数のアベイラビリティーゾーンで構成されています。"
    },
    {
      term: "インスタンス",
      reading: "いんすたんす",
      description: "AWSクラウド上で実行される仮想サーバーのこと。EC2インスタンスが代表的で、様々なスペックや用途に応じて選択できます。"
    },
    {
      term: "Elastic IP",
      reading: "Elastic IP",
      description: "AWSが提供する固定のパブリックIPアドレス。インスタンスの再起動後も同じIPアドレスを維持できます。"
    },
    {
      term: "CloudWatch",
      reading: "CloudWatch",
      description: "AWSリソースのモニタリングサービス。メトリクスの収集、ログの管理、アラームの設定などが可能です。"
    }
  ]}
/> 

{/* 
  サンプル用コメント
  {
    term: "sample",
    reading: "sample",
    description: "サンプル用文章です。"
  }
*/} 