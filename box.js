class Box {
    constructor(x, y, boxwidth, boxheight) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, boxwidth, boxheight, options);
        this.width = boxwidth;
        this.height = boxheight;
        World.add(world, this.body);
    }
    display() {
        // push();

        var pos = this.body.position;
        // translate(pos.x,pos.y);
        // rotate(this.body.angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        // pop();
    }
}