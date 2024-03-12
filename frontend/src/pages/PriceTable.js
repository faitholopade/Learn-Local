import React from 'react';
import '../styles/PriceTable.css';

function PriceTable() {

   {/* change the description of each program by editing what is between the quotation marks: "like this"  */}
  const parentsClassDescription = "** Fill in Parents cooking description here **";
  const tyClassDescription = "The Transition year programme, or second level will be more intensive and will focus on independent cooking or preparation for cooking at college or abroad. If the funding is available I would like to incorporate a food safety qualification into this programme or give that option to schools. This would provide more opportunity to students securing work.";
  const youthProgDescription = "** Fill in Youth program description here **";
  const afterSchoolProg = "This programme provides  after-school/extracurricular classes, providing flexibility on age groups or until it is possible to run separate workshops with tutor hire";
  const primaryIncursionProg = "This primary incursion programme will consist of 6 weekly 2 hour workshops inclusive of all materials. This programme would be a class or a group of children of similar age range.";
  
  return (
    <div className="price-table-container">

     

      <h1>Our Programs and Prices</h1>  {/* change title here  */}

      <div className="program">
        <h2>Parents Cooking Classes</h2>  {/* change name of program here  */}
        <p>Price: €1,300</p>  {/* change price here  */}
        <p>{parentsClassDescription}</p>
      </div>

      <div className="program">
        <h2>Transition Year Cooking Classes</h2>
        <p>Price: €1,800</p>
        <p>{tyClassDescription}</p>
        
      </div>

      <div className="program">
        <h2>Youth Group</h2>
        <p>Price: €1,800</p>
        <p>{youthProgDescription}</p>
      </div>

      <div className="program">
        <h2>After School Programme</h2>
        <p>Price: from €25 per session</p>
        <p>{afterSchoolProg}</p>
        
      </div>

      <div className="program">
        <h2>Primary Incursion Programme</h2>
        <p>Price: €1,800</p>
        <p>{primaryIncursionProg}</p>
      </div>

      {/* Add more programs as needed */}
    </div>
  );
}

export default PriceTable;
