void setup(){
  size(400,300);
  textSize(40);
}
int choise=-1;
void draw(){
  background(#D7F577);
  fill(#E695FF);
  if(choise==0)rect(50,50,150,2);
  if(choise==1)rect(50,100,150,2);
  if(choise==2)rect(50,150,150,2);
  text("Choise 1",50,50);
  text("Choise 2",50,100);
  text("Choise 3",50,150);
}
void mousePressed(){
  choise=int(random(3));
}
