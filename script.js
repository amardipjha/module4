 // Here,
 // We used Immediately Invoked function expression (IIFE).

 ( function () {
 	// Decleare an array in names variable.
	var names = ["Radhe" , "Ram" , "John" , "bikash" , "jolly" , "Rohit" , 
	             "Join" , "saurabh","jockey" , "amar" ,"Johnson" ];
	   
	 // for loop 
    for(var i = 0; i < names.length; i++) {
    	 var firstletter = names[i].charAt(0).toLowerCase();
     // Condition (if first letter of names[i] is equal to 'j' OR 'J')
    	 
         if(firstletter === "j"){
    		console.log("Good Bye" + " " + names[i]);
    	 }
    	 else{
    		 console.log("Hello " + " " + names[i]);
    	 }
     }

})();

