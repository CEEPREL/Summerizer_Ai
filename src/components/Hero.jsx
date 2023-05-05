import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        {/* <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button> */}
      </nav>

      <h1 className='head_text'>
      <span className='orange_gradient '>Welcome to </span>
          <br className='max-md:hidden' />
        <span className='blue_gradient '>Concise Summary AI</span>
      </h1>
      <h2 className='desc'>
        We created this website to simplify reading approach. Our AI powered article summarizer
        helps transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
