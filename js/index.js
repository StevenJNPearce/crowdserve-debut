$(document).ready(function(){
  var vueInstance = new Vue({
    el:'#browseVue',
    data:{
      'contractState':0,
      'contractPreview':false
    }
  });


  var contractState = 0;
  var contractPreview = true;
  vueInstance.contractState = contractState;
  vueInstance.contractPreview = contractPreview;


});


//form functions
function contributeFundsFromForm() {
  console.log('you have contributed!');
}

function transferFundsFromForm() {
  console.log('you have transfered funds!');
}

function recallFundsFromForm() {
  console.log('you have recalled funds!');
}

function sendStatementFromForm() {
  console.log('statement sent!');
  $('#sent-success').modal();
}
