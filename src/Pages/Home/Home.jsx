import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react';
import Typed from "typed.js";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Home = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a hard working graduate specialized in Computer Science and Engineering ",
        " I am a passionate front-end web developer in MERN stack development",
      ],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="mt-[150px]">

      <div>
        <img
          className="mx-auto rounded-full w-[300px] h-[300px]"
          src="https://i.ibb.co/TthC0cV/Snapchat-800049469.jpg"
          alt=""
        />
        <h1 className="text-center font-bold  mt-5 mb-5 text-4xl font-kanit">
          Tania Ferdousey Promy
        </h1>
      </div>
      <div>
        <span
          className="ms-[420px] mt-[320px] text-[25px] font-kanit "
          ref={el}
        />
        <p className="text-[18px] text-center mt-4">
          {" "}
          Hey, My name is Tania Ferdousey Promy. You can call me Promy. <br /> I
          design and code beautifully simple things and I love what I do. <br />{" "}
          If you want to see my resume click below{" "}
        </p>

        <div className="flex gap-8 mt-8 justify-center text-2xl">
          <FiLinkedin className=""></FiLinkedin>
          <FiInstagram></FiInstagram>
          <FiFacebook></FiFacebook>
          <FiTwitter></FiTwitter>
        </div>

        <a
          className=" ms-[750px] mt-12 btn btn-outline"
          href="resume of Tania Ferdousey Promy.pdf"
          download="resume of Tania Ferdousey Promy.pdf"
        >
          Download Resume
        </a>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "blue",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.9,
              },
            },
          },
          particles: {
           
            color: {
              value: "#808B96",
            },
            links: {
              color: "#D6EAF8",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Home;
