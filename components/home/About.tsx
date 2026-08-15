"use client";

import { useEffect, useState } from "react";

import Container from "@/lib/container";
import Reveal from "@/components/animations/Reveal";

type RobotState = "normal" | "question" | "angry";

export default function About() {
  const [robotState, setRobotState] =
    useState<RobotState>("normal");

  const [leftEye, setLeftEye] = useState({
    x: 0,
    y: 0,
  });

  const [rightEye, setRightEye] = useState({
    x: 0,
    y: 0,
  });

  /* ==========================================
     EYE AUTO AIM
  ========================================== */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const leftEyeElement =
        document.getElementById("robot-eye-left");

      const rightEyeElement =
        document.getElementById("robot-eye-right");

      if (!leftEyeElement || !rightEyeElement) {
        return;
      }

      const calculateEyePosition = (
        element: HTMLElement
      ) => {
        const rect =
          element.getBoundingClientRect();

        const centerX =
          rect.left + rect.width / 2;

        const centerY =
          rect.top + rect.height / 2;

        const deltaX =
          event.clientX - centerX;

        const deltaY =
          event.clientY - centerY;

        const distance = Math.sqrt(
          deltaX * deltaX +
            deltaY * deltaY
        );

        if (distance === 0) {
          return {
            x: 0,
            y: 0,
          };
        }

        const maxMovement = 9;

        const directionX =
          deltaX / distance;

        const directionY =
          deltaY / distance;

        const intensity = Math.min(
          distance / 100,
          1
        );

        return {
          x:
            directionX *
            maxMovement *
            intensity,

          y:
            directionY *
            maxMovement *
            intensity,
        };
      };

      setLeftEye(
        calculateEyePosition(
          leftEyeElement
        )
      );

      setRightEye(
        calculateEyePosition(
          rightEyeElement
        )
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  /* ==========================================
     ROBOT CLICK
  ========================================== */

  const handleRobotClick = () => {
    if (robotState === "normal") {
      setRobotState("question");
      return;
    }

    if (robotState === "question") {
      setRobotState("angry");
      return;
    }
  };

  /* ==========================================
     ANGRY → NORMAL
  ========================================== */

  useEffect(() => {
    if (robotState !== "angry") {
      return;
    }

    const timer = setTimeout(() => {
      setRobotState("normal");
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, [robotState]);

  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>
        <Reveal>
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_430px]">

            {/* ==================================
                ABOUT TEXT
            ================================== */}

            <div className="max-w-3xl">

              <p className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-blue-500">
                About Me
              </p>

              <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">

                <p>
                  Hi I'm{" "}
                  <span className="font-medium text-white">
                    Muhammad Nihat Ulil Amri
                  </span>
                  , a Data Science student at Telkom
                  University with a strong interest in
                  data analytics and data-driven
                  decision-making. My career goal is to
                  become a Business Intelligence Analyst
                  who transforms data into valuable
                  business insights.
                </p>

                <p>
                  Currently, I am learning Quantitative
                  Trading (Quant Trading), a data-driven
                  approach to trading that combines
                  statistics, mathematics, and
                  programming to develop and evaluate
                  trading strategies objectively. Through
                  this journey, I continue to strengthen
                  my skills in data analysis, programming,
                  problem-solving, and analytical
                  thinking—abilities that are equally
                  valuable in the field of Business
                  Intelligence.
                </p>

                <p>
                  I believe that the best way to learn is
                  by building real projects. That's why I
                  continuously explore new technologies,
                  create practical solutions, and expand
                  my technical expertise to grow as a data
                  professional.
                </p>

              </div>
            </div>


            {/* ==================================
                ROBOT
            ================================== */}

            <div className="flex justify-center lg:justify-end">

              <div
                className={`robot-wrapper ${
                  robotState === "angry"
                    ? "robot-angry"
                    : ""
                }`}
                onClick={handleRobotClick}
                role="button"
                tabIndex={0}
                aria-label="Interactive robot"

                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    handleRobotClick();
                  }
                }}
              >

                {/* ==================================
                    GLOW
                ================================== */}

                <div
                  className={`robot-glow ${
                    robotState === "question"
                      ? "glow-question"
                      : robotState === "angry"
                      ? "glow-angry"
                      : ""
                  }`}
                />


                {/* ==================================
                    ANTENNAS
                ================================== */}

                <div className="antenna antenna-left">
                  <div className="antenna-ball" />
                </div>

                <div className="antenna antenna-right">
                  <div className="antenna-ball" />
                </div>


                {/* ==================================
                    HEAD
                ================================== */}

                <div
                  className={`robot-head ${
                    robotState === "question"
                      ? "head-question"
                      : robotState === "angry"
                      ? "head-angry"
                      : ""
                  }`}
                >

                  <div className="head-highlight" />


                  {/* ==================================
                      SCREEN
                  ================================== */}

                  <div className="robot-screen">

                    <span className="screen-corner corner-tl" />
                    <span className="screen-corner corner-tr" />
                    <span className="screen-corner corner-bl" />
                    <span className="screen-corner corner-br" />


                    {/* ==================================
                        NORMAL FACE
                    ================================== */}

                    {robotState === "normal" && (
                      <div className="normal-face">

                        <div
                          id="robot-eye-left"
                          className="eye"
                        >
                          <div
                            className="pupil"
                            style={{
                              transform: `
                                translate(
                                  calc(-50% + ${leftEye.x}px),
                                  calc(-50% + ${leftEye.y}px)
                                )
                              `,
                            }}
                          />
                        </div>


                        <div
                          id="robot-eye-right"
                          className="eye"
                        >
                          <div
                            className="pupil"
                            style={{
                              transform: `
                                translate(
                                  calc(-50% + ${rightEye.x}px),
                                  calc(-50% + ${rightEye.y}px)
                                )
                              `,
                            }}
                          />
                        </div>

                      </div>
                    )}


                    {/* ==================================
                        QUESTION FACE
                    ================================== */}

                    {robotState === "question" && (
                      <div className="question-face">
                        <div className="question-symbol">
                          ?
                        </div>
                      </div>
                    )}


                    {/* ==================================
                        ANGRY FACE
                    ================================== */}

                    {robotState === "angry" && (
                      <div className="angry-face">

                        <div className="angry-eye angry-eye-left">
                          <div className="angry-pupil" />
                        </div>

                        <div className="angry-eye angry-eye-right">
                          <div className="angry-pupil" />
                        </div>

                        <div className="angry-brow angry-brow-left" />

                        <div className="angry-brow angry-brow-right" />

                      </div>
                    )}

                  </div>
                </div>


                {/* ==================================
                    EARS
                ================================== */}

                <div className="ear ear-left">
                  <div />
                </div>

                <div className="ear ear-right">
                  <div />
                </div>


                {/* ==================================
                    BODY
                ================================== */}

                <div className="robot-body">

                  <div className="blue-chest">

                    <div className="chest-light">
                      <div />
                    </div>

                  </div>

                  <div className="robot-belly" />

                  <div className="body-center" />

                </div>


                {/* ==================================
                    LEFT ARM
                ================================== */}

                <div className="robot-arm arm-left">

                  <div className="blue-arm" />

                  <div className="white-arm">

                    <div className="hand">
                      <span />
                      <span />
                      <span />
                    </div>

                  </div>

                </div>


                {/* ==================================
                    RIGHT ARM
                ================================== */}

                <div className="robot-arm arm-right">

                  <div className="blue-arm" />

                  <div className="white-arm">

                    <div className="hand">
                      <span />
                      <span />
                      <span />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </Reveal>
      </Container>


      {/* ==========================================
          ROBOT CSS
      =========================================== */}

      <style jsx>{`

        /* ==========================================
           ROBOT BASE
        ========================================== */

        .robot-wrapper {
          position: relative;

          width: 360px;
          height: 500px;

          cursor: pointer;
          user-select: none;

          outline: none;

          animation:
            robotFloat
            4s
            ease-in-out
            infinite;

          transition:
            filter
            0.25s
            ease;
        }

        .robot-wrapper:hover {
          filter:
            brightness(1.04);
        }

        .robot-wrapper:active {
          transform:
            scale(0.97);
        }


        /* ==========================================
           GLOW
        ========================================== */

        .robot-glow {
          position: absolute;

          left: 50%;
          top: 45%;

          width: 280px;
          height: 280px;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            rgba(
              59,
              130,
              246,
              0.11
            );

          filter:
            blur(60px);

          pointer-events: none;

          transition:
            all
            0.4s
            ease;
        }

        .glow-question {
          background:
            rgba(
              34,
              211,
              238,
              0.22
            );

          transform:
            translate(-50%, -50%)
            scale(1.15);
        }

        .glow-angry {
          background:
            rgba(
              239,
              68,
              68,
              0.2
            );

          transform:
            translate(-50%, -50%)
            scale(1.12);
        }


        /* ==========================================
           ANTENNA
        ========================================== */

        .antenna {
          position: absolute;

          top: 8px;

          width: 35px;
          height: 70px;

          z-index: 2;
        }

        .antenna-left {
          left: 58px;

          transform:
            rotate(-17deg);
        }

        .antenna-right {
          right: 58px;

          transform:
            rotate(17deg);
        }

        .antenna-ball {
          width: 23px;
          height: 43px;

          margin: auto;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #a5ecff,
              #55adf5 60%,
              #3677cf
            );

          box-shadow:
            inset
            -5px
            -7px
            10px
            rgba(0,0,0,0.15),

            0
            0
            18px
            rgba(
              96,
              165,
              250,
              0.25
            );
        }


        /* ==========================================
           HEAD
        ========================================== */

        .robot-head {
          position: absolute;

          left: 50%;
          top: 62px;

          width: 300px;
          height: 225px;

          transform:
            translateX(-50%);

          border-radius:
            70px;

          background:
            linear-gradient(
              145deg,
              #ffffff 0%,
              #f5f7fa 45%,
              #d9e0e8 100%
            );

          box-shadow:
            inset
            10px
            10px
            25px
            rgba(
              255,
              255,
              255,
              0.95
            ),

            inset
            -10px
            -12px
            25px
            rgba(
              80,
              100,
              120,
              0.18
            ),

            0
            20px
            35px
            rgba(
              0,
              0,
              0,
              0.15
            );

          z-index: 5;
        }

        .head-question {
          animation:
            headQuestion
            0.45s
            ease;
        }

        .head-angry {
          animation:
            headAngry
            0.4s
            ease;
        }

        .head-highlight {
          position: absolute;

          left: 42px;
          top: 16px;

          width: 130px;
          height: 20px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.75
            );

          filter:
            blur(5px);
        }


        /* ==========================================
           SCREEN
        ========================================== */

        .robot-screen {
          position: absolute;

          left: 50%;
          top: 42px;

          width: 245px;
          height: 140px;

          transform:
            translateX(-50%);

          border-radius:
            38px;

          background:
            radial-gradient(
              circle at 50% 20%,
              #1e293b,
              #090d14 70%
            );

          border:
            4px solid
            #cbd5e1;

          box-shadow:
            inset
            0
            5px
            15px
            rgba(
              255,
              255,
              255,
              0.06
            ),

            inset
            0
            -10px
            25px
            rgba(
              0,
              0,
              0,
              0.65
            ),

            0
            6px
            15px
            rgba(
              0,
              0,
              0,
              0.22
            );

          overflow:
            hidden;
        }


        /* ==========================================
           SCREEN CORNERS
        ========================================== */

        .screen-corner {
          position: absolute;

          width: 16px;
          height: 16px;

          border-color:
            #67e8f9;

          border-style:
            solid;

          z-index: 20;
        }

        .corner-tl {
          left: 18px;
          top: 20px;

          border-width:
            4px
            0
            0
            4px;
        }

        .corner-tr {
          right: 18px;
          top: 20px;

          border-width:
            4px
            4px
            0
            0;
        }

        .corner-bl {
          left: 18px;
          bottom: 20px;

          border-width:
            0
            0
            4px
            4px;
        }

        .corner-br {
          right: 18px;
          bottom: 20px;

          border-width:
            0
            4px
            4px
            0;
        }


        /* ==========================================
           NORMAL FACE
        ========================================== */

        .normal-face {
          position: absolute;

          inset: 0;

          animation:
            faceAppear
            0.3s
            ease;
        }


        /* ==========================================
           NORMAL EYES
        ========================================== */

        .eye {
          position: absolute;

          top: 47px;

          width: 55px;
          height: 65px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 35% 30%,
              #d9ffff,
              #67e8f9 55%,
              #22d3ee
            );

          box-shadow:
            0
            0
            15px
            rgba(
              103,
              232,
              249,
              0.85
            ),

            0
            0
            35px
            rgba(
              34,
              211,
              238,
              0.35
            );
        }

        #robot-eye-left {
          left: 55px;
        }

        #robot-eye-right {
          right: 55px;
        }

        .pupil {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 22px;
          height: 28px;

          border-radius: 50%;

          background:
            #111827;

          transition:
            transform
            0.055s
            linear;
        }


        /* ==========================================
           QUESTION
        ========================================== */

        .question-face {
          position: absolute;

          inset: 0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          animation:
            questionAppear
            0.35s
            cubic-bezier(
              0.175,
              0.885,
              0.32,
              1.275
            );
        }

        .question-symbol {
          margin-top: -2px;

          font-size: 76px;

          font-weight: 900;

          line-height: 1;

          color:
            #67e8f9;

          text-shadow:
            0
            0
            10px
            rgba(
              103,
              232,
              249,
              0.9
            ),

            0
            0
            35px
            rgba(
              34,
              211,
              238,
              0.5
            );
        }


        /* ==========================================
           ANGRY FACE
        ========================================== */

        .angry-face {
          position: absolute;

          inset: 0;

          animation:
            angryFaceAppear
            0.25s
            ease;
        }

        .angry-eye {
          position: absolute;

          top: 54px;

          width: 53px;
          height: 53px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 35% 30%,
              #ffb4b4,
              #ef4444 55%,
              #991b1b
            );

          box-shadow:
            0
            0
            20px
            rgba(
              239,
              68,
              68,
              0.9
            );
        }

        .angry-eye-left {
          left: 55px;
        }

        .angry-eye-right {
          right: 55px;
        }

        .angry-pupil {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 17px;
          height: 27px;

          transform:
            translate(
              -50%,
              -50%
            );

          border-radius: 50%;

          background:
            #450a0a;
        }


        /* ==========================================
           ANGRY BROWS
        ========================================== */

        .angry-brow {
          position: absolute;

          top: 39px;

          width: 60px;
          height: 8px;

          border-radius:
            999px;

          background:
            #ef4444;

          box-shadow:
            0
            0
            12px
            rgba(
              239,
              68,
              68,
              0.8
            );
        }

        .angry-brow-left {
          left: 50px;

          transform:
            rotate(18deg);
        }

        .angry-brow-right {
          right: 50px;

          transform:
            rotate(-18deg);
        }


        /* ==========================================
           EARS
        ========================================== */

        .ear {
          position: absolute;

          top: 125px;

          width: 55px;
          height: 70px;

          border-radius:
            50%;

          background:
            linear-gradient(
              145deg,
              #8fd8ff,
              #579de8 60%,
              #3d76c5
            );

          box-shadow:
            inset
            -8px
            -8px
            12px
            rgba(
              0,
              0,
              0,
              0.15
            ),

            inset
            6px
            5px
            10px
            rgba(
              255,
              255,
              255,
              0.3
            );

          z-index: 3;
        }

        .ear-left {
          left: 15px;
        }

        .ear-right {
          right: 15px;
        }

        .ear div {
          position: absolute;

          top: 18px;

          width: 16px;
          height: 35px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.18
            );
        }

        .ear-left div {
          left: 10px;
        }

        .ear-right div {
          right: 10px;
        }


        /* ==========================================
           BODY
        ========================================== */

        .robot-body {
          position: absolute;

          left: 50%;
          top: 280px;

          width: 245px;
          height: 170px;

          transform:
            translateX(-50%);

          border-radius:
            45px
            45px
            70px
            70px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #edf1f5 55%,
              #cdd6df
            );

          box-shadow:
            inset
            8px
            8px
            20px
            rgba(
              255,
              255,
              255,
              0.9
            ),

            inset
            -10px
            -12px
            20px
            rgba(
              50,
              70,
              90,
              0.18
            ),

            0
            15px
            25px
            rgba(
              0,
              0,
              0,
              0.15
            );

          z-index: 4;
        }


        /* ==========================================
           CHEST
        ========================================== */

        .blue-chest {
          position: absolute;

          left: 50%;
          top: 0;

          width: 160px;
          height: 80px;

          transform:
            translateX(-50%);

          border-radius:
            0
            0
            50px
            50px;

          background:
            linear-gradient(
              145deg,
              #9be1ff,
              #5eabe9 65%,
              #4a8dd0
            );
        }

        .chest-light {
          position: absolute;

          left: 50%;
          top: 18px;

          width: 50px;
          height: 50px;

          transform:
            translateX(-50%);

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          background:
            radial-gradient(
              circle,
              #d8ffff,
              #67e8f9 55%,
              #38bdf8
            );

          box-shadow:
            0
            0
            18px
            rgba(
              34,
              211,
              238,
              0.75
            );
        }

        .chest-light div {
          width: 20px;
          height: 25px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.45
            );
        }


        /* ==========================================
           BELLY
        ========================================== */

        .robot-belly {
          position: absolute;

          left: 50%;
          bottom: -3px;

          width: 185px;
          height: 105px;

          transform:
            translateX(-50%);

          border-radius:
            50%;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #e7ebef
            );

          box-shadow:
            inset
            -8px
            -10px
            15px
            rgba(
              70,
              90,
              110,
              0.12
            );
        }

        .body-center {
          position: absolute;

          left: 50%;
          bottom: 30px;

          width: 42px;
          height: 60px;

          transform:
            translateX(-50%);

          border-radius:
            0
            0
            20px
            20px;

          background:
            linear-gradient(
              145deg,
              #72c9f8,
              #4b99d8
            );
        }


        /* ==========================================
           ARMS BASE
        ========================================== */

        .robot-arm {
          position: absolute;

          top: 295px;

          width: 70px;
          height: 145px;

          z-index: 2;

          transform-origin:
            50% 5%;
        }

        .arm-left {
          left: 22px;

          transform:
            rotate(18deg);
        }

        .arm-right {
          right: 22px;

          transform:
            rotate(-18deg);
        }


        /* ==========================================
           BLUE SHOULDER
        ========================================== */

        .blue-arm {
          position: absolute;

          left: 12px;
          top: 0;

          width: 50px;
          height: 65px;

          border-radius:
            30px
            30px
            15px
            15px;

          background:
            linear-gradient(
              145deg,
              #91d9ff,
              #579fe3
            );

          box-shadow:
            inset
            4px
            4px
            8px
            rgba(
              255,
              255,
              255,
              0.25
            );
        }


        /* ==========================================
           WHITE FOREARM
        ========================================== */

        .white-arm {
          position: absolute;

          left: 18px;
          top: 55px;

          width: 45px;
          height: 90px;

          border-radius:
            15px
            15px
            30px
            30px;

          background:
            linear-gradient(
              145deg,
              #f5f7f9,
              #d7dde3
            );

          box-shadow:
            inset
            -7px
            -7px
            10px
            rgba(
              0,
              0,
              0,
              0.12
            );

          transform-origin:
            50% 5%;
        }


        /* ==========================================
           HAND
        ========================================== */

        .hand {
          position: absolute;

          left: 50%;
          bottom: -18px;

          width: 48px;
          height: 38px;

          transform:
            translateX(-50%);

          border-radius:
            40%
            40%
            50%
            50%;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #d9e0e7
            );

          box-shadow:
            inset
            -5px
            -5px
            8px
            rgba(
              0,
              0,
              0,
              0.12
            );
        }

        .hand span {
          position: absolute;

          top: 2px;

          width: 8px;
          height: 21px;

          border-radius:
            10px;

          background:
            #e1e7ec;
        }

        .hand span:nth-child(1) {
          left: 7px;

          transform:
            rotate(-15deg);
        }

        .hand span:nth-child(2) {
          left: 19px;

          transform:
            translateY(-3px);
        }

        .hand span:nth-child(3) {
          right: 7px;

          transform:
            rotate(15deg);
        }


        /* ==========================================
           ANGRY ARM MOVEMENT
        ========================================== */

        .robot-angry .arm-left {
          animation:
            angryLeftArm
            0.32s
            cubic-bezier(
              0.45,
              0,
              0.55,
              1
            )
            infinite;
        }

        .robot-angry .arm-right {
          animation:
            angryRightArm
            0.32s
            cubic-bezier(
              0.45,
              0,
              0.55,
              1
            )
            infinite;
        }


        /* ==========================================
           LEFT ARM ANGRY
        ========================================== */

        @keyframes angryLeftArm {

          0% {
            transform:
              rotate(18deg)
              translateY(0);
          }

          18% {
            transform:
              rotate(10deg)
              translateY(-17px);
          }

          38% {
            transform:
              rotate(3deg)
              translateY(-35px);
          }

          52% {
            transform:
              rotate(8deg)
              translateY(-29px);
          }

          72% {
            transform:
              rotate(20deg)
              translateY(-10px);
          }

          88% {
            transform:
              rotate(23deg)
              translateY(-3px);
          }

          100% {
            transform:
              rotate(18deg)
              translateY(0);
          }

        }


        /* ==========================================
           RIGHT ARM ANGRY
        ========================================== */

        @keyframes angryRightArm {

          0% {
            transform:
              rotate(-18deg)
              translateY(0);
          }

          16% {
            transform:
              rotate(-9deg)
              translateY(-20px);
          }

          36% {
            transform:
              rotate(-2deg)
              translateY(-37px);
          }

          51% {
            transform:
              rotate(-9deg)
              translateY(-27px);
          }

          74% {
            transform:
              rotate(-21deg)
              translateY(-9px);
          }

          89% {
            transform:
              rotate(-24deg)
              translateY(-2px);
          }

          100% {
            transform:
              rotate(-18deg)
              translateY(0);
          }

        }


        /* ==========================================
           HAND JITTER
        ========================================== */

        .robot-angry .hand {
          animation:
            angryHand
            0.16s
            ease-in-out
            infinite
            alternate;
        }

        @keyframes angryHand {

          0% {
            transform:
              translateX(-50%)
              rotate(-4deg);
          }

          100% {
            transform:
              translateX(-50%)
              rotate(6deg)
              translateY(4px);
          }

        }


        /* ==========================================
           FLOAT
        ========================================== */

        @keyframes robotFloat {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-12px);
          }

        }


        /* ==========================================
           FACE APPEAR
        ========================================== */

        @keyframes faceAppear {

          from {
            opacity: 0;

            transform:
              scale(0.8);
          }

          to {
            opacity: 1;

            transform:
              scale(1);
          }

        }


        /* ==========================================
           QUESTION APPEAR
        ========================================== */

        @keyframes questionAppear {

          from {
            opacity: 0;

            transform:
              scale(0.4)
              rotate(-15deg);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              rotate(0);
          }

        }


        /* ==========================================
           ANGRY APPEAR
        ========================================== */

        @keyframes angryFaceAppear {

          from {
            opacity: 0;

            transform:
              scale(0.8);
          }

          to {
            opacity: 1;

            transform:
              scale(1);
          }

        }


        /* ==========================================
           QUESTION HEAD
        ========================================== */

        @keyframes headQuestion {

          0% {
            transform:
              translateX(-50%)
              rotate(0);
          }

          30% {
            transform:
              translateX(-50%)
              rotate(-4deg);
          }

          60% {
            transform:
              translateX(-50%)
              rotate(4deg);
          }

          100% {
            transform:
              translateX(-50%)
              rotate(0);
          }

        }


        /* ==========================================
           ANGRY HEAD SHAKE
        ========================================== */

        @keyframes headAngry {

          0% {
            transform:
              translateX(-50%);
          }

          20% {
            transform:
              translateX(
                calc(-50% - 5px)
              );
          }

          40% {
            transform:
              translateX(
                calc(-50% + 5px)
              );
          }

          60% {
            transform:
              translateX(
                calc(-50% - 4px)
              );
          }

          80% {
            transform:
              translateX(
                calc(-50% + 4px)
              );
          }

          100% {
            transform:
              translateX(-50%);
          }

        }


        /* ==========================================
           RESPONSIVE
        ========================================== */

        @media (max-width: 1024px) {

          .robot-wrapper {
            transform:
              scale(0.9);
          }

        }

        @media (max-width: 640px) {

          .robot-wrapper {
            transform:
              scale(0.78);
          }

        }


        /* ==========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .robot-wrapper {
            animation:
              none;
          }

          .robot-angry .arm-left,
          .robot-angry .arm-right,
          .robot-angry .hand {
            animation:
              none;
          }

        }

      `}</style>
    </section>
  );
}