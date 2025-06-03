import React, {type ReactElement} from 'react';
import OriginalHeading from '@theme/Heading';
import type {Props} from '@theme/Heading';
import Advertisement from '@site/src/components/Advertisement';

export default function Heading(props: Props): ReactElement {
  // h1とh2の上にのみ広告を表示する
  const shouldShowAd = props.as === 'h1' || props.as === 'h2';

  return (
    <>
      {shouldShowAd && <Advertisement />}
      <OriginalHeading {...props} />
    </>
  );
} 