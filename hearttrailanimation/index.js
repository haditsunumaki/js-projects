document.addEventListener("mousemove", function (e) {
  let heart = document.createElement("span");
  document.body.appendChild(heart);

  
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;

  
  setTimeout(() => {
    heart.remove();
  }, 3000);
});
