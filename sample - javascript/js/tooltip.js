$(document).ready(function(){

$(function(){
$($('a').tooltip('show')).tooltip(options)
});

$(function () {
$('[data-toggle"tooltip"]').tooltip('toggle')
})

// setTimeout(function(){
//   $('a').tooltip('hide');
// }, 3000);
//
// setTimeout(function(){
//   $('a').tooltip('show');
// }, 3500);
//
// setTimeout(function(){
//   $('a').tooltip('hide');
// }, 4000);
//
// setTimeout(function(){
//   $('a').tooltip('show');
// }, 4500);
//
// setTimeout(function(){
//   $('a').tooltip('hide');
// }, 5000);
//
// setTimeout(function(){
//   $('a').tooltip('show');
// }, 5500);
//
// setTimeout(function(){
//   $('a').tooltip('hide');
// }, 6000);

var i = 0;

setTimeout(function(){
   $('a').tooltip('hide');
   setInterval(function(){
     if(i < 6){
       $('a').tooltip('toggle');
     }
     i++;
     }, 500);
 }, 3000);




});
