var b= require("bonescript");
var state = b.LOW;
b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
b.digitalWrite("USR0", b.LOW);
b.digitalWrite("USR1", b.LOW);
b.digitalWrite("USR2", b.LOW);
b.digitalWrite("USR3", b.LOW);
setInterval(toggle,1000);

function toggle(){
if (state == b.LOW) state= b.HIGH;
else state = b.LOW;

b.digitalWrite("USR1", state);
}