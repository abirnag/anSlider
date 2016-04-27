/*
Initialize the silder with config and data 
config  is a json object of configuration 
config should have the below structure 
config ={
    mainslider:{
		   width: 800,
		   height: 600,
		   boxShadow:"0px 0px 5px #000",
		   backgroundColor:"#000",
		   borderRadius: 0 ,
		   borderwidth:0, 
		   borderColor:"",
		   
		},
    thumbnail : {
		    width : 50, 
			height : 50,
			borderRadius : 25 ,
			padding: 3,
			backgroundColor:"#FFF",		
		},
	thumbnailPanel:{
		   backgroundColor:"rgba(valueRed,valueGreen,valueBlue,valueAlpha)",
		   height:100, 
		   padding :20, 
		   
	    }
   
};
data is also a json object containing the image path and thumbnail path
   data = {
	   length : 5, 
	   data : {
		   1 : { 
		     'ImageUrl' : '', 
			 'ThumbUrl' : '',
			 
		   },
		   2 : { 
		     'ImageUrl' : '', 
			 'ThumbUrl' : '',
			 
		   },
		  3  : { 
		     'ImageUrl' : '', 
			 'ThumbUrl' : '',
			 
		   },
		  4 : { 
		     'ImageUrl' : '', 
			 'ThumbUrl' : '',
			 
		   },
		  5 : { 
		     'ImageUrl' : '', 
			 'ThumbUrl' : '',
			 
		   },
	   }
   };
*/

function anslider_init(config,data){
    var anslider_array = document.getElementsByClassName("anslider");
	for(var icount = 0;icount<anslider_array.length;icount++){
		anslider_backframe_construct(anslider[icount],config);
	}
	
}

/*
  BackFrame of Slider Construction init method will call it. 
  parameters : typeofslider, inset , 
  
  
*/
function anslider_backframe_construct(anslider_main,config){
}