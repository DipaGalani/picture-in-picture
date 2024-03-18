const videoElement = document.querySelector("#video");
const button = document.querySelector("#start");

// Select media stream, pass stream to video element, play video
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log("There is an error on selectMediaStream() ", err);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
