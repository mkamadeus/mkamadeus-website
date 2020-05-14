import React, { Component } from 'react';
import SkillComponent from './SkillComponent';

export default class SkillContainerComponent extends Component {
  render() {
    // prettier-ignore
    const skillSet = [
      ['C'],
      ['C++'],
      ['Java', require('@fortawesome/free-brands-svg-icons/faJava').faJava],
      ['JavaFX', require('@fortawesome/free-brands-svg-icons/faJava').faJava],
      ['Python',require('@fortawesome/free-brands-svg-icons/faPython').faPython],
      ['Flask',require('@fortawesome/free-brands-svg-icons/faPython').faPython],
      ['HTML', require('@fortawesome/free-brands-svg-icons/faHtml5').faHtml5],
      ['CSS', require('@fortawesome/free-brands-svg-icons/faCss3').faCss3],
      ['SCSS', require('@fortawesome/free-brands-svg-icons/faSass').faSass],
      ['Tailwind'],
      ['Javascript', require('@fortawesome/free-brands-svg-icons/faJs').faJs],
      ['React', require('@fortawesome/free-brands-svg-icons/faReact').faReact],
      ['Next.js', require('@fortawesome/free-brands-svg-icons/faReact').faReact],
      ['Vue', require('@fortawesome/free-brands-svg-icons/faVuejs').faVuejs],
      ['Vuetify', require('@fortawesome/free-brands-svg-icons/faVuejs').faVuejs],
      ['Nuxt.js', require('@fortawesome/free-brands-svg-icons/faVuejs').faVuejs],
      ['Typescript'],
      ['MySQL', require('@fortawesome/free-solid-svg-icons/faDatabase').faDatabase],
      ['Node.js', require('@fortawesome/free-brands-svg-icons/faNodeJs').faNodeJs],
    ];

    const skillColorSet = [
      'bg-teal-400',
      'bg-purple-500',
      'bg-indigo-400',
      'bg-pink-400',
    ];
    return (
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center md:text-right md:px-4 md:text-lg">
          Because I love studying computer and software related stuff, I
          developed some skills that I have been honing for a while now. Here
          are a list of my skills.
        </div>
        <div className="px-5 my-2">
          <div className="flex items-center justify-center md:justify-start flex-wrap -mx-1">
            {skillSet.map((item) => {
              return (
                <div key={item.toString()} className="p-1">
                  <SkillComponent
                    skillName={item[0]}
                    bgClass={
                      skillColorSet[
                        Math.floor(Math.random() * skillColorSet.length)
                      ]
                    }
                    icon={item[1] || null}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
