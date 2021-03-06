"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (res) => {
        $('#fortune-text').html(res);

});
}
$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

//get from "/weather.json", form data variable, (res)
//weather-info.html (res.forecast)

    //  if formData "empty":
        // flash("Please enter a zip code")
    // else:
        $.get('/weather.json', formData, (res) => {
            $('#weather-info').html (res.forecast);
        });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    // create form inputs, make a dictionary 
        //melon_qty: #qty_field.val(),  type: #melon_type_field.val(),
        // order_status: '#order-status'

    //  if order-status.val() ==== ERROR:
            // .addClass('color', 'red' or .order-error ?)  

    // $.post('/order-melons.json, formInput, (res) => {
        // $(# ????).html(res, ????)
    }
}

$("#order-form").on('submit', orderMelons);



