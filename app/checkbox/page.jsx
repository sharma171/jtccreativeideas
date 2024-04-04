'use client'
import React, { useState } from 'react';

function Page() {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxData = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValues((prevValues) => [...prevValues, value]);
    } else {
      setCheckedValues((prevValues) =>
        prevValues.filter((item) => item !== value)
        
      );
    }
  };

  // Sample content to be filtered
 

  // Filter content based on checked values


  return (
    <div>
      <label htmlhtmlFor="checklist3">EmployeeManagementSystem</label>
      <input
        type="checkbox"
        id="checklist3"
        value="EmployeeManagementSystem"
        onChange={handleCheckboxData}
      />
      <label htmlhtmlFor="checklist4">nodebasedprojects</label>
      <input
        type="checkbox"
        id="checklist4"
        value="nodebasedprojects"
        onChange={handleCheckboxData}
      />
      <label htmlhtmlFor="checklist5">ams</label>
      <input
        type="checkbox"
        id="checklist5"
        value="ams"
        onChange={handleCheckboxData}
      />
      <label htmlhtmlFor="checklist6">pms</label>
      <input
        type="checkbox"
        id="checklist6"
        value="pms"
        onChange={handleCheckboxData}
      />

      {/* <ul>
        {filteredContent.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Page;
