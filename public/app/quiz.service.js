"use strict";

function quizService($http, $location) {
    const self = this;
self.getQuestions = function(){
    return $http({
        method: "GET",
        url: "/questionlist"
    });
  };
  self.getScores = function(){//get scores
      return $http({
          method: "GET",
          url: "/scores"
      });
   };

   self.addScore = function(newName, grade){//addScore
    $location.path("/scores");
       return $http({
           method: "POST",
           url: "/scores",
           data: { player_name: newName, score: grade }
       });
    };
}

angular
.module("quizmodule")
.service("quizService", quizService);