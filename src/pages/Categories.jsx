import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Folder, Grid, List, Search, Filter } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'

/**
 * 分类页面组件
 * 显示文章分类和对应分类的文章列表
 */
function Categories() {
  const { name: selectedCategory } = useParams()
  const [viewMode, setViewMode] = useState('grid') // grid, list
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name') // name, count, recent
  const [filteredCategories, setFilteredCategories] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  // 模拟分类数据
  const allCategories = [
    {
      name: '前端开发',
      description: '前端技术、框架和最佳实践',
      count: 25,
      color: 'bg-blue-500',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop'
    },
    {
      name: '后端开发',
      description: '服务器端技术和架构设计',
      count: 18,
      color: 'bg-green-500',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
    },
    {
      name: 'JavaScript',
      description: 'JavaScript 语言和生态系统',
      count: 32,
      color: 'bg-yellow-500',
      icon: '📜',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop'
    },
    {
      name: 'CSS',
      description: '样式设计和布局技巧',
      count: 15,
      color: 'bg-purple-500',
      icon: '🎭',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      name: '工具',
      description: '开发工具和效率提升',
      count: 12,
      color: 'bg-gray-500',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop'
    },
    {
      name: '架构设计',
      description: '系统架构和设计模式',
      count: 8,
      color: 'bg-indigo-500',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop'
    },
    {
      name: '性能优化',
      description: '性能分析和优化策略',
      count: 10,
      color: 'bg-red-500',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      name: '团队协作',
      description: '团队管理和协作方法',
      count: 6,
      color: 'bg-teal-500',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
    }
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
    },
    {
      id: 7,
      title: '现代 CSS 布局技术：Grid 与 Flexbox 实战',
      excerpt: '掌握 CSS Grid 和 Flexbox 的核心概念，学会构建复杂而灵活的网页布局。',
      category: 'CSS',
      tags: ['CSS', 'Grid', 'Flexbox'],
      publishDate: '2024-01-01',
      readTime: '8 分钟',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      id: 8,
      title: '系统架构设计原则与实践',
      excerpt: '从单体架构到微服务，探讨系统架构演进的原则和最佳实践。',
      category: '架构设计',
      tags: ['架构', '设计模式', '系统设计'],
      publishDate: '2023-12-28',
      readTime: '15 分钟',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop'
    }
  ]

  /**
   * 根据搜索词和排序方式过滤分类
   */
  useEffect(() => {
    let filtered = allCategories.filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
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

    setFilteredCategories(filtered)
  }, [searchTerm, sortBy])

  /**
   * 根据选中的分类过滤文章
   */
  useEffect(() => {
    if (selectedCategory) {
      const filtered = allArticles.filter(article => 
        article.category.toLowerCase() === selectedCategory.toLowerCase()
      )
      setFilteredArticles(filtered)
    } else {
      setFilteredArticles(allArticles)
    }
  }, [selectedCategory])

  /**
   * 清除分类选择
   */
  const clearCategorySelection = () => {
    window.history.pushState({}, '', '/categories')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  /**
   * 分类卡片组件
   */
  const CategoryCard = ({ category }) => (
    <Link
      to={`/category/${encodeURIComponent(category.name)}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">{category.icon}</div>
            <h3 className="text-xl font-bold">{category.name}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {category.count} 篇文章
          </span>
          <span className="text-blue-600 group-hover:text-blue-700 font-medium">
            查看更多 →
          </span>
        </div>
      </div>
    </Link>
  )

  /**
   * 分类列表项组件
   */
  const CategoryListItem = ({ category }) => (
    <Link
      to={`/category/${encodeURIComponent(category.name)}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 hover:bg-gray-50"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white text-xl`}>
          {category.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{category.count}</div>
          <div className="text-sm text-gray-500">篇文章</div>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {selectedCategory ? `分类: ${selectedCategory}` : '文章分类'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {selectedCategory 
              ? `浏览所有 "${selectedCategory}" 分类下的文章` 
              : '按主题分类浏览文章，快速找到你感兴趣的内容'
            }
          </p>
        </div>

        {/* 如果选中了分类，显示清除按钮 */}
        {selectedCategory && (
          <div className="mb-8 text-center">
            <button
              onClick={clearCategorySelection}
              className="btn-secondary inline-flex items-center"
            >
              <Folder className="w-4 h-4 mr-2" />
              查看所有分类
            </button>
          </div>
        )}

        {/* 如果没有选中分类，显示分类列表 */}
        {!selectedCategory && (
          <div className="mb-12">
            {/* 搜索和控制栏 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* 搜索框 */}
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="搜索分类..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field w-full pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>

                <div className="flex items-center space-x-4">
                  {/* 排序选择 */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input-field text-sm"
                    >
                      <option value="name">按名称</option>
                      <option value="count">按文章数量</option>
                    </select>
                  </div>

                  {/* 视图模式切换 */}
                  <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 分类展示 */}
            {filteredCategories.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-4'
              }>
                {filteredCategories.map((category, index) => (
                  <div
                    key={category.name}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {viewMode === 'grid' ? (
                      <CategoryCard category={category} />
                    ) : (
                      <CategoryListItem category={category} />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    没有找到匹配的分类
                  </h3>
                  <p className="text-gray-600">
                    尝试使用不同的关键词搜索
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 文章列表 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedCategory ? `"${selectedCategory}" 分类文章` : '最新文章'}
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
                <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  暂无相关文章
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedCategory 
                    ? `"${selectedCategory}" 分类下还没有文章，敬请期待！` 
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

        {/* 分类统计信息 */}
        {!selectedCategory && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              分类统计
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {allCategories.length}
                </div>
                <div className="text-sm text-gray-600">总分类数</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {allArticles.length}
                </div>
                <div className="text-sm text-gray-600">总文章数</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {Math.max(...allCategories.map(cat => cat.count))}
                </div>
                <div className="text-sm text-gray-600">最多文章分类</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {(allCategories.reduce((sum, cat) => sum + cat.count, 0) / allCategories.length).toFixed(1)}
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

export default Categories