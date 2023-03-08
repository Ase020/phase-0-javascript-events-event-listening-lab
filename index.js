const input = document.getElementById("button");

function addingEventListener() {
   input.addEventListener("click", () => {
      console.log("I was clicked");
   });
}

addingEventListener();
