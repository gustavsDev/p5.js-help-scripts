let images = [];
let sounds = [];
let loadCount = 0;
let loadedImg = 0;
let loadedmp3 = 0;
let loadCountmp3 = 0;

function loadingBar(x, y, w, h) {
    rectMode(CORNER);
    stroke(0);
    noFill();
    rect(x, y, w, h);
    fill(100);
    noStroke();
    let W = w * loadCount / (loadedImg + loadedmp3) / 2; 
    rect(x, y, W, h);
    text("loading...", x, y);
}

function imgload(i, file) {
  images[i] = loadImage(file, loaded);
  
  function loaded(img) {
    print("Image id: " + i + " | location: " + file);
    
    loadCount++;
  }
}

  let iimg = 0;

function loadimg(file) {
  imgload(iimg, file);
  iimg++;
  loadedImg = iimg;
}

function mp3load(i, file) {
  sounds[i] = loadSound(file, loaded);
  
  function loaded(mp3) {
    print("sound id: " + i + " | location: " + file);
    
    loadCountmp3++;
  }
}

  let imp3 = 0;

function loadmp3(file) {
  mp3load(imp3, file);
  imp3++;
  loadedmp3 = imp3;
}

function isLoaded() {
  if((loadCount + loadCountmp3) / 2 >= (loadedImg + loadedmp3) / 2) return true; else return false;
}
