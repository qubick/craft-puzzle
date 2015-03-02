function main(){
    return union(
        puzzle1(),
        color([0,1,0], puzzle2()).translate([-5,0,0]),
        color([1,1,0], puzzle3()).translate([-10,0,0]),
        color([0,1,1], puzzle4()).translate([-10,-5,0]),
        color([1,0,1], puzzle5()).translate([-10,-10,0]),
        color([0,0,1], puzzle6()).translate([-5,-10,0]),
        color([1,0,0], puzzle7()).translate([0,-10,0]),
        color([1,0.5,0], puzzle8()).translate([0,-5,0]),
        color([1,0.5,0.5], puzzle9()).translate([-5,-5,0])
        //pig().scale([0.3,0.3,0.5])
        
    );
}

function puzzle1(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:4.5, fn:6}),
        connector = linear_extrude({height: 1}, conShape)
                        .translate([-5,5,0]);
    var piece = union(
        canvas,
        connector
    );
    return piece;
}

function puzzle2(){
    var canvas = cube([20,20,1]),
        conShape1 = square(6),
        conShape2 = polygon([[0,0],[3,0],[1.5,3]]).scale(3);
        
    var connectorLft = linear_extrude({height:1}, conShape1)
                    .translate([-3,7,0]),
        connectorBtm = linear_extrude({height:1},conShape2)
                    .translate([6,-3,0]);
    var piece = union(
        canvas,
        connectorBtm,
        connectorLft
    );
    
    return difference (
        piece.translate([-20,0,0]),
        puzzle1()
    );
}

function puzzle3(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:4, fn:50}),
        connector = linear_extrude({height:1}, conShape)
                        .translate([6,-4,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([-40,0,0]),
        puzzle2()
    ); 
}

function puzzle4(){
    var canvas = cube([20,20,1]),
        conShape1 = polygon([[0,2],[2,0],[0,-2]]).scale(2),
        conShape2 = circle({r:3, fn:50});
        
    var connectorRht = linear_extrude({height:1}, conShape1)
                    .translate([20,10,0]),
        connectorBtm = linear_extrude({height:1}, conShape2)
                    .translate([7,-4,0]);
    var piece = union(
        canvas,
        connectorRht,
        connectorBtm
    );
    
    return difference (
        piece.translate([-40,-20,0]),
        puzzle3()
    );
}

function puzzle5(){
    var canvas = cube([20,20,1]),
        conShape = polygon([[0,0],[0,3],[2,3],[1,1.5],[2,0]]).scale(3);
        
    var connector = linear_extrude({height:1}, conShape)
                    .translate([18,6,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([-40,-40,0]),
        puzzle4()
    );
}

function puzzle6(){
    var canvas = cube([20,20,1]),
        conShape1 = circle({r:4, fn:50}),
        conShape2 = circle({r:4.5, fn:6});
        
    var connectorRht = linear_extrude({height:1}, conShape1)
                    .translate([18,6,0]),
        connectorTop = linear_extrude({height:1}, conShape2)
                    .translate([6,15,0]);
    var piece = union(
        canvas,
        connectorRht,
        connectorTop
    );
    
    return difference (
        piece.translate([-20,-40,0]),
        puzzle5()
    );
}

function puzzle7(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:4.5, fn:8});
        
    var connector = linear_extrude({height:1}, conShape)
                    .translate([5,15,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([0,-40,0]),
        puzzle6()
    );
}

function puzzle8(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:3, fn:50});
        
    var connector = linear_extrude({height:1}, conShape)
                    .translate([-4,7,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([0,-20,0]),
        puzzle7()
    );   
}

function puzzle9(){
    var canvas = cube([20,20,1]);
    
    return difference (
        canvas.translate([-20,-20,0]),
        puzzle2(),
        puzzle4(),
        puzzle6(),
        puzzle8()
    );
}