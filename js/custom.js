$(document).ready(function() {

  $('.gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled:true
    }
  });


  $.getJSON( "../menu.json", function( data ) {
    $.each( data, function( key, val ) {
      console.log (key);

      $.each( val, function( key, val ) {
        console.log (key);
      });

    });

  });

});


$(document).ready(function() {
    $("#ajaxSelect1").heapbox();
    $("#ajaxSelect2").heapbox();
    $("#ajaxSelect3").heapbox();


  // json = '[{"value":"dynamic_value_1","text":"Dynamic value 1"},{"value":"dynamic_value_2","text":"Dynamic value 2"}]';
  // $("#ajaxSelect").heapbox("set",json);


  // // init heapbox for #ajaxSelect and define onChange callback with ajax
  // $("#ajaxSelect").heapbox({
  //     'onChange':function(value) {
  //       //hide heapbox
  //       $("#ajaxSelect2").heapbox("hide");
  //
  //      if(value) {
  //        showAjaxSelect2(json);
  //        $("#ajaxSelect2").heapbox("show");
  //
  //       }
  //     }
  // });
  //
  // //init heapbox for #ajaxSelect2
  // $("#ajaxSelect2").heapbox({
  //  'onChange': function(value) {
  //    showMessage();
  //   }
  // });
  //
  // //hide heapbox
  // $("#ajaxSelect2").heapbox("hide");
  //
  // //set data to heapbox for #ajaxSelect2
  // function showAjaxSelect2(data) {
  //    $("#ajaxSelect2").heapbox("set",data);
  // }
  //
  // //show selected values
  // function showMessage() {
  //   foodType = $("#ajaxSelect option:selected").attr("value");
  //   food = $("#ajaxSelect2 option:selected").attr("value");
  //
  //   alert("Cool, you are into "+foodType+", especially "+food+".");
  // }

});
