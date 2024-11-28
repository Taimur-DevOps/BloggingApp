'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(ref, options = {}) {
  // useEffect(() => {
  //   const element = ref.current;
  //   if (!element) return;

  //   const defaults = {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.6,
  //     ease: 'power2.out',
  //   };

  //   const animation = gsap.from(element, {
  //     scrollTrigger: {
  //       trigger: element,
  //       start: 'top bottom-=100',
  //       toggleActions: 'play none none reverse',
  //     },
  //     ...defaults,
  //     ...options,
  //   });

  //   return () => {
  //     animation.kill();
  //   };
  // }, [ref, options]);
}