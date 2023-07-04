import React from "react";
import SwiperSlider from "./Swiper/SwiperSlider";
import SwiperSliderSecond from "./Swiper/SwiperSliderSecond";
import SwiperSliderThird from "./Swiper/SwiperSliderThird";
import { FiGithub, FiLink } from "react-icons/fi";

const SeeProjects = () => {
  return (
    <div>
      <h1 className=" font-bold mt-8 ms-12  text-4xl font-kanit">Projects</h1>
      <p className="   ms-12 text-[19px]  font-kanit">
        Welcome to my website! Explore my projects showcased in visually
        appealing card slides, <br /> where you can{" "}
        <b className="text-[17px]">right swipe</b> through multiple images and
        dive into the details of each project.
      </p>
      <div className="drop-shadow-2xl  flex flex-row gap-14 mx-12 my-12">
        <div className="bg-transparent card w-[500px] bg-base-100 shadow-xl">
          <figure>
            <SwiperSlider></SwiperSlider>
          </figure>
          <div className="card-body">
            <div className="divider"></div>

            <h2 className="card-title">Petuk Bengali Cuisine</h2>
            <p className="text-[15px] text-left">
              Developed a basic web application utilizing ReactJS, HTML, React
              Bootstrap,and Firebase to create a recipe site allowing users to
              create accounts and log in with Google/GitHub.Used Node.js on the
              server-side for additional functionality. Possess basic
              proficiency in the development technologies utilized. Users can
              see their desired recipe details if they login to their account
            </p>
            {/* <div className="card-actions justify-between mt-3">
              <div className="badge badge-outline">HTML</div>
              <div className="badge badge-outline">REACT Bootstrap</div>
              <div className="badge badge-outline">REACT JS</div>
              <div className="badge badge-outline">FIREBASE</div>
              <div className="badge badge-outline">NODE JS</div>
            </div> */}

            <div className="flex flex-row justify-between">
              <a
                href="https://petuk-bengali-cuisine-client.web.app/"
                className="w-[130px] btn btn-outline"
              >
                <FiLink></FiLink> Demo
              </a>

              <a
                href="https://github.com/taniaferdousey24promy/petuk-bengali-cuisine-client"
                className=" w-[130px] btn btn-outline"
              >
                {" "}
                <FiGithub></FiGithub> Client
              </a>
              <a
                href="https://github.com/taniaferdousey24promy/petuk-bengali-cuisine-server"
                className=" w-[130px] btn btn-outline"
              >
                {" "}
                <FiGithub></FiGithub> Server
              </a>
            </div>
          </div>
        </div>
        <div className="bg-transparent card w-[500px] bg-base-100 shadow-xl">
          <figure>
            <SwiperSliderSecond></SwiperSliderSecond>
          </figure>
          <div className="card-body">
            <div className="divider"></div>

            <h2 className="card-title">Yumm Foodies Tent</h2>
            <p className="text-[15px] text-left">
              Created a food ordering website with React Routing, JavaScript,
              HTML, and Bootstrap.Enabled users to order any food they desired
              and utilized local storage to store food carts without requiring
              them to log in. In the Ordered Food page they can see their
              ordered food and filter them
            </p>
            <div className="flex flex-row justify-start gap-8">
              <a
                href="https://lively-maamoul-f86f00.netlify.app/"
                className="w-[130px] btn btn-outline"
              >
                {" "}
                <FiLink></FiLink> Demo
              </a>

              <a
                href="https://github.com/taniaferdousey24promy/yumm-foodies-tent"
                className=" w-[130px] btn btn-outline"
              >
                {" "}
                <FiGithub></FiGithub> Client
              </a>
              {/* <a className=" w-[130px] btn btn-outline"> <FiGithub></FiGithub> Server</a> */}
            </div>
          </div>
        </div>
        <div className=" bg-transparent  card w-[500px] bg-base-100 shadow-xl">
          <figure>
            <SwiperSliderThird></SwiperSliderThird>
          </figure>
          <div className="card-body ">
            <div className="divider"></div>

            <h2 className="card-title">Marvel Vault</h2>
            <p className="text-[15px] text-left">
              Users can upload their toy details data into the database . Used
              MongoDB Crud Operations. Which will be shown in all toys
              pages.Customers can see the details by clicking view details. Used
              firebase Google and Email/Password Authentication to create an
              account or login to this website
            </p>

            <div className="flex flex-row justify-between">
              <a
                href="https://marvel-vault-client.web.app/"
                className="w-[130px] btn btn-outline"
              >
                <FiLink></FiLink> Demo
              </a>

              <a
                href="https://github.com/taniaferdousey24promy/marvel-vault-client"
                className=" w-[130px] btn btn-outline"
              >
                {" "}
                <FiGithub></FiGithub> Client
              </a>
              <a
                href="https://github.com/taniaferdousey24promy/marvel-vault-server"
                className=" w-[130px] btn btn-outline"
              >
                {" "}
                <FiGithub></FiGithub> Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeProjects;
