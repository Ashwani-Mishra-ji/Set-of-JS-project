const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goNext =() => {
    counter++
    slideImage()
}

const goPrevious =() => {
    counter--
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }

       
    )
    if (counter==6){
    
     alert("please go to previous button")
      
    }
} 