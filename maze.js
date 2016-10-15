
window.onload = function() // Actions to do after window load
{
    var boundaries= document.querySelectorAll(".boundary");	// Selection of the boundaries		
	var start = document.getElementById("start");	
	var end = document.getElementById("end");
	var status = document.getElementById('status');
	var started = false; // Initialization
	var bhit= false;
	var finished =false;
	
	
	    start.addEventListener("mouseover", function(){ started = true;});
		start.onclick = function(){			
			if (bhit)			    
			   location.reload();
			  
		}
		for( var x = 0; x < boundaries.length-1; x++)   // Addition of multiple event listeners
		    {
				boundaries[x].addEventListener("mouseover", colorChange() );
		    }
			
        var maze = document.getElementById('maze');
		document.onmouseover = function(some){
		var left = maze.offsetLeft;
		var right = maze.offsetRight;
		var top = maze.offsetTop;
		var bottom = maze.offsetBottom;
		var height = maze.offsetHeight;      
		var width = maze.offsetWidth;
		var x = some.clientX;
		var y = some.clientY;
	
	
	if((x<left)||(x>right)||(y<top)||(y>bottom)){
        for (var j=0;j<boundaries.length-1; j++){
			if (started){
			  boundaries[j].setAttribute('class', 'boundary youlose');
			  status.innerHTML = "You Lose!";
			  bhit=true;
			}
        }
      }
    }			
			
			function colorChange() // Function handling event
			{   
			  for( var i= 0; i < boundaries.length-1; i++) // Loop checking for mouse hover event 
			    boundaries[i].onmouseover= function()
			    {  
				  for( var i= 0; i < boundaries.length-1; i++) // Loop to select all the boundaries
					boundaries[i].className+=" youlose";
					bhit= true;// Set if hit 
					if (bhit)
					   status.innerHTML = "You Lose! Aww Try again";
				}			
			  if(bhit){		
			  alert("Oh no! Try again..");}
			}
	end.addEventListener("mouseover", function()
	{  
	   finished = true;
	   if(start && finished&& (!bhit)) // Event handler to alert player 
		  status.innerHTML = "You Win!";
	   else 
		   status.innerHTML = "You Lose!";
	    
		   
	    
	   
	});	
}

