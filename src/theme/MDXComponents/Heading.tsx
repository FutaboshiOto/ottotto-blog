import React, {type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/MDXComponents/Heading';
import Advertisement from '../../components/Advertisement';

// 見出しのカウントを管理するための変数
let headingCount = 0;
const AD_INTERVAL = 3; // 3つの見出しごとに広告を表示

export default function MDXHeading(props: Props): ReactNode {
  // h1, h2, h3の場合にカウントを増やす
  if (props.as === 'h1' || props.as === 'h2' || props.as === 'h3') {
    headingCount++;
  }

  // 広告を表示するかどうかの判定
  const shouldShowAd = (props.as === 'h1' || props.as === 'h2' || props.as === 'h3') && 
    headingCount % AD_INTERVAL === 0;
  
  return( 
    <>
      {shouldShowAd && <Advertisement />}
      <Heading {...props} />
    </>
  );
}
