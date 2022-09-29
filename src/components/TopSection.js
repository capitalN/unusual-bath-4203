import React from "react";

export default function TopSection() {
  return (
    <div>
      <div className="row bg-success bg-opacity-10">
        <h1 className="text-center">Bitrix24. Your ultimate workspace.</h1>
        <div className="col m-5">
          <ul>
            <li>Chats & video calls</li>
            <li>Online meetings</li>
            <li>Feed</li>
            <li>Calendar</li>
            <li>Online documents</li>
            <li>Drive</li>
            <li>Webmail</li>
            <li>Workgroups</li>
            <li>START FOR FREE</li>
          </ul>
        </div>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide col m-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.900w.png.webp?1664359510000"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.900w.png.webp?1664359517000"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.900w.png.webp?1664359515000"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row bg-primary bg-opacity-25">
        <div className="col">
          <h4>10,000,000</h4>
        </div>
        <div className="col">
          <h4>organizations have chosen Bitrix24</h4>
        </div>
        <div className="col">
          <h4>available in 18 languages</h4>
        </div>
      </div>
    </div>
  );
}
