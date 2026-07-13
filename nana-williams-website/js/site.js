(function(){"use strict";
var burger=document.getElementById('hamburger'),navEl=document.getElementById('nav');
if(burger&&navEl){burger.addEventListener('click',function(){var o=navEl.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false');});
navEl.querySelectorAll('.nav-link').forEach(function(a){a.addEventListener('click',function(){navEl.classList.remove('open');burger.setAttribute('aria-expanded','false');});});}
document.querySelectorAll('.faq-q').forEach(function(btn){btn.addEventListener('click',function(){var open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',open?'false':'true');var a=document.getElementById(btn.getAttribute('aria-controls'));if(a)a.style.maxHeight=open?null:(a.scrollHeight+'px');});});
var form=document.querySelector('form[name="contact"]');
if(form){form.addEventListener('submit',function(){var b=form.querySelector('button[type="submit"]');if(b){b.classList.add('is-loading');b.disabled=true;}});}
})();