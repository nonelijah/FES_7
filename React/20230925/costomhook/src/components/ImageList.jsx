import React from "react";
import ImageItem from "./ImageItem";

function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((imgData) => {
                return (
                    <li key={imgData.id}>
                        <ImageItem imgData={imgData} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ImageList;
