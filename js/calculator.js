(function() {
  var questions = [{
    question: "Укажите площадь помещения, м²",
    answers: '<input id="square" type=text maxlength=4 size=9 name="S" value="20" class="digit_int">',
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2,
    defaultChoice: 20
  }, {
    question: "Высота потолка, м ",
    answers: '<input  id="height" type=text maxlength=4 size=9 name="H"  value="2.75" class="digit_dec">',
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4,
    defaultChoice: 2.75
  }, {
    question: "Освещенность солнцем",
    answers: '<select id="light"  name="lights" ><option value="30">Слабая</option><option value="35" selected >Средняя</option><option value="40">Сильная</option></select>',
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0,
    defaultChoice: 1
  }, {
    question: "Количество людей",
    answers:'<select id="people"  name="people"><option value="0" >0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp</select>',
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3,
    defaultChoice: 1
  }, {
    question: "Количество компьютеров ",
    choices: [20, 30, 40, 50, 64],
    answers:'<select  id="comp"  name="comp"><option value="0">0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp;</select>',
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Количество телевизоров",
    answers: '<select id="tv"  name="tv"><option value="0" >0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;</select>',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Учитывать вентиляцию",
    answers: '<input id="vent" type="checkbox" name="vent" onClick="chk_sw()">',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Верхний этаж",
    choices: [20, 30, 40, 50, 64],
    answers:'<input id="floor" type="checkbox" name="floor" onClick="chk_sw()">',
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Большое окно",
    answers: '<input id="windows" type="checkbox" name="window" onClick="chk_sw()">',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
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
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
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
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }  
  
    score.append('<div class="final_form"> <form id="count_power" action="power.php" method="POST"><input onClick="send_power()" id="name" name="name" type="text" placeholder="Введите имя"  required="required" /><br><input id="tele" name="tel" type="text" placeholder="Введите телефон" required="required"/><input id="user_power" name="user_power" /><br><button type="submit" class="back_btn personal_model">Подобрать кондиционер</button></form></div>');
    
    return score;
  }
})();

// function get_square() {
// var user_square = $('#square').val();
// sessionStorage.setItem('SQUARE', JSON.stringify(user_square));
// }
// function get_height(){
// var user_height = $('#height').val();  
// sessionStorage.setItem('HEIGHT', JSON.stringify(user_height));
// }
// function get_light(){
// var user_light = $('select[name="lights"]').val();
//     sessionStorage.setItem('LIGHT', JSON.stringify(user_light));
// }
// function get_tv(){
// var user_tv = $('select[name="tv"]').val();
//     sessionStorage.setItem('TV', JSON.stringify(user_tv));  
// }
// function get_comp(){
// var user_comp = $('select[name="comp"]').val();
//    sessionStorage.setItem('COMP', JSON.stringify(user_comp));
// }
// function get_people(){
// var user_people = $('select[name="people"]').val();
//     sessionStorage.setItem('PEOPLE', JSON.stringify(user_people));   
// }
// function chk_sw() {
// if($("#vent").is(":checked")) { 
//     const Lv_const = 0.0075;
//     var Kv_Sel = 1;
//     var square = JSON.parse(sessionStorage.getItem('SQUARE'));
// if (!square) {
// square =20;
// }
// var height = JSON.parse(sessionStorage.getItem('HEIGHT'));
// if (!height) {
// height =2.75;
// }   
//     var ventilation = Kv_Sel * square * height * Lv_const;    
//     sessionStorage.setItem('VENT', JSON.stringify(ventilation));
// } 
// else if($("#window").is(":checked")) {
//     sessionStorage.setItem('WINDOW', JSON.stringify('4'));
// }
// else if($("#floor").is(":checked")) {     
//     sessionStorage.setItem('FLOOR', JSON.stringify('0.15'));
// }
// else if($("#windows").is(":checked")) {
//   var light = JSON.parse(sessionStorage.getItem('LIGHT'));
//    if (!light) {
//    light =35;
//    }
//    if (light < 32)
//             var windows = 0.5* 0.075;
//         if (light > 32 && light < 37)
//             var windows =  0.5* 0.15;
//         if (light > 38)
//             var windows =  0.5* 0.25;
//     sessionStorage.setItem('WINDOWS', JSON.stringify(windows));
// }		
// }


var power_data = {
  square: 20,
  height: 2.75,
  light: 35, 
  comp: 1, 
  tv: 1, 
  floor: 0,
  win: 0,
  people:1,
  vent: 0

};

var user_square = new get_square();
function get_square(){
    var self = this;    
    this.value = 20;
  $("#square").on('change',function(){
    var s = $(this).val();    
    self.value = s;
    power_data['square'] = s;
    })
}

var user_height = new get_height();
function get_height(){
    var self = this;    
    this.value = 2.75;
  $("#height").on('change',function(){
    var h = $(this).val();    
    self.value = h;
    power_data['height'] = h;
    })
}

var user_light = new get_light();
function get_light(){
    var self = this;    
    this.value = 30;
  $("#light").on('change',function(){
    var l = $(this).val();    
    self.value = l;
    power_data['light'] = l;
    })
}

var user_people = new get_people();
function get_people(){
    var self = this;    
    this.value = 1;
  $("#people").on('change',function(){
    var p = $(this).val();    
    self.value = p;
    power_data['people'] = p;
    })
}
var user_comp = new get_comp();
function get_comp(){
    var self = this;    
    this.value = 1;
  $("#comp").on('change',function(){
    var c = $(this).val();    
    self.value = c;
    power_data['comp'] = c;
    })
}

var user_tv = new get_tv();
function get_tv(){
    var self = this;    
    this.value = 1;
  $("#tv").on('change',function(){
    var t = $(this).val();    
    self.value = t;
    power_data['tv'] = t;
    })
}

var user_floor = new get_floor();
function get_floor(){
    var self = this;    
    this.value = 0;
  $("#floor").on('change',function(){
    var f = $(this).val();    
    self.value = f;
    power_data['floor'] = f;
    })
}

var user_vent = new get_vent();
function get_vent(){
    var self = this;    
    this.value = 0;
if($("#vent").is(":checked")) { 
const Lv_const = 0.0075;
var Kv_Sel = 1;	
var v = Kv_Sel * square * height * Lv_const;  
self.value = v;
power_data['vent'] = v;
}

  
}

var user_win = new get_win();
function get_win(){
    var self = this;    
    this.value = 0;
  $("#win").on('change',function(){
    var w = $(this).val();    
    self.value = w;
    power_data['win'] = w;
    })
}


if($("#vent").is(":checked")) { 
const Lv_const = 0.0075;
var Kv_Sel = 1;	
var ventilation = Kv_Sel * square * height * Lv_const;  
}



function calcCondPower() {
var height = power_data['height'];
var light = power_data['light'];
var square = power_data['square'];
var people = power_data['people'];
var tv = power_data['tv'];
var comp = power_data['comp'];
var win = power_data['win'];
var floor = power_data['floor'];
var vent = power_data['vent'];

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

}


function send_power(){
var user_power = sessionStorage.getItem('FINAL_POWERS');
var a = $('#tele').val();
console.log(a);
$('#user_power').val(user_power);
}