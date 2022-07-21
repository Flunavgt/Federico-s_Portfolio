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
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
    popuptec: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/golf.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn1',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
  {
    id: 1,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the second A daily for this is a test and is test number 2',
    popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/beach.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn3',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
  {
    id: 2,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the third A daily for this is a test and is test number 3',
    popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/desert.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn4',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
];

const arr2 = ['CSS', 'HTML', 'Bootstrap', 'Ruby'];

['one', 'two', 'three', 'four'] = arr2

document.getElementById('Portfolio-menu').innerHTML = arr1.map((items) => `<div class="work1">
                <img src="${items.popupimg}" style="order:${(items.id % 2) + 1}" alt="temporary image while project is completed" class="projectpic1">
                <div class="jobdesc" style="order:${items.id % 2 === 0 ? 2 : 1}" >
                <p class="work1title">${items.popuptitle}</p>
                <p class="workdescription" id="firstcard">${items.popupdescription}</p>
                <ul class="usedcode">
                    <li class="pop">${items.popuptec[0]}</li>
                    <li class="pop">${items.popuptec[1]}</li>
                    <li class="pop">${items.popuptec[2]}</li>
                    <li class="pop">${items.popuptec[3]}</li>
                </ul>
                    <button type="submit" id="${items.btnName}">See Project</button>
                </div>
                </div>`).join('');

const btn1 = document.querySelector('#btn1');
const popUp1 = document.getElementById('popUp1');

btn1.addEventListener('click', () => {
  popUp1.classList.toggle('popUpactive');
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = arr1[0].popuptitle;
  document.getElementById('popupdescription').innerHTML = arr1[0].popupdescription;
  document.getElementById('popupimg').src = arr1[0].popupimg;
  document.getElementById('popuptec1').innerHTML = 'one';
  document.getElementById('popuptec2').innerHTML = 'two';
  document.getElementById('popuptec3').innerHTML = 'three';
  document.getElementById('popuptec4').innerHTML = 'four';
  document.getElementById('see_live1').href = arr1[0].btnlive;
  document.getElementById('see_source1').href = arr1[0].btnsource;
  document.getElementById('btnimg1').src = arr1[0].btnimg1;
  document.getElementById('btnimg2').src = arr1[0].btnimg2;
});

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
  popUp1.classList.toggle('popUpactive');
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = arr1[1].popuptitle;
  document.getElementById('popupdescription').innerHTML = arr1[1].popupdescription;
  document.getElementById('popupimg').src = arr1[1].popupimg;
  document.getElementById('popuptec1').innerHTML = arr2[0];
  document.getElementById('popuptec2').innerHTML = arr2[1];
  document.getElementById('popuptec3').innerHTML = arr2[2];
  document.getElementById('popuptec4').innerHTML = arr2[3];
  document.getElementById('see_live1').href = arr1[1].btnlive;
  document.getElementById('see_source1').href = arr1[1].btnsource;
  document.getElementById('btnimg1').src = arr1[1].btnimg1;
  document.getElementById('btnimg2').src = arr1[1].btnimg2;
});

const btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', () => {
  popUp1.classList.toggle('popUpactive');
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = arr1[2].popuptitle;
  document.getElementById('popupdescription').innerHTML = arr1[2].popupdescription;
  document.getElementById('popupimg').src = arr1[2].popupimg;
  document.getElementById('popuptec1').innerHTML = arr2[0];
  document.getElementById('popuptec2').innerHTML = arr2[1];
  document.getElementById('popuptec3').innerHTML = arr2[2];
  document.getElementById('popuptec4').innerHTML = arr2[3];
  document.getElementById('see_live1').href = arr1[2].btnlive;
  document.getElementById('see_source1').href = arr1[2].btnsource;
  document.getElementById('btnimg1').src = arr1[2].btnimg1;
  document.getElementById('btnimg2').src = arr1[2].btnimg2;
});

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  popUp1.style.display = 'none';
});
