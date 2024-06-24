import {
  AnimatePresence,
  Variants,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";

export default function AnimatedLogo() {
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      controls.start({
        opacity: 1 - latest / window.innerHeight,
      });
    });
  }, [scrollY, controls]);

  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#156165",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 500 500"
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
}
