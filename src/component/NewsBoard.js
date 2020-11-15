import React,{ useState, useEffect} from 'react';
import '../css/newsBoard.css'
import NewsCard from './Newscard'

const NewsBoard = () =>{
    const articles = [
        {
        "title":"Announcement1 : This is the first notice",
        "description" : "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. "
        },{
        "title":"Announcement2 : This is the second notice",
        "description" : "Not him old music think his found enjoy merry. Listening acuteness dependent at or an. Apartments thoroughly unsatiable terminated sex how themselves. She are ten hours wrong walls stand early. Domestic perceive on an ladyship extended received do. Why jennings our whatever his learning gay perceive. Is against no he without subject. Bed connection unreserved preference partiality not unaffected. Years merit trees so think in hoped we as. "
        },{
        "title":"Announcement3 : This is the third notice",
        "description" : "Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.         "
        },{
        "title":"Announcement4 : This is the fourth notice",
        "description" : "Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. "
        },{
        "title":"Announcement5 : This is the fifth notice",
        "description" : "It prepare is ye nothing blushes up brought. Or as gravity pasture limited evening on. Wicket around beauty say she. Frankness resembled say not new smallness you discovery. Noisier ferrars yet shyness weather ten colonel. Too him himself engaged husband pursuit musical. Man age but him determine consisted therefore. Dinner to beyond regret wished an branch he. Remain bed but expect suffer little repair."
        }
        ,{
        "title":"Announcement6 : This is the sixth notice",
        "description" : "On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured. At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. Fat decisively estimating affronting assistance not. Resolve pursuit regular so calling me. West he plan girl been my then up no. "
        }
    ];
    const [newsArticles, setNewsArticles] = useState(articles); 
   
    useEffect(() => {
        const timer = window.setInterval(() => {
            setNewsArticles(previousarray => {
                let newarray = [...previousarray];
                let firstArticle = newarray.shift();
                console.log("first article: ", JSON.stringify(newsArticles[0]));
                newarray.push(firstArticle);
                console.log("new array: ", JSON.stringify(newarray[0]));
                setNewsArticles(newarray);
            }); 
        }, 4000);
        return () => {
          window.clearInterval(timer);
        };
    }, []);

    return (
        <section className="newssection" >
            <h3>Notice Board</h3>
            <div className="newsBoard">
                {
                    newsArticles.map((item,index)=>( <NewsCard key={index} item={item} id={index}/>))
                }
            </div>
        </section>
    );
};


export default NewsBoard;


