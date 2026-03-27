export const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInRight = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const scaleIn = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export const floatAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [0, -12, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

export const pulseGlow = {
  hidden: { opacity: 0.4, scale: 1 },
  visible: {
    opacity: [0.4, 0.9, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateRing = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 360,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
};

export const scanLine = {
  hidden: { x: "-100%" },
  visible: {
    x: "100%",
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};
