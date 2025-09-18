import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react'

/**
 * 文章详情页组件
 * 显示完整的文章内容，包括标题、内容、目录导航和相关文章
 */
function Article() {
  const { id } = useParams()
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  // 模拟文章数据
  const article = {
    id: parseInt(id),
    title: 'React 18 新特性详解：并发渲染与自动批处理',
    content: `
# React 18 新特性详解：并发渲染与自动批处理

React 18 是 React 历史上最重要的版本之一，它引入了许多革命性的新特性，特别是并发渲染（Concurrent Rendering）和自动批处理（Automatic Batching）。本文将深入探讨这些新特性的原理和应用。

## 什么是并发渲染

并发渲染是 React 18 的核心特性之一。它允许 React 在渲染过程中被中断，从而让浏览器有机会处理其他任务，如用户输入、动画等。这大大提升了应用的响应性。

### 并发渲染的优势

1. **更好的用户体验**：用户交互不会被长时间的渲染任务阻塞
2. **更流畅的动画**：动画可以在渲染过程中继续执行
3. **更快的感知性能**：用户能更快地看到页面更新

\`\`\`javascript
// 启用并发渲染
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
\`\`\`

## 自动批处理

在 React 18 之前，只有在 React 事件处理器中的状态更新才会被批处理。现在，所有的状态更新都会被自动批处理，包括 Promise、setTimeout 和原生事件处理器中的更新。

### 批处理示例

\`\`\`javascript
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    // React 18 中，这些更新会被批处理
    setCount(c => c + 1);
    setFlag(f => !f);
    // 只会触发一次重新渲染
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
\`\`\`

## Suspense 的改进

React 18 对 Suspense 进行了重大改进，现在它可以更好地处理服务端渲染和并发特性。

### 新的 Suspense 特性

- **更好的 SSR 支持**：支持流式 SSR
- **并发特性集成**：与 startTransition 等 API 完美配合
- **更稳定的行为**：减少了意外的 fallback 显示

## startTransition API

\`startTransition\` 是一个新的 API，用于标记非紧急的状态更新。这些更新可以被中断，让更重要的更新优先执行。

\`\`\`javascript
import { startTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
    
    // 标记为非紧急更新
    startTransition(() => {
      setList(generateList(e.target.value));
    });
  }

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <div>Loading...</div>}
      <List items={list} />
    </div>
  );
}
\`\`\`

## 迁移指南

### 升级到 React 18

1. **更新依赖**：
   \`\`\`bash
   npm install react@18 react-dom@18
   \`\`\`

2. **更新渲染方式**：
   \`\`\`javascript
   // 旧方式
   import ReactDOM from 'react-dom';
   ReactDOM.render(<App />, document.getElementById('root'));
   
   // 新方式
   import { createRoot } from 'react-dom/client';
   const root = createRoot(document.getElementById('root'));
   root.render(<App />);
   \`\`\`

3. **处理 StrictMode 变化**：React 18 的 StrictMode 会双重调用某些函数来帮助发现副作用。

## 性能优化建议

### 使用 useMemo 和 useCallback

在并发渲染环境下，合理使用 \`useMemo\` 和 \`useCallback\` 变得更加重要：

\`\`\`javascript
function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(data);
  }, [data]);

  const handleClick = useCallback(() => {
    // 处理点击事件
  }, []);

  return (
    <div onClick={handleClick}>
      {expensiveValue}
    </div>
  );
}
\`\`\`

### 合理使用 startTransition

不是所有的状态更新都需要使用 \`startTransition\`。只有那些不需要立即响应的更新才应该被标记为 transition。

## 总结

React 18 带来的新特性为我们提供了更好的性能和用户体验。并发渲染让应用更加响应，自动批处理减少了不必要的重新渲染，而新的 API 如 \`startTransition\` 给了我们更精细的控制能力。

在升级到 React 18 时，大部分应用都能平滑过渡，但建议仔细测试并逐步采用新特性。记住，性能优化是一个持续的过程，需要根据具体的应用场景来选择合适的策略。
    `,
    category: '前端开发',
    tags: ['React', 'JavaScript', '前端', '性能优化'],
    publishDate: '2024-01-15',
    readTime: '8 分钟',
    author: '张三',
    views: 1250
  }

  // 文章目录
  const tableOfContents = [
    { id: 'concurrent-rendering', title: '什么是并发渲染', level: 2 },
    { id: 'concurrent-advantages', title: '并发渲染的优势', level: 3 },
    { id: 'automatic-batching', title: '自动批处理', level: 2 },
    { id: 'batching-example', title: '批处理示例', level: 3 },
    { id: 'suspense-improvements', title: 'Suspense 的改进', level: 2 },
    { id: 'suspense-features', title: '新的 Suspense 特性', level: 3 },
    { id: 'start-transition', title: 'startTransition API', level: 2 },
    { id: 'migration-guide', title: '迁移指南', level: 2 },
    { id: 'performance-tips', title: '性能优化建议', level: 2 },
    { id: 'conclusion', title: '总结', level: 2 }
  ]

  // 相关文章
  const relatedArticles = [
    {
      id: 2,
      title: 'Tailwind CSS 最佳实践：构建可维护的样式系统',
      publishDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'JavaScript 性能优化实战指南',
      publishDate: '2024-01-10'
    },
    {
      id: 4,
      title: 'Node.js 微服务架构设计与实践',
      publishDate: '2024-01-08'
    }
  ]

  /**
   * 计算阅读进度
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * 处理分享功能
   */
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.title,
          url: window.location.href
        })
      } catch (error) {
        console.log('分享失败:', error)
      }
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href)
      alert('链接已复制到剪贴板')
    }
  }

  /**
   * 格式化日期
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 阅读进度条 */}
      <div 
        className="progress-bar"
        style={{ width: `${readingProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 文章目录 - 桌面端侧边栏 */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  文章目录
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm transition-colors duration-200 ${
                        item.level === 2 ? 'font-medium text-gray-900' : 'text-gray-600 ml-4'
                      } hover:text-blue-600`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* 主要内容区域 */}
          <main className="flex-1 max-w-4xl">
            {/* 返回按钮 */}
            <div className="mb-6">
              <Link
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首页
              </Link>
            </div>

            {/* 文章头部 */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              {/* 文章元信息 */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={article.publishDate}>
                    {formatDate(article.publishDate)}
                  </time>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                
                <div className="text-blue-600 font-medium">
                  {article.views} 次阅读
                </div>
                
                <button
                  onClick={handleShare}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  分享
                </button>
              </div>
              
              {/* 分类和标签 */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/category/${encodeURIComponent(article.category)}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  {article.category}
                </Link>
                
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/tag/${encodeURIComponent(tag)}`}
                      className="tag flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </header>

            {/* 文章内容 */}
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }}
              />
            </article>

            {/* 文章底部 */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              {/* 分享按钮 */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={handleShare}
                  className="btn-primary flex items-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  分享这篇文章
                </button>
              </div>
              
              {/* 相关文章 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  相关文章
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/article/${relatedArticle.id}`}
                      className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {formatDate(relatedArticle.publishDate)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Article