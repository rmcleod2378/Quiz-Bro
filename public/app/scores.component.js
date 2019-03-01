"use strict";
const scores = {
    templateUrl: "app/scores.html",
    controller: ["quizService", function(quizService){
        const vm = this;
        quizService.getScores().then(response => {
            vm.scores = response.data;
        });
    }]
}


angular
.module("quizmodule")
.component("scores", scores);