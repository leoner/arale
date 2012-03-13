seajs.config({alias:{jquery:"jquery/1.7.1/jquery"}}),define("http://seajs.com/docs/demo/calculator/online/init",["./stdin","./stdout"],function(a){a("./stdin").init(),a("./stdout").init()});
define("http://seajs.com/docs/demo/calculator/online/stdin",["jquery","./calculator"],function(a,b){var c=a("jquery"),d=a("./calculator"),e={8:"delete",13:"enter",27:"esc"};b.init=function(){c("#keyboard").delegate("div","click",function(){d.handleInput(c(this).text())}),c(document).keypress(function(a){var b=a.keyCode;b===8&&a.preventDefault();var c=e[b];c||(c=String.fromCharCode(a.which)),d.handleInput(c)})}});
define("http://seajs.com/docs/demo/calculator/online/calculator",["./stdout","./math"],function(a,b){function k(){return d[i](Number(g),Number(h))}function l(a){return/[0-9]/.test(a)}function m(a){return a==="."}function n(a){return!!e[a]}var c=a("./stdout"),d=a("./math"),e={"+":"add","-":"subtract","*":"multiple","×":"multiple",x:"multiple","/":"divide","%":"divide"},f={C:"clear",c:"clear",esc:"clear","delete":"del","=":"equal",enter:"equal","±":"inverse"},g="",h="",i;b.handleInput=function(a){l(a)||m(a)?j.updateInput(a):n(a)?j.operate(a):f[a]&&j[f[a]]()};var j={updateInput:function(a){if(m(a)&&h.indexOf(".")!==-1)return;h+=a,c.updateResult(h)},operate:function(a){i?(g=k(),c.updateResult(g)):g=h,h="",i=e[a],c.updateOperator(a)},clear:function(){g="",h="0",i=null,c.clear()},del:function(){h&&h!=="0"&&(h=h.substring(0,h.length-1),h||(h="0"),c.updateResult(h))},inverse:function(){h=0-h,c.updateResult(h)},equal:function(){this.operate("")}}});
define("http://seajs.com/docs/demo/calculator/online/stdout",["jquery"],function(a,b){var c=a("jquery"),d,e;b.init=function(){d=c("#result"),e=c("#operator")},b.updateResult=function(a){d.text(a)},b.updateOperator=function(a){e.text(a)},b.clear=function(){b.updateResult("0"),b.updateOperator("")}});
define("http://seajs.com/docs/demo/calculator/online/math",[],function(a,b){b.add=function(a,b){return a+b},b.subtract=function(a,b){return a-b},b.multiple=function(a,b){return a*b},b.divide=function(a,b){return a/b}});