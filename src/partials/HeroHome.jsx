import React from 'react';

import HeroImage from '../images/hero-image.png';
import LogoImage from '../images/logo.png';


function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">

          {/* Section header */}
          {/* <div className="text-center pb-12 md:pb-16">
            <h1 className="text 6xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-700">Interpretelle</span>
            </h1>
            <h1 className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4">
              <span >Better meetings with </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">human intepretation</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">We are certified translators lorem impum</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Services</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={LogoImage} alt="Hero" />
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={HeroImage} alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;