let Images= document.querySelectorAll(".image1");
function changeImage(event) {
let Image1 = event.currentTarget;
let mainImage = document.getElementById("mainImage");
mainImage.src = Image1.querySelector("img").src;
}
Images.forEach(function(Image1) {
  Image1.addEventListener("click", changeImage);
});
but1 =document.querySelector(".min")
num =document.querySelector(".num")
but2 =document.querySelector(".blus")
let s= +num.innerText
function blus (){
if( s >= 1){
    s+=1;
    num.innerText=s;
}
else{
   s=1;
}
}
function min (){
if(s > 1){
    s-=1;
    num.innerText=s
}
else{
    s=1;
}
}
const swiper2 = new Swiper('.img_text .swiper', {
  // Optional parameters
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },
});
let WhiteBtn = document.querySelector(".WhiteBtn")
let BlackBtn = document.querySelector(".BlackBtn")
let DifferBtn = document.querySelector(".DifferBtn")
let BlueBtn = document.querySelector(".BlueBtn")
let WhiteImg = document.querySelector(".White")
let BlackImg = document.querySelector(".Black")
let DifferImg = document.querySelector(".brown")
let BlueImg = document.querySelector(".Blue")
let mainImage = document.getElementById("mainImage")
let ss =document.querySelectorAll("#ss .swiper-slide")
let pp =document.querySelectorAll("#ss .swiper-pagination-bullet")
console.log(pp)

WhiteBtn.onclick = WhiteFunction
BlackBtn.onclick = BlackFunction
DifferBtn.onclick = DifferFunction
BlueBtn.onclick = BlueFunction
function c(){
  ss.forEach(element => {
    element.classList.remove("order-1")
    element.classList.remove("order-0")
  });
}
function WhiteFunction(){
  mainImage.src = WhiteImg.src;
  mainImage.alt = WhiteImg.alt
  c()
}
function BlackFunction(){
  mainImage.src = BlackImg.src;
  mainImage.alt = BlackImg.alt
  c()
  ss[0].classList.add("order-1")
  ss[2].classList.add("order-1")
  ss[3].classList.add("order-1")
  ss[1].classList.add("order-0")
}
function DifferFunction(){
  mainImage.src = DifferImg.src;
  mainImage.alt = DifferImg.alt
  c()
  ss[0].classList.add("order-1")
  ss[1].classList.add("order-1")
  ss[3].classList.add("order-1")
  ss[2].classList.add("order-0")
}
function BlueFunction(){
  mainImage.src = BlueImg.src;
  mainImage.alt = BlueImg.alt
  c()
  ss[0].classList.add("order-1")
  ss[1].classList.add("order-1")
  ss[2].classList.add("order-1")
  ss[3].classList.add("order-0")
}
const swiper = new Swiper('.Selected .swiper', {
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    450: {
      slidesPerView: 1,
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
  let navbar =document.querySelector(".navbar")
  let navbar2 =document.querySelector("nav")
  let gotoUP =document.querySelector(".gotoUP")
  addEventListener("scroll",_=>{
    if (scrollY >100) {
      navbar.classList.add("bg-white","shadow-lg")
      gotoUP.classList.remove("d-none")
    }else{
      navbar.classList.remove("bg-white","shadow-lg")
      gotoUP.classList.add("d-none")

    }
  })
gotoUP.onclick = _=>{
  scrollTo(0,0);
}
let AddCart =document.querySelector(".AddCart")
let tshirtList =document.querySelector("#cart .offcanvas-body")
let number =document.querySelector(".number")
let total =document.querySelector("#total")
let TshirtList =JSON.parse(localStorage.getItem("tshirt list")) || []
AddCart.onclick = _=>{
    collectData();
    showTshirt()
}
// collect data
function collectData (){
  let mas =document.querySelector(".alert");
  let img = document.querySelector("#mainImage");
  let imgSrc = img.src;
  let colorImg =img.alt;
  let Size = document.getElementById("Select");
  let name =document.querySelector(".icon_text h6").innerText
  let SizeValue = Size.value;
  let price =89.99;  
  let count =document.querySelector(".num").innerText;

  let positionIndex = TshirtList.findIndex(item =>{
    return item.imgSrc===imgSrc
  })
  
  if (positionIndex >=0) {
    let oldCount = +TshirtList[positionIndex].count
    oldCount += +count
    TshirtList[positionIndex].count = oldCount 
  }else{
    if (SizeValue =="Choose Size") {
      mas.classList.remove("d-none")
   }else{
    mas.classList.add("d-none")
    let TshirtOpject = {}
  TshirtOpject.img = img
  TshirtOpject.imgSrc = imgSrc
  TshirtOpject.color = colorImg
  TshirtOpject.size = Size
  TshirtOpject.sizeValue = SizeValue
  TshirtOpject.price = price
  TshirtOpject.count = count
  TshirtOpject.name =name
  TshirtList.push(TshirtOpject)
  localStorage.setItem("tshirt list",JSON.stringify(TshirtList))
  showTshirt()
   }
  }
}
// decrease count
function decs(ele, id) {
  let oldcunt = ele.nextElementSibling.innerText;
  if(oldcunt == 1){
  oldcunt =1;
  }
  else{
  oldcunt -=1;
  }
  ele.nextElementSibling.innerText = oldcunt;
  TshirtList[id].count  = oldcunt
  localStorage.setItem("tshirt list",JSON.stringify(TshirtList))  
  showTshirt()
  
  }
  // increase count
  function incs(ele, id) {
  let oldcuntplus = ele.previousElementSibling.innerText
  let num= +oldcuntplus;
  num += 1;
  oldcuntplus = num;
  ele.previousElementSibling.innerText = oldcuntplus
  TshirtList[id].count  = oldcuntplus
  localStorage.setItem("tshirt list",JSON.stringify(TshirtList))
  showTshirt()
  }
  // show Item
function showTshirt () {
  tshirtList.innerHTML =" "
  let sum=0
  TshirtList.forEach((tshirt, ind) => {
    let Totalsum = tshirt.price * tshirt.count
    let Tshirt =`
<div class="d-flex justify-content-between mb-3 align-items-center ">
<div class="d-flex align-items-center ">
  <img src="${tshirt.imgSrc}" class="img-fluid me-3 bord" alt="">
  <div>${tshirt.name}</div>
</div>
<div>${tshirt.color}</div>
<div>${tshirt.sizeValue}</div>
<div >
    <div class="form d-flex justify-content-around">
      <p class="min me-2" onclick=
      decs(this,${ind})>-</p>
      <span class="num ">${tshirt.count}</span>
      <p class="blus ms-2" onclick=incs(this,${ind})>+</p>
    </div>
</div>
<div >
      <p>$<span class="price">${(tshirt.count*tshirt.price).toFixed(2)}</span></p>
</div>
<div>
  <button class="btn-close" onclick="de(${ind})" ></button>
</div>
</div>
`
sum +=Totalsum
total.innerText=sum.toFixed(2)
tshirtList.innerHTML += Tshirt

  });
  number.innerText =TshirtList.length
}
// Delete Item
function de(iddd) {
  TshirtList.splice(iddd,1)
  localStorage.setItem("tshirt list",JSON.stringify(TshirtList))
  showTshirt()
}

showTshirt()
//  Delete All
function deleteAll() {
  TshirtList=[]
  localStorage.setItem("tshirt list",JSON.stringify(TshirtList))
  total.innerText=0.00;
  showTshirt()
}