import { motion } from "framer-motion";
import React from "react";
import Animations from "../../utils/Animations";

type LetterProps = {
  children: string;
  isSecond?: boolean;
};

type TextSequenceProps = {
  words: string[];
  className?: string;
};

const { letter, firstName, lastName, fadeInUp } = new Animations();

const Letter = ({ children, isSecond }: LetterProps) => (
  <motion.span variants={letter()} className={isSecond ? "second" : ""}>
    {children}
  </motion.span>
);

export const TextSequence = ({ words, className = "" }: TextSequenceProps) => {
  let isFirstLetter = true;

  return (
    <motion.span
      variants={className === "first" ? firstName() : lastName()}
      initial="initial"
      animate="animate"
      className={className}
    >
      {words.map((word, i) => {
        const letters = word.split("");
        if (word.indexOf(word) === 0) {
          isFirstLetter = false;
        }

        return (
          <React.Fragment key={i}>
            {letters.map((letter, j) => {
              const isSecond = isFirstLetter;
              if (isSecond) {
                isFirstLetter = false;
              }

              return (
                <Letter key={`${i}-${j}`} isSecond={isSecond}>
                  {letter}
                </Letter>
              );
            })}
            {i !== words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </motion.span>
  );
};

