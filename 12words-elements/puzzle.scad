//puzzleSet();

module puzzleSet(){

puzzle1();
translate([-5,0,0]) difference(){ puzzle2(); puzzle1();}
translate([-10,0,0]) difference(){ puzzle3(); puzzle2();}
translate([-15,0,0]) difference(){ puzzle4(); puzzle3();}
translate([-15,-5,0]) difference(){ puzzle5(); puzzle4();}
translate([-10,-5,0]) difference(){ puzzle6(); puzzle5(); puzzle3();}
translate([-5,-5,0]) difference(){ puzzle7(); puzzle6(); puzzle2();}
translate([0,-5,0]) difference(){ puzzle8(); puzzle7(); puzzle1();}
translate([0,-10,0]) difference(){ puzzle9(); puzzle8();}
translate([-5,-10,0]) difference(){ puzzle10(); puzzle9(); puzzle7();}
translate([-10,-10,0]) difference(){ puzzle11(); puzzle10(); puzzle6();}
translate([-15,-10,0]) difference(){ puzzle12(); puzzle11(); puzzle5();}
}

module puzzle1(){
        cube([20,20,1]);
        translate([-1,10,0]) cylinder(r=4, $fn=6);
        translate([10,-2,0]) cylinder(r=3, $fn=50);
}

module puzzle2(){
	translate([-20, 0, 0]){
		cube([20,20,1]);
        translate([9,0,0]) cylinder(r=5, $fn=3);
        translate([-4,7,0]) cube([6,6,1]);
	}
}

module puzzle3(){
	translate([-40, 0, 0]){
        cube([20,20,1]);
        translate([10,-2,0]) cylinder(r=4, $fn=50);
        translate([-1,10,0]) cylinder(r=5, $fn=3);
	}
}

module puzzle4(){
	translate([-60,0,0]){
        cube([20,20,1]);
        translate([20,10,0]) cylinder(r=4, $fn=3);
        translate([11,-2,0]) cylinder(r=3, $fn=50);
    }
}

module puzzle5(){
    translate([-60,-20,0]){
        cube([20,20,1]);
        translate([22,10,0]) cylinder(r=3, $fn=8);
        translate([10,0,0]) cylinder(r=5, $fn=7);
	}
}

module puzzle6(){
    translate([-40,-20,0]){
        cube([20,20,1]);
        translate([20,10,0]) cylinder(r=4, $fn=50);
        translate([10,0,0]) cylinder(r=4.5, $fn=6);
	}
}

module puzzle7(){
	translate([-20,-20,0]){
        cube([20,20,1]);
        translate([10,0,0]) cylinder(r=3.5, $fn=8);
        translate([21,10,0]) cylinder(r=5, $fn=3);
	}
}

module puzzle8(){
	translate([0,-20,0]){
		cube([20,20,1]);
		translate([10,0,0]) rotate([0,0,60]) cylinder(r=5, $fn=3);
    }  
}

module puzzle9(){
    translate([0,-40,0]){
		cube([20,20,1]);
        translate([0,10,0]) cylinder(r=4, $fn=50);
	}  
}

module puzzle10(){
	translate([-20,-40,0]) {
        cube([20,20,1]);
		translate([0,4,0]) rotate([0,0,45]) cube([5,5,1]);
		translate([0,9,0]) rotate([0,0,45]) cube([5,5,1]);
    }
}

module puzzle11(){
    translate([-40,-40,0]){
		cube([20,20,1]);
        translate([-4,6,0]) cube([7,7,1]);
    }   
}

module puzzle12(){
    translate([-60,-40,0]){
        cube([20,20,1]);
        translate([3,-1,0]) rotateZ(60) cylinder(r=5, $fn=3);
    }   
}
