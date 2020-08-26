     function my(val) {


     	$.ajax({
         url: "https://api.covid19api.com/summary",
         type: "GET",
         success: function (data) { 


            document.getElementById('amnei').value = data.Countries[val].Country;



          }

      });


     }






     // -------------------


 	// input execution
function myFunc(namesVal) {

	$.ajax({
         url: "https://api.covid19api.com/summary",
         type: "GET",
         success: function (data) { 


let date = new Date();


            let realName = Number(namesVal);

            document.getElementById('country').innerHTML = data.Countries[realName].Country;
         	// document.getElementById('date').innerHTML = data.Countries[realName].Date;
         	document.getElementById('date').innerHTML = date.toDateString();
         	document.getElementById('todayAffected').innerHTML = data.Countries[realName].NewConfirmed;
         	document.getElementById('todayDeaths').innerHTML = data.Countries[realName].NewDeaths;
         	document.getElementById('todayRecovered').innerHTML = data.Countries[realName].NewRecovered;
         	document.getElementById('totalAffected').innerHTML = data.Countries[realName].TotalConfirmed;
         	document.getElementById('totalDeaths').innerHTML = data.Countries[realName].TotalDeaths;
         	document.getElementById('totalRecovered').innerHTML = data.Countries[realName].TotalRecovered;

            








          }

      });

	
}

  

  // first global exuecution
$.ajax({
         url: "https://api.covid19api.com/summary",
         type: "GET",
         success: function (data) { 
            
            let realName = document.getElementById('names').value;
            
            let date = new Date();


            document.getElementById('country').innerHTML = 'GLOBAL';
         	document.getElementById('date').innerHTML = date.toDateString();
         	document.getElementById('todayAffected').innerHTML = data.Global.NewConfirmed;
         	document.getElementById('todayDeaths').innerHTML = data.Global.NewDeaths;
         	document.getElementById('todayRecovered').innerHTML = data.Global.NewRecovered;
         	document.getElementById('totalAffected').innerHTML = data.Global.TotalConfirmed;
         	document.getElementById('totalDeaths').innerHTML = data.Global.TotalDeaths;
         	document.getElementById('totalRecovered').innerHTML = data.Global.TotalRecovered;


            








          }

      });













// ---------------------
// no console function

document.addEventListener("contextmenu", function(e){
	    e.preventDefault();
	}, false);