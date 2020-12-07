import React, { useState,useEffect } from 'react';
import '../css/footer.css'
import {API} from 'aws-amplify';
import {listFooterLinks} from '../graphql/queries';

const Footer = () =>{
    const [footerLinks, setFooterLinks] = useState('');
    
    useEffect(() => {
        fetchFooterLinks();
    }, []);
    
    async function fetchFooterLinks() {
        const result = await API.graphql({query: listFooterLinks});
        setFooterLinks(result.data.listFooterLinks.items);
    }

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
            {
                !footerLinks ? null:
                <div className="links">
                    <ul>
                        {
                            footerLinks.map((item) => {
                                return (<li key={item.id} onClick={()=>handleOnclick(item.action)}>{item.title}</li>);
                            })
                        }
                    </ul>
                </div>
            }
           
        
        </div>
    );
}

export default Footer