mainApp.service('UserUtils', function(LocalStorage,Constants) {
    
    
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
//method to get the token
//*******************************************************************************************        
  function getToken(){
  try
      {
          return LocalStorage.get(Constants.TOKEN);
          
      }
      catch(err)
     {
         return {};
     }
  };    
//*******************************************************************************************
//method to get the facebook local user
//*******************************************************************************************        
  function getFacebookUserLocal(){
  try
      {
          return LocalStorage.getObject(Constants.USER_FACEBOOK);
          
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
//method to store the token
//*******************************************************************************************        
  function storeToken(token){
  try
      {
          LocalStorage.set(Constants.TOKEN,token);
          return true;
      }
      catch(err)
     {
         return false;
     }
  };
     
//*******************************************************************************************
//method to store the local facebook user
//*******************************************************************************************        
  function storeFacebookUserLocal(user){
  try
      {
          LocalStorage.setObject(Constants.USER_FACEBOOK,user);
          return true;
      }
      catch(err)
     {
         return false;
     }
  };
//*******************************************************************************************
//method to get a facebook's image
//*******************************************************************************************        
  function getFacebookImage(obj){
  try
    {
         
        
         if(obj.picture && obj.picture.data)
          {
             return obj.picture.data.url;
          }
        else
          return null;
      }
      catch(err)
     {
         return null;
     }
  };
//*******************************************************************************************
//method to format a number
//*******************************************************************************************        
  function formatNumber(obj){
    return Math.round(obj);
  };
//     
//*******************************************************************************************
//method to get the current users facebook's image
//*******************************************************************************************        
  function getProfileFacebookImage(){
      var obj =getFacebookUserLocal();
      return getFacebookImage(obj);
        
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
     getToken:getToken,
     getFacebookUserLocal:getFacebookUserLocal,
    storeToken:storeToken,
     storeFacebookUserLocal:storeFacebookUserLocal,
    makeid: makeid,
     getProfileFacebookImage:getProfileFacebookImage,
     getFacebookImage:getFacebookImage,
     formatNumber:formatNumber
  }    
 
});