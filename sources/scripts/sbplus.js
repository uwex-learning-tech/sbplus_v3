var sbplus=sbplus||{title:"",subtitle:"",length:"",author:"",authorBio:"",generalInfo:"",accent:"#0000ff",slideFormat:"jpg",analytics:"off",xmlVersion:"3",splashImg:"sources/images/default_splash.jpg",splashinfo:function(){return'<div class="splashinfo"><h1 tabindex="1" class="title">'+this.title+'</h1><p tabindex="1" class="subtitle">'+this.subtitle+'</p><p tabindex="1" class="author">'+this.author+'</p><p tabindex="1" class="length">'+this.length+'</p><button tabindex="1" class="startBtn" aria-label="Start Presentation">START</button></div>'}};$(function(){$(this).haveCoreFeatures()?(sbplus.title="Presentation Title Goes Here and Can Be As Many Lines As You Want But Two Is Recommended",sbplus.subtitle="Subtitle goes here and Can Be As Many Lines As You Want But Two Is Recommended",sbplus.author="Dr. Firstname Lastname",sbplus.length="25 minutes",$(document).attr("title",sbplus.title),$.get("sources/scripts/templates/sbplus.tpl",function(e){$(".sbplus_wrapper").html(e),$(".splashscreen").html(sbplus.splashinfo()).css("background-image","url("+sbplus.splashImg+")"),$(".startBtn").on("click",function(){$(".splashscreen").fadeOut("fast",function(){$(".main_content_wrapper").fadeIn(500).css("display",Modernizr.flexbox?"flex":"block").removeClass("hide")})})})):$.get("sources/scripts/templates/nosupport.tpl",function(e){$(".sbplus_wrapper").html(e)})}),$.fn.haveCoreFeatures=function(){return Modernizr.audio&&Modernizr.video&&Modernizr.json&&Modernizr.eventlistener?!0:!1},$.fn.displayErrorScreen=function(e,t,s){s="undefined"!=typeof s?s:!1;var n=$(".errorscreen");n.find(".title").html(e),n.find(".msg").html(t),s&&(n.find(".act").html('<button class="btn-continue">continue</button>'),$(".btn-continue").bind("click",$.fn.hideErrorScreen)),n.removeClass("hide").hide().fadeIn()},$.fn.hideErrorScreen=function(){var e=$(".errorscreen");e.find(".title").html(""),e.find(".msg").html(""),e.find(".act").html(""),e.fadeOut(function(){e.addClass("hide"),$(".btn-continue").unbind("click",$.fn.hideErrorScreen)})};