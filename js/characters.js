const background = new Sprite({
	position: {
	x: 0,
	y: 0
	},
	imageSrc:'background.png',
})

 
 
const player = new Fighter({
	position:{
 x:50,
 y:0
},
velocity:
{
	x:0,
	y:0
},
offset: {
	x:0,
	y:0
},
imageSrc:'idle.png',
scale:2.65,
framesMax: 8,
framesHold: 8,
offset: {
	x:215,
	y:170
	},
 sprites: {
	idle:{
		imageSrc:'idle.png',
		framesMax: 8	,
		framesHold: 9	   
	},
	run:{
		imageSrc:'Run.png',
		framesMax: 8,
		framesHold: 5	 
 },
 jump:{
		imageSrc:'Jump.png',
		framesMax: 2	,
		framesHold: 2
 },
 fall:{
		imageSrc:'Fall.png',
		framesMax: 2	,
		framesHold: 2
 },
 attack1:{
		imageSrc:'Attack2.png',
		framesMax: 6	,
		framesHold: 3
 },
 takeHit:{
		imageSrc:'Take Hit - white silhouette.png',
		framesMax: 4	,
		framesHold: 5
 },
 death:{
		imageSrc:'Death.png',
		framesMax: 6,
		framesHold: 5
 }
 },
attackBox:{
  offset:{
	  x:30,
	  y:50
  },
  width:200,
  height:50
 },
health: 200	
})

   const enemy = new Fighter({
	   position:{
	x:880,
	y:0
   },
   velocity:
   {
	   x:0,
	   y:0
   },
   color: 'blue',
   offset: {
	   x:-50,
	   y:0
   },
    imageSrc:'Kidle.png',
   scale:2.65,
   framesMax: 4,
   framesHold: 8,
   offset: {
	   x:215,
	   y:185
	   },
	sprites: {
       idle:{
		   imageSrc:'Kidle.png',
           framesMax: 4	,
           framesHold: 9	   
	   },
       run:{
		   imageSrc:'KRun.png',
           framesMax: 8,
		   framesHold: 4	 
	},
	jump:{
		   imageSrc:'KJump.png',
           framesMax: 2	,
		   framesHold: 2
	},
	fall:{
		   imageSrc:'KFall.png',
           framesMax: 2	,
		   framesHold: 2
	},
	attack1:{
		   imageSrc:'KAttack1.png',
           framesMax: 4	,
		   framesHold: 5
	},
	takeHit:{
		   imageSrc:'KTake hit.png',
           framesMax: 3  	,
		   framesHold:12
	},
	death:{
		   imageSrc:'KDeath.png',
           framesMax: 7	,
		   framesHold: 5
	}
	},
	attackBox:{
	 offset:{
		 x:-168,
		 y:50
	 },
	 width:234,
	 height:50
	},
	health: 300
   })