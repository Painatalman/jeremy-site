export function initGallery() {
  window.lightGallery(document.getElementById("illustration-page"), {
    speed: 500,
    selector: "a[data-illustration]",
  });
}
