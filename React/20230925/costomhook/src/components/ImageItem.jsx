import React from "react";

function ImageItem({ imgData }) {
    return (
        <>
            <img src={imgData.download_url} style={{ width: 400 }} alt="" />
        </>
    );
}

export default ImageItem;
