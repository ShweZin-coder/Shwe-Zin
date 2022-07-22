/* click menu and dynamic active class */
navbar = document.querySelector(".nav").querySelectorAll("a");
navbar.forEach(element => {
   element.addEventListener("click",function()
   {
    navbar.forEach(nav=>nav.classList.remove("active"));
    this.classList.add("active");
   })
})
/* Typing Animation */
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Wordpress Developer","Sharepoint Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});
AOS.init();
var color = new Array(5);
color[0]="themescolor1";
color[1]="themescolor2";
color[2]="themescolor3";
color[3]="themescolor4";
color[4]="themescolor5";
function changeColor(color)
{
var ranNum= Math.floor(Math.random()*5);
alternateStyles.forEach((style) => {
if(color[ranNum]  === style.getAttribute("title"))
{
style.removeAttribute("disabled");
}
else{
   style.setAttribute("disabled", true);
}
})
}
/* popup video js*/
document.querySelectorAll('img').forEach(vid =>
   {
      vid.onclick = () =>{
         document.querySelector('.popup-video').style.display = 'block';
         document.querySelector('.popup-video video').src = vid.getAttribute('id');
      }
     
   
   });
   document.querySelector('.popup-video span').onclick = () => {
      document.querySelector('.popup-video').style.display = 'none';
   }
