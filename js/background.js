const images = [
  'https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg',
  'https://user-images.githubusercontent.com/59393359/74718765-30689400-5276-11ea-8a91-dd7ce797074b.jpg',
  'https://user-images.githubusercontent.com/59393359/74718795-3f4f4680-5276-11ea-9f52-58bb99cb2db0.jpg',
];

const setRandomBackgroundImage = () => {
  const chosenImageIndex = Math.floor(Math.random() * images.length);
  const chosenImage = images[chosenImageIndex];

  const bgImage = document.createElement('img');
  bgImage.src = chosenImage;
  bgImage.style.position = 'fixed';
  bgImage.style.width = '100vw';
  bgImage.style.height = '100vh';
  bgImage.style.zIndex = '-1';
  bgImage.style.objectFit = 'cover';

  const existingBgImage = document.querySelector('#bgImage');
  if (existingBgImage) {
    document.body.removeChild(existingBgImage);
  }

  bgImage.id = 'bgImage';
  document.body.appendChild(bgImage);
};

setRandomBackgroundImage();
