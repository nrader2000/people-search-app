import angular from "angular";

// Create the module where our functionality can attach to
let homeModule = angular.module("home", ["ngAnimate"]);

// Include our UI-Router config settings
import HomeConfig from "./home.config";
homeModule.config(HomeConfig);

// Controllers
import myCtrl from "./home.controller";
homeModule.controller("myCtrl", myCtrl);

export default homeModule;
