myApp.controller('HomeController', function(HomeService) {
    console.log('HomeController created');
    var vm = this;

    vm.searchZipCodes = HomeService.searchZipCodes;


  });

  myApp.directive('googleplace', function() {
    var minnesotaBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(43.306193, -96.547852),
        new google.maps.LatLng(48.673733, -89.692383))
  
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                bounds: minnesotaBounds
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});