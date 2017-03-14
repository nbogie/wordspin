var gData = null;

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1bvd4mh6bS35fRC4fLP_QLbi3vmDAQEMs4MEG6vSGp-o/pubhtml'

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                  callback: handleResponse,
                  simpleSheet: true } )
}

function handleResponse(data, tabletop) {
  gData = data;
  $('#randomise').click(randomise);
  setNames = _.union(_.map(gData, function(entry){ return entry.setName; }));
  setNames.forEach(function(si) {
        $("<option/>").val(si).text(si).appendTo("#set-select");
    });
}


function randomise() {  
  setName = $('#set-select').val();
  
  function getSet(subsetNumber) {
    return  _.filter(gData, function(entry){ 
      return entry.subset == subsetNumber && entry.setName == setName; });
  }

  $('#word1').html(_.sample(getSet(1)).word);

  words2 = _.sample(getSet(2), 2);  
  $('#word2a').html(words2[0].word);
  $('#word2b').html(words2[1].word);

  words3 = _.sample(getSet(3), 2);
  $('#word3a').html(words3[0].word);
  $('#word3b').html(words3[1].word);
}


window.addEventListener('DOMContentLoaded', init)