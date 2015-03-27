jQuery purgeFrame
==================================
A plugin to cleanup Iframes when they are removed to prevent memory leaks in IE.


Dependencies
----------------
*     jQuery

Setup and Usage
-----------------
	
Load the JavaScript file in the HEAD tag

    <script type="text/javascript" src="jquery.purgeFrame.js"></script>
	
To use, call purgeFrame on your Iframe when you want to remove it

    <select id="SomeSelect"></select>
    $("#MyIframe").purgeFrame.done(function() {
			//Do More cleanup herre
    });




