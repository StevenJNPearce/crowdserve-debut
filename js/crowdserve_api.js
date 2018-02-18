window.addEventListener(("load"), () => {

  // Checking i Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  //create sample crowdserve object for initialization of crowdserve instances
  var CrowdServeClass =  web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "totalContributed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "recallAmount",
				"type": "uint256"
			},
			{
				"name": "message",
				"type": "string"
			}
		],
		"name": "recall",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contributors",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "worker",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "maxLoops",
				"type": "uint256"
			}
		],
		"name": "tryRoundEnd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "previewStageEndTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "who",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "burnAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minPreviewInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "message",
				"type": "string"
			}
		],
		"name": "workerStatement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFullState",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minContribution",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "proposalString",
				"type": "string"
			},
			{
				"name": "previewStageInterval",
				"type": "uint256"
			},
			{
				"name": "roundInterval",
				"type": "uint256"
			}
		],
		"name": "beginProjectRound",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalRecalled",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "contribute",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "roundEndTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "burnAmount",
				"type": "uint256"
			},
			{
				"name": "message",
				"type": "string"
			}
		],
		"name": "contributorStatement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_worker",
				"type": "address"
			},
			{
				"name": "_minPreviewInterval",
				"type": "uint256"
			},
			{
				"name": "_minContribution",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "proposalString",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "previewStageEndTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "roundEndTime",
				"type": "uint256"
			}
		],
		"name": "RoundBegun",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "RoundEnding",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "amountRecalled",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amountWithdrawn",
				"type": "uint256"
			}
		],
		"name": "RoundEnded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Contribution",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amountReturned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "message",
				"type": "string"
			}
		],
		"name": "FundsRecalled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "message",
				"type": "string"
			}
		],
		"name": "ContributorStatement",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "message",
				"type": "string"
			}
		],
		"name": "WorkerStatement",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "Transfer",
		"type": "event"
	}
]);

  //Instantiate contract object from already deployed contract at given address
  var CrowdServe = CrowdServeClass.at("0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab");




  /////////Reading calls begin here/////////////////////////////////////////////////////
  //method to call all state variables of the contract, returns object with strings and integers
  window.getFullState = (funct) => {
    CrowdServe.getFullState((err, res) => {
      if (err){
        funct(err, undefined)
      }
      else {
        var fullState = {};
        // minPreviewInterval, minContribution, worker, state, inPreview, previewStageEndTime, roundEndTime, totalContributed, totalRecalled, totalSupply
        fullState.minPreviewInterval = Number(new web3.BigNumber(res[0]));
        fullState.minContribution = Number(new web3.fromWei(res[1]));
        fullState.worker = res[2];
        fullState.state = Number(res[3].toString());
        fullState.inPreview = res[4];
        fullState.previewStageEndTime = Number(web3.fromWei(res[5]));
        fullState.roundEndTime = Number(web3.fromWei(res[6]));
        fullState.totalContributed = Number(web3.fromWei(res[7]));
        fullState.totalRecalled = Number(web3.fromWei(res[8]));
        fullState.totalSupply = Number(web3.fromWei(res[9]));
        funct(undefined, fullState);
      }
    });
  }

  //method to read the current balance of erc223 tokens in contract
  window.balanceOf = (address, funct) => {
    CrowdServe.balanceOf(address, (err, res) => {
      if(err){
        funct(err, undefined);
      }
      else{
        funct(undefined, Number(new web3.BigNumber(res)));
      }
    });
  }

  //method to transform state integer to string representation
  window.stateOutput = (stateInteger, inPreview) => {
    switch (stateInteger){
      case 0:
        if (inPreview){
          return "Active (Preview)"
        } else{
          return "Active";
        }
        break;
      case 1:
        return "Ending";
        break;
      case 2:
        return "Inactive";
        break;
      default:
        return undefined;
        break;
    }
  }

  /////////Event Reading calls begin here//////////////////////////////////////
  // would get all past logs again.
  window.fullEventList = (funct) => {
    // watch for an event with {some: 'args'}
    var allEvents = web3.eth.filter({address: CrowdServe.address, fromBlock: 0, toBlock: 'latest'});
    allEvents.get((err, res) => {
      if (err){
        funct(err, undefined);
      } else {
        var topicNames = [];
        var i = 0;
        res.forEach((element) => {
          var topic = element.topics[0];
          console.log(element);
          console.log(element.data);
          topicNames[i] = decodeTopic(topic, CrowdServeClass.abi);
          i++;
        });
        funct(undefined, topicNames);
      }
    });
  }


  // event RoundBegun(string proposalString, uint previewStageEndTime, uint roundEndTime);
  window.getRoundBegunEvents = (funct) => {
    var roundBegun = CrowdServe.RoundBegun({fromBlock: 0, toBlock: 'latest'});
    roundBegun.get((err, res) => {
      if(err){
        funct(err, undefined);
      }
      else{
        var roundBegunEventsArray = [];
        res.forEach((element) => {
          var parsedArguments = {previewStageEndTime: Number(new web3.BigNumber(element.args.previewStageEndTime)), proposalString: element.args.proposalString,
            roundEndTime: Number(new web3.BigNumber(element.args.roundEndTime))}
          var eventObject = {args: parsedArguments, event: element.event, transactionHash: element.transactionHash}
          roundBegunEventsArray.push(eventObject);
        });
        funct(undefined, roundBegunEventsArray);
      }
    });
  }

  // event RoundEnding();
  window.getRoundEndingEvents = (funct) => {
    var roundEnding = CrowdServe.RoundEnding({fromBlock: 0, toBlock: 'latest'});
    roundEnding.get((err, res) => {
      if(err){
        funct(err, undefined);
      }else{
        var roundEndingEventsArray = [];
        res.forEach((element) => {
          var eventObject = {event: element.event, transactionHash: element.transactionHash}
          roundEndingEventsArray.push(eventObject);
        });
        funct(undefined, roundEndingEventsArray);
      }
    });
  }

  // event RoundEnded(uint amountRecalled, uint amountWithdrawn);
  window.getRoundEndedEvents = (funct) => {
    var roundEnded = CrowdServe.RoundEnded({fromBlock: 0, toBlock: 'latest'});
    roundEnded.get((err, res) => {
      if(err){
        funct(err, undefined);
      }else{
        var roundEndedEventsArray = [];
        res.forEach((element) => {
          var parsedArguments = {amountRecalled: Number(new web3.BigNumber(element.args.amountRecalled)),
            amountWithdrawn: Number(new web3.BigNumber(element.args.amountWithdrawn))}
          var eventObject = {args: parsedArguments, event: element.event, transactionHash: element.transactionHash}
          roundEndedEventsArray.push(eventObject);
        });
        funct(undefined, roundEndedEventsArray);
      }
    });
  }

   // event Contribution(address contributor, uint amount);
  window.getContributionEvents = (funct) => {
    var contribution = CrowdServe.Contribution({fromBlock: 0, toBlock: 'latest'});
    contribution.get((err, res) => {
      if(err){
        funct(err, undefined);
      }
      else{
        var contributionEventsArray = [];
        res.forEach((element) => {
          var parsedArguments = {contributor: element.args.contributor, amount: Number(new web3.BigNumber(element.args.amount))}
          var eventObject = {args: parsedArguments, event: element.event, transactionHash: element.transactionHash}
          contributionEventsArray.push(eventObject);
        });
        funct(undefined, contributionEventsArray);
      }
    });
  }

  // event FundsRecalled(address contributor, uint amountBurned, uint amountReturned, string message);
  window.getFundsRecalledEvents = (funct) => {
    var fundsRecalled = CrowdServe.FundsRecalled({fromBlock: 0, toBlock: 'latest'});
    fundsRecalled.get((err, res) => {
      if(err){
        funct(err, undefined);
      }
      else{
        var fundsRecalledEventsArray = [];
        res.forEach((element) => {
          var parsedArguments = {contributor: element.args.contributor, amountBurned: Number(new web3.BigNumber(element.args.amountBurned)),
            amountReturned: Number(new web3.BigNumber(element.args.amountReturned)), message: element.args.message}
          var eventObject = {args: parsedArguments, event: element.event, transactionHash: element.transactionHash}
          fundsRecalledEventsArray.push(eventObject);
        });
        funct(undefined, fundsRecalledEventsArray);
      }
    });
  }

  // event ContributorStatement(address contributor, uint amountBurned, string message);
  window.getContributorStatementEvents = (funct) => {
    var contributorStatement = CrowdServe.ContributorStatement({fromBlock: 0, toBlock: 'latest'});
    contributorStatement.get((err, res) => {
      if(err){
        funct(err, undefined);
      }
      else{
        var contributorStatementEventsArray = [];
        res.forEach((element) => {
          var parsedArguments = {contributor: element.args.contributor, amountBurned: Number(new web3.BigNumber(element.args.amountBurned)),
            message: element.args.message}
          var eventObject = {args: parsedArguments, event: element.event, transactionHash: element.transactionHash}
          contributorStatementEventsArray.push(eventObject);
        });
        funct(undefined, contributorStatementEventsArray);
      }
    });
  }

  // event WorkerStatement(string message);
  window.getWorkerStatementEvents = (funct) => {
    var workerStatement = CrowdServe.WorkerStatement({fromBlock: 0, toBlock: 'latest'});
    workerStatement.get((err, res) => {
      if(err){
        funct(err, undefined);
      }
      else{
        var workerStatementEventsArray = [];
        res.forEach((element) => {
          var parsedArguments = {message: element.args.message}
          var eventObject = {args: parsedArguments, event: element.event, transactionHash: element.transactionHash}
          workerStatementEventsArray.push(eventObject);
        });
        funct(undefined, workerStatementEventsArray);
      }
    });
  }



