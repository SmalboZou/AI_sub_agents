import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Github, Twitter, Mail } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'

/**
 * 首页组件
 * 包含英雄区域、最新文章列表和热门文章推荐
 */
function Home() {
  // 模拟文章数据
  const latestArticles = [
    {
      id: 1,
      title: 'React 18 新特性详解：并发渲染与自动批处理',
      excerpt: '深入了解 React 18 带来的革命性变化，包括并发渲染、自动批处理、Suspense 改进等新特性，以及如何在项目中应用这些特性。',
      category: '前端开发',
      tags: ['React', 'JavaScript', '前端'],
      publishDate: '2024-01-15',
      readTime: '8 分钟',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Tailwind CSS 最佳实践：构建可维护的样式系统',
      excerpt: '分享使用 Tailwind CSS 构建大型项目的经验，包括组件设计模式、自定义配置、性能优化等实用技巧。',
      category: 'CSS',
      tags: ['Tailwind CSS', 'CSS', '样式'],
      publishDate: '2024-01-12',
      readTime: '6 分钟',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'JavaScript 性能优化实战指南',
      excerpt: '从内存管理、代码分割、懒加载等多个维度，全面介绍 JavaScript 性能优化的策略和实践方法。',
      category: 'JavaScript',
      tags: ['JavaScript', '性能优化', '前端'],
      publishDate: '2024-01-10',
      readTime: '10 分钟',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Node.js 微服务架构设计与实践',
      excerpt: '探讨如何使用 Node.js 构建可扩展的微服务架构，包括服务拆分、通信机制、监控和部署策略。',
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
    }
  ]

  // 热门文章数据
  const popularArticles = [
    {
      id: 1,
      title: 'React 18 新特性详解：并发渲染与自动批处理',
      publishDate: '2024-01-15',
      readTime: '8 分钟',
      views: 1250
    },
    {
      id: 3,
      title: 'JavaScript 性能优化实战指南',
      publishDate: '2024-01-10',
      readTime: '10 分钟',
      views: 980
    },
    {
      id: 4,
      title: 'Node.js 微服务架构设计与实践',
      publishDate: '2024-01-08',
      readTime: '12 分钟',
      views: 756
    }
  ]

  // 社交媒体链接
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your-email@example.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            {/* 头像 */}
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="博主头像"
                className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white"
              />
            </div>
            
            {/* 个人信息 */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              你好，我是 <span className="text-gradient">张三</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              一名热爱技术的前端开发工程师，专注于 React、JavaScript 和现代 Web 开发。
              在这里分享我的技术心得、项目经验和生活感悟。
            </p>
            
            {/* 社交媒体链接 */}
            <div className="flex justify-center space-x-6 mb-12">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-full shadow-md text-gray-600 ${social.color} transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
            
            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="btn-primary inline-flex items-center justify-center"
              >
                了解更多
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/tags"
                className="btn-secondary inline-flex items-center justify-center"
              >
                浏览文章
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新文章区域 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最新文章
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              分享最新的技术心得和项目经验
            </p>
          </div>
          
          {/* 文章网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <div
                key={article.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
          
          {/* 查看更多按钮 */}
          <div className="text-center mt-12">
            <Link
              to="/tags"
              className="btn-text inline-flex items-center text-lg"
            >
              查看所有文章
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 热门文章区域 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              热门文章
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              读者最喜爱的精选内容
            </p>
          </div>
          
          {/* 热门文章列表 */}
          <div className="max-w-4xl mx-auto space-y-6">
            {popularArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.publishDate}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {article.views} 次阅读
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 ml-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home