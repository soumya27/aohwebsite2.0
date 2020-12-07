import React,{ useState, useEffect} from 'react';
import '../css/newsBoard.css';

import {API} from 'aws-amplify';
import {listNewsArticles} from '../graphql/queries';

import NewsCard from './Newscard';

const NewsBoard = () =>{
    const [newsArticles, setNewsArticles] = useState('');
    
    useEffect(() => {
        fetchNewArticles();
    }, []);
    
    async function fetchNewArticles() {
        const result = await API.graphql({query: listNewsArticles});
        setNewsArticles(result.data.listNewsArticles.items);
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
                                return (<NewsCard key={item.id} item={item} id={index}/>);
                            })
                        }
                    </div>
            </section>
        )
    );
};


export default NewsBoard;


