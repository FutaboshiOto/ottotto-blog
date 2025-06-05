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
      term: "AWS Lambda",
      reading: "AWS Lambda",
      description: "サーバーレスでコードを実行できるコンピューティングサービス。イベント駆動型の処理に適しています。"
    },
    {
      term: "リージョン",
      reading: "りーじょん",
      description: "AWSのサービスを提供している地理的なロケーション。複数のアベイラビリティーゾーンで構成されています。"
    }
  ]}
/> 