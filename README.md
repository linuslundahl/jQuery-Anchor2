#jQuery Anchor^2

jQuery Anchor^2 is a simple jQuery plugin which scrolls to the the ID of a hashed link instead of the default jumping browser behavior.

Get the latest version at [GitHub](https://github.com/linuslundahl/jQuery-Anchor2).

Usage
-----

The easiest way to implement the script is by:

1. Include jQuery and the script in the head of your site.
2. Add the class anchorLink to any hashed link that should be affected.
3. Add the hash ID to an element on you site.

Examples
--------

The link:

	<a href="#yourHash" class="anchorLink">link</a>

Will scroll to:

	<h2 id="yourHash">title</h2>

If you want to target hashed links on a site without adding classes you can just bind the script to any class or link element:

	$('a').anchorAnimate();

Will target all links with hashes on the page.

Settings
--------

You can add a few settings to the script.

	speed: 		400 	(int)		(The scroll speed)
	offset: 	0 		(int)		(Offset the scroll position by X pixels)
	specOffset:	{}		(object)	(A list of hashes to offset X pixels)
	showHash: 	false 	(bool)		(Show/Hide the hash in the browser location bar)

License
-------

jQuery Anchor² is licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) License.

The script is a cleaner and extended version of jQuery Anchor by [Cedric Dugas](http://www.position-absolute.com/articles/better-html-anchor-a-jquery-script-to-slide-the-scrollbar/).
