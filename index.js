document.addEventListener("DOMContentLoaded", () => {
    const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"]; 
  
    document.addEventListener("click", function (e) {
      const img = document.createElement("img");
      const randomImage = images[Math.floor(Math.random() * images.length)];
      img.src = "assets/" + randomImage;
  
      img.style.position = "absolute";
      img.style.left = e.pageX + "px";
      img.style.top = e.pageY + "px";
      img.style.width = "50px";
      img.style.transform = "translate(-50%, -50%)";
      img.style.pointerEvents = "none";
  
      document.getElementById("click-container").appendChild(img);
    });
  });
  