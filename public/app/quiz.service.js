"use strict";//creating a server called quizService
//that has 3 methods

function quizService($http, $location) {
    const self = this;

    self.getQuestions = function () { // GET questions endpoint
        return $http({
            method: "GET",
            url: "/questionlist"
        });
    };
    self.getScores = function () { //GET scores endpoint
        return $http({
            method: "GET",
            url: "/scores"
        });
    };
    self.addScore = function (newName, grade) { //POST scores endpoint
        $location.path("/scores");
        return $http({
            method: "POST",
            url: "/scores",
            data: {
                player_name: newName,
                score: grade
            }
        });
    };
}

angular
    .module("quizmodule")
    .service("quizService", quizService);