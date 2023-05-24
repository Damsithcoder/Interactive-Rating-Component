
const button_6 = document.querySelector('.btn-sub');
const f_card = document.querySelector('.front-card');
const s_card = document.querySelector('.thank-you-card');

const show = () => {
    f_card.style.visibility ='hidden';
  };

  
button_6.addEventListener('click',show);
let value = 0;

const btns =document.querySelectorAll('.btn');
btns.forEach((item,index)=>{
    item.addEventListener('click',function (e){
        const num = document.querySelector('.rating-num');
        num.textContent =item.innerHTML  
    })
    
})
