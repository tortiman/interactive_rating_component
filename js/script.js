document.addEventListener('DOMContentLoaded',()=>{
    const rate1=document.getElementById('rateOne');
    const rate2=document.getElementById('rateTwo');
    const rate3=document.getElementById('rateThree');
    const rate4=document.getElementById('rateFour');
    const rate5=document.getElementById('rateFive');
    const spanThanks=document.getElementById('rateThanks');
    const btnSubmit=document.querySelector('.buttonSubmit');
    const formId=document.getElementById('formId');
    const buttons=document.querySelectorAll('.buttonRate');
    const cardThanksId=document.getElementById('cardThanksId');

    buttons.forEach(btn =>{
        btn.addEventListener('click',function(){
            buttons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    btnSubmit.addEventListener('click',function(){
        this.classList.add('selected');
    });

    formId.addEventListener('submit',function(event){
        event.preventDefault(); 
        if(validator()){
            const valueSelected=getSelectedValue();
            cardThanksId.style.visibility='visible';
            spanThanks.textContent=` ${valueSelected} `;
            console.log(valueSelected);
        }else{
            console.log('no se ha puntuado');
        }
    });

    function validator(){
        return Array.from(buttons).some(btn => btn.classList.contains('selected'));        
    }

    function getSelectedValue(){
        const selectedBtn=Array.from(buttons).find(btn => btn.classList.contains('selected'));
        return selectedBtn ? selectedBtn.textContent.trim() : null;
    }
});
