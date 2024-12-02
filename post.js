$(document).ready(function(){var isScrolling=false,scrollSpeed=parseInt($("#scrollSpeed").val()),scrollAnimation,isUserScrolling=false,lastScrollTop=0,inactivityTimeout,autoScrollTimeout;function startScrollingDown(){if(!isScrolling&&!isUserScrolling){isScrolling=true;$("#scrollButton").text("Stop Scrolling").data("action","down");scrollAnimation=$("html, body").animate({scrollTop:$(document).height()},scrollSpeed,"linear",function(){isScrolling=false;$("#scrollButton").text("Scroll Up").data("action","up");});}}function startScrollingUp(){if(!isScrolling&&!isUserScrolling){isScrolling=true;$("#scrollButton").text("Stop Scrolling").data("action","up");scrollAnimation=$("html, body").animate({scrollTop:0},scrollSpeed,"linear",function(){isScrolling=false;$("#scrollButton").text("Scroll Down").data("action","down");});}}function stopScrolling(){if(isScrolling){isScrolling=false;$("#scrollButton").text($("#scrollButton").data("action")==="down"?"Scroll Down":"Scroll Up");$("html, body").stop();}}$("#scrollButton").click(function(){var action=$(this).data("action");if(isScrolling){stopScrolling();}else if(action==="down"){isUserScrolling=false;startScrollingDown();}else if(action==="up"){isUserScrolling=false;startScrollingUp();}});$("#scrollSpeed").on("input",function(){scrollSpeed=parseInt($(this).val());$("#speedDisplay").text(scrollSpeed.toLocaleString()+" ms");if(isScrolling){stopScrolling();if($("#scrollButton").data("action")==="down"){startScrollingDown();}else{startScrollingUp();}}});$(window).on('scroll',function(){var currentScrollTop=$(this).scrollTop();if(Math.abs(currentScrollTop-lastScrollTop)>50){isUserScrolling=true;stopScrolling();}clearTimeout(inactivityTimeout);inactivityTimeout=setTimeout(function(){if(!isScrolling){startScrollingDown();}},2000);lastScrollTop=currentScrollTop;});autoScrollTimeout=setTimeout(function(){if(!isUserScrolling&&!isScrolling){startScrollingDown();}},5000);});document.querySelectorAll('ol li').forEach(item=>{item.addEventListener('mouseover',()=>{item.style.transform='translateY(-2px)',item.style.backgroundColor='#d0d0d0'}),item.addEventListener('mouseout',()=>{item.style.transform='translateY(0)',item.style.backgroundColor='#f9f9f9'})});document.getElementById("toc-header").onclick=function(){const e=document.getElementById("toc-content"),t=e.classList.contains("open");e.classList.toggle("open"),t?(e.style.maxHeight=0,this.style.cursor="pointer"):(e.style.maxHeight=e.scrollHeight+"px",this.style.cursor="default")};const tocList=document.getElementById("toc-list"),headings=document.querySelectorAll(".post-body h2, .post-body h3");headings.forEach(e=>{e.id||(e.id=e.textContent.trim().replace(/\s+/g,"-").toLowerCase());const t=document.createElement("li");t.innerHTML="<a href='#"+e.id+"' onclick=\"event.preventDefault();document.getElementById('"+e.id+"').scrollIntoView({behavior:'smooth'});\">"+(e.tagName==="H2"?e.textContent:"— "+e.textContent)+"</a>",tocList.appendChild(t)});window.addEventListener('load',function(){const images=document.querySelectorAll('.post-body img');images.forEach(function(img){let container=document.createElement('div');container.className='image-container';let overlay=document.createElement('div');overlay.className='image-overlay';overlay.innerHTML='Original image by Media Wizards Entertainment';container.appendChild(img.cloneNode(true));container.appendChild(overlay);img.parentElement.replaceChild(container,img)})});
