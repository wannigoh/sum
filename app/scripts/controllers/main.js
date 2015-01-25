'use strict';

angular.module('sourceApp')
  .controller('MainController', function ($scope, $filter) {

    $scope.sum = { number: 0 };
    $scope.values = [];
    $scope.cards = [];

    // create 5 cards with random values
    for (var i = 0; i < 5; i++ ) {

        var card = {
            number: Math.round( Math.random() * 30 ),
            selected: false
        };

        $scope.cards.push( card );
    }


    $scope.computeSum = function(){

        // get only the selected cards
        $scope.values = $filter('filter')($scope.cards, { selected: true });

        if ( $scope.values.length ) {
            $scope.sum = sum( $scope.values );
        } else {
            $scope.sum.number = 0;
        }


    };

    // add up all the numbers in the selected cards array
    function sum( array ) {

        return array.reduce(function(prevCard, nextCard) {
            return { number: prevCard.number + nextCard.number};
        });
    }


  });
