const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]

const choseImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement('img');

const bg = document.getElementsByClassName('bg')[0];

bgImg.src = `img/${choseImg}`;

bg.appendChild(bgImg);

// document.body.style.backgroundImage = `url(img/${choseImg})`;