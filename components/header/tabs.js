
// To inform next js, this is a client component 
"use client"; 
  
// Import useState from 'react' library 
import { useState } from "react"; 


export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
  
    const tabStyle = {
      padding: '10px',
      marginRight: '10px',
      cursor: 'pointer',
      backgroundColor: activeTab === 1 ? 'lightblue' : 'transparent',
    };
  
    const handleTabHover = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    return (
      <div style={{ display: 'flex' }}>
        <div
          style={tabStyle}
          onMouseEnter={() => handleTabHover(1)}
        >
          Tab 1
        </div>
        <div
          style={tabStyle}
          onMouseEnter={() => handleTabHover(2)}
        >
          Tab 2
        </div>
        <div
          style={tabStyle}
          onMouseEnter={() => handleTabHover(3)}
        >
          Tab 3
        </div>
      </div>
    );
  }