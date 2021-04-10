import angular from "angular";
import "@uirouter/angularjs";
import "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js";
import "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js";

// Import your app stylesheets
import "./style.css";

// Import your app functionality
import "./home";

// Create and bootstrap application
const requires = ["ui.router", "home"];

window.app = angular.module("app", requires);

angular.bootstrap(document.getElementById("app"), ["app"]);
