$scope.GetCake = function() {
  $http.get('/pics')
  .success(function(doc) {

    console.log(doc);
    $scope.imgsource=doc;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
};
