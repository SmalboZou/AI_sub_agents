import React from 'react'
import { Heart, Github, Twitter, Mail } from 'lucide-react'

/**
 * 页面底部组件
 * 包含版权信息、社交媒体链接和额外信息
 */
function Footer() {
  const currentYear = new Date().getFullYear()

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

  // 快速链接
  const quickLinks = [
    { name: '首页', url: '/' },
    { name: '标签', url: '/tags' },
    { name: '关于', url: '/about' },
    { name: 'RSS', url: '/rss.xml' }
  ]

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 博客信息 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">个人博客</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              分享技术心得与生活感悟，记录成长路上的点点滴滴。
              欢迎交流学习，共同进步。
            </p>
            
            {/* 社交媒体链接 */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 最新文章或其他信息 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">技术栈</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="tag text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="text-sm text-gray-600">
              <p>Built with ❤️ using React & Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>© {currentYear} 个人博客.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by 博客作者</span>
            </div>

            {/* 额外信息 */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a 
                href="/privacy" 
                className="hover:text-gray-900 transition-colors duration-200"
              >
                隐私政策
              </a>
              <a 
                href="/terms" 
                className="hover:text-gray-900 transition-colors duration-200"
              >
                使用条款
              </a>
              <span>ICP备案号</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer