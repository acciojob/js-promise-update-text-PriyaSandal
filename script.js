//your JS code here. If required.
function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}
delayedHello().then((text) => {
  document.getElementById("output").innerText = text;
});