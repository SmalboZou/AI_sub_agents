import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

/**
 * 文章卡片组件
 * 用于展示文章的基本信息，包括标题、摘要、分类、标签等
 * @param {Object} article - 文章数据对象
 */
function ArticleCard({ article }) {
  const {
    id,
    title,
    excerpt,
    category,
    tags = [],
    publishDate,
    readTime,
    image
  } = article

  /**
   * 格式化日期显示
   * @param {string} dateString - 日期字符串
   * @returns {string} 格式化后的日期
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
    <article className="article-card group">
      {/* 文章图片 */}
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <Link to={`/article/${id}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
          
          {/* 分类标签 */}
          {category && (
            <div className="absolute top-4 left-4">
              <Link
                to={`/category/${encodeURIComponent(category)}`}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                {category}
              </Link>
            </div>
          )}
        </div>
      )}
      
      {/* 文章内容 */}
      <div className="p-6">
        {/* 文章标题 */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link
            to={`/article/${id}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {title}
          </Link>
        </h3>
        
        {/* 文章摘要 */}
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        )}
        
        {/* 标签列表 */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                to={`/tag/${encodeURIComponent(tag)}`}
                className="tag text-xs"
              >
                #{tag}
              </Link>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500">
                +{tags.length - 3} 更多
              </span>
            )}
          </div>
        )}
        
        {/* 文章元信息 */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {/* 发布日期 */}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <time dateTime={publishDate}>
                {formatDate(publishDate)}
              </time>
            </div>
            
            {/* 阅读时间 */}
            {readTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
          
          {/* 阅读更多链接 */}
          <Link
            to={`/article/${id}`}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            阅读更多
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard