import React from 'react'
import { Mail, Github, Linkedin, Twitter, MapPin, Calendar, Code, Coffee, Heart } from 'lucide-react'

/**
 * 关于页面组件
 * 展示个人信息、技能、经历和联系方式
 */
function About() {
  // 技能数据
  const skills = [
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'CSS/Tailwind', level: 88, color: 'bg-purple-500' },
    { name: 'Python', level: 75, color: 'bg-green-600' },
    { name: 'Git', level: 85, color: 'bg-orange-500' },
    { name: 'Docker', level: 70, color: 'bg-blue-400' }
  ]

  // 经历时间线数据
  const timeline = [
    {
      year: '2024',
      title: '高级前端工程师',
      company: '科技创新公司',
      description: '负责大型 React 应用的架构设计和开发，带领团队完成多个重要项目。',
      type: 'work'
    },
    {
      year: '2023',
      title: '开始技术博客写作',
      company: '个人项目',
      description: '开始在个人博客分享技术心得，累计发布文章 50+ 篇，获得广泛关注。',
      type: 'project'
    },
    {
      year: '2022',
      title: '前端工程师',
      company: '互联网公司',
      description: '参与多个 Web 应用的开发，积累了丰富的前端开发经验。',
      type: 'work'
    },
    {
      year: '2021',
      title: '计算机科学学士',
      company: '知名大学',
      description: '主修计算机科学与技术，专注于 Web 开发和软件工程。',
      type: 'education'
    }
  ]

  // 兴趣爱好数据
  const interests = [
    { name: '编程', icon: '💻', description: '热爱编程，享受解决问题的过程' },
    { name: '阅读', icon: '📚', description: '喜欢阅读技术书籍和科幻小说' },
    { name: '摄影', icon: '📷', description: '用镜头记录生活中的美好瞬间' },
    { name: '旅行', icon: '✈️', description: '探索世界，体验不同的文化' },
    { name: '音乐', icon: '🎵', description: '听音乐放松，偶尔弹弹吉他' },
    { name: '运动', icon: '🏃', description: '保持健康的生活方式' }
  ]

  // 统计数据
  const stats = [
    { label: '博客文章', value: '50+', icon: '📝' },
    { label: '开源项目', value: '15+', icon: '🚀' },
    { label: '工作经验', value: '3年', icon: '💼' },
    { label: 'GitHub Stars', value: '500+', icon: '⭐' }
  ]

  /**
   * 技能条组件
   */
  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  /**
   * 时间线项目组件
   */
  const TimelineItem = ({ item, index }) => {
    const getTypeColor = (type) => {
      switch (type) {
        case 'work': return 'bg-blue-500'
        case 'education': return 'bg-green-500'
        case 'project': return 'bg-purple-500'
        default: return 'bg-gray-500'
      }
    }

    return (
      <div className="relative flex items-start space-x-4 pb-8">
        {/* 时间线 */}
        <div className="flex flex-col items-center">
          <div className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} border-4 border-white shadow-lg z-10`}></div>
          {index < timeline.length - 1 && (
            <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>
          )}
        </div>
        
        {/* 内容 */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {item.year}
            </span>
          </div>
          <p className="text-blue-600 font-medium mb-2">{item.company}</p>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 个人介绍区域 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <h1 className="text-3xl font-bold mb-2">张三</h1>
                <p className="text-xl opacity-90">全栈开发工程师 & 技术博主</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 基本信息 */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我</h2>
                <div className="prose prose-lg text-gray-600 mb-6">
                  <p>
                    你好！我是张三，一名充满热情的全栈开发工程师。我专注于现代 Web 技术，
                    特别是 React、Node.js 和云原生技术。我相信技术的力量可以改变世界，
                    并致力于通过代码创造有价值的产品。
                  </p>
                  <p>
                    在过去的几年里，我参与了多个大型项目的开发，从前端用户界面到后端 API 设计，
                    再到云基础设施的搭建。我喜欢学习新技术，分享知识，并与开发者社区保持紧密联系。
                  </p>
                  <p>
                    除了编程，我还热爱写作。通过这个博客，我分享我的技术心得、项目经验和对行业趋势的思考。
                    希望我的文章能够帮助到更多的开发者朋友。
                  </p>
                </div>
              </div>
              
              {/* 联系信息 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">联系方式</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>北京，中国</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>加入于 2021年</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <a href="mailto:hello@example.com" className="text-blue-600 hover:text-blue-700">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                {/* 社交媒体链接 */}
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">社交媒体</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                    </a>
                    <a
                      href="https://twitter.com"
                      className="p-3 bg-sky-100 rounded-lg hover:bg-sky-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-sky-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* 技能展示 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">技能专长</h2>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillBar skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* 兴趣爱好 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">兴趣爱好</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.name}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{interest.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{interest.name}</h3>
                  <p className="text-sm text-gray-600">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 经历时间线 */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-8">
            <Calendar className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">我的经历</h2>
          </div>
          <div className="relative">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <TimelineItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* 联系我区域 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mt-12 text-center text-white">
          <Coffee className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">让我们一起聊聊</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            如果你对我的文章感兴趣，或者想要讨论技术问题，欢迎随时联系我。
            我很乐意与志同道合的朋友交流学习！
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            发送邮件
          </a>
        </div>
      </div>
    </div>
  )
}

export default About