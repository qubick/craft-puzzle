function main(){
    var tail = linear_extrude({height:1, twist: 270, slices: 30}, 
                                circle(0.5).translate([0.5,0,0]) );
   
    var piece1 = union(
                puzzle1(),
                pig().translate([10,12,6])
        ),
    
        piece2 = union (
                puzzle2(),
                pig().rotateY(90).translate([-11,11,1])
        ),
        
        piece3 = union(
            puzzle3(),
            pig().rotateX(270).translate([-10,-13,-5])
        
        ),
        
        piece4 = union(
            puzzle4(),
            pig().rotateX(90).translate([10,-10,2]),
            tail.translate([10,-10,6.5])
            );
    

    var puzzle = union(
        piece1,
        color([0,1,0], piece2.translate([-5,0,0])),
        color([1,1,0], piece3.translate([-5,-5,0])),
        color([0,1,1], piece4.translate([0,-5,0]))
    );
    
    return difference(
            puzzle,
            cube([50,50,10]).translate([-30,-30,-10])
    );
    
}

function puzzle1(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:3, fn:50});
                    
    var connector = linear_extrude({height: 1}, conShape)
                        .translate([-5,7,0]);
    var piece = union(
        canvas,
        connector
    );
    //puzzle4's connector shape
    var conShape2 = polygon([[0,0],[2,0],[1,1]]).scale(4);
    conShape2 = linear_extrude({height:1}, conShape2)
                    .translate([7,0,0]);
    
    return difference (
        piece,
        conShape2
        //difference(piece, puzzle4()) <-- deadlock
    );
}

function puzzle2(){
    var canvas = cube([20,20,1]),
        conShape = square(5);
    var connector = linear_extrude({height:1}, conShape)
                    .translate([7,-5,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([-20,0,0]),
        puzzle1()
        );
}

function puzzle3(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:3, fn:50});
    var connector = linear_extrude({height:1}, conShape)
                    .translate([18,6,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([-20,-20,0]),
        puzzle2()
        );
}

function puzzle4(){
    var canvas = cube([20,20,1]),
        conShape = polygon([[0,0],[2,0],[1,1]]).scale(4);
    var connector = linear_extrude({height:1}, conShape)
                    .translate([7,20,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([0,-20,0]),
        puzzle3()
        );
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
    ).scale([0.5,0.5,0.5]);
}