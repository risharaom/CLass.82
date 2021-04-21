var mouseEvent="empty";
var last_p_x, last_p_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
  color=document.getElementById("color_input").value;
  width_of_line=  document.getElementById("width_input").value;
  mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
c_p_x = e.ClientX-canvas.offsetLeft;
c_p_y = e.ClientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color_input;
ctx.lineWidth=width_input;
console.log ("Last position of x and y coordinates = ");
  console.log("x  = " + last_p_x + "y = " + last_p_y);
  ctx.lineTo(last_p_x, last_p_y);
  console.log ("Current position of x and y coordinates = ");
  console.log("x  = " + c_p_x + "y = " + c_p_y);
  ctx.lineTo(c_p_x, c_p_y);
  ctx.stroke();
}
last_p_x=c_p_x;
last_p_y=c_p_y;

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(){
mouseEvent ="mouseleave";
}