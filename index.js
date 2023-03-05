
const button_6 = document.querySelector('.btn-sub');
const f_card = document.querySelector('.front-card');
const s_card = document.querySelector('.thank-you-card');

const show = () => {
    f_card.style.visibility ='hidden';
  };

  
button_6.addEventListener('click',show);
const button_1 = document.querySelector('.btn-1');

const feedback_1 = () => {
    const num = document.querySelector('.rating-num');
    num.innerText="1";
};
button_1.addEventListener('click',feedback_1);
const button_2 = document.querySelector('.btn-2');

const feedback_2 = () => {
    const num = document.querySelector('.rating-num');
    num.innerText="2";
};
button_2.addEventListener('click',feedback_2);
const button_3 = document.querySelector('.btn-3');

const feedback_3 = () => {
    const num = document.querySelector('.rating-num');
    num.innerText="3";
};
button_3.addEventListener('click',feedback_3);
const button_4 = document.querySelector('.btn-4');

const feedback_4 = () => {
    const num = document.querySelector('.rating-num');
    num.innerText="4";
};
button_4.addEventListener('click',feedback_4);
const button_5 = document.querySelector('.btn-5');

const feedback_5 = () => {
    const num = document.querySelector('.rating-num');
    num.innerText="5";
};
button_5.addEventListener('click',feedback_5);
