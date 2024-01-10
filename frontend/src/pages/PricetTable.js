import React from 'react';
import '../styles/PriceTable.css';

function PriceTable() {
  return (
    <div className="price-table-container">
      <h1>Our Programs and Prices</h1>
      <div className="program">
        <h2>Parents Program</h2>
        <p>Description of the Parents Program...</p>
        <p>Price: €100</p>
      </div>
      <div className="program">
        <h2>TY Program</h2>
        <p>Description of the TY Program...</p>
        <p>Price: €150</p>
      </div>
      {/* Add more programs as needed */}
    </div>
  );
}

export default PriceTable;
