import React, {Image} from 'react';

const ImageHolder = ({ imagePath }) => {
  return (
    <div className="image-container" style={{
      height: 'inherit',
      width: 'inherit',
      resizeMode: 'contain'
    }}>
      <img src={ imagePath } style={{width: 'inherit'}}></img>
    </div>
  );
}

export default ImageHolder;
