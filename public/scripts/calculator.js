console.log('js');

$(document).ready(docReady);
var objectToSend = {
  x: null,
  y: null,
  type: null
};

function docReady() {
  console.log('doc ready');
  //event listeners
  $('.calc-data').on('click', numberCalc ); //the numbers
  $('.operations').on('click', operationCalc); //operations
  $('#clearButton').on('click', clearFunc ); //clearbutton
  $('#equalButton').on('click', equalFunc); //equal button

//data-val on index
function numberCalc() {
  var value = $(this).data('value');
  console.log('in numberCalc on click:', value);
  var keepNumber = $('#inputNumber').val();
  $('#inputNumber').val(keepNumber + value );

}
//operations type on index
function operationCalc(){
  var type = $(this).data('type');
  console.log('in operationCalc +-/* on click:', type);
  objectToSend.x = $('#inputNumber').val();
  objectToSend.type = type;
  $('#inputNumber').val(' ');
//  console.log('in operationCalc on click:', type);
}
//clear func will hold input string of number
function clearFunc(){
  $('#inputNumber').val('');
  console.log('in clearFunc on click:');

}
//calculate equals
function equalFunc(){
  objectToSend.y = $('#inputNumber').val();
  console.log('equals', objectToSend);
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: objectToSend,
    success: function(response){
      console.log('server:', response);
      //display the number answer on the DOM
      $('#inputNumber').val(response.number);
    }
  }); //end ajax call
}
//start ajax call to /calculator on server

} // end docReady
