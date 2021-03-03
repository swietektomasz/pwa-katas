export function Camera() {
  navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then(function (stream) {
      var video = document.getElementById("video");

      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        video.src = window.URL.createObjectURL(stream);
      }
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });

  return (
    <div>
      <video height="500" id="video" />
    </div>
  );
}
