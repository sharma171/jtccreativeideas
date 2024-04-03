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
  ];

  // Filter content based on checked values
  const filteredContent = checkedValues.length
    ? content.filter((item) => checkedValues.includes(item.category))
    : content;

  return (
    <div>
      <label htmlFor="checklist3">EmployeeManagementSystem</label>
      <input
        type="checkbox"
        id="checklist3"
        value="EmployeeManagementSystem"
        onChange={handleCheckboxData}
      />
      <label htmlFor="checklist4">nodebasedprojects</label>
      <input
        type="checkbox"
        id="checklist4"
        value="nodebasedprojects"
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
