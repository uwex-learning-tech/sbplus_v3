var sbplus=sbplus||{accent:"#535cab",slideFormat:"jpg",analytics:"off",xmlVersion:"3",trackCount:0};$(function(){$.getJSON($.fn.getConfigFileUrl(),function(e){$.fn.loadSBPlus(e)}).fail(function(){$(".sbplus_wrapper").html('<div class="error"><h1>Configuration file (manifest.json) is not found!</h1><p>Please make sure the index.html file is compatible with Storybook Plus version 3.</p></div>')})}),$.fn.loadSBPlus=function(e){$(this).haveCoreFeatures()?$.get("assets/sbplus.xml",function(t){$.fn.loadPresentation(e,$(t))}).fail(function(){$(".sbplus_wrapper").html('<div class="error"><h1>Table of Contents XML file (sbplus.xml) is not found!</h1><p>Please make sure the XML file exists in the assets directory and compatible with Storybook Plus version 3.</p></div>')}):$.get(e.sbplus_root_directory+"scripts/templates/nosupport.tpl",function(e){$(".sbplus_wrapper").html(e)}).fail(function(){$(".sbplus_wrapper").html('<div class="error"><h1>Template file not found!</h1><p>nosupport.tpl file not found in the templates directory.</p></div>')})},$.fn.loadPresentation=function(e,t){var s=t.find("storybook"),n=t.find("setup");sbplus.title=n.find("title").text(),sbplus.subtitle=n.find("subtitle").text(),sbplus.author=n.find("author").attr("name"),sbplus.authorBio=n.find("author").text(),sbplus.length=n.find("length").text(),sbplus.generalInfo=n.find("generalInfo").text(),sbplus.postfix=n.attr("postfix"),sbplus.accent=$.fn.isEmpty(s.attr("accent"))?sbplus.accent:s.attr("accent"),sbplus.slideFormat=$.fn.isEmpty(s.attr("slideFormat"))?sbplus.slideFormat:s.attr("slideFormat"),sbplus.analytics=$.fn.isEmpty(s.attr("analytics"))?sbplus.analytics:s.attr("analytics"),sbplus.section=t.find("section"),$(document).attr("title",sbplus.title),$.get(e.sbplus_root_directory+"scripts/templates/sbplus.tpl",function(t){$(".sbplus_wrapper").html(t),$.get(e.sbplus_root_directory+"scripts/templates/splashscreen.tpl",function(t){$(".splashscreen").html(t),$.get("assets/splash.jpg",function(){$(".splashscreen").css("background-image","url(assets/splash.jpg)")}).fail(function(){$.get(e.sbplus_splash_directory+$.fn.getProgramDirectory()+sbplus.postfix+".jpg",function(){$(".splashscreen").css("background-image","url("+this.url+")")}).fail(function(){$.get(e.sbplus_splash_directory+$.fn.getProgramDirectory()+".jpg",function(){$(".splashscreen").css("background-image","url("+this.url+")")})})}),$(".splashinfo .title").html(sbplus.title),$(".splashinfo .subtitle").html(sbplus.subtitle),$(".splashinfo .author").html(sbplus.author),$(".splashinfo .length").html(sbplus.length),$(".splashinfo .startBtn").css("background-color",sbplus.accent),navigator.cookieEnabled&&$.fn.checkValueInCookie("sbplus-"+$.fn.getRootDirectory())&&$(".splashinfo .resumeBtn").css("background-color",sbplus.accent).removeClass("hide"),$(".splashinfo .startBtn").on("click",function(){$(".splashscreen").fadeOut("fast",function(){$(".main_content_wrapper").css("display","flex").fadeIn(500,function(){$(this).removeClass("hide"),$.fn.setupPresentation()}),$(this).remove()})}),$.fn.getDownloadableFiles()}).fail(function(){$(".sbplus_wrapper").html('<div class="error"><h1>Template file not found!</h1><p>splashscreen.tpl file not found in the templates directory.</p></div>')})}).fail(function(){$(".sbplus_wrapper").html('<div class="error"><h1>Template file not found!</h1><p>sbplus.tpl file not found in the templates directory.</p></div>')})},$.fn.setupPresentation=function(){$(".title_bar .title").html(sbplus.title),$(".author").html(sbplus.author),$.fn.loadTableOfContents(),$.fn.bindMenuEvents()},$.fn.loadTableOfContents=function(){$.each(sbplus.section,function(e){var t=$(this).find("page"),s=$.fn.isEmpty($(this).attr("title"))?"Section "+(e+1):$(this).attr("title");$(".tableOfContents").append('<div class="section"><div class="header"><div class="title">'+s+'</div><div class="expandCollapseIcon"><span class="icon-collapse"></span></div></div><div class="content"><ul class="selectable">'),$.each(t,function(t){"quiz"!==$(this).attr("type")?$(".selectable:eq("+e+")").append('<li class="selectee" data-slide="'+t+'"><span class="num">'+(sbplus.trackCount+1)+".</span> "+$(this).attr("title")+"</li>"):$(".selectable:eq("+e+")").append('<li class="selectee" data-slide="'+t+'"><span class="icon-assessment"></span> '+$(this).attr("title")+"</li>"),sbplus.trackCount++}),$(".tableOfContents").append("</ul></div></div>")}),sbplus.section.length>=2?$(".tableOfContents .section .header").on("click",function(){var e=$(this).parent().find(".content"),t=$(this).parent().find(".expandCollapseIcon").find("span");$(e).is(":visible")?e.slideUp(250,function(){$(t).removeClass("icon-collapse").addClass("icon-open")}):e.slideDown(250,function(){$(t).removeClass("icon-open").addClass("icon-collapse")})}):$(".tableOfContents .section .header").remove(),$(".selectable .selectee").on("click",function(){if(sbplus.section.length>=2){var e=$(this).parent().parent().prev();$(".header").removeClass("current"),$(e).addClass("current")}$(".selectable .selectee").removeClass("selected"),$(this).addClass("selected")})},$.fn.getDownloadableFiles=function(){$.get($.fn.getProgramDirectory()+".mp4",function(){sbplus.videoDownloadSrc=this.url,$(".dl_item.video").attr("href",sbplus.videoDownloadSrc).removeClass("hide")}),$.get($.fn.getProgramDirectory()+".mp3",function(){sbplus.audioDownloadSrc=this.url,$(".dl_item.audio").attr("href",sbplus.audioDownloadSrc).removeClass("hide")}),$.get($.fn.getProgramDirectory()+".pdf",function(){sbplus.pdfDownloadSrc=this.url,$(".dl_item.pdf").attr("href",sbplus.pdfDownloadSrc).removeClass("hide")}),$.get($.fn.getProgramDirectory()+".zip",function(){sbplus.zipDownloadSrc=this.url,$(".dl_item.zip").attr("href",sbplus.zipDownloadSrc).removeClass("hide")})},$.fn.haveCoreFeatures=function(){return!!(Modernizr.audio&&Modernizr.video&&Modernizr.json&&Modernizr.flexbox)},$.fn.getConfigFileUrl=function(){var e=document.getElementById("sbplus_configs");return null===e?!1:e.href},$.fn.getProgramDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1]))&&e.splice(e.length-1,1),void 0===e[4]?e[3]:e[4]},$.fn.getRootDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1])||"index.html"===e[e.length-1])&&e.splice(e.length-1,1),e[e.length-1]},$.fn.isEmpty=function(e){return!e.trim()||0===e.trim().length},$.fn.bindMenuEvents=function(){$(".menuBtn").on("click",function(){return $(this).attr("aria-expanded","true"),$("#menu_panel").removeClass("hide").attr("aria-expanded","true"),!1}),$(".backBtn").on("click",function(){return $.fn.hideMenuItemDetails(),!1}),$(".closeBtn").on("click",function(){return $(".menuBtn").attr("aria-expanded","false"),$("#menu_panel").addClass("hide").attr("aria-expanded","false"),$.fn.hideMenuItemDetails(),!1}),$("#showProfile").onMenuItemClick(),$("#showGeneralInfo").onMenuItemClick(),$("#showHelp").onMenuItemClick(),$("#showSettings").onMenuItemClick()},$.fn.onMenuItemClick=function(){var e,t;$(this).on("click",function(){var s="#"+this.id;switch(s){case"#showProfile":e="Author Profile",t=sbplus.authorBio;break;case"#showGeneralInfo":e="General Information",t=sbplus.generalInfo;break;case"#showHelp":e="Help",t="<p>Help information go here...</p>";break;case"#showSettings":e="Settings",t="<p>Settings go here...</p>";break;default:e="",t=""}return""!==e&&""!==t&&$(this).showMenuItemDetails(e,t),!1})},$.fn.showMenuItemDetails=function(e,t){$(this).attr("aria-expanded","true"),$(".menu_item_details").attr("aria-expanded","true"),$(".menu_item_details .navbar .title").html(e),$(".menu_item_details .menu_item_content").html(t),$(".menu_item_details").removeClass("hide").animate({right:"0px"},250)},$.fn.hideMenuItemDetails=function(){$(".menu_item a").attr("aria-expanded","false"),$(".menu_item_details").attr("aria-expanded","false").animate({right:"-258px"},250,function(){$(this).addClass("hide")})},$.fn.setCookie=function(e,t,s){var n=new Date;n.setTime(n.getTime()+24*s*60*60*1e3);var i="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+i},$.fn.getCookie=function(e){for(var t=e+"=",s=document.cookie.split(";"),n=0;n<s.length;n++){for(var i=s[n];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""},$.fn.deleteCookie=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"},$.fn.checkValueInCookie=function(e){var t=$.fn.getCookie(e);return""!==t};