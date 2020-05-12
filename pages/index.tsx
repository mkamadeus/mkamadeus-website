import React from 'react';
import BiodataComponent from '../components/BiodataComponent';
import CardIconComponent from '../components/CardIconComponent';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default class IndexPage extends React.Component {
  render()
  {
    return(
      <div>
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-evenly p-6 py-12 bg-gradient text-white" style={{'minHeight' : '75vh'}}>
            <div className="p-4 w-64 md:w-1/6">
              <img src="/laptop.png" alt="Laptop illustration" />
            </div>
            <div className="flex flex-col">
              <div className="text-3xl text-center md:text-6xl md:text-left font-bold">
                Welcome!
              </div>
              <div className="text-center text-xl font-light">
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
        <div className="container mx-auto p-4">
          <div className="my-6">
            <BiodataComponent />
          </div>
          <div className="flex flex-col md:flex-row my-2 md: mx-2">
            <div className="my-2 md:mx-2">
              <CardIconComponent cardTitle={'Biodata'} icon={require('@fortawesome/free-solid-svg-icons/faUser').faUser as IconProp}>
                Born in Jakarta, grew up in Gading Serpong, and currently living in Bandung.
              </CardIconComponent>
            </div>
            <div className="my-2 md:mx-2">
              <CardIconComponent cardTitle={'Education'} icon={require('@fortawesome/free-solid-svg-icons/faGraduationCap').faGraduationCap  as IconProp}>
                Currently studying in Institut Teknologi Bandung as an Informatics Undergraduate.
              </CardIconComponent>
            </div>
            <div className="my-2 md:mx-2">
              <CardIconComponent cardTitle={'Interest'} icon={require('@fortawesome/free-solid-svg-icons/faCode').faCode as IconProp}>
                Have been interested in programming since middle school; continuing to develop new skills.
              </CardIconComponent>
            </div>
          </div>
        </div>
      </div>
      );  
    }
}