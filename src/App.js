import React, { Component } from 'react';
import './App.css';
import ImageSelector from './components/ImageSelector/ImageSelector'
import ImageHolder from './components/ImageHolder/ImageHolder'
import Gallery from 'react-photo-gallery';
import Modal from 'antd/lib/modal';

const PHOTO_SET = [
  {
    src: 'IMG_4370.JPG'
  },
  {
    src: 'IMG_4389.JPG'
  },
  {
    src: 'IMG_4406.JPG'
  },
  {
    src: 'IMG_4421.JPG'
  },
  {
    src: 'IMG_4455.JPG'
  },
  {
    src: 'IMG_4460.JPG'
  },
  {
    src: 'IMG_4481.JPG'
  },
  {
    src: 'IMG_4495.JPG'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: PHOTO_SET
    };
  }

  render() {
    return (
      <div className="app-container">
        <ImageSelector images={this.state.photos}/>
      </div>
    );
  }
}

export default App;
