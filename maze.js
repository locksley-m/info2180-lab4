
window.onload = function() // Actions to do after window load
{
        var boundaries= document.querySelectorAll(".boundary");	// Selection of the boundaries		
		
	
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
				}			
					
			}
		
}

