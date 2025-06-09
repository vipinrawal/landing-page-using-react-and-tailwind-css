import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
     <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BrandLogo</h1>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#features" className="hover:text-gray-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-20 px-6 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Your Solution to Everything</h2>
          <p className="text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ut ligula a sollicitudin.</p>
          <a href="#signup" className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">Get Started</a>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Feature 1</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ut ligula.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Feature 2</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ut ligula.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Feature 3</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet ut ligula.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 BrandLogo. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
