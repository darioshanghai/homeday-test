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
			const user = this.session('user', function() {
				return {}
			});
			user['first-name']= this.params['first-name'];
			user.surname = this.params['surname'];
			user.username = this.params['username'];
			this.session('user', user);

		});
		this.post('/user-github-data', function(context){
			const user = this.session('user');
			context.partial('templates/_github-data.template', {user: user});
			this.log('data: ', user);
		});
	});

$(function() {
	app.run();
});
