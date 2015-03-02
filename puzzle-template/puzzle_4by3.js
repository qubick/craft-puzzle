function main(){
    return union(
        //first line
        puzzle1(),
        color([0,1,0], puzzle2()).translate([-5,0,0]),
        color([1,1,0], puzzle3()).translate([-10,0,0]),
        color([0,1,1], puzzle4()).translate([-15,0,0]),
        
        //second line
        color([1,0,1], puzzle5()).translate([-15,-5,0]),
        color([0,0,1], puzzle6()).translate([-10,-5,0]),
        color([1,0,0], puzzle7()).translate([-5,-5,0]),
        color([1,0.5,0], puzzle8()).translate([0,-5,0]),
        
        //third line
        color([1,0.5,0.5], puzzle9()).translate([0,-10,0]),
        color([0.5,1,0.5], puzzle10()).translate([-5,-10,0]),
        color([0.5,0.5,1], puzzle11()).translate([-10,-10,0]),
        color([1,0,0.5], puzzle12()).translate([-15,-10,0])
        //pig().scale([0.3,0.3,0.5])
        
    );
}

function puzzle1(){
    var canvas = cube([20,20,1]),
        conShape1 = circle({r:4.5, fn:6}),
        conShape2 = circle({r:3, fn:50});
    var connectorLft = linear_extrude({height: 1}, conShape1)
                        .translate([-5,5,0]),
        connectorRgt = linear_extrude({height:1},conShape2)
                    .translate([6,-4,0]);
    var piece = union(
        canvas,
        connectorLft,
        connectorRgt
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
        conShape1 = circle({r:4, fn:50}),
        conShape2 = circle({r:4, fn:3});
    var connectorBtm = linear_extrude({height:1}, conShape1)
                        .translate([5,-3,0]);
        connectorLft = linear_extrude({height:1},conShape2)
                        .translate([-5,5,0]);
                    
    var piece = union(
        canvas,
        connectorBtm,
        connectorLft
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
        piece.translate([-60,0,0]),
        puzzle3()
    );
}

function puzzle5(){
    var canvas = cube([20,20,1]),
        conShape1 = polygon([[0,0],[0,3],[2,3],[1,1.5],[2,0]]).scale(3),
        conShape2 = circle({r:4, fn:7});
        
    var connectorRgt = linear_extrude({height:1}, conShape1)
                    .translate([18,6,0]),
        connectorBtm = linear_extrude({height:1}, conShape2)
                    .translate([6,-5,0]);
    var piece = union(
        canvas,
        connectorRgt,
        connectorBtm
    );
    
    return difference (
        piece.translate([-60,-20,0]),
        puzzle4()
    );
}

function puzzle6(){
    var canvas = cube([20,20,1]),
        conShape1 = circle({r:4, fn:50}),
        conShape2 = circle({r:4.5, fn:6});
        
    var connectorRgt = linear_extrude({height:1}, conShape1)
                    .translate([18,6,0]),
        connectorBtm = linear_extrude({height:1}, conShape2)
                    .translate([6,-4,0]);
    var piece = union(
        canvas,
        connectorRgt,
        connectorBtm
    );
    
    return difference (
        piece.translate([-40,-20,0]),
        puzzle5(),
        puzzle3()
    );
}

function puzzle7(){
    var canvas = cube([20,20,1]),
        conShape1 = circle({r:3.5, fn:8}),
        conShape2 = circle({r:3, fn:3});
        
    var connectorBtm = linear_extrude({height:1}, conShape1)
                    .translate([6,-5,0]),
        connectorRgt = linear_extrude({height:1}, conShape2)
                    .translate([18.5,6,0]);
    var piece = union(
        canvas,
        connectorBtm,
        connectorRgt
    );
    
    return difference (
        piece.translate([-20,-20,0]),
        puzzle6(),
        puzzle2()
    );
}

function puzzle8(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:5, fn:3});
        
    var connector= linear_extrude({height:1}, conShape)
                    .translate([5,-5,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([0,-20,0]),
        puzzle7(),
        puzzle1()
    );   
}

function puzzle8(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:5, fn:3});
        
    var connector= linear_extrude({height:1}, conShape)
                    .translate([5,-5,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([0,-20,0]),
        puzzle7(),
        puzzle1()
    );   
}

function puzzle9(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:4, fn:50});
    
    var connector= linear_extrude({height:1}, conShape)
                    .translate([-5,7,0]);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([0,-40,0]),
        puzzle8()
    );   
}

function puzzle10(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:5, fn:3});
        
    var connector= linear_extrude({height:1}, conShape)
                    .translate([3,-1,0]).rotateZ(60);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([-20,-40,0]),
        puzzle7(),
        puzzle9()
    );   
}

function puzzle11(){
    var canvas = cube([20,20,1]),
        conShape = circle({r:5, fn:3});
        
    var connector= linear_extrude({height:1}, conShape)
                    .translate([3,-1,0]).rotateZ(60);
    var piece = union(
        canvas,
        connector
    );
    
    return difference (
        piece.translate([-40,-40,0]),
        puzzle6(),
        puzzle10()
    );   
}

function puzzle12(){
    var canvas = cube([20,20,1]);
    return difference (
        canvas.translate([-60,-40,0]),
        puzzle5(),
        puzzle11()
    );   
}