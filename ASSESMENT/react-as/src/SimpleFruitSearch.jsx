import React, { useState } from 'react';

function SimpleFruitSearch () {
  
  const [searchTerm, setSearchTerm] = useState('');

  
  const fruits = [
    'Banana',
    'Apple', 
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon'
  ];

 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    
    console.log('Search term:', event.target.value);
  };

  
  const filteredFruits = fruits.filter(fruit =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  console.log('Filtered fruits:', filteredFruits);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9'
    }}>
      
    
      <div style={{ marginBottom: '30px' }}>
        <label style={{
          fontSize: '18px',
          marginRight: '10px',
          fontWeight: 'normal'
        }}>
          Search:
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            width: '200px'
          }}
          placeholder="Type to search..."
        />
      </div>

      
      <div>
        {filteredFruits.map((fruit, index) => (
          <div
            key={index}
            style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '15px',
              textAlign: 'center'
            }}
          >
            {fruit}
          </div>
        ))}
      </div>
 
      {filteredFruits.length === 0 && searchTerm && (
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '16px',
          marginTop: '20px'
        }}>
          No fruits found matching "{searchTerm}"
        </div>
      )}

    </div>
  );
};

export default SimpleFruitSearch;