// ==UserScript==
// @name        Fischer's Sponsor Chat Slimfast
// @namespace   http://roosterteeth.com/FischerX
// @description Slims down that unsightly Sponsor Chat frame to something more familiar
// @include     *http://roosterteeth.com/group/sponsors/chat*
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     2.0.2
// @grant       none
// ==/UserScript==


	//global variables
	
	var highlightColor = "#e7f2fd";
	var meUsername = $('#profile-menu-toggle > p > a').text().trim();


    // case insensitive version of :contains
    jQuery.expr[':'].Contains = function(a, i, m) { 
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0; 
    };

    $('div#body-block').css('background-image','url(http://i.imgur.com/eIfmXE1.png)');
    $('#tab-content-chat > section > div').css("background-color","white");
    $('#tab-content-chat > section > div').css("border","4px solid white");
    $('div#chat-users-container').css("background-color","white");

    $('#tab-content-chat > section > h3:first').remove();
    $('#tab-content-chat > section').prepend('<h3 class="content-title" id="FSCContent"><div class="FSCTitle">Sponsor Chat++</div></h3>');

    $('#body-block > main > div.col-sm-8 > div:first').remove();
    $('#body-block > main > div.col-sm-8 > form:lt(4)').remove();
    $('#hero-block > div').remove();
	$('div.left-sidebar').remove();

	var button2=document.createElement("input");
    button2.type="button";
    button2.value="Toggle Embeded Frame";
    button2.onclick = function ButtonFunc() {
        $('div.chat-embed').toggle();
    };

    $('#body-block > main > div.col-sm-8 > ul > li:lt(5) > label').toggle();


    $('h3#FSCContent').append(button2);
    $('h3#FSCContent').css("background-color","white");
    $('h3#FSCContent').css("border","4px solid white");

    function highlightMentions() {
       $('div.chat-body div.chat-content:Contains("@'+meUsername+'")').parent().css("background-color",highlightColor);
    }


    function formatMessages() {
		highlightMentions();
    
    }

waitForKeyElements ('div.chat-content', formatMessages);
