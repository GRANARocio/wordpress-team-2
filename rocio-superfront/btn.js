const btnTopPage = document.querySelector('#btnTopPage');

btnTopPage.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

})
