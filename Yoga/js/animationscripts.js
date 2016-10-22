
// Animations & Parallax
$(document).ready(function() {
	var controller = $.superscrollorama();

	// Intro Animations
	
	TweenMax.from( $('.hero-form'), .8, {css:{left:'5%', opacity:'0'}, ease:Quad.easeInOut});
	TweenMax.from( $('.in-anim-2'), .8, {css:{right:'5%', opacity:'0'}, ease:Quad.easeInOut});

	// Feature Section
	controller.addTween('#feature', TweenMax.from( $('#fly-it-left'), .8, {css:{right:'10%', opacity:'0'}, ease:Quad.easeInOut}), -50);
	controller.addTween('#feature', TweenMax.from( $('#fly-it-right'), .8, {css:{left:'10%', opacity:'0'}, ease:Quad.easeInOut}), -50);
	

	// Classes Section
	controller.addTween('#classes', TweenMax.from( $('#fly-it-left1'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('#classes', TweenMax.from( $('#classes-right'), 1.2, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('#classes', TweenMax.from( $('#classes-right2'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('#classes', TweenMax.from( $('#classes-right3'), .6, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	
	
	// Pricing Section
	controller.addTween('#pricing', TweenMax.from( $('#fly-it-right1'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('#pricing', TweenMax.from( $('#fly-it-right11'), .8, {css:{left:'18%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('#pricing', TweenMax.from( $('#fly-it-right12'), .8, {css:{left:'21%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('#pricing', TweenMax.from( $('#price-last'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	
	// Teacher Section
	controller.addTween('#teacher', TweenMax.from( $('#teacher-1'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('.teacher-photo', TweenMax.from( $('.teacher-photo'), .8, {css:{left:'18%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('.teacher-descr', TweenMax.from( $('.teacher-descr'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	
	// Benefits Section
	controller.addTween('#benefits', TweenMax.from( $('#benefits'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('.benefits-1', TweenMax.from( $('.benefits-1'), .8, {css:{left:'18%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	controller.addTween('.benefits-2', TweenMax.from( $('.benefits-2'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -250);
	
	
	// Testimonial section
	controller.addTween('.testimonial-1', TweenMax.from( $('.testimonial-1'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -200);
	controller.addTween('.testimonial-2', TweenMax.from( $('.testimonial-2'), .8, {css:{left:'18%', opacity:'0'}, ease:Quad.easeInOut}), 0, -200);
	controller.addTween('.testimonial-3', TweenMax.from( $('.testimonial-3'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -200);
	controller.addTween('.testimonial-4', TweenMax.from( $('.testimonial-4'), .8, {css:{left:'18%', opacity:'0'}, ease:Quad.easeInOut}), 0, -200);
	
	
	// Member Section
	controller.addTween('#member', TweenMax.from( $('#fly-it-right2'), .8, {css:{left:'20%', opacity:'0'}, ease:Quad.easeInOut}), 0, -300);
	controller.addTween('#member', TweenMax.from( $('#fly-it-right23'), .8, {css:{right:'20%', opacity:'0'}, ease:Quad.easeInOut}), 0, -300);
	
	
	// Client Section
	controller.addTween('#client', TweenMax.from( $('#fly-it-right3'), .8, {css:{left:'10%', opacity:'0'}, ease:Quad.easeInOut}), 0, -300);
	controller.addTween('#client', TweenMax.from( $('#fly-it-left3'), .8, {css:{right:'10%', opacity:'0'}, ease:Quad.easeInOut}), 0, -300);

	// Signup section
	controller.addTween('#signup', TweenMax.from( $('#fly-it-left123'), .8, {css:{right:'15%', opacity:'0'}, ease:Quad.easeInOut}), 0, -300);
	

});

























































