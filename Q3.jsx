import {useState} from "react";
import "./App.css";

function Q3() {
    const images = [
        "https://picsum.photos/id/1015/300/200",
        "https://picsum.photos/id/1016/300/200",
        "https://picsum.photos/id/1018/300/200",
        "https://picsum.photos/id/1020/300/200"
    ];

    const [selectImg, setSelectImg] = useState(images[0]);

    function handleClick(img) {
        setSelectImg(img);
    }

    return (
        <div className="container">
            <h1>Image Gallery</h1>
            <img src={selectImg} className="preview"/>
            <div className="gallery">
                {images.map(function(img, index) {
                    return (
                        <img key={index} src={img} className="thumbnail" onClick={() => handleClick(img)} />
                    );
                })}
            </div>
            <p>Aditya Rajesh 24BCE0942</p>
        </div>
    );
}

export default Q3;