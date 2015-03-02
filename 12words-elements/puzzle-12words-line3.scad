include <puzzle.scad>;

module puzzle_set3(){

	scale([5,5,5]){
		translate([0,-10,0]) difference(){ puzzle9(); puzzle8();}
		translate([-5,-10,0]) difference(){ puzzle10(); puzzle9(); puzzle7();}
		translate([-10,-10,0]) difference(){ puzzle11(); puzzle10(); puzzle6();}
		translate([-15,-10,0]) difference(){ puzzle12(); puzzle11(); puzzle5();}
	}

	translate([50,-208,-5]) scale([1,1,0.5]) import("pear.stl");
	translate([-85,-200, 1]) scale([1,1,3]) import("saw.stl");
	translate([-210,-200, 1]) import("pyramid.stl");
	translate([-305,-210, 1]) scale([1,1,2]) import("wrench.stl");

}
//translate([50,-208, 5]) scale([1,0.9,1]) import("camel.stl");


difference(){

	puzzle_set3();
	translate([-400,-250,-100]) cube([500,100,100]);
}
