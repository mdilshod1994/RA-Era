const body = document.querySelector('body')
const main = document.getElementById('main')
const promo = document.getElementById('promo')
const promoContent = document.getElementById('promo-content')
const promoBtnPlay = document.getElementById('promo-btn-play')
const header = document.getElementById('header')
const texts = document.querySelectorAll('.promo__content-text')

if(main){
  main.addEventListener('scroll', (e)=>{
    if(promo){
      if(e.target.scrollTop < 100 && e.target.scrollTop >=0){
        scrolledTop ()
      }else{
        scrolledBottom ()
      }
    }
  })
}

function scrolledTop (){
  promo.classList.remove('active')
  showHideEffect( header, 1, 'auto')
  showHideEffect( promoBtnPlay, 1, 'auto')
  texts.forEach((text, ind)=>{
    if(ind === 0){
      styleText(text, -55)
    }
    if(ind === 1){
      styleText(text, 55)
    }
    if(ind === 2){
      styleText(text, -55)
    }
  })
}

function scrolledBottom (){
  promo.classList.add('active')
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

function showHideEffect(item, opacity, events){
  item.style.opacity = opacity
  item.style.pointerEvents = events
}
function styleText(item, distance = 55, time = 0, opacity = 0) {
  item.style.transform = `translateX(${distance}%)`;
  item.style.transitionDelay= `${time}s`;
  item.style.opacity= opacity;
}

// set position from top
if(promoContent){
  promoContent.style.top = ` calc(50% - ${promoContent.clientHeight / 2}px)`
}

