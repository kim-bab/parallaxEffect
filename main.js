const scrollWrap = document.querySelector('.scroll-wrap');
const nav = document.querySelector('.nav');
const subMenu = document.querySelector('.nav-wrap');
const navList = document.querySelectorAll('.nav ul li');
const container = document.querySelectorAll('.container section');
const sectionFilterImg = document.querySelectorAll('.st-img h2');
const up = document.querySelector('.up');
const mNav = document.querySelector('.mNav');
const mMenuBg = document.querySelector('.bg');


mNav.addEventListener('click', () => {
    subMenu.classList.toggle('show-menu-active');
    mMenuBg.classList.toggle('bg-active');

})

mMenuBg.addEventListener('click', (e) => {
  if(e.target.className === 'bg bg-active'){
    mMenuBg.classList.remove('bg-active');
    subMenu.classList.remove('show-menu-active');
  }
})




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
        window.scroll({
          top: getOffset,
          behavior: 'smooth'
        })
      }
    })
  })
})


up.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})


  window.onunload = function(){ 
    window.scrollTo(0,0);
  }