// LOADER
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },1200);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
    mobileMenu.classList.remove("active");
  });
});

// MOBILE MENU
const hamburger=document.getElementById("hamburger");
const mobileMenu=document.getElementById("mobileMenu");
hamburger.onclick=()=>mobileMenu.classList.toggle("active");

// WHITE REVEAL + TEXT ANIMATION
const sections=document.querySelectorAll(".section");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const cover=entry.target.querySelector(".white-cover");
      const text=entry.target.querySelector("h2");
      if(cover){
        cover.style.transform="translateY(-100%)";
        cover.style.transition="1.2s ease";
      }
      if(text){
        text.style.opacity=1;
        text.style.transform="translateY(0)";
        text.style.transition="1s ease .3s";
      }
    }
  });
},{threshold:0.4});

sections.forEach(sec=>observer.observe(sec));

// HORIZONTAL SCROLL
const hTrack=document.querySelector(".h-track");
if(hTrack){
  window.addEventListener("scroll",()=>{
    const rect=hTrack.getBoundingClientRect();
    const offset=Math.min(0,window.innerHeight-rect.top);
    hTrack.style.transform=`translateX(${offset}px)`;
  });
}





