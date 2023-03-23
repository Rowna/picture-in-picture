const videoElement = document.getElementById("video");
const videoButton = document.getElementById("button");

// promot to select media stream, pass to video Element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    // when that video loaded its metadata
    videoElement.onloadedmetadata = () => {
      // call fn play()
      videoElement.play();
    };
  } catch (error) {
    console.log("Wooopss! error: " + error);
  }
}

videoButton.addEventListener("click", async () => {
  // Button first disabled
  button.disabled = true;
  // start the picture
  await videoElement.requestPictureInPicture();
  // Button reset
  button.disabled = false;
});

// on Load
selectMediaStream();
