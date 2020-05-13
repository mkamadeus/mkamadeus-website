import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default class BiodataComponent extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:w-3/4 items-center">
          <div>
            <img
              src="./myphoto.jpg"
              className="rounded-full w-48 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="text-center my-4">
            <h1 className="text-lg">
              My name is Matthew Kevin Amadeus, commonly abbreviated as MK. I’m
              a student who is eager to learn in the fields and branches of
              computer science and software engineering. I look forward upon
              cooperating with you!
            </h1>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="text-center my-4 text-lg">
            Here are some of my most used social media; both for entertainment
            and learning purposes.
          </div>
          <div className="flex items-center justify-evenly w-full px-6">
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              className="mx-2 text-gray-300 hover:text-black transition duration-150"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              className="mx-2 text-gray-300 hover:text-purple-600 transition duration-150"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="3x"
              className="mx-2 text-gray-300 hover:text-red-600 transition duration-150"
            />
          </div>
        </div>
      </div>
    );
  }
}
