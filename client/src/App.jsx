import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 text-center p-4">
      <div className="flex gap-8 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16 transition hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 transition hover:scale-110" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4 w-full"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-700">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
