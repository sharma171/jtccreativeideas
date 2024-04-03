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
  const content = [
    { id: 1, category: 'EmployeeManagementSystem', text: 'Content 1' },
    { id: 2, category: 'nodebasedprojects', text: 'Content 2' },
    { id: 3, category: 'EmployeeManagementSystem', text: 'Content 3' },
    { id: 4, category: 'nodebasedprojects', text: 'Content 4' },
    { id: 5, category: 'ams', text: 'Content 5' },
    { id: 6, category: 'ams', text: 'Content 6' },
    { id: 7, category: 'EmployeeManagementSystem', text: 'Content 7' },
    { id: 8, category: 'nodebasedprojects', text: 'Content 8' },
    { id: 9, category: 'pms', text: 'Content 9' },
    { id: 10, category: 'nodebasedprojects', text: 'Content 10' },
    { id: 11, category: 'pms', text: 'Content 11' },
    { id: 12, category: 'nodebasedprojects', text: 'Content 12' },
  ];

  // Filter content based on checked values
  const filteredContent = checkedValues.length
    ? content.filter((item) => checkedValues.includes(item.category))
    : content;
    console.log(filteredContent)

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

      <ul>
        {filteredContent.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
