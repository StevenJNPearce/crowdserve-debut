function getBlockTimeStamp(blockHash) {
  return new Promise((resolve, reject) => {
    this.web3.eth.getBlock(blockHash, false, (err, res) => {
      if(err){
        reject(err);
      }
      if(res){
        resolve(res.timestamp);
      }
    })
  })
}

function safeTextTransform(str) {
  return xssFilters.inHTMLData(str).replace(/(?:\r\n|\r|\n)/g, '<br />');
}