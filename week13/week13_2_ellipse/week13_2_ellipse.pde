void setup(){
  size(400,300);
  textSize(40);
}
int choise=-1;
void draw(){
  background(#D7F577);
  fill(#E695FF);
  if(choise==0)ellipse(25, 25,40,40);
  if(choise==1)ellipse(25, 75,40,40);
  if(choise==2)ellipse(25,125,40,40);
  text("Choise 1",50,50);
  text("Choise 2",50,100);
  text("Choise 3",50,150);
}
void mousePressed(){
  choise=int(random(3));
}
