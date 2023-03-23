## 22.03.2023
[x] trigger videoElement & Button
[ ] promot to select media stream, pass to video Element, then play 
  [x] async fn selectMediaStream()
  [x] setting a const mediaStream to have a mediaStringData 
  [x] wait to asign that until the user has selected which screen they want to share => 
    await navigator.mediaDevices.getDisplayMedia();
  [x] passing that into video object as its srcObject
  [x] when that video loaded its metadata (onloadedmetadata) as fn, call fn play()
  
[ ] eventList to Button by clicking with async anonymus fn
  [ ] disable the button true
  [ ] await video element requestPictureInPicture()
  [ ] reset the button false


##

