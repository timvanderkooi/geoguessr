function addModal() {
  var div = createElement("div", "timodal", "scoreModal")
  document.body.append(div);
  document.getElementById("scoreModal").innerHTML = '<div class="modal-content" id="inner-timodal"><span class="close"></span><button class="score__round-action-button button" id="scoreboard_button"><span>Add to scoreboard</span></button><form><input id="geo_username" type="text" name="firstname" placeholder="John Doe"></form></div>'
}

function createElement(element, className, idName) {
  var element = document.createElement(element);
  element.className = className;
  element.id = idName;
  return element;
}

function createSummaryListener() {
  $("#js__score").on('click', 'button', function (e) {
    var text = $(this).text();
    if (text == "View summary") {
      console.log(text);
      $("#scoreModal").show();
    }
    e.preventDefault();
  });
}

function createScoreboardListener() {
  $("#scoreModal").on('click', '#scoreboard_button', function (e) {
    $("#scoreModal").hide();
    let name = $('#geo_username')[0].value;
    let score = $('.score__progress__points')[0].children[0].outerText;
    let results = $('.score__share')[0].children[3].href;
    console.log(name, score, results);
    $.post("http://localhost:3000/score",{user: name,score: score,link: results}, function(data) {
      if (data=='done') {
        alert("score submitted.");
      }
    })
  });
}

addModal();
createSummaryListener();
createScoreboardListener();


