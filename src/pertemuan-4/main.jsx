import React from 'react';
import ReactDOM from 'react-dom/client';
import FrameworkList from './FrameworkList';
import FrameworkListSearch from './FrameworkListSearch';
import './tailwind.css'; // Import custom tailwind CSS

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header dengan efek glassmorphism */}
        <header className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 mb-10 shadow-xl border-b-4 border-purple-500 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-5xl animate-bounce">📚</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dashboard Framework
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                Pertemuan 4 • List, Search, Filter, State Management & CSS Grid
              </p>
            </div>
          </div>
        </header>

        <main className="space-y-10">
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
            <FrameworkList />
          </section>
          
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
            <FrameworkListSearch />
          </section>
        </main>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);