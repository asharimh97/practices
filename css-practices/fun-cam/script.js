const userMedias = {
  display: "display",
  video: "video"
};

const video = document.getElementById("player");
const display = document.getElementById("display-player");
const canvas = document.getElementById("image");
const ctx = canvas.getContext("2d");
let displayedMedia = userMedias.video;

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localStream => {
      displayedMedia = userMedias.video

      video.srcObject = localStream;
      video.play();
    })
    .catch(err => {
      console.error(err);
      console.log("OH NO!!!")
    })
}

function getDisplayVideo() {
  navigator.mediaDevices.getDisplayMedia()
    .then(mediaStream => {
      displayedMedia = userMedias.display;

      display.srcObject = mediaStream;
      display.play();
    })
    .catch(err => {
      console.error(err);
      console.log("OH NO Media failed!!!");
    })
}

function paintToCanvas() {
  const media = displayedMedia === userMedias.video ? video : display;
  const width = media.videoWidth;
  const height = media.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(media, 0, 0, width, height);

    if (displayedMedia === userMedias.video) {
      let pixels = ctx.getImageData(0, 0, width, height);
  
      pixels = rgbSplit(pixels);
  
      ctx.putImageData(pixels, 0, 0);
    }

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

// getVideo();

// getDisplayVideo();

video.addEventListener("canplay", paintToCanvas);
display.addEventListener("canplay", paintToCanvas);