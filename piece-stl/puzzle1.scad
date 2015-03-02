

scale([2.5,2.5,2.5]) import("puzzle-3by3.stl");

//raindeer
translate([25, 30, 5]) 
	import("raindeer.STL");


//drum
translate([-55,5,0])  
	scale([0.5,0.5,0.3])
		import("drum.STL");

//peanut
translate([-100,20,0])  
	import("Peanut_repaired.stl");


//computer
translate([25,-25,2]){
	translate([5,-15,0]) import("keyboard.stl");
	import("monitor.stl");
}

translate([-35,-38,1]) rotate([0,0,50])
	import("wagon.stl");

translate([-100,-38,0]) scale([1,1.5,2])
	import("ladder.stl");

translate([-35,-100,1])
	import("wheel.stl");

translate([28,-100,2]) scale([0.8,0.8,1])
	import("Mustache.stl");

translate([-100,-100,2]) 
cylinder($fn=6, r=20, h=5);

