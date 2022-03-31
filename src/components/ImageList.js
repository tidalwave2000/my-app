import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

//compoment to handle are list of images
const ImageList = (props) => {
    //images is the variable declared to hold the resultsfrom mapping the array 
    //destructure properties to make things shorter and easyer to to follow
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    
    //return images for the search array
    return <div className="image-list">{images}</div>;
};

//export ImageList so you can use it elsewhere
export default ImageList;