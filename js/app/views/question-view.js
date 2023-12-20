import {externals as questionController} from '../controllers/question-controller.js';

export const externals = {};
const internals = {};

externals.start = function() {
    console.log("[QUESTION VIEW HERE]")
}

externals.render = function(question, correctAnswer, options) {
    internals.renderQuestion(question, correctAnswer, options);
    internals.setButtonActions();
}

externals.renderLives = function() {

}

externals.renderLevel = function() {


    $('#level').text('Level: 1')
}

internals.renderQuestion = function(question, correctAnswer, options) {
    $("#question").empty();

    console.log('[Question]', question);
    console.log('[Correct Answer]', correctAnswer);
    console.log('[Options]', options);

    let element = (
        '<p><strong>' +
        question +
        '</strong></p>'
    );

    options.forEach(res => {
        element += '<button class=';

        if (res === correctAnswer) {
            element += '"correctBtn"';
        } else {
            element += '"incorrectBtn"';
        }
        
        element += ` >${res}</button>`
    });


    
    $(element).appendTo('#question');
}

internals.setButtonActions = function() {
    $('.correctBtn').click(function() {
        console.log('Correct');
        questionController.nextLevel();

    });
    $('.incorrectBtn').click(function() {
        console.log('Incorrect');
        questionController.previousLevel();
    })
}