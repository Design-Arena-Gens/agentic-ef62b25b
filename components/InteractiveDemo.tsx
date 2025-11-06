'use client'

import { useState } from 'react'

interface InteractiveDemoProps {
  title: string
  description: string
  initialCode: string
  runCode: (code: string) => string
}

export default function InteractiveDemo({ title, description, initialCode, runCode }: InteractiveDemoProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = () => {
    setIsRunning(true)
    try {
      const result = runCode(code)
      setOutput(result)
    } catch (error: any) {
      setOutput(`Error: ${error.message}`)
    }
    setTimeout(() => setIsRunning(false), 300)
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 my-6 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Code Editor</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-48 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-lg border-2 border-gray-700 focus:border-blue-500 outline-none"
            spellCheck={false}
          />
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`mt-2 px-6 py-2 rounded-lg font-semibold text-white transition-all ${
              isRunning
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            {isRunning ? '🔄 Running...' : '▶️ Run Code'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Output</label>
          <div className="w-full h-48 p-4 font-mono text-sm bg-white rounded-lg border-2 border-gray-300 overflow-auto">
            {output ? (
              <pre className="whitespace-pre-wrap text-gray-800">{output}</pre>
            ) : (
              <span className="text-gray-400 italic">Run the code to see output...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
