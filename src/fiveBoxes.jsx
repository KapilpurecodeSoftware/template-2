import React from "react";
import "./fiveBoxes.css";

export default function FiveBoxes() {
  return (
    <>
      <div className="container">
        <div className="fiveBox">
          <div className="boxes">
            <span className="material-symbols-outlined fiveIcon">package</span>
            <h6>
              Fast & Secure <br /> Delivery{" "}
            </h6>
          </div>
          <div className="boxes">
            <span className="material-symbols-outlined fiveIcon">
              new_releases
            </span>
            <h6>
              100% Gurantee <br /> On Product{" "}
            </h6>
          </div>
          <div className="boxes">
            <span className="material-symbols-outlined fiveIcon">
              assignment_return
            </span>
            <h6>
              24 Hour Return <br /> Policy{" "}
            </h6>
          </div>
          <div className="boxes">
            <span className="material-symbols-outlined fiveIcon">sync</span>
            <h6>
              24 Hour Return <br /> Policy{" "}
            </h6>
          </div>
          <div className="boxes">
            <span className="material-symbols-outlined fiveIcon">
              takeout_dining
            </span>
            <h6>
              Next Level Pro <br /> Quality{" "}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
