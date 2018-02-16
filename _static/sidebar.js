/*
sidebar.js

Due to the constant changing of the HBN Scientific Data Portal sidebar, this code has
been created to include the file sidebar.html onto each page and alleviate the headache
that is changing the sidebar for all ~100 or so files of the HBN Scientific Data Portal.

Author: Bonhwang Koo
Created: 2/16/2018
*/

// Use the jQuery load function to include sidebar.html
$(document).ready(function(){ 
	$("#sidebar").load("http://fcon_1000.projects.nitrc.org/indi/cmi_healthy_brain_network/sidebar.html");
	setTimeout(function(){
		var filename = window.location.pathname.split('/');

		$('.toctree-l1').each(function(index){
			if (filename[filename.length - 2] === "assessments" && $( 'a', this ).attr('href').split('/').pop() === "assessments.html") {
				$(this).addClass('current');
				$('a', this).addClass('current');
			} else if (filename[filename.length - 2] === "release" && $( 'a', this ).attr('href').split('/').pop() === "release_notes.html") {
				$(this).addClass('current');
				$('a', this).addClass('current');
			} else if ($( 'a', this ).attr('href').split('/').pop() === window.location.pathname.split('/').pop()) {
				$(this).addClass('current');
				$('a', this).addClass('current');
			}
		});
	}, 10);

});
