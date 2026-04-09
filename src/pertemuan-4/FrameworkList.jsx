import React from 'react';
import frameworks from './framework.json';

const FrameworkList = () => {
  const getIcon = (type) => {
    switch(type) {
      case 'Frontend': return '🎨';
      case 'Backend': return '⚙️';
      case 'Styling': return '💅';
      default: return '📦';
    }
  };

  const getGradient = (type) => {
    switch(type) {
      case 'Frontend': return 'from-purple-500 to-pink-500';
      case 'Backend': return 'from-pink-500 to-red-500';
      case 'Styling': return 'from-blue-500 to-cyan-500';
      default: return 'from-purple-500 to-pink-500';
    }
  };

  const getBadgeColor = (type) => {
    switch(type) {
      case 'Frontend': return 'bg-purple-100 text-purple-700';
      case 'Backend': return 'bg-pink-100 text-pink-700';
      case 'Styling': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
          📋
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">All Frameworks</h2>
          <p className="text-gray-500 mt-1">
            Menampilkan semua data framework ({frameworks.length} items)
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameworks.map((fw, index) => (
          <div 
            key={fw.id} 
            className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Colorful top bar */}
            <div className={`h-2 bg-gradient-to-r ${getGradient(fw.type)}`} />
            
            <div className="p-6">
              {/* Header with icon and name */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {getIcon(fw.type)}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {fw.name}
                </h3>
              </div>
              
              {/* Badge */}
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${getBadgeColor(fw.type)}`}>
                <span>{getIcon(fw.type)}</span>
                <span>{fw.type}</span>
              </span>
              
              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {fw.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkList;