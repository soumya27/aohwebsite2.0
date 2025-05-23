import React,{ useState, useEffect} from 'react';
import '../css/newsBoard.css';

import {API,Auth} from 'aws-amplify';
import {listNewsArticles} from '../graphql/queries';

import NewsCard from './Newscard';

const NewsBoard = () =>{
    const [newsArticles, setNewsArticles] = useState('');
    
    useEffect(() => {
        fetchNewArticles();
    }, []);
    
    async function fetchNewArticles() {
        // const user = await Auth.currentAuthenticatedUser();
        Auth.currentAuthenticatedUser().then(user =>{
            console.log(user);
            API.graphql({query: listNewsArticles}).then(result =>{
                console.log("Result from listNewsAtricles", result);
                setTimeout(function(){
                    setNewsArticles(result.data.listNewsArticles.items);
                }, 300);
            });
            
        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        !newsArticles ? 
        null
        : (
            <section className="newssection" >
                <h3>Notice Board</h3>
                    <div className="newsBoard">
                        {
                            newsArticles.map((item,index) => {
                                console.log(newsArticles);
                                return (<NewsCard key={item.id} item={item} id={index}/>);
                            })
                        }
                    </div>
            </section>
        )
    );
};


export default NewsBoard;


