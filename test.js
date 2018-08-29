app.run(function($rootScope, $document, $sce, $http, $compile, $location, $window, $anchorScroll) {

  $rootScope.getSearchResults = function() {
    $http.get(searchURL)
    .then(
      function(response) {

      });
  };
});
