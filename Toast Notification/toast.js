const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
  const notify = document.createElement("div");
  notify.classList.add("toast");

  notify.innerText = "this is a  toast notification challenge!!!";
  
  container.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3000);
}
