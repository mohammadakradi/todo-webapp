/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-add': '&#xe902;',
		'icon-add-category': '&#xe900;',
		'icon-add-icon': '&#xe901;',
		'icon-calender': '&#xe904;',
		'icon-circle': '&#xe905;',
		'icon-design': '&#xe906;',
		'icon-down': '&#xe907;',
		'icon-focus': '&#xe908;',
		'icon-go': '&#xe909;',
		'icon-home-page': '&#xe90a;',
		'icon-home': '&#xe90b;',
		'icon-movie': '&#xe90c;',
		'icon-others': '&#xe90d;',
		'icon-profile': '&#xe90e;',
		'icon-search': '&#xe90f;',
		'icon-selected-circle': '&#xe910;',
		'icon-shopping': '&#xe911;',
		'icon-sport': '&#xe912;',
		'icon-studying': '&#xe913;',
		'icon-tag': '&#xe914;',
		'icon-timer': '&#xe915;',
		'icon-up': '&#xe916;',
		'icon-work': '&#xe917;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
