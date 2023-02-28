"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
const RoleTyped = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Mentor", "Digital Entrepreneur"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span className="multi-role" ref={el} />;
};

export default RoleTyped;
