// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require material/popper.min
//= require material/bootstrap-material-design.min
//= require material/perfect-scrollbar.jquery.min
//= require material/chartist.min
//= require material/arrive.min
//= require material/bootstrap-notify
//= require material/material-dashboard
//= require material/demo
//= require rails-ujs
//= require activestorage
//= require_tree .


$('form').on('click', '.add_fields', function(event) {
        
   var time, regexp;
   time = new Date().getTime()
   regexp = new RegExp($(this).data('id'), 'g');
   $('.fields').append($(this).data('fields').replace(regexp, time));;  
});


// for remove row dynamic in quotation/new
$('form').on('click', '.remove_record', function(event) {
    $(this).parents('.submenu').remove();
    if ($('.remove_record').length < 2) $('.remove_record').hide();
    
});