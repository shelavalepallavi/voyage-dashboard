import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="userinfo">
      <div className="userinfo-upper">
        <div className="userinfo-img">
          <img src="/src/assets/hand.png" alt="" className="userinfo-hand"/>
          <img src="/src/assets/navy.svg" alt="" className="userinfo-navy"/>
        </div>
        <div className="userinfo-user">
          <p className="userinfo-para">Second Officer</p>
          <h1>
            Abdul <br /> Ghani
          </h1>
          <p className="userinfo-id">Crew ID 86526</p>
        </div>
      </div>
      <hr />
      <div className="userinfo-activity">
        <p className="userinfo-act">My Last Activity</p>
        <p className="userinfo-time">
            Submitted the Deck Log for <br /> <span>1200-1600 Watch</span> at
            08:16 UTC
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
