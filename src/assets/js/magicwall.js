/* eslint-disable eqeqeq */
import jQuery from "jquery";

export default function initMagicWall() {
	/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
	jQuery.easing.jswing = jQuery.easing.swing;
	jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function (e, a, c, b, d) {
			return jQuery.easing[jQuery.easing.def](e, a, c, b, d);
		},
		easeInQuad: function (e, a, c, b, d) {
			return b * (a /= d) * a + c;
		},
		easeOutQuad: function (e, a, c, b, d) {
			return -b * (a /= d) * (a - 2) + c;
		},
		easeInOutQuad: function (e, a, c, b, d) {
			if ((a /= d / 2) < 1) return (b / 2) * a * a + c;
			return (-b / 2) * (--a * (a - 2) - 1) + c;
		},
		easeInCubic: function (e, a, c, b, d) {
			return b * (a /= d) * a * a + c;
		},
		easeOutCubic: function (e, a, c, b, d) {
			return b * ((a = a / d - 1) * a * a + 1) + c;
		},
		easeInOutCubic: function (e, a, c, b, d) {
			if ((a /= d / 2) < 1) return (b / 2) * a * a * a + c;
			return (b / 2) * ((a -= 2) * a * a + 2) + c;
		},
		easeInQuart: function (e, a, c, b, d) {
			return b * (a /= d) * a * a * a + c;
		},
		easeOutQuart: function (e, a, c, b, d) {
			return -b * ((a = a / d - 1) * a * a * a - 1) + c;
		},
		easeInOutQuart: function (e, a, c, b, d) {
			if ((a /= d / 2) < 1) return (b / 2) * a * a * a * a + c;
			return (-b / 2) * ((a -= 2) * a * a * a - 2) + c;
		},
		easeInQuint: function (e, a, c, b, d) {
			return b * (a /= d) * a * a * a * a + c;
		},
		easeOutQuint: function (e, a, c, b, d) {
			return b * ((a = a / d - 1) * a * a * a * a + 1) + c;
		},
		easeInOutQuint: function (e, a, c, b, d) {
			if ((a /= d / 2) < 1) return (b / 2) * a * a * a * a * a + c;
			return (b / 2) * ((a -= 2) * a * a * a * a + 2) + c;
		},
		easeInSine: function (e, a, c, b, d) {
			return -b * Math.cos((a / d) * (Math.PI / 2)) + b + c;
		},
		easeOutSine: function (e, a, c, b, d) {
			return b * Math.sin((a / d) * (Math.PI / 2)) + c;
		},
		easeInOutSine: function (e, a, c, b, d) {
			return (-b / 2) * (Math.cos((Math.PI * a) / d) - 1) + c;
		},
		easeInExpo: function (e, a, c, b, d) {
			return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c;
		},
		easeOutExpo: function (e, a, c, b, d) {
			return a == d ? c + b : b * (-Math.pow(2, (-10 * a) / d) + 1) + c;
		},
		easeInOutExpo: function (e, a, c, b, d) {
			if (a == 0) return c;
			if (a == d) return c + b;
			if ((a /= d / 2) < 1) return (b / 2) * Math.pow(2, 10 * (a - 1)) + c;
			return (b / 2) * (-Math.pow(2, -10 * --a) + 2) + c;
		},
		easeInCirc: function (e, a, c, b, d) {
			return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c;
		},
		easeOutCirc: function (e, a, c, b, d) {
			return b * Math.sqrt(1 - (a = a / d - 1) * a) + c;
		},
		easeInOutCirc: function (e, a, c, b, d) {
			if ((a /= d / 2) < 1) return (-b / 2) * (Math.sqrt(1 - a * a) - 1) + c;
			return (b / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + c;
		},
		easeInElastic: function (e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if (a == 0) return c;
			if ((a /= d) == 1) return c + b;
			f || (f = d * 0.3);
			if (g < Math.abs(b)) {
				g = b;
				e = f / 4;
			} else e = (f / (2 * Math.PI)) * Math.asin(b / g);
			return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin(((a * d - e) * 2 * Math.PI) / f)) + c;
		},
		easeOutElastic: function (e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if (a == 0) return c;
			if ((a /= d) == 1) return c + b;
			f || (f = d * 0.3);
			if (g < Math.abs(b)) {
				g = b;
				e = f / 4;
			} else e = (f / (2 * Math.PI)) * Math.asin(b / g);
			return g * Math.pow(2, -10 * a) * Math.sin(((a * d - e) * 2 * Math.PI) / f) + b + c;
		},
		easeInOutElastic: function (e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if (a == 0) return c;
			if ((a /= d / 2) == 2) return c + b;
			f || (f = d * 0.3 * 1.5);
			if (g < Math.abs(b)) {
				g = b;
				e = f / 4;
			} else e = (f / (2 * Math.PI)) * Math.asin(b / g);
			if (a < 1)
				return (
					-0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin(((a * d - e) * 2 * Math.PI) / f) + c
				);
			return (
				g * Math.pow(2, -10 * (a -= 1)) * Math.sin(((a * d - e) * 2 * Math.PI) / f) * 0.5 + b + c
			);
		},
		easeInBack: function (e, a, c, b, d, f) {
			if (f == undefined) f = 1.70158;
			return b * (a /= d) * a * ((f + 1) * a - f) + c;
		},
		easeOutBack: function (e, a, c, b, d, f) {
			if (f == undefined) f = 1.70158;
			return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c;
		},
		easeInOutBack: function (e, a, c, b, d, f) {
			if (f == undefined) f = 1.70158;
			if ((a /= d / 2) < 1) return (b / 2) * a * a * (((f *= 1.525) + 1) * a - f) + c;
			return (b / 2) * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c;
		},
		easeInBounce: function (e, a, c, b, d) {
			return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c;
		},
		easeOutBounce: function (e, a, c, b, d) {
			return (a /= d) < 1 / 2.75
				? b * 7.5625 * a * a + c
				: a < 2 / 2.75
				? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c
				: a < 2.5 / 2.75
				? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c
				: b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c;
		},
		easeInOutBounce: function (e, a, c, b, d) {
			if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
			return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c;
		}
	});

	/**!
	 * VERSION: 2.0.1
	 * DATE: 2014-08-18
	 *
	 * @author: Mostafa Fouad, tee.fouad@gmail.com
	 */

	(function ($, window, document, undefined) {
		"use strict";

		/* ------------------------------------------------------- */
		/* GLOBAL
     /* ------------------------------------------------------- */

		var doc = document,
			win = window,
			$doc = $(doc),
			$win = $(win),
			pluginName = "magicWall",
			pluginSlug = "magicwall",
			selectors = {
				loading: "." + pluginSlug + "-loading",
				hover: "." + pluginSlug + "-hover",
				wrap: "." + pluginSlug + "-wrap",
				thumb: "." + pluginSlug + "-thumb",
				grid: "." + pluginSlug + "-grid",
				gridItem: "." + pluginSlug + "-grid-item"
			};

		/* ------------------------------------------------------- */
		/* HELPERS
     /* ------------------------------------------------------- */

		var /* EASING */
			easing = {
				swing: function (x, t, b, c, d) {
					return -c * (t /= d) * (t - 2) + b;
				}
			},
			/* PREFIX */
			prefix = (function () {
				var styles = window.getComputedStyle(document.documentElement, ""),
					pre = (Array.prototype.slice
						.call(styles)
						.join("")
						.match(/-(moz|webkit|ms)-/) ||
						(styles.OLink === "" && ["", "o"]))[1],
					dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];

				return {
					dom: dom,
					lowercase: pre,
					css: "-" + pre + "-",
					js: pre[0].toUpperCase() + pre.substr(1)
				};
			})(),
			/* HAS3D */
			has3d = (function () {
				var el, has3d;

				el = document.createElement("p");
				el.style["transform"] = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
				document.body.insertBefore(el, document.body.lastChild);
				has3d = window.getComputedStyle(el).getPropertyValue("transform");
				$(el).remove();

				if (has3d !== undefined) {
					return has3d !== "none";
				} else {
					return false;
				}
			})();

		/* CSS3D */
		function Css3d(e) {
			this.elem = e;
			this._init();
		}
		Css3d.prototype = {
			_init: function () {
				var e = this;
				e._addCssProps();
			},
			_raf: (function () {
				return (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					function (e) {
						return window.setTimeout(e, 1e3 / 60);
					}
				);
			})(),
			_caf: (function () {
				return (
					window.cancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					window.msCancelAnimationFrame ||
					window.oCancelAnimationFrame ||
					function (e) {
						window.clearTimeout(e);
					}
				);
			})(),
			_easing: {
				swing: function (e, t, n, r, i) {
					return -r * (t /= i) * (t - 2) + n;
				}
			},
			_prefix: (function () {
				var e = window.getComputedStyle(document.documentElement, ""),
					t = (Array.prototype.slice
						.call(e)
						.join("")
						.match(/-(moz|webkit|ms)-/) ||
						(e.OLink === "" && ["", "o"]))[1],
					n = "WebKit|Moz|MS|O".match(new RegExp("(" + t + ")", "i"))[1];
				return { dom: n, lowercase: t, css: "-" + t + "-", js: t[0].toUpperCase() + t.substr(1) };
			})(),
			_has3d: (function () {
				var e, t;
				e = document.createElement("p");
				e.style["transform"] = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
				document.body.insertBefore(e, document.body.lastChild);
				t = window.getComputedStyle(e).getPropertyValue("transform");
				$(e).remove();
				if (t !== undefined) {
					return t !== "none";
				} else {
					return false;
				}
			})(),
			_addCssProps: function () {
				var e = this,
					t = [
						{ publicName: "x", privateName: "_x", defaultValue: 0 },
						{ publicName: "y", privateName: "_y", defaultValue: 0 },
						{ publicName: "z", privateName: "_z", defaultValue: 0 },
						{ publicName: "rotX", privateName: "_rx", defaultValue: 0 },
						{ publicName: "rotY", privateName: "_ry", defaultValue: 0 },
						{ publicName: "rotZ", privateName: "_rz", defaultValue: 0 },
						{ publicName: "originX", privateName: "_ox", defaultValue: 0.5 },
						{ publicName: "originY", privateName: "_oy", defaultValue: 0.5 },
						{ publicName: "scaleX", privateName: "_scx", defaultValue: 1 },
						{ publicName: "scaleY", privateName: "_scy", defaultValue: 1 },
						{ publicName: "opacity", privateName: "_op", defaultValue: 1 }
					],
					n = 0,
					r = t.length;
				for (; n < r; n++) {
					e[t[n].publicName] = (function (t) {
						return function (n) {
							if (n === undefined)
								return e[t.privateName] !== undefined ? e[t.privateName] : t.defaultValue;
							e[t.privateName] = n;
							return e;
						};
					})(t[n]);
				}
			},
			_animate: function (e) {
				function s() {
					n = t._getValue(e.from, e.to, r, i, e.easing);
					if (e.callback) e.callback(n, r, i, e.callbackParams);
					if (e.onUpdate) e.onUpdate(n, r, i, e.onUpdateParams);
					if (r == i) {
						if (e.complete) e.complete();
						if (e.onComplete) e.onComplete();
					} else {
						e.context[e.id] = t._raf.call(window, function () {
							s();
						});
					}
					r = Math.min(i, r + 1e3 / 60);
				}
				var t = this,
					n = e.from,
					r = -e.delay || 0,
					i = !e.duration ? 1e3 : e.duration;
				if (e.context[e.id]) t._caf.call(window, e.context[e.id]);
				if (e.callback) e.callback(n, r, i, e.callbackParams);
				if (e.onUpdate) e.onUpdate(n, r, i, e.onUpdateParams);
				s();
			},
			_getValue: function (e, t, n, r, i) {
				var s = this,
					o;
				o = $.easing && $.easing[i] ? $.easing[i] : s._easing.swing;
				return o(null, Math.max(0, n), e, t - e, r);
			},
			_doFromTo: function (e, t, n, r) {
				var i = this,
					s = e || t,
					o = i.elem instanceof jQuery,
					u;
				n = $.extend(true, {}, n);
				for (u in s) {
					n = $.extend(true, {}, n);
					n.id = u + "Tween";
					n.context = i;
					n.from = [(e || {})[u], o ? i[u]() : i.elem[u]][r == "to" ? 1 : 0];
					n.to = [(t || {})[u], o ? i[u]() : i.elem[u]][r == "from" ? 1 : 0];
					n.callback = (function (e) {
						return function (t) {
							if (o) {
								i[e](t);
								i.update();
							} else {
								i.elem[e] = t;
							}
						};
					})(u);
					i[u + "TweenProps"] = n;
					i._animate(n);
				}
				return i;
			},
			set: function (e, t) {
				var n = this,
					r = 0,
					i;
				e = e.split(",");
				i = e.length;
				for (; r < i; r++) n[e[r]](t);
				return n;
			},
			to: function (e, t) {
				var n = this;
				n._doFromTo(null, e, t, "to");
				return n;
			},
			from: function (e, t) {
				var n = this;
				n._doFromTo(e, null, t, "from");
				return n;
			},
			fromTo: function (e, t, n) {
				var r = this;
				r._doFromTo(e, t, n, "fromTo");
				return r;
			},
			stop: function (e, t) {
				var n = this;
				e = e.split(",");
				for (var r in e) {
					if (t && n[e[r] + "TweenProps"]) {
						n[e[r]](n[e[r] + "TweenProps"].to);
					}
					n._caf.call(window, n[e[r] + "Tween"]);
				}
				return n;
			},
			end: function (e) {
				var t = this;
				t.stop(e, true);
				return t;
			},
			update: function () {
				var e = this,
					t = [],
					n;
				t.push("translate3d(" + e.x() + "px, " + e.y() + "px, " + e.z() + "px)");
				t.push("rotateX(" + e.rotX() + "deg)");
				t.push("rotateY(" + e.rotY() + "deg)");
				t.push("rotateZ(" + e.rotZ() + "deg)");
				t.push("scaleX(" + e.scaleX() + ")");
				t.push("scaleY(" + e.scaleY() + ")");
				n = {};
				n[e._prefix.css + "transform"] = t.join(" ");
				n[e._prefix.css + "transform-origin"] = e.originX() * 100 + "% " + e.originY() * 100 + "%";
				n["opacity"] = e.opacity();
				e.elem.css(n);
				return e;
			}
		};

		/* -------------------------------------------------------
     /* PLUGIN
     /* ------------------------------------------------------- */

		$.fn[pluginName] = function (options) {
			var args = Array.prototype.slice.call(arguments, 1);

			return $(this).each(function () {
				var instance = $(this).data("_" + pluginName + "Instance");

				if (typeof options === "string" && !instance) return;

				instance = instance || new MagicWall(this);

				instance.init(options, args);

				$(this).data("_" + pluginName + "Instance", instance);
			});
		};

		/* ------------------------------------------------------- */
		/* DEFAULT OPTIONS
     /* ------------------------------------------------------- */

		$.fn[pluginName].options = {
			service: false,
			jsonUrl: false,
			appKey: false,
			userID: false,
			photoSetID: false,
			photoCount: 50,
			photoSize: 2 /* 1:4 */,
			maxItemWidth: 240,
			maxItemHeight: 160,
			columnsCount: false,
			rowsCount: false,
			minColumnsCount: 1,
			minRowsCount: 1,
			maxColumnsCount: false,
			maxRowsCount: false,
			thumbSizing: "cover",
			perspective: 600,
			delay: 1000,
			loadingMode:
				"normal" /* normal: when the item is visible | chain: one by one (visible only) */,
			paused: false,
			useCache: true,
			preloadBeforeSwitch: false,
			animations: "*",
			excludedAnimations: "",
			pauseOnHover: false /* all | item | false */,
			fixedClass: "fixed",
			breakpoints: false /* options for breakpoints should be passed as objecs. Ex: options_640: { delay: 1500 } */,
			autoUpdateOnResize: 50,
			duration: 600,
			easing: "easeInOutCubic",
			rollInXDuration: false,
			rollInXEasing: false,
			rollInYDuration: false,
			rollInYEasing: false,
			rollOutXDuration: false,
			rollOutXEasing: false,
			rollOutYDuration: false,
			rollOutYEasing: false,
			flipXDuration: false,
			flipXEasing: false,
			flipYDuration: false,
			flipYEasing: false,
			slideXDuration: false,
			slideXEasing: false,
			slideYDuration: false,
			slideYEasing: false,
			slideRowDuration: false,
			slideRowEasing: false,
			slideColumnDuration: false,
			slideColumnEasing: false,
			fadeDuration: false,
			fadeEasing: false
		};

		/* ------------------------------------------------------- */
		/* SERVICES
     /* ------------------------------------------------------- */

		$.fn[pluginName].services = {
			_json: {
				getURL: function (o) {
					return o.jsonUrl || "";
				},

				processJSON: function (json, o) {
					var p = json.photos,
						i = 0,
						r = [];

					if (p) {
						for (; i < p.length; i++) {
							r.push(p[i].image_url);
						}

						return r;
					}

					return false;
				}
			},

			_flickr: {
				getURL: function (o) {
					var url = "https://api.flickr.com/services/rest/?method=";

					if (o.userID) {
						url += "flickr.people.getPublicPhotos&user_id=" + o.userID;
					} else if (o.photoSetID) {
						url += "flickr.photosets.getPhotos&media=photos&photoset_id=" + o.photoSetID;
					}

					url += "&format=json&nojsoncallback=1&per_page=" + o.photoCount + "&api_key=" + o.appKey;

					return url;
				},

				processJSON: function (json, o) {
					var p = json.photos || json.photoset,
						i = 0,
						r = [],
						sizes = ["q", "m", "n", "z"];

					if (p) {
						p = p.photo;

						for (; i < p.length; i++) {
							r.push(
								"http://farm" +
									p[i].farm +
									".static.flickr.com/" +
									p[i].server +
									"/" +
									p[i].id +
									"_" +
									p[i].secret +
									"_" +
									sizes[o.photoSize - 1] +
									".jpg"
							);
						}

						return r;
					}

					return false;
				}
			},

			_500px: {
				getURL: function (o) {
					return (
						"https://api.500px.com/v1/photos?feature=user&username=" +
						o.userID +
						"&rpp=" +
						o.photoCount +
						"&image_size=" +
						o.photoSize +
						"&consumer_key=" +
						o.appKey
					);
				},

				processJSON: function (json, o) {
					var p = json.photos,
						i = 0,
						r = [];

					if (p) {
						for (; i < p.length; i++) {
							r.push(p[i].image_url);
						}

						return r;
					}

					return false;
				}
			},

			_instagram: {
				getURL: function (o) {
					return (
						"https://api.instagram.com/v1/users/" +
						o.userID +
						"/media/recent?count=" +
						o.photoCount +
						"&client_id=" +
						o.appKey +
						"&callback=?"
					);
				},

				processJSON: function (json, o) {
					var p = json.data,
						i = 0,
						r = [],
						sizes = ["thumbnail", "thumbnail", "low_resolution", "standard_resolution"];

					if (p) {
						for (; i < p.length; i++) {
							r.push(p[i].images[sizes[o.photoSize - 1]].url);
						}

						return r;
					}

					return false;
				}
			}
		};

		/* ------------------------------------------------------- */
		/* OBJECTS
     /* ------------------------------------------------------- */

		/* --- MagicWall --------------------- */

		function MagicWall(elem) {
			this.elem = $(elem);
		}

		MagicWall.prototype = {
			init: function (options, args) {
				var t = this;

				/* check if the user is making an api call */
				if (t.api(options, args)) return t;

				/* store original HTML */
				t.originalHTML = t.elem.clone(true, true);

				/* init the manager */
				t.manager = new MagicWallManager(t);

				/* set default options */
				t.userOptions = $.extend(true, {}, $.fn[pluginName].options, options);

				/* handle data attributes */
				for (var p in $.fn[pluginName].options) {
					if (t.elem.data(p.toLowerCase()) !== undefined) {
						t.userOptions[p] = t.elem.data(p.toLowerCase());
					}
				}

				t.updateOptions();

				/* setup */
				t.setupStart();

				window.s = t;

				return t;
			},

			updateOptions: function () {
				var t = this,
					w = t.elem.outerWidth(),
					bp,
					i,
					n,
					o;

				bp = t.userOptions.breakpoints ? t.userOptions.breakpoints.split(",") : [];

				n = bp.length;

				for (i = 0; i < n; i++) {
					if (w <= bp[i] && t.userOptions["options_" + bp[i]]) {
						o = t.userOptions["options_" + bp[i]];
					}
				}

				t.setOptions(o || t.userOptions);

				return t;
			},

			setOptions: function (options) {
				var t = this;

				/* set default options */
				t.options = $.extend(true, {}, $.fn[pluginName].options, options || t.options);

				return t;
			},

			setupStart: function () {
				var t = this;

				/* update items list */
				t.updateItemsList();

				/* handle mouse hover */
				t.elem
					.on("mouseover", selectors.grid + "," + selectors.gridItem, function () {
						$(this).addClass(selectors.hover.slice(1));
					})
					.on("mouseout", selectors.grid + "," + selectors.gridItem, function () {
						$(this).removeClass(selectors.hover.slice(1));
						if (t.options.pauseOnHover == "all") t.manager.reset();
					});

				/* do we need to load any external JSON data? */
				if (t.options.service) {
					/* yes, we do */
					t.loadJSON(t.options.service);
				} else {
					/* no, we do not. finish the setup */
					t.setupComplete();
				}

				return t;
			},

			updateItemsList: function () {
				var t = this;

				t.itemsList = t.elem.find(selectors.grid);
				t.items = t.itemsList.children();

				return t;
			},

			loadJSON: function (service) {
				var t = this,
					o = t.options,
					svc = "_" + service,
					url = $.fn[pluginName].services[svc].getURL(o);

				t.elem.addClass(selectors.loading.slice(1));

				/* load the data */
				$.getJSON(url, function (json) {
					t.elem.removeClass(selectors.loading.slice(1));

					/* build dom items */
					t.buildDOMItems($.fn[pluginName].services[svc].processJSON(json, o));

					/* finish setup */
					t.setupComplete();
				});

				return t;
			},

			buildDOMItems: function (images) {
				var t = this,
					i = 0,
					template;

				/* grab a copy of the user-defined item template */
				template = t.items.eq(0).clone();

				/* no template? then use a simple list item element */
				if (!template.length) template = $("<li/>");

				/* remove existing items */
				t.itemsList.empty();

				/* build the dom items */
				for (; i < images.length; i++) {
					t.itemsList.append(template.clone().attr("data-thumb", images[i]));
				}

				t.updateItemsList();

				return t;
			},

			setupComplete: function () {
				var t = this;

				/* create item objects */
				t.buildItems(t.items);

				/* build the grid */
				t.gridBuild();

				/* load items */
				t.loadItems();

				/* initialize the manager */
				t.manager.init();

				/* handle auto-resizing */
				if (t.options.autoUpdateOnResize !== false && t.options.autoUpdateOnResize > 0) {
					$(window).resize(function () {
						clearTimeout(t.autoUpdateOnResizeTimer);
						t.autoUpdateOnResizeTimer = setTimeout(function () {
							t.update();
						}, t.options.autoUpdateOnResize);
					});
				}

				return t;
			},

			buildItems: function (items) {
				var t = this;

				items.each(function () {
					var item = new MagicWallItem(t);
					item.init($(this));
					item.setIndex($(this).index());
				});

				return t;
			},

			gridBuild: function () {
				var t = this,
					i = 0;

				t.gridCalculations();

				t.items.removeClass(selectors.gridItem.slice(1));

				for (; i < t.xCount * t.yCount; i++) {
					t.items.filter("[data-index=" + i + "]").addClass(selectors.gridItem.slice(1));
				}

				t.gridLayout();

				return t;
			},

			gridCalculations: function () {
				var t = this,
					baseWidth = t.elem.width(),
					baseHeight = t.elem.height(),
					xCountMin,
					xCountMax,
					yCountMin,
					yCountMax,
					px,
					py,
					n,
					i;

				/* calculate the number of horizontal items */
				if (t.options.columnsCount) {
					t.xCount = t.options.columnsCount;
				} else {
					/* find the number of items that can fit in the available width */
					xCountMin = Math.floor(baseWidth / t.options.maxItemWidth);
					xCountMax = Math.ceil(baseWidth / t.options.maxItemWidth);
					t.xCount = baseWidth / xCountMin > t.options.maxItemWidth ? xCountMax : xCountMin;

					/* make sure xCount does not exceed limits */
					t.xCount = Math.max(t.options.minColumnsCount || 1, t.xCount);
					if (t.options.maxColumnsCount) t.xCount = Math.min(t.options.maxColumnsCount, t.xCount);
				}

				/* calculate the number of vertical items */
				if (t.options.rowsCount) {
					t.yCount = t.options.rowsCount;
				} else {
					/* find the number of items that can fit in the available height */
					yCountMin = Math.floor(baseHeight / t.options.maxItemHeight);
					yCountMax = Math.ceil(baseHeight / t.options.maxItemHeight);
					t.yCount = baseHeight / yCountMin > t.options.maxItemHeight ? yCountMax : yCountMin;

					/* make sure yCount does not exceed limits */
					t.yCount = Math.max(t.options.minRowsCount || 1, t.yCount);
					if (t.options.maxRowsCount) t.yCount = Math.min(t.options.maxRowsCount, t.yCount);
				}

				/* calculate item dimensions */
				t.itemWidth = Math.ceil(baseWidth / t.xCount);
				t.itemHeight = Math.ceil(baseHeight / t.yCount);

				return t;
			},

			gridLayout: function () {
				var t = this,
					px,
					py,
					grid,
					obj;

				grid = t.items.hide().filter(selectors.gridItem);

				/* place items on the grid */
				grid.each(function () {
					obj = t.getItemObject($(this));
					px = obj.index % t.xCount;
					py = Math.floor(obj.index / t.xCount);
					obj.setPosition(px, py).elem.show();
				});

				return t;
			},

			loadItems: function (index) {
				var t = this,
					i = index || 0,
					g = t.items.filter(selectors.gridItem),
					n = g.length,
					more,
					item;

				/* loads item at index i */
				function _loadItem(i) {
					/* check if there are still more items to load */
					more = i <= g.length - 1;

					/* there isn't? ok, stop and return */
					if (!more) return;

					item = t.getItemObject(g.eq(i));

					/* there are more items to load */
					if (item.loaded) {
						/* if this item is already loaded, go ahead and load the next item (if there is a next item) */
						if (more) _loadItem(i + 1);
					} else {
						/* when this item loads, go ahead and load the next item */
						item.elem.bind("loaded." + pluginSlug, function () {
							_loadItem(i + 1);
						});

						/* load this item, if it is not already loading */
						if (more && !item.loading) item.load();
					}
				}

				/* start loading items */
				if (t.options.loadingMode == "normal") {
					/* load all at once */
					g.each(function () {
						t.getItemObject($(this)).load();
					});
				} else {
					/* start the loading chain by loading the first item */
					_loadItem(i);
				}

				return t;
			},

			excludeAnimations: function (animations) {
				var t = this,
					r = [],
					i = 0,
					a;

				if (t.options.excludedAnimations) {
					a = t.options.excludedAnimations.split(",");
				} else {
					return animations;
				}

				for (; i < animations.length; i++) {
					if (a.indexOf(animations[i]) == -1) {
						r.push(animations[i]);
					}
				}

				return r;
			},

			parseAnimationOptions: function (o) {
				var t = this,
					anim,
					animations = [
						"flipX",
						"flipY",
						"rollInX",
						"rollInY",
						"rollOutX",
						"rollOutY",
						"slideX",
						"slideY",
						"slideRow",
						"slideColumn",
						"fade"
					];

				if (o.animation) {
					anim = o.animation;
				} else {
					if (t.options.animations == "*") {
						anim = t.excludeAnimations(animations);
						anim = (Math.random() < 0.5 ? "" : "-") + anim[Math.floor(Math.random() * anim.length)];
					} else {
						if (!t.selectedAnimations || !t.selectedAnimations.length)
							t.selectedAnimations = t.options.animations.split(":");

						anim = t.excludeAnimations(
							t.selectedAnimations[0] == "*" ? animations : t.selectedAnimations[0].split(",")
						);
						anim = anim[Math.floor(Math.random() * anim.length)];

						t.selectedAnimations.splice(0, 1);
					}
				}

				if (animations.indexOf(anim.replace("-", "")) == -1) anim = "fade";

				return $.extend(true, o, {
					animation: anim,
					type: anim.replace(/[XY-]/g, ""),
					dir: anim.indexOf("-", 0) == 0 ? -1 : 1,
					axis: anim.replace(/[^XY]/g, ""),
					duration:
						o.duration || t.options[anim.replace("-", "") + "Duration"] || t.options.duration,
					easing: o.easing || t.options[anim.replace("-", "") + "Easing"] || t.options.easing
				});
			},

			switchItems: function (indexA, indexB, animation, duration, easing) {
				var t = this,
					objB,
					g,
					h,
					o;

				/* parse animation options */
				o = t.parseAnimationOptions({
					animation: animation,
					duration: duration,
					easing: easing
				});

				/* update items list */
				t.updateItemsList();

				/* get grid and hidden items */
				t.g = g = t.items.filter(selectors.gridItem);
				t.h = h = t.items.not(g);

				if (t.options.pauseOnHover == "all" && t.itemsList.hasClass(selectors.hover.slice(1)))
					return false;
				if (t.options.pauseOnHover == "item") g = t.excludeFromSwitch(g, selectors.hover, o);

				/* exclude fixed items */
				g = t.excludeFromSwitch(g, "." + t.options.fixedClass, o);

				/* do not continue if there are not enough items (but come back later) */
				if (!g.length || !h.length) return t.manager.reset();

				/* get random items */
				if (indexA === undefined)
					indexA = g.eq(Math.floor(Math.random() * g.length)).attr("data-index");
				if (indexB === undefined)
					indexB = h.eq(Math.floor(Math.random() * h.length)).attr("data-index");

				/* do switch */
				objB = t.getItemObject(t.getItem(indexB));

				if (t.options.preloadBeforeSwitch && objB.loaded !== true) {
					objB.elem.bind("loaded." + pluginSlug, function () {
						objB.elem.unbind("loaded." + pluginSlug);
						t.doSwitchItems(indexA, indexB, o);
					});
					objB.load();
				} else {
					t.doSwitchItems(indexA, indexB, o);
				}
			},

			excludeFromSwitch: function (items, selector, o) {
				var t = this,
					obj,
					i;

				items.filter(selector).each(function () {
					if (o.type == "rollOut") {
						items = items.not(
							t.getItem($(this).attr("data-index") - o.dir * (o.axis == "X" ? 1 : t.xCount))
						);
					}

					if (o.type == "slideRow" || o.type == "slideColumn") {
						obj = t.getItemObject($(this));

						for (i = 0; i < (o.type == "slideRow" ? t.xCount : t.yCount); i++) {
							items = items.not(
								t.getItem(
									t.getIndex(o.type == "slideRow" ? i : obj.px, o.type == "slideRow" ? obj.py : i)
								)
							);
						}
					}

					items = items.not($(this));
				});

				return items;
			},

			doSwitchItems: function (indexA, indexB, o) {
				var t = this,
					itemA,
					itemB,
					itemC,
					objA,
					objB,
					objC,
					i;

				/* get dom items */
				itemA = t.getItem(indexA);
				itemB = t.getItem(indexB);

				/* get item objects */
				objA = t.getItemObject(itemA);
				objB = t.getItemObject(itemB);

				itemA.css("z-index", 9999);
				itemB.css("z-index", 9998);

				o.onComplete = function () {
					itemA.hide();
					objA.reset();
					t.update();
				};

				var correctionAngle =
					(180 *
						Math.atan(
							(0.5 * (o.axis == "Y" ? t.itemHeight : t.itemWidth)) / t.options.perspective
						)) /
					Math.PI;

				/* animate */
				switch (o.type) {
					case "flip":
						t.swapItems(objA, objB);

						objB.setPosition(objA.px, objA.py).load().elem.show();

						i = 0;
						o.onUpdate = (function (objA) {
							return function (v) {
								if (Math.abs(v) >= 90 && i == 0) {
									i = 1;
									objA.elem.hide();
								}

								objB.css3d["rot" + o.axis](v - o.dir * 180).update();
							};
						})(objA);

						objA.css3d.fromTo(
							{
								X: { rotX: 0 },
								Y: { rotY: 0 }
							}[o.axis],
							{
								X: { rotX: o.dir * 180 },
								Y: { rotY: o.dir * 180 }
							}[o.axis],
							o
						);
						break;

					/* ------------------------------------------------------------------------------------------- */

					case "rollIn":
						itemA.css("z-index", 9998);
						itemB.css("z-index", 9999);

						objB.setPosition(objA.px, objA.py).load().elem.show();

						t.swapItems(objA, objB);

						o.delay = o.duration * 0.25;

						objB.css3d["origin" + o.axis](o.dir > 0 ? 0 : 1).fromTo(
							{
								X: { rotY: o.dir * (90 + correctionAngle) },
								Y: { rotX: -o.dir * (90 + correctionAngle) }
							}[o.axis],
							{
								X: { rotY: 0 },
								Y: { rotX: 0 }
							}[o.axis],
							o
						);

						delete o.onUpdate;
						delete o.onComplete;

						objB.css3d.fromTo({ opacity: 0 }, { opacity: 1 }, o);

						o.delay = 0;

						objA.css3d["origin" + o.axis](o.dir > 0 ? 1 : 0).fromTo(
							{
								X: { rotY: 0 },
								Y: { rotX: 0 }
							}[o.axis],
							{
								X: { rotY: -o.dir * (90 + correctionAngle) },
								Y: { rotX: o.dir * (90 + correctionAngle) }
							}[o.axis],
							o
						);

						objA.css3d.fromTo({ opacity: 1 }, { opacity: 0 }, o);
						break;

					/* ------------------------------------------------------------------------------------------- */

					case "rollOut":
						objB.setPosition(objA.px, objA.py).load().elem.show();

						if (
							{
								X: (objA.px > 0 && o.dir < 0) || (objA.px < t.xCount - 1 && o.dir > 0),
								Y: (objA.py > 0 && o.dir < 0) || (objA.py < t.yCount - 1 && o.dir > 0)
							}[o.axis]
						) {
							itemC = t.getItem(
								t.getIndex(
									{
										X: objA.px + o.dir,
										Y: objA.px
									}[o.axis],
									{
										X: objA.py,
										Y: objA.py + o.dir
									}[o.axis]
								)
							);
							objC = t.getItemObject(itemC);
						}

						t.swapItems(objA, objB);
						if (itemC) t.swapItems(objA, objC);

						i = 0;
						o.onUpdate = (function (a) {
							return function (v) {
								if (itemC) {
									if (Math.abs(v) >= 90 - correctionAngle && i == 0) {
										i = 1;
										a.css3d["scale" + o.axis](-1)
											["origin" + o.axis](o.dir > 0 ? 0 : 1)
											[o.axis.toLowerCase()](
												{
													X: t.itemWidth * o.dir,
													Y: t.itemHeight * o.dir
												}[o.axis]
											)
											.update();
									}
								} else {
									a.css3d.opacity(1 - Math.max(0, (Math.abs(v) - 40) / (120 - 40))).update();
								}
							};
						})(objA);

						objA.css3d["origin" + o.axis](o.dir > 0 ? 1 : 0).fromTo(
							{
								X: { rotY: 0 },
								Y: { rotX: 0 }
							}[o.axis],
							{
								X: { rotY: o.dir * (itemC ? 180 : 120) },
								Y: { rotX: -o.dir * (itemC ? 180 : 120) }
							}[o.axis],
							o
						);

						if (itemC) {
							itemA = itemC;
							objA = objC;
						}
						break;

					/* ------------------------------------------------------------------------------------------- */

					case "slide":
						t.swapItems(objA, objB);

						itemA.css("overflow", "hidden");
						itemB.css("overflow", "hidden");

						objB.setPosition(objA.px, objA.py).load().elem.show();

						objA.css3d.fromTo(
							{
								X: { x: 0 },
								Y: { y: 0 }
							}[o.axis],
							{
								X: { x: (o.dir > 0 ? 1 : -1) * t.itemWidth },
								Y: { y: (o.dir > 0 ? 1 : -1) * t.itemHeight }
							}[o.axis],
							o
						);

						objB.css3d.fromTo(
							{
								X: { x: (o.dir > 0 ? -1 : 1) * t.itemWidth },
								Y: { y: (o.dir > 0 ? -1 : 1) * t.itemHeight }
							}[o.axis],
							{
								X: { x: 0 },
								Y: { y: 0 }
							}[o.axis],
							o
						);
						break;

					/* ------------------------------------------------------------------------------------------- */

					case "slideRow":
						/* get the last/first index in the row */
						itemA = t.getItem(t.getIndex(o.dir > 0 ? t.xCount - 1 : 0, objA.py));
						objA = t.getItemObject(itemA);

						itemA.css("overflow", "hidden");
						itemB.css("overflow", "hidden");

						/* swap items */
						t.swapItems(objA, objB);

						/* shift row items */
						for (i = 0; i < t.xCount - 1; i++) {
							var item = t.getItem(objB.index + (o.dir > 0 ? -1 : 1) * (i + 1)),
								obj = t.getItemObject(item);

							obj.setIndex(obj.index + (o.dir > 0 ? 1 : -1));
						}

						/* place the new item first/last in the row */
						objB.setIndex(objB.index + (o.dir > 0 ? -1 : 1) * (t.xCount - 1));
						objB
							.setPosition(o.dir > 0 ? 0 : t.xCount - 1, objA.py)
							.load()
							.elem.show();

						/* handle row animation */
						o.onUpdate = function (v) {
							for (i = 0; i < t.xCount - 1; i++) {
								var item = t.getItem(objB.index + (o.dir > 0 ? 1 : -1) * (i + 1)),
									obj = t.getItemObject(item);

								obj.css3d.x(v).update();
							}

							objB.css3d.x(v + (o.dir > 0 ? -1 : 1) * t.itemWidth).update();
						};

						/* start the animation */
						objA.css3d.to({ x: (o.dir > 0 ? 1 : -1) * t.itemWidth }, o);
						break;

					/* ------------------------------------------------------------------------------------------- */

					case "slideColumn":
						/* get the last/first index in the column */
						itemA = t.getItem(t.getIndex(objA.px, o.dir > 0 ? t.yCount - 1 : 0));
						objA = t.getItemObject(itemA);

						itemA.css("overflow", "hidden");
						itemB.css("overflow", "hidden");

						/* swap items */
						t.swapItems(objA, objB);

						/* shift column items */
						for (i = 0; i < t.yCount - 1; i++) {
							var item = t.getItem(objB.index + (o.dir > 0 ? -1 : 1) * (i + 1) * t.xCount),
								obj = t.getItemObject(item);

							obj.setIndex(obj.index + (o.dir > 0 ? 1 : -1) * t.xCount);
						}

						/* place the new item first/last in the column */
						objB.setIndex(objB.index + (o.dir > 0 ? -1 : 1) * t.xCount * (t.yCount - 1));
						objB
							.setPosition(objB.index % t.xCount, o.dir > 0 ? 0 : t.yCount - 1)
							.load()
							.elem.show();

						/* handle column animation */
						o.onUpdate = function (v) {
							for (i = 0; i < t.yCount - 1; i++) {
								var item = t.getItem(objB.index + (o.dir > 0 ? 1 : -1) * (i + 1) * t.xCount),
									obj = t.getItemObject(item);

								obj.css3d.y(v).update();
							}

							objB.css3d.y(v + (o.dir > 0 ? -1 : 1) * t.itemHeight).update();
						};

						/* start the animation */
						objA.css3d.to({ y: (o.dir > 0 ? 1 : -1) * t.itemHeight }, o);
						break;

					/* ------------------------------------------------------------------------------------------- */

					default:
					case "fade":
						t.swapItems(objA, objB);

						objB.setPosition(objA.px, objA.py).load().elem.show();

						objA.css3d.fromTo({ opacity: 1 }, { opacity: 0 }, o);
						break;
				}

				/* update classes */
				itemA.removeClass(selectors.gridItem.slice(1));
				itemB.addClass(selectors.gridItem.slice(1));

				return t;
			},

			swapItems: function (objA, objB) {
				var t = this,
					tmp;

				/* switch indices */
				tmp = objA.index;
				objA.setIndex(objB.index);
				objB.setIndex(tmp);

				return t;
			},

			appendItems: function (items) {
				var t = this,
					newItems = $(items).appendTo(t.items.parent());

				t.updateItemsList();

				t.buildItems(newItems);

				t.update();

				return t;
			},

			removeItems: function (items) {
				var t = this;

				$(items).remove();

				t.updateItemsList();

				t.update();

				return t;
			},

			resetItems: function () {
				var t = this;

				t.items.each(function () {
					t.getItemObject($(this)).reset();
				});

				return t;
			},

			getItem: function (index) {
				return this.items.filter("[data-index='" + index + "']");
			},

			getItemObject: function (elem) {
				return elem.get(0)["_" + pluginName + "Item"];
			},

			getIndex: function (px, py) {
				return py * this.xCount + px;
			},

			update: function () {
				var t = this;

				/* update options */
				t.updateOptions();

				/* reset all items */
				t.resetItems();

				/* reset the manager and call the next tick */
				t.manager.reset();

				/* update the grid */
				t.gridBuild();

				/* load newly added items */
				t.loadItems();

				return t;
			},

			destroy: function () {
				var t = this;

				t.manager.stop();

				t.elem.replaceWith(t.originalHTML);

				return t;
			},

			api: function (command, args) {
				var t = this;

				if (typeof command === "string") {
					switch (command) {
						case "appendItems":
							t.appendItems(args[0]);
							break;

						case "removeItems":
							t.removeItems(args[0]);
							break;

						case "update":
							t.update();
							break;

						case "destroy":
							t.destroy();
							break;

						case "start":
							t.manager.start();
							break;

						case "stop":
							t.manager.stop();
							break;

						case "switchItem":
							t.switchItems(args[0], undefined, args[1], args[2], args[3]);
							break;

						case "option":
							var o = {};

							if (typeof args[0] === "string") {
								o[args[0]] = args[1];
							} else {
								o = args[0];
							}

							t.userOptions = $.extend(true, {}, t.userOptions, o);
							t.update();
							break;
					}

					return true;
				}

				return false;
			}
		};

		/* --- MagicWallManager --------------------- */

		function MagicWallManager(b) {
			var t = this;

			/* get ref to the base */
			t.base = b;
		}

		MagicWallManager.prototype = {
			init: function () {
				var t = this;

				t.paused = t.base.options.paused;

				if (!t.paused) t.start();

				return t;
			},

			reset: function () {
				var t = this,
					paused = t.paused;

				t.stop();
				if (!paused) t.start();

				return t;
			},

			start: function () {
				var t = this;

				t.stop().tick();
				t.paused = false;

				return t;
			},

			stop: function () {
				var t = this;

				t.paused = true;
				clearTimeout(t.timer);

				return t;
			},

			tick: function () {
				var t = this,
					o = t.base.options;

				t.timer = setTimeout(function () {
					if (!t.paused) t.base.switchItems();
				}, o.delay);
			}
		};

		/* --- MagicWallItem --------------------- */

		function MagicWallItem(b) {
			var t = this;

			/* get ref to the base */
			t.base = b;
		}

		MagicWallItem.prototype = {
			init: function (elem) {
				var t = this;

				/* get ref to the dom elem */
				t.elem = $(elem);

				/* store ref to the object */
				t.elem.get(0)["_" + pluginName + "Item"] = t;

				/* apply perspective */
				t.elem.css(prefix.css + "perspective", t.base.options.perspective);

				/* handle mouse actions */
				t.elem.on("mouseenter", { t: t }, t.handleMouseOver);
				t.elem.on("mouseleave", { t: t }, t.handleMouseOut);
				t.elem.on("touchend", { t: t }, t.handleTouchEnd);

				/* wrap content */
				t.content = t.elem
					.wrapInner($("<div/>").addClass(selectors.wrap.slice(1)))
					.children()
					.eq(0);

				/* create the css3d object */
				t.css3d = new Css3d(t.content);

				return t;
			},

			handleMouseOver: function (e) {
				var t = e.data.t;

				if (!t.mouseEvents) return;

				t.elem.addClass(selectors.hover).siblings().removeClass(selectors.hover);
			},

			handleMouseOut: function (e) {
				var t = e.data.t;

				if (!t.mouseEvents) return;

				t.elem.removeClass(selectors.hover);
			},

			handleTouchEnd: function (e) {
				var t = e.data.t;

				if (!t.mouseEvents) return;

				if (!t.elem.hasClass(selectors.hover)) {
					e.preventDefault();
					t.handleMouseOver(e);
					return false;
				}
			},

			load: function () {
				var t = this,
					src = t.elem.data("thumb"),
					img = new Image();

				if (t.loading || t.loaded || !src) {
					if (t.loaded) t.elem.trigger("loaded." + pluginSlug).unbind("loaded." + pluginSlug);
					return t;
				}

				t.loading = true;

				t.elem.addClass(selectors.loading.slice(1));

				img.onload = function () {
					t.content.append(
						$("<div/>")
							.addClass(selectors.thumb.slice(1))
							.css({
								// "background-image":
								// 	"url(" +
								// 	(src +
								// 		(t.base.options.useCache ? "" : "?sid=" + Math.floor(Math.random() * 9e10))) +
								// 	")",
								"background-image": `url(${src})`,
								"background-position": "center center",
								"background-repeat": "no-repeat",
								"background-size": t.base.options.thumbSizing,
								height: "inherit",
								width: "inherit"
							})
							.fadeTo(0, 0)
							.fadeTo(300, 1)
					);

					t.loading = false;
					t.loaded = true;

					t.elem.removeClass(selectors.loading.slice(1));

					t.elem.trigger("loaded." + pluginSlug).unbind("loaded." + pluginSlug);
				};

				img.src = src;

				return t;
			},

			setPosition: function (px, py) {
				var t = this;

				t.px = px;
				t.py = py;

				t.update();

				return t;
			},

			setIndex: function (i) {
				var t = this;

				t.index = i;
				t.elem.attr("data-index", i);

				return t;
			},

			update: function () {
				var t = this;

				t.elem.css({
					width: t.base.itemWidth,
					height: t.base.itemHeight,
					left: t.px * t.base.itemWidth,
					top: t.py * t.base.itemHeight
				});

				return t;
			},

			reset: function () {
				var t = this;

				/* reset z-index and overflow */
				t.elem.css({
					"z-index": 0,
					overflow: "visible"
				});

				/* reset 3d transformations and opacity */
				t.css3d
					.stop("x,y,z,rotX,rotY,rotZ,originX,originY,scaleX,scaleY,opacity")
					.set("x,y,z,rotX,rotY,rotZ", 0)
					.set("originX,originY", 0.5)
					.set("scaleX,scaleY", 1)
					.opacity(1)
					.update();

				return t;
			}
		};
	})(jQuery, window, document);
}
