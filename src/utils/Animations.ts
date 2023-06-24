import { Variants, animate } from "framer-motion";

type ITransition = {
  duration: number;
  ease: number[];
};

interface IAnimation {
  easeing: number[];
  transition: ITransition;
}

class Animations implements IAnimation {
  easeing!: [0.6, -0.05, 0.01, 0.99];
  transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  stagger = (): Variants => {
    return {
      initial: {
        y: -20,
      },
      animate: {
        y: 0,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.2,
          staggerDirection: 1,
        },
      },
    };
  };

  container = (): Variants => {
    return {
      show: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    };
  };

  item = (): Variants => {
    return {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.2,
        },
      },
    };
  };

  fadeInUp = (): Variants => {
    return {
      initial: {
        y: -60,
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: this.easeing,
        },
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.5,
          ease: this.easeing,
        },
      },
    };
  };

  firstName = (): Variants => {
    return {
      initial: {
        y: -20,
      },
      animate: {
        y: 0,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.04,
          staggerDirection: -1,
        },
      },
    };
  };

  lastName = (): Variants => {
    return {
      initial: {
        y: -20,
      },
      animate: {
        y: 0,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.04,
          staggerDirection: 1,
        },
      },
    };
  };
  letter = (): Variants => {
    const { ease } = this.transition;

    return {
      initial: {
        y: 400,
      },
      animate: {
        y: 0,
        transition: { duration: 1, ease },
      },
    };
  };

  btnGroup = (): Variants => {
    return {
      initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.6, ease: this.easeing },
      },

      animate: {
        y: 0,
        opacity: 1,
        animation: "",
        // animation: {
        //   duration: 0.6,
        //   ease: this.easeing,
        // },
      },
    };
  };

  star = (): Variants => {
    return {
      initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.8, ease: this.easeing },
      },
      // animate: {
      //   y: 0,
      //   opacity: 1,
      //   animation: {
      //     duration: 0.6,
      //     ease: this.easeing,
      //   },
      // },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.5,
          ease: this.easeing,
        },
      },
    };
  };

  header = (): Variants => {
    return {
      initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.05, ease: this.easeing },
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: this.easeing,
        },
      },
    };
  };
}

export default Animations;
