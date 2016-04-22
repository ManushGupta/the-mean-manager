import angular from 'angular';
const wtdFilter = angular.module('app.wtdFilter',[])
.filter('wtdFilter', function() {
  
	
		return function (items,startDate,endDate) {
	        
	 
	        //var itemDate = moment(item[property]);
	        //var s = moment(startDate, "DD-MM-YYYY");
	        //var e = moment(endDate, "DD-MM-YYYY");
	 		//var parts = startDate.split('-');
			var arrayToReturn = [];        
	        if(startDate != null && endDate !=null){
				
				for (var i=0; i<items.length; i++){

					
					//var tf = new Date(items[i].startDate),
					//tt = new Date(items[i].date2 * 1000);
					//if (tf > df && tt < dt)  {
					//	arrayToReturn.push(items[i]);
    				//}
    				var input = items[i]['inbasket_date'];
    				if(input==undefined){
    					arrayToReturn.push(items[i]);
    				}
    				var parts = String(input).split('-');
    				var val = (parts[0]+parts[1]+(String(parts[2]).split('T'))[0]);
    				var parts_sd = startDate.split('-');
    				var parts_ed = endDate.split('-');
    				var val_sd = parts_sd[0]+parts_sd[1]+parts_sd[2];
    				var val_ed = parts_ed[0]+ parts_ed[1]+parts_ed[2];
    				if(val >= val_sd && val <= val_ed){
    					arrayToReturn.push(items[i]);
    				}


    				//if(parts[0]==null){
    				//	console.log("hey");
    				//}
    				
        		}
        
        
	        	return arrayToReturn;
	        }
	        else{
	        	return items;
	        }

    	}


});

export default wtdFilter;