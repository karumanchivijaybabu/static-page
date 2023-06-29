let container = document.querySelector("#container");
let box1 = document.querySelector('#box1');
let zoom = false;
container.addEventListener("click", function() {
    if (zoom == true){
        container.classList.remove("zoomed");
        container.classList.add("zoomed-out");
        zoom = false
    }
    else{
        container.classList.add("zoomed");
        container.classList.remove("zoomed-out");
        zoom = true;
    }
  });