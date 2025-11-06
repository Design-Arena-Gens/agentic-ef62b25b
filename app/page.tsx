'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const courses = [
    {
      id: 1,
      title: '🚀 JavaScript Basics',
      description: 'Start your journey with variables, functions, and control flow',
      icon: '📝',
      path: '/js-basics',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: '⚡ ES6 Features',
      description: 'Modern JavaScript with arrow functions, promises, and more',
      icon: '🎯',
      path: '/es6',
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      title: '🅰️ AngularJS Fundamentals',
      description: 'Master directives, controllers, and two-way data binding',
      icon: '🎨',
      path: '/angularjs',
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 4,
      title: '🎮 Interactive Playground',
      description: 'Practice with live code editor and instant feedback',
      icon: '🎪',
      path: '/playground',
      color: 'from-purple-400 to-indigo-500'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            AngularJS Learning Hub
          </h1>
          <p className="text-2xl text-gray-700 mb-2">Master JavaScript, ES6 & AngularJS</p>
          <p className="text-xl text-gray-600">Learn by doing with fun, interactive examples! 🎉</p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {courses.map((course) => (
            <Link href={course.path} key={course.id}>
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
                <div className="relative p-8 text-white">
                  <div className="text-6xl mb-4">{course.icon}</div>
                  <h2 className="text-3xl font-bold mb-3">{course.title}</h2>
                  <p className="text-lg opacity-90">{course.description}</p>
                  <div className={`mt-4 inline-flex items-center transition-transform ${hoveredCard === course.id ? 'translate-x-2' : ''}`}>
                    <span className="font-semibold">Start Learning</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Why Learn Here?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Practical</h3>
              <p className="text-gray-600">Real-world examples you can use immediately</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Interactive</h3>
              <p className="text-gray-600">Live code editors and instant feedback</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Fun</h3>
              <p className="text-gray-600">Gamified learning with achievements</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
