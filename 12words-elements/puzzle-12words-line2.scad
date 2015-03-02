include <puzzle.scad>;

module puzzle_set2(){

scale([5,5,5]){
	translate([-15,-5,0]) difference(){ puzzle5(); puzzle4();}
	translate([-10,-5,0]) difference(){ puzzle6(); puzzle5(); puzzle3();}
	translate([-5,-5,0]) difference(){ puzzle7(); puzzle6(); puzzle2();}
	translate([0,-5,0]) difference(){ puzzle8(); puzzle7(); puzzle1();}
	}

translate([40,-125,10]) scale([1,1,0.5]) rotate([270,0,0]) import("palmtree.stl");
translate([-63,-70, 0]) rotate([0,0,15]) import("walus.stl");
translate([-190,-90,5]) import("Rake.stl");
translate([-320,-80,5]) import("binoculars.stl");
}


difference(){

puzzle_set2();
translate([-400,-100,-100]) cube([500,100,100]);
}

