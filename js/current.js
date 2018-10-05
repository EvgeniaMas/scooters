(function() {
  var questions = [{
    question: "Укажите площадь помещения, м²",
    answers: '<input id="square" onChange="get_square()" type=text maxlength=4 size=9 name="S" value="20" class="digit_int">'
   
  }, {
    question: "Высота потолка, м ",
    answers: '<input id="height" onChange="get_height()" type=text maxlength=4 size=9 name="H"  value="2.75" class="digit_dec">'
   
  }, {
    question: "Освещенность солнцем",
    answers: '<select id="light" name="lights" onChange="get_light()"><option value="30">Слабая</option><option value="35" selected >Средняя</option><option value="40">Сильная</option></select>'
   
  }, {
    question: "Количество людей",
    answers:'<select id="people" name="people" onChange="get_people()"><option value="0" >0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp</select>'
    
  }, {
    question: "Количество компьютеров ",
   
    answers:'<select  id="comp" name="comp" onChange="get_comp()"><option value="0">0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp;</select>'
   
}, {
    question: "Количество телевизоров",
    answers: '<select id="tv" name="tv" onChange="get_tv()"><option value="0" >0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;</select>'
    
}, {
    question: "Учитывать вентиляцию",
    answers: '<input id="vent" type="checkbox" name="vent" onClick="get_vent()">'
    
}, {
    question: "Верхний этаж",
    answers:'<input id="floor" type="checkbox" name="floor" onClick="get_floor()">'
    
}, {
    question: "Большое окно",
    answers: '<input id="win" type="checkbox" name="window" onClick="get_win()">'
    
  }];


  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); 
  //Quiz div object
  
  // Display initial question
  displayNext();
  



  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    calcCondPower();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();

    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      // console.log(questions[questionCounter].defaultChoice);
      questionCounter++;
      displayNext();
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });    
    var header = $('<h3>Вопрос ' + (index + 1) + ':</h3>');
    qElement.append(header);    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);    
    var radioButtons = createRadios(index);
    qElement.append(questions[index].answers);    
    return qElement;
  }  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    
    return radioList;
  }  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
         
        } else if(questionCounter === 0){
          
        
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
      
      }
    });
  }  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});    
    var numCorrect = 0;
    var user_data = JSON.parse(sessionStorage.getItem('USER_POWER'));
    score.append(' <form id="count_power" action="power.php" method="POST"><input id="user_name" class="modal_inputs2" name="name" type="text" placeholder="Введите имя"  required="required" /><input class="modal_inputs2" id="tele" name="tel" type="text" placeholder="Введите телефон" required="required"/><input class="modal_inputs2" id="user_power" type="hidden" name="user_power" value=" ' + user_data + '"/><br><button type="submit" class="back_btn personal_model">Подобрать кондиционер</button></form>');
   
   
    return score;
  }
})();
var square = 20;
var height = 2.75;
var light = 35;
var people = 1;
var tv = 1;
var comp = 1;
var floor = 0;
var vent = 0;
var win = 0;

function get_square(){
  square = $('#square').val();
    
}
function get_height(){
  height = $('#height').val();    
}

function get_light(){
  light = $('#light').val();    
}

function get_people(){
  people = $('#people').val();    
}

function get_comp(){
  comp = $('#comp').val();    
}

function get_tv(){
  tv = $('#tv').val();    
}

function get_floor(){
  if($("#floor").is(":checked")) { 
  floor = 0.15;  
}
}

function get_vent(){
  if($("#vent").is(":checked")) { 
  const Lv_const = 0.0075;
  var Kv_Sel = 1; 
  vent = Kv_Sel * square * height * Lv_const;   
}
}

function get_win(){  
  if($("#win").is(":checked")) {  
    if (light < 32){
            win = 0.5* 0.075;
      }
    else if (light > 32 && light < 37)
        {
            win =  0.5* 0.15;
        }
    else if (light > 38) {
        win =  0.5* 0.25;
        } 
        else {
          win =34;
        }
}
}

function calcCondPower() {
var q1 = (light / 1000) * square * height;
var q1_etage = q1* floor;

var q2 = people * 0.1;
var q3 = comp * 0.3 + tv * 0.2;
var q=(q1 + q2+ q3) + win + vent + q1_etage;

if (q < 10) {
    var k_fix = 2;
}    
else if (q < 100){
      var k_fix = 1;
}
else{
var k_fix = 0;
}  

var total_power = q.toFixed(k_fix);
sessionStorage.setItem('FINAL_POWERS',total_power )
var condition_range = (q * 0.95).toFixed(k_fix) + ' &ndash; ' + (q * 1.15).toFixed(k_fix);

$('#result').html('Расчетная мощность охлаждения Q: ' + total_power + ' кВт');
$('#range').html('Рекомендуемый диапазон Qrange: ' + condition_range + ' кВт');
return total_power;
}
