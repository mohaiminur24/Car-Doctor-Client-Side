import React from "react";
import bannerone from "../../assets/images/banner/1.jpg";
import bannertwo from "../../assets/images/banner/2.jpg";
import bannerthree from "../../assets/images/banner/3.jpg";
import bannerfour from "../../assets/images/banner/4.jpg";

const Slider = () => {
  return (
    <div className="carousel my-5 rounded-md w-full h-[calc(100vh-100px)]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerone} className="w-full" />
        <div className="absolute w-full flex justify-between p-10 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))]">
          <div className="w-1/2 text-white space-y-5">
            <h1 className="text-7xl font-inter font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm font-inter w-4/5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning font-bold font-inter text-white">Discover More</button>
              <button className="btn btn-outline hover:bg-transparent font-bold border-white font-inter text-white">letest Project</button>
            </div>
          </div>
          <div className="mt-auto flex justify-end w-1/2">
            <div className="w-fit flex gap-5">
              <a
                href="#slide4"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannertwo} className="w-full" />
        <div className="absolute w-full flex justify-between p-10 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))]">
          <div className="w-1/2 text-white space-y-5">
            <h1 className="text-7xl font-inter font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning font-bold font-inter text-white">Discover More</button>
              <button className="btn btn-outline hover:bg-transparent font-bold border-white font-inter text-white">letest Project</button>
            </div>
          </div>
          <div className="mt-auto flex justify-end w-1/2">
            <div className="w-fit flex gap-5">
              <a
                href="#slide1"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerthree} className="w-full" />
        <div className="absolute w-full flex justify-between p-10 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))]">
          <div className="w-1/2 text-white space-y-5">
            <h1 className="text-7xl font-inter font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning font-bold font-inter text-white">Discover More</button>
              <button className="btn btn-outline hover:bg-transparent font-bold border-white font-inter text-white">letest Project</button>
            </div>
          </div>
          <div className="mt-auto flex justify-end w-1/2">
            <div className="w-fit flex gap-5">
              <a
                href="#slide2"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannerfour} className="w-full" />
        <div className="absolute w-full flex justify-between p-10 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))]">
          <div className="w-1/2 text-white space-y-5">
            <h1 className="text-7xl font-inter font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning font-bold font-inter text-white">Discover More</button>
              <button className="btn btn-outline hover:bg-transparent font-bold border-white font-inter text-white">letest Project</button>
            </div>
          </div>
          <div className="mt-auto flex justify-end w-1/2">
            <div className="w-fit flex gap-5">
              <a
                href="#slide3"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn bg-yellow-500 border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
