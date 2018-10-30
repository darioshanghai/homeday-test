import $ from 'jquery';
import Sammy from 'sammy';

$('body').html('jQuery works');

var app = Sammy();

$(function() {
	app.run();
});
