"use strict";

const quiz = {
    templateUrl: "app/app.html",
    controller: ["quizService", function(quizService){
        const vm = this;
        vm.grade = 0;
        vm.score = [
            false,
            false,
            false,
            false,
            false
        ]

        quizService.getQuestions().then(response =>{
            vm.questionlist = response.data;
            console.log(response.data);
        });

        quizService.getScore().then(response => {
            vm.scores = response.data;
        });

        vm.selectAnswer = function(selected, answer, index) {
            if (selected == answer){
                vm.score[index] = true
            } else {
                vm.score[index] = false
            }
            console.log(vm.score);
        };
        vm.gradeQuiz = function (newName){
            for (let i = 0; i < vm.score.length; i++){
                if (vm.score[i]){
                    vm.grade++
                }
            }
            quizService.gradeQuiz(newName, vm.grade).then(response => {
                vm.scores = response.data;
            });
            console.log(vm.grade);
        };
    }]
};

angular
.module("App")
.component("quiz", quiz);