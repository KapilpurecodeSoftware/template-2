import React from "react";
import "./mainContent.css";
import blossomImage from"./assets/twoWatches.png";
import BagImage from"./assets/bagImage.png";

export default function MainContent() {
  return (
    <>
      <div className="containerr">
        <div className="sidebar">
          <div className="categories">
            <span className=" categoriesMenu material-symbols-outlined ">menu</span>Categories
          </div>
          <ul className="category-list">
            <li className="category-item">Fashion</li>
            <li className="category-item">Electronic</li>
            <li className="category-item">Home</li>
            <li className="category-item">Decor</li>
            <li className="category-item">Camera</li>
            <li className="category-item">Gadget</li>
          </ul>
        </div>
        <div className="box">
          <div className="box-header">
            <ul className="list">
              <li className="list-item">
                Home
                <span className="material-symbols-outlined arrowIcon">
                  expand_more
                </span>
              </li>
              <li className="list-item">
                Shop
                <span className="material-symbols-outlined arrowIcon">
                  expand_more
                </span>
              </li>
              <li className="list-item">
                Pages
                <span className="material-symbols-outlined arrowIcon">
                  expand_more
                </span>
              </li>
              <li className="list-item">
                About
                <span className="material-symbols-outlined arrowIcon">
                  expand_more
                </span>
              </li>
              <li className="list-item">
                Blog
                <span className="material-symbols-outlined arrowIcon">
                  expand_more
                </span>
              </li>
              <li className="list-item">Contact</li>
            </ul>

            <div className="icon">
              <span className="material-symbols-outlined">favorite</span>
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
                <div className="imageText">
                  <h4>SmartWatch </h4>
                  <h1>Blossom <br/>Smartwatch</h1>
                  <h5>Shop Now</h5>
                </div>
                <div className="image">
                    <img  className="watchImage" src={blossomImage}/>
                </div>
            </div>
            <div className="card small">
              <div className="bagImageText">
                <img className="bagImage" src={BagImage} alt="" />
                
                <div>
                <div className="leatherBagText">Leather Bag <br/> $25.50</div>
                </div>
                </div>
            </div>
            
          </div>
        </div>

        {/* <div className="box">
            <div className="card-header">
                <ui>
                    <li>home</li>
                    <li>home</li>
                </ui>
            </div>

        </div> */}
      </div>
    </>
  );
}
