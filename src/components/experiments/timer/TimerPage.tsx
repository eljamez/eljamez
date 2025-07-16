"use client";

import { useEffect, useRef, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import ExperimentsHeader from "../ExperimentsHeader";
import TimerButton from "./TimerButton";

const initialTimer = 10;
const title = "Timer";
const description = `A timer that counts down from ${initialTimer} to 0.`;

export default function TimerPage() {
  const [timer, setTimer] = useState(initialTimer);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const [isExploding, setIsExploding] = useState(false);
  const [dropPx, setDropPx] = useState(0);
  const dropParentRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState(0);
  const [parentTop, setParentTop] = useState(0);

  const [leafX, setLeafX] = useState(0);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            setIsRunning(false);
            if (interval.current) {
              clearInterval(interval.current);
            }
            setIsExploding(true);
            setTimeout(() => {
              setIsExploding(false);
            }, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    setDropPx((timer / initialTimer) * parentHeight);
    if (timer > 0) {
      setLeafX((prev) => (prev > 0 ? -50 : 50));
    } else {
      setLeafX(0);
    }
  }, [timer, parentHeight, parentTop]);

  useEffect(() => {
    function updateHeight() {
      if (dropParentRef.current) {
        setParentHeight(dropParentRef.current.offsetHeight);
        setParentTop(dropParentRef.current.offsetTop);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleStartTimer = () => {
    if (timer === 0) {
      setTimer(initialTimer);
    }
    setIsRunning(true);
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setTimer(initialTimer);
  };

  return (
    <>
      <ExperimentsHeader title={title} description={description} />
      <div className="flex gap-4 items-stretch justify-between">
        <div className="flex flex-col gap-4 items-center justify-center flex-1">
          <div className="flex flex-col gap-8 w-full items-center justify-center">
            <h2 className="text-[10rem] font-bold">{timer}</h2>
            <div className="flex gap-2 w-full max-w-[400px]">
              {!isRunning ? (
                <TimerButton
                  className="bg-green-800/80 hover:bg-green-800 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-md"
                  onClick={handleStartTimer}
                  title="Start"
                />
              ) : (
                <TimerButton
                  className="bg-red-500/80 hover:bg-red-500 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-md"
                  onClick={handlePauseTimer}
                  title="Pause"
                />
              )}
              <TimerButton
                className="bg-blue-800/80 hover:bg-blue-800 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-md"
                onClick={handleResetTimer}
                title="Reset"
              />
            </div>
          </div>
        </div>
        <div
          ref={dropParentRef}
          className="flex flex-col gap-4 items-center justify-start flex-1 relative"
        >
          <div
            className={`text-6xl drop-shadow-hero absolute top-0 left-1/2 -translate-x-1/2 z-10 transition-all duration-300
              ${isRunning ? "animate-leaf-drop" : ""}
            `}
            style={{
              top: `${parentTop}px`,
              transform: `translate(${leafX}px, -${dropPx}px)`,
            }}
          >
            🍃
          </div>
        </div>
      </div>
      {isExploding && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <ConfettiExplosion />
        </div>
      )}
    </>
  );
}
