mainApp.directive('facebookUsrSrc', ['FacebookService','Constants', function (FacebookService,Constants) {
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

				attrs.$observe('facebookUsrSrc', function (id) {
					$scope.objectURL = null;
					 if(id) {
                        
                        FacebookService.getUserPicture(id).then(function (response)
                        {
                            $scope.objectURL = response;    
                        })
                        $scope.objectURL = Constants.PROFILE_IMAGE;
					}
				});
			}
		};
	}]);

