const preLoading = document.querySelector('.hello-parent');

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        preLoading.style.display = 'none';
        document.body.style.overflowX = 'hidden';
    },2500)
})