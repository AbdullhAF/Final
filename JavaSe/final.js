const 
allSlides =document.querySelectorAll(".slide")
nextbtn =document.querySelector(".next")
prevbtn =document.querySelector(".prev")
let pagition =document.querySelector(".pagition");
let index=0
showSlide (index)
// Show slide
function showSlide (index) {
    clear()
    allSlides[index].classList.add("show")
    showPagition();
    activePagition();
}
// next Button
nextbtn.onclick = _=> {
    if (index==allSlides.length -1 ) {
        index=0 
    }else{
    index +=1;
    }
    clear();
    showSlide(index)
}
// next Button
prevbtn.onclick = _=> {
    if(index==0){
        index=allSlides.length -1 
    }else{
        index -=1;
    }
    clear();
    showSlide(index)

}
// clear Show
function clear () {
    allSlides.forEach(slide=>{
    slide.classList.remove("show");
    });
}
// show img by index
function go (showIndex){
     index=showIndex
     showSlide(index)
}
// show pagination
function showPagition (){
    pagition.innerHTML=''
    allSlides.forEach( (slide, showIndex) => {
        let line = document.createElement("div");
        line.classList.add("line");
        line.setAttribute("onclick",`go(${showIndex})`);
        pagition.append(line);
    });
    pagition.children[index].classList.add("active")
}
// Add active
function activePagition() {
    document.querySelectorAll(".pagition>*").forEach(slide => {
        slide.classList.remove("active")
        
    });
    pagition.children[index].classList.add("active")
    
}
const images = document.querySelectorAll(".big_img .imges");
// for add, remove active
images.forEach((image) => {
    image.addEventListener("click", () => {
        images.forEach((img) => {
            img.classList.remove("active");
        });
        image.classList.add("active");
    });
});

const swiper = new Swiper('.swiper', {

    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      450: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      778: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      995: {
        slidesPerView: 4,
        spaceBetween: 70
      }
    },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });

    
  let Login = document.querySelector(".User")
  let loginList = document.querySelector(".login-list")
  
  Login.onclick = _=>{
    loginList.classList.add("show")
  }
  
  let CloseBtn = document.querySelector(".btn-close")
  
  CloseBtn.onclick = _=>{
      loginList.classList.remove("show")
    }
    let HidePassImg = document.querySelector(".HidePass")
    let PassInput = document.querySelector(".PassInput")
    let type = PassInput.getAttribute("type")
    let pass = document.getElementById("Pass")
    HidePassImg.onclick = ShowPass
    function ShowPass(){
      if(type == "password") {
        pass.setAttribute("type" ," ")
        type = ""
      }
      else{
        pass.setAttribute("type" ,"password")
        type = "password"
      }
    }
    let BackForward = document.querySelector(".BackForward")
    let Login1 = document.querySelector(".active1")
    let loginList1 = document.querySelector(".login-list1")

  Login1.onclick = SignUP
  function SignUP() {
      loginList1.classList.add("show1")
  }
  let CloseBtn1 = document.querySelector(".btn-close1")
  
  CloseBtn1.onclick = _=>{
    loginList1.classList.remove("show1")
  }
  BackForward.onclick = BackPage
  
  function BackPage() {
    loginList1.classList.remove("show1")
  }
  
  
  let Login2 = document.querySelector(".active2")
  let loginList2 = document.querySelector(".login-list2")
  
  Login2.onclick = _=>{
      loginList2.classList.add("show2")
  }
  
  let CloseBtn2 = document.querySelector(".btn-close2")
  
  CloseBtn2.onclick = _=>{
      loginList2.classList.remove("show2")
    }

  let gotoUP =document.querySelector(".gotoUP")
  addEventListener("scroll",_=>{
    if (scrollY >100) {
      gotoUP.classList.remove("d-none")
    }else{
      gotoUP.classList.add("d-none")
    }
  })
  gotoUP.onclick = _=>{
    scrollTo(0,0);
  }