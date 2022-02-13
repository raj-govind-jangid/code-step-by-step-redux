import React from "react";

const Home = (props) => {
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios14-iphone12-pro-home-camera-callout.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>Iphone</span>
                    <span>Price $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                <button onClick={()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}>
                Add To Cart
                </button>
                </div>
            </div>
        </div>
    )
}

export default Home;