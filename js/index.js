$(document).ready(function(){
  var vueInstance = new Vue({
    el:'#browseVue',
    data:{
      contractState:0,
      contractPreview:false,
      previewEndTime: 0,
      roundEndTime:0,
      totalContributed:0,
      totalRecalled:0,
      totalSupply:0,
      balanceOfContributor:0,
      events: []
    },
    updated: function() {
      if (window.matchMedia("(max-width: 500px)").matches) {
        $('.popover-bubble > span').data('container','body');
      }
      $('[data-toggle="popover"]')
        .on('click',function(e){
          e.preventDefault();
          return true;
        })
        .popover();
      //proposal and statements log scrollbar
      $('.scrollBar').mCustomScrollbar({
        scrollButtons: {
          enable:true
        },
        theme:"inset-dark",
        scrollInertia:150,
        autoHideScrollbar:true,
      });
    }
  });

  resize();
  $(window).resize(resize());
  function resize(){
    if (!window.matchMedia("(max-width: 700px)").matches) {
      //main scrollbars
      $('body').mCustomScrollbar({
        scrollButtons: {
          enable:true
        },
        theme:"inset-dark",
        scrollInertia:150,
        autoHideScrollbar:false
      });
    }
  }


  window.addEventListener("crowdserve_loaded", () => {
      csContract.getFullState().then((res) => {
        vueInstance.contractState =  res.state;
        vueInstance.contractPreview = res.inPreview;
        vueInstance.previewEndTime = res.previewStageEndTime;
        vueInstance.roundEndTime = res.roundEndTime;
        vueInstance.totalContributed = res.totalContributed;
        vueInstance.totalRecalled = res.totalRecalled;
        vueInstance.totalSupply = res.totalSupply;

        console.log(res);
    });


    csContract.balanceOf(web3.eth.accounts[0]).then((res)=>
      {
        vueInstance.balanceOfContributor = res;
      }
    );

    //events
    csContract.getAllEvents().then((res) => {
      for (var i=0; i< res.length; i++) {
        switch(res[i].event) {
          case 'Contribution':

            break;
          case 'FundsRecalled':

          break;
        }
      }
    });

    /*vueInstance.events.push({event:'RoundBegun',timestamp:100, blockNumber:2, args:{amount:10000000000, from:'0x967eaf517e255611ec404c1fa1d5123b6edf63b4'}});
    vueInstance.events.push({event:'RoundEnding',timestamp:100, blockNumber:2, args:{amount:10000000000, from:'0x967eaf517e255611ec404c1fa1d5123b6edf63b4'}});
    vueInstance.events.push({event:'RoundEnded',timestamp:100, blockNumber:2, args:{amountRecalled:10000000000, amountWithdrawn:20000000000}});
    vueInstance.events.push({event:'Contribution',timestamp:100, blockNumber:2, args:{contributor:'0x967eaf517e255611ec404c1fa1d5123b6edf63b4', amount:20000000000}});
    vueInstance.events.push({event:'FundsRecalled',timestamp:100, blockNumber:2, args:{contributor:'0x967eaf517e255611ec404c1fa1d5123b6edf63b4', amountBurned:20000000000,amountReturned:20000000000, message:"I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!I'm out!"}});
    vueInstance.events.push({event:'ContributorStatement',timestamp:100, blockNumber:2, args:{contributor:'0x967eaf517e255611ec404c1fa1d5123b6edf63b4', amountBurned:20000000000, message:"Cool project!Cool project!Cool project!Cool project!Cool project!Cool project!Cool project!Cool project!"}});
    vueInstance.events.push({event:'WorkerStatement',timestamp:100, blockNumber:2, args:{message:"Thank you for your support!Thank you for your support!Thank you for your support!Thank you for your support!Thank you for your support!Thank you for your support!Thank you for your support!Thank you for your support!"}});
    vueInstance.events.push({event:'Transfer',timestamp:100, blockNumber:2, args:{from:'0xfromaf517e255611ec404c1fa1d5123b6edf63b4',to:'0xto11af517e255611ec404c1fa1d5123b6edf63b4', value:20000000000}});
  */

  });
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
