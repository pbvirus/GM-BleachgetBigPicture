// ==UserScript==
// @name        Bleachget Big Picture
// @namespace   https://github.com/pbvirus
// @homepage    https://github.com/pbvirus/GM-BleachgetBigPicture
// @include     http://www.bleachget.co/watch/*
// @version     1.0.0
// @grant       none
// @description Switches to the English dubbed stream and enlarges the video player
// ==/UserScript==

(
	function()
	{
		var videos = document.getElementsByClassName("vm-bts")[0];
		for(i=0;i<videos.childElementCount;i++)
		{
			if (videos.children[i].text == "English Dubbed")
			{
				var EnglishDubbedHref = videos.children[i].href;
			}
			else if (videos.children[i].text == "English Dubbed Mirror")
			{
				var EnglishDubbedMirrorHref = videos.children[i].href;
			}
		}
		
		var currentTab = document.getElementsByClassName("active")[0];
		
		if (!currentTab.text.startsWith("English Dubbed") && EnglishDubbedHref !=null)
		{
			document.location = EnglishDubbedHref;
		}
		else if (document.getElementById("swfplayer") == null && document.getElementById("home_video") == null && currentTab.text != "English Dubbed Mirror" && EnglishDubbedMirrorHref !=null)
		{
			document.location = EnglishDubbedMirrorHref;
		}
		else
		{
			document.getElementsByTagName("IFRAME")[0].width = "100%";
			document.getElementsByTagName("IFRAME")[0].height = 900;
			
			document.getElementsByClassName("vm-bts")[0].remove();
			document.getElementsByClassName("center")[0].style.width="100%";
			document.getElementsByClassName("wrapper")[0].style.width="100%";
			document.getElementsByClassName("logo-bar")[0].remove();
			document.getElementsByClassName("top-nav")[0].remove();
			document.getElementsByClassName("search-widget")[0].remove();
			document.getElementsByClassName("main-menu")[0].remove();
			document.getElementsByClassName("footer")[0].remove();
			document.getElementsByClassName("c-item")[0].remove();
			document.getElementsByClassName("c-item")[1].remove();
			document.getElementsByClassName("share-area")[0].remove();
			document.getElementsByClassName("episode-it")[0].remove();
			document.getElementsByClassName("bd-title episode")[0].remove();
			document.getElementsByClassName("container-left")[0].style.width="100%";
			
			document.getElementById("swfplayer").children.namedItem("externalInterface").style.width = "100%";
			document.getElementById("swfplayer").children.namedItem("externalInterface").height = 900;
			
			removea();
		}
	}
)();