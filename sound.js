console.log("Hi, this is a testing line");

let photo = document.getElementById("icon");
photo.style.width = '90%';

photo.addEventListener("mouseenter", () => {
    //enlarge the icon on hover
        photo.style.width = '99%';
  });

  //specifying what happens when my mouse leaves -icon gets back to its original position
photo.addEventListener("mouseleave", () => {
        photo.style.width = '90%';
  });
  
  function playAudio(url){
    let current_audio = new Audio(url);
    current_audio.play();
  }