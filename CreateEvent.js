const event_list = document.getElementById("event_list");

event_list.addEventListener("click", () => {
  window.location.replace("http://127.0.0.1:5500/Listevent.html");
});

const logout_btn = document.getElementById("logout_btn")

logout_btn.addEventListener("click", () => {
  window.location.replace("http://127.0.0.1:5500/Login.html");
})