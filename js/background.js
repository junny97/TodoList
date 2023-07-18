const images = [
  'https://github.com/junny97/TodoList/assets/72855681/4c4bccbd-7a1b-4a3c-b6cf-d401766cf790',
  'https://user-images.githubusercontent.com/59393359/74718765-30689400-5276-11ea-8a91-dd7ce797074b.jpg',
  'https://github.com/junny97/TodoList/assets/72855681/ef0960ab-36d9-4382-8354-fe7b9e9e42a0',
  'https://github.com/junny97/TodoList/assets/72855681/747a846e-572b-46a6-8267-c82f3c041e2b',
  'https://github.com/junny97/TodoList/assets/72855681/7697082a-97b0-4654-a174-dc231b123571',
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
