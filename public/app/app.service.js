"use strict";

function quizService($http) {
    const self = this;
self.getQuestions = function(){
    return $http({
        method: "GET",
        url: "/questionlist"
    });
  };
  self.getScore = function(){
      return $http({
          method: "GET",
          url: "/scores"
      });
   };

   self.gradeQuiz = function(newName, grade){
       return $http({
           method: "POST",
           url: "/scores",
           data: { player_name: newName, score: grade }
       });
    };
}

angular
.module("App")
.service("quizService", quizService);