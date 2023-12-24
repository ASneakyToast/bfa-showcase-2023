import p5 from "p5";

let sketch = function(p) {
  let drawing = false;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    if ( drawing ) {
      p.rect( (p.mouseX-25), (p.mouseY-25), 50, 50 );
    }
  };

  p.mouseClicked = function() {
    // toggle drawing
    drawing = !drawing;
  };

  // TODO: NOT WORKING
  p.windowResized = function(p) {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

export function createEffect() {
  new p5(sketch, "cursor-effect");
}
