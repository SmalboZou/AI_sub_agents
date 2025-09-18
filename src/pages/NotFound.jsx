import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft } from 'lucide-react'

/**
 * 404 页面组件
 * 当用户访问不存在的页面时显示
 */
function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* 404 图标和数字 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        {/* 错误信息 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            页面未找到
          </h1>
          <p className="text-gray-600 mb-6">
            抱歉，您访问的页面不存在。可能是链接错误或页面已被移动。
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-4">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            返回首页
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回上一页
          </button>
        </div>

        {/* 建议链接 */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">您可能在寻找：</p>
          <div className="space-y-2">
            <Link
              to="/categories"
              className="block text-blue-600 hover:text-blue-700 text-sm"
            >
              文章分类
            </Link>
            <Link
              to="/tags"
              className="block text-blue-600 hover:text-blue-700 text-sm"
            >
              标签云
            </Link>
            <Link
              to="/about"
              className="block text-blue-600 hover:text-blue-700 text-sm"
            >
              关于我
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound