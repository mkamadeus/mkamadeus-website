import React from 'react';
import BiodataComponent from '../components/BiodataComponent';
import WelcomeJumbotronComponent from '../components/WelcomeJumbotronComponent';
import CardContainerComponent from '../components/CardContainerComponent';
import SkillContainerComponent from '../components/SkillContainerComponent';
import ProjectCardComponent from '../components/ProjectCardComponent';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default class IndexPage extends React.Component {
  render() {
    const projectInfo: [
      string,
      string,
      string,
      [IconProp, string, string][]
    ][] = [
      [
        'https://raw.githubusercontent.com/mkamadeus/Python-ITB-NIM-Scraper/master/src/cookies.png',
        'ITB NIM Scraper',
        "I got myself a bunch of data for ITB students by scraping ITB's site!",
        [
          [
            require('@fortawesome/free-brands-svg-icons/faGithub')
              .faGithub as IconProp,
            'hover:text-black',
            'https://github.com/mkamadeus/Python-ITB-NIM-Scraper',
          ],
        ],
      ],
      [
        '/myphoto.jpg',
        'Geprek NIM Finder',
        'With that data I got, my friend and I developed myself an ITB Student ID Finder.',
        [
          [
            require('@fortawesome/free-brands-svg-icons/faGithub')
              .faGithub as IconProp,
            'hover:text-black',
            'https://github.com/mkamadeus/nim-finder-frontend',
          ],
          [
            require('@fortawesome/free-solid-svg-icons/faGlobe')
              .faGlobe as IconProp,
            'hover:text-indigo-500',
            'https://geprek.gatot.id',
          ],
        ],
      ],
    ];
    return (
      <div>
        <WelcomeJumbotronComponent />
        <div className="container mx-auto p-4">
          <div className="my-6">
            <BiodataComponent />
          </div>
          <div className="my-6">
            <CardContainerComponent />
          </div>
          <div className="my-6">
            <SkillContainerComponent />
          </div>
          <div className="my-6">
            <div>
              <div>
                In my studies, I also have done several projects to improve my
                skills out on the wild. Here is a short compilation of my
                projects!
              </div>
              <div className="flex flex-col md:flex-row">
                {projectInfo.map((item) => {
                  return (
                    <div
                      className="my-2 w-full md:w-1/2 md:mx-2 lg:w-1/3"
                      key={item[1].toString()}
                    >
                      <ProjectCardComponent
                        imageUrl={item[0]}
                        title={item[1]}
                        description={item[2]}
                        icons={item[3]}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
