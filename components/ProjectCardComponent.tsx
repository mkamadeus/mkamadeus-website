import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ProjectCardComponentProps {
  imageUrl: string;
  title: string;
  description: string;
  icons?: [IconProp, string, string][];
}

export default class ProjectCardComponent extends Component<
  ProjectCardComponentProps
> {
  render() {
    return (
      <div className="flex flex-col rounded-lg shadow">
        <div className="overflow-hidden relative">
          <div
            className="bg-cover bg-center rounded-t-lg h-40 w-full"
            style={{ filter: 'grayscale(60%)' }}
          >
            <img
              src={this.props.imageUrl}
              className="object-cover object-none object-center h-40 w-full rounded-t-lg"
            />
          </div>
          <div
            className="w-full h-40 absolute bottom-0 rounded-t-lg"
            style={{
              background:
                'linear-gradient(28deg, rgba(101,44,212,0.5) 0%, rgba(84,37,141,0.5) 100%)',
            }}
          />
        </div>
        <div className="w-full p-3">
          <div>
            <h3 className="font-semibold text-lg">{this.props.title}</h3>
            <div className="italic">{this.props.description}</div>
          </div>
          <div className="flex -mx-2 mt-2">
            {this.props.icons.length !== 0
              ? this.props.icons.map((item) => {
                  return (
                    <div key={item[2]} className="px-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item[2]}
                      >
                        <FontAwesomeIcon
                          icon={item[0]}
                          size="2x"
                          className={
                            'transition duration-100 text-gray-400 ' + item[1]
                          }
                        />
                      </a>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
