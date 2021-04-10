function HomeConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("home", {
    url: "",
    controller: "myCtrl",
    controllerAs: "$ctrl",
    templateUrl: "home/home.html"
  });
}

export default HomeConfig;
