import React from 'react';

export default class WelcomeJumbotronComponent extends React.Component{
  render() {
    return (
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center justify-evenly p-6 py-12 bg-gradient text-white" style={{'minHeight' : '75vh'}}>
          <div className="p-4 w-56 md:w-1/6">
            <img src="./laptop.png" alt="Laptop illustration" />
          </div>
          <div className="flex flex-col">
            <div className="text-4xl text-center md:text-6xl md:text-left font-bold">
              Welcome!
            </div>
            <div className="text-center text-lg md:text-xl font-light">
              My name is Matthew Kevin Amadeus, and this is my website.
            </div>
          </div>
        </div>
        <div className="absolute w-full"  style={{'bottom' : '0'}}>
          <svg width="100%" height="50vh" viewBox="0 0 500 500" preserveAspectRatio="none">
            <path d="M 0 475 C 200 375 275 500 500 475 L 500 500 L 0 500 Z" fill="white" />
          </svg>
        </div>
      </div>
    );
  }
}