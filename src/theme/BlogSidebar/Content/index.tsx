import React, {memo, type ReactNode} from 'react';
import {groupBy, useThemeConfig} from '@docusaurus/theme-common';
// 変更前のインポート
// import {groupBlogSidebarItemsByYear} from '@docusaurus/plugin-content-blog/client';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogSidebar/Content';
import type {BlogSidebarItem} from "@docusaurus/plugin-content-blog";

function BlogSidebarMonthGroup({
  month,
  monthGroupHeadingClassName,
  children,
}: {
  month: string;
  monthGroupHeadingClassName?: string;
  children: ReactNode;
}) {
  return (
    <div role="group">
      <Heading as="h3" className={monthGroupHeadingClassName}>
        {month}
      </Heading>
      {children}
    </div>
  );
}

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: Props): ReactNode {
  const themeConfig = useThemeConfig();
  if (themeConfig.blog.sidebar.groupByYear) {
    const itemsByMonth = groupBlogSidebarItemsByMonth(items);
    return (
      <>
        {itemsByMonth.map(([month, monthItems]) => (
          <BlogSidebarMonthGroup
            key={month}
            month={month}
            monthGroupHeadingClassName={yearGroupHeadingClassName}>
            <ListComponent items={monthItems} />
          </BlogSidebarMonthGroup>
        ))}
      </>
    );
  } else {
    return <ListComponent items={items} />;
  }
}

// 月ごとにグループ化するメソッドの作成
export function groupBlogSidebarItemsByMonth(
  items: BlogSidebarItem[],
): [string, BlogSidebarItem[]][] {
  const groupedByMonth = groupBy(items, (item) => {
    const date = new Date(item.date)
    const year = date.getFullYear()
    const month = date.getMonth()+1
    return `${year}-${('0'+month).slice(-2)}`;
  });
  // "as" is safe here
  // see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
  const entries = Object.entries(groupedByMonth) as [
    string,
    BlogSidebarItem[],
  ][];
  // We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
  // Objects with string/number keys are automatically sorted asc...
  // Even if keys are strings like "2024"
  // We want descending order for years
  // Alternative: using Map.groupBy (not affected by this "reordering")
  entries.reverse();
  return entries;
}

export default memo(BlogSidebarContent);
