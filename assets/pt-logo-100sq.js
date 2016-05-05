(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 100,
	height: 100,
	fps: 30,
	color: "#EEEEEE",
	manifest: []
};



// symbols:



(lib.ptlogo4frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(2,1,1).p("AAyAAQAAAUgPAPQgPAPgUAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATg");
	this.shape.setTransform(0,-20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EEEEEE").ss(2,1,1).p("AAAAAIAyAAAAAgxIAAAxIAAAyAgxAAIAxAA");
	this.shape_1.setTransform(0,-20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EEEEEE").ss(2,1,1).p("AAAAAIAjAjAAjgiIgjAiIgiAjAgigiIAiAi");
	this.shape_2.setTransform(0,-20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EEEEEE").ss(2,1,1).p("AgxAAIBjAA");
	this.shape_3.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EEEEEE").ss(2,1,1).p("ADIAAIDIjHIAAjIADIAAIAAmPImPAAIAADIIjIjIAjHAAIjIAAAjHAAIAAGQAjHAAIjIjHAjHjHIAADHIGPAA");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41,82,82);


// stage content:
(lib.ptlogo100sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.main = new lib.ptlogo4frame();
	this.main.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59,59,82,82);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;