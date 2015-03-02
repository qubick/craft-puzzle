include <puzzle.scad>;

puzzleSet();

scale([3.5,3.5,3.5]) import("racoon.stl");

translate([-15,7,1]) scale([0.3,0.3,0.3]) import("pelican.stl");

translate([-40,5,1]) scale([10,10,10]) import("Anchor.stl");