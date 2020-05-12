import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default class BiodataComponent extends React.Component {
  render()
  {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src="/myphoto.jpg" className="rounded-full w-48 shadow-md hover:shadow-lg" />
        <div className="text-center my-4">
          My name is Matthew Kevin Amadeus, commonly abbreviated as MK. I’m a student who is eager to learn in the fields and branches of computer science and software engineering. I look forward upon cooperating with you! 
        </div>
        <div className="text-center my-4">
          Here&apos;s where you can reach me.  
        </div>
        <div className="flex items-center justify-evenly w-full px-6">
          <FontAwesomeIcon icon={faGithub} size="4x" className="mx-2 text-gray-300 hover:text-black transition duration-150" />
          <FontAwesomeIcon icon={faInstagram} size="4x" className="mx-2 text-gray-300 hover:text-purple-600 transition duration-150" />
          <FontAwesomeIcon icon={faYoutube} size="4x" className="mx-2 text-gray-300 hover:text-red-600 transition duration-150" />
        </div>
      </div>
    );
  }
}