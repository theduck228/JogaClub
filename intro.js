document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.getElementById('intro');
        if( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done')
        }
    }, 1500)
}