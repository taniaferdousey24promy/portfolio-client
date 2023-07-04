import React from "react";
import coding from "./coding.json";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <div>
      <h1 className=" font-bold  mt-14 ms-14 mb-12 text-4xl font-kanit">
        About Me
      </h1>

      <div className="flex flex-row gap-52">
        <div className="w-[1000px]">
          <h1 className="  mt-8 ms-14 text-2xl font-kanit">
            Hi, I'm <b>Tania Ferdousey Promy</b>.
          </h1>
          <h1 className="  mt-8 ms-14 text-[18px] font-kanit">
            I am a Front-end Developer with a passion for crafting exceptional
            web experiences. Based in Dhaka, Bangladesh, I specialize in coding
            and creating dynamic web elements. With expertise in HTML, CSS, and
            JavaScript, I bring innovative designs to life, focusing on
            user-friendly interfaces and responsive layouts. I am dedicated to
            staying up-to-date with the latest web technologies and trends,
            ensuring high-quality code and optimal performance.
          </h1>
          <h1 className="  mt-14 mb-8 ms-14 text-2xl font-kanit">
            What is my skills level?
          </h1>

          <div className="ms-14 flex  gap-[370px]">
            <h1>HTML</h1>
            <h1>REACT</h1>
          </div>
          <div className="flex">
            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "95%" }}></div>
            </div>

            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="ms-14 flex  gap-[320px]">
            <h1>JAVASCRIPT</h1>
            <h1>MONGODB</h1>
          </div>
          <div className="flex">
            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "80%" }}></div>
            </div>

            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="ms-14 flex  gap-[340px]">
            <h1>NODE JS</h1>
            <h1>ESPRESS JS</h1>
          </div>
          <div className="flex">
            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "50%" }}></div>
            </div>

            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="ms-14 flex  gap-[370px]">
            <h1>CSS</h1>
            <h1>TAILWIND</h1>
          </div>
          <div className="flex">
            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "80%" }}></div>
            </div>

            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="ms-14 flex  gap-[320px]">
            <h1>BOOTSTRAP</h1>
            <h1>REACT BOOTSTRAP</h1>
          </div>

          <div className="flex">
            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "95%" }}></div>
            </div>

            <div className=" ms-14 mt-5 w-2/4 outline outline-1  bg-white  h-1.5 mb-4 ">
              <div className="bg-black h-1.5  " style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* <div   className="ms-14  mt-8 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div> */}
        </div>

        <div className="  w-1/2">
          {/* <img
            className="mt-20 h-[650px] w-[600px] rounded-xl"
            src="https://i.ibb.co/jZRXQ8V/1dd82084-7631-445b-a64b-26e0833e7827.jpg"
            alt=""
          /> */}

          <Player className=""
            autoplay
            loop
            src={coding}
            style={{ height: "800px", width: "500px" }}
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default About;
