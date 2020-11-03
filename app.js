const stars = document.querySelector('.stars').children
const puntuacio = document.querySelector('#rating')
const container = document.querySelector('.container')

for(let i=0; i<stars.length; i++){
    stars[i].addEventListener('mouseover', function(){
        for(let s=0; s<stars.length; s++){
            stars[s].classList.remove('fa-star')
            stars[s].classList.add('fa-star-o')

        }
        for(let s=0; s<=i; s++){
            stars[s].classList.remove('fa-star-o')
            stars[s].classList.add('fa-star')
        }
    })

    
    stars[i].addEventListener('click', function(){
        puntuacio.value=i+1;
    })

  

}