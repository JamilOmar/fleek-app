mainApp.constant('Constants', {
  //default profile image
  PROFILE_IMAGE:'img/app/global/avatar.png',
  //token for authentication
  TOKEN:'TOKEN',
  //response success token     
  RESPONSE_SUCCESS : 'OK',
  //response error
  RESPONSE_ERROR : 'ERROR',
  //authenticated user
  USER :'USER',
  //facebook user
  USER_FACEBOOK :'USER_FACEBOOK',
 //provider
  PROVIDER :'PROVIDER',
 //time
  TIME :[
            
            {value:0 , text:'00:00'},
            {value:15 , text:'00:15'},
            {value:30 , text:'00:30'},
            {value:45 , text:'00:45'},
            {value:60 , text:'01:00'},
            {value:75 , text:'01:15'}, 
            {value:90 , text:'01:30'},
            {value:105 , text:'01:45'},
            {value:120 , text:'02:00'}
        ],
//facebook login permissions for login    
FACEBOOK_LOGIN_PERMISSIONS:
   ['user_photos','user_birthday','user_likes','user_status','email','user_location','user_hometown','user_about_me','user_religion_politics',],
//my facebook fields 
FACEBOOK_ME_FIELDS :'me?fields=last_name,name,gender,first_name,email,birthday,picture.type(large)',
//facebook friend's fields
FACEBOOK_FRIEND_FIELDS :'?fields=last_name,name,gender,first_name,email,birthday,picture.type(large)'  
    
})