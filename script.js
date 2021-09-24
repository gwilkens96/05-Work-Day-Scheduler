var todaysDate = document.getElementById('todaysDate');
todaysDate.textContent = moment().format("dddd, MMMM Do");



var checkTime = function () {

     var currentTime = parseInt(moment().format('H'));

    var timeBlockElements = $("textarea");
    
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        var elementID = parseInt(timeBlockElements[i].id);
        
        var manipID = document.getElementById(timeBlockElements[i].id)

        $(timeBlockElements[i].id).removeClass(".present .past .future");

        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

setInterval(checkTime(), (1000 * 60) * 5);

$('.saveBtn').on('click', storeValues);

function storeValues() {
    var input = $(this).siblings('textarea').val().trim();
    var valueId = $(this).parent().attr('id');
    localStorage.setItem(valueId, input); 
    }

