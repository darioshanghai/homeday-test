import $ from 'jquery';
import Sammy from 'sammy';
import Template from '../node_modules/sammy/lib/plugins/sammy.template.js';
import Json from '../node_modules/sammy/lib/plugins/sammy.json';
import Storage from '../node_modules/sammy/lib/plugins/sammy.storage';

var app = Sammy('#main',
	function(){
		this.use('Template');
		this.use('Session');
		
		this.get('', function(context) {
			context.partial('templates/_landing.template');
		});
		
		this.post('/email', function(context){
			context.partial('templates/_email.template');
		});
		this.post('/user-github-data', function(context){
			context.partial('templates/_github-data.template');
		});
	});

$(function() {
	app.run();
});
