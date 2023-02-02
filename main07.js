const scrollWrap = document.querySelector('.scroll-wrap');
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav ul li');
const container = document.querySelectorAll('.container section');
const sectionShowImg = document.querySelectorAll('.st-img h2');
const sectionItemsTxt = document.querySelectorAll('.st-items p');
const sectionImg = document.querySelectorAll('.st-img');
const up = document.querySelector('.up');


window.addEventListener('scroll', () => {
  const getScroll = window.scrollY;
  let result = '';
  container.forEach((items, index) => {
    result += `<p>#section${index + 1} : ${container[index].offsetTop}px</p>`;
  })

  scrollWrap.innerHTML = `<p>scrollTop : ${getScroll}px</p> ${result}`;


  container.forEach((element, index)=>{
    if(getScroll >= element.offsetTop - window.innerHeight/2){
      navList.forEach((items) => {
        items.classList.remove('nav-active');
      })
      sectionShowImg.forEach((items) => {
        items.classList.remove('filter-active');
      })
      document.querySelector('.nav ul li:nth-child('+(index+1)+')').classList.add('nav-active');
      sectionShowImg[index].classList.add('reveal-show-active');
      sectionImg[index].classList.add('reveal-img-active');
      sectionItemsTxt[index].classList.add('reveal-txt-active');
      sectionItemsTxt[index].classList.add('reveal-txt-opacity-active');
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
      const getOffset = contents.offsetTop;
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