const body = document.querySelector('body')
const promo = document.getElementById('promo')
const promoBtnPlay = document.getElementById('promo-btn-play')
const header = document.getElementById('header')
const texts = document.querySelectorAll('.promo__content-text')
window.onscroll = function() {
  const observer = new IntersectionObserver((entries)=>{
    if(this.scrollY < 10 && entries[0].isIntersecting){
      promo.classList.remove('active')
      body.classList.add('lock')
      setTimeout(() => {
        body.classList.remove('lock')
      }, 1000);
    }
    else{
      promo.classList.add('active')
    }
  },
  {
    threshold: 0.6
  }
  )
  observer.observe(promo)
  if(this.scrollY < 10 && this.scrollY === 0){
    setTimeout(() => {
      showHideEffect( header, 1, 'auto')
      showHideEffect( promoBtnPlay, 1, 'auto')
    }, 800);
    texts.forEach((text, ind)=>{
      console.log(text);
      if(ind === 0){
        styleText(text, -55, 0, 0)
      }
      if(ind === 1){
        styleText(text, 55, 0, 0)
      }
      if(ind === 2){
        styleText(text, -55, 0, 0)
      }
    })
  }else{
    showHideEffect(header, 0, 'none')
    showHideEffect(promoBtnPlay, 0, 'none')
    texts.forEach((text, ind)=>{
      if(ind === 0){
        styleText(text, 0, 0.61, 1)
      }
      if(ind === 1){
        styleText(text, 0, 0.66, 1)
      }
      if(ind === 2){
        styleText(text, 0, 0.8, 1)
      }
    })
  }
}
// style for show and hide elements
function showHideEffect(item, opacity, events){
  item.style.opacity = opacity
  item.style.pointerEvents = events
}
// style for texts
function styleText(item, distance, time, opacity) {
  item.style.transform = `translateX(${distance}%)`;
  item.style.transitionDelay= `${time}s`;
  item.style.opacity= opacity;
}
