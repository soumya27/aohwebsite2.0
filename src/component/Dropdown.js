import React, { useState } from 'react';

const Dropdown = ({headername, options}) =>{

    const [listOpen, setListOpen] = useState(false);
    
    const handleOnClick = (e) => {
        setListOpen(!listOpen);
    }

    const handleClickItem = (index) => {
        window.open(options[index].action)
    }

    return (
        <div className="dropdown" tabIndex="0" onMouseEnter={handleOnClick} onMouseLeave ={handleOnClick}> 
           <div className="dropdown-header">
                <div className = "dropdown-header-title">
                    {headername}
                </div>
           </div>
           { listOpen && <ul className="dropdown-options" >
                {options.map((item,index)=>(
                    <li key={index} className="dropdown-options-items" onClick={()=>handleClickItem(index)}>{item.options}</li>
                ))}
            </ul>
           }
        </div>
    );
}

export default Dropdown