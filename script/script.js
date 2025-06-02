
//all elements

let inputImage = document.getElementById("main-img")
let imgcontainer = document.getElementById("img-container")
let mainEditableImg = document.getElementById("img-main")
let imgUploader = document.getElementById("image-uploader")
let pannelSettingHandeler = document.getElementById("pannel-setting-handeler")
let settingMainPannel = document.getElementById("settings")
let settingPannel = document.getElementById("setting-pannel")

// all image control setting

let brightness = document.getElementById("Brightness")
let contrast = document.getElementById("Contrast")
let saturation = document.getElementById("Saturation")
let grayscale = document.getElementById("GrayScale")
let invert = document.getElementById("Invert")
let sepia = document.getElementById("Sepia")
let blur = document.getElementById("Blur")


//functions


//events

inputImage.addEventListener("change", () => {   //add event on input file

    let imgObj = inputImage.files[0]
    if (!imgObj) return   //.file[0]
    let imgUrl = URL.createObjectURL(imgObj)  //URL.createObj()
    mainEditableImg.src = imgUrl


    imgUploader.style.display = "none"
    imgContainer.style.display = "block"
})


//open setting pannel

pannelSettingHandeler.addEventListener("click",()=>{
    settingMainPannel.style.display = "block"
})

 settingMainPannel.addEventListener("click",()=>{
    settingMainPannel.style.display = "none"
 })

 settingPannel.addEventListener("click",(e)=>{
    e.stopPropagation()

 })

 // setting events

 brightness.addEventListener("change",()=>{
    mainEditableImg.style.filter = 'brightness(${brightness.value})'
 })

 contranst.addEventListener("change",()=>{
    mainEditableImg.style.filter = 'contrast(${contrast.value})'
 })

 saturation.addEventListener("change",()=>{
   mainEditableImg.style.filter = 'saturation(${saturation.value})'
 })

  grayscale.addEventListener("change",()=>{
   mainEditableImg.style.filter = 'grayscale(${grayscale.value})'
 })

 invert.addEventListener("change",()=>{
   mainEditableImg.style.filter = 'invert(${invert.value})'
 })

 sepia.addEventListener("change",()=>{
   mainEditableImg.style.filter = 'sepia(${sepia.value})'
 })

  blur.addEventListener("change",()=>{
   mainEditableImg.style.filter = ' blur(${ blur.value})'
 })