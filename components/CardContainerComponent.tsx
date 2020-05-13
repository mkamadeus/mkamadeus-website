import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import CardIconComponent from './CardIconComponent';

export default class CardContainerComponent extends React.Component {
  render()
  {
    return(
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
    );
  }
}