import React, { Suspense } from "react";
import { Spin } from "antd"; // 可以使用任何加载指示器组件

/**
 * 创建异步加载组件
 * @param loader 动态导入函数，例如 () => import('./pages/Home')
 * @param fallback 加载时的占位组件，默认使用 Spin
 * @returns 包装后的异步组件
 */
export function lazyLoad<T extends React.ComponentType<any>>(
  loader: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  // 使用 React.lazy 处理动态导入
  const LazyComponent = React.lazy(loader);

  // 返回包含 Suspense 的组件，处理加载状态
  return (props: React.ComponentProps<T>) => (
    <Suspense
      fallback={
        fallback || (
          <Spin
            size="large"
            style={{ display: "block", margin: "20px auto" }}
          />
        )
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
}
