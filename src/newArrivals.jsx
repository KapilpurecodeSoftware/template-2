import React from "react";
import "./newArrivals.css";

export default function NewArrivals() {
  return (
    <>
      <div className="arrivalContainer">
        <div className="arrivalBox">
          <div className="arrival-left-content">
            <span className="arrival-icon">
              <span class="material-symbols-outlined iconCart">local_mall</span>
              This Week's
            </span>

            <p className="arrivalText">New Arrivals</p>
          </div>
          <div className="arrival-right-content">
            <span class="material-symbols-outlined arrivalArrow">arrow_left_alt</span>
            <span class="material-symbols-outlined arrivalArrow">arrow_right_alt</span>
          </div>
        </div>
      </div>
    </>
  );
}
