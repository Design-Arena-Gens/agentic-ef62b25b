'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showCopy?: boolean
}

export default function CodeBlock({ code, language = 'javascript', title, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden shadow-lg">
      {title && (
        <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-300 font-semibold">{title}</span>
          {showCopy && (
            <button
              onClick={handleCopy}
              className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
            >
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
          )}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: title ? '0 0 0.5rem 0.5rem' : '0.5rem',
          fontSize: '0.9rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
