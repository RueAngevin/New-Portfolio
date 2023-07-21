const copyText = ()=> {
    const copyTextBtn = document.querySelector('.copytext-btn');
    const copyTextField = document.querySelector('.contact__copyemail');
    
    copyTextBtn.addEventListener('click', ()=> {
        navigator.clipboard.writeText('ruvindugamage@gmail.com');
        copyTextField.innerHTML = ('email copied');
    });
};

export default copyText;