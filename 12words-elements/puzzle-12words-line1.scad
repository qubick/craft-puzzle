include <puzzle.scad>;

module puzzle_set1(){

scale([5,5,5]){
	puzzle1();
	translate([-5,0,0]) difference(){ puzzle2(); puzzle1();}
	translate([-10,0,0]) difference(){ puzzle3(); puzzle2();}
	translate([-15,0,0]) difference(){ puzzle4(); puzzle3();}
}

translate([47,43,2]) import("octopus.stl");

translate([-80,50,5]) import("pelican.stl");

translate([-200,45,1]) rotate([0,0,120]) scale([1,1,2]) import("feather.stl");

translate([-335,50,1]) scale([1.2,1.2,1])
	rotate([0,20,0]) import("cactus.stl");
}

difference(){

puzzle_set1();
translate([-400,0,-100]) cube([500,100,100]);
}