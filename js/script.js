$('#name').focus();
$('#other-title').hide();
$("#title").change(()=>{
  if ($("#title").val() === "other") {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
})
$("#color").hide();
$("#color").prev().hide();
$("#design").change(()=>{
  if($("#design").val()==="js puns"){
    $("#color").show();
    $("#color").prev().show();
    $('#color').val("cornflowerblue")
    $("option[value='tomato']").hide();
    $("option[value='steelblue']").hide();
    $("option[value='dimgrey']").hide();
    $("option[value='cornflowerblue']").show();
    $("option[value='darkslategrey']").show();
    $("option[value='gold']").show();
  } else if($("#design").val()==="heart js"){
    $("#color").show();
    $("#color").prev().show();
    $('#color').val("tomato")
    $("option[value='cornflowerblue']").hide();
    $("option[value='darkslategrey']").hide();
    $("option[value='gold']").hide();
    $("option[value='tomato']").show();
    $("option[value='steelblue']").show();
    $("option[value='dimgrey']").show();
  } else {
    $("#color").hide();
    $("#color").prev().hide();
  }
})

$(".activities").append("<div id='divTotal'></div>");
let total = 0;
function newTotal(cost){
  total += cost;
  document.getElementById('divTotal').innerHTML = "Total: $" + total;
}

$('input[name=all]').click( function(){
  if (this.checked) {
    newTotal(200);
  } else {
    newTotal(-200);
  }
});

$('input[name=js-frameworks]').click( function(){
  if (this.checked) {
    newTotal(100);
    $('input[name=express]').attr('disabled', 'disabled').parent().css("color", "grey");
  } else {
    newTotal(-100);
    $('input[name=express]').removeAttr('disabled', 'disabled').parent().css('color', 'black');
  }
});

$('input[name=js-libs]').click( function(){
  if (this.checked) {
    newTotal(100);
    $('input[name=node]').attr('disabled', 'disabled').parent().css("color", "grey");
  } else {
    newTotal(-100);
    $('input[name=node]').removeAttr('disabled', 'disabled').parent().css('color', 'black');
  }
});

$('input[name=express]').click( function(){
  if (this.checked) {
    newTotal(100);
    $('input[name=js-frameworks]').attr('disabled', 'disabled').parent().css("color", "grey");
  } else {
    newTotal(-100);
    $('input[name=js-frameworks]').removeAttr('disabled', 'disabled').parent().css('color', 'black');
  }
});

$('input[name=node]').click( function(){
  if (this.checked) {
    newTotal(100);
    $('input[name=js-libs]').attr('disabled', 'disabled').parent().css('color', 'grey');
  } else {
    newTotal(-100);
    $('input[name=js-libs]').removeAttr('disabled', 'disabled').parent().css('color', 'black');
  }
});

$('input[name=build-tools]').click( function(){
  if (this.checked) {
    newTotal(100);
  } else {
    newTotal(-100);
  }
});

$('input[name=npm]').click( function(){
  if (this.checked) {
    newTotal(100);
  } else {
    newTotal(-100);
  }
});

$("#payment").change(()=>{
  $('#payment option[value="select_method"]').hide();
});

$("p").eq(0).hide();
$("p").eq(1).hide();

$('#payment').change(function(){
  if($('#payment option:selected').val() === 'credit card') {
    $('.credit-card').show();
    $('.col-6 col').show();
    $('.col-3 col').show();
    $('#exp-month').show();
    $('#exp-year').show();
    $("p").eq(0).hide();
    $("p").eq(1).hide();
    }
});
$('#payment').change(function(){
  if($('#payment option:selected').val() === 'paypal') {
    $('.credit-card').hide();
    $('.col-6 col').hide();
    $('.col-3 col').hide();
    $('#exp-month').hide();
    $('#exp-year').hide();
    $("p").eq(0).show();
    $("p").eq(1).hide();
    }
});

$('#payment').change(function(){
  if($('#payment option:selected').val() === 'bitcoin') {
    $('.credit-card').hide();
    $('.col-6 col').hide();
    $('.col-3 col').hide();
    $('#exp-month').hide();
    $('#exp-year').hide();
    $("p").eq(0).hide();
    $("p").eq(1).show();
    }
});

function isEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

$('button').on('click', function(){
if ($('#payment option:selected').val() === 'credit card') {
  if ($('#cc-num').val() === '' || $('#cc-num').val().length > 16 || $('#cc-num').val().length < 13 || isNaN($('#cc-num').val())) {
    $('#cc-num').css('border-color', '#ff0000');
    $('#cc-num').prev().css('color', '#ff0000');
    event.preventDefault();
  } else {
    $('#cc-num').css('border', 'none');
    $('#cc-num').prev().css('color', 'black');
  }
  //$('#zip').val() === '' || $('#zip').val().length < 5 || $('#zip').val().length > 5
   if ($('#zip').val() === '' || $('#zip').val().length < 5 || $('#zip').val().length > 5 || isNaN($('#zip').val())) {
    $('#zip').css('border-color', '#ff0000');
    $('#zip').prev().css('color', '#ff0000');
    event.preventDefault();
  } else {
    $('#zip').css('border', 'none');
    $('#zip').prev().css('color', 'black');
  }

  if ($('#cvv').val() === '' || $('#cvv').val().length < 3 || $('#cvv').val().length > 3 || isNaN($('#cvv').val())) {
    $('#cvv').css('border-color', '#ff0000');
    $('#cvv').prev().css('color', '#ff0000');
    event.preventDefault();
  } else {
    $('#cvv').css('border', 'none');
    $('#cvv').prev().css('color', 'black');
  }
}
if ($('#name').val() === '') {
  $('#name').css('border-color', '#ff0000');
  $('#name').prev().css('color', '#ff0000');
  event.preventDefault();
} else {
  $('#name').css('border', 'none');
  $('#name').prev().css('color', 'black');
}

if($('#mail').val() === '' || !isEmail($("#mail").val())) {
  $('#mail').css('border-color', '#ff0000');
  $('#mail').prev().css('color', '#ff0000');
  event.preventDefault();
} else {
  $('#mail').css('border', 'none');
  $('#mail').prev().css('color', 'black');
}

if ($('input[type="checkbox"]:checked').length === 0) {
  $('.activities').css('color', '#ff0000');
  $('#divTotal').css('color', '#184f68');
  event.preventDefault();
} else {
  $('.activities').css('color', 'black');
}
});
