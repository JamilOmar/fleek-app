mainApp.factory('RestService', function($cordovaFileTransfer ,$q) {

function uploadMedia(remotePath,file) {
    
    var options = {
    fileName: file,
    chunkedMode: false,
    mimeType: "image/png"
};
     return $q(function(resolve, reject,progress) {
     $cordovaFileTransfer.upload(remotePath, file, options).then(function(result) {
          resolve(result);
        }, function(err) {
           reject(err);
        }, function (progressData) {
            progress(progressData);
        });
     
     });
    
}
 return {
     uploadMedia:uploadMedia
 };

});