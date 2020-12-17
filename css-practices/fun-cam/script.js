const video = document.getElementById("player");
const canvas = document.getElementById("image");
const ctx = canvas.getContext("2d");

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localStream => {
      console.log(localStream);

      video.srcObject = localStream;
      video.play();
    })
    .catch(err => {
      console.error(err);
      console.log("OH NO!!!")
    })
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);

    pixels = rgbSplit(pixels);

    ctx.putImageData(pixels, 0, 0);

  }, 24);
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i - 300] = pixels.data[i + 1];
    pixels.data[i + 350] = pixels.data[i + 2];
  }

  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);