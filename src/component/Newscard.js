import React, { useState }  from 'react';

const NewsCard = ({
        item,id
    }) =>{

    const [display, setDisplay] = useState(false);
    
 
    const toggle= ()=>{
       
        setDisplay(!display);
    }

    
    return (
        <div className="newscard" 
            onMouseEnter={toggle}
            onMouseLeave={toggle}>
            <div className="newstitle">
                {item.title}
            </div>
            { (display )&& 
                <div className="newsdesc">
                    {item.description}
                </div>
            }
        </div>
    );
};


export default NewsCard;
