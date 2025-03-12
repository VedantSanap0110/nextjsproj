"use client";
import { useEffect } from "react";

function Form() {
  useEffect(() => {
    // Dynamically create the script tag and append it to the body
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      
      className=" bg-black min-h-screen flex justify-center items-center"
      id="form-section"
    >
      <div
        data-tf-live="01JNQJKQA02HDCR2P1N1TSNWTY"
        className="w-full max-w-2xl"
      ></div>
    </div>
  );
}

export default Form;
