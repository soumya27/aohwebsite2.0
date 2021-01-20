import React, { useEffect, useState } from 'react';
import {Storage} from 'aws-amplify';
import '../css/imageslider.css';


const ImageSlider = () =>{
    const [listofImages,setImageList] =useState(["./image/image1.jpg","./image/image2.jpg","./image/image3.jpg","./image/image4.jpg"]);
    const leftbutton = "<";
    const rightbutton = ">";

    useEffect(()=>{
        Storage.list('')
        .then(result =>{
            result.forEach(singleImage => {
                if (singleImage.key){
                    console.log(`get image : ${singleImage.key}`);
                    Storage.get(singleImage.key).then(url =>{
                        console.log(url);
                    })
                }
            });
        } )
        .catch(err => console.log(err));
    },[])

    const handleclick = (e)=>{
        let newarray = [...listofImages];
        if (e.target.id==='left'){
            let firstImage = newarray.shift();
            newarray.push(firstImage);
            setImageList(newarray);
        }else {
            let lastImage = newarray.pop();
            newarray.unshift(lastImage);
            setImageList(newarray);
        }
    }

    
    return (
        <section className="imageSection">
            <div className="imagesliderContainer" style = {{ backgroundImage: `url( ${listofImages[0]} )`}}>
                <button id="left" className="leftbutton" onClick={handleclick}>{leftbutton}</button>
                <p className="imagecontainter"></p>
                <button id="right" className="rightbutton" onClick={handleclick}>{rightbutton}</button>
            </div>
        </section>
    );
}

export default ImageSlider;