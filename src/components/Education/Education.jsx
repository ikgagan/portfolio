import React from "react";

const Education = () => {
  return (
    <div id="education" className=" container m-auto   mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          <a href="https://www.linkedin.com/in/gaganik/details/education/" target="_blank">Education</a>
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my qualifications.
        </p>
      </div>
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div className=" relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-cyan-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-cyan-500"></div>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-cyan-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Masters of Sience in Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  New Jersey Institue of Technology
                </span>
                <span className=" text-[.9rem] font-semibold text-cyan-500 sm:text-base">
                  September 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                <b>Coursework:</b> Data Structures and Algorithms, Data Management System Design, Operating System Design, Java Programming, Software
                Project Management, Web System Development, Internet & Higher-Level Protocol, Big Data, Data Analytics with R.<br/>
                <b><a target="_blank" href="https://www.linkedin.com/in/gaganik/details/projects/">Project: </a></b>
                <a target="_blank" href="https://github.com/ikgagan/IS601">Ecommerce Website – Sneaker Store</a> 
                (Under <a href="https://www.linkedin.com/in/matttoegel/" target="_blank">Prof.Matthew Toegel</a>) 
                and The City Library (Under <a href="https://web.njit.edu/~dth/" target="_blank">Prof.Dimitri Theodoratos</a>)
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div className=" relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-cyan-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-cyan-500"></div>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-cyan-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Bachelor of Technology in Computer Science Engineering - Internet of Things
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Jain University
                </span>
                <span className=" text-[.9rem] font-semibold text-cyan-500 sm:text-base">
                  August 2017 - May 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                <b>Coursework:</b> Python Programming, Data Structures using C, Object Oriented Programming using Java, Software Engineering Design and Analysis of Algorithms, Big Data Analytics,
                Mobile Application Development, Database Security, Cloud Web Services, IoT System Design, Data Science, NLP, Neural Networks.<br/>
                <b><a target="_blank" href="https://www.linkedin.com/in/gaganik/details/projects/">Project: </a></b> 
                Smart Anti-Theft System (Under Prof.Basavaraju) and Automatic Flood Detection System (Under Prof.Shreenidhi.H.S).
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Education;
