"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  // Update CSS variables on mount
  useEffect(() => {
    const rootStyle = document.body.style;
    rootStyle.setProperty("--gradient-background-start", gradientBackgroundStart);
    rootStyle.setProperty("--gradient-background-end", gradientBackgroundEnd);
    rootStyle.setProperty("--first-color", firstColor);
    rootStyle.setProperty("--second-color", secondColor);
    rootStyle.setProperty("--third-color", thirdColor);
    rootStyle.setProperty("--fourth-color", fourthColor);
    rootStyle.setProperty("--fifth-color", fifthColor);
    rootStyle.setProperty("--pointer-color", pointerColor);
    rootStyle.setProperty("--size", size);
    rootStyle.setProperty("--blending-value", blendingValue);
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  // Update cursor position on mouse move
  useEffect(() => {
    const move = () => {
      setCurX((prevX) => prevX + (tgX - prevX) / 20);
      setCurY((prevY) => prevY + (tgY - prevY) / 20);

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }

      requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {/* Gradient Circles */}
        {[firstColor, secondColor, thirdColor, fourthColor, fifthColor].map(
          (color, index) => (
            <div
              key={index}
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--${index + 1}-color),_0.8)_0,_rgba(var(--${index + 1}-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]`,
                `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `animate-${index + 1}`,
                `opacity-100`
              )}
            ></div>
          )
        )}

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
