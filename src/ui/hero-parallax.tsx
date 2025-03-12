"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    icon?: string;
    description?: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] bg-gradient-to-b from-[#1A1A1A] to-[#222222] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
          5 simple steps process to make <br /> your brand go big
        </span>
      </h1>
      <p className="text-white/60 max-w-2xl mt-6 text-lg">
        A proven methodology to transform your expertise into compelling content that builds authority and trust with your audience.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    icon?: string;
    description?: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link 
        href={product.link} 
        className="block group-hover/product:shadow-2xl h-full"
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 group-hover/product:border-white/10">
          <div className="absolute inset-0 opacity-0 group-hover/product:opacity-10 bg-gradient-to-t from-transparent to-white/20 transition-opacity duration-300"></div>
          <div className="p-8 flex flex-col h-full relative z-10">
            {product.icon && (
              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#333] to-[#222] p-4 rounded-lg inline-flex items-center justify-center shadow-lg border border-white/5">
                  <IconComponent iconNumber={product.icon} />
                </div>
              </div>
            )}
            <h2 className="text-3xl font-bold text-white mb-3">{product.title}</h2>
            {product.description && (
              <p className="text-white/70 text-lg mt-auto leading-relaxed">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const IconComponent = ({ iconNumber }: { iconNumber: string }) => {
  // Map the icon numbers to custom SVG icons
  switch (iconNumber) {
    case "01":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16.5V20M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5M12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5M12 7.5V4M21 12H17.5M6.5 12H3" 
            stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "02":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H22M6 16.5H18M10 7.5H14" 
            stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "03":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8.5L9.5 11L7 13.5M12.5 8.5H17M12.5 13.5H17M5.5 20H18.5C19.6046 20 20.5 19.1046 20.5 18V6C20.5 4.89543 19.6046 4 18.5 4H5.5C4.39543 4 3.5 4.89543 3.5 6V18C3.5 19.1046 4.39543 20 5.5 20Z" 
            stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "04":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 9L12 5.5L15.5 9M12 5.5V14.5M5.5 14.5H18.5V19.5H5.5V14.5Z" 
            stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "05":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7.5H4M12 12V16.5M16.5 12V16.5M7.5 12V16.5M5 7.5L6 19.5H18L19 7.5" 
            stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <span className="text-2xl text-white">{iconNumber}</span>;
  }
};