mainApp.service('UserService', function(LocalStorage,Constants) {
    
    
//*******************************************************************************************
//method to get the local user
//*******************************************************************************************        
  function getUserLocal(){
  try
      {
          return LocalStorage.getObject(Constants.USER);
          
      }
      catch(err)
     {
         return {};
     }
  };    
//*******************************************************************************************
//method to store the local user
//*******************************************************************************************        
  function storeUserLocal(user){
  try
      {
          LocalStorage.setObject(Constants.USER,user);
          return true;
      }
      catch(err)
     {
         return false;
     }
  };
//*******************************************************************************************
//create the id for images
//*******************************************************************************************    
    //Method for create an id for the image
  function makeid() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };  
 return {
    getUserLocal: getUserLocal,
    storeUserLocal: storeUserLocal, 
    makeid: makeid
  }    
 
});