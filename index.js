// DOMContentLoaded => The DOMContentLoaded event fires when the HTML document has been completely parsed
// and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed.
// It doesn't wait for other things like images, subframes, and async scripts to finish loading.

document.addEventListener("DOMContentLoaded", () => {
  let ball = document.getElementById("ball");
  let handle = document.getElementById("handle");
  let table = document.getElementById("table");

  let dx = 2; // displacement factor in x-direction
  let dy = 2; // displacement factor in y-direction
  let ballX = 10; // handle x coordinate
  let ballY = 10; // handle y coordinate

  setInterval(function exec() {
    ballX += dx;
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // collision of handle and balls

    if (
      ballX < handle.offsetLeft + handle.offsetWidth &&
      ballY > handle.offsetTop &&
      ballY - ball.offsetHeight < handle.offsetTop + handle.offsetHeight
    ) {
      dx *= -1;
    }

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
  }, 1);

  let handley = 0;
  let dpy = 15; //displacement factor in y-direction
  document.addEventListener("keydown", (event) => {
    event.preventDefault(); // prevent defoult event behaviour
    if (event.keyCode == 38 && handley > 0) {
      // 38 is uparrow key
      handley += -1 * dpy;
    } else if (
      (event.keyCode = 40 && handley < table.offsetHeight - handle.offsetHeight)
    ) {
      // 40 is downArrow key
      handley += dpy;
    }

    handle.style.top = `${handley}px`;
  });
});
