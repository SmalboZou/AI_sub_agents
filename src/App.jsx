import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Article from './pages/Article'
import Categories from './pages/Categories'
import Tags from './pages/Tags'
import About from './pages/About'
import NotFound from './pages/NotFound'

/**
 * 主应用组件
 * 包含路由配置和整体布局结构
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 页面头部导航 */}
      <Header />
      
      {/* 主要内容区域 */}
      <main className="flex-1">
        <Routes>
          {/* 首页路由 */}
          <Route path="/" element={<Home />} />
          
          {/* 文章详情页路由 */}
          <Route path="/article/:id" element={<Article />} />
          
          {/* 分类页面路由 */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:name" element={<Categories />} />
          
          {/* 标签页面路由 */}
          <Route path="/tags" element={<Tags />} />
          <Route path="/tag/:name" element={<Tags />} />
          
          {/* 关于页面路由 */}
          <Route path="/about" element={<About />} />
          
          {/* 404页面路由 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* 页面底部 */}
      <Footer />
    </div>
  )
}

export default App