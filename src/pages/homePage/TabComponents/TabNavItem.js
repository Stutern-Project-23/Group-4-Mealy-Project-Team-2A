import React from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
      };

  return (
    <div>
        <li onClick={handleClick} className='{activeTab === id ? "active" : ""} hover:bg-[#FA5A00] hover:text-white hover:font-semibold px-4 py-2'>
            { title }
        </li>
   </div>
  )
}

export default TabNavItem