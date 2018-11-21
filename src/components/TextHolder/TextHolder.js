import React, { Component } from 'react';

class TextHolder extends Component {
  render() {
    return (
      <div className='text-area'>
        <div className='text-container'>
          <div className='title-container'>
            <h2>Title</h2>
          </div>
          <div className='description-container'>
            <p>Description</p>
          </div>
        </div>
        <div>Selector</div>
      </div>
    );
  }
}

export default TextHolder;
