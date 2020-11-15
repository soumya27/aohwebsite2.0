import React, { useState } from 'react';

const Dropdown = ({headername, listItems, links}) =>{

    const [listOpen, setListOpen] = useState(false);
    
    const handleOnClick = (e) => {
        setListOpen(!listOpen);
    }

    const handleClickItem = (index) => {
        window.open(links[index])
    }

    return (
        <div className="dropdown" tabIndex="0" onMouseEnter={handleOnClick} onMouseLeave ={handleOnClick}> 
           <div className="dropdown-header">
                <div className = "dropdown-header-title">
                    {headername}
                </div>
           </div>
           { listOpen && <ul className="dropdown-options" >
                {listItems.map((item,index)=>(
                    <li className="dropdown-options-items" onClick={()=>handleClickItem(index)}>{item}</li>
                ))}
            </ul>
           }
        </div>
    );
}

export default Dropdown