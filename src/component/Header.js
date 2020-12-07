import React, { useEffect, useState } from 'react';
import {API, Auth,graphqlOperation} from 'aws-amplify'
import Dropdown from './Dropdown';
import {listHeaderNames,listHeaderOptions} from '../graphql/queries'
import '../css/header.css'

const Header = () =>{
    const [user,setUser] = useState(null);
    const [buttonText, setButtonText] = useState("Sign in with Google");
    const [dropdownItems, setDropdownItems] = useState(null);

    useEffect(()=>{
        Auth.currentAuthenticatedUser().then(user =>{
            console.log("in use effect : log user ",user);
            setUser(user);
            setButtonText("Logout");
            fetchHeaderName();
        }).catch(error =>{
            console.log("Not signed in");
            setButtonText("Sign in with Google");
        })
    },[])

    async function fetchHeaderName(){
        let items=[];
        const result = await API.graphql({query:listHeaderNames});
        result.data.listHeaderNames.items.map(async(item,index) =>{
            let filter = {
                headernameID : { 
                    eq: item.id
                }
            }
            const response = await API.graphql(graphqlOperation(listHeaderOptions, {filter}));
            items[index] ={
                id: item.id,
                title: item.title,
                options:response.data.listHeaderOptions.items
            }
        })
        setDropdownItems(items);
        
    }
    
    async function signInUser(){
        if (user){
            Auth.signOut();
            setUser(null);
        }else{
            Auth.federatedSignIn({provider: "Google"})
        }
    }

    return (
        <div className="headercontainer"> 
            <div className="headername">
                <div className="sitename"> 
                    AOH Welfare Association
                </div>
                <button className="loginButton" onClick={signInUser}>
                    {buttonText}
                </button>
            </div>
            {dropdownItems ? (
                <div className="dropdown-container">
                {
                    dropdownItems.map((item)=>{
                        console.log(item);
                        return (<Dropdown key={item.id} 
                        headername={item.title} 
                        options={item.options}
                        />);
                    })
                }
                </div>
            )   
            : null 
            }
        </div>
    );
}

export default Header