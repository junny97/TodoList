 const images = [
     "back1.jpg",
     "back2.jpg",
     "back3.jpg",
     "back4.jpg",
     "back5.jpg",
     "back6.jpg",
     "back7.jpg",
     "back8.jpg",
     "back9.jpg",
     "back10.jpg",
     "back11.jpg",



 ]

 const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //createElement를 이용하면 자바스크립트에서 html의 element 생성가능

bgImage.src =`img/${chosenImage}`;
document.body.appendChild(bgImage); // 엘리멘트를 body태그에 추가하게 해줌