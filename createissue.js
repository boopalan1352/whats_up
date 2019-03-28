javascript:
(function() 
{ 
var d = document.getElementById('summary');
var e = document.getElementById('description');
var f = document.getElementById('environment');
var g = document.getElementById('customfield_10153').value ="10371";
var h = document.getElementById('customfield_10152').value ="10365";
if (d) {
d.value += '[INT]
';
}
if (e) {
e.value += 'Request%20Details:%20<METHOD>%20https://pss-int.api.aircanada.com<ResourcePath>%20
\n\nAC-Transaction-ID:
\nAC-Office-ID:
\n\n
{panel:title=Request}\n
{code}\n
Some text with a title\n
{code}\n
{panel}\n\n
{panel:title=Response}\n
{code}\n
Some text with a title\n
{code}\n
{panel}\n
';
}
if (f) {
f.value += 'INT';
}


})();





