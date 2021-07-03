class Chain {
    constructor (bodyx,bodyy){
var opt = {
    bodyA:bodyx,
    bodyB:bodyy,
    stiffness:0.04,
    length : 50,
}
this.chain = Constraint.create(opt);
    World.add(world,this.chain);
    }
    display (){
 var posA = this.chain.bodyA.position;
 var posB = this.chain.bodyB.position;
 strokeWeight (5)   ;
 line (posA.x,posA.y,posB.x,posB.y);
}
}