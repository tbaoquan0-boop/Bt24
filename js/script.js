// Script dùng chung cho toàn site: đánh dấu mục menu hiện tại + nút mở/đóng menu trên điện thoại.
(function () {
  "use strict";
  var current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#menu a").forEach(function (a) {
    if (a.getAttribute("href") === current) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
  var btn = document.querySelector(".menu-toggle");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
})();
