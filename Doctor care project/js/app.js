
const sections=document.querySelectorAll('section[id]');

const navlinks=document.querySelectorAll('nav a[href^="#"]');
const menu=document.querySelectorAll('.navbar-menu');
const burger= document.querySelectorAll('.navbar-burger');
const close=document.querySelectorAll('.navbar-close');
const backdrof= document.querySelectorAll('.navbar-backdrop');
const mobileMenuLink= document.querySelectorAll('#mobile-menu a[href^="#"]');
document.addEventListener('DOMContentLoaded' ,() => {

    handScroll()

})
function setActiveLink(sections, navlinks){
console.log("section",sections, 'navlinks',navlinks);
}
function handScroll(){
    const sections=document.querySelectorAll('section[id]')

const navlinks=document.querySelectorAll('nav a[href^="#"]');
setActiveLink(sections, navlinks)
}

