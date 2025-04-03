var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");
var elems = document.querySelectorAll(".elem");

var mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

// Capture mouse movement
main.addEventListener("mousemove", function (dets) {
    mouseX = dets.x;
    mouseY = dets.y;
});

// Smooth cursor animation
function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2; // Adjust smoothness
    cursorY += (mouseY - cursorY) * 0.2;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Image hover effect
elems.forEach(function (val) {
    var img = val.querySelector("img"); 
    if (img) {
        val.addEventListener("mouseenter", function () {
            img.style.opacity = 0.3;
            cursor.style.transform = `scale(2)`; // Enlarge cursor
        });

        val.addEventListener("mouseleave", function () {
            img.style.opacity = 0;
            cursor.style.transform = `scale(1)`;
        });
    }
});
