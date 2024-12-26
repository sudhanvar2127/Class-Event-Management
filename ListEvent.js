const create_event = document.getElementById("create_event");

create_event.addEventListener("click", () => {
  window.location.replace("http://127.0.0.1:5500/CreateEvent.html");
});

const logout_btn = document.getElementById("logout_btn")

logout_btn.addEventListener("click", () => {
  window.location.replace("http://127.0.0.1:5500/Login.html");
})