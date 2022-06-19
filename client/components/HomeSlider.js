import React from 'react';
import { Link } from 'react-router-dom';

export const HomeSlider = () => {
  return (
    <div>
      <div id="carouselControls" className="carousel slide container" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
              <img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1614658680809-3RTQAWO301OEZK5ULD3Q/2021+-+franca+-+lifestyle+%E2%80%94+34536.jpg?format=2500w" className="d-block w-100" alt="..." />

              <div className="overlay">
                <h1>ALL COLLECTIONS</h1>
                <Link to="/shop">
                  <button className="btn btn-dark">Shop Now</button>
                </Link>
              </div>
          </div>

          <div className="carousel-item">
              <img className="img-fluid" src="https://images.unsplash.com/photo-1528466829416-7c2576152a09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="d-block w-100" alt="..." />

              <div className="overlay">
                <h1>BRAND STORY</h1>
                <p className="lead d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/aboutus">
                  <button className="btn btn-dark">Read More</button>
                </Link>
              </div>
          </div>

          <div id="partner" className="carousel-item">
              <img className="img-fluid" src="https://i.pinimg.com/originals/01/89/12/01891268879c99e886018890bd359462.jpg" className="d-block w-100" alt="..." />

              <div className="overlay">
                <h1>PARTNER WITH US</h1>
                <button className="btn btn-dark">Ways to Collaborate</button>
              </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
