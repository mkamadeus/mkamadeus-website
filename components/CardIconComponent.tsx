import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { IconName } from '@fortawesome/free-solid-svg-icons';

interface CardIconComponentProps {
  cardTitle: string;
  icon: IconProp;
}

export default class CardIconComponent extends React.Component<CardIconComponentProps> {
  render()
  {
    return(
      <div className="flex flex-col items-center shadow md:shadow-md rounded border border-gray-300 p-6 h-full">
        <FontAwesomeIcon icon={this.props.icon} size="5x" className="text-teal-500 p-2" />
        <div className="font-bold text-3xl">
          {this.props.cardTitle || 'Pisang'}
        </div>
        <div className="text-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}