PShape gundam;
void setup(){
  size(600,600,P3D);
  gundam=loadShape("Gundam.obj");
}
void draw(){
  background(#C9FFD9);
  translate(300,550);
  scale(20,-20,20);
  rotateY(radians(frameCount));
  shape(gundam);
}
