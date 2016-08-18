mainApp.directive('googleStaticMapSrc', ['Constants', function (Constants) {
		return {
			link: function ($scope, elem, attrs) {
				function revokeObjectURL() {
					if ($scope.objectURL) {
						$scope.objectURL=null;
					}
				}

				$scope.$watch('objectURL', function (objectURL) {
					elem.attr('src', objectURL);
				});

				$scope.$on('$destroy', function () {
					$scope.objectURL=null;
				});

				attrs.$observe('googleStaticMapSrc', function (location) {
					$scope.objectURL = null;
                    var loc = JSON.parse(location);
					 if(location && loc && (loc.latitude && loc.longitude) ) { 
                    $scope.objectURL = "https://maps.googleapis.com/maps/api/staticmap?center=" +loc.latitude+","+loc.longitude+"&zoom="+Constants.GOOGLE_API.ZOOM+"&size="+Constants.GOOGLE_API.WIDTH+"x"+Constants.GOOGLE_API.HEIGHT+"&markers=color:"+Constants.GOOGLE_API.MARKER_COLOR+"|"+loc.latitude+","+loc.longitude; 
                        
					}
				});
			}
		};
	}]);

