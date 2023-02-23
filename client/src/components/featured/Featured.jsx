import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
                <img src="./img/1200px-Logo_Dai_hoc_Can_Tho.svg.png" alt="" />
                <input type="text" placeholder='Try "building mobile app"'/>
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
            {/* <img src="./img/1200px-Logo_Dai_hoc_Can_Tho.svg.png" alt=""  style={{width: "600px"}} /> */}
            <img src="./img/1200px-Logo_Dai_hoc_Can_Tho.svg.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Featured;
