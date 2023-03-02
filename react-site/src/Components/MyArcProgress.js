import React, { Component } from 'react';
import ArcProgress from 'react-arc-progress';

export default class MyArcProgress extends React.Component {
  state = {
    progress: .5,
    text: '50%',
  }
  
  render() {
    const {progress, text} = this.state;
    
    return (
      <ArcProgress
        progress={progress}
        text={text}
        observer={(current) => {
          const { percentage, currentText } = current;
          console.log('observer:', percentage, currentText);
        }}
        animationEnd={({ progress, text }) => {
          console.log('animationEnd', progress, text);
        }}
      />
    );
  }
}