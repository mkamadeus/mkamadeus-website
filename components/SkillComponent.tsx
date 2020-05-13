import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SkillComponentProps {
  icon?: IconProp;
  bgClass: string;
  skillName?: string;
}

export default class SkillComponent extends Component<SkillComponentProps> {
  render() {
    return (
      <div className={'flex rounded-full py-1 px-3 ' + this.props.bgClass}>
        <div className="pr-1">
          {this.props.icon !== null ? (
            <FontAwesomeIcon icon={this.props.icon} className="text-white" />
          ) : null}
        </div>
        <div className="font-semibold text-white">
          {this.props.skillName || 'makan'}
        </div>
      </div>
    );
  }
}
