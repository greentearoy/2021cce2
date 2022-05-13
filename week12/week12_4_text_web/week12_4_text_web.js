
function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choise;

function draw() {
    background(color(0xD7, 0xF5, 0x77));
    fill(color(0xE6, 0x95, 0xFF));
    if (choise == 0)
        rect(50, 50, 150, 2);
    if (choise == 1)
        rect(50, 100, 150, 2);
    if (choise == 2)
        rect(50, 150, 150, 2);
    text("Choise 1", 50, 50);
    text("Choise 2", 50, 100);
    text("Choise 3", 50, 150);
}

function mousePressed() {
    choise = int(random(3));
}

function initializeFields() {
    choise = -1;
}
