
window.onload = function() // Actions to do after window load
{
    var boundaries= document.querySelectorAll(".boundary");	// Selection of the boundaries		
	var start = document.getElementById("start");	
	var end = document.getElementById("end");
	var started = false; // Initialization
	var bhit= false;
	var finished =false;
	
	    start.addEventListener("mouseover", function(){ started = true;});
		for( var x = 0; x < boundaries.length-1; x++)   // Addition of multiple event listeners
		    {
				boundaries[x].addEventListener("mouseover", colorChange() );
		    }
			
			
			
			function colorChange() // Function handling event
			{   
			  for( var i= 0; i < boundaries.length-1; i++) // Loop checking for mouse hover event 
			    boundaries[i].onmouseover= function()
			    {  
				  for( var i= 0; i < boundaries.length-1; i++) // Loop to select all the boundaries
					boundaries[i].className+=" youlose";
					bhit= true;// Set if hit 
				}			
			  if(bhit){		
			  alert("Oh no! Try again..");}
			}
	end.addEventListener("mouseover", function()
	{  
	   finished = true;
	   if(start && finished&& (!bhit)) // Event handler to alert player 
		   alert("You Win !");
	    
		   
	    
	   
	});	
}

