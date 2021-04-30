function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
    console.log("ModelLoaded!");
}

function draw() {
    image(video, 0, 0, 400, 400);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results)
        document.getElementById('result_object_name').innerHTML = results[0].label;
        document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(3);
    }
}