// JavaScript Document
var CORRECT_USER = 'ducbinhit';
var CORRECT_PASS = '123456';

var formLogin = document.getElementById('login');
if(formLogin.attachEvent){
	formLogin.attachEvent('submit', onLoginSubmit);
}
else{
	formLogin.addEventListener('submit', onLoginSubmit);
}
function onLoginSubmit(){
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	if(user == ""){
		alert('User khong duoc de trong');
	}
	else if(pass == ""){
		alert('pass khong duoc de trong');
	}
	else if(user == CORRECT_USER && pass == CORRECT_PASS){
	  	alert('Đăng nhập thành công');
	}
	else{
		alert('Đăng nhập không thành công');	
	}
}
function test(){
	alert('thong bao');
}