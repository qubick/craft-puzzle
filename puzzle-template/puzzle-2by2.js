function main(){
    return union(
        puzzle1(),
        color([0,1,0], puzzle2()).translate([-5,0,0]),
        color([1,1,0], puzzle3()).translate([-5,-5,0]),
        color([0,1,1], puzzle4()).translate([0,-5,0])
        //pig().scale([0.3,0.3,0.5])
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