"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Control the speed of parallax effect, default 1 (normal), >1 slower, <1 faster. Negative for opposite direction.
  yPercentStart?: number; // Percentage to move from at the start
  yPercentEnd?: number;   // Percentage to move to at the end
  triggerSelector?: string; // Optional custom trigger selector
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  className,
  speed = 0.5, // Default speed for a subtle effect
  yPercentStart = -20,
  yPercentEnd = 20,
  triggerSelector,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      const triggerElement = triggerSelector ? document.querySelector(triggerSelector) || wrapperRef.current : wrapperRef.current;
      
      gsap.fromTo(
        contentRef.current,
        { yPercent: yPercentStart * speed },
        {
          yPercent: yPercentEnd * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerElement,
            start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
            end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        }
      );
    }
  }, [speed, yPercentStart, yPercentEnd, triggerSelector]);

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxWrapper;
