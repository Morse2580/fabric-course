// Adds a button to the header that retracts/expands the left navigation sidebar.
// State is remembered across pages (and survives Material's instant navigation).
(function () {
  function apply() {
    if (localStorage.getItem("navRetracted") === "1") {
      document.body.classList.add("nav-retracted");
    } else {
      document.body.classList.remove("nav-retracted");
    }
  }

  function inject() {
    apply();
    var header = document.querySelector(".md-header__inner");
    if (!header || header.querySelector(".nav-retract-btn")) return;

    var btn = document.createElement("button");
    btn.className = "md-header__button md-icon nav-retract-btn";
    btn.type = "button";
    btn.title = "Toggle navigation (left sidebar)";
    btn.setAttribute("aria-label", "Toggle navigation");
    // hamburger icon
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">' +
      '<path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';

    btn.addEventListener("click", function () {
      document.body.classList.toggle("nav-retracted");
      localStorage.setItem(
        "navRetracted",
        document.body.classList.contains("nav-retracted") ? "1" : "0"
      );
    });

    // place it first, before the logo, so it reads as the nav control
    header.insertBefore(btn, header.firstChild);
  }

  // Material exposes `document$` (RxJS) that fires on every page load,
  // including instant navigation. Fall back to DOMContentLoaded otherwise.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(inject);
  } else {
    document.addEventListener("DOMContentLoaded", inject);
  }
})();
