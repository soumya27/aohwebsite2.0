import React from 'react';
import '../css/footer.css'

const Footer = () =>{
    
    const links = [
        {
        "title":"Google Drive",
        "action" : ""
        },{
        "title":"GVMC",
        "action" : ""
        },{
        "title":"SBI",
        "action" : ""
        },{
        "title":"MyGate",
        "action" : ""
        },{
        "title":"Club Booking",
        "action" : ""
        },{
        "title":"Vegatable Wala",
        "action" : ""
        }

    ];

    const handleOnclick = (url)=>{
        window.open(url);
    }

    return (
        <div className="footercontainer"> 
            <div className="footercontainer-sitename">
                AOH Welfare Association
            </div>
            <div className="contactus">
               
            </div>
            <div className="links">
                <ul>
                    {links.map((item,index) =>(
                        <li key={index} onClick={()=>handleOnclick(item.action)}>{item.title}</li>
                    ))}
                </ul>
            </div>
        
        </div>
    );
}

export default Footer