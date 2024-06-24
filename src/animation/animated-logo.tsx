import {
  AnimatePresence,
  Variants,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();
  const [, setOpacity] = useState(1);

  // Effect to animate based on scroll position
  useEffect(() => {
    return scrollY.onChange((latest) => {
      const newOpacity = Math.max(1 - latest / window.innerHeight, 0);
      setOpacity(newOpacity);
      controls.start({ opacity: newOpacity });
    });
  }, [scrollY, controls]);

  // Function to handle interaction (mouse hover and click)
  // eslint-disable-next-line no-unused-vars
  const handleInteraction = () => {
    setOpacity(1);
    controls.start({ opacity: 1 });
  };

  // Effect to add event listeners for mouse hover, click, and scroll reset
  useEffect(() => {
    const handleMouseEnter = () => {
      setOpacity(1);
      controls.start({ opacity: 1 });
    };

    const handleMouseLeave = () => {
      const newOpacity = Math.max(1 - scrollY.get() / window.innerHeight, 0);
      setOpacity(newOpacity);
      controls.start({ opacity: newOpacity });
    };

    const handleClick = () => {
      setOpacity(1);
      controls.start({ opacity: 1 });
    };

    window.addEventListener("mouseenter", handleMouseEnter); // Listen for mouse enter anywhere on the window
    window.addEventListener("mouseleave", handleMouseLeave); // Listen for mouse leave anywhere on the window
    window.addEventListener("click", handleClick); // Listen for click anywhere on the window
    scrollY.onChange(handleMouseLeave); // Listen for scroll to adjust opacity

    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      scrollY.clearListeners(); // Clear scroll listener
    };
  }, [controls, scrollY]);

  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#8A2BE2",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
        animate={controls}
      >
        <motion.path
          d="M100 420V0H200V180L375 0H500L300 220L500 420H375L200 240V420H100Z"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
};

export default AnimatedLogo;
