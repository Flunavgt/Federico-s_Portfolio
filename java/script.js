const hamburger = document.querySelector('#hamburger');
const modalMenu = document.querySelector('#modalMenu');

hamburger.addEventListener('click', () => {
  modalMenu.style.display = 'block';
});

const button = document.querySelector('.active');

button.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const lika = document.querySelector('#closebtntest');

lika.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const arrow = document.querySelector('#closebtntest2');

arrow.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const lika1 = document.querySelector('#closebtntest3');

lika1.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const arrow1 = document.querySelector('#closebtntest4');

arrow1.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const newlika = document.querySelector('#closebtnt');

newlika.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const newarrow = document.querySelector('#closebtn');

newarrow.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const arr1 = [
  {
    id: 0,
    popuptitle: 'Multi-Post Stories 1',
    popupdescription: 'This is the first A daily for this is a test and is test number 1',
    popuptec: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/golf.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
  },
  {
    id: 1,
    popuptitle: 'Multi-Post Stories 2',
    popupdescription: 'This is the second A daily for this is a test and is test number 2',
    popupimg: './pictures/beach.jpg',
  },
  {
    id: 2,
    popuptitle: 'Multi-Post Stories 3',
    popupdescription: 'This is the third A daily for this is a test and is test number 3',
    popupimg: './pictures/desert.jpg',
  },
];

const arr2 = [
  {
    id: 0,
    popuptec1: 'CSS',
    popuptec2: 'Html',
    popuptec3: 'Bootstrap',
    popuptec4: 'Ruby',
  },
];

const btn1 = document.querySelector('.btn1');
const popUp1 = document.querySelector('#popUp1');

btn1.addEventListener('click', () => {
  popUp1.classList.toggle('popUpactive');
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = arr1[0].popuptitle;
  document.getElementById('popupdescription').innerHTML = arr1[0].popupdescription;
  document.getElementById('popupimg').src = arr1[0].popupimg;
  document.getElementById('popuptec1').innerHTML = arr2[0].popuptec1;
  document.getElementById('popuptec2').innerHTML = arr2[0].popuptec2;
  document.getElementById('popuptec3').innerHTML = arr2[0].popuptec3;
  document.getElementById('popuptec4').innerHTML = arr2[0].popuptec4;
  document.getElementById('see_live1').href = arr1[0].btnlive;
  document.getElementById('see_source1').href = arr1[0].btnsource;
});

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
  popUp1.classList.toggle('popUpactive');
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = arr1[1].popuptitle;
  document.getElementById('popupdescription').innerHTML = arr1[1].popupdescription;
  document.getElementById('popupimg').src = arr1[1].popupimg;
  document.getElementById('popuptec1').innerHTML = arr2[0].popuptec1;
  document.getElementById('popuptec2').innerHTML = arr2[0].popuptec2;
  document.getElementById('popuptec3').innerHTML = arr2[0].popuptec3;
  document.getElementById('popuptec4').innerHTML = arr2[0].popuptec4;
  document.getElementById('see_live1').href = arr1[1].btnlive;
  document.getElementById('see_source1').href = arr1[1].btnsource;
});

const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () => {
  popUp1.classList.toggle('popUpactive');
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = arr1[2].popuptitle;
  document.getElementById('popupdescription').innerHTML = arr1[2].popupdescription;
  document.getElementById('popupimg').src = arr1[2].popupimg;
  document.getElementById('popuptec1').innerHTML = arr2[0].popuptec1;
  document.getElementById('popuptec2').innerHTML = arr2[0].popuptec2;
  document.getElementById('popuptec3').innerHTML = arr2[0].popuptec3;
  document.getElementById('popuptec4').innerHTML = arr2[0].popuptec4;
  document.getElementById('see_live1').href = arr1[2].btnlive;
  document.getElementById('see_source1').href = arr1[2].btnsource;
});

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  popUp1.style.display = 'none';
});
