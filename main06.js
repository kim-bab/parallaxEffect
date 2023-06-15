const scrollWrap = document.querySelector('.scroll-wrap');
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav ul li');
const container = document.querySelectorAll('.container section');
const sectionFilterImg = document.querySelectorAll('.st-img h2');
const up = document.querySelector('.up');
const txtEffect = document.querySelectorAll('.st-items p');



const getTxtBreak = () => {
  txtEffect.forEach((txtBreak) => {
    let result = txtBreak.textContent;
    
    let splitTxt = result.split('').join(("</em><em aria-hidden='true'>"));
    splitTxt = "<em aria-hidden='true'>" + splitTxt + "</em>";
    txtBreak.innerHTML = splitTxt;
    txtBreak.setAttribute("aria-label", result);
  })
}
getTxtBreak();

const showTxtEffect = () => {
  const getScroll = window.scrollY;
  container.forEach((contents) => {
    if(getScroll >= contents.offsetTop - window.innerHeight/1.5){
      contents.querySelectorAll('.st-items em').forEach((items, index) => {
        setTimeout(()=> {
          items.classList.add('show-txt');
        }, 50*index);
      })
    }
  })
  requestAnimationFrame(showTxtEffect);
}

showTxtEffect();

window.addEventListener('scroll', () => {
  const getScroll = window.scrollY;
  let result = '';
  container.forEach((items, index) => {
    result += `<p>#section${index + 1} : ${container[index].offsetTop}px</p>`;
  })

  scrollWrap.innerHTML = `<p>scrollTop : ${getScroll}px</p> ${result}`;


  container.forEach((element, index)=>{
    if(getScroll >= element.offsetTop - window.innerHeight/1.5){
      navList.forEach((items) => {
        items.classList.remove('nav-active');
      })
      sectionFilterImg.forEach((items) => {
        items.classList.remove('filter-active');
      })
      document.querySelector('.nav ul li:nth-child('+(index+1)+')').classList.add('nav-active');
      sectionFilterImg[index].classList.add('filter-active');
    }
  })
})

const render = () => {
  const getScroll = window.scrollY;
  let result = '';
  container.forEach((items, index) => {
    result += `<p>#section${index + 1} : ${container[index].offsetTop}px</p>`;
  })

  scrollWrap.innerHTML = `<p>scrollTop : ${getScroll}px</p> ${result}`;
}

render();


navList.forEach((menuItems) => {
  menuItems.addEventListener('click', (e) => {
    e.preventDefault();

    const getTarget = e.target;
    const getHref = getTarget.getAttribute('href').slice(1);

    container.forEach((contents) => {
      const getOffset = contents.offsetTop - window.innerHeight/2;
      if (contents.id === getHref) {
        window.scrollTo({
          top: getOffset,
          behavior: 'smooth'
        })
      }
    })
  })
})


up.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})


window.onunload = function(){ 
  window.scrollTo(0,0);
}