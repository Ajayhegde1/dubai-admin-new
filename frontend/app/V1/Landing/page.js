"use client";

import { PhoneVerification } from "@/components/Landing/PhoneVerificationSignUp/PhoneVerificationSignUp";
import logoImg from "@/public/clublogo.png";
import Image from "next/image";
import Link from "next/link";
import bg2Img from "@/public/bg2.jpeg";
import "./helper.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import rotaryImg from "@/public/rotary.png";

export default function Landing() {
  const lettersRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Make it loop infinitely

    // Define the animation
    tl.to(button, { duration: 1, scale: 1.05 }) // Zoom in
      .to(button, { duration: 1, scale: 1 }); // Zoom out

    return () => {
      tl.kill(); // Clean up GSAP animation when component unmounts
    };
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".h",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1, // Adjust the stagger amount as needed
      },
      {
        opacity: 1,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section className="h-[100vh] w-[100vw]">
      <section className="w-full h-auto z-50 flex justify-center py-[10px]">
        <div className="w-[100%] px-[4vw]  flex justify-between">
          <Image
            className="lg:w-[8vw] md:w-[8vw] sm:w-[16vw] xl:w-[8vw] 2xl:w-[8vw] w-[25vw]"
            src={rotaryImg}
          />
          <div className="flex justify-end items-center gap-[2vw]">
            <Link href="/V1/SignUpPage">
              <button
                ref={buttonRef}
                className="zoom-button px-[5vw] 2xl:px-[3vw] xl:px-[3vw] lg:px-[3vw] md:px-[3vw] sm:px-[3vw]  py-[1vh] rounded-full bg-gradient-to-r from-[#78AADC] via-[#5686DD] to-[#333FC4] text-white 2xl:font-[600] xl:font-[600] md:font-[600] sm:font-[600] lg:font-[600] font-[600] xl:text-[20px] text-[14px] lg:text-[20px] md:text-[20px] sm:text-[20px]  2xl:text-[20px]  shadow-[#65529D] shadow-md"
              >
                Register
              </button>
            </Link>
            <Link href="/V1/SignInPage">
              <button
                ref={buttonRef}
                className="zoom-button px-[7vw] 2xl:px-[4vw] xl:px-[4vw] lg:px-[4vw] md:px-[4vw] sm:px-[4vw]  py-[1vh] rounded-full bg-gradient-to-r from-[#78AADC] via-[#5686DD] to-[#333FC4] text-white 2xl:font-[600] xl:font-[600] md:font-[600] sm:font-[600] lg:font-[600] font-[600] xl:text-[20px] text-[14px] lg:text-[20px] md:text-[20px] sm:text-[20px]  2xl:text-[20px]  shadow-[#65529D] shadow-md"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="a w-[100vw]  md:flex lg:flex xl:flex 2xl:flex  px-[2vw] xl:px-[4vw] lg:px-[4vw] md:px-[10vw] ">
        <div className="relative z-10 text-center w-full mt-[8vh]">
          <h1 className="ab xl:font-bold 2xl:font-bold md:font-bold lg:font-bold sm:font-bold font-[800] lg:text-8xl md:text-8xl xl:text-8xl 2xl:text-8xl text-[40px] text-[#438EE3]">
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[0] = el)}
            >
              R
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[1] = el)}
            >
              o
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[2] = el)}
            >
              t
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[3] = el)}
            >
              a
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[4] = el)}
            >
              r
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[5] = el)}
            >
              y
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[6] = el)}
            >
              {" "}
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[7] = el)}
            >
              C
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[8] = el)}
            >
              l
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[9] = el)}
            >
              u
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[10] = el)}
            >
              b
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[11] = el)}
            >
              {" "}
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[12] = el)}
            >
              W
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[13] = el)}
            >
              e
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[14] = el)}
            >
              l
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[15] = el)}
            >
              c
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[16] = el)}
            >
              o
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[17] = el)}
            >
              m
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[18] = el)}
            >
              e
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[19] = el)}
            >
              '
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[20] = el)}
            >
              s
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[21] = el)}
            >
              {" "}
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[22] = el)}
            >
              Y
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[23] = el)}
            >
              o
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[24] = el)}
            >
              u
            </span>
          </h1>
        </div>

        {/* <div className="flex items-center flex-col space-y-20 w-full lg:w-[60vw] md:w-[60w] xl:w-[60w] 2xl:w-[60vw] justify-center">
          <div className="main-div relative z-10 text-center">
            <p className="text-[#E3AE23] font-bold lg:text-8xl md:text-8xl xl:text-8xl 2xl:text-8xl text-6xl">
              Conference 2024
            </p>
            <p className="font-bold lg:text-6xl md:text-6xl xl:text-6xl 2xl:text-6xl  text-4xl text- text-[#16468F]">
              Let's Go Dubai
            </p>

            <div className="mt-[10vh]">
              <Link href="/V1/SignUpPage">
                <button
                  ref={buttonRef}
                  className="zoom-button px-[3vw] py-[2vh] rounded-full bg-gradient-to-r from-[#18458D] via-[#65529D] to-[#AB67A9] text-white font-[600] text-[20px]  shadow-[#65529D] shadow-md"
                >
                  Get Started
                </button>
              </Link>
              <p className="mt-[4vh] text-[20px] font-[500]">
                Already Have an Account?{" "}
                <Link href="/V1/SignInPage">
                  <span className=" hover:underline cursor-pointer hover:text-blue-500 ">
                    Log In
                  </span>
                </Link>
              </p>
              
            </div>
          </div>
        </div> */}
      </section>
      <div className="flex mt-[12vh] sm:mt-[10vh] md:mt-[10vh] lg:mt-[10vh] xl:mt-[10vh] 2xl:mt-[10vh] items-center justify-center w-[100vw] 2xl:ml-[-2vw]  ">
        <Image
          className="lg:w-[70vw] sm:w-[80vw] md:w-[80vw] xl:w-[60vw] 2xl:w-[50vw] w-[100vw]"
          src={logoImg}
        />
      </div>
    </section>
  );
}