/////////////////Transaction/Function calls begin here////////////////////////////////////////////////////////
  // function beginProjectRound(string proposalString, uint previewStageInterval, uint roundInterval)
  window.beginProjectRound = (proposalString, previewStageInterval, roundInterval, funct) => {
    CrowdServe.beginProjectRound(proposalString, previewStageInterval, roundInterval, (err, res) => {
      if (err){
        funct(err, undefined);
      }
      else {
        funct(undefined, res);
      }
    })
  }

  //function transfer(address _to, uint _value, bytes _data)
  window.transfer = (address, value, funct) => {
    CrowdServe.transfer(address, value, (err, res) => {
      if (err){
        funct(err, undefined);
      } else {
        funct(undefined, res);
      }
    });
  };

  window.contribute = (amountInEth, funct) => {
    CrowdServe.contribute({value: web3.toWei(amountInEth)}, (err, res) => {
      if (err){
        funct(err, undefined);
      } else{
        funct(undefined, res);
      }
    });
  }

  window.recall = (amountInEth, message, funct) => {
    CrowdServe.recall(amountInEth, message, (err,res) => {
      if (err){
        funct(err, undefined);
      } else{
        funct(undefined, res);
      }
    });
  }

  window.contributorStatement = (burnAmout, statement, funct) => {
    CrowdServe.contributorStatement(statement, (err,res) => {
      if(err){
        funct(err, undefined);
      } else{
        funct(undefined, res);
      }
    });
  }

  window.workerStatement = (statement, funct) => {
    CrowdServe.workerStatement(statement, (err,res) => {
      if(err){
        funct(err, undefined);
      } else{
        funct(undefined, res);
      }
    });
  }

  window.tryRoundEnd = (maxLoops, funct) => {
    CrowdServe.tryRoundEnd(maxLoops, (err,res) => {
      if(err){
        funct(err, undefined);
      }else{
        funct(undefined, res);
      }
    });
  }

  //test of reading methods
  getFullState((err,res) => {
    console.log(res);
    console.log(res.worker);
    balanceOf(res.worker, (err,res) => {
      console.log(res);
    });
    console.log(stateOutput(res.state));
  });
});

