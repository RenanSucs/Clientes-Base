$(function(){
    var getCostumersError = function(err){
        console.error(err);
    }
    
    var getCostumersSuccess = function(costumers){
        
        var tr = [];

        $.each(costumers, function(idx, costumer){
            //console.log("costumer", arguments); descobrir o que está chegando na função
            tr.push(`<tr>
                        <td>${costumer.id}</td>
                        <td>${costumer.name}</td>
                        <td>${costumer.email}</td>
                        <td>${costumer.phone}</td>
                        <td>${costumer.country}</td>
		            </tr>`);

        });
        $("table").append(tr);
        $("#loading").fadeOut(200); 
    }
    
    $.ajax({
        url:"http://www.mocky.io/v2/5c83d8a9300000a0146b0d35",
        dataType:"jsonp",
        error: getCostumersError,
        success: getCostumersSuccess
    });

});

