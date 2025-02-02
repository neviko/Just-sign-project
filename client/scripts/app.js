"use strict";

var diffSign = angular.module("diffSign",["ui.router","snap","ngAnimate"]);









diffSign.config(["$stateProvider","$urlRouterProvider",
             
             
             function(r,t)
             {
                t.when("/dashboard","/dashboard/overview"),
                t.otherwise("/dashboard"),
                r.state("base",{"abstract":!0,url:"",templateUrl:"views/base.html"}).
                state("login",{url:"/login",parent:"base",templateUrl:"views/login.html",controller:"LoginCtrl"}).
                state("dashboard",{url:"/dashboard",parent:"base",templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).
                state("overview",{url:"/overview",parent:"dashboard",templateUrl:"views/dashboard/overview.html"}).
                state("learningMode",{url:"/learningMode",parent:"dashboard",templateUrl:"views/dashboard/learningMode/learningMode.html",controller:"learningModeController"}).
                state("learn_General",{url:"/learn_General",parent:"dashboard",templateUrl:"views/dashboard/learningMode/general/Learning_General.html",controller:"Learning_GeneralController"}).
                state("learn_Letters",{url:"/learn_Letters",parent:"dashboard",templateUrl:"views/dashboard/learningMode/Letters/Learning_Letters.html",controller:"Learning_LettersController"}).
                state("learn_Playground",{url:"/learn_Playground",parent:"dashboard",templateUrl:"views/dashboard/learningMode/playground/Learning_playground.html",controller:"Learning_playgroundController"}).
                state("learn_House",{url:"/learn_House",parent:"dashboard",templateUrl:"views/dashboard/learningMode/house/Learning_House.html",controller:"Learning_HouseController"}).
                state("game",{url:"/game",parent:"dashboard",templateUrl:"views/dashboard/games/trivia/trivia.html",controller:"triviaController"}).
                
                state("contactUs",{url:"/contactUs",parent:"dashboard",templateUrl:"views/dashboard/contactUs/contactUs.html",controller:"contactUsController"})
             }
            ]
           
           
           
        );

//Dashboard
diffSign.controller("DashboardCtrl",["$scope","$state",function(r,t){r.$state=t}]);



diffSign.directive('onFinishRender',['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                    if(!!attr.onFinishRender){
                      $parse(attr.onFinishRender)(scope);
                    }
                });
            }
        }
    }
}])