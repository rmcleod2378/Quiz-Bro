"use strict";

angular
    .module("quizmodule")
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/questionlist", {
                template: "<quiz></quiz>"
            })
            .when("/scores", {
                template: "<scores></scores>"
            })
            .when("/", {
                template: "<quiz></quiz>"
            })
        }]
    );