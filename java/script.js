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

const [first, second, third, fourth, fifth, sixth] = arr1;

const arr2 = ['Multi-Post Stories 2', 'This is the second A daily for this is a test and is test number 2', 'CSS', 'Html', 'Bootstrap', 'Ruby'];

const [one, two, three, four, five, six] = arr2;

const arr3 = ['Multi-Post Stories 3', 'This is the third A daily for this is a test and is test number 3', 'CSS', 'Html', 'Bootstrap', 'Ruby'];

const [name3, descrip, tec1, tec2, tec3, tec4] = arr3;

const btn1 = document.querySelector('.btn1');
const popUp1 = document.querySelector('#popUp1');

btn1.addEventListener('click', () => {
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = first;
  document.getElementById('popupdescription').innerHTML = second;
  document.getElementById('popupimg').src = './pictures/twitter.png';
  document.getElementById('popuptec1').innerHTML = third;
  document.getElementById('popuptec2').innerHTML = fourth;
  document.getElementById('popuptec3').innerHTML = fifth;
  document.getElementById('popuptec4').innerHTML = sixth;
  document.getElementById('see_live1').href = 'https://www.github.com';
  document.getElementById('see_source1').href = 'https://www.github.com';
});

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = one;
  document.getElementById('popupdescription').innerHTML = two;
  document.getElementById('popupimg').src = './pictures/github.png';
  document.getElementById('popuptec1').innerHTML = three;
  document.getElementById('popuptec2').innerHTML = four;
  document.getElementById('popuptec3').innerHTML = five;
  document.getElementById('popuptec4').innerHTML = six;
  document.getElementById('see_live1').href = 'https://www.github.com';
  document.getElementById('see_source1').href = 'https://www.github.com';
});

const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () => {
  popUp1.style.display = 'block';
  document.getElementById('popuptitle').innerHTML = name3;
  document.getElementById('popupdescription').innerHTML = descrip;
  document.getElementById('popupimg').src = './pictures/linkedin.png';
  document.getElementById('popuptec1').innerHTML = tec1;
  document.getElementById('popuptec2').innerHTML = tec2;
  document.getElementById('popuptec3').innerHTML = tec3;
  document.getElementById('popuptec4').innerHTML = tec4;
  document.getElementById('see_live1').href = 'https://www.github.com';
  document.getElementById('see_source1').href = 'https://www.github.com';
});

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  popUp1.style.display = 'none';
});
