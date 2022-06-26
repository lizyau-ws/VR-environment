
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');


function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});


/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

var growspeed = 1.4;

function grow(){
	myOtherBox.object3D.scale.x *= growspeed;
	myOtherBox.object3D.scale.y *= growspeed;
	myOtherBox.object3D.scale.z *= growspeed;
	//console.log(myOtherBox.object3D.scale);
}

function decrease(){
	myOtherBox.object3D.scale.x *= 0.3;
	myOtherBox.object3D.scale.y *= 0.3;
	myOtherBox.object3D.scale.z *= 0.3;
}

myOtherBox.addEventListener('mouseleave', function(){
	decrease();
	console.log('entered');
});


myOtherBox.addEventListener('click', function(){ // uses a fuse
	grow();
	console.log('grew');
});

myBox.addEventListener('click', function(){ // uses a fuse
	function spin2(){
		myBox.object3D.rotation.x += rotationSpeed;
		myBox.object3D.rotation.y += rotationSpeed;
		myBox.object3D.rotation.z += rotationSpeed/2;
		//console.log(myOtherBox.object3D.rotation);
	}
	setInterval(spin2, 10);
});

