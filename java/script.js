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

const arr1 = ['Multi-Post Stories 1', 'This is the firtst A daily for this is a test and is test number 1', 'CSS', 'Html', 'Bootstrap', 'Ruby'];

const arr2 = ['Multi-Post Stories 2', 'This is the second A daily for this is a test and is test number 2', 'CSS', 'Html', 'Bootstrap', 'Ruby'];

const arr3 = ['Multi-Post Stories 3', 'This is the third A daily for this is a test and is test number 3', 'CSS', 'Html', 'Bootstrap', 'Ruby'];

const btn1 = document.querySelector('.btn1');
const popUp1 = document.querySelector('#popUp1');

btn1.addEventListener('click', () => {
  popUp1.style.display = 'block';
});

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
  popUp1.style.display = 'block';
});

const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () => {
  popUp1.style.display = 'block';
});

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  popUp1.style.display = 'none';
});

function openpopUp1(string) {
  if (string === 'project1') {
    document.getElementById('popuptitle').innerHTML = arr1[0];
    document.getElementById('popupdescription').innerHTML = arr1[1];
    document.getElementById('popupimg').src = "./pictures/twitter.png";
    document.getElementById('popuptec1').innerHTML = arr1[2];
    document.getElementById('popuptec2').innerHTML = arr1[3];
    document.getElementById('popuptec3').innerHTML = arr1[4];
    document.getElementById('popuptec4').innerHTML = arr1[5];
    document.getElementById('see_live1').href = 'https://www.github.com';
    document.getElementById('see_source1').href = 'https://www.github.com';
  } if (string === 'project2') {
    document.getElementById('popuptitle').innerHTML = arr2[0];
    document.getElementById('popupdescription').innerHTML = arr2[1];
    document.getElementById('popupimg').src = './pictures/github.png';
    document.getElementById('popuptec1').innerHTML = arr2[2];
    document.getElementById('popuptec2').innerHTML = arr2[3];
    document.getElementById('popuptec3').innerHTML = arr2[4];
    document.getElementById('popuptec4').innerHTML = arr2[5];
    document.getElementById('see_live1').href = 'https://www.github.com';
    document.getElementById('see_source1').href = 'https://www.github.com';
  } if (string === 'project3') {
    document.getElementById('popuptitle').innerHTML = arr3[0];
    document.getElementById('popupdescription').innerHTML = arr3[1];
    document.getElementById('popupimg').src = "./pictures/linkedin.png";
    document.getElementById('popuptec1').innerHTML = arr3[2];
    document.getElementById('popuptec2').innerHTML = arr3[3];
    document.getElementById('popuptec3').innerHTML = arr3[4];
    document.getElementById('popuptec4').innerHTML = arr3[5];
    document.getElementById('see_live1').href = 'https://www.github.com';
    document.getElementById('see_source1').href = 'https://www.github.com';
  }
}
