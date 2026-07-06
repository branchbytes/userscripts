// ==UserScript==
// @name     Old Reddit Redirect
// @version  1
// @include  https://www.reddit.com/r/*
// @grant    none
// @run-at   document-start
// ==/UserScript==

(function(){
  let url = window.location.href;
  
	window.location.replace(url.replace(window.location.hostname, 'old.reddit.com'))
})()
