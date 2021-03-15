function preload() {
  img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", showResults);
}

function modelLoaded() {
  console.log("Model has been loaded!");
}

function showResults(results) {
  poses = results;
  //console.log(results);
  if (results.length > 0) {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(noseX + " " + noseY);
  }
  
}

function draw() {
  image(video, 0, 0, 300, 300);
}

function takeSnapshot() {
  save("clown.png");
}
