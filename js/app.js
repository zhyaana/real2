
$('.owl-services').owlCarousel({
    items:3,
    loop:true,
    dots: true,
    nav: false,
    // autoplay: true,
    margin:5,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
});




const containerEl = document.querySelector(".words");
const careers = ["we are reaching higher", "take it easy right now", "come back to your dreams"];


let careerIndex = 0;
let characterIndex = 0;
let time = 220;
updateText();
function updateText(){
  characterIndex++;
  
  containerEl.innerHTML=`${careers[careerIndex]}`
  containerEl.classList.add("show");
  if(characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex=0;
  
  }
  if(careerIndex === careers.length){
    careerIndex=0;
    setTimeout(() => {
     
      containerEl.classList.remove("show")
    }, 170);
  }
  setTimeout(updateText , time);
}
