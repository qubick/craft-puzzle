function main(){
    
    return pig().translate([0,0,10]);
}

function pig(){
    var body = union(
        sphere(10),
        sphere(7).translate([11,0,3])
    );
    
    var nose = difference(
        cylinder({r:4, h:4}),
        sphere(1).translate([1.7,0.5,4]),
        sphere(1).translate([-1.7,0.5,4]),
        cube({size:10, round:true}).translate([-4.5,-11.5,3])
    ).rotateX(90);
    
    var face = union(
        nose.scale(0.7).translate([0,-16,4]),
        sphere(1).translate([-2.5,-16,7]),
        sphere(1).translate([2.5,-16,7])
    );
    
    var ears = union(
        //cylinder({r1: 3, r2: 0, h: 10}),
        cylinder({start: [6,0,0], end: [8,0,3], r1: 2, r2: 0.5, fn: 50}),
        cylinder({start: [0,0,0], end: [-2,0,3], r1: 2, r2: 0.5, fn: 50})
    ).translate([-3,-12,7.5]);
    
    
    var legs = union(
            cylinder({r:2.5, h:3}).translate([3,-3,0]),
            cylinder({r:2.5, h:3}).translate([-3,-3,0]),
            cylinder({r:2.5, h:3}).translate([-3,3,0]),
            cylinder({r:2.5, h:3}).translate([3,3,0])
        ).translate([0,0,-10]);
        
    return union(
        body.rotateZ(270),
        face,
        legs,
        ears
    );
}