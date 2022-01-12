import React from "react";
import { Button } from "../Button/button";
import "./Homepage1.css";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
function Homepage1() {
  const iosUrl = "/";
  const anUrl = "/";
  return (
    <div className="container">
      <video src="/videos/background.mp4" autoPlay loop muted/>
      <h1>BE KIND TO YOUR MIND</h1>
      <p>free Application for sleep, anxiety and stress.</p>
      <div className="holder">
        <Button childern="GET STARTED"></Button>
        <div className="storeButton">
          <MobileStoreButton className="iosBut"style={{width:"200px", height:"50px", "margin-top":"12px"}}
            store="ios"
            url={iosUrl}
            linkProps={{ title: "Download App for IOS" }}
          />
          <MobileStoreButton className
            store="android"
            url={anUrl}
            linkProps={{ title: "Download App for Android" }}
          />
        </div>
      </div>
    </div>
    
  );
}

export default Homepage1;
