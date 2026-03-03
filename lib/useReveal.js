"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useReveal(
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  once = true,
) {
  const nodeRef = useRef(null);
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = useCallback((node) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    // Reduced motion: reveal immediately
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    // No IntersectionObserver support: reveal immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    // Clean up previous observer (strict mode / rerenders)
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observerRef.current?.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observerRef.current.observe(node);

    return () => observerRef.current?.disconnect();
  }, [threshold, rootMargin, once]);

  // API compatible con tu uso actual: ref es callback
  return { ref: setRef, isVisible };
}
