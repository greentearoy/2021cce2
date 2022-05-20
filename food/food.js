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
    if (choise == 3)
        rect(50, 200, 150, 2);
    if (choise == 4)
        rect(50, 250, 150, 2);
    text("中餐吃泡麵", 50, 50);
    text("中餐UberEat", 50, 100);
    text("中餐FoodPanda", 50, 150);
    text("中餐吃牛排,50,200");
    text("中餐吃大餐,50,250")
}

function mousePressed() {
    choise = int(random(5));
}

function initializeFields() {
    choise = -1;
}
