import React from "react";
import parts from "../assets/images/about_us/parts.jpg";
import person from "../assets/images/about_us/person.jpg";

const AboutusLayout = () => {
  return (
    <div className="my-20 flex justify-center gap-10 min-h-[calc(100vh-200px)] h-96 items-center">

      <div className="w-1/2 h-full relative">
        <img className="w-4/5 h-4/5 rounded-md absolute top-0 left-0" src={person} alt="" />
        <img className="w-3/5 h-3/5 border-white rounded-md absolute border-8 bottom-0 right-0" src={parts} alt="" />
      </div>

      <div className="w-1/2 space-y-5">
        <h1 className="font-bold font-inter text-yellow-600">About us</h1>
        <h1 className="font-inter text-5xl w-3/5 font-bold">We are qualified & of experience in this field</h1>
        <p className="text-sm font-inter">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          <br /><br />
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="btn btn-warning">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutusLayout;
