class myCtrl {
  constructor($scope, $filter) {
    "ngInject";
    $scope.results = [
      {
        name: "Nick Rader",
        address: "9842 Turtle Creek Crawl",
        age: 21,
        interests: "Web Development, App Development, Video Games",
        picture: ""
      },
      {
        name: "Sam Thomas",
        address: "4590 E Main St",
        age: 24,
        interests: "Web Development, Video Editing, Photography",
        picture: ""
      },
      {
        name: "Blake Smith",
        address: "95 Northbound Rd",
        age: 20,
        interests: "App Development, Video Games, IT",
        picture: ""
      },
      {
        name: "Ethan Nullberry",
        address: "2358 Edgar St",
        age: 21,
        interests: "Web Development, App Development, Video Games",
        picture: ""
      },
      {
        name: "Nick Brown",
        address: "8724 Silus Ln",
        age: 19,
        interests: "Web Development, Video Games, Engineering",
        picture: ""
      },
      {
        name: "Matt Rae",
        address: "842 Smith Crossing",
        age: 26,
        interests: "Web Development, Video Games, IT",
        picture: ""
      }
    ];

    $scope.clicked = false;
    $scope.clicked1 = false;
    $scope.queryBtn = function() {
      if (!$scope.search) return 0;
      $scope.clicked1 = !$scope.clicked1;
      setTimeout(function() {
        $scope.$apply(function() {
          $scope.clicked = !$scope.clicked;
          $scope.clicked1 = !$scope.clicked1;
        });
      }, 2000);
    };
  }
}

export default myCtrl;
