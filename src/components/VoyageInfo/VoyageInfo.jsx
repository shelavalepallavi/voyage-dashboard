import React from "react";
import "./VoyageInfo.css";

const VoyageInfo = () => {
  return (
    <div className="voyageinfo">
      <div className="voyage-upper">
        <div className="voyage-head">
          <img src="/src/assets/cargo.svg" alt="cargo" />
          <p>SGSIN - NOOSL</p>
        </div>
        <div className="voyage-infomation">
          <p className="voyage-status">
            Statement of Facts <br />
            <span>Current Status</span>
          </p>
          <p className="voyage-lift">Cargo First Lift</p>
        </div>
      </div>
      <hr />
      <div className="voyage-down">
        <div className="voyage-left">
          <p className="voyage-left-parafir">Next Port Call</p>
          <p className="voyage-left-parasec">INVTZ1</p>
        </div>
        <div className="voyage-right">
          <p className="voyage-left-parafir">ETA</p>
          <p className="voyage-left-parasec">Nov 27, 1450 UTC</p>
        </div>
      </div>
    </div>
  );
};

export default VoyageInfo;
