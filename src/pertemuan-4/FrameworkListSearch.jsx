import React, { useState } from 'react';
import frameworks from './framework.json';

const FrameworkListSearch = () => {
  // --- BEST PRACTICE STATE ---
  // 1. Pisahkan state untuk input search dan dropdown filter
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  // 2. Gunakan "Derived State" (State Turunan) untuk hasil filter.
  // Jangan membuat state baru khusus untuk menyimpan data yang sudah difilter, 
  // cukup kalkulasi dari data original + state input yang ada.
  const filteredFrameworks = frameworks.filter((fw) => {
    const matchSearch = fw.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterType === 'All' || fw.type === filterType;
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2>2. Data JSON (Search & Filter)</h2>
      
      {/* Area Kontrol (Search & Filter) */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Cari nama framework..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', width: '100%', maxWidth: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="All">Semua Tipe</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Styling">Styling</option>
        </select>
      </div>

      {/* Hasil Render dengan Responsive Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((fw) => (
            <div key={fw.id} style={{ 
              border: '1px solid #007bff', 
              padding: '15px', 
              borderRadius: '8px',
              backgroundColor: 'white'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>{fw.name}</h3>
              <span style={{ background: '#e7f1ff', color: '#007bff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                {fw.type}
              </span>
              <p style={{ marginTop: '15px', color: '#555' }}>{fw.description}</p>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px', color: '#888' }}>
            Data framework tidak ditemukan.
          </div>
        )}
      </div>
    </div>
  );
};

export default FrameworkListSearch;