"use client";

import { Suspense, lazy, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({
  scene,
  className = "",
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${className}`}
    >
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 h-full w-full" />
          }
        >
          <Spline
            scene={scene}
            className="absolute inset-0 h-full w-full"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Suspense>
      ) : null}
    </div>
  );
}