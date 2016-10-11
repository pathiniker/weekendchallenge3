$(function(){
  console.log('document loaded');

  $('#calculator').on('submit', calculate);
  $('#clear').on('click', clear);
});

function calculate(event) {
  console.log('inside calculate function');
  event.preventDefault();

  var data = $(this).serialize();
  console.log('data', data);

  // or use the serialize array method

  // var array = $(this).serializeArray();
  // console.log('array', array);
  // var formData = {};
  // array.forEach(function(input) {
  //   formData[input.name] = input.value;
  // });
  // console.log('formData', formData);





  // the following ajax calls all do the same thing

  // $.ajax({
  //   type: 'POST',
    // url: '/math',
    // data: data,
    // success: function(response) {
    //   updateDisplay(response.result);
    //   clearForm();
    // }
  // });

  // $.post({
  //   url: '/math',
  //   data: data,
  //   success: function(response) {
  //     updateDisplay(response.result);
  //     clearForm();
  //   },
  //   error: function(error) {
  //     // do stuff
  //     console.log(error);
  //   }
  // });

  $.post('/math', data).then(function(response) {
    updateDisplay(response.result);
    clearForm();
  }).catch(function(error) {
    // do stuff
    console.log(error);
  });
}

function updateDisplay(textToDisplay) {
  $('#display').text(textToDisplay);
}

function clearForm() {
  $('#calculator').find('input[type=number], input[type=radio]').val('');
}

function clear() {
  clearForm();
  updateDisplay('');
}