var decodeTopic = (topic, abi) => {
  for (var methodCounter = 0; methodCounter < abi.length; methodCounter++) {
    var item = abi[methodCounter];
    if (item.type != "event") continue;
    var signature = item.name + "(" + item.inputs.map(function(input) {return input.type;}).join(",") + ")";
    var hash = web3.sha3(signature);
    if (hash == topic) {
      return item;
    }
  }
}


//for promisification -- not yet used
// const promisify = (inner) =>
//   new Promise((resolve, reject) =>
//     inner((err, res) => {
//       if (err) { reject(err) }
//
//       resolve(res);
//     })
//   );

function returnEventArguments(rawArguments, eventInfo){
  if(eventInfo.name === "Created" || typeof eventInfo.inputs[0] == "undefined") return "";
  var rawArgumentArray = rawArguments.substring(2).match(/.{1,64}/g);
  switch(eventInfo.inputs[0].type){
    case "address":
      return "0x" + rawArgumentArray[rawArgumentArray.length-1].substring(24);
      break;
    case "uint256":
      return parseInt(rawArgumentArray[rawArgumentArray.length-1], 16);
      break;
    case "string":
      var builtString = "";
      rawArgumentArray.slice(2, rawArgumentArray.length).forEach((element) => {
        builtString += web3.toAscii(element);
      });
      return builtString;
      break;
    case "bool":
      return parseInt(rawArgumentArray[rawArgumentArray.length-1]) === 1;
      break;
    default:
    return "";
  }
}
