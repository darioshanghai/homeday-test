import $ from 'jquery';
import Sammy from 'sammy';
import Template from '../node_modules/sammy/lib/plugins/sammy.template.js';

var app = Sammy('#main',
	function(){
		this.use('Template');
		
		this.get('', function(context) {
			context.partial('templates/_landing.template');
		});
	});

$(function() {
	app.run();
});
