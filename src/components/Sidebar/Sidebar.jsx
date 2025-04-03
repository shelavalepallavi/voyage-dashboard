import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(0)
  const handleClick=(index)=>{
   setActiveMenu(index)
  } 
  const menuItems = [
    { icon: "/src/assets/home.svg", label: "Home" },
    { icon: "/src/assets/workspace.svg", label: "Workspace" },
    { icon: "/src/assets/marpol.svg", label: "MARPOL" },
    { icon: "/src/assets/ohs.svg", label: "OH&S" },
    { icon: "/src/assets/insights.svg", label: "Insights" },
    { icon: "/src/assets/history.svg", label: "History" },
    { icon: "/src/assets/apps.svg", label: "Apps" },
    { icon: "/src/assets/setting.svg", label: "Settings" },
  ];
  return (
    <div className="sidebar">
      {menuItems.map((item,index)=>(
        <div key={index} className={`sidebar-menu ${activeMenu === index ? 'active':''}`} onClick={()=>handleClick(index)}>
          <img src={item.icon} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
