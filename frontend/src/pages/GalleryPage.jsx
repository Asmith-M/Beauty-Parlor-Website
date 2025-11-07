import React from 'react';

const GalleryPage = () => {
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="w-full h-auto rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
