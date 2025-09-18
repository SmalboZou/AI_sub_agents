import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Tag, Search, Filter } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'

/**
 * 标签页面组件
 * 显示标签云和对应标签的文章列表
 */
function Tags() {
  const { name: selectedTag } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name') // name, count, recent
  const [filteredTags, setFilteredTags] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  // 模拟标签数据
  const allTags = [
    { name: 'React', count: 15, color: 'bg-blue-100 text-blue-700' },
    { name: 'JavaScript', count: 23, color: 'bg-yellow-100 text-yellow-700' },
    { name: '前端', count: 18, color: 'bg-green-100 text-green-700' },
    { name: 'CSS', count: 12, color: 'bg-purple-100 text-purple-700' },
    { name: 'Node.js', count: 8, color: 'bg-emerald-100 text-emerald-700' },
    { name: '性能优化', count: 6, color: 'bg-red-100 text-red-700' },
    { name: 'Tailwind CSS', count: 9, color: 'bg-cyan-100 text-cyan-700' },
    { name: '架构', count: 5, color: 'bg-indigo-100 text-indigo-700' },
    { name: 'Git', count: 7, color: 'bg-orange-100 text-orange-700' },
    { name: '工具', count: 11, color: 'bg-pink-100 text-pink-700' },
    { name: 'TypeScript', count: 10, color: 'bg-blue-100 text-blue-700' },
    { name: 'Vue.js', count: 4, color: 'bg-green-100 text-green-700' },
    { name: '微服务', count: 3, color: 'bg-gray-100 text-gray-700' },
    { name: '团队协作', count: 6, color: 'bg-teal-100 text-teal-700' },
    { name: 'DevOps', count: 5, color: 'bg-violet-100 text-violet-700' }
  ]

  // 模拟文章数据
  const allArticles = [
    {
      id: 1,
      title: 'React 18 新特性详解：并发渲染与自动批处理',
      excerpt: '深入了解 React 18 带来的革命性变化，包括并发渲染、自动批处理、Suspense 改进等新特性。',
      category: '前端开发',
      tags: ['React', 'JavaScript', '前端'],
      publishDate: '2024-01-15',
      readTime: '8 分钟',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Tailwind CSS 最佳实践：构建可维护的样式系统',
      excerpt: '分享使用 Tailwind CSS 构建大型项目的经验，包括组件设计模式、自定义配置等。',
      category: 'CSS',
      tags: ['Tailwind CSS', 'CSS', '前端'],
      publishDate: '2024-01-12',
      readTime: '6 分钟',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'JavaScript 性能优化实战指南',
      excerpt: '从内存管理、代码分割、懒加载等多个维度，全面介绍 JavaScript 性能优化的策略。',
      category: 'JavaScript',
      tags: ['JavaScript', '性能优化', '前端'],
      publishDate: '2024-01-10',
      readTime: '10 分钟',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Node.js 微服务架构设计与实践',
      excerpt: '探讨如何使用 Node.js 构建可扩展的微服务架构，包括服务拆分、通信机制等。',
      category: '后端开发',
      tags: ['Node.js', '微服务', '架构'],
      publishDate: '2024-01-08',
      readTime: '12 分钟',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Git 工作流最佳实践：团队协作指南',
      excerpt: '介绍 Git Flow、GitHub Flow 等工作流模式，以及如何在团队中建立高效的代码协作流程。',
      category: '工具',
      tags: ['Git', '团队协作', '工具'],
      publishDate: '2024-01-05',
      readTime: '7 分钟',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'TypeScript 进阶技巧：类型体操与实战应用',
      excerpt: '深入探讨 TypeScript 的高级类型特性，包括条件类型、映射类型等实用技巧。',
      category: '前端开发',
      tags: ['TypeScript', 'JavaScript', '前端'],
      publishDate: '2024-01-03',
      readTime: '9 分钟',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
    }
  ]

  /**
   * 根据搜索词和排序方式过滤标签
   */
  useEffect(() => {
    let filtered = allTags.filter(tag => 
      tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // 排序
    switch (sortBy) {
      case 'count':
        filtered.sort((a, b) => b.count - a.count)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    setFilteredTags(filtered)
  }, [searchTerm, sortBy])

  /**
   * 根据选中的标签过滤文章
   */
  useEffect(() => {
    if (selectedTag) {
      const filtered = allArticles.filter(article => 
        article.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      )
      setFilteredArticles(filtered)
    } else {
      setFilteredArticles(allArticles)
    }
  }, [selectedTag])

  /**
   * 获取标签的字体大小（基于文章数量）
   */
  const getTagSize = (count) => {
    const maxCount = Math.max(...allTags.map(tag => tag.count))
    const minSize = 0.8
    const maxSize = 2
    const size = minSize + (count / maxCount) * (maxSize - minSize)
    return `${size}rem`
  }

  /**
   * 清除标签选择
   */
  const clearTagSelection = () => {
    window.history.pushState({}, '', '/tags')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {selectedTag ? `标签: ${selectedTag}` : '所有标签'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {selectedTag 
              ? `浏览所有关于 "${selectedTag}" 的文章` 
              : '通过标签快速找到你感兴趣的文章内容'
            }
          </p>
        </div>

        {/* 如果选中了标签，显示清除按钮 */}
        {selectedTag && (
          <div className="mb-8 text-center">
            <button
              onClick={clearTagSelection}
              className="btn-secondary inline-flex items-center"
            >
              <Tag className="w-4 h-4 mr-2" />
              查看所有标签
            </button>
          </div>
        )}

        {/* 如果没有选中标签，显示标签云 */}
        {!selectedTag && (
          <div className="mb-12">
            {/* 搜索和排序控件 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* 搜索框 */}
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="搜索标签..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field w-full pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>

                {/* 排序选择 */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Filter className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">排序:</span>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="input-field text-sm"
                  >
                    <option value="name">按名称</option>
                    <option value="count">按文章数量</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 标签云 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                标签云
              </h2>
              
              {filteredTags.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-3">
                  {filteredTags.map((tag) => (
                    <Link
                      key={tag.name}
                      to={`/tag/${encodeURIComponent(tag.name)}`}
                      className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 ${tag.color}`}
                      style={{ fontSize: getTagSize(tag.count) }}
                    >
                      <Tag className="w-4 h-4 mr-2" />
                      {tag.name}
                      <span className="ml-2 text-xs opacity-75">
                        ({tag.count})
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">没有找到匹配的标签</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 文章列表 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedTag ? `"${selectedTag}" 相关文章` : '最新文章'}
              <span className="text-lg text-gray-500 ml-2">
                ({filteredArticles.length})
              </span>
            </h2>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  暂无相关文章
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedTag 
                    ? `还没有关于 "${selectedTag}" 的文章，敬请期待！` 
                    : '还没有发布任何文章，敬请期待！'
                  }
                </p>
                <Link
                  to="/"
                  className="btn-primary"
                >
                  返回首页
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 标签统计信息 */}
        {!selectedTag && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              标签统计
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {allTags.length}
                </div>
                <div className="text-sm text-gray-600">总标签数</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {allArticles.length}
                </div>
                <div className="text-sm text-gray-600">总文章数</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {Math.max(...allTags.map(tag => tag.count))}
                </div>
                <div className="text-sm text-gray-600">最多文章标签</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {(allTags.reduce((sum, tag) => sum + tag.count, 0) / allTags.length).toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">平均文章数</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tags