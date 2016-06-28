mainApp.service( 'RealTimeService', function() {
    
//*******************************************************************************************
//realtime logic
//*******************************************************************************************        
var client = undefined;
function connectToServer(username)
{
    client = deepstream( 'localhost:3000', {
			path: '/deepstream'
		}  ).login({username:username});
    
client.on( 'error', function( msg, event, topic ){
   
});     
return client;    
}
 

return {
    connectToServer: connectToServer
}

    
})