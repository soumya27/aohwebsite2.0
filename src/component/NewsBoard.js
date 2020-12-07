import React,{ useState, useEffect} from 'react';
import '../css/newsBoard.css';

import {API} from 'aws-amplify';
import {listNewsArticless} from '../graphql/queries';

import NewsCard from './Newscard';

const NewsBoard = () =>{
    const [newsArticles, setNewsArticles] = useState('');
    
    useEffect(() => {
        fetchNewArticles();
    }, []);
    
    async function fetchNewArticles() {
        const result = await API.graphql({query: listNewsArticless});
        setNewsArticles(result.data.listNewsArticless.items);
    }

    return (
        <section className="newssection" >
            <h3>Notice Board</h3>
            { !newsArticles ? null: (
                <div className="newsBoard">
                    {
                        newsArticles.map((item,index) => {
                            return (<NewsCard key={item.id} item={item} id={index}/>);
                        })
                    }
                </div>
                )
            }
        </section>
    );
};


export default NewsBoard;


