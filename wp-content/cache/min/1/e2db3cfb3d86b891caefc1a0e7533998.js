/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+o[a] < +n[a])
                    return 1;
                if (+n[a] < +o[a])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    s.migrateDisablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            t[arguments[e]] = !0
    }
    ,
    s.migrateEnablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            delete t[arguments[e]]
    }
    ,
    s.migrateIsPatchEnabled = function(e) {
        return !t[e]
    }
    ,
    n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var o = {};
    function u(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0,
        s.migrateWarnings.push(t + " [" + e + "]"),
        r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t),
        s.migrateTrace && r.trace && r.trace()))
    }
    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n, o),
                r
            },
            set: function(e) {
                u(n, o),
                r = e
            }
        })
    }
    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function() {
            return o && u(n, o),
            (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }
    function c(e, t, r, n, o) {
        if (!o)
            throw new Error("No warning message provided");
        return a(e, t, r, n, o),
        0
    }
    function i(e, t, r, n) {
        return a(e, t, r, n),
        0
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        o = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
    var d, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in i(s.fn, "init", function(e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        m.apply(this, t)
    }, "selector-empty-id"),
    s.fn.init.prototype = s.fn,
    i(s, "find", function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(g, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return y.apply(this, r)
    }, "selector-hash"),
    y)
        Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(s.fn, "size", function() {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"),
    c(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"),
    c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"),
    c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && c(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(v, "$1")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (c(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"),
    c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (c(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }),
    c(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"),
    c(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"),
    c(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")),
    s.ajax && (l = s.ajax,
    p = /(=)\?(?=&|$)|\?\?/,
    i(s, "ajax", function() {
        var e = l.apply(this, arguments);
        return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),
        c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),
        c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),
        e
    }, "jqXHR-methods"),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr
      , b = s.fn.toggleClass
      , w = /\S+/g;
    function x(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    i(s.fn, "removeAttr", function(e) {
        var r = this
          , n = !1;
        return s.each(e.match(w), function(e, t) {
            s.expr.match.bool.test(t) && r.each(function() {
                if (!1 !== s(this).prop(t))
                    return !(n = !0)
            }),
            n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        j.apply(this, arguments)
    }, "removeAttr-bool"),
    i(s.fn, "toggleClass", function(t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var Q, A, R = !1, C = /^[a-z]/, N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return R = !0,
            e = r.apply(this, arguments),
            R = !1,
            e
        }
        )
    }),
    i(s, "swap", function(e, t, r, n) {
        var o, a, i = {};
        for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"),
        t)
            i[a] = e.style[a],
            e.style[a] = t[a];
        for (a in o = r.apply(e, n || []),
        t)
            e.style[a] = i[a];
        return o
    }, "swap"),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return u("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    e("4.0.0") ? (A = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A,{
        get: function() {
            return u("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.get.apply(this, arguments)
        },
        set: function() {
            return u("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    }) : s.cssNumber = A) : A = s.cssNumber,
    Q = s.fn.css,
    i(s.fn, "css", function(e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(o, e, t)
        }),
        this) : ("number" == typeof t && (r = x(e),
        n = r,
        C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        Q.apply(this, arguments))
    }, "css-number");
    var S, P, k, H, E = s.data;
    i(s, "data", function(e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && E.call(this, e),
            o = {},
            t)
                a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a),
                n[a] = t[a]) : o[a] = t[a];
            return E.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : E.apply(this, arguments)
    }, "data-camelCase"),
    s.fx && (k = s.Tween.prototype.run,
    H = function(e) {
        return e
    }
    ,
    i(s.Tween.prototype, "run", function() {
        1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = H),
        k.apply(this, arguments)
    }, "easing-one-arg"),
    S = s.fx.interval,
    P = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u("fx-interval", P),
            s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function(e) {
            u("fx-interval", P),
            S = e
        }
    }));
    var M = s.fn.load
      , q = s.event.add
      , O = s.event.fix;
    s.event.props = [],
    s.event.fixHooks = {},
    r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),
    i(s.event, "fix", function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0,
        u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return t = O.call(this, e),
        n && n.filter ? n.filter(t, e) : t
    }, "event-old-patch"),
    i(s.event, "add", function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"),
        q.apply(this, arguments)
    }, "load-after-event"),
    s.each(["load", "unload", "error"], function(e, t) {
        i(s.fn, t, function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }, "shorthand-removed-v3")
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        c(s.fn, r, function(e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && u("ready-event", "'ready' event is deprecated")
        }
    },
    c(s.fn, "bind", function(e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"),
    c(s.fn, "unbind", function(e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"),
    c(s.fn, "delegate", function(e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"),
    c(s.fn, "undelegate", function(e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"),
    c(s.fn, "hover", function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated");
    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.migrateEnablePatches("self-closed-tags")
    }
    ,
    i(s, "htmlPrefilter", function(e) {
        var t, r;
        return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t),
        e.replace(F, "<$1></$2>")
    }, "self-closed-tags"),
    s.migrateDisablePatches("self-closed-tags");
    var D, W, _, I = s.fn.offset;
    return i(s.fn, "offset", function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }, "offset-valid-elem"),
    s.ajax && (D = s.param,
    i(s, "param", function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        D.call(this, e, t)
    }, "param-ajax-traditional")),
    c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
    s.Deferred && (W = s.Deferred,
    _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    i(s, "Deferred", function(e) {
        var a = W()
          , i = a.promise();
        function t() {
            var o = arguments;
            return s.Deferred(function(n) {
                s.each(_, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        e && e.call(a, a),
        a
    }, "deferred-pipe"),
    s.Deferred.exceptionHook = W.exceptionHook),
    s
});
CLI_ACCEPT_COOKIE_NAME = (typeof CLI_ACCEPT_COOKIE_NAME !== 'undefined' ? CLI_ACCEPT_COOKIE_NAME : 'viewed_cookie_policy');
CLI_PREFERNCE_COOKIE = (typeof CLI_PREFERNCE_COOKIE !== 'undefined' ? CLI_PREFERNCE_COOKIE : 'CookieLawInfoConsent');
CLI_ACCEPT_COOKIE_EXPIRE = (typeof CLI_ACCEPT_COOKIE_EXPIRE !== 'undefined' ? CLI_ACCEPT_COOKIE_EXPIRE : 365);
CLI_COOKIEBAR_AS_POPUP = (typeof CLI_COOKIEBAR_AS_POPUP !== 'undefined' ? CLI_COOKIEBAR_AS_POPUP : !1);
var CLI_Cookie = {
    set: function(name, value, days) {
        var secure = "";
        if (!0 === Boolean(Cli_Data.secure_cookies)) {
            secure = ";secure"
        }
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString()
        } else {
            var expires = ""
        }
        document.cookie = name + "=" + value + secure + expires + "; path=/";
        if (days < 1) {
            host_name = window.location.hostname;
            document.cookie = name + "=" + value + expires + "; path=/; domain=." + host_name + ";";
            if (host_name.indexOf("www") != 1) {
                var host_name_withoutwww = host_name.replace('www', '');
                document.cookie = name + "=" + value + secure + expires + "; path=/; domain=" + host_name_withoutwww + ";"
            }
            host_name = host_name.substring(host_name.lastIndexOf(".", host_name.lastIndexOf(".") - 1));
            document.cookie = name + "=" + value + secure + expires + "; path=/; domain=" + host_name + ";"
        }
    },
    read: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length)
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length)
            }
        }
        return null
    },
    erase: function(name) {
        this.set(name, "", -10)
    },
    exists: function(name) {
        return (this.read(name) !== null)
    },
    getallcookies: function() {
        var pairs = document.cookie.split(";");
        var cookieslist = {};
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            cookieslist[(pair[0] + '').trim()] = unescape(pair[1])
        }
        return cookieslist
    }
}
var CLI = {
    bar_config: {},
    showagain_config: {},
    allowedCategories: [],
    js_blocking_enabled: !1,
    set: function(args) {
        if (typeof JSON.parse !== "function") {
            console.log("CookieLawInfo requires JSON.parse but your browser doesn't support it");
            return
        }
        if (typeof args.settings !== 'object') {
            this.settings = JSON.parse(args.settings)
        } else {
            this.settings = args.settings
        }
        this.js_blocking_enabled = Boolean(Cli_Data.js_blocking);
        this.settings = args.settings;
        this.bar_elm = jQuery(this.settings.notify_div_id);
        this.showagain_elm = jQuery(this.settings.showagain_div_id);
        this.settingsModal = jQuery('#cliSettingsPopup');
        this.main_button = jQuery('.cli-plugin-main-button');
        this.main_link = jQuery('.cli-plugin-main-link');
        this.reject_link = jQuery('.cookie_action_close_header_reject');
        this.delete_link = jQuery(".cookielawinfo-cookie-delete");
        this.settings_button = jQuery('.cli_settings_button');
        this.accept_all_button = jQuery('.wt-cli-accept-all-btn');
        if (this.settings.cookie_bar_as == 'popup') {
            CLI_COOKIEBAR_AS_POPUP = !0
        }
        this.mayBeSetPreferenceCookie();
        this.addStyleAttribute();
        this.configBar();
        this.toggleBar();
        this.attachDelete();
        this.attachEvents();
        this.configButtons();
        this.reviewConsent();
        var cli_hidebar_on_readmore = this.hideBarInReadMoreLink();
        if (Boolean(this.settings.scroll_close) === !0 && cli_hidebar_on_readmore === !1) {
            window.addEventListener("scroll", CLI.closeOnScroll, !1)
        }
    },
    hideBarInReadMoreLink: function() {
        if (Boolean(CLI.settings.button_2_hidebar) === !0 && this.main_link.length > 0 && this.main_link.hasClass('cli-minimize-bar')) {
            this.hideHeader();
            cliBlocker.cookieBar(!1);
            this.showagain_elm.slideDown(this.settings.animate_speed_show);
            return !0
        }
        return !1
    },
    attachEvents: function() {
        jQuery(document).on('click', '.wt-cli-privacy-btn', function(e) {
            e.preventDefault();
            CLI.accept_close();
            CLI.settingsPopUpClose()
        });
        jQuery('.wt-cli-accept-btn').on("click", function(e) {
            e.preventDefault();
            CLI.acceptRejectCookies(jQuery(this))
        });
        jQuery('.wt-cli-accept-all-btn').on("click", function(e) {
            e.preventDefault();
            CLI.acceptRejectCookies(jQuery(this), 'accept')
        });
        jQuery('.wt-cli-reject-btn').on("click", function(e) {
            e.preventDefault();
            CLI.acceptRejectCookies(jQuery(this), 'reject')
        });
        this.settingsPopUp();
        this.settingsTabbedAccordion();
        this.toggleUserPreferenceCheckBox();
        this.hideCookieBarOnClose();
        this.cookieLawInfoRunCallBacks()
    },
    acceptRejectCookies(element, action='custom') {
        var open_link = element[0].hasAttribute("href") && element.attr("href") != '#' ? !0 : !1;
        var new_window = !1;
        if (action == 'accept') {
            this.enableAllCookies();
            this.accept_close();
            new_window = CLI.settings.button_7_new_win ? !0 : !1
        } else if (action == 'reject') {
            this.disableAllCookies();
            this.reject_close();
            new_window = Boolean(this.settings.button_3_new_win) ? !0 : !1
        } else {
            this.accept_close();
            new_window = Boolean(this.settings.button_1_new_win) ? !0 : !1
        }
        if (open_link) {
            if (new_window) {
                window.open(element.attr("href"), '_blank')
            } else {
                window.location.href = element.attr("href")
            }
        }
    },
    toggleUserPreferenceCheckBox: function() {
        jQuery('.cli-user-preference-checkbox').each(function() {
            categoryCookie = 'cookielawinfo-' + jQuery(this).attr('data-id');
            categoryCookieValue = CLI_Cookie.read(categoryCookie);
            if (categoryCookieValue == null) {
                if (jQuery(this).is(':checked')) {
                    CLI_Cookie.set(categoryCookie, 'yes', CLI_ACCEPT_COOKIE_EXPIRE)
                } else {
                    CLI_Cookie.set(categoryCookie, 'no', CLI_ACCEPT_COOKIE_EXPIRE)
                }
            } else {
                if (categoryCookieValue == "yes") {
                    jQuery(this).prop("checked", !0)
                } else {
                    jQuery(this).prop("checked", !1)
                }
            }
        });
        jQuery('.cli-user-preference-checkbox').on("click", function(e) {
            var dataID = jQuery(this).attr('data-id');
            var currentToggleElm = jQuery('.cli-user-preference-checkbox[data-id=' + dataID + ']');
            if (jQuery(this).is(':checked')) {
                CLI_Cookie.set('cookielawinfo-' + dataID, 'yes', CLI_ACCEPT_COOKIE_EXPIRE);
                currentToggleElm.prop('checked', !0)
            } else {
                CLI_Cookie.set('cookielawinfo-' + dataID, 'no', CLI_ACCEPT_COOKIE_EXPIRE);
                currentToggleElm.prop('checked', !1)
            }
            CLI.checkCategories();
            CLI.generateConsent()
        })
    },
    settingsPopUp: function() {
        jQuery(document).on('click', '.cli_settings_button', function(e) {
            e.preventDefault();
            CLI.settingsModal.addClass("cli-show").css({
                'opacity': 0
            }).animate({
                'opacity': 1
            });
            CLI.settingsModal.removeClass('cli-blowup cli-out').addClass("cli-blowup");
            jQuery('body').addClass("cli-modal-open");
            jQuery(".cli-settings-overlay").addClass("cli-show");
            jQuery("#cookie-law-info-bar").css({
                'opacity': .1
            });
            if (!jQuery('.cli-settings-mobile').is(':visible')) {
                CLI.settingsModal.find('.cli-nav-link:eq(0)').trigger("click")
            }
        });
        jQuery('#cliModalClose').on("click", function(e) {
            CLI.settingsPopUpClose()
        });
        CLI.settingsModal.on("click", function(e) {
            if (!(document.getElementsByClassName('cli-modal-dialog')[0].contains(e.target))) {
                CLI.settingsPopUpClose()
            }
        });
        jQuery('.cli_enable_all_btn').on("click", function(e) {
            var cli_toggle_btn = jQuery(this);
            var enable_text = cli_toggle_btn.attr('data-enable-text');
            var disable_text = cli_toggle_btn.attr('data-disable-text');
            if (cli_toggle_btn.hasClass('cli-enabled')) {
                CLI.disableAllCookies();
                cli_toggle_btn.html(enable_text)
            } else {
                CLI.enableAllCookies();
                cli_toggle_btn.html(disable_text)
            }
            jQuery(this).toggleClass('cli-enabled')
        });
        this.privacyReadmore()
    },
    settingsTabbedAccordion: function() {
        jQuery(".cli-tab-header").on("click", function(e) {
            if (!(jQuery(e.target).hasClass('cli-slider') || jQuery(e.target).hasClass('cli-user-preference-checkbox'))) {
                if (jQuery(this).hasClass("cli-tab-active")) {
                    jQuery(this).removeClass("cli-tab-active");
                    jQuery(this).siblings(".cli-tab-content").slideUp(200)
                } else {
                    jQuery(".cli-tab-header").removeClass("cli-tab-active");
                    jQuery(this).addClass("cli-tab-active");
                    jQuery(".cli-tab-content").slideUp(200);
                    jQuery(this).siblings(".cli-tab-content").slideDown(200)
                }
            }
        })
    },
    settingsPopUpClose: function() {
        this.settingsModal.removeClass('cli-show');
        this.settingsModal.addClass('cli-out');
        jQuery('body').removeClass("cli-modal-open");
        jQuery(".cli-settings-overlay").removeClass("cli-show");
        jQuery("#cookie-law-info-bar").css({
            'opacity': 1
        })
    },
    privacyReadmore: function() {
        var el = jQuery('.cli-privacy-content .cli-privacy-content-text');
        if (el.length > 0) {
            var clone = el.clone()
              , originalHtml = clone.html()
              , originalHeight = el.outerHeight()
              , Trunc = {
                addReadmore: function(textBlock) {
                    if (textBlock.html().length > 250) {
                        jQuery('.cli-privacy-readmore').show()
                    } else {
                        jQuery('.cli-privacy-readmore').hide()
                    }
                },
                truncateText: function(textBlock) {
                    var strippedText = jQuery('<div />').html(textBlock.html());
                    strippedText.find('table').remove();
                    textBlock.html(strippedText.html());
                    currentText = textBlock.text();
                    if (currentText.trim().length > 250) {
                        var newStr = currentText.substring(0, 250);
                        textBlock.empty().html(newStr).append('...')
                    }
                },
                replaceText: function(textBlock, original) {
                    return textBlock.html(original)
                }
            };
            Trunc.addReadmore(el);
            Trunc.truncateText(el);
            jQuery('a.cli-privacy-readmore').on("click", function(e) {
                e.preventDefault();
                if (jQuery('.cli-privacy-overview').hasClass('cli-collapsed')) {
                    Trunc.truncateText(el);
                    jQuery('.cli-privacy-overview').removeClass('cli-collapsed');
                    el.css('height', '100%')
                } else {
                    jQuery('.cli-privacy-overview').addClass('cli-collapsed');
                    Trunc.replaceText(el, originalHtml)
                }
            })
        }
    },
    attachDelete: function() {
        this.delete_link.on("click", function(e) {
            CLI_Cookie.erase(CLI_ACCEPT_COOKIE_NAME);
            for (var k in Cli_Data.nn_cookie_ids) {
                CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k])
            }
            CLI.generateConsent();
            return !1
        })
    },
    configButtons: function() {
        this.main_button.css('color', this.settings.button_1_link_colour);
        if (Boolean(this.settings.button_1_as_button)) {
            this.main_button.css('background-color', this.settings.button_1_button_colour);
            this.main_button.on('mouseenter', function() {
                jQuery(this).css('background-color', CLI.settings.button_1_button_hover)
            }).on('mouseleave', function() {
                jQuery(this).css('background-color', CLI.settings.button_1_button_colour)
            })
        }
        this.main_link.css('color', this.settings.button_2_link_colour);
        if (Boolean(this.settings.button_2_as_button)) {
            this.main_link.css('background-color', this.settings.button_2_button_colour);
            this.main_link.on('mouseenter', function() {
                jQuery(this).css('background-color', CLI.settings.button_2_button_hover)
            }).on('mouseleave', function() {
                jQuery(this).css('background-color', CLI.settings.button_2_button_colour)
            })
        }
        this.reject_link.css('color', this.settings.button_3_link_colour);
        if (Boolean(this.settings.button_3_as_button)) {
            this.reject_link.css('background-color', this.settings.button_3_button_colour);
            this.reject_link.on('mouseenter', function() {
                jQuery(this).css('background-color', CLI.settings.button_3_button_hover)
            }).on('mouseleave', function() {
                jQuery(this).css('background-color', CLI.settings.button_3_button_colour)
            })
        }
        this.settings_button.css('color', this.settings.button_4_link_colour);
        if (Boolean(this.settings.button_4_as_button)) {
            this.settings_button.css('background-color', this.settings.button_4_button_colour);
            this.settings_button.on('mouseenter', function() {
                jQuery(this).css('background-color', CLI.settings.button_4_button_hover)
            }).on('mouseleave', function() {
                jQuery(this).css('background-color', CLI.settings.button_4_button_colour)
            })
        }
        this.accept_all_button.css('color', this.settings.button_7_link_colour);
        if (this.settings.button_7_as_button) {
            this.accept_all_button.css('background-color', this.settings.button_7_button_colour);
            this.accept_all_button.on('mouseenter', function() {
                jQuery(this).css('background-color', CLI.settings.button_7_button_hover)
            }).on('mouseleave', function() {
                jQuery(this).css('background-color', CLI.settings.button_7_button_colour)
            })
        }
    },
    toggleBar: function() {
        if (CLI_COOKIEBAR_AS_POPUP) {
            this.barAsPopUp(1)
        }
        if (CLI.settings.cookie_bar_as == 'widget') {
            this.barAsWidget(1)
        }
        if (!CLI_Cookie.exists(CLI_ACCEPT_COOKIE_NAME)) {
            this.displayHeader()
        } else {
            this.hideHeader()
        }
        if (Boolean(this.settings.show_once_yn)) {
            setTimeout(function() {
                CLI.close_header()
            }, CLI.settings.show_once)
        }
        if (CLI.js_blocking_enabled === !1) {
            if (Boolean(Cli_Data.ccpaEnabled) === !0) {
                if (Cli_Data.ccpaType === 'ccpa' && Boolean(Cli_Data.ccpaBarEnabled) === !1) {
                    cliBlocker.cookieBar(!1)
                }
            } else {
                jQuery('.wt-cli-ccpa-opt-out,.wt-cli-ccpa-checkbox,.wt-cli-ccpa-element').remove()
            }
        }
        this.showagain_elm.on("click", function(e) {
            e.preventDefault();
            CLI.showagain_elm.slideUp(CLI.settings.animate_speed_hide, function() {
                CLI.bar_elm.slideDown(CLI.settings.animate_speed_show);
                if (CLI_COOKIEBAR_AS_POPUP) {
                    CLI.showPopupOverlay()
                }
            })
        })
    },
    configShowAgain: function() {
        this.showagain_config = {
            'background-color': this.settings.background,
            'color': this.l1hs(this.settings.text),
            'position': 'fixed',
            'font-family': this.settings.font_family
        };
        if (Boolean(this.settings.border_on)) {
            var border_to_hide = 'border-' + this.settings.notify_position_vertical;
            this.showagain_config.border = '1px solid ' + this.l1hs(this.settings.border);
            this.showagain_config[border_to_hide] = 'none'
        }
        var cli_win = jQuery(window);
        var cli_winw = cli_win.width();
        var showagain_x_pos = this.settings.showagain_x_position;
        if (cli_winw < 300) {
            showagain_x_pos = 10;
            this.showagain_config.width = cli_winw - 20
        } else {
            this.showagain_config.width = 'auto'
        }
        var cli_defw = cli_winw > 400 ? 500 : cli_winw - 20;
        if (CLI_COOKIEBAR_AS_POPUP) {
            var sa_pos = this.settings.popup_showagain_position;
            var sa_pos_arr = sa_pos.split('-');
            if (sa_pos_arr[1] == 'left') {
                this.showagain_config.left = showagain_x_pos
            } else if (sa_pos_arr[1] == 'right') {
                this.showagain_config.right = showagain_x_pos
            }
            if (sa_pos_arr[0] == 'top') {
                this.showagain_config.top = 0
            } else if (sa_pos_arr[0] == 'bottom') {
                this.showagain_config.bottom = 0
            }
            this.bar_config.position = 'fixed'
        } else if (this.settings.cookie_bar_as == 'widget') {
            this.showagain_config.bottom = 0;
            if (this.settings.widget_position == 'left') {
                this.showagain_config.left = showagain_x_pos
            } else if (this.settings.widget_position == 'right') {
                this.showagain_config.right = showagain_x_pos
            }
        } else {
            if (this.settings.notify_position_vertical == "top") {
                this.showagain_config.top = '0'
            } else if (this.settings.notify_position_vertical == "bottom") {
                this.bar_config.position = 'fixed';
                this.bar_config.bottom = '0';
                this.showagain_config.bottom = '0'
            }
            if (this.settings.notify_position_horizontal == "left") {
                this.showagain_config.left = showagain_x_pos
            } else if (this.settings.notify_position_horizontal == "right") {
                this.showagain_config.right = showagain_x_pos
            }
        }
        this.showagain_elm.css(this.showagain_config)
    },
    configBar: function() {
        this.bar_config = {
            'background-color': this.settings.background,
            'color': this.settings.text,
            'font-family': this.settings.font_family
        };
        if (this.settings.notify_position_vertical == "top") {
            this.bar_config.top = '0';
            if (Boolean(this.settings.header_fix) === !0) {
                this.bar_config.position = 'fixed'
            }
        } else {
            this.bar_config.bottom = '0'
        }
        this.configShowAgain();
        this.bar_elm.css(this.bar_config).hide()
    },
    l1hs: function(str) {
        if (str.charAt(0) == "#") {
            str = str.substring(1, str.length)
        } else {
            return "#" + str
        }
        return this.l1hs(str)
    },
    close_header: function() {
        CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME, 'yes', CLI_ACCEPT_COOKIE_EXPIRE);
        this.hideHeader()
    },
    accept_close: function() {
        this.hidePopupOverlay();
        this.generateConsent();
        this.cookieLawInfoRunCallBacks();
        CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME, 'yes', CLI_ACCEPT_COOKIE_EXPIRE);
        if (Boolean(this.settings.notify_animate_hide)) {
            if (CLI.js_blocking_enabled === !0) {
                this.bar_elm.slideUp(this.settings.animate_speed_hide, cliBlocker.runScripts)
            } else {
                this.bar_elm.slideUp(this.settings.animate_speed_hide)
            }
        } else {
            if (CLI.js_blocking_enabled === !0) {
                this.bar_elm.hide(0, cliBlocker.runScripts)
            } else {
                this.bar_elm.hide()
            }
        }
        if (Boolean(this.settings.showagain_tab)) {
            this.showagain_elm.slideDown(this.settings.animate_speed_show)
        }
        if (Boolean(this.settings.accept_close_reload) === !0) {
            this.reload_current_page()
        }
        return !1
    },
    reject_close: function() {
        this.hidePopupOverlay();
        this.generateConsent();
        this.cookieLawInfoRunCallBacks();
        for (var k in Cli_Data.nn_cookie_ids) {
            CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k])
        }
        CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME, 'no', CLI_ACCEPT_COOKIE_EXPIRE);
        if (Boolean(this.settings.notify_animate_hide)) {
            if (CLI.js_blocking_enabled === !0) {
                this.bar_elm.slideUp(this.settings.animate_speed_hide, cliBlocker.runScripts)
            } else {
                this.bar_elm.slideUp(this.settings.animate_speed_hide)
            }
        } else {
            if (CLI.js_blocking_enabled === !0) {
                this.bar_elm.hide(cliBlocker.runScripts)
            } else {
                this.bar_elm.hide()
            }
        }
        if (Boolean(this.settings.showagain_tab)) {
            this.showagain_elm.slideDown(this.settings.animate_speed_show)
        }
        if (Boolean(this.settings.reject_close_reload) === !0) {
            this.reload_current_page()
        }
        return !1
    },
    reload_current_page: function() {
        window.location.reload(!0)
    },
    closeOnScroll: function() {
        if (window.pageYOffset > 100 && !CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)) {
            CLI.accept_close();
            if (Boolean(CLI.settings.scroll_close_reload) === !0) {
                window.location.reload()
            }
            window.removeEventListener("scroll", CLI.closeOnScroll, !1)
        }
    },
    displayHeader: function() {
        if (Boolean(this.settings.notify_animate_show)) {
            this.bar_elm.slideDown(this.settings.animate_speed_show)
        } else {
            this.bar_elm.show()
        }
        this.showagain_elm.hide();
        if (CLI_COOKIEBAR_AS_POPUP) {
            this.showPopupOverlay()
        }
    },
    hideHeader: function() {
        if (Boolean(this.settings.showagain_tab)) {
            if (Boolean(this.settings.notify_animate_show)) {
                this.showagain_elm.slideDown(this.settings.animate_speed_show)
            } else {
                this.showagain_elm.show()
            }
        } else {
            this.showagain_elm.hide()
        }
        this.bar_elm.slideUp(this.settings.animate_speed_show);
        this.hidePopupOverlay()
    },
    hidePopupOverlay: function() {
        jQuery('body').removeClass("cli-barmodal-open");
        jQuery(".cli-popupbar-overlay").removeClass("cli-show")
    },
    showPopupOverlay: function() {
        if (this.bar_elm.length) {
            if (Boolean(this.settings.popup_overlay)) {
                jQuery('body').addClass("cli-barmodal-open");
                jQuery(".cli-popupbar-overlay").addClass("cli-show")
            }
        }
    },
    barAsWidget: function(a) {
        var cli_elm = this.bar_elm;
        cli_elm.attr('data-cli-type', 'widget');
        var cli_win = jQuery(window);
        var cli_winh = cli_win.height() - 40;
        var cli_winw = cli_win.width();
        var cli_defw = cli_winw > 400 ? 300 : cli_winw - 30;
        cli_elm.css({
            'width': cli_defw,
            'height': 'auto',
            'max-height': cli_winh,
            'overflow': 'auto',
            'position': 'fixed',
            'box-sizing': 'border-box'
        });
        if (this.checkifStyleAttributeExist() === !1) {
            cli_elm.css({
                'padding': '25px 15px'
            })
        }
        if (this.settings.widget_position == 'left') {
            cli_elm.css({
                'left': '15px',
                'right': 'auto',
                'bottom': '15px',
                'top': 'auto'
            })
        } else {
            cli_elm.css({
                'left': 'auto',
                'right': '15px',
                'bottom': '15px',
                'top': 'auto'
            })
        }
        if (a) {
            this.setResize()
        }
    },
    barAsPopUp: function(a) {
        if (typeof cookie_law_info_bar_as_popup === 'function') {
            return !1
        }
        var cli_elm = this.bar_elm;
        cli_elm.attr('data-cli-type', 'popup');
        var cli_win = jQuery(window);
        var cli_winh = cli_win.height() - 40;
        var cli_winw = cli_win.width();
        var cli_defw = cli_winw > 700 ? 500 : cli_winw - 20;
        cli_elm.css({
            'width': cli_defw,
            'height': 'auto',
            'max-height': cli_winh,
            'bottom': '',
            'top': '50%',
            'left': '50%',
            'margin-left': (cli_defw / 2) * -1,
            'margin-top': '-100px',
            'overflow': 'auto'
        }).addClass('cli-bar-popup cli-modal-content');
        if (this.checkifStyleAttributeExist() === !1) {
            cli_elm.css({
                'padding': '25px 15px'
            })
        }
        cli_h = cli_elm.height();
        li_h = cli_h < 200 ? 200 : cli_h;
        cli_elm.css({
            'top': '50%',
            'margin-top': ((cli_h / 2) + 30) * -1
        });
        setTimeout(function() {
            cli_elm.css({
                'bottom': ''
            })
        }, 100);
        if (a) {
            this.setResize()
        }
    },
    setResize: function() {
        var resizeTmr = null;
        jQuery(window).resize(function() {
            clearTimeout(resizeTmr);
            resizeTmr = setTimeout(function() {
                if (CLI_COOKIEBAR_AS_POPUP) {
                    CLI.barAsPopUp()
                }
                if (CLI.settings.cookie_bar_as == 'widget') {
                    CLI.barAsWidget()
                }
                CLI.configShowAgain()
            }, 500)
        })
    },
    enableAllCookies: function() {
        jQuery('.cli-user-preference-checkbox').each(function() {
            var cli_chkbox_elm = jQuery(this);
            var cli_chkbox_data_id = cli_chkbox_elm.attr('data-id');
            if (cli_chkbox_data_id != 'checkbox-necessary') {
                cli_chkbox_elm.prop('checked', !0);
                CLI_Cookie.set('cookielawinfo-' + cli_chkbox_data_id, 'yes', CLI_ACCEPT_COOKIE_EXPIRE)
            }
        })
    },
    disableAllCookies: function() {
        jQuery('.cli-user-preference-checkbox').each(function() {
            var cli_chkbox_elm = jQuery(this);
            var cli_chkbox_data_id = cli_chkbox_elm.attr('data-id');
            cliCategorySlug = cli_chkbox_data_id.replace('checkbox-', '');
            if (Cli_Data.strictlyEnabled.indexOf(cliCategorySlug) === -1) {
                cli_chkbox_elm.prop('checked', !1);
                CLI_Cookie.set('cookielawinfo-' + cli_chkbox_data_id, 'no', CLI_ACCEPT_COOKIE_EXPIRE)
            }
        })
    },
    hideCookieBarOnClose: function() {
        jQuery(document).on('click', '.cli_cookie_close_button', function(e) {
            e.preventDefault();
            var elm = jQuery(this);
            if (Cli_Data.ccpaType === 'ccpa') {
                CLI.enableAllCookies()
            }
            CLI.accept_close()
        })
    },
    checkCategories: function() {
        var cliAllowedCategories = [];
        var cli_categories = {};
        jQuery('.cli-user-preference-checkbox').each(function() {
            var status = !1;
            cli_chkbox_elm = jQuery(this);
            cli_chkbox_data_id = cli_chkbox_elm.attr('data-id');
            cli_chkbox_data_id = cli_chkbox_data_id.replace('checkbox-', '');
            cli_chkbox_data_id_trimmed = cli_chkbox_data_id.replace('-', '_')
            if (jQuery(cli_chkbox_elm).is(':checked')) {
                status = !0;
                cliAllowedCategories.push(cli_chkbox_data_id)
            }
            cli_categories[cli_chkbox_data_id_trimmed] = status
        });
        CLI.allowedCategories = cliAllowedCategories
    },
    cookieLawInfoRunCallBacks: function() {
        this.checkCategories();
        if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == 'yes') {
            if ("function" == typeof CookieLawInfo_Accept_Callback) {
                CookieLawInfo_Accept_Callback()
            }
        }
    },
    generateConsent: function() {
        var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
        cliConsent = {};
        if (preferenceCookie !== null) {
            cliConsent = window.atob(preferenceCookie);
            cliConsent = JSON.parse(cliConsent)
        }
        cliConsent.ver = Cli_Data.consentVersion;
        categories = [];
        jQuery('.cli-user-preference-checkbox').each(function() {
            categoryVal = '';
            cli_chkbox_data_id = jQuery(this).attr('data-id');
            cli_chkbox_data_id = cli_chkbox_data_id.replace('checkbox-', '');
            if (jQuery(this).is(':checked')) {
                categoryVal = !0
            } else {
                categoryVal = !1
            }
            cliConsent[cli_chkbox_data_id] = categoryVal
        });
        cliConsent = JSON.stringify(cliConsent);
        cliConsent = window.btoa(cliConsent);
        CLI_Cookie.set(CLI_PREFERNCE_COOKIE, cliConsent, CLI_ACCEPT_COOKIE_EXPIRE)
    },
    addStyleAttribute: function() {
        var bar = this.bar_elm;
        var styleClass = '';
        if (jQuery(bar).find('.cli-bar-container').length > 0) {
            styleClass = jQuery('.cli-bar-container').attr('class');
            styleClass = styleClass.replace('cli-bar-container', '');
            styleClass = styleClass.trim();
            jQuery(bar).attr('data-cli-style', styleClass)
        }
    },
    getParameterByName: function(name, url) {
        if (!url) {
            url = window.location.href
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
          , results = regex.exec(url);
        if (!results) {
            return null
        }
        if (!results[2]) {
            return ''
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
    CookieLawInfo_Callback: function(enableBar, enableBlocking) {
        enableBar = typeof enableBar !== 'undefined' ? enableBar : !0;
        enableBlocking = typeof enableBlocking !== 'undefined' ? enableBlocking : !0;
        if (CLI.js_blocking_enabled === !0 && Boolean(Cli_Data.custom_integration) === !0) {
            cliBlocker.cookieBar(enableBar);
            cliBlocker.runScripts(enableBlocking)
        }
    },
    checkifStyleAttributeExist: function() {
        var exist = !1;
        var attr = this.bar_elm.attr('data-cli-style');
        if (typeof attr !== typeof undefined && attr !== !1) {
            exist = !0
        }
        return exist
    },
    reviewConsent: function() {
        jQuery(document).on('click', '.cli_manage_current_consent,.wt-cli-manage-consent-link', function() {
            CLI.displayHeader()
        })
    },
    mayBeSetPreferenceCookie: function() {
        if (CLI.getParameterByName('cli_bypass') === "1") {
            CLI.generateConsent()
        }
    }
}
var cliBlocker = {
    blockingStatus: !0,
    scriptsLoaded: !1,
    ccpaEnabled: !1,
    ccpaRegionBased: !1,
    ccpaApplicable: !1,
    ccpaBarEnabled: !1,
    cliShowBar: !0,
    isBypassEnabled: CLI.getParameterByName('cli_bypass'),
    checkPluginStatus: function(callbackA, callbackB) {
        this.ccpaEnabled = Boolean(Cli_Data.ccpaEnabled);
        this.ccpaRegionBased = Boolean(Cli_Data.ccpaRegionBased);
        this.ccpaBarEnabled = Boolean(Cli_Data.ccpaBarEnabled);
        if (Boolean(Cli_Data.custom_integration) === !0) {
            callbackA(!1)
        } else {
            if (this.ccpaEnabled === !0) {
                this.ccpaApplicable = !0;
                if (Cli_Data.ccpaType === 'ccpa') {
                    if (this.ccpaBarEnabled !== !0) {
                        this.cliShowBar = !1;
                        this.blockingStatus = !1
                    }
                }
            } else {
                jQuery('.wt-cli-ccpa-opt-out,.wt-cli-ccpa-checkbox,.wt-cli-ccpa-element').remove()
            }
            if (cliBlocker.isBypassEnabled === "1") {
                cliBlocker.blockingStatus = !1
            }
            callbackA(this.cliShowBar);
            callbackB(this.blockingStatus)
        }
    },
    cookieBar: function(showbar) {
        showbar = typeof showbar !== 'undefined' ? showbar : !0;
        cliBlocker.cliShowBar = showbar;
        if (cliBlocker.cliShowBar === !1) {
            CLI.bar_elm.hide();
            CLI.showagain_elm.hide();
            CLI.settingsModal.removeClass('cli-blowup cli-out');
            CLI.hidePopupOverlay();
            jQuery(".cli-settings-overlay").removeClass("cli-show")
        } else {
            if (!CLI_Cookie.exists(CLI_ACCEPT_COOKIE_NAME)) {
                CLI.displayHeader()
            } else {
                CLI.hideHeader()
            }
        }
    },
    removeCookieByCategory: function() {
        if (cliBlocker.blockingStatus === !0) {
            if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) !== null) {
                var non_necessary_cookies = Cli_Data.non_necessary_cookies;
                for (var key in non_necessary_cookies) {
                    currentCategory = key;
                    if (CLI.allowedCategories.indexOf(currentCategory) === -1) {
                        var nonNecessaryCookies = non_necessary_cookies[currentCategory];
                        for (var i = 0; i < nonNecessaryCookies.length; i++) {
                            if (CLI_Cookie.read(nonNecessaryCookies[i]) !== null) {
                                CLI_Cookie.erase(nonNecessaryCookies[i])
                            }
                        }
                    }
                }
            }
        }
    },
    runScripts: function(blocking) {
        blocking = typeof blocking !== 'undefined' ? blocking : !0;
        cliBlocker.blockingStatus = blocking;
        srcReplaceableElms = ['iframe', 'IFRAME', 'EMBED', 'embed', 'OBJECT', 'object', 'IMG', 'img'];
        var genericFuncs = {
            renderByElement: function(callback) {
                cliScriptFuncs.renderScripts();
                callback();
                cliBlocker.scriptsLoaded = !0
            },
        };
        var cliScriptFuncs = {
            scriptsDone: function() {
                if (typeof Cli_Data.triggerDomRefresh !== 'undefined') {
                    if (Boolean(Cli_Data.triggerDomRefresh) === !0) {
                        var DOMContentLoadedEvent = document.createEvent('Event')
                        DOMContentLoadedEvent.initEvent('DOMContentLoaded', !0, !0)
                        window.document.dispatchEvent(DOMContentLoadedEvent)
                    }
                }
            },
            seq: function(arr, callback, index) {
                if (typeof index === 'undefined') {
                    index = 0
                }
                arr[index](function() {
                    index++
                    if (index === arr.length) {
                        callback()
                    } else {
                        cliScriptFuncs.seq(arr, callback, index)
                    }
                })
            },
            insertScript: function($script, callback) {
                var s = '';
                var scriptType = $script.getAttribute('data-cli-script-type');
                var elementPosition = $script.getAttribute('data-cli-element-position');
                var isBlock = $script.getAttribute('data-cli-block');
                var s = document.createElement('script');
                var ccpaOptedOut = cliBlocker.ccpaOptedOut();
                s.type = 'text/plain';
                if ($script.async) {
                    s.async = $script.async
                }
                if ($script.defer) {
                    s.defer = $script.defer
                }
                if ($script.src) {
                    s.onload = callback
                    s.onerror = callback
                    s.src = $script.src
                } else {
                    s.textContent = $script.innerText
                }
                var attrs = jQuery($script).prop("attributes");
                for (var ii = 0; ii < attrs.length; ++ii) {
                    if (attrs[ii].nodeName !== 'id') {
                        s.setAttribute(attrs[ii].nodeName, attrs[ii].value)
                    }
                }
                if (cliBlocker.blockingStatus === !0) {
                    if ((CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == 'yes' && CLI.allowedCategories.indexOf(scriptType) !== -1)) {
                        s.setAttribute('data-cli-consent', 'accepted');
                        s.type = 'text/javascript'
                    }
                    if (cliBlocker.ccpaApplicable === !0) {
                        if (ccpaOptedOut === !0 || CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == null) {
                            s.type = 'text/plain'
                        }
                    }
                } else {
                    s.type = 'text/javascript'
                }
                if ($script.type != s.type) {
                    if (elementPosition === 'head') {
                        document.head.appendChild(s)
                    } else {
                        document.body.appendChild(s)
                    }
                    if (!$script.src) {
                        callback()
                    }
                    $script.parentNode.removeChild($script)
                } else {
                    callback()
                }
            },
            renderScripts: function() {
                var $scripts = document.querySelectorAll('script[data-cli-class="cli-blocker-script"]');
                if ($scripts.length > 0) {
                    var runList = []
                    var typeAttr
                    Array.prototype.forEach.call($scripts, function($script) {
                        typeAttr = $script.getAttribute('type')
                        runList.push(function(callback) {
                            cliScriptFuncs.insertScript($script, callback)
                        })
                    })
                    cliScriptFuncs.seq(runList, cliScriptFuncs.scriptsDone)
                }
            }
        };
        genericFuncs.renderByElement(cliBlocker.removeCookieByCategory)
    },
    ccpaOptedOut: function() {
        var ccpaOptedOut = !1;
        var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
        if (preferenceCookie !== null) {
            cliConsent = window.atob(preferenceCookie);
            cliConsent = JSON.parse(cliConsent);
            if (typeof cliConsent.ccpaOptout !== 'undefined') {
                ccpaOptedOut = cliConsent.ccpaOptout
            }
        }
        return ccpaOptedOut
    }
}
jQuery(document).ready(function() {
    if (typeof cli_cookiebar_settings != 'undefined') {
        CLI.set({
            settings: cli_cookiebar_settings
        });
        if (CLI.js_blocking_enabled === !0) {
            cliBlocker.checkPluginStatus(cliBlocker.cookieBar, cliBlocker.runScripts)
        }
    }
});
/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function() {
    var l, a;
    l = this,
    a = function() {
        "use strict";
        var l = {}
          , a = {};
        try {
            "undefined" != typeof window && (l = window),
            "undefined" != typeof document && (a = document)
        } catch (l) {}
        var e = (l.navigator || {}).userAgent
          , r = void 0 === e ? "" : e
          , n = l
          , o = a
          , u = (n.document,
        !!o.documentElement && !!o.head && "function" == typeof o.addEventListener && o.createElement,
        ~r.indexOf("MSIE") || r.indexOf("Trident/"),
        "___FONT_AWESOME___")
          , t = function() {
            try {
                return "production" === process.env.NODE_ENV
            } catch (l) {
                return !1
            }
        }();
        var f = n || {};
        f[u] || (f[u] = {}),
        f[u].styles || (f[u].styles = {}),
        f[u].hooks || (f[u].hooks = {}),
        f[u].shims || (f[u].shims = []);
        var i = f[u]
          , s = [["glass", null, "glass-martini"], ["meetup", "fab", null], ["star-o", "far", "star"], ["remove", null, "times"], ["close", null, "times"], ["gear", null, "cog"], ["trash-o", "far", "trash-alt"], ["file-o", "far", "file"], ["clock-o", "far", "clock"], ["arrow-circle-o-down", "far", "arrow-alt-circle-down"], ["arrow-circle-o-up", "far", "arrow-alt-circle-up"], ["play-circle-o", "far", "play-circle"], ["repeat", null, "redo"], ["rotate-right", null, "redo"], ["refresh", null, "sync"], ["list-alt", "far", null], ["dedent", null, "outdent"], ["video-camera", null, "video"], ["picture-o", "far", "image"], ["photo", "far", "image"], ["image", "far", "image"], ["pencil", null, "pencil-alt"], ["map-marker", null, "map-marker-alt"], ["pencil-square-o", "far", "edit"], ["share-square-o", "far", "share-square"], ["check-square-o", "far", "check-square"], ["arrows", null, "arrows-alt"], ["times-circle-o", "far", "times-circle"], ["check-circle-o", "far", "check-circle"], ["mail-forward", null, "share"], ["expand", null, "expand-alt"], ["compress", null, "compress-alt"], ["eye", "far", null], ["eye-slash", "far", null], ["warning", null, "exclamation-triangle"], ["calendar", null, "calendar-alt"], ["arrows-v", null, "arrows-alt-v"], ["arrows-h", null, "arrows-alt-h"], ["bar-chart", "far", "chart-bar"], ["bar-chart-o", "far", "chart-bar"], ["twitter-square", "fab", null], ["facebook-square", "fab", null], ["gears", null, "cogs"], ["thumbs-o-up", "far", "thumbs-up"], ["thumbs-o-down", "far", "thumbs-down"], ["heart-o", "far", "heart"], ["sign-out", null, "sign-out-alt"], ["linkedin-square", "fab", "linkedin"], ["thumb-tack", null, "thumbtack"], ["external-link", null, "external-link-alt"], ["sign-in", null, "sign-in-alt"], ["github-square", "fab", null], ["lemon-o", "far", "lemon"], ["square-o", "far", "square"], ["bookmark-o", "far", "bookmark"], ["twitter", "fab", null], ["facebook", "fab", "facebook-f"], ["facebook-f", "fab", "facebook-f"], ["github", "fab", null], ["credit-card", "far", null], ["feed", null, "rss"], ["hdd-o", "far", "hdd"], ["hand-o-right", "far", "hand-point-right"], ["hand-o-left", "far", "hand-point-left"], ["hand-o-up", "far", "hand-point-up"], ["hand-o-down", "far", "hand-point-down"], ["arrows-alt", null, "expand-arrows-alt"], ["group", null, "users"], ["chain", null, "link"], ["scissors", null, "cut"], ["files-o", "far", "copy"], ["floppy-o", "far", "save"], ["navicon", null, "bars"], ["reorder", null, "bars"], ["pinterest", "fab", null], ["pinterest-square", "fab", null], ["google-plus-square", "fab", null], ["google-plus", "fab", "google-plus-g"], ["money", "far", "money-bill-alt"], ["unsorted", null, "sort"], ["sort-desc", null, "sort-down"], ["sort-asc", null, "sort-up"], ["linkedin", "fab", "linkedin-in"], ["rotate-left", null, "undo"], ["legal", null, "gavel"], ["tachometer", null, "tachometer-alt"], ["dashboard", null, "tachometer-alt"], ["comment-o", "far", "comment"], ["comments-o", "far", "comments"], ["flash", null, "bolt"], ["clipboard", "far", null], ["paste", "far", "clipboard"], ["lightbulb-o", "far", "lightbulb"], ["exchange", null, "exchange-alt"], ["cloud-download", null, "cloud-download-alt"], ["cloud-upload", null, "cloud-upload-alt"], ["bell-o", "far", "bell"], ["cutlery", null, "utensils"], ["file-text-o", "far", "file-alt"], ["building-o", "far", "building"], ["hospital-o", "far", "hospital"], ["tablet", null, "tablet-alt"], ["mobile", null, "mobile-alt"], ["mobile-phone", null, "mobile-alt"], ["circle-o", "far", "circle"], ["mail-reply", null, "reply"], ["github-alt", "fab", null], ["folder-o", "far", "folder"], ["folder-open-o", "far", "folder-open"], ["smile-o", "far", "smile"], ["frown-o", "far", "frown"], ["meh-o", "far", "meh"], ["keyboard-o", "far", "keyboard"], ["flag-o", "far", "flag"], ["mail-reply-all", null, "reply-all"], ["star-half-o", "far", "star-half"], ["star-half-empty", "far", "star-half"], ["star-half-full", "far", "star-half"], ["code-fork", null, "code-branch"], ["chain-broken", null, "unlink"], ["shield", null, "shield-alt"], ["calendar-o", "far", "calendar"], ["maxcdn", "fab", null], ["html5", "fab", null], ["css3", "fab", null], ["ticket", null, "ticket-alt"], ["minus-square-o", "far", "minus-square"], ["level-up", null, "level-up-alt"], ["level-down", null, "level-down-alt"], ["pencil-square", null, "pen-square"], ["external-link-square", null, "external-link-square-alt"], ["compass", "far", null], ["caret-square-o-down", "far", "caret-square-down"], ["toggle-down", "far", "caret-square-down"], ["caret-square-o-up", "far", "caret-square-up"], ["toggle-up", "far", "caret-square-up"], ["caret-square-o-right", "far", "caret-square-right"], ["toggle-right", "far", "caret-square-right"], ["eur", null, "euro-sign"], ["euro", null, "euro-sign"], ["gbp", null, "pound-sign"], ["usd", null, "dollar-sign"], ["dollar", null, "dollar-sign"], ["inr", null, "rupee-sign"], ["rupee", null, "rupee-sign"], ["jpy", null, "yen-sign"], ["cny", null, "yen-sign"], ["rmb", null, "yen-sign"], ["yen", null, "yen-sign"], ["rub", null, "ruble-sign"], ["ruble", null, "ruble-sign"], ["rouble", null, "ruble-sign"], ["krw", null, "won-sign"], ["won", null, "won-sign"], ["btc", "fab", null], ["bitcoin", "fab", "btc"], ["file-text", null, "file-alt"], ["sort-alpha-asc", null, "sort-alpha-down"], ["sort-alpha-desc", null, "sort-alpha-down-alt"], ["sort-amount-asc", null, "sort-amount-down"], ["sort-amount-desc", null, "sort-amount-down-alt"], ["sort-numeric-asc", null, "sort-numeric-down"], ["sort-numeric-desc", null, "sort-numeric-down-alt"], ["youtube-square", "fab", null], ["youtube", "fab", null], ["xing", "fab", null], ["xing-square", "fab", null], ["youtube-play", "fab", "youtube"], ["dropbox", "fab", null], ["stack-overflow", "fab", null], ["instagram", "fab", null], ["flickr", "fab", null], ["adn", "fab", null], ["bitbucket", "fab", null], ["bitbucket-square", "fab", "bitbucket"], ["tumblr", "fab", null], ["tumblr-square", "fab", null], ["long-arrow-down", null, "long-arrow-alt-down"], ["long-arrow-up", null, "long-arrow-alt-up"], ["long-arrow-left", null, "long-arrow-alt-left"], ["long-arrow-right", null, "long-arrow-alt-right"], ["apple", "fab", null], ["windows", "fab", null], ["android", "fab", null], ["linux", "fab", null], ["dribbble", "fab", null], ["skype", "fab", null], ["foursquare", "fab", null], ["trello", "fab", null], ["gratipay", "fab", null], ["gittip", "fab", "gratipay"], ["sun-o", "far", "sun"], ["moon-o", "far", "moon"], ["vk", "fab", null], ["weibo", "fab", null], ["renren", "fab", null], ["pagelines", "fab", null], ["stack-exchange", "fab", null], ["arrow-circle-o-right", "far", "arrow-alt-circle-right"], ["arrow-circle-o-left", "far", "arrow-alt-circle-left"], ["caret-square-o-left", "far", "caret-square-left"], ["toggle-left", "far", "caret-square-left"], ["dot-circle-o", "far", "dot-circle"], ["vimeo-square", "fab", null], ["try", null, "lira-sign"], ["turkish-lira", null, "lira-sign"], ["plus-square-o", "far", "plus-square"], ["slack", "fab", null], ["wordpress", "fab", null], ["openid", "fab", null], ["institution", null, "university"], ["bank", null, "university"], ["mortar-board", null, "graduation-cap"], ["yahoo", "fab", null], ["google", "fab", null], ["reddit", "fab", null], ["reddit-square", "fab", null], ["stumbleupon-circle", "fab", null], ["stumbleupon", "fab", null], ["delicious", "fab", null], ["digg", "fab", null], ["pied-piper-pp", "fab", null], ["pied-piper-alt", "fab", null], ["drupal", "fab", null], ["joomla", "fab", null], ["spoon", null, "utensil-spoon"], ["behance", "fab", null], ["behance-square", "fab", null], ["steam", "fab", null], ["steam-square", "fab", null], ["automobile", null, "car"], ["envelope-o", "far", "envelope"], ["spotify", "fab", null], ["deviantart", "fab", null], ["soundcloud", "fab", null], ["file-pdf-o", "far", "file-pdf"], ["file-word-o", "far", "file-word"], ["file-excel-o", "far", "file-excel"], ["file-powerpoint-o", "far", "file-powerpoint"], ["file-image-o", "far", "file-image"], ["file-photo-o", "far", "file-image"], ["file-picture-o", "far", "file-image"], ["file-archive-o", "far", "file-archive"], ["file-zip-o", "far", "file-archive"], ["file-audio-o", "far", "file-audio"], ["file-sound-o", "far", "file-audio"], ["file-video-o", "far", "file-video"], ["file-movie-o", "far", "file-video"], ["file-code-o", "far", "file-code"], ["vine", "fab", null], ["codepen", "fab", null], ["jsfiddle", "fab", null], ["life-ring", "far", null], ["life-bouy", "far", "life-ring"], ["life-buoy", "far", "life-ring"], ["life-saver", "far", "life-ring"], ["support", "far", "life-ring"], ["circle-o-notch", null, "circle-notch"], ["rebel", "fab", null], ["ra", "fab", "rebel"], ["resistance", "fab", "rebel"], ["empire", "fab", null], ["ge", "fab", "empire"], ["git-square", "fab", null], ["git", "fab", null], ["hacker-news", "fab", null], ["y-combinator-square", "fab", "hacker-news"], ["yc-square", "fab", "hacker-news"], ["tencent-weibo", "fab", null], ["qq", "fab", null], ["weixin", "fab", null], ["wechat", "fab", "weixin"], ["send", null, "paper-plane"], ["paper-plane-o", "far", "paper-plane"], ["send-o", "far", "paper-plane"], ["circle-thin", "far", "circle"], ["header", null, "heading"], ["sliders", null, "sliders-h"], ["futbol-o", "far", "futbol"], ["soccer-ball-o", "far", "futbol"], ["slideshare", "fab", null], ["twitch", "fab", null], ["yelp", "fab", null], ["newspaper-o", "far", "newspaper"], ["paypal", "fab", null], ["google-wallet", "fab", null], ["cc-visa", "fab", null], ["cc-mastercard", "fab", null], ["cc-discover", "fab", null], ["cc-amex", "fab", null], ["cc-paypal", "fab", null], ["cc-stripe", "fab", null], ["bell-slash-o", "far", "bell-slash"], ["trash", null, "trash-alt"], ["copyright", "far", null], ["eyedropper", null, "eye-dropper"], ["area-chart", null, "chart-area"], ["pie-chart", null, "chart-pie"], ["line-chart", null, "chart-line"], ["lastfm", "fab", null], ["lastfm-square", "fab", null], ["ioxhost", "fab", null], ["angellist", "fab", null], ["cc", "far", "closed-captioning"], ["ils", null, "shekel-sign"], ["shekel", null, "shekel-sign"], ["sheqel", null, "shekel-sign"], ["meanpath", "fab", "font-awesome"], ["buysellads", "fab", null], ["connectdevelop", "fab", null], ["dashcube", "fab", null], ["forumbee", "fab", null], ["leanpub", "fab", null], ["sellsy", "fab", null], ["shirtsinbulk", "fab", null], ["simplybuilt", "fab", null], ["skyatlas", "fab", null], ["diamond", "far", "gem"], ["intersex", null, "transgender"], ["facebook-official", "fab", "facebook"], ["pinterest-p", "fab", null], ["whatsapp", "fab", null], ["hotel", null, "bed"], ["viacoin", "fab", null], ["medium", "fab", null], ["y-combinator", "fab", null], ["yc", "fab", "y-combinator"], ["optin-monster", "fab", null], ["opencart", "fab", null], ["expeditedssl", "fab", null], ["battery-4", null, "battery-full"], ["battery", null, "battery-full"], ["battery-3", null, "battery-three-quarters"], ["battery-2", null, "battery-half"], ["battery-1", null, "battery-quarter"], ["battery-0", null, "battery-empty"], ["object-group", "far", null], ["object-ungroup", "far", null], ["sticky-note-o", "far", "sticky-note"], ["cc-jcb", "fab", null], ["cc-diners-club", "fab", null], ["clone", "far", null], ["hourglass-o", "far", "hourglass"], ["hourglass-1", null, "hourglass-start"], ["hourglass-2", null, "hourglass-half"], ["hourglass-3", null, "hourglass-end"], ["hand-rock-o", "far", "hand-rock"], ["hand-grab-o", "far", "hand-rock"], ["hand-paper-o", "far", "hand-paper"], ["hand-stop-o", "far", "hand-paper"], ["hand-scissors-o", "far", "hand-scissors"], ["hand-lizard-o", "far", "hand-lizard"], ["hand-spock-o", "far", "hand-spock"], ["hand-pointer-o", "far", "hand-pointer"], ["hand-peace-o", "far", "hand-peace"], ["registered", "far", null], ["creative-commons", "fab", null], ["gg", "fab", null], ["gg-circle", "fab", null], ["tripadvisor", "fab", null], ["odnoklassniki", "fab", null], ["odnoklassniki-square", "fab", null], ["get-pocket", "fab", null], ["wikipedia-w", "fab", null], ["safari", "fab", null], ["chrome", "fab", null], ["firefox", "fab", null], ["opera", "fab", null], ["internet-explorer", "fab", null], ["television", null, "tv"], ["contao", "fab", null], ["500px", "fab", null], ["amazon", "fab", null], ["calendar-plus-o", "far", "calendar-plus"], ["calendar-minus-o", "far", "calendar-minus"], ["calendar-times-o", "far", "calendar-times"], ["calendar-check-o", "far", "calendar-check"], ["map-o", "far", "map"], ["commenting", null, "comment-dots"], ["commenting-o", "far", "comment-dots"], ["houzz", "fab", null], ["vimeo", "fab", "vimeo-v"], ["black-tie", "fab", null], ["fonticons", "fab", null], ["reddit-alien", "fab", null], ["edge", "fab", null], ["credit-card-alt", null, "credit-card"], ["codiepie", "fab", null], ["modx", "fab", null], ["fort-awesome", "fab", null], ["usb", "fab", null], ["product-hunt", "fab", null], ["mixcloud", "fab", null], ["scribd", "fab", null], ["pause-circle-o", "far", "pause-circle"], ["stop-circle-o", "far", "stop-circle"], ["bluetooth", "fab", null], ["bluetooth-b", "fab", null], ["gitlab", "fab", null], ["wpbeginner", "fab", null], ["wpforms", "fab", null], ["envira", "fab", null], ["wheelchair-alt", "fab", "accessible-icon"], ["question-circle-o", "far", "question-circle"], ["volume-control-phone", null, "phone-volume"], ["asl-interpreting", null, "american-sign-language-interpreting"], ["deafness", null, "deaf"], ["hard-of-hearing", null, "deaf"], ["glide", "fab", null], ["glide-g", "fab", null], ["signing", null, "sign-language"], ["viadeo", "fab", null], ["viadeo-square", "fab", null], ["snapchat", "fab", null], ["snapchat-ghost", "fab", null], ["snapchat-square", "fab", null], ["pied-piper", "fab", null], ["first-order", "fab", null], ["yoast", "fab", null], ["themeisle", "fab", null], ["google-plus-official", "fab", "google-plus"], ["google-plus-circle", "fab", "google-plus"], ["font-awesome", "fab", null], ["fa", "fab", "font-awesome"], ["handshake-o", "far", "handshake"], ["envelope-open-o", "far", "envelope-open"], ["linode", "fab", null], ["address-book-o", "far", "address-book"], ["vcard", null, "address-card"], ["address-card-o", "far", "address-card"], ["vcard-o", "far", "address-card"], ["user-circle-o", "far", "user-circle"], ["user-o", "far", "user"], ["id-badge", "far", null], ["drivers-license", null, "id-card"], ["id-card-o", "far", "id-card"], ["drivers-license-o", "far", "id-card"], ["quora", "fab", null], ["free-code-camp", "fab", null], ["telegram", "fab", null], ["thermometer-4", null, "thermometer-full"], ["thermometer", null, "thermometer-full"], ["thermometer-3", null, "thermometer-three-quarters"], ["thermometer-2", null, "thermometer-half"], ["thermometer-1", null, "thermometer-quarter"], ["thermometer-0", null, "thermometer-empty"], ["bathtub", null, "bath"], ["s15", null, "bath"], ["window-maximize", "far", null], ["window-restore", "far", null], ["times-rectangle", null, "window-close"], ["window-close-o", "far", "window-close"], ["times-rectangle-o", "far", "window-close"], ["bandcamp", "fab", null], ["grav", "fab", null], ["etsy", "fab", null], ["imdb", "fab", null], ["ravelry", "fab", null], ["eercast", "fab", "sellcast"], ["snowflake-o", "far", "snowflake"], ["superpowers", "fab", null], ["wpexplorer", "fab", null], ["cab", null, "taxi"]];
        return function(l) {
            try {
                l()
            } catch (l) {
                if (!t)
                    throw l
            }
        }(function() {
            var l;
            "function" == typeof i.hooks.addShims ? i.hooks.addShims(s) : (l = i.shims).push.apply(l, s)
        }),
        s
    }
    ,
    "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : l["fontawesome-free-shims"] = a()
}
)();
function showIt2() {
    document.getElementById("msg1").style.visibility = "visible"
}
setTimeout("showIt2()", 5000);
function hiddenIt() {
    document.getElementById("msg1").style.visibility = "hidden"
}
setTimeout("hiddenIt()", 15000);
function showIt3() {
    document.getElementById("msg1").style.visibility = "visible"
}
setTimeout("showIt3()", 25000);
msg1.onclick = function() {
    document.getElementById('msg1').style.visibility = "hidden"
}
;
function alertW() {
    document.getElementById("alertWapp").style.visibility = "visible"
}
setTimeout("alertW()", 15000);
var astraGetParents = function(e, t) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), a = t.length; 0 <= --a && t.item(a) !== this; )
            ;
        return -1 < a
    }
    );
    for (var a = []; e && e !== document; e = e.parentNode)
        (!t || e.matches(t)) && a.push(e);
    return a
}
  , getParents = function(e, t) {
    console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),
    astraGetParents(e, t)
}
  , astraToggleClass = function(e, t) {
    e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
}
  , toggleClass = function(e, t) {
    console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),
    astraToggleClass(e, t)
}
  , astraTriggerEvent = (!function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var a = document.createEvent("CustomEvent");
        return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        a
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype,
    window.CustomEvent = e)
}(),
function(e, t) {
    var a = new CustomEvent(t,2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
    e.dispatchEvent(a)
}
);
astraSmoothScroll = function(e, t) {
    e.preventDefault(),
    window.scrollTo({
        top: t,
        left: 0,
        behavior: "smooth"
    })
}
,
astScrollToTopHandler = function(e, t) {
    var a = getComputedStyle(t).content
      , n = t.dataset.onDevices
      , a = a.replace(/[^0-9]/g, "");
    "both" == n || "desktop" == n && "769" == a || "mobile" == n && "" == a ? (n = window.pageYOffset || document.body.scrollTop,
    e && e.length ? n > e.offsetHeight + 100 ? t.style.display = "block" : t.style.display = "none" : 300 < window.pageYOffset ? t.style.display = "block" : t.style.display = "none") : t.style.display = "none"
}
,
function() {
    var r = document.querySelectorAll("#masthead .main-header-menu-toggle")
      , c = document.getElementById("masthead")
      , i = {}
      , d = ""
      , u = document.body
      , m = "";
    function e(e) {
        d = e.detail.type;
        var t = document.querySelectorAll(".menu-toggle");
        if ("dropdown" === d && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"),
        g("updateHeader")),
        "off-canvas" === d)
            for (var a = 0; a < t.length; a++)
                void 0 !== t[a] && t[a].classList.contains("toggled") && t[a].click();
        n(d)
    }
    function g(e) {
        m = c.querySelector("#ast-mobile-header");
        var t = "";
        if (null == m || "dropdown" !== m.dataset.type || "updateHeader" === e) {
            t = (void 0 !== e && "updateHeader" !== e ? e.closest(".ast-mobile-popup-inner") : document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");
            for (var a = 0; a < t.length; a++) {
                t[a].classList.remove("ast-submenu-expanded");
                for (var n = t[a].querySelectorAll(".sub-menu"), s = 0; s < n.length; s++)
                    n[s].style.display = "none"
            }
            var o = document.querySelectorAll(".menu-toggle");
            document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"),
            document.documentElement.classList.remove("ast-off-canvas-active");
            for (var r = 0; r < o.length; r++)
                o[r].classList.remove("toggled"),
                o[r].style.display = "flex"
        }
    }
    function n(e) {
        var t = document.querySelectorAll("#ast-mobile-header .menu-toggle")
          , a = document.querySelectorAll("#ast-desktop-header .menu-toggle");
        if (void 0 === e && null !== c)
            if (m = c.querySelector("#ast-mobile-header"))
                e = m.dataset.type;
            else {
                var n = c.querySelector("#ast-desktop-header");
                if (!n)
                    return;
                e = n.dataset.toggleType
            }
        if ("off-canvas" === e) {
            var n = document.getElementById("menu-toggle-close")
              , s = document.querySelector(".ast-mobile-popup-inner");
            if (null == s)
                return;
            popupLinks = s.getElementsByTagName("a");
            for (var o = 0; o < t.length; o++)
                t[o].removeEventListener("click", astraNavMenuToggle, !1),
                t[o].addEventListener("click", popupTriggerClick, !1),
                t[o].trigger_type = "mobile";
            for (o = 0; o < a.length; o++)
                a[o].removeEventListener("click", astraNavMenuToggle, !1),
                a[o].addEventListener("click", popupTriggerClick, !1),
                a[o].trigger_type = "desktop";
            n.addEventListener("click", function(e) {
                document.getElementById("ast-mobile-popup").classList.remove("active", "show"),
                g(this)
            }),
            document.addEventListener("keyup", function(e) {
                27 === e.keyCode && (e.preventDefault(),
                document.getElementById("ast-mobile-popup").classList.remove("active", "show"),
                g())
            }),
            document.addEventListener("click", function(e) {
                e.target === document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay") && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"),
                g())
            });
            for (let e = 0, t = popupLinks.length; e < t; e++)
                null !== popupLinks[e].getAttribute("href") && (popupLinks[e].getAttribute("href").startsWith("#") || -1 !== popupLinks[e].getAttribute("href").search("#")) && (!popupLinks[e].parentElement.classList.contains("menu-item-has-children") || popupLinks[e].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (popupLinks[e].addEventListener("click", p, !0),
                popupLinks[e].headerType = "off-canvas");
            AstraToggleSetup()
        } else if ("dropdown" === e) {
            var r = document.querySelectorAll(".ast-mobile-header-content") || !1
              , s = document.querySelector(".ast-desktop-header-content") || !1;
            if (0 < r.length)
                for (let e = 0; e < r.length; e++) {
                    var l = r[e].getElementsByTagName("a");
                    for (link = 0,
                    len = l.length; link < len; link++)
                        null !== l[link].getAttribute("href") && (l[link].getAttribute("href").startsWith("#") || -1 !== l[link].getAttribute("href").search("#")) && (!l[link].parentElement.classList.contains("menu-item-has-children") || l[link].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (l[link].addEventListener("click", p, !0),
                        l[link].headerType = "dropdown")
                }
            if (s) {
                var i = s.getElementsByTagName("a");
                for (link = 0,
                len = i.length; link < len; link++)
                    i[link].addEventListener("click", p, !0),
                    i[link].headerType = "dropdown"
            }
            for (o = 0; o < t.length; o++)
                t[o].removeEventListener("click", popupTriggerClick, !1),
                t[o].addEventListener("click", astraNavMenuToggle, !1),
                t[o].trigger_type = "mobile";
            for (o = 0; o < a.length; o++)
                a[o].removeEventListener("click", popupTriggerClick, !1),
                a[o].addEventListener("click", astraNavMenuToggle, !1),
                a[o].trigger_type = "desktop";
            AstraToggleSetup()
        }
        v()
    }
    function p(e) {
        switch (e.currentTarget.headerType) {
        case "dropdown":
            for (var t = document.querySelectorAll(".menu-toggle.toggled"), a = 0; a < t.length; a++)
                t[a].click();
            break;
        case "off-canvas":
            document.getElementById("menu-toggle-close").click()
        }
    }
    "" !== (m = null != c ? c.querySelector("#ast-mobile-header") : m) && null !== m && (d = m.dataset.type),
    document.addEventListener("astMobileHeaderTypeChange", e, !1),
    popupTriggerClick = function(e) {
        var e = e.currentTarget.trigger_type
          , t = document.getElementById("ast-mobile-popup")
          , a = document.getElementById("menu-toggle-close");
        a && a.focus(),
        u.classList.contains("ast-popup-nav-open") || u.classList.add("ast-popup-nav-open"),
        u.classList.contains("ast-main-header-nav-open") || "mobile" === e || u.classList.add("ast-main-header-nav-open"),
        document.documentElement.classList.contains("ast-off-canvas-active") || document.documentElement.classList.add("ast-off-canvas-active"),
        "desktop" === e && (t.querySelector(".ast-mobile-popup-content").style.display = "none",
        t.querySelector(".ast-desktop-popup-content").style.display = "block"),
        "mobile" === e && (t.querySelector(".ast-desktop-popup-content").style.display = "none",
        t.querySelector(".ast-mobile-popup-content").style.display = "block"),
        this.style.display = "none",
        t.classList.add("active", "show")
    }
    ,
    window.addEventListener("load", function() {
        n()
    }),
    document.addEventListener("astLayoutWidthChanged", function() {
        n()
    }),
    document.addEventListener("astPartialContentRendered", function() {
        r = document.querySelectorAll(".main-header-menu-toggle"),
        u.classList.remove("ast-main-header-nav-open"),
        document.addEventListener("astMobileHeaderTypeChange", e, !1),
        n(),
        v()
    });
    var s = null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth;
    window.addEventListener("resize", function() {
        var e, t, a, n;
        "INPUT" !== document.activeElement.tagName && (e = document.getElementById("menu-toggle-close"),
        t = document.querySelector(".menu-toggle.toggled"),
        a = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),
        n = document.querySelector(".elementor-editor-active"),
        a && (a.style.display = "none"),
        (null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth) !== s && (t && null === n && t.click(),
        document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"),
        e) && null == n && e.click(),
        h(),
        AstraToggleSetup())
    }),
    document.addEventListener("DOMContentLoaded", function() {
        if (AstraToggleSetup(),
        null !== (e = u.classList.contains("ast-header-break-point") ? document.getElementById("ast-mobile-header") : document.getElementById("ast-desktop-header"))) {
            var e, t = e.querySelector(".navigation-accessibility");
            if (t && e) {
                var a = e.getElementsByTagName("button")[0];
                if (void 0 === a) {
                    if (!0 === (a = e.getElementsByTagName("a")[0]).classList.contains("astra-search-icon"))
                        return;
                    if (void 0 === a)
                        return
                }
                var n = t.getElementsByTagName("ul")[0];
                if (void 0 === n)
                    a.style.display = "none";
                else {
                    if (-1 === n.className.indexOf("nav-menu") && (n.className += " nav-menu"),
                    document.addEventListener("DOMContentLoaded", function() {
                        var e;
                        "off-canvas" === d && (e = document.getElementById("menu-toggle-close")) && (e.onclick = function() {
                            -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""),
                            a.setAttribute("aria-expanded", "false"),
                            n.setAttribute("aria-expanded", "false")) : (t.className += " toggled",
                            a.setAttribute("aria-expanded", "true"),
                            n.setAttribute("aria-expanded", "true"))
                        }
                        )
                    }),
                    a.onclick = function() {
                        -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""),
                        a.setAttribute("aria-expanded", "false"),
                        n.setAttribute("aria-expanded", "false")) : (t.className += " toggled",
                        a.setAttribute("aria-expanded", "true"),
                        n.setAttribute("aria-expanded", "true"))
                    }
                    ,
                    !astra.is_header_footer_builder_active) {
                        for (var s = n.getElementsByTagName("a"), o = n.getElementsByTagName("ul"), r = 0, l = o.length; r < l; r++)
                            o[r].parentNode.setAttribute("aria-haspopup", "true");
                        for (r = 0,
                        l = s.length; r < l; r++)
                            s[r].addEventListener("focus", S, !0),
                            s[r].addEventListener("blur", S, !0),
                            s[r].addEventListener("click", L, !0)
                    }
                    astra.is_header_footer_builder_active && !function() {
                        const t = document.querySelectorAll("nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow")
                          , a = document.querySelectorAll("nav.site-navigation .sub-menu")
                          , n = document.querySelectorAll("nav.site-navigation .menu-item-has-children")
                          , s = document.querySelectorAll(".astra-full-megamenu-wrapper");
                        t && (t.forEach(e=>{
                            e.addEventListener("keydown", function(a) {
                                "Enter" === a.key && (a.target.closest("li").querySelector(".sub-menu").classList.contains("astra-megamenu") ? setTimeout(()=>{
                                    var e = a.target.closest("li").querySelector(".sub-menu")
                                      , t = a.target.closest("li").querySelector(".astra-full-megamenu-wrapper");
                                    e && e.classList.toggle("astra-megamenu-focus"),
                                    t && t.classList.toggle("astra-megamenu-wrapper-focus"),
                                    a.target.closest("li").classList.toggle("ast-menu-hover"),
                                    "false" !== a.target.getAttribute("aria-expanded") && a.target.getAttribute("aria-expanded") ? a.target.setAttribute("aria-expanded", "false") : a.target.setAttribute("aria-expanded", "true")
                                }
                                , 10) : setTimeout(()=>{
                                    a.target.closest("li").querySelector(".sub-menu").classList.toggle("toggled-on"),
                                    a.target.closest("li").classList.toggle("ast-menu-hover"),
                                    "false" !== a.target.getAttribute("aria-expanded") && a.target.getAttribute("aria-expanded") ? a.target.setAttribute("aria-expanded", "false") : a.target.setAttribute("aria-expanded", "true")
                                }
                                , 10))
                            })
                        }
                        ),
                        (a || n) && document.addEventListener("click", function(e) {
                            b(a, t, n, s)
                        }, !1),
                        a || n) && document.addEventListener("keydown", function(e) {
                            "Escape" === e.key && b(a, t, n, s)
                        }, !1);
                        var e = document.querySelectorAll("nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow");
                        e && e.forEach(e=>{
                            e.addEventListener("keydown", function(e) {
                                e.target.closest("li").classList.contains("ast-menu-hover") || "Enter" !== e.key || b(a, t, n, s)
                            }, !1)
                        }
                        )
                    }()
                }
            }
        }
    });
    for (var t, a, o, l, h = function() {
        var e = u.style.overflow
          , t = (u.style.overflow = "hidden",
        document.documentElement.clientWidth);
        if (u.style.overflow = e,
        astra.break_point < t || 0 === t) {
            if (0 < r.length)
                for (var a = 0; a < r.length; a++)
                    null !== r[a] && r[a].classList.remove("toggled");
            u.classList.remove("ast-header-break-point"),
            u.classList.add("ast-desktop"),
            astraTriggerEvent(u, "astra-header-responsive-enabled")
        } else
            u.classList.add("ast-header-break-point"),
            u.classList.remove("ast-desktop"),
            astraTriggerEvent(u, "astra-header-responsive-disabled")
    }, v = function() {
        var e = document.querySelectorAll(".ast-account-action-login");
        if (void 0 !== e) {
            var a = document.querySelectorAll("#ast-hb-login-close")
              , n = document.querySelectorAll("#ast-hb-account-login-wrap");
            if (0 < a.length)
                for (let t = 0; t < e.length; t++)
                    e[t].onclick = function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        n[t].classList.contains("show") || n[t].classList.add("show")
                    }
                    ,
                    a[t].onclick = function(e) {
                        e.preventDefault(),
                        n[t].classList.remove("show")
                    }
        }
    }, f = (h(),
    AstraToggleSubMenu = function(e) {
        e.preventDefault(),
        "false" !== e.target.getAttribute("aria-expanded") && e.target.getAttribute("aria-expanded") ? e.target.setAttribute("aria-expanded", "false") : e.target.setAttribute("aria-expanded", "true");
        for (var t = this.parentNode, a = (t.classList.contains("ast-submenu-expanded") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && (this.classList.contains("ast-menu-toggle") || "" !== (e = t.querySelector("a").getAttribute("href")) && "#" !== e && (window.location = e)),
        t.querySelectorAll(".menu-item-has-children")), n = 0; n < a.length; n++) {
            a[n].classList.remove("ast-submenu-expanded");
            var s = a[n].querySelector(".sub-menu, .children");
            null !== s && (s.style.display = "none")
        }
        for (var o = t.parentNode.querySelectorAll(".menu-item-has-children"), n = 0; n < o.length; n++)
            if (o[n] != t) {
                o[n].classList.remove("ast-submenu-expanded");
                for (var r = o[n].querySelectorAll(".sub-menu"), l = 0; l < r.length; l++)
                    r[l].style.display = "none"
            }
        t.classList.contains("menu-item-has-children") && (astraToggleClass(t, "ast-submenu-expanded"),
        t.classList.contains("ast-submenu-expanded") ? t.querySelector(".sub-menu").style.display = "block" : t.querySelector(".sub-menu").style.display = "none")
    }
    ,
    AstraToggleSetup = function() {
        if ("undefined" != typeof astraAddon && "function" == typeof astraToggleSetupPro)
            astraToggleSetupPro(d, u, i);
        else {
            var e, t, a, n = !1;
            if (0 < (e = "off-canvas" === d || "full-width" === d ? (t = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),
            (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length) : (t = document.querySelectorAll("#ast-mobile-header"),
            (n = !(0 < (e = (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : e)) || n)
                for (var s = 0; s < e; s++)
                    if (n || (a[s].setAttribute("data-index", s),
                    i[s]) || (i[s] = a[s],
                    a[s].addEventListener("click", astraNavMenuToggle, !1)),
                    void 0 !== t[s])
                        for (var o, r = 0; r < t.length; r++)
                            if (0 < (o = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? t[r].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : t[r].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)
                                for (var l = 0; l < o.length; l++)
                                    o[l].addEventListener("click", AstraToggleSubMenu, !1)
        }
    }
    ,
    astraNavMenuToggle = function(e) {
        if ("undefined" != typeof astraAddon)
            astraNavMenuTogglePro(e, u, d, this);
        else {
            e.preventDefault();
            var e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation")
              , t = (r = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),
            "0");
            if (null !== this.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),
            r = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),
            t = "0"),
            void 0 === e[t])
                return !1;
            for (var a = e[t].querySelectorAll(".menu-item-has-children"), n = 0; n < a.length; n++) {
                a[n].classList.remove("ast-submenu-expanded");
                for (var s = a[n].querySelectorAll(".sub-menu"), o = 0; o < s.length; o++)
                    s[o].style.display = "none"
            }
            -1 !== (this.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[t], "toggle-on"),
            astraToggleClass(r[t], "toggled"),
            e[t].classList.contains("toggle-on") ? (e[t].style.display = "block",
            u.classList.add("ast-main-header-nav-open")) : (e[t].style.display = "",
            u.classList.remove("ast-main-header-nav-open")))
        }
    }
    ,
    u.addEventListener("astra-header-responsive-enabled", function() {
        var e = document.querySelectorAll(".main-header-bar-navigation");
        if (0 < e.length)
            for (var t = 0; t < e.length; t++) {
                null != e[t] && (e[t].classList.remove("toggle-on"),
                e[t].style.display = "");
                for (var a = e[t].getElementsByClassName("sub-menu"), n = 0; n < a.length; n++)
                    a[n].style.display = "";
                for (var s = e[t].getElementsByClassName("children"), o = 0; o < s.length; o++)
                    s[o].style.display = "";
                for (var r = e[t].getElementsByClassName("ast-search-menu-icon"), l = 0; l < r.length; l++)
                    r[l].classList.remove("ast-dropdown-active"),
                    r[l].style.display = ""
            }
    }, !1),
    E = navigator.userAgent,
    a = E.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
    /trident/i.test(a[1]) ? t = /\brv[ :]+(\d+)/g.exec(E) || [] : "Chrome" === a[1] && null != (t = E.match(/\bOPR|Edge\/(\d+)/)) || (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"],
    null != (t = E.match(/version\/(\d+)/i)) && a.splice(1, 1, t[1]),
    "Safari" === a[0] && a[1] < 11 && document.body.classList.add("ast-safari-browser-less-than-11")),
    document.getElementsByClassName("astra-search-icon")), y = 0; y < f.length; y++)
        f[y].onclick = function(e) {
            var t;
            this.classList.contains("slide-search") && (e.preventDefault(),
            (t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active") ? ("" !== (t.querySelector(".search-field").value || "") && t.querySelector(".search-form").submit(),
            t.classList.remove("ast-dropdown-active")) : (t.classList.add("ast-dropdown-active"),
            t.querySelector(".search-field").setAttribute("autocomplete", "off"),
            setTimeout(function() {
                t.querySelector(".search-field").focus()
            }, 200)))
        }
        ;
    function b(e, t, a, n) {
        e && e.forEach(e=>{
            e.classList.remove("astra-megamenu-focus"),
            e.classList.remove("toggled-on")
        }
        ),
        a && a.forEach(e=>{
            e.classList.remove("ast-menu-hover")
        }
        ),
        n && n.forEach(e=>{
            e.classList.remove("astra-megamenu-wrapper-focus")
        }
        ),
        t && t.forEach(e=>{
            e.setAttribute("aria-expanded", "false")
        }
        )
    }
    function L() {
        var e = this || "";
        if (e && !e.classList.contains("astra-search-icon") && null === e.closest(".ast-builder-menu") && -1 !== new String(e).indexOf("#")) {
            var t = e.parentNode;
            if (u.classList.contains("ast-header-break-point"))
                document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && t.classList.contains("menu-item-has-children") || (document.querySelector(".main-header-menu-toggle").classList.remove("toggled"),
                (t = document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"),
                t.style.display = "none",
                astraTriggerEvent(document.querySelector("body"), "astraMenuHashLinkClicked"));
            else
                for (; -1 === e.className.indexOf("nav-menu"); )
                    "li" === e.tagName.toLowerCase() && -1 !== e.className.indexOf("focus") && (e.className = e.className.replace(" focus", "")),
                    e = e.parentElement
        }
    }
    function S() {
        for (var e = this; -1 === e.className.indexOf("navigation-accessibility"); )
            "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"),
            e = e.parentElement
    }
    if (document.querySelectorAll(".search-field").forEach(e=>{
        e.addEventListener("focus", function(e) {
            var t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");
            t && astraToggleClass(t, "ast-dropdown-active")
        }),
        e.addEventListener("blur", function(e) {
            var t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");
            t && (t.classList.remove("ast-dropdown-active"),
            astraToggleClass(t, "ast-dropdown-active"))
        })
    }
    ),
    u.onclick = function(e) {
        if (void 0 !== e.target.classList && !e.target.classList.contains("ast-search-menu-icon") && 0 === astraGetParents(e.target, ".ast-search-menu-icon").length && 0 === astraGetParents(e.target, ".ast-search-icon").length)
            for (var t = document.getElementsByClassName("ast-search-menu-icon"), a = 0; a < t.length; a++)
                t[a].classList.remove("ast-dropdown-active")
    }
    ,
    astra.is_header_footer_builder_active || "querySelector"in document && "addEventListener"in window && (u.addEventListener("mousedown", function() {
        u.classList.add("ast-mouse-clicked")
    }),
    u.addEventListener("keydown", function() {
        u.classList.remove("ast-mouse-clicked")
    })),
    astra.is_scroll_to_id) {
        let t = [];
        var E = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([href*="uagb-tab"]):not(.uagb-toc-link__trigger):not(.skip-link):not(.nav-links a):not([href*="tab-"])');
        if (E)
            for (const link of E)
                link.href.split("#")[0] !== location.href.split("#")[0] ? t.push({
                    hash: link.hash,
                    url: link.href.split("#")[0]
                }) : "" !== link.hash && link.addEventListener("click", k);
        function k(e) {
            let t = 0;
            var a = document.querySelector(".site-header");
            a && ((a = a.querySelectorAll("div[data-stick-support]")) && a.forEach(e=>{
                t += e.clientHeight
            }
            ),
            a = this.hash) && (a = document.querySelector(a)) && (a = a.offsetTop - t) && astraSmoothScroll(e, a)
        }
        window.addEventListener("DOMContentLoaded", e=>{
            for (var a of t)
                if (window.location.href.split("#")[0] === a.url) {
                    var n = document.querySelector(".site-header");
                    let t = 0;
                    n = n.querySelectorAll("div[data-stick-support]"),
                    n = (n && n.forEach(e=>{
                        t += e.clientHeight
                    }
                    ),
                    document.querySelector(a.hash));
                    n && (a = n.offsetTop - t) && astraSmoothScroll(e, a)
                }
        }
        )
    }
    astra.is_scroll_to_top && (o = document.querySelector("#page header"),
    l = document.getElementById("ast-scroll-top"),
    astScrollToTopHandler(o, l),
    window.addEventListener("scroll", function() {
        astScrollToTopHandler(o, l)
    }),
    l.onclick = function(e) {
        astraSmoothScroll(e, 0)
    }
    ,
    l.addEventListener("keydown", function(e) {
        "Enter" === e.key && astraSmoothScroll(e, 0)
    }))
}();
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, n, f) {
    a instanceof String && (a = String(a));
    for (var p = a.length, k = 0; k < p; k++) {
        var b = a[k];
        if (n.call(f, b, k, a))
            return {
                i: k,
                v: b
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, n, f) {
    a != Array.prototype && a != Object.prototype && (a[n] = f.value)
}
;
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, n, f, p) {
    if (n) {
        f = $jscomp.global;
        a = a.split(".");
        for (p = 0; p < a.length - 1; p++) {
            var k = a[p];
            k in f || (f[k] = {});
            f = f[k]
        }
        a = a[a.length - 1];
        p = f[a];
        n = n(p);
        n != p && null != n && $jscomp.defineProperty(f, a, {
            configurable: !0,
            writable: !0,
            value: n
        })
    }
}
;
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, f) {
        return $jscomp.findInternal(this, a, f).v
    }
}, "es6", "es3");
(function(a, n, f) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof exports && "undefined" === typeof Meteor ? module.exports = a(require("jquery")) : a(n || f)
}
)(function(a) {
    var n = function(b, d, e) {
        var c = {
            invalid: [],
            getCaret: function() {
                try {
                    var a = 0
                      , r = b.get(0)
                      , h = document.selection
                      , d = r.selectionStart;
                    if (h && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                        var e = h.createRange();
                        e.moveStart("character", -c.val().length);
                        a = e.text.length
                    } else if (d || "0" === d)
                        a = d;
                    return a
                } catch (C) {}
            },
            setCaret: function(a) {
                try {
                    if (b.is(":focus")) {
                        var c = b.get(0);
                        if (c.setSelectionRange)
                            c.setSelectionRange(a, a);
                        else {
                            var g = c.createTextRange();
                            g.collapse(!0);
                            g.moveEnd("character", a);
                            g.moveStart("character", a);
                            g.select()
                        }
                    }
                } catch (B) {}
            },
            events: function() {
                b.on("keydown.mask", function(a) {
                    b.data("mask-keycode", a.keyCode || a.which);
                    b.data("mask-previus-value", b.val());
                    b.data("mask-previus-caret-pos", c.getCaret());
                    c.maskDigitPosMapOld = c.maskDigitPosMap
                }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        b.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    b.data("changed", !0)
                }).on("blur.mask", function() {
                    f === c.val() || b.data("changed") || b.trigger("change");
                    b.data("changed", !1)
                }).on("blur.mask", function() {
                    f = c.val()
                }).on("focus.mask", function(b) {
                    !0 === e.selectOnFocus && a(b.target).select()
                }).on("focusout.mask", function() {
                    e.clearIfNotMatch && !k.test(c.val()) && c.val("")
                })
            },
            getRegexMask: function() {
                for (var a = [], b, c, e, t, f = 0; f < d.length; f++)
                    (b = l.translation[d.charAt(f)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                    e = b.optional,
                    (b = b.recursive) ? (a.push(d.charAt(f)),
                    t = {
                        digit: d.charAt(f),
                        pattern: c
                    }) : a.push(e || b ? c + "?" : c)) : a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                a = a.join("");
                t && (a = a.replace(new RegExp("(" + t.digit + "(.*" + t.digit + ")?)"), "($1)?").replace(new RegExp(t.digit,"g"), t.pattern));
                return new RegExp(a)
            },
            destroyEvents: function() {
                b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(a) {
                var c = b.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (b[c]() !== a)
                        b[c](a);
                    c = b
                } else
                    c = b[c]();
                return c
            },
            calculateCaretPosition: function(a) {
                var d = c.getMasked()
                  , h = c.getCaret();
                if (a !== d) {
                    var e = b.data("mask-previus-caret-pos") || 0;
                    d = d.length;
                    var g = a.length, f = a = 0, l = 0, k = 0, m;
                    for (m = h; m < d && c.maskDigitPosMap[m]; m++)
                        f++;
                    for (m = h - 1; 0 <= m && c.maskDigitPosMap[m]; m--)
                        a++;
                    for (m = h - 1; 0 <= m; m--)
                        c.maskDigitPosMap[m] && l++;
                    for (m = e - 1; 0 <= m; m--)
                        c.maskDigitPosMapOld[m] && k++;
                    h > g ? h = 10 * d : e >= h && e !== g ? c.maskDigitPosMapOld[h] || (e = h,
                    h = h - (k - l) - a,
                    c.maskDigitPosMap[h] && (h = e)) : h > e && (h = h + (l - k) + f)
                }
                return h
            },
            behaviour: function(d) {
                d = d || window.event;
                c.invalid = [];
                var e = b.data("mask-keycode");
                if (-1 === a.inArray(e, l.byPassKeys)) {
                    e = c.getMasked();
                    var h = c.getCaret()
                      , g = b.data("mask-previus-value") || "";
                    setTimeout(function() {
                        c.setCaret(c.calculateCaretPosition(g))
                    }, a.jMaskGlobals.keyStrokeCompensation);
                    c.val(e);
                    c.setCaret(h);
                    return c.callbacks(d)
                }
            },
            getMasked: function(a, b) {
                var h = []
                  , f = void 0 === b ? c.val() : b + ""
                  , g = 0
                  , k = d.length
                  , n = 0
                  , p = f.length
                  , m = 1
                  , r = "push"
                  , u = -1
                  , w = 0;
                b = [];
                if (e.reverse) {
                    r = "unshift";
                    m = -1;
                    var x = 0;
                    g = k - 1;
                    n = p - 1;
                    var A = function() {
                        return -1 < g && -1 < n
                    }
                } else
                    x = k - 1,
                    A = function() {
                        return g < k && n < p
                    }
                    ;
                for (var z; A(); ) {
                    var y = d.charAt(g)
                      , v = f.charAt(n)
                      , q = l.translation[y];
                    if (q)
                        v.match(q.pattern) ? (h[r](v),
                        q.recursive && (-1 === u ? u = g : g === x && g !== u && (g = u - m),
                        x === u && (g -= m)),
                        g += m) : v === z ? (w--,
                        z = void 0) : q.optional ? (g += m,
                        n -= m) : q.fallback ? (h[r](q.fallback),
                        g += m,
                        n -= m) : c.invalid.push({
                            p: n,
                            v: v,
                            e: q.pattern
                        }),
                        n += m;
                    else {
                        if (!a)
                            h[r](y);
                        v === y ? (b.push(n),
                        n += m) : (z = y,
                        b.push(n + w),
                        w++);
                        g += m
                    }
                }
                a = d.charAt(x);
                k !== p + 1 || l.translation[a] || h.push(a);
                h = h.join("");
                c.mapMaskdigitPositions(h, b, p);
                return h
            },
            mapMaskdigitPositions: function(a, b, d) {
                a = e.reverse ? a.length - d : 0;
                c.maskDigitPosMap = {};
                for (d = 0; d < b.length; d++)
                    c.maskDigitPosMap[b[d] + a] = 1
            },
            callbacks: function(a) {
                var g = c.val()
                  , h = g !== f
                  , k = [g, a, b, e]
                  , l = function(a, b, c) {
                    "function" === typeof e[a] && b && e[a].apply(this, c)
                };
                l("onChange", !0 === h, k);
                l("onKeyPress", !0 === h, k);
                l("onComplete", g.length === d.length, k);
                l("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e])
            }
        };
        b = a(b);
        var l = this, f = c.val(), k;
        d = "function" === typeof d ? d(c.val(), void 0, b, e) : d;
        l.mask = d;
        l.options = e;
        l.remove = function() {
            var a = c.getCaret();
            l.options.placeholder && b.removeAttr("placeholder");
            b.data("mask-maxlength") && b.removeAttr("maxlength");
            c.destroyEvents();
            c.val(l.getCleanVal());
            c.setCaret(a);
            return b
        }
        ;
        l.getCleanVal = function() {
            return c.getMasked(!0)
        }
        ;
        l.getMaskedVal = function(a) {
            return c.getMasked(!1, a)
        }
        ;
        l.init = function(g) {
            g = g || !1;
            e = e || {};
            l.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
            l.byPassKeys = a.jMaskGlobals.byPassKeys;
            l.translation = a.extend({}, a.jMaskGlobals.translation, e.translation);
            l = a.extend(!0, {}, l, e);
            k = c.getRegexMask();
            if (g)
                c.events(),
                c.val(c.getMasked());
            else {
                e.placeholder && b.attr("placeholder", e.placeholder);
                b.data("mask") && b.attr("autocomplete", "off");
                g = 0;
                for (var f = !0; g < d.length; g++) {
                    var h = l.translation[d.charAt(g)];
                    if (h && h.recursive) {
                        f = !1;
                        break
                    }
                }
                f && b.attr("maxlength", d.length).data("mask-maxlength", !0);
                c.destroyEvents();
                c.events();
                g = c.getCaret();
                c.val(c.getMasked());
                c.setCaret(g)
            }
        }
        ;
        l.init(!b.is("input"))
    };
    a.maskWatchers = {};
    var f = function() {
        var b = a(this)
          , d = {}
          , e = b.attr("data-mask");
        b.attr("data-mask-reverse") && (d.reverse = !0);
        b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
        "true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
        if (p(b, e, d))
            return b.data("mask", new n(this,e,d))
    }
      , p = function(b, d, e) {
        e = e || {};
        var c = a(b).data("mask")
          , f = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
            return "function" === typeof d && (d = d(b)),
            "object" !== typeof c || f(c.options) !== f(e) || c.mask !== d
        } catch (w) {}
    }
      , k = function(a) {
        var b = document.createElement("div");
        a = "on" + a;
        var e = a in b;
        e || (b.setAttribute(a, "return;"),
        e = "function" === typeof b[a]);
        return e
    };
    a.fn.mask = function(b, d) {
        d = d || {};
        var e = this.selector
          , c = a.jMaskGlobals
          , f = c.watchInterval;
        c = d.watchInputs || c.watchInputs;
        var k = function() {
            if (p(this, b, d))
                return a(this).data("mask", new n(this,b,d))
        };
        a(this).each(k);
        e && "" !== e && c && (clearInterval(a.maskWatchers[e]),
        a.maskWatchers[e] = setInterval(function() {
            a(document).find(e).each(k)
        }, f));
        return this
    }
    ;
    a.fn.masked = function(a) {
        return this.data("mask").getMaskedVal(a)
    }
    ;
    a.fn.unmask = function() {
        clearInterval(a.maskWatchers[this.selector]);
        delete a.maskWatchers[this.selector];
        return this.each(function() {
            var b = a(this).data("mask");
            b && b.remove().removeData("mask")
        })
    }
    ;
    a.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }
    ;
    a.applyDataMask = function(b) {
        b = b || a.jMaskGlobals.maskElements;
        (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)
    }
    ;
    k = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && k("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    k = a.jMaskGlobals = a.extend(!0, {}, k, a.jMaskGlobals);
    k.dataMask && a.applyDataMask();
    setInterval(function() {
        a.jMaskGlobals.watchDataMask && a.applyDataMask()
    }, k.watchInterval)
}, window.jQuery, window.Zepto);
(function($) {
    $(window).load(function() {
        $(".mascara_data").addClass('date');
        $("#mascara_data").addClass('date');
        $("#form-field-mascara_data").addClass('date');
        $("#form-field-mascara_data2").addClass('date');
        $("#form-field-mascara_data3").addClass('date');
        $("#form-field-mascara_data4").addClass('date');
        $(".mascara_hora").addClass('time');
        $("#mascara_hora").addClass('time');
        $("#form-field-mascara_hora").addClass('time');
        $("#form-field-mascara_hora2").addClass('time');
        $("#form-field-mascara_hora3").addClass('time');
        $("#form-field-mascara_hora4").addClass('time');
        $(".mascara_data_hora").addClass('date_time');
        $("#mascara_data_hora").addClass('date_time');
        $("#form-field-mascara_data_hora").addClass('date_time');
        $("#form-field-mascara_data_hora2").addClass('date_time');
        $("#form-field-mascara_data_hora3").addClass('date_time');
        $("#form-field-mascara_data_hora4").addClass('date_time');
        $(".mascara_cep").addClass('cep');
        $("#mascara_cep").addClass('cep');
        $("#form-field-mascara_cep").addClass('cep');
        $("#form-field-mascara_cep2").addClass('cep');
        $("#form-field-mascara_cep3").addClass('cep');
        $("#form-field-mascara_cep4").addClass('cep');
        $(".mascara_telefone").addClass('phone');
        $("#mascara_telefone").addClass('phone');
        $("#form-field-mascara_telefone").addClass('phone');
        $("#form-field-mascara_telefone2").addClass('phone');
        $("#form-field-mascara_telefone3").addClass('phone');
        $("#form-field-mascara_telefone4").addClass('phone');
        $(".mascara_telefone_ddd").addClass('telephone_with_ddd');
        $("#mascara_telefone_ddd").addClass('telephone_with_ddd');
        $("#form-field-mascara_telefone_ddd").addClass('telephone_with_ddd');
        $("#form-field-mascara_telefone_ddd2").addClass('telephone_with_ddd');
        $("#form-field-mascara_telefone_ddd3").addClass('telephone_with_ddd');
        $("#form-field-mascara_telefone_ddd4").addClass('telephone_with_ddd');
        $(".mascara_telefone_nono_digito").addClass('phone_with_ddd');
        $("#mascara_telefone_nono_digito").addClass('phone_with_ddd');
        $("#form-field-mascara_telefone_nono_digito").addClass('phone_with_ddd');
        $("#form-field-mascara_telefone_nono_digito2").addClass('phone_with_ddd');
        $("#form-field-mascara_telefone_nono_digito3").addClass('phone_with_ddd');
        $("#form-field-mascara_telefone_nono_digito4").addClass('phone_with_ddd');
        $(".mascara_cpf_ou_cnpj").addClass('cpfcnpj');
        $("#mascara_cpf_ou_cnpj").addClass('cpfcnpj');
        $("#form-field-mascara_cpf_ou_cnpj").addClass('cpfcnpj');
        $("#form-field-mascara_cpf_ou_cnpj2").addClass('cpfcnpj');
        $("#form-field-mascara_cpf_ou_cnpj3").addClass('cpfcnpj');
        $("#form-field-mascara_cpf_ou_cnpj4").addClass('cpfcnpj');
        $(".mascara_cpf").addClass('cpf');
        $("#mascara_cpf").addClass('cpf');
        $("#form-field-mascara_cpf").addClass('cpf');
        $("#form-field-mascara_cpf2").addClass('cpf');
        $("#form-field-mascara_cpf3").addClass('cpf');
        $("#form-field-mascara_cpf4").addClass('cpf');
        $(".mascara_cnpj").addClass('cnpj');
        $("#mascara_cnpj").addClass('cnpj');
        $("#form-field-mascara_cnpj").addClass('cnpj');
        $("#form-field-mascara_cnpj2").addClass('cnpj');
        $("#form-field-mascara_cnpj3").addClass('cnpj');
        $("#form-field-mascara_cnpj4").addClass('cnpj');
        $(".mascara_monetario").addClass('money');
        $("#mascara_monetario").addClass('money');
        $("#form-field-mascara_monetario").addClass('money');
        $("#form-field-mascara_monetario2").addClass('money');
        $("#form-field-mascara_monetario3").addClass('money');
        $("#form-field-mascara_monetario4").addClass('money');
        $(".mascara_ip").addClass('ip_address');
        $("#mascara_ip").addClass('ip_address');
        $("#form-field-mascara_ip").addClass('ip_address');
        $("#form-field-mascara_ip2").addClass('ip_address');
        $("#form-field-mascara_ip3").addClass('ip_address');
        $("#form-field-mascara_ip4").addClass('ip_address');
        $(".mascara_porcentagem").addClass('percent');
        $("#mascara_porcentagem").addClass('percent');
        $("#form-field-mascara_porcentagem").addClass('percent');
        $("#form-field-mascara_porcentagem2").addClass('percent');
        $("#form-field-mascara_porcentagem3").addClass('percent');
        $("#form-field-mascara_porcentagem4").addClass('percent');
        $(".mascara_placa").addClass('placa');
        $("#mascara_placa").addClass('placa');
        $("#form-field-mascara_placa").addClass('placa');
        $("#form-field-mascara_placa2").addClass('placa');
        $("#form-field-mascara_placa3").addClass('placa');
        $("#form-field-mascara_placa4").addClass('placa');
        $(".mascara_usuario").addClass('user_chars');
        $("#mascara_usuario").addClass('user_chars');
        $("#form-field-mascara_usuario").addClass('user_chars');
        $("#form-field-mascara_usuario2").addClass('user_chars');
        $("#form-field-mascara_usuario3").addClass('user_chars');
        $("#form-field-mascara_usuario4").addClass('user_chars');
        $(".mascara_cartaon").addClass('card_number');
        $("#mascara_cartaon").addClass('card_number');
        $("#form-field-mascara_cartaon").addClass('card_number');
        $("#form-field-mascara_cartaon2").addClass('card_number');
        $("#form-field-mascara_cartaon3").addClass('card_number');
        $("#form-field-mascara_cartaon4").addClass('card_number');
        $(".mascara_cartaod").addClass('card_date');
        $("#mascara_cartaod").addClass('card_date');
        $("#form-field-mascara_cartaod").addClass('card_date');
        $("#form-field-mascara_cartaod2").addClass('card_date');
        $("#form-field-mascara_cartaod3").addClass('card_date');
        $("#form-field-mascara_cartaod4").addClass('card_date');
        $('.date').mask('00/00/0000');
        $('.time').mask('00:00:00');
        $('.date_time').mask('00/00/0000 00:00:00');
        $('.cep').mask('00000-000');
        $('.phone').mask('0000-0000');
        $('.telephone_with_ddd').mask('(00) 0000-0000');
        $('.phone_with_ddd').mask('(00) 00000-0000');
        var maskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
        }
          , options = {
            onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options)
            }
        };
        $('.phone_with_ddd').mask(maskBehavior, options);
        var options = {
            onKeyPress: function(cpfcnpj, e, field, options) {
                var masks = ['000.000.000-009', '00.000.000/0000-00'];
                var mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
                $('.cpfcnpj').mask(mask, options)
            }
        };
        $('.cpfcnpj').mask('000.000.000-009', options);
        $('.cpf').mask('000.000.000-00', {
            reverse: !0
        });
        $('.cnpj').mask('00.000.000/0000-00', {
            reverse: !0
        });
        $('.money').mask('000.000.000.000.000,00', {
            reverse: !0
        });
        $('.ip_address').mask('099.099.099.099');
        $('.percent').mask('##0,00%', {
            reverse: !0
        });
        var MercoSulMaskBehavior = function(val) {
            var placams = val.replace(/[^a-zA-Z0-9]/g, '');
            if (placams.length < 5)
                return 'SSS-0A00';
            return placams.charAt(4).replace(/\d/g, '').length == 1 ? 'SSS0S00' : 'SSS-0000'
        }
          , spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(MercoSulMaskBehavior.apply({}, arguments), options);
                e.target.value = val.toUpperCase()
            }
        };
        $('.placa').mask(MercoSulMaskBehavior, spOptions);
        $('.user_chars').mask('Z', {
            translation: {
                'Z': {
                    pattern: /[a-z0-9_-]/,
                    recursive: !0
                }
            }
        });
        $('.card_number').mask('0000-0000-0000-0000');
        $('.card_date').mask('00/00');
        $('.clear-if-not-match').mask("00/00/0000", {
            clearIfNotMatch: !0
        });
        $('.placeholder').mask("00/00/0000", {
            placeholder: "__/__/____"
        });
        $('.fallback').mask("00r00r0000", {
            translation: {
                'r': {
                    pattern: /[\/]/,
                    fallback: '/'
                },
                placeholder: "__/__/____"
            }
        });
        $('.selectonfocus').mask("00/00/0000", {
            selectOnFocus: !0
        });
        jQuery(document).on('elementor/popup/show', ()=>{
            $(".mascara_data").addClass('date');
            $("#mascara_data").addClass('date');
            $("#form-field-mascara_data").addClass('date');
            $("#form-field-mascara_data2").addClass('date');
            $("#form-field-mascara_data3").addClass('date');
            $("#form-field-mascara_data4").addClass('date');
            $(".mascara_hora").addClass('time');
            $("#mascara_hora").addClass('time');
            $("#form-field-mascara_hora").addClass('time');
            $("#form-field-mascara_hora2").addClass('time');
            $("#form-field-mascara_hora3").addClass('time');
            $("#form-field-mascara_hora4").addClass('time');
            $(".mascara_data_hora").addClass('date_time');
            $("#mascara_data_hora").addClass('date_time');
            $("#form-field-mascara_data_hora").addClass('date_time');
            $("#form-field-mascara_data_hora2").addClass('date_time');
            $("#form-field-mascara_data_hora3").addClass('date_time');
            $("#form-field-mascara_data_hora4").addClass('date_time');
            $(".mascara_cep").addClass('cep');
            $("#mascara_cep").addClass('cep');
            $("#form-field-mascara_cep").addClass('cep');
            $("#form-field-mascara_cep2").addClass('cep');
            $("#form-field-mascara_cep3").addClass('cep');
            $("#form-field-mascara_cep4").addClass('cep');
            $(".mascara_telefone").addClass('phone');
            $("#mascara_telefone").addClass('phone');
            $("#form-field-mascara_telefone").addClass('phone');
            $("#form-field-mascara_telefone2").addClass('phone');
            $("#form-field-mascara_telefone3").addClass('phone');
            $("#form-field-mascara_telefone4").addClass('phone');
            $(".mascara_telefone_ddd").addClass('telephone_with_ddd');
            $("#mascara_telefone_ddd").addClass('telephone_with_ddd');
            $("#form-field-mascara_telefone_ddd").addClass('telephone_with_ddd');
            $("#form-field-mascara_telefone_ddd2").addClass('telephone_with_ddd');
            $("#form-field-mascara_telefone_ddd3").addClass('telephone_with_ddd');
            $("#form-field-mascara_telefone_ddd4").addClass('telephone_with_ddd');
            $(".mascara_telefone_nono_digito").addClass('phone_with_ddd');
            $("#mascara_telefone_nono_digito").addClass('phone_with_ddd');
            $("#form-field-mascara_telefone_nono_digito").addClass('phone_with_ddd');
            $("#form-field-mascara_telefone_nono_digito2").addClass('phone_with_ddd');
            $("#form-field-mascara_telefone_nono_digito3").addClass('phone_with_ddd');
            $("#form-field-mascara_telefone_nono_digito4").addClass('phone_with_ddd');
            $(".mascara_cpf_ou_cnpj").addClass('cpfcnpj');
            $("#mascara_cpf_ou_cnpj").addClass('cpfcnpj');
            $("#form-field-mascara_cpf_ou_cnpj").addClass('cpfcnpj');
            $("#form-field-mascara_cpf_ou_cnpj2").addClass('cpfcnpj');
            $("#form-field-mascara_cpf_ou_cnpj3").addClass('cpfcnpj');
            $("#form-field-mascara_cpf_ou_cnpj4").addClass('cpfcnpj');
            $(".mascara_cpf").addClass('cpf');
            $("#mascara_cpf").addClass('cpf');
            $("#form-field-mascara_cpf").addClass('cpf');
            $("#form-field-mascara_cpf2").addClass('cpf');
            $("#form-field-mascara_cpf3").addClass('cpf');
            $("#form-field-mascara_cpf4").addClass('cpf');
            $(".mascara_cnpj").addClass('cnpj');
            $("#mascara_cnpj").addClass('cnpj');
            $("#form-field-mascara_cnpj").addClass('cnpj');
            $("#form-field-mascara_cnpj2").addClass('cnpj');
            $("#form-field-mascara_cnpj3").addClass('cnpj');
            $("#form-field-mascara_cnpj4").addClass('cnpj');
            $(".mascara_monetario").addClass('money');
            $("#mascara_monetario").addClass('money');
            $("#form-field-mascara_monetario").addClass('money');
            $("#form-field-mascara_monetario2").addClass('money');
            $("#form-field-mascara_monetario3").addClass('money');
            $("#form-field-mascara_monetario4").addClass('money');
            $(".mascara_ip").addClass('ip_address');
            $("#mascara_ip").addClass('ip_address');
            $("#form-field-mascara_ip").addClass('ip_address');
            $("#form-field-mascara_ip2").addClass('ip_address');
            $("#form-field-mascara_ip3").addClass('ip_address');
            $("#form-field-mascara_ip4").addClass('ip_address');
            $(".mascara_porcentagem").addClass('percent');
            $("#mascara_porcentagem").addClass('percent');
            $("#form-field-mascara_porcentagem").addClass('percent');
            $("#form-field-mascara_porcentagem2").addClass('percent');
            $("#form-field-mascara_porcentagem3").addClass('percent');
            $("#form-field-mascara_porcentagem4").addClass('percent');
            $(".mascara_placa").addClass('placa');
            $("#mascara_placa").addClass('placa');
            $("#form-field-mascara_placa").addClass('placa');
            $("#form-field-mascara_placa2").addClass('placa');
            $("#form-field-mascara_placa3").addClass('placa');
            $("#form-field-mascara_placa4").addClass('placa');
            $(".mascara_usuario").addClass('user_chars');
            $("#mascara_usuario").addClass('user_chars');
            $("#form-field-mascara_usuario").addClass('user_chars');
            $("#form-field-mascara_usuario2").addClass('user_chars');
            $("#form-field-mascara_usuario3").addClass('user_chars');
            $("#form-field-mascara_usuario4").addClass('user_chars');
            $(".mascara_cartaon").addClass('card_number');
            $("#mascara_cartaon").addClass('card_number');
            $("#form-field-mascara_cartaon").addClass('card_number');
            $("#form-field-mascara_cartaon2").addClass('card_number');
            $("#form-field-mascara_cartaon3").addClass('card_number');
            $("#form-field-mascara_cartaon4").addClass('card_number');
            $(".mascara_cartaod").addClass('card_date');
            $("#mascara_cartaod").addClass('card_date');
            $("#form-field-mascara_cartaod").addClass('card_date');
            $("#form-field-mascara_cartaod2").addClass('card_date');
            $("#form-field-mascara_cartaod3").addClass('card_date');
            $("#form-field-mascara_cartaod4").addClass('card_date');
            $('.date').mask('00/00/0000');
            $('.time').mask('00:00:00');
            $('.date_time').mask('00/00/0000 00:00:00');
            $('.cep').mask('00000-000');
            $('.phone').mask('0000-0000');
            $('.telephone_with_ddd').mask('(00) 0000-0000');
            $('.phone_with_ddd').mask('(00) 00000-0000');
            var maskBehavior = function(val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
            }
              , options = {
                onKeyPress: function(val, e, field, options) {
                    field.mask(maskBehavior.apply({}, arguments), options)
                }
            };
            $('.phone_with_ddd').mask(maskBehavior, options);
            var options = {
                onKeyPress: function(cpfcnpj, e, field, options) {
                    var masks = ['000.000.000-009', '00.000.000/0000-00'];
                    var mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
                    $('.cpfcnpj').mask(mask, options)
                }
            };
            $('.cpfcnpj').mask('000.000.000-009', options);
            $('.cpf').mask('000.000.000-00', {
                reverse: !0
            });
            $('.cnpj').mask('00.000.000/0000-00', {
                reverse: !0
            });
            $('.money').mask('000.000.000.000.000,00', {
                reverse: !0
            });
            $('.ip_address').mask('099.099.099.099');
            $('.percent').mask('##0,00%', {
                reverse: !0
            });
            var MercoSulMaskBehavior = function(val) {
                var placams = val.replace(/[^a-zA-Z0-9]/g, '');
                if (placams.length < 5)
                    return 'SSS-0A00';
                return placams.charAt(4).replace(/\d/g, '').length == 1 ? 'SSS0S00' : 'SSS-0000'
            }
              , spOptions = {
                onKeyPress: function(val, e, field, options) {
                    field.mask(MercoSulMaskBehavior.apply({}, arguments), options);
                    e.target.value = val.toUpperCase()
                }
            };
            $('.placa').mask(MercoSulMaskBehavior, spOptions);
            $('.user_chars').mask('Z', {
                translation: {
                    'Z': {
                        pattern: /[a-z0-9_-]/,
                        recursive: !0
                    }
                }
            });
            $('.card_number').mask('0000-0000-0000-0000');
            $('.card_date').mask('00/00');
            $('.clear-if-not-match').mask("00/00/0000", {
                clearIfNotMatch: !0
            });
            $('.placeholder').mask("00/00/0000", {
                placeholder: "__/__/____"
            });
            $('.fallback').mask("00r00r0000", {
                translation: {
                    'r': {
                        pattern: /[\/]/,
                        fallback: '/'
                    },
                    placeholder: "__/__/____"
                }
            });
            $('.selectonfocus').mask("00/00/0000", {
                selectOnFocus: !0
            })
        }
        )
    })
}
)(jQuery);
(typeof navigator !== "undefined") && (function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(function() {
            return factory(root)
        })
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(root)
    } else {
        root.lottie = factory(root);
        root.bodymovin = root.lottie
    }
}((window || {}), function(window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs, bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {};
    function ProjectInterface() {
        return {}
    }
    !function() {
        var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], r = e.length;
        for (t = 0; t < r; t += 1)
            BMMath[e[t]] = Math[e[t]]
    }(),
    BMMath.random = Math.random,
    BMMath.abs = function(t) {
        if ("object" === typeof t && t.length) {
            var e, r = createSizedArray(t.length), i = t.length;
            for (e = 0; e < i; e += 1)
                r[e] = Math.abs(t[e]);
            return r
        }
        return Math.abs(t)
    }
    ;
    var defaultCurveSegments = 150
      , degToRads = Math.PI / 180
      , roundCorner = .5519;
    function roundValues(t) {
        bm_rnd = t ? Math.round : function(t) {
            return t
        }
    }
    function styleDiv(t) {
        t.style.position = "absolute",
        t.style.top = 0,
        t.style.left = 0,
        t.style.display = "block",
        t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0",
        t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible",
        t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }
    function BMEnterFrameEvent(t, e, r, i) {
        this.type = t,
        this.currentTime = e,
        this.totalTime = r,
        this.direction = i < 0 ? -1 : 1
    }
    function BMCompleteEvent(t, e) {
        this.type = t,
        this.direction = e < 0 ? -1 : 1
    }
    function BMCompleteLoopEvent(t, e, r, i) {
        this.type = t,
        this.currentLoop = r,
        this.totalLoops = e,
        this.direction = i < 0 ? -1 : 1
    }
    function BMSegmentStartEvent(t, e, r) {
        this.type = t,
        this.firstFrame = e,
        this.totalFrames = r
    }
    function BMDestroyEvent(t, e) {
        this.type = t,
        this.target = e
    }
    function BMRenderFrameErrorEvent(t, e) {
        this.type = "renderFrameError",
        this.nativeError = t,
        this.currentTime = e
    }
    function BMConfigErrorEvent(t) {
        this.type = "configError",
        this.nativeError = t
    }
    function BMAnimationConfigErrorEvent(t, e) {
        this.type = t,
        this.nativeError = e,
        this.currentTime = currentTime
    }
    roundValues(!1);
    var createElementID = (G = 0,
    function() {
        return "__lottie_element_" + ++G
    }
    ), G;
    function HSVtoRGB(t, e, r) {
        var i, s, a, n, o, h, l, p;
        switch (h = r * (1 - e),
        l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e),
        p = r * (1 - (1 - o) * e),
        n % 6) {
        case 0:
            i = r,
            s = p,
            a = h;
            break;
        case 1:
            i = l,
            s = r,
            a = h;
            break;
        case 2:
            i = h,
            s = r,
            a = p;
            break;
        case 3:
            i = h,
            s = l,
            a = r;
            break;
        case 4:
            i = p,
            s = h,
            a = r;
            break;
        case 5:
            i = r,
            s = h,
            a = l
        }
        return [i, s, a]
    }
    function RGBtoHSV(t, e, r) {
        var i, s = Math.max(t, e, r), a = Math.min(t, e, r), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
        switch (s) {
        case a:
            i = 0;
            break;
        case t:
            i = e - r + n * (e < r ? 6 : 0),
            i /= 6 * n;
            break;
        case e:
            i = r - t + 2 * n,
            i /= 6 * n;
            break;
        case r:
            i = t - e + 4 * n,
            i /= 6 * n
        }
        return [i, o, h]
    }
    function addSaturationToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[1] += e,
        1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0),
        HSVtoRGB(r[0], r[1], r[2])
    }
    function addBrightnessToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[2] += e,
        1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0),
        HSVtoRGB(r[0], r[1], r[2])
    }
    function addHueToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[0] += e / 360,
        1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1),
        HSVtoRGB(r[0], r[1], r[2])
    }
    var rgbToHex = function() {
        var t, e, i = [];
        for (t = 0; t < 256; t += 1)
            e = t.toString(16),
            i[t] = 1 == e.length ? "0" + e : e;
        return function(t, e, r) {
            return t < 0 && (t = 0),
            e < 0 && (e = 0),
            r < 0 && (r = 0),
            "#" + i[t] + i[e] + i[r]
        }
    }();
    function BaseEvent() {}
    BaseEvent.prototype = {
        triggerEvent: function(t, e) {
            if (this._cbs[t])
                for (var r = this._cbs[t].length, i = 0; i < r; i++)
                    this._cbs[t][i](e)
        },
        addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []),
            this._cbs[t].push(e),
            function() {
                this.removeEventListener(t, e)
            }
            .bind(this)
        },
        removeEventListener: function(t, e) {
            if (e) {
                if (this._cbs[t]) {
                    for (var r = 0, i = this._cbs[t].length; r < i; )
                        this._cbs[t][r] === e && (this._cbs[t].splice(r, 1),
                        r -= 1,
                        i -= 1),
                        r += 1;
                    this._cbs[t].length || (this._cbs[t] = null)
                }
            } else
                this._cbs[t] = null
        }
    };
    var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
        return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
    }
    : function(t, e) {
        var r, i = 0, s = [];
        switch (t) {
        case "int16":
        case "uint8c":
            r = 1;
            break;
        default:
            r = 1.1
        }
        for (i = 0; i < e; i += 1)
            s.push(r);
        return s
    }
    ;
    function createSizedArray(t) {
        return Array.apply(null, {
            length: t
        })
    }
    function createNS(t) {
        return document.createElementNS(svgNS, t)
    }
    function createTag(t) {
        return document.createElement(t)
    }
    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
        addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t),
            this.container.addDynamicProperty(this),
            this._isAnimated = !0)
        },
        iterateDynamicProperties: function() {
            this._mdf = !1;
            var t, e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue(),
                this.dynamicProperties[t]._mdf && (this._mdf = !0)
        },
        initDynamicPropertyContainer: function(t) {
            this.container = t,
            this.dynamicProperties = [],
            this._mdf = !1,
            this._isAnimated = !1
        }
    };
    var getBlendMode = (Pa = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
    },
    function(t) {
        return Pa[t] || ""
    }
    ), Pa, Matrix = function() {
        var s = Math.cos
          , a = Math.sin
          , n = Math.tan
          , i = Math.round;
        function t() {
            return this.props[0] = 1,
            this.props[1] = 0,
            this.props[2] = 0,
            this.props[3] = 0,
            this.props[4] = 0,
            this.props[5] = 1,
            this.props[6] = 0,
            this.props[7] = 0,
            this.props[8] = 0,
            this.props[9] = 0,
            this.props[10] = 1,
            this.props[11] = 0,
            this.props[12] = 0,
            this.props[13] = 0,
            this.props[14] = 0,
            this.props[15] = 1,
            this
        }
        function e(t) {
            if (0 === t)
                return this;
            var e = s(t)
              , r = a(t);
            return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }
        function r(t) {
            if (0 === t)
                return this;
            var e = s(t)
              , r = a(t);
            return this._t(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1)
        }
        function o(t) {
            if (0 === t)
                return this;
            var e = s(t)
              , r = a(t);
            return this._t(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1)
        }
        function h(t) {
            if (0 === t)
                return this;
            var e = s(t)
              , r = a(t);
            return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }
        function l(t, e) {
            return this._t(1, e, t, 1, 0, 0)
        }
        function p(t, e) {
            return this.shear(n(t), n(e))
        }
        function m(t, e) {
            var r = s(e)
              , i = a(e);
            return this._t(r, i, 0, 0, -i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }
        function f(t, e, r) {
            return r || 0 === r || (r = 1),
            1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
        }
        function c(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
            return this.props[0] = t,
            this.props[1] = e,
            this.props[2] = r,
            this.props[3] = i,
            this.props[4] = s,
            this.props[5] = a,
            this.props[6] = n,
            this.props[7] = o,
            this.props[8] = h,
            this.props[9] = l,
            this.props[10] = p,
            this.props[11] = m,
            this.props[12] = f,
            this.props[13] = c,
            this.props[14] = d,
            this.props[15] = u,
            this
        }
        function d(t, e, r) {
            return r = r || 0,
            0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
        }
        function u(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
            var y = this.props;
            if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m)
                return y[12] = y[12] * t + y[15] * f,
                y[13] = y[13] * a + y[15] * c,
                y[14] = y[14] * p + y[15] * d,
                y[15] = y[15] * u,
                this._identityCalculated = !1,
                this;
            var g = y[0]
              , v = y[1]
              , b = y[2]
              , E = y[3]
              , x = y[4]
              , S = y[5]
              , P = y[6]
              , _ = y[7]
              , A = y[8]
              , C = y[9]
              , T = y[10]
              , k = y[11]
              , M = y[12]
              , D = y[13]
              , w = y[14]
              , F = y[15];
            return y[0] = g * t + v * s + b * h + E * f,
            y[1] = g * e + v * a + b * l + E * c,
            y[2] = g * r + v * n + b * p + E * d,
            y[3] = g * i + v * o + b * m + E * u,
            y[4] = x * t + S * s + P * h + _ * f,
            y[5] = x * e + S * a + P * l + _ * c,
            y[6] = x * r + S * n + P * p + _ * d,
            y[7] = x * i + S * o + P * m + _ * u,
            y[8] = A * t + C * s + T * h + k * f,
            y[9] = A * e + C * a + T * l + k * c,
            y[10] = A * r + C * n + T * p + k * d,
            y[11] = A * i + C * o + T * m + k * u,
            y[12] = M * t + D * s + w * h + F * f,
            y[13] = M * e + D * a + w * l + F * c,
            y[14] = M * r + D * n + w * p + F * d,
            y[15] = M * i + D * o + w * m + F * u,
            this._identityCalculated = !1,
            this
        }
        function y() {
            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]),
            this._identityCalculated = !0),
            this._identity
        }
        function g(t) {
            for (var e = 0; e < 16; ) {
                if (t.props[e] !== this.props[e])
                    return !1;
                e += 1
            }
            return !0
        }
        function v(t) {
            var e;
            for (e = 0; e < 16; e += 1)
                t.props[e] = this.props[e]
        }
        function b(t) {
            var e;
            for (e = 0; e < 16; e += 1)
                this.props[e] = t[e]
        }
        function E(t, e, r) {
            return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }
        }
        function x(t, e, r) {
            return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
        }
        function S(t, e, r) {
            return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
        }
        function P(t, e, r) {
            return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
        }
        function _() {
            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4]
              , e = this.props[5] / t
              , r = -this.props[1] / t
              , i = -this.props[4] / t
              , s = this.props[0] / t
              , a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t
              , n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t
              , o = new Matrix;
            return o.props[0] = e,
            o.props[1] = r,
            o.props[4] = i,
            o.props[5] = s,
            o.props[12] = a,
            o.props[13] = n,
            o
        }
        function A(t) {
            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
        }
        function C(t) {
            var e, r = t.length, i = [];
            for (e = 0; e < r; e += 1)
                i[e] = A(t[e]);
            return i
        }
        function T(t, e, r) {
            var i = createTypedArray("float32", 6);
            if (this.isIdentity())
                i[0] = t[0],
                i[1] = t[1],
                i[2] = e[0],
                i[3] = e[1],
                i[4] = r[0],
                i[5] = r[1];
            else {
                var s = this.props[0]
                  , a = this.props[1]
                  , n = this.props[4]
                  , o = this.props[5]
                  , h = this.props[12]
                  , l = this.props[13];
                i[0] = t[0] * s + t[1] * n + h,
                i[1] = t[0] * a + t[1] * o + l,
                i[2] = e[0] * s + e[1] * n + h,
                i[3] = e[0] * a + e[1] * o + l,
                i[4] = r[0] * s + r[1] * n + h,
                i[5] = r[0] * a + r[1] * o + l
            }
            return i
        }
        function k(t, e, r) {
            return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
        }
        function M(t, e) {
            if (this.isIdentity())
                return t + "," + e;
            var r = this.props;
            return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
        }
        function D() {
            for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
                r += i(1e4 * e[t]) / 1e4,
                r += 15 === t ? ")" : ",",
                t += 1;
            return r
        }
        function w(t) {
            return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? i(1e4 * t) / 1e4 : t
        }
        function F() {
            var t = this.props;
            return "matrix(" + w(t[0]) + "," + w(t[1]) + "," + w(t[4]) + "," + w(t[5]) + "," + w(t[12]) + "," + w(t[13]) + ")"
        }
        return function() {
            this.reset = t,
            this.rotate = e,
            this.rotateX = r,
            this.rotateY = o,
            this.rotateZ = h,
            this.skew = p,
            this.skewFromAxis = m,
            this.shear = l,
            this.scale = f,
            this.setTransform = c,
            this.translate = d,
            this.transform = u,
            this.applyToPoint = E,
            this.applyToX = x,
            this.applyToY = S,
            this.applyToZ = P,
            this.applyToPointArray = k,
            this.applyToTriplePoints = T,
            this.applyToPointStringified = M,
            this.toCSS = D,
            this.to2dCSS = F,
            this.clone = v,
            this.cloneFromProps = b,
            this.equals = g,
            this.inversePoints = C,
            this.inversePoint = A,
            this.getInverseMatrix = _,
            this._t = this.transform,
            this.isIdentity = y,
            this._identity = !0,
            this._identityCalculated = !1,
            this.props = createTypedArray("float32", 16),
            this.reset()
        }
    }();
    !function(o, h) {
        var l, p = this, m = 256, f = 6, c = "random", d = h.pow(m, f), u = h.pow(2, 52), y = 2 * u, g = m - 1;
        function v(t) {
            var e, r = t.length, n = this, i = 0, s = n.i = n.j = 0, a = n.S = [];
            for (r || (t = [r++]); i < m; )
                a[i] = i++;
            for (i = 0; i < m; i++)
                a[i] = a[s = g & s + t[i % r] + (e = a[i])],
                a[s] = e;
            n.g = function(t) {
                for (var e, r = 0, i = n.i, s = n.j, a = n.S; t--; )
                    e = a[i = g & i + 1],
                    r = r * m + a[g & (a[i] = a[s = g & s + e]) + (a[s] = e)];
                return n.i = i,
                n.j = s,
                r
            }
        }
        function b(t, e) {
            return e.i = t.i,
            e.j = t.j,
            e.S = t.S.slice(),
            e
        }
        function E(t, e) {
            for (var r, i = t + "", s = 0; s < i.length; )
                e[g & s] = g & (r ^= 19 * e[g & s]) + i.charCodeAt(s++);
            return x(e)
        }
        function x(t) {
            return String.fromCharCode.apply(0, t)
        }
        h["seed" + c] = function(t, e, r) {
            var i = []
              , s = E(function t(e, r) {
                var i, s = [], a = typeof e;
                if (r && "object" == a)
                    for (i in e)
                        try {
                            s.push(t(e[i], r - 1))
                        } catch (t) {}
                return s.length ? s : "string" == a ? e : e + "\0"
            }((e = !0 === e ? {
                entropy: !0
            } : e || {}).entropy ? [t, x(o)] : null === t ? function() {
                try {
                    if (l)
                        return x(l.randomBytes(m));
                    var t = new Uint8Array(m);
                    return (p.crypto || p.msCrypto).getRandomValues(t),
                    x(t)
                } catch (t) {
                    var e = p.navigator
                      , r = e && e.plugins;
                    return [+new Date, p, r, p.screen, x(o)]
                }
            }() : t, 3), i)
              , a = new v(i)
              , n = function() {
                for (var t = a.g(f), e = d, r = 0; t < u; )
                    t = (t + r) * m,
                    e *= m,
                    r = a.g(1);
                for (; y <= t; )
                    t /= 2,
                    e /= 2,
                    r >>>= 1;
                return (t + r) / e
            };
            return n.int32 = function() {
                return 0 | a.g(4)
            }
            ,
            n.quick = function() {
                return a.g(4) / 4294967296
            }
            ,
            n.double = n,
            E(x(a.S), o),
            (e.pass || r || function(t, e, r, i) {
                return i && (i.S && b(i, a),
                t.state = function() {
                    return b(a, {})
                }
                ),
                r ? (h[c] = t,
                e) : t
            }
            )(n, s, "global"in e ? e.global : this == h, e.state)
        }
        ,
        E(h.random(), o)
    }([], BMMath);
    var BezierFactory = function() {
        var t = {
            getBezierEasing: function(t, e, r, i, s) {
                var a = s || ("bez_" + t + "_" + e + "_" + r + "_" + i).replace(/\./g, "p");
                if (o[a])
                    return o[a];
                var n = new h([t, e, r, i]);
                return o[a] = n
            }
        }
          , o = {};
        var l = 11
          , p = 1 / (l - 1)
          , e = "function" == typeof Float32Array;
        function i(t, e) {
            return 1 - 3 * e + 3 * t
        }
        function s(t, e) {
            return 3 * e - 6 * t
        }
        function a(t) {
            return 3 * t
        }
        function m(t, e, r) {
            return ((i(e, r) * t + s(e, r)) * t + a(e)) * t
        }
        function f(t, e, r) {
            return 3 * i(e, r) * t * t + 2 * s(e, r) * t + a(e)
        }
        function h(t) {
            this._p = t,
            this._mSampleValues = e ? new Float32Array(l) : new Array(l),
            this._precomputed = !1,
            this.get = this.get.bind(this)
        }
        return h.prototype = {
            get: function(t) {
                var e = this._p[0]
                  , r = this._p[1]
                  , i = this._p[2]
                  , s = this._p[3];
                return this._precomputed || this._precompute(),
                e === r && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), r, s)
            },
            _precompute: function() {
                var t = this._p[0]
                  , e = this._p[1]
                  , r = this._p[2]
                  , i = this._p[3];
                this._precomputed = !0,
                t === e && r === i || this._calcSampleValues()
            },
            _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], r = 0; r < l; ++r)
                    this._mSampleValues[r] = m(r * p, t, e)
            },
            _getTForX: function(t) {
                for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, s = 0, a = 1, n = l - 1; a !== n && i[a] <= t; ++a)
                    s += p;
                var o = s + (t - i[--a]) / (i[a + 1] - i[a]) * p
                  , h = f(o, e, r);
                return .001 <= h ? function(t, e, r, i) {
                    for (var s = 0; s < 4; ++s) {
                        var a = f(e, r, i);
                        if (0 === a)
                            return e;
                        e -= (m(e, r, i) - t) / a
                    }
                    return e
                }(t, o, e, r) : 0 === h ? o : function(t, e, r, i, s) {
                    for (var a, n, o = 0; 0 < (a = m(n = e + (r - e) / 2, i, s) - t) ? r = n : e = n,
                    1e-7 < Math.abs(a) && ++o < 10; )
                        ;
                    return n
                }(t, s, s + p, e, r)
            }
        },
        t
    }();
    function extendPrototype(t, e) {
        var r, i, s = t.length;
        for (r = 0; r < s; r += 1)
            for (var a in i = t[r].prototype)
                i.hasOwnProperty(a) && (e.prototype[a] = i[a])
    }
    function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e)
    }
    function createProxyFunction(t) {
        function e() {}
        return e.prototype = t,
        e
    }
    function bezFunction() {
        Math;
        function y(t, e, r, i, s, a) {
            var n = t * i + e * s + r * a - s * i - a * t - r * e;
            return -.001 < n && n < .001
        }
        var p = function(t, e, r, i) {
            var s, a, n, o, h, l, p = defaultCurveSegments, m = 0, f = [], c = [], d = bezier_length_pool.newElement();
            for (n = r.length,
            s = 0; s < p; s += 1) {
                for (h = s / (p - 1),
                a = l = 0; a < n; a += 1)
                    o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bm_pow(h, 2) * i[a] + bm_pow(h, 3) * e[a],
                    f[a] = o,
                    null !== c[a] && (l += bm_pow(f[a] - c[a], 2)),
                    c[a] = f[a];
                l && (m += l = bm_sqrt(l)),
                d.percents[s] = h,
                d.lengths[s] = m
            }
            return d.addedLength = m,
            d
        };
        function g(t) {
            this.segmentLength = 0,
            this.points = new Array(t)
        }
        function v(t, e) {
            this.partialLength = t,
            this.point = e
        }
        var b, t = (b = {},
        function(t, e, r, i) {
            var s = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + i[0] + "_" + i[1]).replace(/\./g, "p");
            if (!b[s]) {
                var a, n, o, h, l, p, m, f = defaultCurveSegments, c = 0, d = null;
                2 === t.length && (t[0] != e[0] || t[1] != e[1]) && y(t[0], t[1], e[0], e[1], t[0] + r[0], t[1] + r[1]) && y(t[0], t[1], e[0], e[1], e[0] + i[0], e[1] + i[1]) && (f = 2);
                var u = new g(f);
                for (o = r.length,
                a = 0; a < f; a += 1) {
                    for (m = createSizedArray(o),
                    l = a / (f - 1),
                    n = p = 0; n < o; n += 1)
                        h = bm_pow(1 - l, 3) * t[n] + 3 * bm_pow(1 - l, 2) * l * (t[n] + r[n]) + 3 * (1 - l) * bm_pow(l, 2) * (e[n] + i[n]) + bm_pow(l, 3) * e[n],
                        m[n] = h,
                        null !== d && (p += bm_pow(m[n] - d[n], 2));
                    c += p = bm_sqrt(p),
                    u.points[a] = new v(p,m),
                    d = m
                }
                u.segmentLength = c,
                b[s] = u
            }
            return b[s]
        }
        );
        function M(t, e) {
            var r = e.percents
              , i = e.lengths
              , s = r.length
              , a = bm_floor((s - 1) * t)
              , n = t * e.addedLength
              , o = 0;
            if (a === s - 1 || 0 === a || n === i[a])
                return r[a];
            for (var h = i[a] > n ? -1 : 1, l = !0; l; )
                if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]),
                l = !1) : a += h,
                a < 0 || s - 1 <= a) {
                    if (a === s - 1)
                        return r[a];
                    l = !1
                }
            return r[a] + (r[a + 1] - r[a]) * o
        }
        var D = createTypedArray("float32", 8);
        return {
            getSegmentsLength: function(t) {
                var e, r = segments_length_pool.newElement(), i = t.c, s = t.v, a = t.o, n = t.i, o = t._length, h = r.lengths, l = 0;
                for (e = 0; e < o - 1; e += 1)
                    h[e] = p(s[e], s[e + 1], a[e], n[e + 1]),
                    l += h[e].addedLength;
                return i && o && (h[e] = p(s[e], s[0], a[e], n[0]),
                l += h[e].addedLength),
                r.totalLength = l,
                r
            },
            getNewSegment: function(t, e, r, i, s, a, n) {
                var o, h = M(s = s < 0 ? 0 : 1 < s ? 1 : s, n), l = M(a = 1 < a ? 1 : a, n), p = t.length, m = 1 - h, f = 1 - l, c = m * m * m, d = h * m * m * 3, u = h * h * m * 3, y = h * h * h, g = m * m * f, v = h * m * f + m * h * f + m * m * l, b = h * h * f + m * h * l + h * m * l, E = h * h * l, x = m * f * f, S = h * f * f + m * l * f + m * f * l, P = h * l * f + m * l * l + h * f * l, _ = h * l * l, A = f * f * f, C = l * f * f + f * l * f + f * f * l, T = l * l * f + f * l * l + l * f * l, k = l * l * l;
                for (o = 0; o < p; o += 1)
                    D[4 * o] = Math.round(1e3 * (c * t[o] + d * r[o] + u * i[o] + y * e[o])) / 1e3,
                    D[4 * o + 1] = Math.round(1e3 * (g * t[o] + v * r[o] + b * i[o] + E * e[o])) / 1e3,
                    D[4 * o + 2] = Math.round(1e3 * (x * t[o] + S * r[o] + P * i[o] + _ * e[o])) / 1e3,
                    D[4 * o + 3] = Math.round(1e3 * (A * t[o] + C * r[o] + T * i[o] + k * e[o])) / 1e3;
                return D
            },
            getPointInSegment: function(t, e, r, i, s, a) {
                var n = M(s, a)
                  , o = 1 - n;
                return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * r[0] + (n * n * o + o * n * n + n * o * n) * i[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * r[1] + (n * n * o + o * n * n + n * o * n) * i[1] + n * n * n * e[1])) / 1e3]
            },
            buildBezierData: t,
            pointOnLine2D: y,
            pointOnLine3D: function(t, e, r, i, s, a, n, o, h) {
                if (0 === r && 0 === a && 0 === h)
                    return y(t, e, i, s, n, o);
                var l, p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2) + Math.pow(a - r, 2)), m = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - r, 2)), f = Math.sqrt(Math.pow(n - i, 2) + Math.pow(o - s, 2) + Math.pow(h - a, 2));
                return -1e-4 < (l = m < p ? f < p ? p - m - f : f - m - p : m < f ? f - m - p : m - p - f) && l < 1e-4
            }
        }
    }
    !function() {
        for (var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
            window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
            var r = (new Date).getTime()
              , i = Math.max(0, 16 - (r - a))
              , s = setTimeout(function() {
                t(r + i)
            }, i);
            return a = r + i,
            s
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }
        )
    }();
    var bez = bezFunction();
    function dataFunctionManager() {
        function m(t, e, r) {
            var i, s, a, n, o, h, l = t.length;
            for (s = 0; s < l; s += 1)
                if ("ks"in (i = t[s]) && !i.completed) {
                    if (i.completed = !0,
                    i.tt && (t[s - 1].td = i.tt),
                    [],
                    -1,
                    i.hasMask) {
                        var p = i.masksProperties;
                        for (n = p.length,
                        a = 0; a < n; a += 1)
                            if (p[a].pt.k.i)
                                d(p[a].pt.k);
                            else
                                for (h = p[a].pt.k.length,
                                o = 0; o < h; o += 1)
                                    p[a].pt.k[o].s && d(p[a].pt.k[o].s[0]),
                                    p[a].pt.k[o].e && d(p[a].pt.k[o].e[0])
                    }
                    0 === i.ty ? (i.layers = f(i.refId, e),
                    m(i.layers, e, r)) : 4 === i.ty ? c(i.shapes) : 5 == i.ty && u(i, r)
                }
        }
        function f(t, e) {
            for (var r = 0, i = e.length; r < i; ) {
                if (e[r].id === t)
                    return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0,
                    e[r].layers);
                r += 1
            }
        }
        function c(t) {
            var e, r, i;
            for (e = t.length - 1; 0 <= e; e -= 1)
                if ("sh" == t[e].ty) {
                    if (t[e].ks.k.i)
                        d(t[e].ks.k);
                    else
                        for (i = t[e].ks.k.length,
                        r = 0; r < i; r += 1)
                            t[e].ks.k[r].s && d(t[e].ks.k[r].s[0]),
                            t[e].ks.k[r].e && d(t[e].ks.k[r].e[0]);
                    !0
                } else
                    "gr" == t[e].ty && c(t[e].it)
        }
        function d(t) {
            var e, r = t.i.length;
            for (e = 0; e < r; e += 1)
                t.i[e][0] += t.v[e][0],
                t.i[e][1] += t.v[e][1],
                t.o[e][0] += t.v[e][0],
                t.o[e][1] += t.v[e][1]
        }
        function o(t, e) {
            var r = e ? e.split(".") : [100, 100, 100];
            return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0))
        }
        var h, r = function() {
            var i = [4, 4, 14];
            function s(t) {
                var e, r, i, s = t.length;
                for (e = 0; e < s; e += 1)
                    5 === t[e].ty && (r = t[e],
                    void 0,
                    i = r.t.d,
                    r.t.d = {
                        k: [{
                            s: i,
                            t: 0
                        }]
                    })
            }
            return function(t) {
                if (o(i, t.v) && (s(t.layers),
                t.assets)) {
                    var e, r = t.assets.length;
                    for (e = 0; e < r; e += 1)
                        t.assets[e].layers && s(t.assets[e].layers)
                }
            }
        }(), i = (h = [4, 7, 99],
        function(t) {
            if (t.chars && !o(h, t.v)) {
                var e, r, i, s, a, n = t.chars.length;
                for (e = 0; e < n; e += 1)
                    if (t.chars[e].data && t.chars[e].data.shapes)
                        for (i = (a = t.chars[e].data.shapes[0].it).length,
                        r = 0; r < i; r += 1)
                            (s = a[r].ks.k).__converted || (d(a[r].ks.k),
                            s.__converted = !0)
            }
        }
        ), s = function() {
            var i = [4, 1, 9];
            function a(t) {
                var e, r, i, s = t.length;
                for (e = 0; e < s; e += 1)
                    if ("gr" === t[e].ty)
                        a(t[e].it);
                    else if ("fl" === t[e].ty || "st" === t[e].ty)
                        if (t[e].c.k && t[e].c.k[0].i)
                            for (i = t[e].c.k.length,
                            r = 0; r < i; r += 1)
                                t[e].c.k[r].s && (t[e].c.k[r].s[0] /= 255,
                                t[e].c.k[r].s[1] /= 255,
                                t[e].c.k[r].s[2] /= 255,
                                t[e].c.k[r].s[3] /= 255),
                                t[e].c.k[r].e && (t[e].c.k[r].e[0] /= 255,
                                t[e].c.k[r].e[1] /= 255,
                                t[e].c.k[r].e[2] /= 255,
                                t[e].c.k[r].e[3] /= 255);
                        else
                            t[e].c.k[0] /= 255,
                            t[e].c.k[1] /= 255,
                            t[e].c.k[2] /= 255,
                            t[e].c.k[3] /= 255
            }
            function s(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    4 === t[e].ty && a(t[e].shapes)
            }
            return function(t) {
                if (o(i, t.v) && (s(t.layers),
                t.assets)) {
                    var e, r = t.assets.length;
                    for (e = 0; e < r; e += 1)
                        t.assets[e].layers && s(t.assets[e].layers)
                }
            }
        }(), a = function() {
            var i = [4, 4, 18];
            function l(t) {
                var e, r, i;
                for (e = t.length - 1; 0 <= e; e -= 1)
                    if ("sh" == t[e].ty) {
                        if (t[e].ks.k.i)
                            t[e].ks.k.c = t[e].closed;
                        else
                            for (i = t[e].ks.k.length,
                            r = 0; r < i; r += 1)
                                t[e].ks.k[r].s && (t[e].ks.k[r].s[0].c = t[e].closed),
                                t[e].ks.k[r].e && (t[e].ks.k[r].e[0].c = t[e].closed);
                        !0
                    } else
                        "gr" == t[e].ty && l(t[e].it)
            }
            function s(t) {
                var e, r, i, s, a, n, o = t.length;
                for (r = 0; r < o; r += 1) {
                    if ((e = t[r]).hasMask) {
                        var h = e.masksProperties;
                        for (s = h.length,
                        i = 0; i < s; i += 1)
                            if (h[i].pt.k.i)
                                h[i].pt.k.c = h[i].cl;
                            else
                                for (n = h[i].pt.k.length,
                                a = 0; a < n; a += 1)
                                    h[i].pt.k[a].s && (h[i].pt.k[a].s[0].c = h[i].cl),
                                    h[i].pt.k[a].e && (h[i].pt.k[a].e[0].c = h[i].cl)
                    }
                    4 === e.ty && l(e.shapes)
                }
            }
            return function(t) {
                if (o(i, t.v) && (s(t.layers),
                t.assets)) {
                    var e, r = t.assets.length;
                    for (e = 0; e < r; e += 1)
                        t.assets[e].layers && s(t.assets[e].layers)
                }
            }
        }();
        function u(t, e) {
            0 !== t.t.a.length || "m"in t.t.p || (t.singleShape = !0)
        }
        var t = {
            completeData: function(t, e) {
                t.__complete || (s(t),
                r(t),
                i(t),
                a(t),
                m(t.layers, t.assets, e),
                t.__complete = !0)
            }
        };
        return t.checkColors = s,
        t.checkChars = i,
        t.checkShapes = a,
        t.completeLayers = m,
        t
    }
    var dataManager = dataFunctionManager()
      , FontManager = function() {
        var a = {
            w: 0,
            size: 0,
            shapes: []
        }
          , t = [];
        function u(t, e) {
            var r = createTag("span");
            r.style.fontFamily = e;
            var i = createTag("span");
            i.innerHTML = "giItT1WQy@!-/#",
            r.style.position = "absolute",
            r.style.left = "-10000px",
            r.style.top = "-10000px",
            r.style.fontSize = "300px",
            r.style.fontVariant = "normal",
            r.style.fontStyle = "normal",
            r.style.fontWeight = "normal",
            r.style.letterSpacing = "0",
            r.appendChild(i),
            document.body.appendChild(r);
            var s = i.offsetWidth;
            return i.style.fontFamily = t + ", " + e,
            {
                node: i,
                w: s,
                parent: r
            }
        }
        t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var e = function() {
            this.fonts = [],
            this.chars = null,
            this.typekitLoaded = 0,
            this.isLoaded = !1,
            this.initTime = Date.now()
        };
        return e.getCombinedCharacterCodes = function() {
            return t
        }
        ,
        e.prototype.addChars = function(t) {
            if (t) {
                this.chars || (this.chars = []);
                var e, r, i, s = t.length, a = this.chars.length;
                for (e = 0; e < s; e += 1) {
                    for (r = 0,
                    i = !1; r < a; )
                        this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0),
                        r += 1;
                    i || (this.chars.push(t[e]),
                    a += 1)
                }
            }
        }
        ,
        e.prototype.addFonts = function(t, e) {
            if (t) {
                if (this.chars)
                    return this.isLoaded = !0,
                    void (this.fonts = t.list);
                var r, i, s, a, n = t.list, o = n.length, h = o;
                for (r = 0; r < o; r += 1) {
                    var l, p, m = !0;
                    if (n[r].loaded = !1,
                    n[r].monoCase = u(n[r].fFamily, "monospace"),
                    n[r].sansCase = u(n[r].fFamily, "sans-serif"),
                    n[r].fPath) {
                        if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                            if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length && (m = !1),
                            m) {
                                var f = createTag("style");
                                f.setAttribute("f-forigin", n[r].fOrigin),
                                f.setAttribute("f-origin", n[r].origin),
                                f.setAttribute("f-family", n[r].fFamily),
                                f.type = "text/css",
                                f.innerHTML = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}",
                                e.appendChild(f)
                            }
                        } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                            for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                            p = 0; p < l.length; p++)
                                -1 !== l[p].href.indexOf(n[r].fPath) && (m = !1);
                            if (m) {
                                var c = createTag("link");
                                c.setAttribute("f-forigin", n[r].fOrigin),
                                c.setAttribute("f-origin", n[r].origin),
                                c.type = "text/css",
                                c.rel = "stylesheet",
                                c.href = n[r].fPath,
                                document.body.appendChild(c)
                            }
                        } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                            for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                            p = 0; p < l.length; p++)
                                n[r].fPath === l[p].src && (m = !1);
                            if (m) {
                                var d = createTag("link");
                                d.setAttribute("f-forigin", n[r].fOrigin),
                                d.setAttribute("f-origin", n[r].origin),
                                d.setAttribute("rel", "stylesheet"),
                                d.setAttribute("href", n[r].fPath),
                                e.appendChild(d)
                            }
                        }
                    } else
                        n[r].loaded = !0,
                        h -= 1;
                    n[r].helper = (i = e,
                    s = n[r],
                    a = void 0,
                    (a = createNS("text")).style.fontSize = "100px",
                    a.setAttribute("font-family", s.fFamily),
                    a.setAttribute("font-style", s.fStyle),
                    a.setAttribute("font-weight", s.fWeight),
                    a.textContent = "1",
                    s.fClass ? (a.style.fontFamily = "inherit",
                    a.setAttribute("class", s.fClass)) : a.style.fontFamily = s.fFamily,
                    i.appendChild(a),
                    createTag("canvas").getContext("2d").font = s.fWeight + " " + s.fStyle + " 100px " + s.fFamily,
                    a),
                    n[r].cache = {},
                    this.fonts.push(n[r])
                }
                0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            } else
                this.isLoaded = !0
        }
        ,
        e.prototype.getCharData = function(t, e, r) {
            for (var i = 0, s = this.chars.length; i < s; ) {
                if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === r)
                    return this.chars[i];
                i += 1
            }
            return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, e, r),
            a
        }
        ,
        e.prototype.getFontByName = function(t) {
            for (var e = 0, r = this.fonts.length; e < r; ) {
                if (this.fonts[e].fName === t)
                    return this.fonts[e];
                e += 1
            }
            return this.fonts[0]
        }
        ,
        e.prototype.measureText = function(t, e, r) {
            var i = this.getFontByName(e)
              , s = t.charCodeAt(0);
            if (!i.cache[s + 1]) {
                var a = i.helper;
                if (" " === t) {
                    a.textContent = "|" + t + "|";
                    var n = a.getComputedTextLength();
                    a.textContent = "||";
                    var o = a.getComputedTextLength();
                    i.cache[s + 1] = (n - o) / 100
                } else
                    a.textContent = t,
                    i.cache[s + 1] = a.getComputedTextLength() / 100
            }
            return i.cache[s + 1] * r
        }
        ,
        e.prototype.checkLoadedFonts = function() {
            var t, e, r, i = this.fonts.length, s = i;
            for (t = 0; t < i; t += 1)
                this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node,
                r = this.fonts[t].monoCase.w,
                e.offsetWidth !== r ? (s -= 1,
                this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node,
                r = this.fonts[t].sansCase.w,
                e.offsetWidth !== r && (s -= 1,
                this.fonts[t].loaded = !0)),
                this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),
                this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
            0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                this.isLoaded = !0
            }
            .bind(this), 0)
        }
        ,
        e.prototype.loaded = function() {
            return this.isLoaded
        }
        ,
        e
    }()
      , PropertyFactory = function() {
        var m = initialDefaultFrame
          , s = Math.abs;
        function f(t, e) {
            var r, i = this.offsetTime;
            "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
            for (var s, a, n, o, h, l, p, m, f = e.lastIndex, c = f, d = this.keyframes.length - 1, u = !0; u; ) {
                if (s = this.keyframes[c],
                a = this.keyframes[c + 1],
                c === d - 1 && t >= a.t - i) {
                    s.h && (s = a),
                    f = 0;
                    break
                }
                if (a.t - i > t) {
                    f = c;
                    break
                }
                c < d - 1 ? c += 1 : (f = 0,
                u = !1)
            }
            var y, g, v, b, E, x, S, P, _, A, C = a.t - i, T = s.t - i;
            if (s.to) {
                s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                var k = s.bezierData;
                if (C <= t || t < T) {
                    var M = C <= t ? k.points.length - 1 : 0;
                    for (o = k.points[M].point.length,
                    n = 0; n < o; n += 1)
                        r[n] = k.points[M].point[n]
                } else {
                    s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get,
                    s.__fnct = m),
                    h = m((t - T) / (C - T));
                    var D, w = k.segmentLength * h, F = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastAddedLength : 0;
                    for (p = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastPoint : 0,
                    u = !0,
                    l = k.points.length; u; ) {
                        if (F += k.points[p].partialLength,
                        0 === w || 0 === h || p === k.points.length - 1) {
                            for (o = k.points[p].point.length,
                            n = 0; n < o; n += 1)
                                r[n] = k.points[p].point[n];
                            break
                        }
                        if (F <= w && w < F + k.points[p + 1].partialLength) {
                            for (D = (w - F) / k.points[p + 1].partialLength,
                            o = k.points[p].point.length,
                            n = 0; n < o; n += 1)
                                r[n] = k.points[p].point[n] + (k.points[p + 1].point[n] - k.points[p].point[n]) * D;
                            break
                        }
                        p < l - 1 ? p += 1 : u = !1
                    }
                    e._lastPoint = p,
                    e._lastAddedLength = F - k.points[p].partialLength,
                    e._lastKeyframeIndex = c
                }
            } else {
                var I, V, R, B, L;
                if (d = s.s.length,
                y = a.s || s.e,
                this.sh && 1 !== s.h)
                    if (C <= t)
                        r[0] = y[0],
                        r[1] = y[1],
                        r[2] = y[2];
                    else if (t <= T)
                        r[0] = s.s[0],
                        r[1] = s.s[1],
                        r[2] = s.s[2];
                    else {
                        var G = N(s.s)
                          , z = N(y);
                        g = r,
                        v = function(t, e, r) {
                            var i, s, a, n, o, h = [], l = t[0], p = t[1], m = t[2], f = t[3], c = e[0], d = e[1], u = e[2], y = e[3];
                            (s = l * c + p * d + m * u + f * y) < 0 && (s = -s,
                            c = -c,
                            d = -d,
                            u = -u,
                            y = -y);
                            o = 1e-6 < 1 - s ? (i = Math.acos(s),
                            a = Math.sin(i),
                            n = Math.sin((1 - r) * i) / a,
                            Math.sin(r * i) / a) : (n = 1 - r,
                            r);
                            return h[0] = n * l + o * c,
                            h[1] = n * p + o * d,
                            h[2] = n * m + o * u,
                            h[3] = n * f + o * y,
                            h
                        }(G, z, (t - T) / (C - T)),
                        b = v[0],
                        E = v[1],
                        x = v[2],
                        S = v[3],
                        P = Math.atan2(2 * E * S - 2 * b * x, 1 - 2 * E * E - 2 * x * x),
                        _ = Math.asin(2 * b * E + 2 * x * S),
                        A = Math.atan2(2 * b * S - 2 * E * x, 1 - 2 * b * b - 2 * x * x),
                        g[0] = P / degToRads,
                        g[1] = _ / degToRads,
                        g[2] = A / degToRads
                    }
                else
                    for (c = 0; c < d; c += 1)
                        1 !== s.h && (h = C <= t ? 1 : t < T ? 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []),
                        s.__fnct[c] ? m = s.__fnct[c] : (I = void 0 === s.o.x[c] ? s.o.x[0] : s.o.x[c],
                        V = void 0 === s.o.y[c] ? s.o.y[0] : s.o.y[c],
                        R = void 0 === s.i.x[c] ? s.i.x[0] : s.i.x[c],
                        B = void 0 === s.i.y[c] ? s.i.y[0] : s.i.y[c],
                        m = BezierFactory.getBezierEasing(I, V, R, B).get,
                        s.__fnct[c] = m)) : s.__fnct ? m = s.__fnct : (I = s.o.x,
                        V = s.o.y,
                        R = s.i.x,
                        B = s.i.y,
                        m = BezierFactory.getBezierEasing(I, V, R, B).get,
                        s.__fnct = m),
                        m((t - T) / (C - T)))),
                        y = a.s || s.e,
                        L = 1 === s.h ? s.s[c] : s.s[c] + (y[c] - s.s[c]) * h,
                        "multidimensional" === this.propType ? r[c] = L : r = L
            }
            return e.lastIndex = f,
            r
        }
        function N(t) {
            var e = t[0] * degToRads
              , r = t[1] * degToRads
              , i = t[2] * degToRads
              , s = Math.cos(e / 2)
              , a = Math.cos(r / 2)
              , n = Math.cos(i / 2)
              , o = Math.sin(e / 2)
              , h = Math.sin(r / 2)
              , l = Math.sin(i / 2);
            return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
        }
        function c() {
            var t = this.comp.renderedFrame - this.offsetTime
              , e = this.keyframes[0].t - this.offsetTime
              , r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= r && r <= t || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1,
                this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i
            }
            return this._caching.lastFrame = t,
            this.pv
        }
        function d(t) {
            var e;
            if ("unidimensional" === this.propType)
                e = t * this.mult,
                1e-5 < s(this.v - e) && (this.v = e,
                this._mdf = !0);
            else
                for (var r = 0, i = this.v.length; r < i; )
                    e = t[r] * this.mult,
                    1e-5 < s(this.v[r] - e) && (this.v[r] = e,
                    this._mdf = !0),
                    r += 1
        }
        function u() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                if (this.lock)
                    this.setVValue(this.pv);
                else {
                    this.lock = !0,
                    this._mdf = this._isFirstFrame;
                    var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                    for (t = 0; t < e; t += 1)
                        r = this.effectsSequence[t](r);
                    this.setVValue(r),
                    this._isFirstFrame = !1,
                    this.lock = !1,
                    this.frameId = this.elem.globalData.frameId
                }
        }
        function y(t) {
            this.effectsSequence.push(t),
            this.container.addDynamicProperty(this)
        }
        function n(t, e, r, i) {
            this.propType = "unidimensional",
            this.mult = r || 1,
            this.data = e,
            this.v = r ? e.k * r : e.k,
            this.pv = e.k,
            this._mdf = !1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.k = !1,
            this.kf = !1,
            this.vel = 0,
            this.effectsSequence = [],
            this._isFirstFrame = !0,
            this.getValue = u,
            this.setVValue = d,
            this.addEffect = y
        }
        function o(t, e, r, i) {
            this.propType = "multidimensional",
            this.mult = r || 1,
            this.data = e,
            this._mdf = !1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.k = !1,
            this.kf = !1,
            this.frameId = -1;
            var s, a = e.k.length;
            this.v = createTypedArray("float32", a),
            this.pv = createTypedArray("float32", a);
            createTypedArray("float32", a);
            for (this.vel = createTypedArray("float32", a),
            s = 0; s < a; s += 1)
                this.v[s] = e.k[s] * this.mult,
                this.pv[s] = e.k[s];
            this._isFirstFrame = !0,
            this.effectsSequence = [],
            this.getValue = u,
            this.setVValue = d,
            this.addEffect = y
        }
        function h(t, e, r, i) {
            this.propType = "unidimensional",
            this.keyframes = e.k,
            this.offsetTime = t.data.st,
            this.frameId = -1,
            this._caching = {
                lastFrame: m,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            },
            this.k = !0,
            this.kf = !0,
            this.data = e,
            this.mult = r || 1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.v = m,
            this.pv = m,
            this._isFirstFrame = !0,
            this.getValue = u,
            this.setVValue = d,
            this.interpolateValue = f,
            this.effectsSequence = [c.bind(this)],
            this.addEffect = y
        }
        function l(t, e, r, i) {
            this.propType = "multidimensional";
            var s, a, n, o, h, l = e.k.length;
            for (s = 0; s < l - 1; s += 1)
                e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s,
                n = e.k[s + 1].s,
                o = e.k[s].to,
                h = e.k[s].ti,
                (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null,
                e.k[s].ti = null),
                a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null,
                e.k[s].ti = null));
            this.effectsSequence = [c.bind(this)],
            this.keyframes = e.k,
            this.offsetTime = t.data.st,
            this.k = !0,
            this.kf = !0,
            this._isFirstFrame = !0,
            this.mult = r || 1,
            this.elem = t,
            this.container = i,
            this.comp = t.comp,
            this.getValue = u,
            this.setVValue = d,
            this.interpolateValue = f,
            this.frameId = -1;
            var p = e.k[0].s.length;
            for (this.v = createTypedArray("float32", p),
            this.pv = createTypedArray("float32", p),
            s = 0; s < p; s += 1)
                this.v[s] = m,
                this.pv[s] = m;
            this._caching = {
                lastFrame: m,
                lastIndex: 0,
                value: createTypedArray("float32", p)
            },
            this.addEffect = y
        }
        return {
            getProp: function(t, e, r, i, s) {
                var a;
                if (e.k.length)
                    if ("number" == typeof e.k[0])
                        a = new o(t,e,i,s);
                    else
                        switch (r) {
                        case 0:
                            a = new h(t,e,i,s);
                            break;
                        case 1:
                            a = new l(t,e,i,s)
                        }
                else
                    a = new n(t,e,i,s);
                return a.effectsSequence.length && s.addDynamicProperty(a),
                a
            }
        }
    }()
      , TransformPropertyFactory = function() {
        var n = [0, 0];
        function i(t, e, r) {
            if (this.elem = t,
            this.frameId = -1,
            this.propType = "transform",
            this.data = e,
            this.v = new Matrix,
            this.pre = new Matrix,
            this.appliedTransformations = 0,
            this.initDynamicPropertyContainer(r || t),
            e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this),
            this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this),
            e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
            }, 1, 0, this),
            e.rx) {
                if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this),
                this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this),
                this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this),
                e.or.k[0].ti) {
                    var i, s = e.or.k.length;
                    for (i = 0; i < s; i += 1)
                        e.or.k[i].to = e.or.k[i].ti = null
                }
                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                this.or.sh = !0
            } else
                this.r = PropertyFactory.getProp(t, e.r || {
                    k: 0
                }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this),
            this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
            this.a = PropertyFactory.getProp(t, e.a || {
                k: [0, 0, 0]
            }, 1, 0, this),
            this.s = PropertyFactory.getProp(t, e.s || {
                k: [100, 100, 100]
            }, 1, .01, this),
            e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                _mdf: !1,
                v: 1
            },
            this._isDirty = !0,
            this.dynamicProperties.length || this.getValue(!0)
        }
        return i.prototype = {
            applyToMatrix: function(t) {
                var e = this._mdf;
                this.iterateDynamicProperties(),
                this._mdf = this._mdf || e,
                this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(t) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(),
                    this._isDirty = !1),
                    this.iterateDynamicProperties(),
                    this._mdf || t) {
                        if (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.autoOriented) {
                            var e, r, i = this.elem.globalData.frameRate;
                            if (this.p && this.p.keyframes && this.p.getValueAtTime)
                                r = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0),
                                this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0),
                                this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv,
                                this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                e = [],
                                r = [];
                                var s = this.px
                                  , a = this.py;
                                s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (e[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0),
                                e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0),
                                r[0] = s.getValueAtTime(s.keyframes[0].t / i, 0),
                                r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (e[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0),
                                e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0),
                                r[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0),
                                r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (e = [s.pv, a.pv],
                                r[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime),
                                r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                            } else
                                e = r = n;
                            this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            },
            precalculateMatrix: function() {
                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.appliedTransformations = 1,
                !this.s.effectsSequence.length)) {
                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.appliedTransformations = 2,
                    this.sk) {
                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                            return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        this.appliedTransformations = 3
                    }
                    if (this.r) {
                        if (this.r.effectsSequence.length)
                            return;
                        this.pre.rotate(-this.r.v),
                        this.appliedTransformations = 4
                    } else
                        this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.appliedTransformations = 4)
                }
            },
            autoOrient: function() {}
        },
        extendPrototype([DynamicPropertyContainer], i),
        i.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t),
            this.elem.addDynamicProperty(t),
            this._isDirty = !0
        }
        ,
        i.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty,
        {
            getTransformProperty: function(t, e, r) {
                return new i(t,e,r)
            }
        }
    }();
    function ShapePath() {
        this.c = !1,
        this._length = 0,
        this._maxLength = 8,
        this.v = createSizedArray(this._maxLength),
        this.o = createSizedArray(this._maxLength),
        this.i = createSizedArray(this._maxLength)
    }
    ShapePath.prototype.setPathData = function(t, e) {
        this.c = t,
        this.setLength(e);
        for (var r = 0; r < e; )
            this.v[r] = point_pool.newElement(),
            this.o[r] = point_pool.newElement(),
            this.i[r] = point_pool.newElement(),
            r += 1
    }
    ,
    ShapePath.prototype.setLength = function(t) {
        for (; this._maxLength < t; )
            this.doubleArrayLength();
        this._length = t
    }
    ,
    ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength)),
        this.i = this.i.concat(createSizedArray(this._maxLength)),
        this.o = this.o.concat(createSizedArray(this._maxLength)),
        this._maxLength *= 2
    }
    ,
    ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
        var a;
        switch (this._length = Math.max(this._length, i + 1),
        this._length >= this._maxLength && this.doubleArrayLength(),
        r) {
        case "v":
            a = this.v;
            break;
        case "i":
            a = this.i;
            break;
        case "o":
            a = this.o
        }
        (!a[i] || a[i] && !s) && (a[i] = point_pool.newElement()),
        a[i][0] = t,
        a[i][1] = e
    }
    ,
    ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
        this.setXYAt(t, e, "v", n, o),
        this.setXYAt(r, i, "o", n, o),
        this.setXYAt(s, a, "i", n, o)
    }
    ,
    ShapePath.prototype.reverse = function() {
        var t = new ShapePath;
        t.setPathData(this.c, this._length);
        var e = this.v
          , r = this.o
          , i = this.i
          , s = 0;
        this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1),
        s = 1);
        var a, n = this._length - 1, o = this._length;
        for (a = s; a < o; a += 1)
            t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, !1),
            n -= 1;
        return t
    }
    ;
    var ShapePropertyFactory = function() {
        var s = -999999;
        function t(t, e, r) {
            var i, s, a, n, o, h, l, p, m, f = r.lastIndex, c = this.keyframes;
            if (t < c[0].t - this.offsetTime)
                i = c[0].s[0],
                a = !0,
                f = 0;
            else if (t >= c[c.length - 1].t - this.offsetTime)
                i = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0],
                a = !0;
            else {
                for (var d, u, y = f, g = c.length - 1, v = !0; v && (d = c[y],
                !((u = c[y + 1]).t - this.offsetTime > t)); )
                    y < g - 1 ? y += 1 : v = !1;
                if (f = y,
                !(a = 1 === d.h)) {
                    if (t >= u.t - this.offsetTime)
                        p = 1;
                    else if (t < d.t - this.offsetTime)
                        p = 0;
                    else {
                        var b;
                        d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get,
                        d.__fnct = b),
                        p = b((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
                    }
                    s = u.s ? u.s[0] : d.e[0]
                }
                i = d.s[0]
            }
            for (h = e._length,
            l = i.i[0].length,
            r.lastIndex = f,
            n = 0; n < h; n += 1)
                for (o = 0; o < l; o += 1)
                    m = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p,
                    e.i[n][o] = m,
                    m = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p,
                    e.o[n][o] = m,
                    m = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p,
                    e.v[n][o] = m
        }
        function a() {
            this.paths = this.localShapeCollection
        }
        function e(t) {
            (function(t, e) {
                if (t._length !== e._length || t.c !== e.c)
                    return !1;
                var r, i = t._length;
                for (r = 0; r < i; r += 1)
                    if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1])
                        return !1;
                return !0
            }
            )(this.v, t) || (this.v = shape_pool.clone(t),
            this.localShapeCollection.releaseShapes(),
            this.localShapeCollection.addShape(this.v),
            this._mdf = !0,
            this.paths = this.localShapeCollection)
        }
        function r() {
            if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                    if (this.lock)
                        this.setVValue(this.pv);
                    else {
                        this.lock = !0,
                        this._mdf = !1;
                        var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k, r = this.effectsSequence.length;
                        for (t = 0; t < r; t += 1)
                            e = this.effectsSequence[t](e);
                        this.setVValue(e),
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
                else
                    this._mdf = !1
        }
        function n(t, e, r) {
            this.propType = "shape",
            this.comp = t.comp,
            this.container = t,
            this.elem = t,
            this.data = e,
            this.k = !1,
            this.kf = !1,
            this._mdf = !1;
            var i = 3 === r ? e.pt.k : e.ks.k;
            this.v = shape_pool.clone(i),
            this.pv = shape_pool.clone(this.v),
            this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
            this.paths = this.localShapeCollection,
            this.paths.addShape(this.v),
            this.reset = a,
            this.effectsSequence = []
        }
        function i(t) {
            this.effectsSequence.push(t),
            this.container.addDynamicProperty(this)
        }
        function o(t, e, r) {
            this.propType = "shape",
            this.comp = t.comp,
            this.elem = t,
            this.container = t,
            this.offsetTime = t.data.st,
            this.keyframes = 3 === r ? e.pt.k : e.ks.k,
            this.k = !0,
            this.kf = !0;
            var i = this.keyframes[0].s[0].i.length;
            this.keyframes[0].s[0].i[0].length;
            this.v = shape_pool.newElement(),
            this.v.setPathData(this.keyframes[0].s[0].c, i),
            this.pv = shape_pool.clone(this.v),
            this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
            this.paths = this.localShapeCollection,
            this.paths.addShape(this.v),
            this.lastFrame = s,
            this.reset = a,
            this._caching = {
                lastFrame: s,
                lastIndex: 0
            },
            this.effectsSequence = [function() {
                var t = this.comp.renderedFrame - this.offsetTime
                  , e = this.keyframes[0].t - this.offsetTime
                  , r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                  , i = this._caching.lastFrame;
                return i !== s && (i < e && t < e || r < i && r < t) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0,
                this.interpolateShape(t, this.pv, this._caching)),
                this._caching.lastFrame = t,
                this.pv
            }
            .bind(this)]
        }
        n.prototype.interpolateShape = t,
        n.prototype.getValue = r,
        n.prototype.setVValue = e,
        n.prototype.addEffect = i,
        o.prototype.getValue = r,
        o.prototype.interpolateShape = t,
        o.prototype.setVValue = e,
        o.prototype.addEffect = i;
        var h = function() {
            var n = roundCorner;
            function t(t, e) {
                this.v = shape_pool.newElement(),
                this.v.setPathData(!0, 4),
                this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.localShapeCollection.addShape(this.v),
                this.d = e.d,
                this.elem = t,
                this.comp = t.comp,
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                this.convertEllToPath())
            }
            return t.prototype = {
                reset: a,
                getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function() {
                    var t = this.p.v[0]
                      , e = this.p.v[1]
                      , r = this.s.v[0] / 2
                      , i = this.s.v[1] / 2
                      , s = 3 !== this.d
                      , a = this.v;
                    a.v[0][0] = t,
                    a.v[0][1] = e - i,
                    a.v[1][0] = s ? t + r : t - r,
                    a.v[1][1] = e,
                    a.v[2][0] = t,
                    a.v[2][1] = e + i,
                    a.v[3][0] = s ? t - r : t + r,
                    a.v[3][1] = e,
                    a.i[0][0] = s ? t - r * n : t + r * n,
                    a.i[0][1] = e - i,
                    a.i[1][0] = s ? t + r : t - r,
                    a.i[1][1] = e - i * n,
                    a.i[2][0] = s ? t + r * n : t - r * n,
                    a.i[2][1] = e + i,
                    a.i[3][0] = s ? t - r : t + r,
                    a.i[3][1] = e + i * n,
                    a.o[0][0] = s ? t + r * n : t - r * n,
                    a.o[0][1] = e - i,
                    a.o[1][0] = s ? t + r : t - r,
                    a.o[1][1] = e + i * n,
                    a.o[2][0] = s ? t - r * n : t + r * n,
                    a.o[2][1] = e + i,
                    a.o[3][0] = s ? t - r : t + r,
                    a.o[3][1] = e - i * n
                }
            },
            extendPrototype([DynamicPropertyContainer], t),
            t
        }()
          , l = function() {
            function t(t, e) {
                this.v = shape_pool.newElement(),
                this.v.setPathData(!0, 0),
                this.elem = t,
                this.comp = t.comp,
                this.data = e,
                this.frameId = -1,
                this.d = e.d,
                this.initDynamicPropertyContainer(t),
                1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this),
                this.is = PropertyFactory.getProp(t, e.is, 0, .01, this),
                this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                this.localShapeCollection.addShape(this.v),
                this.paths = this.localShapeCollection,
                this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                this.convertToPath())
            }
            return t.prototype = {
                reset: a,
                getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertToPath())
                },
                convertStarToPath: function() {
                    var t, e, r, i, s = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / s, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, m = 2 * Math.PI * o / (2 * s), f = 2 * Math.PI * h / (2 * s), c = -Math.PI / 2;
                    c += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (t = this.v._length = 0; t < s; t += 1) {
                        r = n ? l : p,
                        i = n ? m : f;
                        var u = (e = n ? o : h) * Math.cos(c)
                          , y = e * Math.sin(c)
                          , g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y)
                          , v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                        u += +this.p.v[0],
                        y += +this.p.v[1],
                        this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0),
                        n = !n,
                        c += a * d
                    }
                },
                convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v), r = 2 * Math.PI / e, i = this.or.v, s = this.os.v, a = 2 * Math.PI * i / (4 * e), n = -Math.PI / 2, o = 3 === this.data.d ? -1 : 1;
                    for (n += this.r.v,
                    t = this.v._length = 0; t < e; t += 1) {
                        var h = i * Math.cos(n)
                          , l = i * Math.sin(n)
                          , p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l)
                          , m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                        h += +this.p.v[0],
                        l += +this.p.v[1],
                        this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0),
                        n += r * o
                    }
                    this.paths.length = 0,
                    this.paths[0] = this.v
                }
            },
            extendPrototype([DynamicPropertyContainer], t),
            t
        }()
          , p = function() {
            function t(t, e) {
                this.v = shape_pool.newElement(),
                this.v.c = !0,
                this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                this.localShapeCollection.addShape(this.v),
                this.paths = this.localShapeCollection,
                this.elem = t,
                this.comp = t.comp,
                this.frameId = -1,
                this.d = e.d,
                this.initDynamicPropertyContainer(t),
                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                this.convertRectToPath())
            }
            return t.prototype = {
                convertRectToPath: function() {
                    var t = this.p.v[0]
                      , e = this.p.v[1]
                      , r = this.s.v[0] / 2
                      , i = this.s.v[1] / 2
                      , s = bm_min(r, i, this.r.v)
                      , a = s * (1 - roundCorner);
                    this.v._length = 0,
                    2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0),
                    this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0),
                    0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0),
                    this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0),
                    this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0),
                    this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0),
                    this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0),
                    this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2),
                    this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0),
                    0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0),
                    this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0),
                    this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0),
                    this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0),
                    this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0),
                    this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0),
                    this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0),
                    this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0),
                    this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
                },
                getValue: function(t) {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertRectToPath())
                },
                reset: a
            },
            extendPrototype([DynamicPropertyContainer], t),
            t
        }();
        var m = {
            getShapeProp: function(t, e, r) {
                var i;
                return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new o(t,e,r) : new n(t,e,r) : 5 === r ? i = new p(t,e) : 6 === r ? i = new h(t,e) : 7 === r && (i = new l(t,e)),
                i.k && t.addDynamicProperty(i),
                i
            },
            getConstructorFunction: function() {
                return n
            },
            getKeyframedConstructorFunction: function() {
                return o
            }
        };
        return m
    }(), ShapeModifiers = ($r = {},
    _r = {},
    $r.registerModifier = function(t, e) {
        _r[t] || (_r[t] = e)
    }
    ,
    $r.getModifier = function(t, e, r) {
        return new _r[t](e,r)
    }
    ,
    $r), $r, _r;
    function ShapeModifier() {}
    function TrimModifier() {}
    function RoundCornersModifier() {}
    function RepeaterModifier() {}
    function ShapeCollection() {
        this._length = 0,
        this._maxLength = 4,
        this.shapes = createSizedArray(this._maxLength)
    }
    function DashProperty(t, e, r, i) {
        this.elem = t,
        this.frameId = -1,
        this.dataProps = createSizedArray(e.length),
        this.renderer = r,
        this.k = !1,
        this.dashStr = "",
        this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
        this.dashoffset = createTypedArray("float32", 1),
        this.initDynamicPropertyContainer(i);
        var s, a, n = e.length || 0;
        for (s = 0; s < n; s += 1)
            a = PropertyFactory.getProp(t, e[s].v, 0, 0, this),
            this.k = a.k || this.k,
            this.dataProps[s] = {
                n: e[s].n,
                p: a
            };
        this.k || this.getValue(!0),
        this._isAnimated = this.k
    }
    function GradientProperty(t, e, r) {
        this.data = e,
        this.c = createTypedArray("uint8c", 4 * e.p);
        var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
        this.o = createTypedArray("float32", i),
        this._cmdf = !1,
        this._omdf = !1,
        this._collapsable = this.checkCollapsable(),
        this._hasOpacity = i,
        this.initDynamicPropertyContainer(r),
        this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
        this.k = this.prop.k,
        this.getValue(!0)
    }
    ShapeModifier.prototype.initModifierProperties = function() {}
    ,
    ShapeModifier.prototype.addShapeToModifier = function() {}
    ,
    ShapeModifier.prototype.addShape = function(t) {
        if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollection_pool.newShapeCollection()
            };
            this.shapes.push(e),
            this.addShapeToModifier(e),
            this._isAnimated && t.setAsAnimated()
        }
    }
    ,
    ShapeModifier.prototype.init = function(t, e) {
        this.shapes = [],
        this.elem = t,
        this.initDynamicPropertyContainer(t),
        this.initModifierProperties(t, e),
        this.frameId = initialDefaultFrame,
        this.closed = !1,
        this.k = !1,
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }
    ,
    ShapeModifier.prototype.processKeys = function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
        this.iterateDynamicProperties())
    }
    ,
    extendPrototype([DynamicPropertyContainer], ShapeModifier),
    extendPrototype([ShapeModifier], TrimModifier),
    TrimModifier.prototype.initModifierProperties = function(t, e) {
        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
        this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
        this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
        this.sValue = 0,
        this.eValue = 0,
        this.getValue = this.processKeys,
        this.m = e.m,
        this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
    }
    ,
    TrimModifier.prototype.addShapeToModifier = function(t) {
        t.pathsData = []
    }
    ,
    TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
        var a = [];
        e <= 1 ? a.push({
            s: t,
            e: e
        }) : 1 <= t ? a.push({
            s: t - 1,
            e: e - 1
        }) : (a.push({
            s: t,
            e: 1
        }),
        a.push({
            s: 0,
            e: e - 1
        }));
        var n, o, h = [], l = a.length;
        for (n = 0; n < l; n += 1) {
            var p, m;
            if ((o = a[n]).e * s < i || o.s * s > i + r)
                ;
            else
                p = o.s * s <= i ? 0 : (o.s * s - i) / r,
                m = o.e * s >= i + r ? 1 : (o.e * s - i) / r,
                h.push([p, m])
        }
        return h.length || h.push([0, 0]),
        h
    }
    ,
    TrimModifier.prototype.releasePathsData = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1)
            segments_length_pool.release(t[e]);
        return t.length = 0,
        t
    }
    ,
    TrimModifier.prototype.processShapes = function(t) {
        var e, r, i;
        if (this._mdf || t) {
            var s = this.o.v % 360 / 360;
            if (s < 0 && (s += 1),
            e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s,
            (r = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s) < e) {
                var a = e;
                e = r,
                r = a
            }
            e = 1e-4 * Math.round(1e4 * e),
            r = 1e-4 * Math.round(1e4 * r),
            this.sValue = e,
            this.eValue = r
        } else
            e = this.sValue,
            r = this.eValue;
        var n, o, h, l, p, m, f = this.shapes.length, c = 0;
        if (r === e)
            for (n = 0; n < f; n += 1)
                this.shapes[n].localShapeCollection.releaseShapes(),
                this.shapes[n].shape._mdf = !0,
                this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
        else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
                for (n = 0; n < f; n += 1)
                    this.shapes[n].pathsData.length = 0,
                    this.shapes[n].shape._mdf = !0
        } else {
            var d, u, y = [];
            for (n = 0; n < f; n += 1)
                if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                    if (h = (i = d.shape.paths)._length,
                    m = 0,
                    !d.shape._mdf && d.pathsData.length)
                        m = d.totalShapeLength;
                    else {
                        for (l = this.releasePathsData(d.pathsData),
                        o = 0; o < h; o += 1)
                            p = bez.getSegmentsLength(i.shapes[o]),
                            l.push(p),
                            m += p.totalLength;
                        d.totalShapeLength = m,
                        d.pathsData = l
                    }
                    c += m,
                    d.shape._mdf = !0
                } else
                    d.shape.paths = d.localShapeCollection;
            var g, v = e, b = r, E = 0;
            for (n = f - 1; 0 <= n; n -= 1)
                if ((d = this.shapes[n]).shape._mdf) {
                    for ((u = d.localShapeCollection).releaseShapes(),
                    2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, E, c),
                    E += d.totalShapeLength) : g = [[v, b]],
                    h = g.length,
                    o = 0; o < h; o += 1) {
                        v = g[o][0],
                        b = g[o][1],
                        y.length = 0,
                        b <= 1 ? y.push({
                            s: d.totalShapeLength * v,
                            e: d.totalShapeLength * b
                        }) : 1 <= v ? y.push({
                            s: d.totalShapeLength * (v - 1),
                            e: d.totalShapeLength * (b - 1)
                        }) : (y.push({
                            s: d.totalShapeLength * v,
                            e: d.totalShapeLength
                        }),
                        y.push({
                            s: 0,
                            e: d.totalShapeLength * (b - 1)
                        }));
                        var x = this.addShapes(d, y[0]);
                        if (y[0].s !== y[0].e) {
                            if (1 < y.length)
                                if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                    var S = x.pop();
                                    this.addPaths(x, u),
                                    x = this.addShapes(d, y[1], S)
                                } else
                                    this.addPaths(x, u),
                                    x = this.addShapes(d, y[1]);
                            this.addPaths(x, u)
                        }
                    }
                    d.shape.paths = u
                }
        }
    }
    ,
    TrimModifier.prototype.addPaths = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
            e.addShape(t[r])
    }
    ,
    TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
        s.setXYAt(e[0], e[1], "o", a),
        s.setXYAt(r[0], r[1], "i", a + 1),
        n && s.setXYAt(t[0], t[1], "v", a),
        s.setXYAt(i[0], i[1], "v", a + 1)
    }
    ,
    TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
        e.setXYAt(t[1], t[5], "o", r),
        e.setXYAt(t[2], t[6], "i", r + 1),
        i && e.setXYAt(t[0], t[4], "v", r),
        e.setXYAt(t[3], t[7], "v", r + 1)
    }
    ,
    TrimModifier.prototype.addShapes = function(t, e, r) {
        var i, s, a, n, o, h, l, p, m = t.pathsData, f = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = !0;
        for (p = r ? (o = r._length,
        r._length) : (r = shape_pool.newElement(),
        o = 0),
        u.push(r),
        i = 0; i < c; i += 1) {
            for (h = m[i].lengths,
            r.c = f[i].c,
            a = f[i].c ? h.length : h.length + 1,
            s = 1; s < a; s += 1)
                if (d + (n = h[s - 1]).addedLength < e.s)
                    d += n.addedLength,
                    r.c = !1;
                else {
                    if (d > e.e) {
                        r.c = !1;
                        break
                    }
                    e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y),
                    y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]),
                    this.addSegmentFromArray(l, r, o, y),
                    y = !1,
                    r.c = !1),
                    d += n.addedLength,
                    o += 1
                }
            if (f[i].c && h.length) {
                if (n = h[s - 1],
                d <= e.e) {
                    var g = h[s - 1].addedLength;
                    e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y),
                    y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]),
                    this.addSegmentFromArray(l, r, o, y),
                    y = !1,
                    r.c = !1)
                } else
                    r.c = !1;
                d += n.addedLength,
                o += 1
            }
            if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p),
            r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)),
            d > e.e)
                break;
            i < c - 1 && (r = shape_pool.newElement(),
            y = !0,
            u.push(r),
            o = 0)
        }
        return u
    }
    ,
    ShapeModifiers.registerModifier("tm", TrimModifier),
    extendPrototype([ShapeModifier], RoundCornersModifier),
    RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys,
        this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
        this._isAnimated = !!this.rd.effectsSequence.length
    }
    ,
    RoundCornersModifier.prototype.processPath = function(t, e) {
        var r = shape_pool.newElement();
        r.c = t.c;
        var i, s, a, n, o, h, l, p, m, f, c, d, u, y = t._length, g = 0;
        for (i = 0; i < y; i += 1)
            s = t.v[i],
            n = t.o[i],
            a = t.i[i],
            s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1],
            l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0,
            p = d = s[0] + (o[0] - s[0]) * l,
            m = u = s[1] - (s[1] - o[1]) * l,
            f = p - (p - s[0]) * roundCorner,
            c = m - (m - s[1]) * roundCorner,
            r.setTripleAt(p, m, f, c, d, u, g),
            g += 1,
            o = i === y - 1 ? t.v[0] : t.v[i + 1],
            l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0,
            p = f = s[0] + (o[0] - s[0]) * l,
            m = c = s[1] + (o[1] - s[1]) * l,
            d = p - (p - s[0]) * roundCorner,
            u = m - (m - s[1]) * roundCorner,
            r.setTripleAt(p, m, f, c, d, u, g)) : r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g) : r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g),
            g += 1;
        return r
    }
    ,
    RoundCornersModifier.prototype.processShapes = function(t) {
        var e, r, i, s, a, n, o = this.shapes.length, h = this.rd.v;
        if (0 !== h)
            for (r = 0; r < o; r += 1) {
                if ((a = this.shapes[r]).shape.paths,
                n = a.localShapeCollection,
                a.shape._mdf || this._mdf || t)
                    for (n.releaseShapes(),
                    a.shape._mdf = !0,
                    e = a.shape.paths.shapes,
                    s = a.shape.paths._length,
                    i = 0; i < s; i += 1)
                        n.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection
            }
        this.dynamicProperties.length || (this._mdf = !1)
    }
    ,
    ShapeModifiers.registerModifier("rd", RoundCornersModifier),
    extendPrototype([ShapeModifier], RepeaterModifier),
    RepeaterModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys,
        this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
        this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
        this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
        this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
        this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
        this.data = e,
        this.dynamicProperties.length || this.getValue(!0),
        this._isAnimated = !!this.dynamicProperties.length,
        this.pMatrix = new Matrix,
        this.rMatrix = new Matrix,
        this.sMatrix = new Matrix,
        this.tMatrix = new Matrix,
        this.matrix = new Matrix
    }
    ,
    RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
        var n = a ? -1 : 1
          , o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s)
          , h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
        t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
        e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
        e.rotate(-i.r.v * n * s),
        e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
        r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
        r.scale(a ? 1 / o : o, a ? 1 / h : h),
        r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
    }
    ,
    RepeaterModifier.prototype.init = function(t, e, r, i) {
        this.elem = t,
        this.arr = e,
        this.pos = r,
        this.elemsData = i,
        this._currentCopies = 0,
        this._elements = [],
        this._groups = [],
        this.frameId = -1,
        this.initDynamicPropertyContainer(t),
        this.initModifierProperties(t, e[r]);
        for (; 0 < r; )
            r -= 1,
            this._elements.unshift(e[r]),
            1;
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }
    ,
    RepeaterModifier.prototype.resetElements = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1)
            t[e]._processed = !1,
            "gr" === t[e].ty && this.resetElements(t[e].it)
    }
    ,
    RepeaterModifier.prototype.cloneElements = function(t) {
        t.length;
        var e = JSON.parse(JSON.stringify(t));
        return this.resetElements(e),
        e
    }
    ,
    RepeaterModifier.prototype.changeGroupRender = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
            t[r]._render = e,
            "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
    }
    ,
    RepeaterModifier.prototype.processShapes = function(t) {
        var e, r, i, s, a;
        if (this._mdf || t) {
            var n, o = Math.ceil(this.c.v);
            if (this._groups.length < o) {
                for (; this._groups.length < o; ) {
                    var h = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                    };
                    h.it.push({
                        a: {
                            a: 0,
                            ix: 1,
                            k: [0, 0]
                        },
                        nm: "Transform",
                        o: {
                            a: 0,
                            ix: 7,
                            k: 100
                        },
                        p: {
                            a: 0,
                            ix: 2,
                            k: [0, 0]
                        },
                        r: {
                            a: 1,
                            ix: 6,
                            k: [{
                                s: 0,
                                e: 0,
                                t: 0
                            }, {
                                s: 0,
                                e: 0,
                                t: 1
                            }]
                        },
                        s: {
                            a: 0,
                            ix: 3,
                            k: [100, 100]
                        },
                        sa: {
                            a: 0,
                            ix: 5,
                            k: 0
                        },
                        sk: {
                            a: 0,
                            ix: 4,
                            k: 0
                        },
                        ty: "tr"
                    }),
                    this.arr.splice(0, 0, h),
                    this._groups.splice(0, 0, h),
                    this._currentCopies += 1
                }
                this.elem.reloadShapes()
            }
            for (i = a = 0; i <= this._groups.length - 1; i += 1)
                n = a < o,
                this._groups[i]._render = n,
                this.changeGroupRender(this._groups[i].it, n),
                a += 1;
            this._currentCopies = o;
            var l = this.o.v
              , p = l % 1
              , m = 0 < l ? Math.floor(l) : Math.ceil(l)
              , f = (this.tr.v.props,
            this.pMatrix.props)
              , c = this.rMatrix.props
              , d = this.sMatrix.props;
            this.pMatrix.reset(),
            this.rMatrix.reset(),
            this.sMatrix.reset(),
            this.tMatrix.reset(),
            this.matrix.reset();
            var u, y, g = 0;
            if (0 < l) {
                for (; g < m; )
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                    g += 1;
                p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1),
                g += p)
            } else if (l < 0) {
                for (; m < g; )
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                    g -= 1;
                p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0),
                g -= p)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1,
            s = 1 === this.data.m ? 1 : -1,
            a = this._currentCopies; a; ) {
                if (y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length,
                e[e.length - 1].transform.mProps._mdf = !0,
                e[e.length - 1].transform.op._mdf = !0,
                e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)),
                0 !== g) {
                    for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                    this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]),
                    this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
                    this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]),
                    u = 0; u < y; u += 1)
                        r[u] = this.matrix.props[u];
                    this.matrix.reset()
                } else
                    for (this.matrix.reset(),
                    u = 0; u < y; u += 1)
                        r[u] = this.matrix.props[u];
                g += 1,
                a -= 1,
                i += s
            }
        } else
            for (a = this._currentCopies,
            i = 0,
            s = 1; a; )
                r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props,
                e[e.length - 1].transform.mProps._mdf = !1,
                e[e.length - 1].transform.op._mdf = !1,
                a -= 1,
                i += s
    }
    ,
    RepeaterModifier.prototype.addShape = function() {}
    ,
    ShapeModifiers.registerModifier("rp", RepeaterModifier),
    ShapeCollection.prototype.addShape = function(t) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
        this._maxLength *= 2),
        this.shapes[this._length] = t,
        this._length += 1
    }
    ,
    ShapeCollection.prototype.releaseShapes = function() {
        var t;
        for (t = 0; t < this._length; t += 1)
            shape_pool.release(this.shapes[t]);
        this._length = 0
    }
    ,
    DashProperty.prototype.getValue = function(t) {
        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId,
        this.iterateDynamicProperties(),
        this._mdf = this._mdf || t,
        this._mdf)) {
            var e = 0
              , r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""),
            e = 0; e < r; e += 1)
                "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
        }
    }
    ,
    extendPrototype([DynamicPropertyContainer], DashProperty),
    GradientProperty.prototype.comparePoints = function(t, e) {
        for (var r = 0, i = this.o.length / 2; r < i; ) {
            if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r]))
                return !1;
            r += 1
        }
        return !0
    }
    ,
    GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 != this.c.length / 4)
            return !1;
        if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                    return !1;
                t += 1
            }
        else if (!this.comparePoints(this.data.k.k, this.data.p))
            return !1;
        return !0
    }
    ,
    GradientProperty.prototype.getValue = function(t) {
        if (this.prop.getValue(),
        this._mdf = !1,
        this._cmdf = !1,
        this._omdf = !1,
        this.prop._mdf || t) {
            var e, r, i, s = 4 * this.data.p;
            for (e = 0; e < s; e += 1)
                r = e % 4 == 0 ? 100 : 255,
                i = Math.round(this.prop.v[e] * r),
                this.c[e] !== i && (this.c[e] = i,
                this._cmdf = !t);
            if (this.o.length)
                for (s = this.prop.v.length,
                e = 4 * this.data.p; e < s; e += 1)
                    r = e % 2 == 0 ? 100 : 1,
                    i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                    this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i,
                    this._omdf = !t);
            this._mdf = !t
        }
    }
    ,
    extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function(t, e, r, i) {
        if (0 === e)
            return "";
        var s, a = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
        for (s = 1; s < e; s += 1)
            h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
        return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]),
        h += "z"),
        h
    }, ImagePreloader = function() {
        var s = function() {
            var t = createTag("canvas");
            t.width = 1,
            t.height = 1;
            var e = t.getContext("2d");
            return e.fillStyle = "rgba(0,0,0,0)",
            e.fillRect(0, 0, 1, 1),
            t
        }();
        function t() {
            this.loadedAssets += 1,
            this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
        }
        function e(t) {
            var e = function(t, e, r) {
                var i = "";
                if (t.e)
                    i = t.p;
                else if (e) {
                    var s = t.p;
                    -1 !== s.indexOf("images/") && (s = s.split("/")[1]),
                    i = e + s
                } else
                    i = r,
                    i += t.u ? t.u : "",
                    i += t.p;
                return i
            }(t, this.assetsPath, this.path)
              , r = createTag("img");
            r.crossOrigin = "anonymous",
            r.addEventListener("load", this._imageLoaded.bind(this), !1),
            r.addEventListener("error", function() {
                i.img = s,
                this._imageLoaded()
            }
            .bind(this), !1),
            r.src = e;
            var i = {
                img: r,
                assetData: t
            };
            return i
        }
        function r(t, e) {
            this.imagesLoadedCb = e;
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
                t[r].layers || (this.totalImages += 1,
                this.images.push(this._createImageData(t[r])))
        }
        function i(t) {
            this.path = t || ""
        }
        function a(t) {
            this.assetsPath = t || ""
        }
        function n(t) {
            for (var e = 0, r = this.images.length; e < r; ) {
                if (this.images[e].assetData === t)
                    return this.images[e].img;
                e += 1
            }
        }
        function o() {
            this.imagesLoadedCb = null,
            this.images.length = 0
        }
        function h() {
            return this.totalImages === this.loadedAssets
        }
        return function() {
            this.loadAssets = r,
            this.setAssetsPath = a,
            this.setPath = i,
            this.loaded = h,
            this.destroy = o,
            this.getImage = n,
            this._createImageData = e,
            this._imageLoaded = t,
            this.assetsPath = "",
            this.path = "",
            this.totalImages = 0,
            this.loadedAssets = 0,
            this.imagesLoadedCb = null,
            this.images = []
        }
    }(), featureSupport = (sw = {
        maskType: !0
    },
    (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (sw.maskType = !1),
    sw), sw, filtersFactory = (tw = {},
    tw.createFilter = function(t) {
        var e = createNS("filter");
        return e.setAttribute("id", t),
        e.setAttribute("filterUnits", "objectBoundingBox"),
        e.setAttribute("x", "0%"),
        e.setAttribute("y", "0%"),
        e.setAttribute("width", "100%"),
        e.setAttribute("height", "100%"),
        e
    }
    ,
    tw.createAlphaToLuminanceFilter = function() {
        var t = createNS("feColorMatrix");
        return t.setAttribute("type", "matrix"),
        t.setAttribute("color-interpolation-filters", "sRGB"),
        t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
        t
    }
    ,
    tw), tw, assetLoader = function() {
        function a(t) {
            return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
        }
        return {
            load: function(t, e, r) {
                var i, s = new XMLHttpRequest;
                s.open("GET", t, !0);
                try {
                    s.responseType = "json"
                } catch (t) {}
                s.send(),
                s.onreadystatechange = function() {
                    if (4 == s.readyState)
                        if (200 == s.status)
                            i = a(s),
                            e(i);
                        else
                            try {
                                i = a(s),
                                e(i)
                            } catch (t) {
                                r && r(t)
                            }
                }
            }
        }
    }();
    function TextAnimatorProperty(t, e, r) {
        this._isFirstFrame = !0,
        this._hasMaskedPath = !1,
        this._frameId = -1,
        this._textData = t,
        this._renderType = e,
        this._elem = r,
        this._animatorsData = createSizedArray(this._textData.a.length),
        this._pathData = {},
        this._moreOptions = {
            alignment: {}
        },
        this.renderedLetters = [],
        this.lettersChangedFlag = !1,
        this.initDynamicPropertyContainer(r)
    }
    function TextAnimatorDataProperty(t, e, r) {
        var i = {
            propType: !1
        }
          , s = PropertyFactory.getProp
          , a = e.a;
        this.a = {
            r: a.r ? s(t, a.r, 0, degToRads, r) : i,
            rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
            s: a.s ? s(t, a.s, 1, .01, r) : i,
            a: a.a ? s(t, a.a, 1, 0, r) : i,
            o: a.o ? s(t, a.o, 0, .01, r) : i,
            p: a.p ? s(t, a.p, 1, 0, r) : i,
            sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
            sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
            fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
            fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
            fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
            fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
            t: a.t ? s(t, a.t, 0, 0, r) : i
        },
        this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r),
        this.s.t = e.s.t
    }
    function LetterProps(t, e, r, i, s, a) {
        this.o = t,
        this.sw = e,
        this.sc = r,
        this.fc = i,
        this.m = s,
        this.p = a,
        this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!r,
            fc: !!i,
            m: !0,
            p: !0
        }
    }
    function TextProperty(t, e) {
        this._frameId = initialDefaultFrame,
        this.pv = "",
        this.v = "",
        this.kf = !1,
        this._isFirstFrame = !0,
        this._mdf = !1,
        this.data = e,
        this.elem = t,
        this.comp = this.elem.comp,
        this.keysIndex = 0,
        this.canResize = !1,
        this.minimumFontSize = 1,
        this.effectsSequence = [],
        this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
        },
        this.copyData(this.currentData, this.data.d.k[0].s),
        this.searchProperty() || this.completeTextData(this.currentData)
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
        var t, e, r = this._textData.a.length, i = PropertyFactory.getProp;
        for (t = 0; t < r; t += 1)
            e = this._textData.a[t],
            this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,e,this);
        this._textData.p && "m"in this._textData.p ? (this._pathData = {
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        },
        this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
        this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
    }
    ,
    TextAnimatorProperty.prototype.getMeasures = function(t, e) {
        if (this.lettersChangedFlag = e,
        this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, i, s, a, n, o, h, l, p, m, f, c, d, u, y, g, v, b, E, x = this._moreOptions.alignment.v, S = this._animatorsData, P = this._textData, _ = this.mHelper, A = this._renderType, C = this.renderedLetters.length, T = (this.data,
            t.l);
            if (this._hasMaskedPath) {
                if (E = this._pathData.m,
                !this._pathData.n || this._pathData._mdf) {
                    var k, M = E.v;
                    for (this._pathData.r && (M = M.reverse()),
                    n = {
                        tLength: 0,
                        segments: []
                    },
                    a = M._length - 1,
                    s = g = 0; s < a; s += 1)
                        k = bez.buildBezierData(M.v[s], M.v[s + 1], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[s + 1][0] - M.v[s + 1][0], M.i[s + 1][1] - M.v[s + 1][1]]),
                        n.tLength += k.segmentLength,
                        n.segments.push(k),
                        g += k.segmentLength;
                    s = a,
                    E.v.c && (k = bez.buildBezierData(M.v[s], M.v[0], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]),
                    n.tLength += k.segmentLength,
                    n.segments.push(k),
                    g += k.segmentLength),
                    this._pathData.pi = n
                }
                if (n = this._pathData.pi,
                o = this._pathData.f.v,
                m = 1,
                p = !(l = f = 0),
                u = n.segments,
                o < 0 && E.v.c)
                    for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                    m = (d = u[f = u.length - 1].points).length - 1; o < 0; )
                        o += d[m].partialLength,
                        (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
                c = (d = u[f].points)[m - 1],
                y = (h = d[m]).partialLength
            }
            a = T.length,
            i = r = 0;
            var D, w, F, I, V = 1.2 * t.finalSize * .714, R = !0;
            F = S.length;
            var B, L, G, z, N, O, H, j, q, W, Y, X, $, K = -1, U = o, J = f, Z = m, Q = -1, tt = "", et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
                var rt = 0
                  , it = 0
                  , st = 2 === t.j ? -.5 : -1
                  , at = 0
                  , nt = !0;
                for (s = 0; s < a; s += 1)
                    if (T[s].n) {
                        for (rt && (rt += it); at < s; )
                            T[at].animatorJustifyOffset = rt,
                            at += 1;
                        nt = !(rt = 0)
                    } else {
                        for (w = 0; w < F; w += 1)
                            (D = S[w].a).t.propType && (nt && 2 === t.j && (it += D.t.v * st),
                            (B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars)).length ? rt += D.t.v * B[0] * st : rt += D.t.v * B * st);
                        nt = !1
                    }
                for (rt && (rt += it); at < s; )
                    T[at].animatorJustifyOffset = rt,
                    at += 1
            }
            for (s = 0; s < a; s += 1) {
                if (_.reset(),
                N = 1,
                T[s].n)
                    r = 0,
                    i += t.yOffset,
                    i += R ? 1 : 0,
                    o = U,
                    R = !1,
                    0,
                    this._hasMaskedPath && (m = Z,
                    c = (d = u[f = J].points)[m - 1],
                    y = (h = d[m]).partialLength,
                    l = 0),
                    $ = W = X = tt = "",
                    et = this.defaultPropsArray;
                else {
                    if (this._hasMaskedPath) {
                        if (Q !== T[s].line) {
                            switch (t.j) {
                            case 1:
                                o += g - t.lineWidths[T[s].line];
                                break;
                            case 2:
                                o += (g - t.lineWidths[T[s].line]) / 2
                            }
                            Q = T[s].line
                        }
                        K !== T[s].ind && (T[K] && (o += T[K].extra),
                        o += T[s].an / 2,
                        K = T[s].ind),
                        o += x[0] * T[s].an / 200;
                        var ot = 0;
                        for (w = 0; w < F; w += 1)
                            (D = S[w].a).p.propType && ((B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars)).length ? ot += D.p.v[0] * B[0] : ot += D.p.v[0] * B),
                            D.a.propType && ((B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars)).length ? ot += D.a.v[0] * B[0] : ot += D.a.v[0] * B);
                        for (p = !0; p; )
                            o + ot <= l + y || !d ? (v = (o + ot - l) / h.partialLength,
                            G = c.point[0] + (h.point[0] - c.point[0]) * v,
                            z = c.point[1] + (h.point[1] - c.point[1]) * v,
                            _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100),
                            p = !1) : d && (l += h.partialLength,
                            (m += 1) >= d.length && (m = 0,
                            d = u[f += 1] ? u[f].points : E.v.c ? u[f = m = 0].points : (l -= h.partialLength,
                            null)),
                            d && (c = h,
                            y = (h = d[m]).partialLength));
                        L = T[s].an / 2 - T[s].add,
                        _.translate(-L, 0, 0)
                    } else
                        L = T[s].an / 2 - T[s].add,
                        _.translate(-L, 0, 0),
                        _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100, 0);
                    for (T[s].l / 2,
                    w = 0; w < F; w += 1)
                        (D = S[w].a).t.propType && (B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars),
                        0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += D.t.v * B[0] : o += D.t.v * B : B.length ? r += D.t.v * B[0] : r += D.t.v * B));
                    for (T[s].l / 2,
                    t.strokeWidthAnim && (H = t.sw || 0),
                    t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                    t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]),
                    w = 0; w < F; w += 1)
                        (D = S[w].a).a.propType && ((B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars)).length ? _.translate(-D.a.v[0] * B[0], -D.a.v[1] * B[1], D.a.v[2] * B[2]) : _.translate(-D.a.v[0] * B, -D.a.v[1] * B, D.a.v[2] * B));
                    for (w = 0; w < F; w += 1)
                        (D = S[w].a).s.propType && ((B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars)).length ? _.scale(1 + (D.s.v[0] - 1) * B[0], 1 + (D.s.v[1] - 1) * B[1], 1) : _.scale(1 + (D.s.v[0] - 1) * B, 1 + (D.s.v[1] - 1) * B, 1));
                    for (w = 0; w < F; w += 1) {
                        if (D = S[w].a,
                        B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars),
                        D.sk.propType && (B.length ? _.skewFromAxis(-D.sk.v * B[0], D.sa.v * B[1]) : _.skewFromAxis(-D.sk.v * B, D.sa.v * B)),
                        D.r.propType && (B.length ? _.rotateZ(-D.r.v * B[2]) : _.rotateZ(-D.r.v * B)),
                        D.ry.propType && (B.length ? _.rotateY(D.ry.v * B[1]) : _.rotateY(D.ry.v * B)),
                        D.rx.propType && (B.length ? _.rotateX(D.rx.v * B[0]) : _.rotateX(D.rx.v * B)),
                        D.o.propType && (B.length ? N += (D.o.v * B[0] - N) * B[0] : N += (D.o.v * B - N) * B),
                        t.strokeWidthAnim && D.sw.propType && (B.length ? H += D.sw.v * B[0] : H += D.sw.v * B),
                        t.strokeColorAnim && D.sc.propType)
                            for (q = 0; q < 3; q += 1)
                                B.length ? O[q] = O[q] + (D.sc.v[q] - O[q]) * B[0] : O[q] = O[q] + (D.sc.v[q] - O[q]) * B;
                        if (t.fillColorAnim && t.fc) {
                            if (D.fc.propType)
                                for (q = 0; q < 3; q += 1)
                                    B.length ? j[q] = j[q] + (D.fc.v[q] - j[q]) * B[0] : j[q] = j[q] + (D.fc.v[q] - j[q]) * B;
                            D.fh.propType && (j = B.length ? addHueToRGB(j, D.fh.v * B[0]) : addHueToRGB(j, D.fh.v * B)),
                            D.fs.propType && (j = B.length ? addSaturationToRGB(j, D.fs.v * B[0]) : addSaturationToRGB(j, D.fs.v * B)),
                            D.fb.propType && (j = B.length ? addBrightnessToRGB(j, D.fb.v * B[0]) : addBrightnessToRGB(j, D.fb.v * B))
                        }
                    }
                    for (w = 0; w < F; w += 1)
                        (D = S[w].a).p.propType && (B = S[w].s.getMult(T[s].anIndexes[w], P.a[w].s.totalChars),
                        this._hasMaskedPath ? B.length ? _.translate(0, D.p.v[1] * B[0], -D.p.v[2] * B[1]) : _.translate(0, D.p.v[1] * B, -D.p.v[2] * B) : B.length ? _.translate(D.p.v[0] * B[0], D.p.v[1] * B[1], -D.p.v[2] * B[2]) : _.translate(D.p.v[0] * B, D.p.v[1] * B, -D.p.v[2] * B));
                    if (t.strokeWidthAnim && (W = H < 0 ? 0 : H),
                    t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"),
                    t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"),
                    this._hasMaskedPath) {
                        if (_.translate(0, -t.ls),
                        _.translate(0, x[1] * V / 100 + i, 0),
                        P.p.p) {
                            b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                            var ht = 180 * Math.atan(b) / Math.PI;
                            h.point[0] < c.point[0] && (ht += 180),
                            _.rotate(-ht * Math.PI / 180)
                        }
                        _.translate(G, z, 0),
                        o -= x[0] * T[s].an / 200,
                        T[s + 1] && K !== T[s + 1].ind && (o += T[s].an / 2,
                        o += t.tr / 1e3 * t.finalSize)
                    } else {
                        switch (_.translate(r, i, 0),
                        t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                        t.j) {
                        case 1:
                            _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0);
                            break;
                        case 2:
                            _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0)
                        }
                        _.translate(0, -t.ls),
                        _.translate(L, 0, 0),
                        _.translate(x[0] * T[s].an / 200, x[1] * V / 100, 0),
                        r += T[s].l + t.tr / 1e3 * t.finalSize
                    }
                    "html" === A ? tt = _.toCSS() : "svg" === A ? tt = _.to2dCSS() : et = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]],
                    $ = N
                }
                this.lettersChangedFlag = C <= s ? (I = new LetterProps($,W,Y,X,tt,et),
                this.renderedLetters.push(I),
                C += 1,
                !0) : (I = this.renderedLetters[s]).update($, W, Y, X, tt, et) || this.lettersChangedFlag
            }
        }
    }
    ,
    TextAnimatorProperty.prototype.getValue = function() {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
        this.iterateDynamicProperties())
    }
    ,
    TextAnimatorProperty.prototype.mHelper = new Matrix,
    TextAnimatorProperty.prototype.defaultPropsArray = [],
    extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
    LetterProps.prototype.update = function(t, e, r, i, s, a) {
        this._mdf.o = !1,
        this._mdf.sw = !1,
        this._mdf.sc = !1,
        this._mdf.fc = !1,
        this._mdf.m = !1;
        var n = this._mdf.p = !1;
        return this.o !== t && (this.o = t,
        n = this._mdf.o = !0),
        this.sw !== e && (this.sw = e,
        n = this._mdf.sw = !0),
        this.sc !== r && (this.sc = r,
        n = this._mdf.sc = !0),
        this.fc !== i && (this.fc = i,
        n = this._mdf.fc = !0),
        this.m !== s && (this.m = s,
        n = this._mdf.m = !0),
        !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a,
        n = this._mdf.p = !0),
        n
    }
    ,
    TextProperty.prototype.defaultBoxWidth = [0, 0],
    TextProperty.prototype.copyData = function(t, e) {
        for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]);
        return t
    }
    ,
    TextProperty.prototype.setCurrentData = function(t) {
        t.__complete || this.completeTextData(t),
        this.currentData = t,
        this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
        this._mdf = !0
    }
    ,
    TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes()
    }
    ,
    TextProperty.prototype.searchKeyframes = function() {
        return this.kf = 1 < this.data.d.k.length,
        this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
        this.kf
    }
    ,
    TextProperty.prototype.addEffect = function(t) {
        this.effectsSequence.push(t),
        this.elem.addDynamicProperty(this)
    }
    ,
    TextProperty.prototype.getValue = function(t) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData
              , r = this.keysIndex;
            if (this.lock)
                this.setCurrentData(this.currentData);
            else {
                this.lock = !0,
                this._mdf = !1;
                var i, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1)
                    a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a),
                this.pv = this.v = this.currentData,
                this.lock = !1,
                this.frameId = this.elem.globalData.frameId
            }
        }
    }
    ,
    TextProperty.prototype.getKeyframeValue = function() {
        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && (t[r].s,
        !(r === i - 1 || t[r + 1].t > e)); )
            r += 1;
        return this.keysIndex !== r && (this.keysIndex = r),
        this.data.d.k[this.keysIndex].s
    }
    ,
    TextProperty.prototype.buildFinalText = function(t) {
        for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], s = 0, a = t.length; s < a; )
            e = t.charCodeAt(s),
            -1 !== r.indexOf(e) ? i[i.length - 1] += t.charAt(s) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(s + 1)) && e <= 57343 ? (i.push(t.substr(s, 2)),
            ++s) : i.push(t.charAt(s)),
            s += 1;
        return i
    }
    ,
    TextProperty.prototype.completeTextData = function(t) {
        t.__complete = !0;
        var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], m = 0, f = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), E = 0, x = b.fStyle ? b.fStyle.split(" ") : [], S = "normal", P = "normal";
        for (r = x.length,
        e = 0; e < r; e += 1)
            switch (x[e].toLowerCase()) {
            case "italic":
                P = "italic";
                break;
            case "bold":
                S = "700";
                break;
            case "black":
                S = "900";
                break;
            case "medium":
                S = "500";
                break;
            case "regular":
            case "normal":
                S = "400";
                break;
            case "light":
            case "thin":
                S = "200"
            }
        t.fWeight = b.fWeight || S,
        t.fStyle = P,
        t.finalSize = t.s,
        t.finalText = this.buildFinalText(t.t),
        r = t.finalText.length,
        t.finalLineHeight = t.lh;
        var _, A = t.tr / 1e3 * t.finalSize;
        if (t.sz)
            for (var C, T, k = !0, M = t.sz[0], D = t.sz[1]; k; ) {
                g = C = 0,
                r = (T = this.buildFinalText(t.t)).length,
                A = t.tr / 1e3 * t.finalSize;
                var w = -1;
                for (e = 0; e < r; e += 1)
                    _ = T[e].charCodeAt(0),
                    i = !1,
                    " " === T[e] ? w = e : 13 !== _ && 3 !== _ || (i = !(g = 0),
                    C += t.finalLineHeight || 1.2 * t.finalSize),
                    M < g + (E = h.chars ? (o = h.getCharData(T[e], b.fStyle, b.fFamily),
                    i ? 0 : o.w * t.finalSize / 100) : h.measureText(T[e], t.f, t.finalSize)) && " " !== T[e] ? (-1 === w ? r += 1 : e = w,
                    C += t.finalLineHeight || 1.2 * t.finalSize,
                    T.splice(e, w === e ? 1 : 0, "\r"),
                    w = -1,
                    g = 0) : (g += E,
                    g += A);
                C += b.ascent * t.finalSize / 100,
                this.canResize && t.finalSize > this.minimumFontSize && D < C ? (t.finalSize -= 1,
                t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T,
                r = t.finalText.length,
                k = !1)
            }
        g = -A;
        var F, I = E = 0;
        for (e = 0; e < r; e += 1)
            if (i = !1,
            13 === (_ = (F = t.finalText[e]).charCodeAt(0)) || 3 === _ ? (I = 0,
            y.push(g),
            v = v < g ? g : v,
            g = -2 * A,
            i = !(s = ""),
            u += 1) : s = F,
            E = h.chars ? (o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily),
            i ? 0 : o.w * t.finalSize / 100) : h.measureText(s, t.f, t.finalSize),
            " " === F ? I += E + A : (g += E + A + I,
            I = 0),
            p.push({
                l: E,
                an: E,
                add: c,
                n: i,
                anIndexes: [],
                val: s,
                line: u,
                animatorJustifyOffset: 0
            }),
            2 == f) {
                if (c += E,
                "" === s || " " === s || e === r - 1) {
                    for ("" !== s && " " !== s || (c -= E); d <= e; )
                        p[d].an = c,
                        p[d].ind = m,
                        p[d].extra = E,
                        d += 1;
                    m += 1,
                    c = 0
                }
            } else if (3 == f) {
                if (c += E,
                "" === s || e === r - 1) {
                    for ("" === s && (c -= E); d <= e; )
                        p[d].an = c,
                        p[d].ind = m,
                        p[d].extra = E,
                        d += 1;
                    c = 0,
                    m += 1
                }
            } else
                p[m].ind = m,
                p[m].extra = 0,
                m += 1;
        if (t.l = p,
        v = v < g ? g : v,
        y.push(g),
        t.sz)
            t.boxWidth = t.sz[0],
            t.justifyOffset = 0;
        else
            switch (t.boxWidth = v,
            t.j) {
            case 1:
                t.justifyOffset = -t.boxWidth;
                break;
            case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
            default:
                t.justifyOffset = 0
            }
        t.lineWidths = y;
        var V, R, B = l.a;
        n = B.length;
        var L, G, z = [];
        for (a = 0; a < n; a += 1) {
            for ((V = B[a]).a.sc && (t.strokeColorAnim = !0),
            V.a.sw && (t.strokeWidthAnim = !0),
            (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0),
            G = 0,
            L = V.s.b,
            e = 0; e < r; e += 1)
                (R = p[e]).anIndexes[a] = G,
                (1 == L && "" !== R.val || 2 == L && "" !== R.val && " " !== R.val || 3 == L && (R.n || " " == R.val || e == r - 1) || 4 == L && (R.n || e == r - 1)) && (1 === V.s.rn && z.push(G),
                G += 1);
            l.a[a].s.totalChars = G;
            var N, O = -1;
            if (1 === V.s.rn)
                for (e = 0; e < r; e += 1)
                    O != (R = p[e]).anIndexes[a] && (O = R.anIndexes[a],
                    N = z.splice(Math.floor(Math.random() * z.length), 1)[0]),
                    R.anIndexes[a] = N
        }
        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
        t.ls = t.ls || 0,
        t.ascent = b.ascent * t.finalSize / 100
    }
    ,
    TextProperty.prototype.updateDocumentData = function(t, e) {
        e = void 0 === e ? this.keysIndex : e;
        var r = this.copyData({}, this.data.d.k[e].s);
        r = this.copyData(r, t),
        this.data.d.k[e].s = r,
        this.recalculate(e),
        this.elem.addDynamicProperty(this)
    }
    ,
    TextProperty.prototype.recalculate = function(t) {
        var e = this.data.d.k[t].s;
        e.__complete = !1,
        this.keysIndex = 0,
        this._isFirstFrame = !0,
        this.getValue(e)
    }
    ,
    TextProperty.prototype.canResizeFont = function(t) {
        this.canResize = t,
        this.recalculate(this.keysIndex),
        this.elem.addDynamicProperty(this)
    }
    ,
    TextProperty.prototype.setMinimumFontSize = function(t) {
        this.minimumFontSize = Math.floor(t) || 1,
        this.recalculate(this.keysIndex),
        this.elem.addDynamicProperty(this)
    }
    ;
    var TextSelectorProp = function() {
        var c = Math.max
          , d = Math.min
          , u = Math.floor;
        function i(t, e) {
            this._currentTextLength = -1,
            this.k = !1,
            this.data = e,
            this.elem = t,
            this.comp = t.comp,
            this.finalS = 0,
            this.finalE = 0,
            this.initDynamicPropertyContainer(t),
            this.s = PropertyFactory.getProp(t, e.s || {
                k: 0
            }, 0, 0, this),
            this.e = "e"in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                v: 100
            },
            this.o = PropertyFactory.getProp(t, e.o || {
                k: 0
            }, 0, 0, this),
            this.xe = PropertyFactory.getProp(t, e.xe || {
                k: 0
            }, 0, 0, this),
            this.ne = PropertyFactory.getProp(t, e.ne || {
                k: 0
            }, 0, 0, this),
            this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
            this.dynamicProperties.length || this.getValue()
        }
        return i.prototype = {
            getMult: function(t) {
                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                var e = 0
                  , r = 0
                  , i = 1
                  , s = 1;
                0 < this.ne.v ? e = this.ne.v / 100 : r = -this.ne.v / 100,
                0 < this.xe.v ? i = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
                var a = BezierFactory.getBezierEasing(e, r, i, s).get
                  , n = 0
                  , o = this.finalS
                  , h = this.finalE
                  , l = this.data.sh;
                if (2 === l)
                    n = a(n = h === o ? h <= t ? 1 : 0 : c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));
                else if (3 === l)
                    n = a(n = h === o ? h <= t ? 0 : 1 : 1 - c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));
                else if (4 === l)
                    h === o ? n = 0 : (n = c(0, d(.5 / (h - o) + (t - o) / (h - o), 1))) < .5 ? n *= 2 : n = 1 - 2 * (n - .5),
                    n = a(n);
                else if (5 === l) {
                    if (h === o)
                        n = 0;
                    else {
                        var p = h - o
                          , m = -p / 2 + (t = d(c(0, t + .5 - o), h - o))
                          , f = p / 2;
                        n = Math.sqrt(1 - m * m / (f * f))
                    }
                    n = a(n)
                } else
                    n = 6 === l ? a(n = h === o ? 0 : (t = d(c(0, t + .5 - o), h - o),
                    (1 + Math.cos(Math.PI + 2 * Math.PI * t / (h - o))) / 2)) : (t >= u(o) && (n = c(0, d(t - o < 0 ? d(h, 1) - (o - t) : h - t, 1))),
                    a(n));
                return n * this.a.v
            },
            getValue: function(t) {
                this.iterateDynamicProperties(),
                this._mdf = t || this._mdf,
                this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars
                  , r = this.o.v / e
                  , i = this.s.v / e + r
                  , s = this.e.v / e + r;
                if (s < i) {
                    var a = i;
                    i = s,
                    s = a
                }
                this.finalS = i,
                this.finalE = s
            }
        },
        extendPrototype([DynamicPropertyContainer], i),
        {
            getTextSelectorProp: function(t, e, r) {
                return new i(t,e,r)
            }
        }
    }(), pool_factory = function(t, e, r, i) {
        var s = 0
          , a = t
          , n = createSizedArray(a);
        function o() {
            return s ? n[s -= 1] : e()
        }
        return {
            newElement: o,
            release: function(t) {
                s === a && (n = pooling.double(n),
                a *= 2),
                r && r(t),
                n[s] = t,
                s += 1
            }
        }
    }, pooling = {
        double: function(t) {
            return t.concat(createSizedArray(t.length))
        }
    }, point_pool = pool_factory(8, function() {
        return createTypedArray("float32", 2)
    }), shape_pool = (KA = pool_factory(4, function() {
        return new ShapePath
    }, function(t) {
        var e, r = t._length;
        for (e = 0; e < r; e += 1)
            point_pool.release(t.v[e]),
            point_pool.release(t.i[e]),
            point_pool.release(t.o[e]),
            t.v[e] = null,
            t.i[e] = null,
            t.o[e] = null;
        t._length = 0,
        t.c = !1
    }),
    KA.clone = function(t) {
        var e, r = KA.newElement(), i = void 0 === t._length ? t.v.length : t._length;
        for (r.setLength(i),
        r.c = t.c,
        e = 0; e < i; e += 1)
            r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
        return r
    }
    ,
    KA), KA, shapeCollection_pool = (TA = {
        newShapeCollection: function() {
            var t;
            t = UA ? WA[UA -= 1] : new ShapeCollection;
            return t
        },
        release: function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1)
                shape_pool.release(t.shapes[e]);
            t._length = 0,
            UA === VA && (WA = pooling.double(WA),
            VA *= 2);
            WA[UA] = t,
            UA += 1
        }
    },
    UA = 0,
    VA = 4,
    WA = createSizedArray(VA),
    TA), TA, UA, VA, WA, segments_length_pool = pool_factory(8, function() {
        return {
            lengths: [],
            totalLength: 0
        }
    }, function(t) {
        var e, r = t.lengths.length;
        for (e = 0; e < r; e += 1)
            bezier_length_pool.release(t.lengths[e]);
        t.lengths.length = 0
    }), bezier_length_pool = pool_factory(8, function() {
        return {
            addedLength: 0,
            percents: createTypedArray("float32", defaultCurveSegments),
            lengths: createTypedArray("float32", defaultCurveSegments)
        }
    });
    function BaseRenderer() {}
    function SVGRenderer(t, e) {
        this.animationItem = t,
        this.layers = null,
        this.renderedFrame = -1,
        this.svgElement = createNS("svg");
        var r = "";
        if (e && e.title) {
            var i = createNS("title")
              , s = createElementID();
            i.setAttribute("id", s),
            i.textContent = e.title,
            this.svgElement.appendChild(i),
            r += s
        }
        if (e && e.description) {
            var a = createNS("desc")
              , n = createElementID();
            a.setAttribute("id", n),
            a.textContent = e.description,
            this.svgElement.appendChild(a),
            r += " " + n
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var h = createNS("g");
        this.svgElement.appendChild(h),
        this.layerElement = h,
        this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !e || !1 !== e.hideOnTransparent,
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
                width: e && e.filterSize && e.filterSize.width || "100%",
                height: e && e.filterSize && e.filterSize.height || "100%",
                x: e && e.filterSize && e.filterSize.x || "0%",
                y: e && e.filterSize && e.filterSize.y || "0%"
            }
        },
        this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
        },
        this.elements = [],
        this.pendingElements = [],
        this.destroyed = !1,
        this.rendererType = "svg"
    }
    function CanvasRenderer(t, e) {
        this.animationItem = t,
        this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            className: e && e.className || "",
            id: e && e.id || ""
        },
        this.renderConfig.dpr = e && e.dpr || 1,
        this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
        this.renderedFrame = -1,
        this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
        },
        this.contextData = new CVContextData,
        this.elements = [],
        this.pendingElements = [],
        this.transformMat = new Matrix,
        this.completeLayers = !1,
        this.rendererType = "canvas"
    }
    function HybridRenderer(t, e) {
        this.animationItem = t,
        this.layers = null,
        this.renderedFrame = -1,
        this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !e || !1 !== e.hideOnTransparent,
            filterSize: {
                width: e && e.filterSize && e.filterSize.width || "400%",
                height: e && e.filterSize && e.filterSize.height || "400%",
                x: e && e.filterSize && e.filterSize.x || "-100%",
                y: e && e.filterSize && e.filterSize.y || "-100%"
            }
        },
        this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
        },
        this.pendingElements = [],
        this.elements = [],
        this.threeDElements = [],
        this.destroyed = !1,
        this.camera = null,
        this.supports3d = !0,
        this.rendererType = "html"
    }
    function MaskElement(t, e, r) {
        this.data = t,
        this.element = e,
        this.globalData = r,
        this.storedData = [],
        this.masksProperties = this.data.masksProperties || [],
        this.maskElement = null;
        var i, s = this.globalData.defs, a = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(a),
        this.solidPath = "";
        var n, o, h, l, p, m, f, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
        for (i = 0; i < a; i++)
            if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k || c[i].o.x) && (v = g = "mask"),
            "s" != c[i].mode && "i" != c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"),
            l.setAttribute("width", this.element.comp.data.w || 0),
            l.setAttribute("height", this.element.comp.data.h || 0),
            u.push(l)),
            n = createNS("path"),
            "n" != c[i].mode) {
                var b;
                if (d += 1,
                n.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"),
                n.setAttribute("clip-rule", "nonzero"),
                0 !== c[i].x.k ? (v = g = "mask",
                f = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element),
                b = createElementID(),
                (p = createNS("filter")).setAttribute("id", b),
                (m = createNS("feMorphology")).setAttribute("operator", "erode"),
                m.setAttribute("in", "SourceGraphic"),
                m.setAttribute("radius", "0"),
                p.appendChild(m),
                s.appendChild(p),
                n.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : f = m = null,
                this.storedData[i] = {
                    elem: n,
                    x: f,
                    expan: m,
                    lastPath: "",
                    lastOperator: "",
                    filterId: b,
                    lastRadius: 0
                },
                "i" == c[i].mode) {
                    h = u.length;
                    var E = createNS("g");
                    for (o = 0; o < h; o += 1)
                        E.appendChild(u[o]);
                    var x = createNS("mask");
                    x.setAttribute("mask-type", "alpha"),
                    x.setAttribute("id", y + "_" + d),
                    x.appendChild(n),
                    s.appendChild(x),
                    E.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"),
                    u.length = 0,
                    u.push(E)
                } else
                    u.push(n);
                c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                this.viewData[i] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                    invRect: l
                },
                this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i])
            } else
                this.viewData[i] = {
                    op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                    elem: n,
                    lastPath: ""
                },
                s.appendChild(n);
        for (this.maskElement = createNS(g),
        a = u.length,
        i = 0; i < a; i += 1)
            this.maskElement.appendChild(u[i]);
        0 < d && (this.maskElement.setAttribute("id", y),
        this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"),
        s.appendChild(this.maskElement)),
        this.viewData.length && this.element.addRenderableComponent(this)
    }
    function HierarchyElement() {}
    function FrameElement() {}
    function TransformElement() {}
    function RenderableElement() {}
    function RenderableDOMElement() {}
    function ProcessedElement(t, e) {
        this.elem = t,
        this.pos = e
    }
    function SVGStyleData(t, e) {
        this.data = t,
        this.type = t.ty,
        this.d = "",
        this.lvl = e,
        this._mdf = !1,
        this.closed = !0 === t.hd,
        this.pElem = createNS("path"),
        this.msElem = null
    }
    function SVGShapeData(t, e, r) {
        this.caches = [],
        this.styles = [],
        this.transformers = t,
        this.lStr = "",
        this.sh = r,
        this.lvl = e,
        this._isAnimated = !!r.k;
        for (var i = 0, s = t.length; i < s; ) {
            if (t[i].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break
            }
            i += 1
        }
    }
    function SVGTransformData(t, e, r) {
        this.transform = {
            mProps: t,
            op: e,
            container: r
        },
        this.elements = [],
        this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
    }
    function SVGStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
        this.getValue = this.iterateDynamicProperties,
        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
        this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
        this.d = new DashProperty(t,e.d || {},"svg",this),
        this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
        this.style = r,
        this._isAnimated = !!this._isAnimated
    }
    function SVGFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
        this.getValue = this.iterateDynamicProperties,
        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
        this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
        this.style = r
    }
    function SVGGradientFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
        this.getValue = this.iterateDynamicProperties,
        this.initGradientData(t, e, r)
    }
    function SVGGradientStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
        this.getValue = this.iterateDynamicProperties,
        this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
        this.d = new DashProperty(t,e.d || {},"svg",this),
        this.initGradientData(t, e, r),
        this._isAnimated = !!this._isAnimated
    }
    function ShapeGroupData() {
        this.it = [],
        this.prevViewData = [],
        this.gr = createNS("g")
    }
    BaseRenderer.prototype.checkLayers = function(t) {
        var e, r, i = this.layers.length;
        for (this.completeLayers = !0,
        e = i - 1; 0 <= e; e--)
            this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e),
            this.completeLayers = !!this.elements[e] && this.completeLayers;
        this.checkPendingElements()
    }
    ,
    BaseRenderer.prototype.createItem = function(t) {
        switch (t.ty) {
        case 2:
            return this.createImage(t);
        case 0:
            return this.createComp(t);
        case 1:
            return this.createSolid(t);
        case 3:
            return this.createNull(t);
        case 4:
            return this.createShape(t);
        case 5:
            return this.createText(t);
        case 13:
            return this.createCamera(t)
        }
        return this.createNull(t)
    }
    ,
    BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
    }
    ,
    BaseRenderer.prototype.buildAllItems = function() {
        var t, e = this.layers.length;
        for (t = 0; t < e; t += 1)
            this.buildItem(t);
        this.checkPendingElements()
    }
    ,
    BaseRenderer.prototype.includeLayers = function(t) {
        this.completeLayers = !1;
        var e, r, i = t.length, s = this.layers.length;
        for (e = 0; e < i; e += 1)
            for (r = 0; r < s; ) {
                if (this.layers[r].id == t[e].id) {
                    this.layers[r] = t[e];
                    break
                }
                r += 1
            }
    }
    ,
    BaseRenderer.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t
    }
    ,
    BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
    }
    ,
    BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
        for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
            s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]),
            i[a].setAsParent(),
            void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a),
            this.addPendingElement(t))),
            a += 1
    }
    ,
    BaseRenderer.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t)
    }
    ,
    BaseRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1)
            if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(),
                this.globalData.projectInterface.registerComposition(i)
            }
    }
    ,
    BaseRenderer.prototype.setupGlobalData = function(t, e) {
        this.globalData.fontManager = new FontManager,
        this.globalData.fontManager.addChars(t.chars),
        this.globalData.fontManager.addFonts(t.fonts, e),
        this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
        this.globalData.imageLoader = this.animationItem.imagePreloader,
        this.globalData.frameId = 0,
        this.globalData.frameRate = t.fr,
        this.globalData.nm = t.nm,
        this.globalData.compSize = {
            w: t.w,
            h: t.h
        }
    }
    ,
    extendPrototype([BaseRenderer], SVGRenderer),
    SVGRenderer.prototype.createNull = function(t) {
        return new NullElement(t,this.globalData,this)
    }
    ,
    SVGRenderer.prototype.createShape = function(t) {
        return new SVGShapeElement(t,this.globalData,this)
    }
    ,
    SVGRenderer.prototype.createText = function(t) {
        return new SVGTextElement(t,this.globalData,this)
    }
    ,
    SVGRenderer.prototype.createImage = function(t) {
        return new IImageElement(t,this.globalData,this)
    }
    ,
    SVGRenderer.prototype.createComp = function(t) {
        return new SVGCompElement(t,this.globalData,this)
    }
    ,
    SVGRenderer.prototype.createSolid = function(t) {
        return new ISolidElement(t,this.globalData,this)
    }
    ,
    SVGRenderer.prototype.configAnimation = function(t) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
        this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
        this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
        this.svgElement.setAttribute("height", t.h),
        this.svgElement.style.width = "100%",
        this.svgElement.style.height = "100%",
        this.svgElement.style.transform = "translate3d(0,0,0)"),
        this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
        this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
        void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
        this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
        this.animationItem.wrapper.appendChild(this.svgElement);
        var e = this.globalData.defs;
        this.setupGlobalData(t, e),
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
        this.data = t;
        var r = createNS("clipPath")
          , i = createNS("rect");
        i.setAttribute("width", t.w),
        i.setAttribute("height", t.h),
        i.setAttribute("x", 0),
        i.setAttribute("y", 0);
        var s = createElementID();
        r.setAttribute("id", s),
        r.appendChild(i),
        this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"),
        e.appendChild(r),
        this.layers = t.layers,
        this.elements = createSizedArray(t.layers.length)
    }
    ,
    SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "",
        this.layerElement = null,
        this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t++)
            this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0,
        this.destroyed = !0,
        this.animationItem = null
    }
    ,
    SVGRenderer.prototype.updateContainerSize = function() {}
    ,
    SVGRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            e[t] = r,
            expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r),
            r.initExpressions()),
            this.appendElementInPos(r, t),
            this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1),
            this.addPendingElement(r)))
        }
    }
    ,
    SVGRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(),
            t.data.tt)
                for (var e = 0, r = this.elements.length; e < r; ) {
                    if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break
                    }
                    e += 1
                }
        }
    }
    ,
    SVGRenderer.prototype.renderFrame = function(t) {
        if (this.renderedFrame !== t && !this.destroyed) {
            null === t ? t = this.renderedFrame : this.renderedFrame = t,
            this.globalData.frameNum = t,
            this.globalData.frameId += 1,
            this.globalData.projectInterface.currentFrame = t,
            this.globalData._mdf = !1;
            var e, r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t),
            e = r - 1; 0 <= e; e--)
                (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)
                    (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }
    }
    ,
    SVGRenderer.prototype.appendElementInPos = function(t, e) {
        var r = t.getBaseElement();
        if (r) {
            for (var i, s = 0; s < e; )
                this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()),
                s += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
        }
    }
    ,
    SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none"
    }
    ,
    SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block"
    }
    ,
    extendPrototype([BaseRenderer], CanvasRenderer),
    CanvasRenderer.prototype.createShape = function(t) {
        return new CVShapeElement(t,this.globalData,this)
    }
    ,
    CanvasRenderer.prototype.createText = function(t) {
        return new CVTextElement(t,this.globalData,this)
    }
    ,
    CanvasRenderer.prototype.createImage = function(t) {
        return new CVImageElement(t,this.globalData,this)
    }
    ,
    CanvasRenderer.prototype.createComp = function(t) {
        return new CVCompElement(t,this.globalData,this)
    }
    ,
    CanvasRenderer.prototype.createSolid = function(t) {
        return new CVSolidElement(t,this.globalData,this)
    }
    ,
    CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
    CanvasRenderer.prototype.ctxTransform = function(t) {
        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
            if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
            } else
                this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
    }
    ,
    CanvasRenderer.prototype.ctxOpacity = function(t) {
        if (!this.renderConfig.clearCanvas)
            return this.canvasContext.globalAlpha *= t < 0 ? 0 : t,
            void (this.globalData.currentGlobalAlpha = this.contextData.cO);
        this.contextData.cO *= t < 0 ? 0 : t,
        this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO,
        this.globalData.currentGlobalAlpha = this.contextData.cO)
    }
    ,
    CanvasRenderer.prototype.reset = function() {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
    }
    ,
    CanvasRenderer.prototype.save = function(t) {
        if (this.renderConfig.clearCanvas) {
            t && this.canvasContext.save();
            var e = this.contextData.cTr.props;
            this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
            var r, i = this.contextData.saved[this.contextData.cArrPos];
            for (r = 0; r < 16; r += 1)
                i[r] = e[r];
            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
            this.contextData.cArrPos += 1
        } else
            this.canvasContext.save()
    }
    ,
    CanvasRenderer.prototype.restore = function(t) {
        if (this.renderConfig.clearCanvas) {
            t && (this.canvasContext.restore(),
            this.globalData.blendMode = "source-over"),
            this.contextData.cArrPos -= 1;
            var e, r = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props;
            for (e = 0; e < 16; e += 1)
                i[e] = r[e];
            this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
            r = this.contextData.savedOp[this.contextData.cArrPos],
            this.contextData.cO = r,
            this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r,
            this.globalData.currentGlobalAlpha = r)
        } else
            this.canvasContext.restore()
    }
    ,
    CanvasRenderer.prototype.configAnimation = function(t) {
        this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"),
        this.animationItem.container.style.width = "100%",
        this.animationItem.container.style.height = "100%",
        this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px",
        this.animationItem.wrapper.appendChild(this.animationItem.container),
        this.canvasContext = this.animationItem.container.getContext("2d"),
        this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
        this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context,
        this.data = t,
        this.layers = t.layers,
        this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
        },
        this.setupGlobalData(t, document.body),
        this.globalData.canvasContext = this.canvasContext,
        (this.globalData.renderer = this).globalData.isDashed = !1,
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
        this.globalData.transformCanvas = this.transformCanvas,
        this.elements = createSizedArray(t.layers.length),
        this.updateContainerSize()
    }
    ,
    CanvasRenderer.prototype.updateContainerSize = function() {
        var t, e, r, i;
        if (this.reset(),
        this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth,
        e = this.animationItem.wrapper.offsetHeight,
        this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr),
        this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr,
        e = this.canvasContext.canvas.height * this.renderConfig.dpr),
        -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" ")
              , a = s[1] || "meet"
              , n = s[0] || "xMidYMid"
              , o = n.substr(0, 4)
              , h = n.substr(4);
            r = t / e,
            i = this.transformCanvas.w / this.transformCanvas.h,
            this.transformCanvas.sy = r < i && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
            t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr),
            e / (this.transformCanvas.h / this.renderConfig.dpr)),
            this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
            this.transformCanvas.ty = "YMid" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else
            "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
            this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr,
            this.transformCanvas.sy = this.renderConfig.dpr),
            this.transformCanvas.tx = 0,
            this.transformCanvas.ty = 0;
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
        this.ctxTransform(this.transformCanvas.props),
        this.canvasContext.beginPath(),
        this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
        this.canvasContext.closePath(),
        this.canvasContext.clip(),
        this.renderFrame(this.renderedFrame, !0)
    }
    ,
    CanvasRenderer.prototype.destroy = function() {
        var t;
        for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""),
        t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1)
            this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0,
        this.globalData.canvasContext = null,
        this.animationItem.container = null,
        this.destroyed = !0
    }
    ,
    CanvasRenderer.prototype.renderFrame = function(t, e) {
        if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            this.renderedFrame = t,
            this.globalData.frameNum = t - this.animationItem._isFirstFrame,
            this.globalData.frameId += 1,
            this.globalData._mdf = !this.renderConfig.clearCanvas || e,
            this.globalData.projectInterface.currentFrame = t;
            var r, i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t),
            r = 0; r < i; r++)
                (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
                for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                r = i - 1; 0 <= r; r -= 1)
                    (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore()
            }
        }
    }
    ,
    CanvasRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            (e[t] = r).initExpressions()
        }
    }
    ,
    CanvasRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length; ) {
            this.pendingElements.pop().checkParenting()
        }
    }
    ,
    CanvasRenderer.prototype.hide = function() {
        this.animationItem.container.style.display = "none"
    }
    ,
    CanvasRenderer.prototype.show = function() {
        this.animationItem.container.style.display = "block"
    }
    ,
    extendPrototype([BaseRenderer], HybridRenderer),
    HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem,
    HybridRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length; ) {
            this.pendingElements.pop().checkParenting()
        }
    }
    ,
    HybridRenderer.prototype.appendElementInPos = function(t, e) {
        var r = t.getBaseElement();
        if (r) {
            var i = this.layers[e];
            if (i.ddd && this.supports3d)
                this.addTo3dContainer(r, e);
            else if (this.threeDElements)
                this.addTo3dContainer(r, e);
            else {
                for (var s, a, n = 0; n < e; )
                    this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n],
                    s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s),
                    n += 1;
                s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
        }
    }
    ,
    HybridRenderer.prototype.createShape = function(t) {
        return this.supports3d ? new HShapeElement(t,this.globalData,this) : new SVGShapeElement(t,this.globalData,this)
    }
    ,
    HybridRenderer.prototype.createText = function(t) {
        return this.supports3d ? new HTextElement(t,this.globalData,this) : new SVGTextElement(t,this.globalData,this)
    }
    ,
    HybridRenderer.prototype.createCamera = function(t) {
        return this.camera = new HCameraElement(t,this.globalData,this),
        this.camera
    }
    ,
    HybridRenderer.prototype.createImage = function(t) {
        return this.supports3d ? new HImageElement(t,this.globalData,this) : new IImageElement(t,this.globalData,this)
    }
    ,
    HybridRenderer.prototype.createComp = function(t) {
        return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
    }
    ,
    HybridRenderer.prototype.createSolid = function(t) {
        return this.supports3d ? new HSolidElement(t,this.globalData,this) : new ISolidElement(t,this.globalData,this)
    }
    ,
    HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
    HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
        for (var e = 0, r = this.threeDElements.length; e < r; ) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                return this.threeDElements[e].perspectiveElem;
            e += 1
        }
    }
    ,
    HybridRenderer.prototype.createThreeDContainer = function(t, e) {
        var r = createTag("div");
        styleDiv(r);
        var i = createTag("div");
        styleDiv(i),
        "3d" === e && (r.style.width = this.globalData.compSize.w + "px",
        r.style.height = this.globalData.compSize.h + "px",
        r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%",
        i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),
        r.appendChild(i);
        var s = {
            container: i,
            perspectiveElem: r,
            startPos: t,
            endPos: t,
            type: e
        };
        return this.threeDElements.push(s),
        s
    }
    ,
    HybridRenderer.prototype.build3dContainers = function() {
        var t, e, r = this.layers.length, i = "";
        for (t = 0; t < r; t += 1)
            this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== i && (i = "3d",
            e = this.createThreeDContainer(t, "3d")) : "2d" !== i && (i = "2d",
            e = this.createThreeDContainer(t, "2d")),
            e.endPos = Math.max(e.endPos, t);
        for (t = (r = this.threeDElements.length) - 1; 0 <= t; t--)
            this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
    }
    ,
    HybridRenderer.prototype.addTo3dContainer = function(t, e) {
        for (var r = 0, i = this.threeDElements.length; r < i; ) {
            if (e <= this.threeDElements[r].endPos) {
                for (var s, a = this.threeDElements[r].startPos; a < e; )
                    this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()),
                    a += 1;
                s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
                break
            }
            r += 1
        }
    }
    ,
    HybridRenderer.prototype.configAnimation = function(t) {
        var e = createTag("div")
          , r = this.animationItem.wrapper;
        e.style.width = t.w + "px",
        e.style.height = t.h + "px",
        styleDiv(this.resizerElem = e),
        e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat",
        this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
        r.appendChild(e),
        e.style.overflow = "hidden";
        var i = createNS("svg");
        i.setAttribute("width", "1"),
        i.setAttribute("height", "1"),
        styleDiv(i),
        this.resizerElem.appendChild(i);
        var s = createNS("defs");
        i.appendChild(s),
        this.data = t,
        this.setupGlobalData(t, i),
        this.globalData.defs = s,
        this.layers = t.layers,
        this.layerElement = this.resizerElem,
        this.build3dContainers(),
        this.updateContainerSize()
    }
    ,
    HybridRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "",
        this.animationItem.container = null,
        this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t++)
            this.elements[t].destroy();
        this.elements.length = 0,
        this.destroyed = !0,
        this.animationItem = null
    }
    ,
    HybridRenderer.prototype.updateContainerSize = function() {
        var t, e, r, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight;
        i = s / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = s / this.globalData.compSize.w,
        e = s / this.globalData.compSize.w,
        r = 0,
        (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h,
        e = a / this.globalData.compSize.h,
        r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2,
        0),
        this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)"
    }
    ,
    HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
    HybridRenderer.prototype.hide = function() {
        this.resizerElem.style.display = "none"
    }
    ,
    HybridRenderer.prototype.show = function() {
        this.resizerElem.style.display = "block"
    }
    ,
    HybridRenderer.prototype.initItems = function() {
        if (this.buildAllItems(),
        this.camera)
            this.camera.setup();
        else {
            var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
            for (t = 0; t < i; t += 1)
                this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"
        }
    }
    ,
    HybridRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length, i = createTag("div");
        for (e = 0; e < r; e += 1)
            if (t[e].xt) {
                var s = this.createComp(t[e], i, this.globalData.comp, null);
                s.initExpressions(),
                this.globalData.projectInterface.registerComposition(s)
            }
    }
    ,
    MaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop
    }
    ,
    MaskElement.prototype.renderFrame = function(t) {
        var e, r = this.element.finalTransform.mat, i = this.masksProperties.length;
        for (e = 0; e < i; e++)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
            (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v),
            "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()),
            this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                var s = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode",
                this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")),
                s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate",
                this.storedData[e].elem.setAttribute("filter", null)),
                this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
    }
    ,
    MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
    }
    ,
    MaskElement.prototype.createLayerSolidPath = function() {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w,
        t += " v" + this.globalData.compSize.h,
        t += " h-" + this.globalData.compSize.w,
        t += " v-" + this.globalData.compSize.h + " "
    }
    ,
    MaskElement.prototype.drawPath = function(t, e, r) {
        var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
        for (s = e._length,
        i = 1; i < s; i += 1)
            a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
        if (e.c && 1 < s && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
        r.lastPath !== a) {
            var n = "";
            r.elem && (e.c && (n = t.inv ? this.solidPath + a : a),
            r.elem.setAttribute("d", n)),
            r.lastPath = a
        }
    }
    ,
    MaskElement.prototype.destroy = function() {
        this.element = null,
        this.globalData = null,
        this.maskElement = null,
        this.data = null,
        this.masksProperties = null
    }
    ,
    HierarchyElement.prototype = {
        initHierarchy: function() {
            this.hierarchy = [],
            this._isParent = !1,
            this.checkParenting()
        },
        setHierarchy: function(t) {
            this.hierarchy = t
        },
        setAsParent: function() {
            this._isParent = !0
        },
        checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
        }
    },
    FrameElement.prototype = {
        initFrame: function() {
            this._isFirstFrame = !1,
            this.dynamicProperties = [],
            this._mdf = !1
        },
        prepareProperties: function(t, e) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)
                (e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(),
                this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0,
                this._mdf = !0))
        },
        addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
        }
    },
    TransformElement.prototype = {
        initTransform: function() {
            this.finalTransform = {
                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                    o: 0
                },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix
            },
            this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
            this.data.ty
        },
        renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
            this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
            this.hierarchy) {
                var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                    for (; r < i; ) {
                        if (this.hierarchy[r].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break
                        }
                        r += 1
                    }
                if (this.finalTransform._matMdf)
                    for (t = this.finalTransform.mProp.v.props,
                    e.cloneFromProps(t),
                    r = 0; r < i; r += 1)
                        t = this.hierarchy[r].finalTransform.mProp.v.props,
                        e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }
        },
        globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r = !0, i = this.comp; r; )
                i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform),
                i = i.comp) : r = !1;
            var s, a, n = e.length;
            for (s = 0; s < n; s += 1)
                a = e[s].mat.applyToPointArray(0, 0, 0),
                t = [t[0] - a[0], t[1] - a[1], 0];
            return t
        },
        mHelper: new Matrix
    },
    RenderableElement.prototype = {
        initRenderable: function() {
            this.isInRange = !1,
            this.hidden = !1,
            this.isTransparent = !1,
            this.renderableComponents = []
        },
        addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
        },
        removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
        },
        prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
        },
        checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
            this.hide()) : this.isTransparent && (this.isTransparent = !1,
            this.show())
        },
        checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0,
            this._mdf = !0,
            this.isInRange = !0,
            this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0,
            this.isInRange = !1,
            this.hide())
        },
        renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1)
                this.renderableComponents[t].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function() {
            return {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            }
        },
        getLayerSize: function() {
            return 5 === this.data.ty ? {
                w: this.data.textData.width,
                h: this.data.textData.height
            } : {
                w: this.data.width,
                h: this.data.height
            }
        }
    },
    extendPrototype([RenderableElement, createProxyFunction({
        initElement: function(t, e, r) {
            this.initFrame(),
            this.initBaseData(t, e, r),
            this.initTransform(t, e, r),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide()
        },
        hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none",
            this.hidden = !0)
        },
        show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"),
            this.hidden = !1,
            this._isFirstFrame = !0)
        },
        renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(),
            this.renderRenderable(),
            this.renderElement(),
            this.renderInnerContent(),
            this._isFirstFrame && (this._isFirstFrame = !1))
        },
        renderInnerContent: function() {},
        prepareFrame: function(t) {
            this._mdf = !1,
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            this.checkTransparency()
        },
        destroy: function() {
            this.innerElem = null,
            this.destroyBaseElement()
        }
    })], RenderableDOMElement),
    SVGStyleData.prototype.reset = function() {
        this.d = "",
        this._mdf = !1
    }
    ,
    SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = !0
    }
    ,
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
    SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
        this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
        this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
        this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
        }, 0, .01, this),
        this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
        }, 0, degToRads, this),
        this.g = new GradientProperty(t,e.g,this),
        this.style = r,
        this.stops = [],
        this.setGradientData(r.pElem, e),
        this.setGradientOpacity(e, r),
        this._isAnimated = !!this._isAnimated
    }
    ,
    SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
        var r = createElementID()
          , i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
        i.setAttribute("id", r),
        i.setAttribute("spreadMethod", "pad"),
        i.setAttribute("gradientUnits", "userSpaceOnUse");
        var s, a, n, o = [];
        for (n = 4 * e.g.p,
        a = 0; a < n; a += 4)
            s = createNS("stop"),
            i.appendChild(s),
            o.push(s);
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"),
        this.gf = i,
        this.cst = o
    }
    ,
    SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
        if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, s, a = createNS("mask"), n = createNS("path");
            a.appendChild(n);
            var o = createElementID()
              , h = createElementID();
            a.setAttribute("id", h);
            var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            l.setAttribute("id", o),
            l.setAttribute("spreadMethod", "pad"),
            l.setAttribute("gradientUnits", "userSpaceOnUse"),
            s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (i = 4 * t.g.p; i < s; i += 2)
                (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                l.appendChild(r),
                p.push(r);
            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"),
            this.of = l,
            this.ms = a,
            this.ost = p,
            this.maskId = h,
            e.msElem = n
        }
    }
    ,
    extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var SVGElementsRenderer = function() {
        var y = new Matrix
          , g = new Matrix;
        function e(t, e, r) {
            (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
            (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
        }
        function r(t, e, r) {
            var i, s, a, n, o, h, l, p, m, f, c, d = e.styles.length, u = e.lvl;
            for (h = 0; h < d; h += 1) {
                if (n = e.sh._mdf || r,
                e.styles[h].lvl < u) {
                    for (p = g.reset(),
                    f = u - e.styles[h].lvl,
                    c = e.transformers.length - 1; !n && 0 < f; )
                        n = e.transformers[c].mProps._mdf || n,
                        f--,
                        c--;
                    if (n)
                        for (f = u - e.styles[h].lvl,
                        c = e.transformers.length - 1; 0 < f; )
                            m = e.transformers[c].mProps.v.props,
                            p.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]),
                            f--,
                            c--
                } else
                    p = y;
                if (s = (l = e.sh.paths)._length,
                n) {
                    for (a = "",
                    i = 0; i < s; i += 1)
                        (o = l.shapes[i]) && o._length && (a += buildShapeString(o, o._length, o.c, p));
                    e.caches[h] = a
                } else
                    a = e.caches[h];
                e.styles[h].d += !0 === t.hd ? "" : a,
                e.styles[h]._mdf = n || e.styles[h]._mdf
            }
        }
        function i(t, e, r) {
            var i = e.style;
            (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
            (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
        }
        function s(t, e, r) {
            a(t, e, r),
            n(t, e, r)
        }
        function a(t, e, r) {
            var i, s, a, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, m = e.e.v;
            if (e.o._mdf || r) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(f, e.o.v)
            }
            if (e.s._mdf || r) {
                var c = 1 === t.t ? "x1" : "cx"
                  , d = "x1" === c ? "y1" : "cy";
                h.setAttribute(c, p[0]),
                h.setAttribute(d, p[1]),
                l && !e.g._collapsable && (e.of.setAttribute(c, p[0]),
                e.of.setAttribute(d, p[1]))
            }
            if (e.g._cmdf || r) {
                i = e.cst;
                var u = e.g.c;
                for (a = i.length,
                s = 0; s < a; s += 1)
                    (n = i[s]).setAttribute("offset", u[4 * s] + "%"),
                    n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")")
            }
            if (l && (e.g._omdf || r)) {
                var y = e.g.o;
                for (a = (i = e.g._collapsable ? e.cst : e.ost).length,
                s = 0; s < a; s += 1)
                    n = i[s],
                    e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"),
                    n.setAttribute("stop-opacity", y[2 * s + 1])
            }
            if (1 === t.t)
                (e.e._mdf || r) && (h.setAttribute("x2", m[0]),
                h.setAttribute("y2", m[1]),
                l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]),
                e.of.setAttribute("y2", m[1])));
            else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)),
            h.setAttribute("r", o),
            l && !e.g._collapsable && e.of.setAttribute("r", o)),
            e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
                var g = Math.atan2(m[1] - p[1], m[0] - p[0])
                  , v = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v)
                  , b = Math.cos(g + e.a.v) * v + p[0]
                  , E = Math.sin(g + e.a.v) * v + p[1];
                h.setAttribute("fx", b),
                h.setAttribute("fy", E),
                l && !e.g._collapsable && (e.of.setAttribute("fx", b),
                e.of.setAttribute("fy", E))
            }
        }
        function n(t, e, r) {
            var i = e.style
              , s = e.d;
            s && (s._mdf || r) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr),
            i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])),
            e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
            (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v),
            (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v),
            i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
        }
        return {
            createRenderFunction: function(t) {
                t.ty;
                switch (t.ty) {
                case "fl":
                    return i;
                case "gf":
                    return a;
                case "gs":
                    return s;
                case "st":
                    return n;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                    return r;
                case "tr":
                    return e
                }
            }
        }
    }();
    function ShapeTransformManager() {
        this.sequences = {},
        this.sequenceList = [],
        this.transform_key_count = 0
    }
    function CVShapeData(t, e, r, i) {
        this.styledShapes = [],
        this.tr = [0, 0, 0, 0, 0, 0];
        var s = 4;
        "rc" == e.ty ? s = 5 : "el" == e.ty ? s = 6 : "sr" == e.ty && (s = 7),
        this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
        var a, n, o = r.length;
        for (a = 0; a < o; a += 1)
            r[a].closed || (n = {
                transforms: i.addTransformSequence(r[a].transforms),
                trNodes: []
            },
            this.styledShapes.push(n),
            r[a].elements.push(n))
    }
    function BaseElement() {}
    function NullElement(t, e, r) {
        this.initFrame(),
        this.initBaseData(t, e, r),
        this.initFrame(),
        this.initTransform(t, e, r),
        this.initHierarchy()
    }
    function SVGBaseElement() {}
    function IShapeElement() {}
    function ITextElement() {}
    function ICompElement() {}
    function IImageElement(t, e, r) {
        this.assetData = e.getAssetData(t.refId),
        this.initElement(t, e, r),
        this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
        }
    }
    function ISolidElement(t, e, r) {
        this.initElement(t, e, r)
    }
    function SVGCompElement(t, e, r) {
        this.layers = t.layers,
        this.supports3d = !0,
        this.completeLayers = !1,
        this.pendingElements = [],
        this.elements = this.layers ? createSizedArray(this.layers.length) : [],
        this.initElement(t, e, r),
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
        }
    }
    function SVGTextElement(t, e, r) {
        this.textSpans = [],
        this.renderType = "svg",
        this.initElement(t, e, r)
    }
    function SVGShapeElement(t, e, r) {
        this.shapes = [],
        this.shapesData = t.shapes,
        this.stylesList = [],
        this.shapeModifiers = [],
        this.itemsData = [],
        this.processedElements = [],
        this.animatedContents = [],
        this.initElement(t, e, r),
        this.prevViewData = []
    }
    function SVGTintFilter(t, e) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        if (r.setAttribute("type", "matrix"),
        r.setAttribute("color-interpolation-filters", "linearRGB"),
        r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
        r.setAttribute("result", "f1"),
        t.appendChild(r),
        (r = createNS("feColorMatrix")).setAttribute("type", "matrix"),
        r.setAttribute("color-interpolation-filters", "sRGB"),
        r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
        r.setAttribute("result", "f2"),
        t.appendChild(r),
        this.matrixFilter = r,
        100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
            var i, s = createNS("feMerge");
            t.appendChild(s),
            (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
            s.appendChild(i),
            (i = createNS("feMergeNode")).setAttribute("in", "f2"),
            s.appendChild(i)
        }
    }
    function SVGFillFilter(t, e) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        r.setAttribute("type", "matrix"),
        r.setAttribute("color-interpolation-filters", "sRGB"),
        r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
        t.appendChild(r),
        this.matrixFilter = r
    }
    function SVGGaussianBlurEffect(t, e) {
        t.setAttribute("x", "-100%"),
        t.setAttribute("y", "-100%"),
        t.setAttribute("width", "300%"),
        t.setAttribute("height", "300%"),
        this.filterManager = e;
        var r = createNS("feGaussianBlur");
        t.appendChild(r),
        this.feGaussianBlur = r
    }
    function SVGStrokeEffect(t, e) {
        this.initialized = !1,
        this.filterManager = e,
        this.elem = t,
        this.paths = []
    }
    function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        r.setAttribute("type", "matrix"),
        r.setAttribute("color-interpolation-filters", "linearRGB"),
        r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
        r.setAttribute("result", "f1"),
        t.appendChild(r);
        var i = createNS("feComponentTransfer");
        i.setAttribute("color-interpolation-filters", "sRGB"),
        t.appendChild(i),
        this.matrixFilter = i;
        var s = createNS("feFuncR");
        s.setAttribute("type", "table"),
        i.appendChild(s),
        this.feFuncR = s;
        var a = createNS("feFuncG");
        a.setAttribute("type", "table"),
        i.appendChild(a),
        this.feFuncG = a;
        var n = createNS("feFuncB");
        n.setAttribute("type", "table"),
        i.appendChild(n),
        this.feFuncB = n
    }
    function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var r = this.filterManager.effectElements
          , i = createNS("feComponentTransfer");
        (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)),
        (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)),
        (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)),
        (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)),
        (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"),
        t.appendChild(i),
        i = createNS("feComponentTransfer")),
        (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"),
        t.appendChild(i),
        this.feFuncRComposed = this.createFeFunc("feFuncR", i),
        this.feFuncGComposed = this.createFeFunc("feFuncG", i),
        this.feFuncBComposed = this.createFeFunc("feFuncB", i))
    }
    function SVGDropShadowEffect(t, e) {
        var r = e.container.globalData.renderConfig.filterSize;
        t.setAttribute("x", r.x),
        t.setAttribute("y", r.y),
        t.setAttribute("width", r.width),
        t.setAttribute("height", r.height),
        this.filterManager = e;
        var i = createNS("feGaussianBlur");
        i.setAttribute("in", "SourceAlpha"),
        i.setAttribute("result", "drop_shadow_1"),
        i.setAttribute("stdDeviation", "0"),
        this.feGaussianBlur = i,
        t.appendChild(i);
        var s = createNS("feOffset");
        s.setAttribute("dx", "25"),
        s.setAttribute("dy", "0"),
        s.setAttribute("in", "drop_shadow_1"),
        s.setAttribute("result", "drop_shadow_2"),
        this.feOffset = s,
        t.appendChild(s);
        var a = createNS("feFlood");
        a.setAttribute("flood-color", "#00ff00"),
        a.setAttribute("flood-opacity", "1"),
        a.setAttribute("result", "drop_shadow_3"),
        this.feFlood = a,
        t.appendChild(a);
        var n = createNS("feComposite");
        n.setAttribute("in", "drop_shadow_3"),
        n.setAttribute("in2", "drop_shadow_2"),
        n.setAttribute("operator", "in"),
        n.setAttribute("result", "drop_shadow_4"),
        t.appendChild(n);
        var o, h = createNS("feMerge");
        t.appendChild(h),
        o = createNS("feMergeNode"),
        h.appendChild(o),
        (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
        this.feMergeNode = o,
        this.feMerge = h,
        this.originalNodeAdded = !1,
        h.appendChild(o)
    }
    ShapeTransformManager.prototype = {
        addTransformSequence: function(t) {
            var e, r = t.length, i = "_";
            for (e = 0; e < r; e += 1)
                i += t[e].transform.key + "_";
            var s = this.sequences[i];
            return s || (s = {
                transforms: [].concat(t),
                finalTransform: new Matrix,
                _mdf: !1
            },
            this.sequences[i] = s,
            this.sequenceList.push(s)),
            s
        },
        processSequence: function(t, e) {
            for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e; ) {
                if (t.transforms[i].transform.mProps._mdf) {
                    a = !0;
                    break
                }
                i += 1
            }
            if (a)
                for (t.finalTransform.reset(),
                i = s - 1; 0 <= i; i -= 1)
                    r = t.transforms[i].transform.mProps.v.props,
                    t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
            t._mdf = a
        },
        processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1)
                this.processSequence(this.sequenceList[e], t)
        },
        getNewKey: function() {
            return "_" + this.transform_key_count++
        }
    },
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
    BaseElement.prototype = {
        checkMasks: function() {
            if (!this.data.hasMask)
                return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                    return !0;
                t += 1
            }
            return !1
        },
        initExpressions: function() {
            this.layerInterface = LayerExpressionInterface(this),
            this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(t),
            0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface),
            this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this),
            this.layerInterface.text = this.layerInterface.textInterface)
        },
        setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
        },
        initBaseData: function(t, e, r) {
            this.globalData = e,
            this.comp = r,
            this.data = t,
            this.layerId = createElementID(),
            this.data.sr || (this.data.sr = 1),
            this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
        },
        getType: function() {
            return this.type
        },
        sourceRectAtTime: function() {}
    },
    NullElement.prototype.prepareFrame = function(t) {
        this.prepareProperties(t, !0)
    }
    ,
    NullElement.prototype.renderFrame = function() {}
    ,
    NullElement.prototype.getBaseElement = function() {
        return null
    }
    ,
    NullElement.prototype.destroy = function() {}
    ,
    NullElement.prototype.sourceRectAtTime = function() {}
    ,
    NullElement.prototype.hide = function() {}
    ,
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
    SVGBaseElement.prototype = {
        initRendererElement: function() {
            this.layerElement = createNS("g")
        },
        createContainerElements: function() {
            this.matteElement = createNS("g"),
            this.transformedElement = this.layerElement,
            this.maskedElement = this.layerElement,
            this._sizeChanged = !1;
            var t, e, r, i = null;
            if (this.data.td) {
                if (3 == this.data.td || 1 == this.data.td) {
                    var s = createNS("mask");
                    s.setAttribute("id", this.layerId),
                    s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"),
                    s.appendChild(this.layerElement),
                    i = s,
                    this.globalData.defs.appendChild(s),
                    featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"),
                    t = createElementID(),
                    e = filtersFactory.createFilter(t),
                    this.globalData.defs.appendChild(e),
                    e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                    (r = createNS("g")).appendChild(this.layerElement),
                    i = r,
                    s.appendChild(r),
                    r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                } else if (2 == this.data.td) {
                    var a = createNS("mask");
                    a.setAttribute("id", this.layerId),
                    a.setAttribute("mask-type", "alpha");
                    var n = createNS("g");
                    a.appendChild(n),
                    t = createElementID(),
                    e = filtersFactory.createFilter(t);
                    var o = createNS("feComponentTransfer");
                    o.setAttribute("in", "SourceGraphic"),
                    e.appendChild(o);
                    var h = createNS("feFuncA");
                    h.setAttribute("type", "table"),
                    h.setAttribute("tableValues", "1.0 0.0"),
                    o.appendChild(h),
                    this.globalData.defs.appendChild(e);
                    var l = createNS("rect");
                    l.setAttribute("width", this.comp.data.w),
                    l.setAttribute("height", this.comp.data.h),
                    l.setAttribute("x", "0"),
                    l.setAttribute("y", "0"),
                    l.setAttribute("fill", "#ffffff"),
                    l.setAttribute("opacity", "0"),
                    n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"),
                    n.appendChild(l),
                    n.appendChild(this.layerElement),
                    i = n,
                    featureSupport.maskType || (a.setAttribute("mask-type", "luminance"),
                    e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                    r = createNS("g"),
                    n.appendChild(l),
                    r.appendChild(this.layerElement),
                    i = r,
                    n.appendChild(r)),
                    this.globalData.defs.appendChild(a)
                }
            } else
                this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                i = this.matteElement,
                this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
            this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
            0 === this.data.ty && !this.data.hd) {
                var p = createNS("clipPath")
                  , m = createNS("path");
                m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                var f = createElementID();
                if (p.setAttribute("id", f),
                p.appendChild(m),
                this.globalData.defs.appendChild(p),
                this.checkMasks()) {
                    var c = createNS("g");
                    c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"),
                    c.appendChild(this.layerElement),
                    this.transformedElement = c,
                    i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                } else
                    this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
        },
        renderElement: function() {
            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
            this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
        },
        destroyBaseElement: function() {
            this.layerElement = null,
            this.matteElement = null,
            this.maskManager.destroy()
        },
        getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data,this,this.globalData),
            this.renderableEffectsManager = new SVGEffects(this)
        },
        setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
        }
    },
    IShapeElement.prototype = {
        addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1)
                this.shapeModifiers[e].addShape(t)
        },
        isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e; )
                if (this.shapeModifiers[0].isAnimatedWithShape(t))
                    return !0;
            return !1
        },
        renderModifiers: function() {
            if (this.shapeModifiers.length) {
                var t, e = this.shapes.length;
                for (t = 0; t < e; t += 1)
                    this.shapes[t].sh.reset();
                for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1)
                    this.shapeModifiers[t].processShapes(this._isFirstFrame)
            }
        },
        lcEnum: {
            1: "butt",
            2: "round",
            3: "square"
        },
        ljEnum: {
            1: "miter",
            2: "round",
            3: "bevel"
        },
        searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
                if (e[r].elem === t)
                    return e[r].pos;
                r += 1
            }
            return 0
        },
        addProcessedElement: function(t, e) {
            for (var r = this.processedElements, i = r.length; i; )
                if (r[i -= 1].elem === t)
                    return void (r[i].pos = e);
            r.push(new ProcessedElement(t,e))
        },
        prepareFrame: function(t) {
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange)
        }
    },
    ITextElement.prototype.initElement = function(t, e, r) {
        this.lettersChangedFlag = !0,
        this.initFrame(),
        this.initBaseData(t, e, r),
        this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
        this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
        this.initTransform(t, e, r),
        this.initHierarchy(),
        this.initRenderable(),
        this.initRendererElement(),
        this.createContainerElements(),
        this.createRenderableComponents(),
        this.createContent(),
        this.hide(),
        this.textAnimator.searchProperties(this.dynamicProperties)
    }
    ,
    ITextElement.prototype.prepareFrame = function(t) {
        this._mdf = !1,
        this.prepareRenderableFrame(t),
        this.prepareProperties(t, this.isInRange),
        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
        this.textProperty._isFirstFrame = !1,
        this.textProperty._mdf = !1)
    }
    ,
    ITextElement.prototype.createPathShape = function(t, e) {
        var r, i, s = e.length, a = "";
        for (r = 0; r < s; r += 1)
            i = e[r].ks.k,
            a += buildShapeString(i, i.i.length, !0, t);
        return a
    }
    ,
    ITextElement.prototype.updateDocumentData = function(t, e) {
        this.textProperty.updateDocumentData(t, e)
    }
    ,
    ITextElement.prototype.canResizeFont = function(t) {
        this.textProperty.canResizeFont(t)
    }
    ,
    ITextElement.prototype.setMinimumFontSize = function(t) {
        this.textProperty.setMinimumFontSize(t)
    }
    ,
    ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
        e.translate(0, -t.ls, 0),
        t.j) {
        case 1:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
            break;
        case 2:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
        }
        e.translate(i, s, 0)
    }
    ,
    ITextElement.prototype.buildColor = function(t) {
        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    }
    ,
    ITextElement.prototype.emptyProp = new LetterProps,
    ITextElement.prototype.destroy = function() {}
    ,
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
    ICompElement.prototype.initElement = function(t, e, r) {
        this.initFrame(),
        this.initBaseData(t, e, r),
        this.initTransform(t, e, r),
        this.initRenderable(),
        this.initHierarchy(),
        this.initRendererElement(),
        this.createContainerElements(),
        this.createRenderableComponents(),
        !this.data.xt && e.progressiveLoad || this.buildAllItems(),
        this.hide()
    }
    ,
    ICompElement.prototype.prepareFrame = function(t) {
        if (this._mdf = !1,
        this.prepareRenderableFrame(t),
        this.prepareProperties(t, this.isInRange),
        this.isInRange || this.data.xt) {
            if (this.tm._placeholder)
                this.renderedFrame = t / this.data.sr;
            else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1),
                this.renderedFrame = e
            }
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame),
            r = i - 1; 0 <= r; r -= 1)
                (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st),
                this.elements[r]._mdf && (this._mdf = !0))
        }
    }
    ,
    ICompElement.prototype.renderInnerContent = function() {
        var t, e = this.layers.length;
        for (t = 0; t < e; t += 1)
            (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }
    ,
    ICompElement.prototype.setElements = function(t) {
        this.elements = t
    }
    ,
    ICompElement.prototype.getElements = function() {
        return this.elements
    }
    ,
    ICompElement.prototype.destroyElements = function() {
        var t, e = this.layers.length;
        for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy()
    }
    ,
    ICompElement.prototype.destroy = function() {
        this.destroyElements(),
        this.destroyBaseElement()
    }
    ,
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
    IImageElement.prototype.createContent = function() {
        var t = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"),
        this.innerElem.setAttribute("width", this.assetData.w + "px"),
        this.innerElem.setAttribute("height", this.assetData.h + "px"),
        this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
        this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
        this.layerElement.appendChild(this.innerElem)
    }
    ,
    IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect
    }
    ,
    extendPrototype([IImageElement], ISolidElement),
    ISolidElement.prototype.createContent = function() {
        var t = createNS("rect");
        t.setAttribute("width", this.data.sw),
        t.setAttribute("height", this.data.sh),
        t.setAttribute("fill", this.data.sc),
        this.layerElement.appendChild(t)
    }
    ,
    extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement),
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement),
    SVGTextElement.prototype.createContent = function() {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
    }
    ,
    SVGTextElement.prototype.buildTextContents = function(t) {
        for (var e = 0, r = t.length, i = [], s = ""; e < r; )
            t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s),
            s = "") : s += t[e],
            e += 1;
        return i.push(s),
        i
    }
    ,
    SVGTextElement.prototype.buildNewText = function() {
        var t, e, r = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r ? r.l.length : 0),
        r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
        r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)),
        this.layerElement.setAttribute("stroke-width", r.sw)),
        this.layerElement.setAttribute("font-size", r.finalSize);
        var i = this.globalData.fontManager.getFontByName(r.f);
        if (i.fClass)
            this.layerElement.setAttribute("class", i.fClass);
        else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var s = r.fWeight
              , a = r.fStyle;
            this.layerElement.setAttribute("font-style", a),
            this.layerElement.setAttribute("font-weight", s)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var n, o = r.l || [], h = !!this.globalData.fontManager.chars;
        e = o.length;
        var l, p = this.mHelper, m = "", f = this.data.singleShape, c = 0, d = 0, u = !0, y = r.tr / 1e3 * r.finalSize;
        if (!f || h || r.sz) {
            var g, v, b = this.textSpans.length;
            for (t = 0; t < e; t += 1)
                h && f && 0 !== t || (n = t < b ? this.textSpans[t] : createNS(h ? "path" : "text"),
                b <= t && (n.setAttribute("stroke-linecap", "butt"),
                n.setAttribute("stroke-linejoin", "round"),
                n.setAttribute("stroke-miterlimit", "4"),
                this.textSpans[t] = n,
                this.layerElement.appendChild(n)),
                n.style.display = "inherit"),
                p.reset(),
                p.scale(r.finalSize / 100, r.finalSize / 100),
                f && (o[t].n && (c = -y,
                d += r.yOffset,
                d += u ? 1 : 0,
                u = !1),
                this.applyTextPropertiesToMatrix(r, p, o[t].line, c, d),
                c += o[t].l || 0,
                c += y),
                h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [],
                f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"),
                n.textContent = o[t].val,
                n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
            f && n && n.setAttribute("d", m)
        } else {
            var E = this.textContainer
              , x = "start";
            switch (r.j) {
            case 1:
                x = "end";
                break;
            case 2:
                x = "middle"
            }
            E.setAttribute("text-anchor", x),
            E.setAttribute("letter-spacing", y);
            var S = this.buildTextContents(r.finalText);
            for (e = S.length,
            d = r.ps ? r.ps[1] + r.ascent : 0,
            t = 0; t < e; t += 1)
                (n = this.textSpans[t] || createNS("tspan")).textContent = S[t],
                n.setAttribute("x", 0),
                n.setAttribute("y", d),
                n.style.display = "inherit",
                E.appendChild(n),
                this.textSpans[t] = n,
                d += r.finalLineHeight;
            this.layerElement.appendChild(E)
        }
        for (; t < this.textSpans.length; )
            this.textSpans[t].style.display = "none",
            t += 1;
        this._sizeChanged = !0
    }
    ,
    SVGTextElement.prototype.sourceRectAtTime = function(t) {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
        this.renderInnerContent(),
        this._sizeChanged) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
                top: e.y,
                left: e.x,
                width: e.width,
                height: e.height
            }
        }
        return this.bbox
    }
    ,
    SVGTextElement.prototype.renderInnerContent = function() {
        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
        this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var r, i, s = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
            for (e = a.length,
            t = 0; t < e; t += 1)
                a[t].n || (r = s[t],
                i = this.textSpans[t],
                r._mdf.m && i.setAttribute("transform", r.m),
                r._mdf.o && i.setAttribute("opacity", r.o),
                r._mdf.sw && i.setAttribute("stroke-width", r.sw),
                r._mdf.sc && i.setAttribute("stroke", r.sc),
                r._mdf.fc && i.setAttribute("fill", r.fc))
        }
    }
    ,
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
    SVGShapeElement.prototype.initSecondaryElement = function() {}
    ,
    SVGShapeElement.prototype.identityMatrix = new Matrix,
    SVGShapeElement.prototype.buildExpressionInterface = function() {}
    ,
    SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
        this.filterUniqueShapes()
    }
    ,
    SVGShapeElement.prototype.filterUniqueShapes = function() {
        var t, e, r, i, s = this.shapes.length, a = this.stylesList.length, n = [], o = !1;
        for (r = 0; r < a; r += 1) {
            for (i = this.stylesList[r],
            o = !1,
            t = n.length = 0; t < s; t += 1)
                -1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e),
                o = e._isAnimated || o);
            1 < n.length && o && this.setShapesAsAnimated(n)
        }
    }
    ,
    SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1)
            t[e].setAsAnimated()
    }
    ,
    SVGShapeElement.prototype.createStyleElement = function(t, e) {
        var r, i = new SVGStyleData(t,e), s = i.pElem;
        if ("st" === t.ty)
            r = new SVGStrokeStyleData(this,t,i);
        else if ("fl" === t.ty)
            r = new SVGFillStyleData(this,t,i);
        else if ("gf" === t.ty || "gs" === t.ty) {
            r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this,t,i),
            this.globalData.defs.appendChild(r.gf),
            r.maskId && (this.globalData.defs.appendChild(r.ms),
            this.globalData.defs.appendChild(r.of),
            s.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))
        }
        return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"),
        s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"),
        s.setAttribute("fill-opacity", "0"),
        1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)),
        2 === t.r && s.setAttribute("fill-rule", "evenodd"),
        t.ln && s.setAttribute("id", t.ln),
        t.cl && s.setAttribute("class", t.cl),
        t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)),
        this.stylesList.push(i),
        this.addToAnimatedContents(t, r),
        r
    }
    ,
    SVGShapeElement.prototype.createGroupElement = function(t) {
        var e = new ShapeGroupData;
        return t.ln && e.gr.setAttribute("id", t.ln),
        t.cl && e.gr.setAttribute("class", t.cl),
        t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
        e
    }
    ,
    SVGShapeElement.prototype.createTransformElement = function(t, e) {
        var r = TransformPropertyFactory.getTransformProperty(this, t, this)
          , i = new SVGTransformData(r,r.o,e);
        return this.addToAnimatedContents(t, i),
        i
    }
    ,
    SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
        var i = 4;
        "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
        var s = new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this, t, i, this));
        return this.shapes.push(s),
        this.addShapeToModifiers(s),
        this.addToAnimatedContents(t, s),
        s
    }
    ,
    SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
        for (var r = 0, i = this.animatedContents.length; r < i; ) {
            if (this.animatedContents[r].element === e)
                return;
            r += 1
        }
        this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
        })
    }
    ,
    SVGShapeElement.prototype.setElementStyles = function(t) {
        var e, r = t.styles, i = this.stylesList.length;
        for (e = 0; e < i; e += 1)
            this.stylesList[e].closed || r.push(this.stylesList[e])
    }
    ,
    SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; t < e; t += 1)
            this.prevViewData[t] = this.itemsData[t];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
        this.filterUniqueShapes(),
        e = this.dynamicProperties.length,
        t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue();
        this.renderModifiers()
    }
    ,
    SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
        var o, h, l, p, m, f, c = [].concat(a), d = t.length - 1, u = [], y = [];
        for (o = d; 0 <= o; o -= 1) {
            if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n,
            "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty)
                f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s),
                t[o]._render && i.appendChild(e[o].style.pElem),
                u.push(e[o].style);
            else if ("gr" == t[o].ty) {
                if (f)
                    for (l = e[o].it.length,
                    h = 0; h < l; h += 1)
                        e[o].prevViewData[h] = e[o].it[h];
                else
                    e[o] = this.createGroupElement(t[o]);
                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n),
                t[o]._render && i.appendChild(e[o].gr)
            } else
                "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)),
                p = e[o].transform,
                c.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)),
                this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (f ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                e[o] = m,
                this.shapeModifiers.push(m)),
                y.push(m)) : "rp" == t[o].ty && (f ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty),
                (e[o] = m).init(this, t, o, e),
                this.shapeModifiers.push(m),
                n = !1),
                y.push(m));
            this.addProcessedElement(t[o], o + 1)
        }
        for (d = u.length,
        o = 0; o < d; o += 1)
            u[o].closed = !0;
        for (d = y.length,
        o = 0; o < d; o += 1)
            y[o].closed = !0
    }
    ,
    SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var t, e = this.stylesList.length;
        for (t = 0; t < e; t += 1)
            this.stylesList[t].reset();
        for (this.renderShape(),
        t = 0; t < e; t += 1)
            (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
            this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
            this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
    }
    ,
    SVGShapeElement.prototype.renderShape = function() {
        var t, e, r = this.animatedContents.length;
        for (t = 0; t < r; t += 1)
            e = this.animatedContents[t],
            (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
    }
    ,
    SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement(),
        this.shapesData = null,
        this.itemsData = null
    }
    ,
    SVGTintFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v
              , r = this.filterManager.effectElements[1].p.v
              , i = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
        }
    }
    ,
    SVGFillFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v
              , r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
        }
    }
    ,
    SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v
              , r = this.filterManager.effectElements[1].p.v
              , i = 3 == r ? 0 : e
              , s = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
        }
    }
    ,
    SVGStrokeEffect.prototype.initialize = function() {
        var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length,
        r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1,
        (e = createNS("g")).setAttribute("fill", "none"),
        e.setAttribute("stroke-linecap", "round"),
        e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)
            t = createNS("path"),
            e.appendChild(t),
            this.paths.push({
                p: t,
                m: r
            });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask")
              , n = createElementID();
            a.setAttribute("id", n),
            a.setAttribute("mask-type", "alpha"),
            a.appendChild(e),
            this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0]; )
                o.appendChild(s[0]);
            this.elem.layerElement.appendChild(o),
            this.masker = a,
            e.setAttribute("stroke", "#fff")
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
                for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length; )
                    this.elem.layerElement.removeChild(s[0]);
            this.elem.layerElement.appendChild(e),
            this.elem.layerElement.removeAttribute("mask"),
            e.setAttribute("stroke", "#fff")
        }
        this.initialized = !0,
        this.pathMasker = e
    }
    ,
    SVGStrokeEffect.prototype.renderFrame = function(t) {
        this.initialized || this.initialize();
        var e, r, i, s = this.paths.length;
        for (e = 0; e < s; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m],
            i = this.paths[e].p,
            (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath),
            t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                var a;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100
                      , o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100
                      , h = i.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l, p = h * (o - n), m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100, f = Math.floor(p / m);
                    for (l = 0; l < f; l += 1)
                        a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                    a += "0 " + 10 * h + " 0 0"
                } else
                    a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                i.setAttribute("stroke-dasharray", a)
            }
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
        (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
        (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var c = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")")
        }
    }
    ,
    SVGTritoneFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v
              , r = this.filterManager.effectElements[1].p.v
              , i = this.filterManager.effectElements[2].p.v
              , s = i[0] + " " + r[0] + " " + e[0]
              , a = i[1] + " " + r[1] + " " + e[1]
              , n = i[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", s),
            this.feFuncG.setAttribute("tableValues", a),
            this.feFuncB.setAttribute("tableValues", n)
        }
    }
    ,
    SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
        var r = createNS(t);
        return r.setAttribute("type", "table"),
        e.appendChild(r),
        r
    }
    ,
    SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
        for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
            length: 256
        }), m = 0, f = s - i, c = e - t; o <= 256; )
            n = (a = o / 256) <= h ? c < 0 ? s : i : l <= a ? c < 0 ? i : s : i + f * Math.pow((a - t) / c, 1 / r),
            p[m++] = n,
            o += 256 / 255;
        return p.join(" ")
    }
    ,
    SVGProLevelsFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v),
            this.feFuncRComposed.setAttribute("tableValues", e),
            this.feFuncGComposed.setAttribute("tableValues", e),
            this.feFuncBComposed.setAttribute("tableValues", e)),
            this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v),
            this.feFuncR.setAttribute("tableValues", e)),
            this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v),
            this.feFuncG.setAttribute("tableValues", e)),
            this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v),
            this.feFuncB.setAttribute("tableValues", e)),
            this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v),
            this.feFuncA.setAttribute("tableValues", e))
        }
    }
    ,
    SVGDropShadowEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
            t || this.filterManager.effectElements[0].p._mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
            t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                var r = this.filterManager.effectElements[3].p.v
                  , i = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                  , s = r * Math.cos(i)
                  , a = r * Math.sin(i);
                this.feOffset.setAttribute("dx", s),
                this.feOffset.setAttribute("dy", a)
            }
        }
    }
    ;
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, r) {
        this.initialized = !1,
        this.filterManager = e,
        this.filterElem = t,
        (this.elem = r).matteElement = createNS("g"),
        r.matteElement.appendChild(r.layerElement),
        r.matteElement.appendChild(r.transformedElement),
        r.baseElement = r.matteElement
    }
    function SVGEffects(t) {
        var e, r, i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s), n = 0;
        for (this.filters = [],
        e = 0; e < i; e += 1)
            r = null,
            20 === t.data.ef[e].ty ? (n += 1,
            r = new SVGTintFilter(a,t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1,
            r = new SVGFillFilter(a,t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t,t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1,
            r = new SVGTritoneFilter(a,t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1,
            r = new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1,
            r = new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t) : 29 === t.data.ef[e].ty && (n += 1,
            r = new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),
            r && this.filters.push(r);
        n && (t.globalData.defs.appendChild(a),
        t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")),
        this.filters.length && t.addRenderableComponent(this)
    }
    function CVContextData() {
        this.saved = [],
        this.cArrPos = 0,
        this.cTr = new Matrix,
        this.cO = 1;
        var t;
        for (this.savedOp = createTypedArray("float32", 15),
        t = 0; t < 15; t += 1)
            this.saved[t] = createTypedArray("float32", 16);
        this._length = 15
    }
    function CVBaseElement() {}
    function CVImageElement(t, e, r) {
        this.assetData = e.getAssetData(t.refId),
        this.img = e.imageLoader.getImage(this.assetData),
        this.initElement(t, e, r)
    }
    function CVCompElement(t, e, r) {
        this.completeLayers = !1,
        this.layers = t.layers,
        this.pendingElements = [],
        this.elements = createSizedArray(this.layers.length),
        this.initElement(t, e, r),
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
        }
    }
    function CVMaskElement(t, e) {
        this.data = t,
        this.element = e,
        this.masksProperties = this.data.masksProperties || [],
        this.viewData = createSizedArray(this.masksProperties.length);
        var r, i = this.masksProperties.length, s = !1;
        for (r = 0; r < i; r++)
            "n" !== this.masksProperties[r].mode && (s = !0),
            this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
        (this.hasMasks = s) && this.element.addRenderableComponent(this)
    }
    function CVShapeElement(t, e, r) {
        this.shapes = [],
        this.shapesData = t.shapes,
        this.stylesList = [],
        this.itemsData = [],
        this.prevViewData = [],
        this.shapeModifiers = [],
        this.processedElements = [],
        this.transformsManager = new ShapeTransformManager,
        this.initElement(t, e, r)
    }
    function CVSolidElement(t, e, r) {
        this.initElement(t, e, r)
    }
    function CVTextElement(t, e, r) {
        this.textSpans = [],
        this.yOffset = 0,
        this.fillColorAnim = !1,
        this.strokeColorAnim = !1,
        this.strokeWidthAnim = !1,
        this.stroke = !1,
        this.fill = !1,
        this.justifyOffset = 0,
        this.currentRender = null,
        this.renderType = "canvas",
        this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        },
        this.initElement(t, e, r)
    }
    function CVEffects() {}
    function HBaseElement(t, e, r) {}
    function HSolidElement(t, e, r) {
        this.initElement(t, e, r)
    }
    function HCompElement(t, e, r) {
        this.layers = t.layers,
        this.supports3d = !t.hasMask,
        this.completeLayers = !1,
        this.pendingElements = [],
        this.elements = this.layers ? createSizedArray(this.layers.length) : [],
        this.initElement(t, e, r),
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
        }
    }
    function HShapeElement(t, e, r) {
        this.shapes = [],
        this.shapesData = t.shapes,
        this.stylesList = [],
        this.shapeModifiers = [],
        this.itemsData = [],
        this.processedElements = [],
        this.animatedContents = [],
        this.shapesContainer = createNS("g"),
        this.initElement(t, e, r),
        this.prevViewData = [],
        this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }
    }
    function HTextElement(t, e, r) {
        this.textSpans = [],
        this.textPaths = [],
        this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        },
        this.renderType = "svg",
        this.isMasked = !1,
        this.initElement(t, e, r)
    }
    function HImageElement(t, e, r) {
        this.assetData = e.getAssetData(t.refId),
        this.initElement(t, e, r)
    }
    function HCameraElement(t, e, r) {
        this.initFrame(),
        this.initBaseData(t, e, r),
        this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (this.pe = i(this, t.pe, 0, 0, this),
        t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this),
        this.py = i(this, t.ks.p.y, 1, 0, this),
        this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this),
        t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
        t.ks.or.k.length && t.ks.or.k[0].to) {
            var s, a = t.ks.or.k.length;
            for (s = 0; s < a; s += 1)
                t.ks.or.k[s].to = null,
                t.ks.or.k[s].ti = null
        }
        this.or = i(this, t.ks.or, 1, degToRads, this),
        this.or.sh = !0,
        this.rx = i(this, t.ks.rx, 0, degToRads, this),
        this.ry = i(this, t.ks.ry, 0, degToRads, this),
        this.rz = i(this, t.ks.rz, 0, degToRads, this),
        this.mat = new Matrix,
        this._prevMat = new Matrix,
        this._isFirstFrame = !0,
        this.finalTransform = {
            mProp: this
        }
    }
    function HEffects() {}
    SVGMatte3Effect.prototype.findSymbol = function(t) {
        for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
            if (_svgMatteSymbols[e] === t)
                return _svgMatteSymbols[e];
            e += 1
        }
        return null
    }
    ,
    SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
        var r = t.layerElement.parentNode;
        if (r) {
            for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement; )
                a += 1;
            a <= n - 2 && (i = s[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e),
            i ? r.insertBefore(o, i) : r.appendChild(o)
        }
    }
    ,
    SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
        if (!this.findSymbol(e)) {
            var r = createElementID()
              , i = createNS("mask");
            i.setAttribute("id", e.layerId),
            i.setAttribute("mask-type", "alpha"),
            _svgMatteSymbols.push(e);
            var s = t.globalData.defs;
            s.appendChild(i);
            var a = createNS("symbol");
            a.setAttribute("id", r),
            this.replaceInParent(e, r),
            a.appendChild(e.layerElement),
            s.appendChild(a);
            var n = createNS("use");
            n.setAttribute("href", "#" + r),
            i.appendChild(n),
            e.data.hd = !1,
            e.show()
        }
        t.setMatte(e.layerId)
    }
    ,
    SVGMatte3Effect.prototype.initialize = function() {
        for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
            e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]),
            r += 1;
        this.initialized = !0
    }
    ,
    SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize()
    }
    ,
    SVGEffects.prototype.renderFrame = function(t) {
        var e, r = this.filters.length;
        for (e = 0; e < r; e += 1)
            this.filters[e].renderFrame(t)
    }
    ,
    CVContextData.prototype.duplicate = function() {
        var t = 2 * this._length
          , e = this.savedOp;
        this.savedOp = createTypedArray("float32", t),
        this.savedOp.set(e);
        var r = 0;
        for (r = this._length; r < t; r += 1)
            this.saved[r] = createTypedArray("float32", 16);
        this._length = t
    }
    ,
    CVContextData.prototype.reset = function() {
        this.cArrPos = 0,
        this.cTr.reset(),
        this.cO = 1
    }
    ,
    CVBaseElement.prototype = {
        createElements: function() {},
        initRendererElement: function() {},
        createContainerElements: function() {
            this.canvasContext = this.globalData.canvasContext,
            this.renderableEffectsManager = new CVEffects(this)
        },
        createContent: function() {},
        setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e
            }
        },
        createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data,this)
        },
        hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
        },
        showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1,
            this._isFirstFrame = !0,
            this.maskManager._isFirstFrame = !0)
        },
        renderFrame: function() {
            if (!this.hidden && !this.data.hd) {
                this.renderTransform(),
                this.renderRenderable(),
                this.setBlendMode();
                var t = 0 === this.data.ty;
                this.globalData.renderer.save(t),
                this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                this.renderInnerContent(),
                this.globalData.renderer.restore(t),
                this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                this._isFirstFrame && (this._isFirstFrame = !1)
            }
        },
        destroy: function() {
            this.canvasContext = null,
            this.data = null,
            this.globalData = null,
            this.maskManager.destroy()
        },
        mHelper: new Matrix
    },
    CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
    CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
    CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
    CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
    CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w,
            t.height = this.assetData.h;
            var e, r, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            o < n && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o,
            i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h),
            this.img = t
        }
    }
    ,
    CVImageElement.prototype.renderInnerContent = function(t) {
        this.canvasContext.drawImage(this.img, 0, 0)
    }
    ,
    CVImageElement.prototype.destroy = function() {
        this.img = null
    }
    ,
    extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),
    CVCompElement.prototype.renderInnerContent = function() {
        var t, e = this.canvasContext;
        for (e.beginPath(),
        e.moveTo(0, 0),
        e.lineTo(this.data.w, 0),
        e.lineTo(this.data.w, this.data.h),
        e.lineTo(0, this.data.h),
        e.lineTo(0, 0),
        e.clip(),
        t = this.layers.length - 1; 0 <= t; t -= 1)
            (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }
    ,
    CVCompElement.prototype.destroy = function() {
        var t;
        for (t = this.layers.length - 1; 0 <= t; t -= 1)
            this.elements[t] && this.elements[t].destroy();
        this.layers = null,
        this.elements = null
    }
    ,
    CVMaskElement.prototype.renderFrame = function() {
        if (this.hasMasks) {
            var t, e, r, i, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
            for (a.beginPath(),
            t = 0; t < n; t++)
                if ("n" !== this.masksProperties[t].mode) {
                    this.masksProperties[t].inv && (a.moveTo(0, 0),
                    a.lineTo(this.element.globalData.compSize.w, 0),
                    a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                    a.lineTo(0, this.element.globalData.compSize.h),
                    a.lineTo(0, 0)),
                    i = this.viewData[t].v,
                    e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0),
                    a.moveTo(e[0], e[1]);
                    var o, h = i._length;
                    for (o = 1; o < h; o++)
                        r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]),
                        a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]),
                    a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                }
            this.element.globalData.renderer.save(!0),
            a.clip()
        }
    }
    ,
    CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
    CVMaskElement.prototype.destroy = function() {
        this.element = null
    }
    ,
    extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
    CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
    CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
    },
    CVShapeElement.prototype.dashResetter = [],
    CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
    }
    ,
    CVShapeElement.prototype.createStyleElement = function(t, e) {
        var r = {
            data: t,
            type: t.ty,
            preTransforms: this.transformsManager.addTransformSequence(e),
            transforms: [],
            elements: [],
            closed: !0 === t.hd
        }
          , i = {};
        if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this),
        i.c.k || (r.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this),
        i.e = PropertyFactory.getProp(this, t.e, 1, null, this),
        i.h = PropertyFactory.getProp(this, t.h || {
            k: 0
        }, 0, .01, this),
        i.a = PropertyFactory.getProp(this, t.a || {
            k: 0
        }, 0, degToRads, this),
        i.g = new GradientProperty(this,t.g,this)),
        i.o = PropertyFactory.getProp(this, t.o, 0, .01, this),
        "st" == t.ty || "gs" == t.ty) {
            if (r.lc = this.lcEnum[t.lc] || "round",
            r.lj = this.ljEnum[t.lj] || "round",
            1 == t.lj && (r.ml = t.ml),
            i.w = PropertyFactory.getProp(this, t.w, 0, null, this),
            i.w.k || (r.wi = i.w.v),
            t.d) {
                var s = new DashProperty(this,t.d,"canvas",this);
                i.d = s,
                i.d.k || (r.da = i.d.dashArray,
                r.do = i.d.dashoffset[0])
            }
        } else
            r.r = 2 === t.r ? "evenodd" : "nonzero";
        return this.stylesList.push(r),
        i.style = r,
        i
    }
    ,
    CVShapeElement.prototype.createGroupElement = function(t) {
        return {
            it: [],
            prevViewData: []
        }
    }
    ,
    CVShapeElement.prototype.createTransformElement = function(t) {
        return {
            transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
        }
    }
    ,
    CVShapeElement.prototype.createShapeElement = function(t) {
        var e = new CVShapeData(this,t,this.stylesList,this.transformsManager);
        return this.shapes.push(e),
        this.addShapeToModifiers(e),
        e
    }
    ,
    CVShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; t < e; t += 1)
            this.prevViewData[t] = this.itemsData[t];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
        e = this.dynamicProperties.length,
        t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue();
        this.renderModifiers(),
        this.transformsManager.processSequences(this._isFirstFrame)
    }
    ,
    CVShapeElement.prototype.addTransformToStyleList = function(t) {
        var e, r = this.stylesList.length;
        for (e = 0; e < r; e += 1)
            this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
    }
    ,
    CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var t, e = this.stylesList.length;
        for (t = 0; t < e; t += 1)
            this.stylesList[t].closed || this.stylesList[t].transforms.pop()
    }
    ,
    CVShapeElement.prototype.closeStyles = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1)
            t[e].closed = !0
    }
    ,
    CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
        var a, n, o, h, l, p, m = t.length - 1, f = [], c = [], d = [].concat(s);
        for (a = m; 0 <= a; a -= 1) {
            if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i,
            "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty)
                h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d),
                f.push(e[a].style);
            else if ("gr" == t[a].ty) {
                if (h)
                    for (o = e[a].it.length,
                    n = 0; n < o; n += 1)
                        e[a].prevViewData[n] = e[a].it[n];
                else
                    e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d)
            } else
                "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]),
                e[a] = p),
                d.push(e[a]),
                this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]),
                e[a] = l,
                this.shapeModifiers.push(l)),
                c.push(l)) : "rp" == t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty),
                (e[a] = l).init(this, t, a, e),
                this.shapeModifiers.push(l),
                i = !1),
                c.push(l));
            this.addProcessedElement(t[a], a + 1)
        }
        for (this.removeTransformFromStyleList(),
        this.closeStyles(f),
        m = c.length,
        a = 0; a < m; a += 1)
            c[a].closed = !0
    }
    ,
    CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1,
        this.transformHelper._opMdf = !1,
        this.renderModifiers(),
        this.transformsManager.processSequences(this._isFirstFrame),
        this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
    }
    ,
    CVShapeElement.prototype.renderShapeTransform = function(t, e) {
        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity,
        e.opacity *= e.op.v,
        e._opMdf = !0)
    }
    ,
    CVShapeElement.prototype.drawLayer = function() {
        var t, e, r, i, s, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, m = this.globalData.canvasContext;
        for (t = 0; t < l; t += 1)
            if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                for (p.save(),
                a = h.elements,
                "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd,
                m.lineWidth = h.wi,
                m.lineCap = h.lc,
                m.lineJoin = h.lj,
                m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd,
                p.ctxOpacity(h.coOp),
                "st" !== o && "gs" !== o && m.beginPath(),
                p.ctxTransform(h.preTransforms.finalTransform.props),
                r = a.length,
                e = 0; e < r; e += 1) {
                    for ("st" !== o && "gs" !== o || (m.beginPath(),
                    h.da && (m.setLineDash(h.da),
                    m.lineDashOffset = h.do)),
                    s = (n = a[e].trNodes).length,
                    i = 0; i < s; i += 1)
                        "m" == n[i].t ? m.moveTo(n[i].p[0], n[i].p[1]) : "c" == n[i].t ? m.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : m.closePath();
                    "st" !== o && "gs" !== o || (m.stroke(),
                    h.da && m.setLineDash(this.dashResetter))
                }
                "st" !== o && "gs" !== o && m.fill(h.r),
                p.restore()
            }
    }
    ,
    CVShapeElement.prototype.renderShape = function(t, e, r, i) {
        var s, a;
        for (a = t,
        s = e.length - 1; 0 <= s; s -= 1)
            "tr" == e[s].ty ? (a = r[s].transform,
            this.renderShapeTransform(t, a)) : "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], r[s]) : "fl" == e[s].ty ? this.renderFill(e[s], r[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" == e[s].ty || "gs" == e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
        i && this.drawLayer()
    }
    ,
    CVShapeElement.prototype.renderStyledShape = function(t, e) {
        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, i, s, a = t.trNodes, n = e.paths, o = n._length;
            a.length = 0;
            var h = t.transforms.finalTransform;
            for (s = 0; s < o; s += 1) {
                var l = n.shapes[s];
                if (l && l.v) {
                    for (i = l._length,
                    r = 1; r < i; r += 1)
                        1 === r && a.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }),
                        a.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                        });
                    1 === i && a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                    }),
                    l.c && i && (a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                    }),
                    a.push({
                        t: "z"
                    }))
                }
            }
            t.trNodes = a
        }
    }
    ,
    CVShapeElement.prototype.renderPath = function(t, e) {
        if (!0 !== t.hd && t._shouldRender) {
            var r, i = e.styledShapes.length;
            for (r = 0; r < i; r += 1)
                this.renderStyledShape(e.styledShapes[r], e.sh)
        }
    }
    ,
    CVShapeElement.prototype.renderFill = function(t, e, r) {
        var i = e.style;
        (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
        (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
    }
    ,
    CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
        var i = e.style;
        if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var s = this.globalData.canvasContext
              , a = e.s.v
              , n = e.e.v;
            if (1 === t.t)
                f = s.createLinearGradient(a[0], a[1], n[0], n[1]);
            else
                var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2))
                  , h = Math.atan2(n[1] - a[1], n[0] - a[0])
                  , l = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v)
                  , p = Math.cos(h + e.a.v) * l + a[0]
                  , m = Math.sin(h + e.a.v) * l + a[1]
                  , f = s.createRadialGradient(p, m, 0, a[0], a[1], o);
            var c, d = t.g.p, u = e.g.c, y = 1;
            for (c = 0; c < d; c += 1)
                e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * c + 1]),
                f.addColorStop(u[4 * c] / 100, "rgba(" + u[4 * c + 1] + "," + u[4 * c + 2] + "," + u[4 * c + 3] + "," + y + ")");
            i.grd = f
        }
        i.coOp = e.o.v * r.opacity
    }
    ,
    CVShapeElement.prototype.renderStroke = function(t, e, r) {
        var i = e.style
          , s = e.d;
        s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray,
        i.do = s.dashoffset[0]),
        (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
        (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity),
        (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
    }
    ,
    CVShapeElement.prototype.destroy = function() {
        this.shapesData = null,
        this.globalData = null,
        this.canvasContext = null,
        this.stylesList.length = 0,
        this.itemsData.length = 0
    }
    ,
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
    CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
    CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
    CVSolidElement.prototype.renderInnerContent = function() {
        var t = this.canvasContext;
        t.fillStyle = this.data.sc,
        t.fillRect(0, 0, this.data.sw, this.data.sh)
    }
    ,
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
    CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
    CVTextElement.prototype.buildNewText = function() {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = !1;
        t.fc ? (e = !0,
        this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
        this.fill = e;
        var r = !1;
        t.sc && (r = !0,
        this.values.stroke = this.buildColor(t.sc),
        this.values.sWidth = t.sw);
        var i, s, a = this.globalData.fontManager.getFontByName(t.f), n = t.l, o = this.mHelper;
        this.stroke = r,
        this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
        s = t.finalText.length;
        var h, l, p, m, f, c, d, u, y, g, v = this.data.singleShape, b = t.tr / 1e3 * t.finalSize, E = 0, x = 0, S = !0, P = 0;
        for (i = 0; i < s; i += 1) {
            for (l = (h = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {},
            o.reset(),
            v && n[i].n && (E = -b,
            x += t.yOffset,
            x += S ? 1 : 0,
            S = !1),
            d = (f = l.shapes ? l.shapes[0].it : []).length,
            o.scale(t.finalSize / 100, t.finalSize / 100),
            v && this.applyTextPropertiesToMatrix(t, o, n[i].line, E, x),
            y = createSizedArray(d),
            c = 0; c < d; c += 1) {
                for (m = f[c].ks.k.i.length,
                u = f[c].ks.k,
                g = [],
                p = 1; p < m; p += 1)
                    1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)),
                    g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)),
                y[c] = g
            }
            v && (E += n[i].l,
            E += b),
            this.textSpans[P] ? this.textSpans[P].elem = y : this.textSpans[P] = {
                elem: y
            },
            P += 1
        }
    }
    ,
    CVTextElement.prototype.renderInnerContent = function() {
        var t, e, r, i, s, a, n = this.canvasContext;
        this.finalTransform.mat.props;
        n.font = this.values.fValue,
        n.lineCap = "butt",
        n.lineJoin = "miter",
        n.miterLimit = 4,
        this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
        e = l.length;
        var p, m, f = null, c = null, d = null;
        for (t = 0; t < e; t += 1)
            if (!l[t].n) {
                if ((o = h[t]) && (this.globalData.renderer.save(),
                this.globalData.renderer.ctxTransform(o.p),
                this.globalData.renderer.ctxOpacity(o.o)),
                this.fill) {
                    for (o && o.fc ? f !== o.fc && (f = o.fc,
                    n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill,
                    n.fillStyle = this.values.fill),
                    i = (p = this.textSpans[t].elem).length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0; r < i; r += 1)
                        for (a = (m = p[r]).length,
                        this.globalData.canvasContext.moveTo(m[0], m[1]),
                        s = 2; s < a; s += 6)
                            this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                    this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.fill()
                }
                if (this.stroke) {
                    for (o && o.sw ? d !== o.sw && (d = o.sw,
                    n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth,
                    n.lineWidth = this.values.sWidth),
                    o && o.sc ? c !== o.sc && (c = o.sc,
                    n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke,
                    n.strokeStyle = this.values.stroke),
                    i = (p = this.textSpans[t].elem).length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0; r < i; r += 1)
                        for (a = (m = p[r]).length,
                        this.globalData.canvasContext.moveTo(m[0], m[1]),
                        s = 2; s < a; s += 6)
                            this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                    this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.stroke()
                }
                o && this.globalData.renderer.restore()
            }
    }
    ,
    CVEffects.prototype.renderFrame = function() {}
    ,
    HBaseElement.prototype = {
        checkBlendMode: function() {},
        initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"),
            this.data.hasMask ? (this.svgElement = createNS("svg"),
            this.layerElement = createNS("g"),
            this.maskedElement = this.layerElement,
            this.svgElement.appendChild(this.layerElement),
            this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
            styleDiv(this.baseElement)
        },
        createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this),
            this.transformedElement = this.baseElement,
            this.maskedElement = this.layerElement,
            this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
            this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
            0 !== this.data.bm && this.setBlendMode()
        },
        renderElement: function() {
            this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()),
            this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
        },
        renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(),
            this.renderRenderable(),
            this.renderElement(),
            this.renderInnerContent(),
            this._isFirstFrame && (this._isFirstFrame = !1))
        },
        destroy: function() {
            this.layerElement = null,
            this.transformedElement = null,
            this.matteElement && (this.matteElement = null),
            this.maskManager && (this.maskManager.destroy(),
            this.maskManager = null)
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data,this,this.globalData)
        },
        addEffects: function() {},
        setMatte: function() {}
    },
    HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
    HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
    HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting,
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
    HSolidElement.prototype.createContent = function() {
        var t;
        this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
        t.setAttribute("height", this.data.sh),
        t.setAttribute("fill", this.data.sc),
        this.svgElement.setAttribute("width", this.data.sw),
        this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px",
        t.style.height = this.data.sh + "px",
        t.style.backgroundColor = this.data.sc),
        this.layerElement.appendChild(t)
    }
    ,
    extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
    HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
    HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements(),
        this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
        this.svgElement.setAttribute("height", this.data.h),
        this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
    }
    ,
    HCompElement.prototype.addTo3dContainer = function(t, e) {
        for (var r, i = 0; i < e; )
            this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()),
            i += 1;
        r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
    }
    ,
    extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
    HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
    HShapeElement.prototype.createContent = function() {
        var t;
        if (this.baseElement.style.fontSize = 0,
        this.data.hasMask)
            this.layerElement.appendChild(this.shapesContainer),
            t = this.svgElement;
        else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w),
            t.setAttribute("height", e.h),
            t.appendChild(this.shapesContainer),
            this.layerElement.appendChild(t)
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
        this.filterUniqueShapes(),
        this.shapeCont = t
    }
    ,
    HShapeElement.prototype.getTransformedPoint = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
            e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
        return e
    }
    ,
    HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
        var r, i, s, a, n, o = t.sh.v, h = t.transformers, l = o._length;
        if (!(l <= 1)) {
            for (r = 0; r < l - 1; r += 1)
                i = this.getTransformedPoint(h, o.v[r]),
                s = this.getTransformedPoint(h, o.o[r]),
                a = this.getTransformedPoint(h, o.i[r + 1]),
                n = this.getTransformedPoint(h, o.v[r + 1]),
                this.checkBounds(i, s, a, n, e);
            o.c && (i = this.getTransformedPoint(h, o.v[r]),
            s = this.getTransformedPoint(h, o.o[r]),
            a = this.getTransformedPoint(h, o.i[0]),
            n = this.getTransformedPoint(h, o.v[0]),
            this.checkBounds(i, s, a, n, e))
        }
    }
    ,
    HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
        this.getBoundsOfCurve(t, e, r, i);
        var a = this.shapeBoundingBox;
        s.x = bm_min(a.left, s.x),
        s.xMax = bm_max(a.right, s.xMax),
        s.y = bm_min(a.top, s.y),
        s.yMax = bm_max(a.bottom, s.yMax)
    }
    ,
    HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
    },
    HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
        for (var s, a, n, o, h, l, p, m = [[t[0], i[0]], [t[1], i[1]]], f = 0; f < 2; ++f)
            if (a = 6 * t[f] - 12 * e[f] + 6 * r[f],
            s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f],
            n = 3 * e[f] - 3 * t[f],
            a |= 0,
            n |= 0,
            0 !== (s |= 0))
                (h = a * a - 4 * n * s) < 0 || (0 < (l = (-a + bm_sqrt(h)) / (2 * s)) && l < 1 && m[f].push(this.calculateF(l, t, e, r, i, f)),
                0 < (p = (-a - bm_sqrt(h)) / (2 * s)) && p < 1 && m[f].push(this.calculateF(p, t, e, r, i, f)));
            else {
                if (0 === a)
                    continue;
                0 < (o = -n / a) && o < 1 && m[f].push(this.calculateF(o, t, e, r, i, f))
            }
        this.shapeBoundingBox.left = bm_min.apply(null, m[0]),
        this.shapeBoundingBox.top = bm_min.apply(null, m[1]),
        this.shapeBoundingBox.right = bm_max.apply(null, m[0]),
        this.shapeBoundingBox.bottom = bm_max.apply(null, m[1])
    }
    ,
    HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
        return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bm_pow(t, 2) * i[a] + bm_pow(t, 3) * s[a]
    }
    ,
    HShapeElement.prototype.calculateBoundingBox = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
            t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
    }
    ,
    HShapeElement.prototype.currentBoxContains = function(t) {
        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
    }
    ,
    HShapeElement.prototype.renderInnerContent = function() {
        if (this._renderShapeFrame(),
        !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox
              , e = 999999;
            if (t.x = e,
            t.xMax = -e,
            t.y = e,
            t.yMax = -e,
            this.calculateBoundingBox(this.itemsData, t),
            t.width = t.xMax < t.x ? 0 : t.xMax - t.x,
            t.height = t.yMax < t.y ? 0 : t.yMax - t.y,
            this.currentBoxContains(t))
                return;
            var r = !1;
            this.currentBBox.w !== t.width && (this.currentBBox.w = t.width,
            this.shapeCont.setAttribute("width", t.width),
            r = !0),
            this.currentBBox.h !== t.height && (this.currentBBox.h = t.height,
            this.shapeCont.setAttribute("height", t.height),
            r = !0),
            (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width,
            this.currentBBox.h = t.height,
            this.currentBBox.x = t.x,
            this.currentBBox.y = t.y,
            this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
            this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
    }
    ,
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
    HTextElement.prototype.createContent = function() {
        if (this.isMasked = this.checkMasks(),
        this.isMasked) {
            this.renderType = "svg",
            this.compW = this.comp.data.w,
            this.compH = this.comp.data.h,
            this.svgElement.setAttribute("width", this.compW),
            this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t),
            this.innerElem = t
        } else
            this.renderType = "html",
            this.innerElem = this.layerElement;
        this.checkParenting()
    }
    ,
    HTextElement.prototype.buildNewText = function() {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = this.innerElem.style;
        e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)",
        t.sc && (e.stroke = this.buildColor(t.sc),
        e.strokeWidth = t.sw + "px");
        var r, i, s = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px",
            e.lineHeight = t.finalSize + "px",
            s.fClass)
                this.innerElem.className = s.fClass;
            else {
                e.fontFamily = s.fFamily;
                var a = t.fWeight
                  , n = t.fStyle;
                e.fontStyle = n,
                e.fontWeight = a
            }
        var o, h, l, p = t.l;
        i = p.length;
        var m, f = this.mHelper, c = "", d = 0;
        for (r = 0; r < i; r += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"),
            o.setAttribute("stroke-linejoin", "round"),
            o.setAttribute("stroke-miterlimit", "4")),
            this.isMasked || (this.textSpans[d] ? l = (h = this.textSpans[d]).children[0] : ((h = createTag("div")).style.lineHeight = 0,
            (l = createNS("svg")).appendChild(o),
            styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (h = this.textSpans[d],
            o = this.textPaths[d]) : (styleDiv(h = createTag("span")),
            styleDiv(o = createTag("span")),
            h.appendChild(o)),
            this.globalData.fontManager.chars) {
                var u, y = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (u = y ? y.data : null,
                f.reset(),
                u && u.shapes && (m = u.shapes[0].it,
                f.scale(t.finalSize / 100, t.finalSize / 100),
                c = this.createPathShape(f, m),
                o.setAttribute("d", c)),
                this.isMasked)
                    this.innerElem.appendChild(o);
                else {
                    if (this.innerElem.appendChild(h),
                    u && u.shapes) {
                        document.body.appendChild(l);
                        var g = l.getBBox();
                        l.setAttribute("width", g.width + 2),
                        l.setAttribute("height", g.height + 2),
                        l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)),
                        l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)",
                        p[r].yOffset = g.y - 1
                    } else
                        l.setAttribute("width", 1),
                        l.setAttribute("height", 1);
                    h.appendChild(l)
                }
            } else
                o.textContent = p[r].val,
                o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h),
                o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
            this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = h,
            this.textSpans[d].style.display = "block",
            this.textPaths[d] = o,
            d += 1
        }
        for (; d < this.textSpans.length; )
            this.textSpans[d].style.display = "none",
            d += 1
    }
    ,
    HTextElement.prototype.renderInnerContent = function() {
        if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag)
                return;
            this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
            this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
        this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var t, e, r, i, s, a = 0, n = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
            for (e = o.length,
            t = 0; t < e; t += 1)
                o[t].n ? a += 1 : (i = this.textSpans[t],
                s = this.textPaths[t],
                r = n[a],
                a += 1,
                r._mdf.m && (this.isMasked ? i.setAttribute("transform", r.m) : i.style.transform = i.style.webkitTransform = r.m),
                i.style.opacity = r.o,
                r.sw && r._mdf.sw && s.setAttribute("stroke-width", r.sw),
                r.sc && r._mdf.sc && s.setAttribute("stroke", r.sc),
                r.fc && r._mdf.fc && (s.setAttribute("fill", r.fc),
                s.style.color = r.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                var h = this.innerElem.getBBox();
                this.currentBBox.w !== h.width && (this.currentBBox.w = h.width,
                this.svgElement.setAttribute("width", h.width)),
                this.currentBBox.h !== h.height && (this.currentBBox.h = h.height,
                this.svgElement.setAttribute("height", h.height));
                this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2,
                this.currentBBox.h = h.height + 2,
                this.currentBBox.x = h.x - 1,
                this.currentBBox.y = h.y - 1,
                this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
        }
    }
    ,
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
    HImageElement.prototype.createContent = function() {
        var t = this.globalData.getAssetsPath(this.assetData)
          , e = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"),
        this.imageElem.setAttribute("width", this.assetData.w + "px"),
        this.imageElem.setAttribute("height", this.assetData.h + "px"),
        this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
        this.layerElement.appendChild(this.imageElem),
        this.baseElement.setAttribute("width", this.assetData.w),
        this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
        e.src = t,
        this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
    }
    ,
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
    HCameraElement.prototype.setup = function() {
        var t, e, r = this.comp.threeDElements.length;
        for (t = 0; t < r; t += 1)
            "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px",
            e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px",
            e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
    }
    ,
    HCameraElement.prototype.createElements = function() {}
    ,
    HCameraElement.prototype.hide = function() {}
    ,
    HCameraElement.prototype.renderFrame = function() {
        var t, e, r = this._isFirstFrame;
        if (this.hierarchy)
            for (e = this.hierarchy.length,
            t = 0; t < e; t += 1)
                r = this.hierarchy[t].finalTransform.mProp._mdf || r;
        if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(),
            this.hierarchy)
                for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
                    var i = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                    this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),
                    this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                    this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                    this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
            this.a) {
                var s;
                s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2))
                  , n = [s[0] / a, s[1] / a, s[2] / a]
                  , o = Math.sqrt(n[2] * n[2] + n[0] * n[0])
                  , h = Math.atan2(n[1], o)
                  , l = Math.atan2(n[0], -n[2]);
                this.mat.rotateY(l).rotateX(-h)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
            this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
            this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
            this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
                var m;
                for (e = this.comp.threeDElements.length,
                t = 0; t < e; t += 1)
                    "3d" === (m = this.comp.threeDElements[t]).type && (p && (m.container.style.transform = m.container.style.webkitTransform = this.mat.toCSS()),
                    this.pe._mdf && (m.perspectiveElem.style.perspective = m.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                this.mat.clone(this._prevMat)
            }
        }
        this._isFirstFrame = !1
    }
    ,
    HCameraElement.prototype.prepareFrame = function(t) {
        this.prepareProperties(t, !0)
    }
    ,
    HCameraElement.prototype.destroy = function() {}
    ,
    HCameraElement.prototype.getBaseElement = function() {
        return null
    }
    ,
    HEffects.prototype.renderFrame = function() {}
    ;
    var animationManager = function() {
        var t = {}
          , s = []
          , i = 0
          , a = 0
          , n = 0
          , o = !0
          , h = !1;
        function r(t) {
            for (var e = 0, r = t.target; e < a; )
                s[e].animation === r && (s.splice(e, 1),
                e -= 1,
                a -= 1,
                r.isPaused || m()),
                e += 1
        }
        function l(t, e) {
            if (!t)
                return null;
            for (var r = 0; r < a; ) {
                if (s[r].elem == t && null !== s[r].elem)
                    return s[r].animation;
                r += 1
            }
            var i = new AnimationItem;
            return f(i, t),
            i.setData(t, e),
            i
        }
        function p() {
            n += 1,
            d()
        }
        function m() {
            n -= 1
        }
        function f(t, e) {
            t.addEventListener("destroy", r),
            t.addEventListener("_active", p),
            t.addEventListener("_idle", m),
            s.push({
                elem: e,
                animation: t
            }),
            a += 1
        }
        function c(t) {
            var e, r = t - i;
            for (e = 0; e < a; e += 1)
                s[e].animation.advanceTime(r);
            i = t,
            n && !h ? window.requestAnimationFrame(c) : o = !0
        }
        function e(t) {
            i = t,
            window.requestAnimationFrame(c)
        }
        function d() {
            !h && n && o && (window.requestAnimationFrame(e),
            o = !1)
        }
        return t.registerAnimation = l,
        t.loadAnimation = function(t) {
            var e = new AnimationItem;
            return f(e, null),
            e.setParams(t),
            e
        }
        ,
        t.setSpeed = function(t, e) {
            var r;
            for (r = 0; r < a; r += 1)
                s[r].animation.setSpeed(t, e)
        }
        ,
        t.setDirection = function(t, e) {
            var r;
            for (r = 0; r < a; r += 1)
                s[r].animation.setDirection(t, e)
        }
        ,
        t.play = function(t) {
            var e;
            for (e = 0; e < a; e += 1)
                s[e].animation.play(t)
        }
        ,
        t.pause = function(t) {
            var e;
            for (e = 0; e < a; e += 1)
                s[e].animation.pause(t)
        }
        ,
        t.stop = function(t) {
            var e;
            for (e = 0; e < a; e += 1)
                s[e].animation.stop(t)
        }
        ,
        t.togglePause = function(t) {
            var e;
            for (e = 0; e < a; e += 1)
                s[e].animation.togglePause(t)
        }
        ,
        t.searchAnimations = function(t, e, r) {
            var i, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = s.length;
            for (i = 0; i < a; i += 1)
                r && s[i].setAttribute("data-bm-type", r),
                l(s[i], t);
            if (e && 0 === a) {
                r || (r = "svg");
                var n = document.getElementsByTagName("body")[0];
                n.innerHTML = "";
                var o = createTag("div");
                o.style.width = "100%",
                o.style.height = "100%",
                o.setAttribute("data-bm-type", r),
                n.appendChild(o),
                l(o, t)
            }
        }
        ,
        t.resize = function() {
            var t;
            for (t = 0; t < a; t += 1)
                s[t].animation.resize()
        }
        ,
        t.goToAndStop = function(t, e, r) {
            var i;
            for (i = 0; i < a; i += 1)
                s[i].animation.goToAndStop(t, e, r)
        }
        ,
        t.destroy = function(t) {
            var e;
            for (e = a - 1; 0 <= e; e -= 1)
                s[e].animation.destroy(t)
        }
        ,
        t.freeze = function() {
            h = !0
        }
        ,
        t.unfreeze = function() {
            h = !1,
            d()
        }
        ,
        t.getRegisteredAnimations = function() {
            var t, e = s.length, r = [];
            for (t = 0; t < e; t += 1)
                r.push(s[t].animation);
            return r
        }
        ,
        t
    }()
      , AnimationItem = function() {
        this._cbs = [],
        this.name = "",
        this.path = "",
        this.isLoaded = !1,
        this.currentFrame = 0,
        this.currentRawFrame = 0,
        this.firstFrame = 0,
        this.totalFrames = 0,
        this.frameRate = 0,
        this.frameMult = 0,
        this.playSpeed = 1,
        this.playDirection = 1,
        this.playCount = 0,
        this.animationData = {},
        this.assets = [],
        this.isPaused = !0,
        this.autoplay = !1,
        this.loop = !0,
        this.renderer = null,
        this.animationID = createElementID(),
        this.assetsPath = "",
        this.timeCompleted = 0,
        this.segmentPos = 0,
        this.subframeEnabled = subframeEnabled,
        this.segments = [],
        this._idle = !0,
        this._completedLoop = !1,
        this.projectInterface = ProjectInterface(),
        this.imagePreloader = new ImagePreloader
    };
    extendPrototype([BaseEvent], AnimationItem),
    AnimationItem.prototype.setParams = function(t) {
        t.context && (this.context = t.context),
        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
        var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
        switch (e) {
        case "canvas":
            this.renderer = new CanvasRenderer(this,t.rendererSettings);
            break;
        case "svg":
            this.renderer = new SVGRenderer(this,t.rendererSettings);
            break;
        default:
            this.renderer = new HybridRenderer(this,t.rendererSettings)
        }
        this.renderer.setProjectInterface(this.projectInterface),
        this.animType = e,
        "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)),
        this.autoplay = !("autoplay"in t) || t.autoplay,
        this.name = t.name ? t.name : "",
        this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments,
        this.assetsPath = t.assetsPath,
        this.initialSegment = t.initialSegment,
        t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
        this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
        this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
        assetLoader.load(t.path, this.configAnimation.bind(this), function() {
            this.trigger("data_failed")
        }
        .bind(this)))
    }
    ,
    AnimationItem.prototype.setData = function(t, e) {
        var r = {
            wrapper: t,
            animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
        }
          , i = t.attributes;
        r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "",
        r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
        var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
        "" === s || (r.loop = "false" !== s && ("true" === s || parseInt(s)));
        var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
        r.autoplay = "false" !== a,
        r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "",
        "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1),
        this.setParams(r)
    }
    ,
    AnimationItem.prototype.includeLayers = function(t) {
        t.op > this.animationData.op && (this.animationData.op = t.op,
        this.totalFrames = Math.floor(t.op - this.animationData.ip));
        var e, r, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length;
        for (r = 0; r < n; r += 1)
            for (e = 0; e < s; ) {
                if (i[e].id == a[r].id) {
                    i[e] = a[r];
                    break
                }
                e += 1
            }
        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
        this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
        t.assets)
            for (s = t.assets.length,
            e = 0; e < s; e += 1)
                this.animationData.assets.push(t.assets[e]);
        this.animationData.__complete = !1,
        dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
        this.renderer.includeLayers(t.layers),
        expressionsPlugin && expressionsPlugin.initExpressions(this),
        this.loadNextSegment()
    }
    ,
    AnimationItem.prototype.loadNextSegment = function() {
        var t = this.animationData.segments;
        if (!t || 0 === t.length || !this.autoloadSegments)
            return this.trigger("data_ready"),
            void (this.timeCompleted = this.totalFrames);
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1,
        assetLoader.load(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
        }
        .bind(this))
    }
    ,
    AnimationItem.prototype.loadSegments = function() {
        this.animationData.segments || (this.timeCompleted = this.totalFrames),
        this.loadNextSegment()
    }
    ,
    AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images"),
        this.checkLoaded()
    }
    ,
    AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath),
        this.imagePreloader.setPath(this.path),
        this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
    }
    ,
    AnimationItem.prototype.configAnimation = function(t) {
        if (this.renderer)
            try {
                this.animationData = t,
                this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                this.firstFrame = Math.round(this.animationData.ip)),
                this.renderer.configAnimation(t),
                t.assets || (t.assets = []),
                this.assets = this.animationData.assets,
                this.frameRate = this.animationData.fr,
                this.frameMult = this.animationData.fr / 1e3,
                this.renderer.searchExtraCompositions(t.assets),
                this.trigger("config_ready"),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded()
            } catch (t) {
                this.triggerConfigError(t)
            }
    }
    ,
    AnimationItem.prototype.waitForFontsLoaded = function() {
        this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
    }
    ,
    AnimationItem.prototype.checkLoaded = function() {
        this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0,
        dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
        expressionsPlugin && expressionsPlugin.initExpressions(this),
        this.renderer.initItems(),
        setTimeout(function() {
            this.trigger("DOMLoaded")
        }
        .bind(this), 0),
        this.gotoFrame(),
        this.autoplay && this.play())
    }
    ,
    AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize()
    }
    ,
    AnimationItem.prototype.setSubframe = function(t) {
        this.subframeEnabled = !!t
    }
    ,
    AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
        this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
        this.trigger("enterFrame"),
        this.renderFrame()
    }
    ,
    AnimationItem.prototype.renderFrame = function() {
        if (!1 !== this.isLoaded)
            try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
    }
    ,
    AnimationItem.prototype.play = function(t) {
        t && this.name != t || !0 === this.isPaused && (this.isPaused = !1,
        this._idle && (this._idle = !1,
        this.trigger("_active")))
    }
    ,
    AnimationItem.prototype.pause = function(t) {
        t && this.name != t || !1 === this.isPaused && (this.isPaused = !0,
        this._idle = !0,
        this.trigger("_idle"))
    }
    ,
    AnimationItem.prototype.togglePause = function(t) {
        t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
    }
    ,
    AnimationItem.prototype.stop = function(t) {
        t && this.name != t || (this.pause(),
        this.playCount = 0,
        this._completedLoop = !1,
        this.setCurrentRawFrameValue(0))
    }
    ,
    AnimationItem.prototype.goToAndStop = function(t, e, r) {
        r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier),
        this.pause())
    }
    ,
    AnimationItem.prototype.goToAndPlay = function(t, e, r) {
        this.goToAndStop(t, e, r),
        this.play()
    }
    ,
    AnimationItem.prototype.advanceTime = function(t) {
        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier
              , r = !1;
            e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1,
            this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
            this._completedLoop = !0,
            this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0,
            e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0,
            e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
            this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
            r && (this.setCurrentRawFrameValue(e),
            this.pause(),
            this.trigger("complete"))
        }
    }
    ,
    AnimationItem.prototype.adjustSegment = function(t, e) {
        this.playCount = 0,
        t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
        this.timeCompleted = this.totalFrames = t[0] - t[1],
        this.firstFrame = t[1],
        this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
        this.timeCompleted = this.totalFrames = t[1] - t[0],
        this.firstFrame = t[0],
        this.setCurrentRawFrameValue(.001 + e)),
        this.trigger("segmentStart")
    }
    ,
    AnimationItem.prototype.setSegment = function(t, e) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
        this.firstFrame = t,
        this.timeCompleted = this.totalFrames = e - t,
        -1 !== r && this.goToAndStop(r, !0)
    }
    ,
    AnimationItem.prototype.playSegments = function(t, e) {
        if (e && (this.segments.length = 0),
        "object" == typeof t[0]) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
                this.segments.push(t[r])
        } else
            this.segments.push(t);
        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
        this.isPaused && this.play()
    }
    ,
    AnimationItem.prototype.resetSegments = function(t) {
        this.segments.length = 0,
        this.segments.push([this.animationData.ip, this.animationData.op]),
        t && this.checkSegments(0)
    }
    ,
    AnimationItem.prototype.checkSegments = function(t) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t),
        !0)
    }
    ,
    AnimationItem.prototype.destroy = function(t) {
        t && this.name != t || !this.renderer || (this.renderer.destroy(),
        this.imagePreloader.destroy(),
        this.trigger("destroy"),
        this._cbs = null,
        this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null,
        this.renderer = null)
    }
    ,
    AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
        this.currentRawFrame = t,
        this.gotoFrame()
    }
    ,
    AnimationItem.prototype.setSpeed = function(t) {
        this.playSpeed = t,
        this.updaFrameModifier()
    }
    ,
    AnimationItem.prototype.setDirection = function(t) {
        this.playDirection = t < 0 ? -1 : 1,
        this.updaFrameModifier()
    }
    ,
    AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
    }
    ,
    AnimationItem.prototype.getPath = function() {
        return this.path
    }
    ,
    AnimationItem.prototype.getAssetsPath = function(t) {
        var e = "";
        if (t.e)
            e = t.p;
        else if (this.assetsPath) {
            var r = t.p;
            -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
            e = this.assetsPath + r
        } else
            e = this.path,
            e += t.u ? t.u : "",
            e += t.p;
        return e
    }
    ,
    AnimationItem.prototype.getAssetData = function(t) {
        for (var e = 0, r = this.assets.length; e < r; ) {
            if (t == this.assets[e].id)
                return this.assets[e];
            e += 1
        }
    }
    ,
    AnimationItem.prototype.hide = function() {
        this.renderer.hide()
    }
    ,
    AnimationItem.prototype.show = function() {
        this.renderer.show()
    }
    ,
    AnimationItem.prototype.getDuration = function(t) {
        return t ? this.totalFrames : this.totalFrames / this.frameRate
    }
    ,
    AnimationItem.prototype.trigger = function(t) {
        if (this._cbs && this._cbs[t])
            switch (t) {
            case "enterFrame":
                this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                break;
            case "loopComplete":
                this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                break;
            case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                break;
            case "segmentStart":
                this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                break;
            case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t,this));
                break;
            default:
                this.triggerEvent(t)
            }
        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
        "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
        "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
        "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
        "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
    }
    ,
    AnimationItem.prototype.triggerRenderFrameError = function(t) {
        var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
        this.triggerEvent("error", e),
        this.onError && this.onError.call(this, e)
    }
    ,
    AnimationItem.prototype.triggerConfigError = function(t) {
        var e = new BMConfigErrorEvent(t,this.currentFrame);
        this.triggerEvent("error", e),
        this.onError && this.onError.call(this, e)
    }
    ;
    var Expressions = (IW = {},
    IW.initExpressions = function(t) {
        var e = 0
          , r = [];
        function i() {
            var t, e = r.length;
            for (t = 0; t < e; t += 1)
                r[t].release();
            r.length = 0
        }
        t.renderer.compInterface = CompExpressionInterface(t.renderer),
        t.renderer.globalData.projectInterface.registerComposition(t.renderer),
        t.renderer.globalData.pushExpression = function() {
            e += 1
        }
        ,
        t.renderer.globalData.popExpression = function() {
            0 == (e -= 1) && i()
        }
        ,
        t.renderer.globalData.registerExpressionProperty = function(t) {
            -1 === r.indexOf(t) && r.push(t)
        }
    }
    ,
    IW), IW;
    expressionsPlugin = Expressions;
    var ExpressionManager = function() {
        var ob = {}
          , Math = BMMath
          , window = null
          , document = null;
        function $bm_isInstanceOfArray(t) {
            return t.constructor === Array || t.constructor === Float32Array
        }
        function isNumerable(t, e) {
            return "number" === t || "boolean" === t || "string" === t || e instanceof Number
        }
        function $bm_neg(t) {
            var e = typeof t;
            if ("number" === e || "boolean" === e || t instanceof Number)
                return -t;
            if ($bm_isInstanceOfArray(t)) {
                var r, i = t.length, s = [];
                for (r = 0; r < i; r += 1)
                    s[r] = -t[r];
                return s
            }
            return t.propType ? t.v : void 0
        }
        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
          , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
          , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
        function sum(t, e) {
            var r = typeof t
              , i = typeof e;
            if ("string" === r || "string" === i)
                return t + e;
            if (isNumerable(r, t) && isNumerable(i, e))
                return t + e;
            if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return (t = t.slice(0))[0] = t[0] + e,
                t;
            if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return (e = e.slice(0))[0] = t + e[0],
                e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                    ("number" == typeof t[s] || t[s]instanceof Number) && ("number" == typeof e[s] || e[s]instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s],
                    s += 1;
                return o
            }
            return 0
        }
        var add = sum;
        function sub(t, e) {
            var r = typeof t
              , i = typeof e;
            if (isNumerable(r, t) && isNumerable(i, e))
                return "string" === r && (t = parseInt(t)),
                "string" === i && (e = parseInt(e)),
                t - e;
            if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return (t = t.slice(0))[0] = t[0] - e,
                t;
            if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return (e = e.slice(0))[0] = t - e[0],
                e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                    ("number" == typeof t[s] || t[s]instanceof Number) && ("number" == typeof e[s] || e[s]instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s],
                    s += 1;
                return o
            }
            return 0
        }
        function mul(t, e) {
            var r, i, s, a = typeof t, n = typeof e;
            if (isNumerable(a, t) && isNumerable(n, e))
                return t * e;
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (s = t.length,
                r = createTypedArray("float32", s),
                i = 0; i < s; i += 1)
                    r[i] = t[i] * e;
                return r
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length,
                r = createTypedArray("float32", s),
                i = 0; i < s; i += 1)
                    r[i] = t * e[i];
                return r
            }
            return 0
        }
        function div(t, e) {
            var r, i, s, a = typeof t, n = typeof e;
            if (isNumerable(a, t) && isNumerable(n, e))
                return t / e;
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (s = t.length,
                r = createTypedArray("float32", s),
                i = 0; i < s; i += 1)
                    r[i] = t[i] / e;
                return r
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length,
                r = createTypedArray("float32", s),
                i = 0; i < s; i += 1)
                    r[i] = t / e[i];
                return r
            }
            return 0
        }
        function mod(t, e) {
            return "string" == typeof t && (t = parseInt(t)),
            "string" == typeof e && (e = parseInt(e)),
            t % e
        }
        var $bm_sum = sum
          , $bm_sub = sub
          , $bm_mul = mul
          , $bm_div = div
          , $bm_mod = mod;
        function clamp(t, e, r) {
            if (r < e) {
                var i = r;
                r = e,
                e = i
            }
            return Math.min(Math.max(t, e), r)
        }
        function radiansToDegrees(t) {
            return t / degToRads
        }
        var radians_to_degrees = radiansToDegrees;
        function degreesToRadians(t) {
            return t * degToRads
        }
        var degrees_to_radians = radiansToDegrees
          , helperLengthArray = [0, 0, 0, 0, 0, 0];
        function length(t, e) {
            if ("number" == typeof t || t instanceof Number)
                return e = e || 0,
                Math.abs(t - e);
            e || (e = helperLengthArray);
            var r, i = Math.min(t.length, e.length), s = 0;
            for (r = 0; r < i; r += 1)
                s += Math.pow(e[r] - t[r], 2);
            return Math.sqrt(s)
        }
        function normalize(t) {
            return div(t, length(t))
        }
        function rgbToHsl(t) {
            var e, r, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2;
            if (n == o)
                e = r = 0;
            else {
                var l = n - o;
                switch (r = .5 < h ? l / (2 - n - o) : l / (n + o),
                n) {
                case i:
                    e = (s - a) / l + (s < a ? 6 : 0);
                    break;
                case s:
                    e = (a - i) / l + 2;
                    break;
                case a:
                    e = (i - s) / l + 4
                }
                e /= 6
            }
            return [e, r, h, t[3]]
        }
        function hue2rgb(t, e, r) {
            return r < 0 && (r += 1),
            1 < r && (r -= 1),
            r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        function hslToRgb(t) {
            var e, r, i, s = t[0], a = t[1], n = t[2];
            if (0 === a)
                e = r = i = n;
            else {
                var o = n < .5 ? n * (1 + a) : n + a - n * a
                  , h = 2 * n - o;
                e = hue2rgb(h, o, s + 1 / 3),
                r = hue2rgb(h, o, s),
                i = hue2rgb(h, o, s - 1 / 3)
            }
            return [e, r, i, t[3]]
        }
        function linear(t, e, r, i, s) {
            if (void 0 !== i && void 0 !== s || (i = e,
            s = r,
            e = 0,
            r = 1),
            r < e) {
                var a = r;
                r = e,
                e = a
            }
            if (t <= e)
                return i;
            if (r <= t)
                return s;
            var n = r === e ? 0 : (t - e) / (r - e);
            if (!i.length)
                return i + (s - i) * n;
            var o, h = i.length, l = createTypedArray("float32", h);
            for (o = 0; o < h; o += 1)
                l[o] = i[o] + (s[o] - i[o]) * n;
            return l
        }
        function random(t, e) {
            if (void 0 === e && (void 0 === t ? (t = 0,
            e = 1) : (e = t,
            t = void 0)),
            e.length) {
                var r, i = e.length;
                t || (t = createTypedArray("float32", i));
                var s = createTypedArray("float32", i)
                  , a = BMMath.random();
                for (r = 0; r < i; r += 1)
                    s[r] = t[r] + a * (e[r] - t[r]);
                return s
            }
            return void 0 === t && (t = 0),
            t + BMMath.random() * (e - t)
        }
        function createPath(t, e, r, i) {
            var s, a = t.length, n = shape_pool.newElement();
            n.setPathData(!!i, a);
            var o, h, l = [0, 0];
            for (s = 0; s < a; s += 1)
                o = e && e[s] ? e[s] : l,
                h = r && r[s] ? r[s] : l,
                n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
            return n
        }
        function initiateExpression(elem, data, property) {
            var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime,
            Object.defineProperty(thisProperty, "value", {
                get: function() {
                    return thisProperty.v
                }
            }),
            elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
            elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [], scoped_bm_rt;
            if (data.xf) {
                var i, len = data.xf.length;
                for (i = 0; i < len; i += 1)
                    __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
            }
            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0]
              , numKeys = property.kf ? data.k.length : 0
              , active = !this.data || !0 !== this.data.hd
              , wiggle = function(t, e) {
                var r, i, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s);
                var n = Math.floor(5 * time);
                for (i = r = 0; r < n; ) {
                    for (i = 0; i < s; i += 1)
                        a[i] += -e + 2 * e * BMMath.random();
                    r += 1
                }
                var o = 5 * time
                  , h = o - Math.floor(o)
                  , l = createTypedArray("float32", s);
                if (1 < s) {
                    for (i = 0; i < s; i += 1)
                        l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l
                }
                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
            }
            .bind(this);
            function loopInDuration(t, e) {
                return loopIn(t, e, !0)
            }
            function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
            }
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
            loop_in = loopIn),
            thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
            loop_out = loopOut),
            thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
            this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
            this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
            function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                  , i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
            }
            function easeOut(t, e, r, i, s) {
                return applyEase(easeOutBez, t, e, r, i, s)
            }
            function easeIn(t, e, r, i, s) {
                return applyEase(easeInBez, t, e, r, i, s)
            }
            function ease(t, e, r, i, s) {
                return applyEase(easeInOutBez, t, e, r, i, s)
            }
            function applyEase(t, e, r, i, s, a) {
                void 0 === s ? (s = r,
                a = i) : e = (e - r) / (i - r);
                var n = t(e = 1 < e ? 1 : e < 0 ? 0 : e);
                if ($bm_isInstanceOfArray(s)) {
                    var o, h = s.length, l = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1)
                        l[o] = (a[o] - s[o]) * n + s[o];
                    return l
                }
                return (a - s) * n + s
            }
            function nearestKey(t) {
                var e, r, i, s = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                    if (r = -1,
                    (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                        r = 1,
                        i = data.k[0].t;
                    else {
                        for (e = 0; e < s - 1; e += 1) {
                            if (t === data.k[e].t) {
                                r = e + 1,
                                i = data.k[e].t;
                                break
                            }
                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                i = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2,
                                data.k[e + 1].t) : (r = e + 1,
                                data.k[e].t);
                                break
                            }
                        }
                        -1 === r && (r = e + 1,
                        i = data.k[e].t)
                    }
                else
                    i = r = 0;
                var a = {};
                return a.index = r,
                a.time = i / elem.comp.globalData.frameRate,
                a
            }
            function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0])
                    throw new Error("The property has no keyframe at index " + t);
                t -= 1,
                e = {
                    time: data.k[t].t / elem.comp.globalData.frameRate,
                    value: []
                };
                var s = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                for (i = s.length,
                r = 0; r < i; r += 1)
                    e[r] = s[r],
                    e.value[r] = s[r];
                return e
            }
            function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate),
                t / e
            }
            function timeToFrames(t, e) {
                return t || 0 === t || (t = time),
                e || (e = elem.comp.globalData.frameRate),
                t * e
            }
            function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
            }
            function sourceRectAtTime() {
                return elem.sourceRectAtTime()
            }
            function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
            }
            function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
            }
            function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t,
                value = valueAtTime(time)
            }
            var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
            function executeExpression(t) {
                return value = t,
                _needsRandom && seedRandom(randSeed),
                this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex,
                textTotal = this.textTotal,
                selectorValue = this.selectorValue),
                thisLayer || (text = elem.layerInterface.text,
                thisLayer = elem.layerInterface,
                thisComp = elem.comp.compInterface,
                toWorld = thisLayer.toWorld.bind(thisLayer),
                fromWorld = thisLayer.fromWorld.bind(thisLayer),
                fromComp = thisLayer.fromComp.bind(thisLayer),
                toComp = thisLayer.toComp.bind(thisLayer),
                mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                fromCompToSurface = fromComp),
                transform || (transform = elem.layerInterface("ADBE Transform Group"),
                ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)),
                4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                effect || (effect = thisLayer(4)),
                (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface),
                time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                needsVelocity && (velocity = velocityAtTime(time)),
                expression_function(),
                this.frameExpressionId = elem.globalData.frameId,
                "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v),
                scoped_bm_rt)
            }
            return executeExpression
        }
        return ob.initiateExpression = initiateExpression,
        ob
    }()
      , expressionHelpers = {
        searchExpressions: function(t, e, r) {
            e.x && (r.k = !0,
            r.x = !0,
            r.initiateExpression = ExpressionManager.initiateExpression,
            r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
        },
        getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t)
              , r = this.getValueAtTime(t + -.01)
              , i = 0;
            if (e.length) {
                var s;
                for (s = 0; s < e.length; s += 1)
                    i += Math.pow(r[s] - e[s], 2);
                i = 100 * Math.sqrt(i)
            } else
                i = 0;
            return i
        },
        getVelocityAtTime: function(t) {
            if (void 0 !== this.vel)
                return this.vel;
            var e, r, i = this.getValueAtTime(t), s = this.getValueAtTime(t + -.001);
            if (i.length)
                for (e = createTypedArray("float32", i.length),
                r = 0; r < i.length; r += 1)
                    e[r] = (s[r] - i[r]) / -.001;
            else
                e = (s - i) / -.001;
            return e
        },
        getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate,
            (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0,
            this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime),
            this._cachingAtTime.lastFrame = t),
            this._cachingAtTime.value
        },
        getStaticValueAtTime: function() {
            return this.pv
        },
        setGroupProperty: function(t) {
            this.propertyGroup = t
        }
    };
    !function() {
        function o(t, e, r) {
            if (!this.k || !this.keyframes)
                return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
            if (h <= p)
                return this.pv;
            if (r ? s = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1),
            i = p - (s = l[l.length - 1 - e].t)),
            "pingpong" === t) {
                if (Math.floor((h - s) / i) % 2 != 0)
                    return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0)
            } else {
                if ("offset" === t) {
                    var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0)
                      , f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                      , c = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0)
                      , d = Math.floor((h - s) / i);
                    if (this.pv.length) {
                        for (n = (o = new Array(m.length)).length,
                        a = 0; a < n; a += 1)
                            o[a] = (f[a] - m[a]) * d + c[a];
                        return o
                    }
                    return (f - m) * d + c
                }
                if ("continue" === t) {
                    var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                      , y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (n = (o = new Array(u.length)).length,
                        a = 0; a < n; a += 1)
                            o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                        return o
                    }
                    return u + (h - p) / .001 * (u - y)
                }
            }
            return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0)
        }
        function h(t, e, r) {
            if (!this.k)
                return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
            if (p <= h)
                return this.pv;
            if (r ? s = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1),
            i = (s = l[e].t) - p),
            "pingpong" === t) {
                if (Math.floor((p - h) / i) % 2 == 0)
                    return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
            } else {
                if ("offset" === t) {
                    var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                      , f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0)
                      , c = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0)
                      , d = Math.floor((p - h) / i) + 1;
                    if (this.pv.length) {
                        for (n = (o = new Array(m.length)).length,
                        a = 0; a < n; a += 1)
                            o[a] = c[a] - (f[a] - m[a]) * d;
                        return o
                    }
                    return c - (f - m) * d
                }
                if ("continue" === t) {
                    var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                      , y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (n = (o = new Array(u.length)).length,
                        a = 0; a < n; a += 1)
                            o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001;
                        return o
                    }
                    return u + (u - y) * (p - h) / .001
                }
            }
            return this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0)
        }
        function l(t, e) {
            if (!this.k)
                return this.pv;
            if (t = .5 * (t || .4),
            (e = Math.floor(e || 5)) <= 1)
                return this.pv;
            var r, i, s = this.comp.renderedFrame / this.comp.globalData.frameRate, a = s - t, n = 1 < e ? (s + t - a) / (e - 1) : 1, o = 0, h = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e; ) {
                if (i = this.getValueAtTime(a + o * n),
                this.pv.length)
                    for (h = 0; h < this.pv.length; h += 1)
                        r[h] += i[h];
                else
                    r += i;
                o += 1
            }
            if (this.pv.length)
                for (h = 0; h < this.pv.length; h += 1)
                    r[h] /= e;
            else
                r /= e;
            return r
        }
        var s = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var i = s(t, e, r);
            return i.dynamicProperties.length ? i.getValueAtTime = function(t) {
                console.warn("Transform at time not supported")
            }
            .bind(i) : i.getValueAtTime = function(t) {}
            .bind(i),
            i.setGroupProperty = expressionHelpers.setGroupProperty,
            i
        }
        ;
        var p = PropertyFactory.getProp;
        PropertyFactory.getProp = function(t, e, r, i, s) {
            var a = p(t, e, r, i, s);
            a.kf ? a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a) : a.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(a),
            a.setGroupProperty = expressionHelpers.setGroupProperty,
            a.loopOut = o,
            a.loopIn = h,
            a.smooth = l,
            a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a),
            a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a),
            a.numKeys = 1 === e.a ? e.k.length : 0,
            a.propertyIndex = e.ix;
            var n = 0;
            return 0 !== r && (n = createTypedArray("float32", 1 === e.a ? e.k[0].s.length : e.k.length)),
            a._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: n
            },
            expressionHelpers.searchExpressions(t, e, a),
            a.k && s.addDynamicProperty(a),
            a
        }
        ;
        var t = ShapePropertyFactory.getConstructorFunction()
          , e = ShapePropertyFactory.getKeyframedConstructorFunction();
        function r() {}
        r.prototype = {
            vertices: function(t, e) {
                this.k && this.getValue();
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0));
                var i, s = r._length, a = r[t], n = r.v, o = createSizedArray(s);
                for (i = 0; i < s; i += 1)
                    o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
                return o
            },
            points: function(t) {
                return this.vertices("v", t)
            },
            inTangents: function(t) {
                return this.vertices("i", t)
            },
            outTangents: function(t) {
                return this.vertices("o", t)
            },
            isClosed: function() {
                return this.v.c
            },
            pointOnPath: function(t, e) {
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0)),
                this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                for (var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h; ) {
                    if (l + a[o].addedLength > n) {
                        var p = o
                          , m = r.c && o === h - 1 ? 0 : o + 1
                          , f = (n - l) / a[o].addedLength;
                        i = bez.getPointInSegment(r.v[p], r.v[m], r.o[p], r.i[m], f, a[o]);
                        break
                    }
                    l += a[o].addedLength,
                    o += 1
                }
                return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                i
            },
            vectorOnPath: function(t, e, r) {
                t = 1 == t ? this.v.c ? 0 : .999 : t;
                var i = this.pointOnPath(t, e)
                  , s = this.pointOnPath(t + .001, e)
                  , a = s[0] - i[0]
                  , n = s[1] - i[1]
                  , o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                return 0 === o ? [0, 0] : "tangent" === r ? [a / o, n / o] : [-n / o, a / o]
            },
            tangentOnPath: function(t, e) {
                return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
                return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
        },
        extendPrototype([r], t),
        extendPrototype([r], e),
        e.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
                shapeValue: shape_pool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame
            }),
            t *= this.elem.globalData.frameRate,
            (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0,
            this._cachingAtTime.lastTime = t,
            this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
            this._cachingAtTime.shapeValue
        }
        ,
        e.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var n = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(t, e, r, i, s) {
            var a = n(t, e, r, i, s);
            return a.propertyIndex = e.ix,
            a.lock = !1,
            3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a),
            a.k && t.addDynamicProperty(a),
            a
        }
    }(),
    TextProperty.prototype.getExpressionValue = function(t, e) {
        var r = this.calculateExpression(e);
        if (t.t === r)
            return t;
        var i = {};
        return this.copyData(i, t),
        i.t = r.toString(),
        i.__complete = !1,
        i
    }
    ,
    TextProperty.prototype.searchProperty = function() {
        var t = this.searchKeyframes()
          , e = this.searchExpressions();
        return this.kf = t || e,
        this.kf
    }
    ,
    TextProperty.prototype.searchExpressions = function() {
        if (this.data.d.x)
            return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
            this.addEffect(this.getExpressionValue.bind(this)),
            !0
    }
    ;
    var ShapeExpressionInterface = function() {
        function m(t, e, r) {
            var i, s = [], a = t ? t.length : 0;
            for (i = 0; i < a; i += 1)
                "gr" == t[i].ty ? s.push(n(t[i], e[i], r)) : "fl" == t[i].ty ? s.push(o(t[i], e[i], r)) : "st" == t[i].ty ? s.push(h(t[i], e[i], r)) : "tm" == t[i].ty ? s.push(l(t[i], e[i], r)) : "tr" == t[i].ty || ("el" == t[i].ty ? s.push(p(t[i], e[i], r)) : "sr" == t[i].ty ? s.push(f(t[i], e[i], r)) : "sh" == t[i].ty ? s.push(y(t[i], e[i], r)) : "rc" == t[i].ty ? s.push(c(t[i], e[i], r)) : "rd" == t[i].ty ? s.push(d(t[i], e[i], r)) : "rp" == t[i].ty && s.push(u(t[i], e[i], r)));
            return s
        }
        function n(t, e, r) {
            var i = function(t) {
                switch (t) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                    return i.content;
                default:
                    return i.transform
                }
            };
            i.propertyGroup = function(t) {
                return 1 === t ? i : r(t - 1)
            }
            ;
            var s, a, n, o, h, l = (s = t,
            a = e,
            n = i.propertyGroup,
            (h = function(t) {
                for (var e = 0, r = o.length; e < r; ) {
                    if (o[e]._name === t || o[e].mn === t || o[e].propertyIndex === t || o[e].ix === t || o[e].ind === t)
                        return o[e];
                    e += 1
                }
                if ("number" == typeof t)
                    return o[t - 1]
            }
            ).propertyGroup = function(t) {
                return 1 === t ? h : n(t - 1)
            }
            ,
            o = m(s.it, a.it, h.propertyGroup),
            h.numProperties = o.length,
            h.propertyIndex = s.cix,
            h._name = s.nm,
            h), p = function(e, t, r) {
                function i(t) {
                    return 1 == t ? s : r(--t)
                }
                t.transform.mProps.o.setGroupProperty(i),
                t.transform.mProps.p.setGroupProperty(i),
                t.transform.mProps.a.setGroupProperty(i),
                t.transform.mProps.s.setGroupProperty(i),
                t.transform.mProps.r.setGroupProperty(i),
                t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(i),
                t.transform.mProps.sa.setGroupProperty(i));
                function s(t) {
                    return e.a.ix === t || "Anchor Point" === t ? s.anchorPoint : e.o.ix === t || "Opacity" === t ? s.opacity : e.p.ix === t || "Position" === t ? s.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? s.rotation : e.s.ix === t || "Scale" === t ? s.scale : e.sk && e.sk.ix === t || "Skew" === t ? s.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? s.skewAxis : void 0
                }
                return t.transform.op.setGroupProperty(i),
                Object.defineProperties(s, {
                    opacity: {
                        get: ExpressionPropertyInterface(t.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(t.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(t.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(t.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(t.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(t.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(t.transform.mProps.sa)
                    },
                    _name: {
                        value: e.nm
                    }
                }),
                s.ty = "tr",
                s.mn = e.mn,
                s.propertyGroup = r,
                s
            }(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup);
            return i.content = l,
            i.transform = p,
            Object.defineProperty(i, "_name", {
                get: function() {
                    return t.nm
                }
            }),
            i.numProperties = t.np,
            i.propertyIndex = t.ix,
            i.nm = t.nm,
            i.mn = t.mn,
            i
        }
        function o(t, e, r) {
            function i(t) {
                return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0
            }
            return Object.defineProperties(i, {
                color: {
                    get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                    get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                    value: t.nm
                },
                mn: {
                    value: t.mn
                }
            }),
            e.c.setGroupProperty(r),
            e.o.setGroupProperty(r),
            i
        }
        function h(t, e, r) {
            function i(t) {
                return 1 === t ? ob : r(t - 1)
            }
            function s(t) {
                return 1 === t ? h : i(t - 1)
            }
            var a, n, o = t.d ? t.d.length : 0, h = {};
            for (a = 0; a < o; a += 1)
                n = a,
                Object.defineProperty(h, t.d[n].nm, {
                    get: ExpressionPropertyInterface(e.d.dataProps[n].p)
                }),
                e.d.dataProps[a].p.setGroupProperty(s);
            function l(t) {
                return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0
            }
            return Object.defineProperties(l, {
                color: {
                    get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                    get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                    get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                    get: function() {
                        return h
                    }
                },
                _name: {
                    value: t.nm
                },
                mn: {
                    value: t.mn
                }
            }),
            e.c.setGroupProperty(i),
            e.o.setGroupProperty(i),
            e.w.setGroupProperty(i),
            l
        }
        function l(e, t, r) {
            function i(t) {
                return 1 == t ? s : r(--t)
            }
            function s(t) {
                return t === e.e.ix || "End" === t || "end" === t ? s.end : t === e.s.ix ? s.start : t === e.o.ix ? s.offset : void 0
            }
            return s.propertyIndex = e.ix,
            t.s.setGroupProperty(i),
            t.e.setGroupProperty(i),
            t.o.setGroupProperty(i),
            s.propertyIndex = e.ix,
            s.propertyGroup = r,
            Object.defineProperties(s, {
                start: {
                    get: ExpressionPropertyInterface(t.s)
                },
                end: {
                    get: ExpressionPropertyInterface(t.e)
                },
                offset: {
                    get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                    value: e.nm
                }
            }),
            s.mn = e.mn,
            s
        }
        function p(e, t, r) {
            function i(t) {
                return 1 == t ? a : r(--t)
            }
            a.propertyIndex = e.ix;
            var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;
            function a(t) {
                return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0
            }
            return s.s.setGroupProperty(i),
            s.p.setGroupProperty(i),
            Object.defineProperties(a, {
                size: {
                    get: ExpressionPropertyInterface(s.s)
                },
                position: {
                    get: ExpressionPropertyInterface(s.p)
                },
                _name: {
                    value: e.nm
                }
            }),
            a.mn = e.mn,
            a
        }
        function f(e, t, r) {
            function i(t) {
                return 1 == t ? a : r(--t)
            }
            var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;
            function a(t) {
                return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius
            }
            return a.propertyIndex = e.ix,
            s.or.setGroupProperty(i),
            s.os.setGroupProperty(i),
            s.pt.setGroupProperty(i),
            s.p.setGroupProperty(i),
            s.r.setGroupProperty(i),
            e.ir && (s.ir.setGroupProperty(i),
            s.is.setGroupProperty(i)),
            Object.defineProperties(a, {
                position: {
                    get: ExpressionPropertyInterface(s.p)
                },
                rotation: {
                    get: ExpressionPropertyInterface(s.r)
                },
                points: {
                    get: ExpressionPropertyInterface(s.pt)
                },
                outerRadius: {
                    get: ExpressionPropertyInterface(s.or)
                },
                outerRoundness: {
                    get: ExpressionPropertyInterface(s.os)
                },
                innerRadius: {
                    get: ExpressionPropertyInterface(s.ir)
                },
                innerRoundness: {
                    get: ExpressionPropertyInterface(s.is)
                },
                _name: {
                    value: e.nm
                }
            }),
            a.mn = e.mn,
            a
        }
        function c(e, t, r) {
            function i(t) {
                return 1 == t ? a : r(--t)
            }
            var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;
            function a(t) {
                return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0
            }
            return a.propertyIndex = e.ix,
            s.p.setGroupProperty(i),
            s.s.setGroupProperty(i),
            s.r.setGroupProperty(i),
            Object.defineProperties(a, {
                position: {
                    get: ExpressionPropertyInterface(s.p)
                },
                roundness: {
                    get: ExpressionPropertyInterface(s.r)
                },
                size: {
                    get: ExpressionPropertyInterface(s.s)
                },
                _name: {
                    value: e.nm
                }
            }),
            a.mn = e.mn,
            a
        }
        function d(e, t, r) {
            var i = t;
            function s(t) {
                if (e.r.ix === t || "Round Corners 1" === t)
                    return s.radius
            }
            return s.propertyIndex = e.ix,
            i.rd.setGroupProperty(function(t) {
                return 1 == t ? s : r(--t)
            }),
            Object.defineProperties(s, {
                radius: {
                    get: ExpressionPropertyInterface(i.rd)
                },
                _name: {
                    value: e.nm
                }
            }),
            s.mn = e.mn,
            s
        }
        function u(e, t, r) {
            function i(t) {
                return 1 == t ? a : r(--t)
            }
            var s = t;
            function a(t) {
                return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0
            }
            return a.propertyIndex = e.ix,
            s.c.setGroupProperty(i),
            s.o.setGroupProperty(i),
            Object.defineProperties(a, {
                copies: {
                    get: ExpressionPropertyInterface(s.c)
                },
                offset: {
                    get: ExpressionPropertyInterface(s.o)
                },
                _name: {
                    value: e.nm
                }
            }),
            a.mn = e.mn,
            a
        }
        function y(t, e, r) {
            var i = e.sh;
            function s(t) {
                if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t)
                    return s.path
            }
            return i.setGroupProperty(function(t) {
                return 1 == t ? s : r(--t)
            }),
            Object.defineProperties(s, {
                path: {
                    get: function() {
                        return i.k && i.getValue(),
                        i
                    }
                },
                shape: {
                    get: function() {
                        return i.k && i.getValue(),
                        i
                    }
                },
                _name: {
                    value: t.nm
                },
                ix: {
                    value: t.ix
                },
                propertyIndex: {
                    value: t.ix
                },
                mn: {
                    value: t.mn
                }
            }),
            s
        }
        return function(t, e, r) {
            var i;
            function s(t) {
                if ("number" == typeof t)
                    return i[t - 1];
                for (var e = 0, r = i.length; e < r; ) {
                    if (i[e]._name === t)
                        return i[e];
                    e += 1
                }
            }
            return s.propertyGroup = r,
            i = m(t, e, s),
            s.numProperties = i.length,
            s
        }
    }(), TextExpressionInterface = function(e) {
        var r;
        function t() {}
        return Object.defineProperty(t, "sourceText", {
            get: function() {
                e.textProperty.getValue();
                var t = e.textProperty.currentData.t;
                return void 0 !== t && (e.textProperty.currentData.t = void 0,
                (r = new String(t)).value = t || new String(t)),
                r
            }
        }),
        t
    }, LayerExpressionInterface = function() {
        function s(t, e) {
            var r = new Matrix;
            if (r.reset(),
            this._elem.finalTransform.mProp.applyToMatrix(r),
            this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, s = this._elem.hierarchy.length;
                for (i = 0; i < s; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                return r.applyToPointArray(t[0], t[1], t[2] || 0)
            }
            return r.applyToPointArray(t[0], t[1], t[2] || 0)
        }
        function a(t, e) {
            var r = new Matrix;
            if (r.reset(),
            this._elem.finalTransform.mProp.applyToMatrix(r),
            this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, s = this._elem.hierarchy.length;
                for (i = 0; i < s; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                return r.inversePoint(t)
            }
            return r.inversePoint(t)
        }
        function n(t) {
            var e = new Matrix;
            if (e.reset(),
            this._elem.finalTransform.mProp.applyToMatrix(e),
            this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                    this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
            }
            return e.inversePoint(t)
        }
        function o() {
            return [1, 1, 1, 1]
        }
        return function(e) {
            var r;
            function i(t) {
                switch (t) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                    return i.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                    return r;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                    return i.effect
                }
            }
            i.toWorld = s,
            i.fromWorld = a,
            i.toComp = s,
            i.fromComp = n,
            i.sampleImage = o,
            i.sourceRectAtTime = e.sourceRectAtTime.bind(e);
            var t = getDescriptor(r = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint");
            return Object.defineProperties(i, {
                hasParent: {
                    get: function() {
                        return e.hierarchy.length
                    }
                },
                parent: {
                    get: function() {
                        return e.hierarchy[0].layerInterface
                    }
                },
                rotation: getDescriptor(r, "rotation"),
                scale: getDescriptor(r, "scale"),
                position: getDescriptor(r, "position"),
                opacity: getDescriptor(r, "opacity"),
                anchorPoint: t,
                anchor_point: t,
                transform: {
                    get: function() {
                        return r
                    }
                },
                active: {
                    get: function() {
                        return e.isInRange
                    }
                }
            }),
            i.startTime = e.data.st,
            i.index = e.data.ind,
            i.source = e.data.refId,
            i.height = 0 === e.data.ty ? e.data.h : 100,
            i.width = 0 === e.data.ty ? e.data.w : 100,
            i.inPoint = e.data.ip / e.comp.globalData.frameRate,
            i.outPoint = e.data.op / e.comp.globalData.frameRate,
            i._name = e.data.nm,
            i.registerMaskInterface = function(t) {
                i.mask = new MaskManagerInterface(t,e)
            }
            ,
            i.registerEffectsInterface = function(t) {
                i.effect = t
            }
            ,
            i
        }
    }(), CompExpressionInterface = function(i) {
        function t(t) {
            for (var e = 0, r = i.layers.length; e < r; ) {
                if (i.layers[e].nm === t || i.layers[e].ind === t)
                    return i.elements[e].layerInterface;
                e += 1
            }
            return null
        }
        return Object.defineProperty(t, "_name", {
            value: i.data.nm
        }),
        (t.layer = t).pixelAspect = 1,
        t.height = i.data.h || i.globalData.compSize.h,
        t.width = i.data.w || i.globalData.compSize.w,
        t.pixelAspect = 1,
        t.frameDuration = 1 / i.globalData.frameRate,
        t.displayStartTime = 0,
        t.numLayers = i.layers.length,
        t
    }, TransformExpressionInterface = function(t) {
        function e(t) {
            switch (t) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
                return e.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
                return e.rotation;
            case "ADBE Rotate X":
                return e.xRotation;
            case "ADBE Rotate Y":
                return e.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
                return e.position;
            case "ADBE Position_0":
                return e.xPosition;
            case "ADBE Position_1":
                return e.yPosition;
            case "ADBE Position_2":
                return e.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
                return e.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
                return e.opacity
            }
        }
        if (Object.defineProperty(e, "rotation", {
            get: ExpressionPropertyInterface(t.r || t.rz)
        }),
        Object.defineProperty(e, "zRotation", {
            get: ExpressionPropertyInterface(t.rz || t.r)
        }),
        Object.defineProperty(e, "xRotation", {
            get: ExpressionPropertyInterface(t.rx)
        }),
        Object.defineProperty(e, "yRotation", {
            get: ExpressionPropertyInterface(t.ry)
        }),
        Object.defineProperty(e, "scale", {
            get: ExpressionPropertyInterface(t.s)
        }),
        t.p)
            var r = ExpressionPropertyInterface(t.p);
        return Object.defineProperty(e, "position", {
            get: function() {
                return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
            }
        }),
        Object.defineProperty(e, "xPosition", {
            get: ExpressionPropertyInterface(t.px)
        }),
        Object.defineProperty(e, "yPosition", {
            get: ExpressionPropertyInterface(t.py)
        }),
        Object.defineProperty(e, "zPosition", {
            get: ExpressionPropertyInterface(t.pz)
        }),
        Object.defineProperty(e, "anchorPoint", {
            get: ExpressionPropertyInterface(t.a)
        }),
        Object.defineProperty(e, "opacity", {
            get: ExpressionPropertyInterface(t.o)
        }),
        Object.defineProperty(e, "skew", {
            get: ExpressionPropertyInterface(t.sk)
        }),
        Object.defineProperty(e, "skewAxis", {
            get: ExpressionPropertyInterface(t.sa)
        }),
        Object.defineProperty(e, "orientation", {
            get: ExpressionPropertyInterface(t.or)
        }),
        e
    }, ProjectInterface = function() {
        function e(t) {
            this.compositions.push(t)
        }
        return function() {
            function t(t) {
                for (var e = 0, r = this.compositions.length; e < r; ) {
                    if (this.compositions[e].data && this.compositions[e].data.nm === t)
                        return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame),
                        this.compositions[e].compInterface;
                    e += 1
                }
            }
            return t.compositions = [],
            t.currentFrame = 0,
            t.registerComposition = e,
            t
        }
    }(), EffectsExpressionInterface = function() {
        function l(s, t, e, r) {
            var i, a = [], n = s.ef.length;
            for (i = 0; i < n; i += 1)
                5 === s.ef[i].ty ? a.push(l(s.ef[i], t.effectElements[i], t.effectElements[i].propertyGroup, r)) : a.push(p(t.effectElements[i], s.ef[i].ty, r, o));
            function o(t) {
                return 1 === t ? h : e(t - 1)
            }
            var h = function(t) {
                for (var e = s.ef, r = 0, i = e.length; r < i; ) {
                    if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                        return 5 === e[r].ty ? a[r] : a[r]();
                    r += 1
                }
                return a[0]()
            };
            return h.propertyGroup = o,
            "ADBE Color Control" === s.mn && Object.defineProperty(h, "color", {
                get: function() {
                    return a[0]()
                }
            }),
            Object.defineProperty(h, "numProperties", {
                get: function() {
                    return s.np
                }
            }),
            h.active = h.enabled = 0 !== s.en,
            h
        }
        function p(t, e, r, i) {
            var s = ExpressionPropertyInterface(t.p);
            return t.p.setGroupProperty && t.p.setGroupProperty(i),
            function() {
                return 10 === e ? r.comp.compInterface(t.p.v) : s()
            }
        }
        return {
            createEffectsInterface: function(s, t) {
                if (s.effectsManager) {
                    var e, a = [], r = s.data.ef, i = s.effectsManager.effectElements.length;
                    for (e = 0; e < i; e += 1)
                        a.push(l(r[e], s.effectsManager.effectElements[e], t, s));
                    return function(t) {
                        for (var e = s.data.ef || [], r = 0, i = e.length; r < i; ) {
                            if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                                return a[r];
                            r += 1
                        }
                    }
                }
            }
        }
    }(), MaskManagerInterface = function() {
        function a(t, e) {
            this._mask = t,
            this._data = e
        }
        Object.defineProperty(a.prototype, "maskPath", {
            get: function() {
                return this._mask.prop.k && this._mask.prop.getValue(),
                this._mask.prop
            }
        }),
        Object.defineProperty(a.prototype, "maskOpacity", {
            get: function() {
                return this._mask.op.k && this._mask.op.getValue(),
                100 * this._mask.op.v
            }
        });
        return function(e, t) {
            var r, i = createSizedArray(e.viewData.length), s = e.viewData.length;
            for (r = 0; r < s; r += 1)
                i[r] = new a(e.viewData[r],e.masksProperties[r]);
            return function(t) {
                for (r = 0; r < s; ) {
                    if (e.masksProperties[r].nm === t)
                        return i[r];
                    r += 1
                }
            }
        }
    }(), ExpressionPropertyInterface = function() {
        var s = {
            pv: 0,
            v: 0,
            mult: 1
        }
          , n = {
            pv: [0, 0, 0],
            v: [0, 0, 0],
            mult: 1
        };
        function o(i, s, a) {
            Object.defineProperty(i, "velocity", {
                get: function() {
                    return s.getVelocityAtTime(s.comp.currentFrame)
                }
            }),
            i.numKeys = s.keyframes ? s.keyframes.length : 0,
            i.key = function(t) {
                if (i.numKeys) {
                    var e = "";
                    e = "s"in s.keyframes[t - 1] ? s.keyframes[t - 1].s : "e"in s.keyframes[t - 2] ? s.keyframes[t - 2].e : s.keyframes[t - 2].s;
                    var r = "unidimensional" === a ? new Number(e) : Object.assign({}, e);
                    return r.time = s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate,
                    r
                }
                return 0
            }
            ,
            i.valueAtTime = s.getValueAtTime,
            i.speedAtTime = s.getSpeedAtTime,
            i.velocityAtTime = s.getVelocityAtTime,
            i.propertyGroup = s.propertyGroup
        }
        function e() {
            return s
        }
        return function(t) {
            return t ? "unidimensional" === t.propType ? function(t) {
                t && "pv"in t || (t = s);
                var e = 1 / t.mult
                  , r = t.pv * e
                  , i = new Number(r);
                return i.value = r,
                o(i, t, "unidimensional"),
                function() {
                    return t.k && t.getValue(),
                    r = t.v * e,
                    i.value !== r && ((i = new Number(r)).value = r,
                    o(i, t, "unidimensional")),
                    i
                }
            }(t) : function(e) {
                e && "pv"in e || (e = n);
                var r = 1 / e.mult
                  , i = e.pv.length
                  , s = createTypedArray("float32", i)
                  , a = createTypedArray("float32", i);
                return s.value = a,
                o(s, e, "multidimensional"),
                function() {
                    e.k && e.getValue();
                    for (var t = 0; t < i; t += 1)
                        s[t] = a[t] = e.v[t] * r;
                    return s
                }
            }(t) : e
        }
    }(), r5, s5;
    function SliderEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }
    function AngleEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }
    function ColorEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
    }
    function PointEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
    }
    function LayerIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }
    function MaskIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }
    function CheckboxEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }
    function NoValueEffect() {
        this.p = {}
    }
    function EffectsManager() {}
    function EffectsManager(t, e) {
        var r = t.ef || [];
        this.effectElements = [];
        var i, s, a = r.length;
        for (i = 0; i < a; i++)
            s = new GroupEffect(r[i],e),
            this.effectElements.push(s)
    }
    function GroupEffect(t, e) {
        this.init(t, e)
    }
    r5 = function() {
        function r(t, e) {
            return this.textIndex = t + 1,
            this.textTotal = e,
            this.v = this.getValue() * this.mult,
            this.v
        }
        return function(t, e) {
            this.pv = 1,
            this.comp = t.comp,
            this.elem = t,
            this.mult = .01,
            this.propType = "textSelector",
            this.textTotal = e.totalChars,
            this.selectorValue = 100,
            this.lastValue = [1, 1, 1],
            this.k = !0,
            this.x = !0,
            this.getValue = ExpressionManager.initiateExpression.bind(this)(t, e, this),
            this.getMult = r,
            this.getVelocityAtTime = expressionHelpers.getVelocityAtTime,
            this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this),
            this.setGroupProperty = expressionHelpers.setGroupProperty
        }
    }(),
    s5 = TextSelectorProp.getTextSelectorProp,
    TextSelectorProp.getTextSelectorProp = function(t, e, r) {
        return 1 === e.t ? new r5(t,e,r) : s5(t, e, r)
    }
    ,
    extendPrototype([DynamicPropertyContainer], GroupEffect),
    GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
    GroupEffect.prototype.init = function(t, e) {
        this.data = t,
        this.effectElements = [],
        this.initDynamicPropertyContainer(e);
        var r, i, s = this.data.ef.length, a = this.data.ef;
        for (r = 0; r < s; r += 1) {
            switch (i = null,
            a[r].ty) {
            case 0:
                i = new SliderEffect(a[r],e,this);
                break;
            case 1:
                i = new AngleEffect(a[r],e,this);
                break;
            case 2:
                i = new ColorEffect(a[r],e,this);
                break;
            case 3:
                i = new PointEffect(a[r],e,this);
                break;
            case 4:
            case 7:
                i = new CheckboxEffect(a[r],e,this);
                break;
            case 10:
                i = new LayerIndexEffect(a[r],e,this);
                break;
            case 11:
                i = new MaskIndexEffect(a[r],e,this);
                break;
            case 5:
                i = new EffectsManager(a[r],e,this);
                break;
            default:
                i = new NoValueEffect(a[r],e,this)
            }
            i && this.effectElements.push(i)
        }
    }
    ;
    var lottie = {}
      , _isFrozen = !1;
    function setLocationHref(t) {
        locationHref = t
    }
    function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }
    function setSubframeRendering(t) {
        subframeEnabled = t
    }
    function loadAnimation(t) {
        return !0 === standalone && (t.animationData = JSON.parse(animationData)),
        animationManager.loadAnimation(t)
    }
    function setQuality(t) {
        if ("string" == typeof t)
            switch (t) {
            case "high":
                defaultCurveSegments = 200;
                break;
            case "medium":
                defaultCurveSegments = 50;
                break;
            case "low":
                defaultCurveSegments = 10
            }
        else
            !isNaN(t) && 1 < t && (defaultCurveSegments = t);
        roundValues(!(50 <= defaultCurveSegments))
    }
    function inBrowser() {
        return "undefined" != typeof navigator
    }
    function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e)
    }
    function getFactory(t) {
        switch (t) {
        case "propertyFactory":
            return PropertyFactory;
        case "shapePropertyFactory":
            return ShapePropertyFactory;
        case "matrix":
            return Matrix
        }
    }
    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval),
        searchAnimations())
    }
    function getQueryVariable(t) {
        for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t)
                return decodeURIComponent(i[1])
        }
    }
    lottie.play = animationManager.play,
    lottie.pause = animationManager.pause,
    lottie.setLocationHref = setLocationHref,
    lottie.togglePause = animationManager.togglePause,
    lottie.setSpeed = animationManager.setSpeed,
    lottie.setDirection = animationManager.setDirection,
    lottie.stop = animationManager.stop,
    lottie.searchAnimations = searchAnimations,
    lottie.registerAnimation = animationManager.registerAnimation,
    lottie.loadAnimation = loadAnimation,
    lottie.setSubframeRendering = setSubframeRendering,
    lottie.resize = animationManager.resize,
    lottie.goToAndStop = animationManager.goToAndStop,
    lottie.destroy = animationManager.destroy,
    lottie.setQuality = setQuality,
    lottie.inBrowser = inBrowser,
    lottie.installPlugin = installPlugin,
    lottie.freeze = animationManager.freeze,
    lottie.unfreeze = animationManager.unfreeze,
    lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
    lottie.__getFactory = getFactory,
    lottie.version = "5.6.8";
    var standalone = "__[STANDALONE]__"
      , animationData = "__[ANIMATIONDATA]__"
      , renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script")
          , index = scripts.length - 1
          , myScript = scripts[index] || {
            src: ""
        }
          , queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottie
}));
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    let e = t.prototype;
    return e.on = function(t, e) {
        if (!t || !e)
            return this;
        let i = this._events = this._events || {}
          , s = i[t] = i[t] || [];
        return s.includes(e) || s.push(e),
        this
    }
    ,
    e.once = function(t, e) {
        if (!t || !e)
            return this;
        this.on(t, e);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0,
        this
    }
    ,
    e.off = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length)
            return this;
        let s = i.indexOf(e);
        return -1 != s && i.splice(s, 1),
        this
    }
    ,
    e.emitEvent = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length)
            return this;
        i = i.slice(0),
        e = e || [];
        let s = this._onceEvents && this._onceEvents[t];
        for (let n of i) {
            s && s[n] && (this.off(t, n),
            delete s[n]),
            n.apply(this, e)
        }
        return this
    }
    ,
    e.allOff = function() {
        return delete this._events,
        delete this._onceEvents,
        this
    }
    ,
    t
}
)),
/*!
     * imagesLoaded v5.0.0
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
    let i = t.jQuery
      , s = t.console;
    function n(t, e, o) {
        if (!(this instanceof n))
            return new n(t,e,o);
        let r = t;
        var h;
        ("string" == typeof t && (r = document.querySelectorAll(t)),
        r) ? (this.elements = (h = r,
        Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? [...h] : [h]),
        this.options = {},
        "function" == typeof e ? o = e : Object.assign(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        i && (this.jqDeferred = new i.Deferred),
        setTimeout(this.check.bind(this))) : s.error(`Bad element for imagesLoaded ${r || t}`)
    }
    n.prototype = Object.create(e.prototype),
    n.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ;
    const o = [1, 9, 11];
    n.prototype.addElementImages = function(t) {
        "IMG" === t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        let {nodeType: e} = t;
        if (!e || !o.includes(e))
            return;
        let i = t.querySelectorAll("img");
        for (let t of i)
            this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e)
                this.addElementBackgroundImages(t)
        }
    }
    ;
    const r = /url\((['"])?(.*?)\1\)/gi;
    function h(t) {
        this.img = t
    }
    function d(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    return n.prototype.addElementBackgroundImages = function(t) {
        let e = getComputedStyle(t);
        if (!e)
            return;
        let i = r.exec(e.backgroundImage);
        for (; null !== i; ) {
            let s = i && i[2];
            s && this.addBackground(s, t),
            i = r.exec(e.backgroundImage)
        }
    }
    ,
    n.prototype.addImage = function(t) {
        let e = new h(t);
        this.images.push(e)
    }
    ,
    n.prototype.addBackground = function(t, e) {
        let i = new d(t,e);
        this.images.push(i)
    }
    ,
    n.prototype.check = function() {
        if (this.progressedCount = 0,
        this.hasAnyBroken = !1,
        !this.images.length)
            return void this.complete();
        let t = (t,e,i)=>{
            setTimeout((()=>{
                this.progress(t, e, i)
            }
            ))
        }
        ;
        this.images.forEach((function(e) {
            e.once("progress", t),
            e.check()
        }
        ))
    }
    ,
    n.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount === this.images.length && this.complete(),
        this.options.debug && s && s.log(`progress: ${i}`, t, e)
    }
    ,
    n.prototype.complete = function() {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    h.prototype = Object.create(e.prototype),
    h.prototype.check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin),
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.proxyImage.src = this.img.currentSrc || this.img.src)
    }
    ,
    h.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    h.prototype.confirm = function(t, e) {
        this.isLoaded = t;
        let {parentNode: i} = this.img
          , s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e])
    }
    ,
    h.prototype.handleEvent = function(t) {
        let e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    h.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    h.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    h.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    d.prototype = Object.create(h.prototype),
    d.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    d.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    d.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (i = e,
        i.fn.imagesLoaded = function(t, e) {
            return new n(this,t,e).jqDeferred.promise(i(this))
        }
        )
    }
    ,
    n.makeJQueryPlugin(),
    n
}
));
/*! SmartMenus jQuery Plugin - v1.2.1 - November 3, 2022
 * http://www.smartmenus.org/
 * Copyright Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && "object" == typeof module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(b) {
        var i = ".smartmenus_mouse";
        if (h || b)
            h && b && (a(document).off(i),
            h = !1);
        else {
            var j = !0
              , k = null
              , l = {
                mousemove: function(b) {
                    var c = {
                        x: b.pageX,
                        y: b.pageY,
                        timeStamp: (new Date).getTime()
                    };
                    if (k) {
                        var d = Math.abs(k.x - c.x)
                          , g = Math.abs(k.y - c.y);
                        if ((d > 0 || g > 0) && d <= 4 && g <= 4 && c.timeStamp - k.timeStamp <= 300 && (f = !0,
                        j)) {
                            var h = a(b.target).closest("a");
                            h.is("a") && a.each(e, function() {
                                if (a.contains(this.$root[0], h[0]))
                                    return this.itemEnter({
                                        currentTarget: h[0]
                                    }),
                                    !1
                            }),
                            j = !1
                        }
                    }
                    k = c
                }
            };
            l[g ? "touchstart" : "pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut"] = function(a) {
                c(a.originalEvent) && (f = !1)
            }
            ,
            a(document).on(d(l, i)),
            h = !0
        }
    }
    function c(a) {
        return !/^(4|mouse)$/.test(a.pointerType)
    }
    function d(a, b) {
        b || (b = "");
        var c = {};
        for (var d in a)
            c[d.split(" ").join(b + " ") + b] = a[d];
        return c
    }
    var e = []
      , f = !1
      , g = "ontouchstart"in window
      , h = !1
      , i = window.requestAnimationFrame || function(a) {
        return setTimeout(a, 1e3 / 60)
    }
      , j = window.cancelAnimationFrame || function(a) {
        clearTimeout(a)
    }
      , k = !!a.fn.animate;
    return a.SmartMenus = function(b, c) {
        this.$root = a(b),
        this.opts = c,
        this.rootId = "",
        this.accessIdPrefix = "",
        this.$subArrow = null,
        this.activatedItems = [],
        this.visibleSubMenus = [],
        this.showTimeout = 0,
        this.hideTimeout = 0,
        this.scrollTimeout = 0,
        this.clickActivated = !1,
        this.focusActivated = !1,
        this.zIndexInc = 0,
        this.idInc = 0,
        this.$firstLink = null,
        this.$firstSub = null,
        this.disabled = !1,
        this.$disableOverlay = null,
        this.$touchScrollingSub = null,
        this.cssTransforms3d = "perspective"in b.style || "webkitPerspective"in b.style,
        this.wasCollapsible = !1,
        this.init()
    }
    ,
    a.extend(a.SmartMenus, {
        hideAll: function() {
            a.each(e, function() {
                this.menuHideAll()
            })
        },
        destroy: function() {
            for (; e.length; )
                e[0].destroy();
            b(!0)
        },
        prototype: {
            init: function(c) {
                var f = this;
                if (!c) {
                    e.push(this),
                    this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, ""),
                    this.accessIdPrefix = "sm-" + this.rootId + "-",
                    this.$root.hasClass("sm-rtl") && (this.opts.rightToLeftSubMenus = !0);
                    var g = ".smartmenus";
                    this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).on(d({
                        "mouseover focusin": a.proxy(this.rootOver, this),
                        "mouseout focusout": a.proxy(this.rootOut, this),
                        keydown: a.proxy(this.rootKeyDown, this)
                    }, g)).on(d({
                        mouseenter: a.proxy(this.itemEnter, this),
                        mouseleave: a.proxy(this.itemLeave, this),
                        mousedown: a.proxy(this.itemDown, this),
                        focus: a.proxy(this.itemFocus, this),
                        blur: a.proxy(this.itemBlur, this),
                        click: a.proxy(this.itemClick, this)
                    }, g), "a"),
                    g += this.rootId,
                    this.opts.hideOnClick && a(document).on(d({
                        touchstart: a.proxy(this.docTouchStart, this),
                        touchmove: a.proxy(this.docTouchMove, this),
                        touchend: a.proxy(this.docTouchEnd, this),
                        click: a.proxy(this.docClick, this)
                    }, g)),
                    a(window).on(d({
                        "resize orientationchange": a.proxy(this.winResize, this)
                    }, g)),
                    this.opts.subIndicators && (this.$subArrow = a("<span/>").addClass("sub-arrow"),
                    this.opts.subIndicatorsText && this.$subArrow.html(this.opts.subIndicatorsText)),
                    b()
                }
                if (this.$firstSub = this.$root.find("ul").each(function() {
                    f.menuInit(a(this))
                }).eq(0),
                this.$firstLink = this.$root.find("a").eq(0),
                this.opts.markCurrentItem) {
                    var h = /(index|default)\.[^#\?\/]*/i
                      , i = /#.*/
                      , j = window.location.href.replace(h, "")
                      , k = j.replace(i, "");
                    this.$root.find("a:not(.mega-menu a)").each(function() {
                        var b = this.href.replace(h, "")
                          , c = a(this);
                        b != j && b != k || (c.addClass("current"),
                        f.opts.markCurrentTree && c.parentsUntil("[data-smartmenus-id]", "ul").each(function() {
                            a(this).dataSM("parent-a").addClass("current")
                        }))
                    })
                }
                this.wasCollapsible = this.isCollapsible()
            },
            destroy: function(b) {
                if (!b) {
                    var c = ".smartmenus";
                    this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").off(c),
                    c += this.rootId,
                    a(document).off(c),
                    a(window).off(c),
                    this.opts.subIndicators && (this.$subArrow = null)
                }
                this.menuHideAll();
                var d = this;
                this.$root.find("ul").each(function() {
                    var b = a(this);
                    b.dataSM("scroll-arrows") && b.dataSM("scroll-arrows").remove(),
                    b.dataSM("shown-before") && ((d.opts.subMenusMinWidth || d.opts.subMenusMaxWidth) && b.css({
                        width: "",
                        minWidth: "",
                        maxWidth: ""
                    }).removeClass("sm-nowrap"),
                    b.dataSM("scroll-arrows") && b.dataSM("scroll-arrows").remove(),
                    b.css({
                        zIndex: "",
                        top: "",
                        left: "",
                        marginLeft: "",
                        marginTop: "",
                        display: ""
                    })),
                    0 == (b.attr("id") || "").indexOf(d.accessIdPrefix) && b.removeAttr("id")
                }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"),
                this.$root.find("a.has-submenu").each(function() {
                    var b = a(this);
                    0 == b.attr("id").indexOf(d.accessIdPrefix) && b.removeAttr("id")
                }).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"),
                this.opts.subIndicators && this.$root.find("span.sub-arrow").remove(),
                this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"),
                b || (this.$root = null,
                this.$firstLink = null,
                this.$firstSub = null,
                this.$disableOverlay && (this.$disableOverlay.remove(),
                this.$disableOverlay = null),
                e.splice(a.inArray(this, e), 1))
            },
            disable: function(b) {
                if (!this.disabled) {
                    if (this.menuHideAll(),
                    !b && !this.opts.isPopup && this.$root.is(":visible")) {
                        var c = this.$root.offset();
                        this.$disableOverlay = a('<div class="sm-jquery-disable-overlay"/>').css({
                            position: "absolute",
                            top: c.top,
                            left: c.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight(),
                            zIndex: this.getStartZIndex(!0),
                            opacity: 0
                        }).appendTo(document.body)
                    }
                    this.disabled = !0
                }
            },
            docClick: function(b) {
                return this.$touchScrollingSub ? void (this.$touchScrollingSub = null) : void ((this.visibleSubMenus.length && !a.contains(this.$root[0], b.target) || a(b.target).closest("a").length) && this.menuHideAll())
            },
            docTouchEnd: function(b) {
                if (this.lastTouch) {
                    if (this.visibleSubMenus.length && (void 0 === this.lastTouch.x2 || this.lastTouch.x1 == this.lastTouch.x2) && (void 0 === this.lastTouch.y2 || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !a.contains(this.$root[0], this.lastTouch.target))) {
                        this.hideTimeout && (clearTimeout(this.hideTimeout),
                        this.hideTimeout = 0);
                        var c = this;
                        this.hideTimeout = setTimeout(function() {
                            c.menuHideAll()
                        }, 350)
                    }
                    this.lastTouch = null
                }
            },
            docTouchMove: function(a) {
                if (this.lastTouch) {
                    var b = a.originalEvent.touches[0];
                    this.lastTouch.x2 = b.pageX,
                    this.lastTouch.y2 = b.pageY
                }
            },
            docTouchStart: function(a) {
                var b = a.originalEvent.touches[0];
                this.lastTouch = {
                    x1: b.pageX,
                    y1: b.pageY,
                    target: b.target
                }
            },
            enable: function() {
                this.disabled && (this.$disableOverlay && (this.$disableOverlay.remove(),
                this.$disableOverlay = null),
                this.disabled = !1)
            },
            getClosestMenu: function(b) {
                for (var c = a(b).closest("ul"); c.dataSM("in-mega"); )
                    c = c.parent().closest("ul");
                return c[0] || null
            },
            getHeight: function(a) {
                return this.getOffset(a, !0)
            },
            getOffset: function(a, b) {
                var c;
                "none" == a.css("display") && (c = {
                    position: a[0].style.position,
                    visibility: a[0].style.visibility
                },
                a.css({
                    position: "absolute",
                    visibility: "hidden"
                }).show());
                var d = a[0].getBoundingClientRect && a[0].getBoundingClientRect()
                  , e = d && (b ? d.height || d.bottom - d.top : d.width || d.right - d.left);
                return e || 0 === e || (e = b ? a[0].offsetHeight : a[0].offsetWidth),
                c && a.hide().css(c),
                e
            },
            getStartZIndex: function(a) {
                var b = parseInt(this[a ? "$root" : "$firstSub"].css("z-index"));
                return !a && isNaN(b) && (b = parseInt(this.$root.css("z-index"))),
                isNaN(b) ? 1 : b
            },
            getTouchPoint: function(a) {
                return a.touches && a.touches[0] || a.changedTouches && a.changedTouches[0] || a
            },
            getViewport: function(a) {
                var b = a ? "Height" : "Width"
                  , c = document.documentElement["client" + b]
                  , d = window["inner" + b];
                return d && (c = Math.min(c, d)),
                c
            },
            getViewportHeight: function() {
                return this.getViewport(!0)
            },
            getViewportWidth: function() {
                return this.getViewport()
            },
            getWidth: function(a) {
                return this.getOffset(a)
            },
            handleEvents: function() {
                return !this.disabled && this.isCSSOn()
            },
            handleItemEvents: function(a) {
                return this.handleEvents() && !this.isLinkInMegaMenu(a)
            },
            isCollapsible: function() {
                return "static" == this.$firstSub.css("position")
            },
            isCSSOn: function() {
                return "inline" != this.$firstLink.css("display")
            },
            isFixed: function() {
                var b = "fixed" == this.$root.css("position");
                return b || this.$root.parentsUntil("body").each(function() {
                    if ("fixed" == a(this).css("position"))
                        return b = !0,
                        !1
                }),
                b
            },
            isLinkInMegaMenu: function(b) {
                return a(this.getClosestMenu(b[0])).hasClass("mega-menu")
            },
            isTouchMode: function() {
                return !f || this.opts.noMouseOver || this.isCollapsible()
            },
            itemActivate: function(b, c) {
                var d = b.closest("ul")
                  , e = d.dataSM("level");
                if (e > 1 && (!this.activatedItems[e - 2] || this.activatedItems[e - 2][0] != d.dataSM("parent-a")[0])) {
                    var f = this;
                    a(d.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(d).each(function() {
                        f.itemActivate(a(this).dataSM("parent-a"))
                    })
                }
                if (this.isCollapsible() && !c || this.menuHideSubMenus(this.activatedItems[e - 1] && this.activatedItems[e - 1][0] == b[0] ? e : e - 1),
                this.activatedItems[e - 1] = b,
                this.$root.triggerHandler("activate.smapi", b[0]) !== !1) {
                    var g = b.dataSM("sub");
                    g && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated) && this.menuShow(g)
                }
            },
            itemBlur: function(b) {
                var c = a(b.currentTarget);
                this.handleItemEvents(c) && this.$root.triggerHandler("blur.smapi", c[0])
            },
            itemClick: function(b) {
                var c = a(b.currentTarget);
                if (this.handleItemEvents(c)) {
                    if (this.$touchScrollingSub && this.$touchScrollingSub[0] == c.closest("ul")[0])
                        return this.$touchScrollingSub = null,
                        b.stopPropagation(),
                        !1;
                    if (this.$root.triggerHandler("click.smapi", c[0]) === !1)
                        return !1;
                    var d = c.dataSM("sub")
                      , e = !!d && 2 == d.dataSM("level");
                    if (d) {
                        var f = a(b.target).is(".sub-arrow")
                          , g = this.isCollapsible()
                          , h = /toggle$/.test(this.opts.collapsibleBehavior)
                          , i = /link$/.test(this.opts.collapsibleBehavior)
                          , j = /^accordion/.test(this.opts.collapsibleBehavior);
                        if (d.is(":visible")) {
                            if (!g && this.opts.showOnClick && e)
                                return this.menuHide(d),
                                this.clickActivated = !1,
                                this.focusActivated = !1,
                                !1;
                            if (g && (h || f))
                                return this.itemActivate(c, j),
                                this.menuHide(d),
                                !1
                        } else if ((!i || !g || f) && (!g && this.opts.showOnClick && e && (this.clickActivated = !0),
                        this.itemActivate(c, j),
                        d.is(":visible")))
                            return this.focusActivated = !0,
                            !1
                    }
                    return !(!g && this.opts.showOnClick && e || c.hasClass("disabled") || this.$root.triggerHandler("select.smapi", c[0]) === !1) && void 0
                }
            },
            itemDown: function(b) {
                var c = a(b.currentTarget);
                this.handleItemEvents(c) && c.dataSM("mousedown", !0)
            },
            itemEnter: function(b) {
                var c = a(b.currentTarget);
                if (this.handleItemEvents(c)) {
                    if (!this.isTouchMode()) {
                        this.showTimeout && (clearTimeout(this.showTimeout),
                        this.showTimeout = 0);
                        var d = this;
                        this.showTimeout = setTimeout(function() {
                            d.itemActivate(c)
                        }, this.opts.showOnClick && 1 == c.closest("ul").dataSM("level") ? 1 : this.opts.showTimeout)
                    }
                    this.$root.triggerHandler("mouseenter.smapi", c[0])
                }
            },
            itemFocus: function(b) {
                var c = a(b.currentTarget);
                this.handleItemEvents(c) && (!this.focusActivated || this.isTouchMode() && c.dataSM("mousedown") || this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0] == c[0] || this.itemActivate(c, !0),
                this.$root.triggerHandler("focus.smapi", c[0]))
            },
            itemLeave: function(b) {
                var c = a(b.currentTarget);
                this.handleItemEvents(c) && (this.isTouchMode() || (c[0].blur(),
                this.showTimeout && (clearTimeout(this.showTimeout),
                this.showTimeout = 0)),
                c.removeDataSM("mousedown"),
                this.$root.triggerHandler("mouseleave.smapi", c[0]))
            },
            menuHide: function(b) {
                if (this.$root.triggerHandler("beforehide.smapi", b[0]) !== !1 && (k && b.stop(!0, !0),
                "none" != b.css("display"))) {
                    var c = function() {
                        b.css("z-index", "")
                    };
                    this.isCollapsible() ? k && this.opts.collapsibleHideFunction ? this.opts.collapsibleHideFunction.call(this, b, c) : b.hide(this.opts.collapsibleHideDuration, c) : k && this.opts.hideFunction ? this.opts.hideFunction.call(this, b, c) : b.hide(this.opts.hideDuration, c),
                    b.dataSM("scroll") && (this.menuScrollStop(b),
                    b.css({
                        "touch-action": "",
                        "-ms-touch-action": "",
                        "-webkit-transform": "",
                        transform: ""
                    }).off(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()),
                    b.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded", "false"),
                    b.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    });
                    var d = b.dataSM("level");
                    this.activatedItems.splice(d - 1, 1),
                    this.visibleSubMenus.splice(a.inArray(b, this.visibleSubMenus), 1),
                    this.$root.triggerHandler("hide.smapi", b[0])
                }
            },
            menuHideAll: function() {
                this.showTimeout && (clearTimeout(this.showTimeout),
                this.showTimeout = 0);
                for (var a = this.opts.isPopup ? 1 : 0, b = this.visibleSubMenus.length - 1; b >= a; b--)
                    this.menuHide(this.visibleSubMenus[b]);
                this.opts.isPopup && (k && this.$root.stop(!0, !0),
                this.$root.is(":visible") && (k && this.opts.hideFunction ? this.opts.hideFunction.call(this, this.$root) : this.$root.hide(this.opts.hideDuration))),
                this.activatedItems = [],
                this.visibleSubMenus = [],
                this.clickActivated = !1,
                this.focusActivated = !1,
                this.zIndexInc = 0,
                this.$root.triggerHandler("hideAll.smapi")
            },
            menuHideSubMenus: function(a) {
                for (var b = this.activatedItems.length - 1; b >= a; b--) {
                    var c = this.activatedItems[b].dataSM("sub");
                    c && this.menuHide(c)
                }
            },
            menuInit: function(a) {
                if (!a.dataSM("in-mega")) {
                    a.hasClass("mega-menu") && a.find("ul").dataSM("in-mega", !0);
                    for (var b = 2, c = a[0]; (c = c.parentNode.parentNode) != this.$root[0]; )
                        b++;
                    var d = a.prevAll("a").eq(-1);
                    d.length || (d = a.prevAll().find("a").eq(-1)),
                    d.addClass("has-submenu").dataSM("sub", a),
                    a.dataSM("parent-a", d).dataSM("level", b).parent().dataSM("sub", a);
                    var e = d.attr("id") || this.accessIdPrefix + ++this.idInc
                      , f = a.attr("id") || this.accessIdPrefix + ++this.idInc;
                    d.attr({
                        id: e,
                        "aria-haspopup": "true",
                        "aria-controls": f,
                        "aria-expanded": "false"
                    }),
                    a.attr({
                        id: f,
                        role: "group",
                        "aria-hidden": "true",
                        "aria-labelledby": e,
                        "aria-expanded": "false"
                    }),
                    this.opts.subIndicators && d[this.opts.subIndicatorsPos](this.$subArrow.clone())
                }
            },
            menuPosition: function(b) {
                var c, e, f = b.dataSM("parent-a"), h = f.closest("li"), i = h.parent(), j = b.dataSM("level"), k = this.getWidth(b), l = this.getHeight(b), m = f.offset(), n = m.left, o = m.top, p = this.getWidth(f), q = this.getHeight(f), r = a(window), s = r.scrollLeft(), t = r.scrollTop(), u = this.getViewportWidth(), v = this.getViewportHeight(), w = i.parent().is("[data-sm-horizontal-sub]") || 2 == j && !i.hasClass("sm-vertical"), x = this.opts.rightToLeftSubMenus && !h.is("[data-sm-reverse]") || !this.opts.rightToLeftSubMenus && h.is("[data-sm-reverse]"), y = 2 == j ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX, z = 2 == j ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY;
                if (w ? (c = x ? p - k - y : y,
                e = this.opts.bottomToTopSubMenus ? -l - z : q + z) : (c = x ? y - k : p - y,
                e = this.opts.bottomToTopSubMenus ? q - z - l : z),
                this.opts.keepInViewport) {
                    var A = n + c
                      , B = o + e;
                    if (x && A < s ? c = w ? s - A + c : p - y : !x && A + k > s + u && (c = w ? s + u - k - A + c : y - k),
                    w || (l < v && B + l > t + v ? e += t + v - l - B : (l >= v || B < t) && (e += t - B)),
                    w && (B + l > t + v + .49 || B < t) || !w && l > v + .49) {
                        var C = this;
                        b.dataSM("scroll-arrows") || b.dataSM("scroll-arrows", a([a('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], a('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).on({
                            mouseenter: function() {
                                b.dataSM("scroll").up = a(this).hasClass("scroll-up"),
                                C.menuScroll(b)
                            },
                            mouseleave: function(a) {
                                C.menuScrollStop(b),
                                C.menuScrollOut(b, a)
                            },
                            "mousewheel DOMMouseScroll": function(a) {
                                a.preventDefault()
                            }
                        }).insertAfter(b));
                        var D = ".smartmenus_scroll";
                        if (b.dataSM("scroll", {
                            y: this.cssTransforms3d ? 0 : e - q,
                            step: 1,
                            itemH: q,
                            subH: l,
                            arrowDownH: this.getHeight(b.dataSM("scroll-arrows").eq(1))
                        }).on(d({
                            mouseover: function(a) {
                                C.menuScrollOver(b, a)
                            },
                            mouseout: function(a) {
                                C.menuScrollOut(b, a)
                            },
                            "mousewheel DOMMouseScroll": function(a) {
                                C.menuScrollMousewheel(b, a)
                            }
                        }, D)).dataSM("scroll-arrows").css({
                            top: "auto",
                            left: "0",
                            marginLeft: c + (parseInt(b.css("border-left-width")) || 0),
                            width: k - (parseInt(b.css("border-left-width")) || 0) - (parseInt(b.css("border-right-width")) || 0),
                            zIndex: b.css("z-index")
                        }).eq(w && this.opts.bottomToTopSubMenus ? 0 : 1).show(),
                        this.isFixed()) {
                            var E = {};
                            E[g ? "touchstart touchmove touchend" : "pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp"] = function(a) {
                                C.menuScrollTouch(b, a)
                            }
                            ,
                            b.css({
                                "touch-action": "none",
                                "-ms-touch-action": "none"
                            }).on(d(E, D))
                        }
                    }
                }
                b.css({
                    top: "auto",
                    left: "0",
                    marginLeft: c,
                    marginTop: e - q
                })
            },
            menuScroll: function(a, b, c) {
                var d, e = a.dataSM("scroll"), g = a.dataSM("scroll-arrows"), h = e.up ? e.upEnd : e.downEnd;
                if (!b && e.momentum) {
                    if (e.momentum *= .92,
                    d = e.momentum,
                    d < .5)
                        return void this.menuScrollStop(a)
                } else
                    d = c || (b || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(e.step));
                var j = a.dataSM("level");
                if (this.activatedItems[j - 1] && this.activatedItems[j - 1].dataSM("sub") && this.activatedItems[j - 1].dataSM("sub").is(":visible") && this.menuHideSubMenus(j - 1),
                e.y = e.up && h <= e.y || !e.up && h >= e.y ? e.y : Math.abs(h - e.y) > d ? e.y + (e.up ? d : -d) : h,
                a.css(this.cssTransforms3d ? {
                    "-webkit-transform": "translate3d(0, " + e.y + "px, 0)",
                    transform: "translate3d(0, " + e.y + "px, 0)"
                } : {
                    marginTop: e.y
                }),
                f && (e.up && e.y > e.downEnd || !e.up && e.y < e.upEnd) && g.eq(e.up ? 1 : 0).show(),
                e.y == h)
                    f && g.eq(e.up ? 0 : 1).hide(),
                    this.menuScrollStop(a);
                else if (!b) {
                    this.opts.scrollAccelerate && e.step < this.opts.scrollStep && (e.step += .2);
                    var k = this;
                    this.scrollTimeout = i(function() {
                        k.menuScroll(a)
                    })
                }
            },
            menuScrollMousewheel: function(a, b) {
                if (this.getClosestMenu(b.target) == a[0]) {
                    b = b.originalEvent;
                    var c = (b.wheelDelta || -b.detail) > 0;
                    a.dataSM("scroll-arrows").eq(c ? 0 : 1).is(":visible") && (a.dataSM("scroll").up = c,
                    this.menuScroll(a, !0))
                }
                b.preventDefault()
            },
            menuScrollOut: function(b, c) {
                f && (/^scroll-(up|down)/.test((c.relatedTarget || "").className) || (b[0] == c.relatedTarget || a.contains(b[0], c.relatedTarget)) && this.getClosestMenu(c.relatedTarget) == b[0] || b.dataSM("scroll-arrows").css("visibility", "hidden"))
            },
            menuScrollOver: function(b, c) {
                if (f && !/^scroll-(up|down)/.test(c.target.className) && this.getClosestMenu(c.target) == b[0]) {
                    this.menuScrollRefreshData(b);
                    var d = b.dataSM("scroll")
                      , e = a(window).scrollTop() - b.dataSM("parent-a").offset().top - d.itemH;
                    b.dataSM("scroll-arrows").eq(0).css("margin-top", e).end().eq(1).css("margin-top", e + this.getViewportHeight() - d.arrowDownH).end().css("visibility", "visible")
                }
            },
            menuScrollRefreshData: function(b) {
                var c = b.dataSM("scroll")
                  , d = a(window).scrollTop() - b.dataSM("parent-a").offset().top - c.itemH;
                this.cssTransforms3d && (d = -(parseFloat(b.css("margin-top")) - d)),
                a.extend(c, {
                    upEnd: d,
                    downEnd: d + this.getViewportHeight() - c.subH
                })
            },
            menuScrollStop: function(a) {
                if (this.scrollTimeout)
                    return j(this.scrollTimeout),
                    this.scrollTimeout = 0,
                    a.dataSM("scroll").step = 1,
                    !0
            },
            menuScrollTouch: function(b, d) {
                if (d = d.originalEvent,
                c(d)) {
                    var e = this.getTouchPoint(d);
                    if (this.getClosestMenu(e.target) == b[0]) {
                        var f = b.dataSM("scroll");
                        if (/(start|down)$/i.test(d.type))
                            this.menuScrollStop(b) ? (d.preventDefault(),
                            this.$touchScrollingSub = b) : this.$touchScrollingSub = null,
                            this.menuScrollRefreshData(b),
                            a.extend(f, {
                                touchStartY: e.pageY,
                                touchStartTime: d.timeStamp
                            });
                        else if (/move$/i.test(d.type)) {
                            var g = void 0 !== f.touchY ? f.touchY : f.touchStartY;
                            if (void 0 !== g && g != e.pageY) {
                                this.$touchScrollingSub = b;
                                var h = g < e.pageY;
                                void 0 !== f.up && f.up != h && a.extend(f, {
                                    touchStartY: e.pageY,
                                    touchStartTime: d.timeStamp
                                }),
                                a.extend(f, {
                                    up: h,
                                    touchY: e.pageY
                                }),
                                this.menuScroll(b, !0, Math.abs(e.pageY - g))
                            }
                            d.preventDefault()
                        } else
                            void 0 !== f.touchY && ((f.momentum = 15 * Math.pow(Math.abs(e.pageY - f.touchStartY) / (d.timeStamp - f.touchStartTime), 2)) && (this.menuScrollStop(b),
                            this.menuScroll(b),
                            d.preventDefault()),
                            delete f.touchY)
                    }
                }
            },
            menuShow: function(a) {
                if ((a.dataSM("beforefirstshowfired") || (a.dataSM("beforefirstshowfired", !0),
                this.$root.triggerHandler("beforefirstshow.smapi", a[0]) !== !1)) && this.$root.triggerHandler("beforeshow.smapi", a[0]) !== !1 && (a.dataSM("shown-before", !0),
                k && a.stop(!0, !0),
                !a.is(":visible"))) {
                    var b = a.dataSM("parent-a")
                      , c = this.isCollapsible();
                    if ((this.opts.keepHighlighted || c) && b.addClass("highlighted"),
                    c)
                        a.removeClass("sm-nowrap").css({
                            zIndex: "",
                            width: "auto",
                            minWidth: "",
                            maxWidth: "",
                            top: "",
                            left: "",
                            marginLeft: "",
                            marginTop: ""
                        });
                    else {
                        if (a.css("z-index", this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1),
                        (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) && (a.css({
                            width: "auto",
                            minWidth: "",
                            maxWidth: ""
                        }).addClass("sm-nowrap"),
                        this.opts.subMenusMinWidth && a.css("min-width", this.opts.subMenusMinWidth),
                        this.opts.subMenusMaxWidth)) {
                            var d = this.getWidth(a);
                            a.css("max-width", this.opts.subMenusMaxWidth),
                            d > this.getWidth(a) && a.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                        }
                        this.menuPosition(a)
                    }
                    var e = function() {
                        a.css("overflow", "")
                    };
                    c ? k && this.opts.collapsibleShowFunction ? this.opts.collapsibleShowFunction.call(this, a, e) : a.show(this.opts.collapsibleShowDuration, e) : k && this.opts.showFunction ? this.opts.showFunction.call(this, a, e) : a.show(this.opts.showDuration, e),
                    b.attr("aria-expanded", "true"),
                    a.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }),
                    this.visibleSubMenus.push(a),
                    this.$root.triggerHandler("show.smapi", a[0])
                }
            },
            popupHide: function(a) {
                this.hideTimeout && (clearTimeout(this.hideTimeout),
                this.hideTimeout = 0);
                var b = this;
                this.hideTimeout = setTimeout(function() {
                    b.menuHideAll()
                }, a ? 1 : this.opts.hideTimeout)
            },
            popupShow: function(a, b) {
                if (!this.opts.isPopup)
                    return void alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
                if (this.hideTimeout && (clearTimeout(this.hideTimeout),
                this.hideTimeout = 0),
                this.$root.dataSM("shown-before", !0),
                k && this.$root.stop(!0, !0),
                !this.$root.is(":visible")) {
                    this.$root.css({
                        left: a,
                        top: b
                    });
                    var c = this
                      , d = function() {
                        c.$root.css("overflow", "")
                    };
                    k && this.opts.showFunction ? this.opts.showFunction.call(this, this.$root, d) : this.$root.show(this.opts.showDuration, d),
                    this.visibleSubMenus[0] = this.$root
                }
            },
            refresh: function() {
                this.destroy(!0),
                this.init(!0)
            },
            rootKeyDown: function(b) {
                if (this.handleEvents())
                    switch (b.keyCode) {
                    case 27:
                        var c = this.activatedItems[0];
                        if (c) {
                            this.menuHideAll(),
                            c[0].focus();
                            var d = c.dataSM("sub");
                            d && this.menuHide(d)
                        }
                        break;
                    case 32:
                        var e = a(b.target);
                        if (e.is("a") && this.handleItemEvents(e)) {
                            var d = e.dataSM("sub");
                            d && !d.is(":visible") && (this.itemClick({
                                currentTarget: b.target
                            }),
                            b.preventDefault())
                        }
                    }
            },
            rootOut: function(a) {
                if (this.handleEvents() && !this.isTouchMode() && a.target != this.$root[0] && (this.hideTimeout && (clearTimeout(this.hideTimeout),
                this.hideTimeout = 0),
                !this.opts.showOnClick || !this.opts.hideOnClick)) {
                    var b = this;
                    this.hideTimeout = setTimeout(function() {
                        b.menuHideAll()
                    }, this.opts.hideTimeout)
                }
            },
            rootOver: function(a) {
                this.handleEvents() && !this.isTouchMode() && a.target != this.$root[0] && this.hideTimeout && (clearTimeout(this.hideTimeout),
                this.hideTimeout = 0)
            },
            winResize: function(a) {
                if (this.handleEvents()) {
                    if (!("onorientationchange"in window) || "orientationchange" == a.type) {
                        var b = this.isCollapsible();
                        this.wasCollapsible && b || (this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0].blur(),
                        this.menuHideAll()),
                        this.wasCollapsible = b
                    }
                } else if (this.$disableOverlay) {
                    var c = this.$root.offset();
                    this.$disableOverlay.css({
                        top: c.top,
                        left: c.left,
                        width: this.$root.outerWidth(),
                        height: this.$root.outerHeight()
                    })
                }
            }
        }
    }),
    a.fn.dataSM = function(a, b) {
        return b ? this.data(a + "_smartmenus", b) : this.data(a + "_smartmenus")
    }
    ,
    a.fn.removeDataSM = function(a) {
        return this.removeData(a + "_smartmenus")
    }
    ,
    a.fn.smartmenus = function(b) {
        if ("string" == typeof b) {
            var c = arguments
              , d = b;
            return Array.prototype.shift.call(c),
            this.each(function() {
                var b = a(this).data("smartmenus");
                b && b[d] && b[d].apply(b, c)
            })
        }
        return this.each(function() {
            var c = a(this).data("sm-options") || null;
            c && "object" != typeof c && (c = null,
            alert('ERROR\n\nSmartMenus jQuery init:\nThe value of the "data-sm-options" attribute must be valid JSON.')),
            c && a.each(["showFunction", "hideFunction", "collapsibleShowFunction", "collapsibleHideFunction"], function() {
                this in c && delete c[this]
            }),
            new a.SmartMenus(this,a.extend({}, a.fn.smartmenus.defaults, b, c))
        })
    }
    ,
    a.fn.smartmenus.defaults = {
        isPopup: !1,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10em",
        subMenusMaxWidth: "20em",
        subIndicators: !0,
        subIndicatorsPos: "append",
        subIndicatorsText: "",
        scrollStep: 30,
        scrollAccelerate: !0,
        showTimeout: 250,
        hideTimeout: 500,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function(a, b) {
            a.fadeOut(200, b)
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function(a, b) {
            a.slideDown(200, b)
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function(a, b) {
            a.slideUp(200, b)
        },
        showOnClick: !1,
        hideOnClick: !0,
        noMouseOver: !1,
        keepInViewport: !0,
        keepHighlighted: !0,
        markCurrentItem: !1,
        markCurrentTree: !0,
        rightToLeftSubMenus: !1,
        bottomToTopSubMenus: !1,
        collapsibleBehavior: "default"
    },
    a
});
/*! pro-elements - v3.19.0 - 26-02-2024 */
(()=>{
    "use strict";
    var e, r, a, c = {}, n = {};
    function __webpack_require__(e) {
        var r = n[e];
        if (void 0 !== r)
            return r.exports;
        var a = n[e] = {
            exports: {}
        };
        return c[e].call(a.exports, a, a.exports, __webpack_require__),
        a.exports
    }
    __webpack_require__.m = c,
    e = [],
    __webpack_require__.O = (r,a,c,n)=>{
        if (!a) {
            var i = 1 / 0;
            for (o = 0; o < e.length; o++) {
                for (var [a,c,n] = e[o], _ = !0, b = 0; b < a.length; b++)
                    (!1 & n || i >= n) && Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](a[b]))) ? a.splice(b--, 1) : (_ = !1,
                    n < i && (i = n));
                if (_) {
                    e.splice(o--, 1);
                    var t = c();
                    void 0 !== t && (r = t)
                }
            }
            return r
        }
        n = n || 0;
        for (var o = e.length; o > 0 && e[o - 1][2] > n; o--)
            e[o] = e[o - 1];
        e[o] = [a, c, n]
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,a)=>(__webpack_require__.f[a](e, r),
    r)), [])),
    __webpack_require__.u = e=>714 === e ? "code-highlight.28a979661569ddbbf60d.bundle.min.js" : 721 === e ? "video-playlist.74fca1f2470fa6474595.bundle.min.js" : 256 === e ? "paypal-button.3d0d5af7df85963df32c.bundle.min.js" : 699 === e ? "60745ddf42fde6647dbc.bundle.min.js" : 156 === e ? "stripe-button.2acbca466dfeb9585680.bundle.min.js" : 241 === e ? "progress-tracker.53951a08af7543da98e6.bundle.min.js" : 26 === e ? "animated-headline.3efc6517c2a055f6c242.bundle.min.js" : 534 === e ? "media-carousel.aca2224ef13e6f999011.bundle.min.js" : 369 === e ? "carousel.9b02b45d7826c1c48f33.bundle.min.js" : 804 === e ? "countdown.be941c879efa861dbbfa.bundle.min.js" : 888 === e ? "hotspot.6ab1751404c381bfe390.bundle.min.js" : 680 === e ? "form.10bf1a6475f0741920ff.bundle.min.js" : 121 === e ? "gallery.8ca9a354ce039d1ba641.bundle.min.js" : 288 === e ? "lottie.565b778d23c04461c4ea.bundle.min.js" : 42 === e ? "nav-menu.d43af66e5000fd109c04.bundle.min.js" : 50 === e ? "popup.085c1727e36940b18f29.bundle.min.js" : 985 === e ? "load-more.3ae4d5ec5d7fec660460.bundle.min.js" : 287 === e ? "posts.caaf3e27e57db8207afc.bundle.min.js" : 824 === e ? "portfolio.b5c5e89624dc6b81a11a.bundle.min.js" : 58 === e ? "share-buttons.08f4daf4a4285a8632b8.bundle.min.js" : 114 === e ? "slides.fb6b9afd278bb9c5e75b.bundle.min.js" : 443 === e ? "social.2d2e44e8608690943f29.bundle.min.js" : 838 === e ? "table-of-contents.82ad797536446d523057.bundle.min.js" : 685 === e ? "archive-posts.28fa740b6a821eb58a93.bundle.min.js" : 858 === e ? "search-form.a25a87283d08dad12f18.bundle.min.js" : 102 === e ? "woocommerce-menu-cart.faa7b80e9ba9e5072070.bundle.min.js" : 1 === e ? "woocommerce-purchase-summary.46445ab1120a8c28c05c.bundle.min.js" : 124 === e ? "woocommerce-checkout-page.b18af78282979b6f74e4.bundle.min.js" : 859 === e ? "woocommerce-cart.fc30c6cb753d4098eff5.bundle.min.js" : 979 === e ? "woocommerce-my-account.3ee10d01e625dad87f73.bundle.min.js" : 497 === e ? "woocommerce-notices.aaa7a3d06f24f7ea6951.bundle.min.js" : 800 === e ? "product-add-to-cart.023d7d31fbf96c3dbdfc.bundle.min.js" : 149 === e ? "loop.e45e73509acb0a350776.bundle.min.js" : 153 === e ? "loop-carousel.4e8fd6593adbba21698e.bundle.min.js" : 356 === e ? "ajax-pagination.a8dae0f5699fe9733e7d.bundle.min.js" : 495 === e ? "mega-menu.9aa8d61c20acc562062f.bundle.min.js" : 157 === e ? "mega-menu-stretch-content.60ca9e1e97c52ac3bf8c.bundle.min.js" : 244 === e ? "menu-title-keyboard-handler.e81e3b1492bbd9ba31f3.bundle.min.js" : 209 === e ? "nested-carousel.9145d6891784d5818672.bundle.min.js" : 188 === e ? "taxonomy-filter.b42e9c10a9d0abc3454e.bundle.min.js" : void 0,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.o = (e,r)=>Object.prototype.hasOwnProperty.call(e, r),
    r = {},
    a = "elementor-pro:",
    __webpack_require__.l = (e,c,n,i)=>{
        if (r[e])
            r[e].push(c);
        else {
            var _, b;
            if (void 0 !== n)
                for (var t = document.getElementsByTagName("script"), o = 0; o < t.length; o++) {
                    var d = t[o];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == a + n) {
                        _ = d;
                        break
                    }
                }
            _ || (b = !0,
            (_ = document.createElement("script")).charset = "utf-8",
            _.timeout = 120,
            __webpack_require__.nc && _.setAttribute("nonce", __webpack_require__.nc),
            _.setAttribute("data-webpack", a + n),
            _.src = e),
            r[e] = [c];
            var onScriptComplete = (a,c)=>{
                _.onerror = _.onload = null,
                clearTimeout(u);
                var n = r[e];
                if (delete r[e],
                _.parentNode && _.parentNode.removeChild(_),
                n && n.forEach((e=>e(c))),
                a)
                    return a(c)
            }
              , u = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: _
            }), 12e4);
            _.onerror = onScriptComplete.bind(null, _.onerror),
            _.onload = onScriptComplete.bind(null, _.onload),
            b && document.head.appendChild(_)
        }
    }
    ,
    (()=>{
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src),
        !e)) {
            var a = r.getElementsByTagName("script");
            if (a.length)
                for (var c = a.length - 1; c > -1 && !e; )
                    e = a[c--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        __webpack_require__.p = e
    }
    )(),
    (()=>{
        var e = {
            396: 0
        };
        __webpack_require__.f.j = (r,a)=>{
            var c = __webpack_require__.o(e, r) ? e[r] : void 0;
            if (0 !== c)
                if (c)
                    a.push(c[2]);
                else if (396 != r) {
                    var n = new Promise(((a,n)=>c = e[r] = [a, n]));
                    a.push(c[2] = n);
                    var i = __webpack_require__.p + __webpack_require__.u(r)
                      , _ = new Error;
                    __webpack_require__.l(i, (a=>{
                        if (__webpack_require__.o(e, r) && (0 !== (c = e[r]) && (e[r] = void 0),
                        c)) {
                            var n = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            _.message = "Loading chunk " + r + " failed.\n(" + n + ": " + i + ")",
                            _.name = "ChunkLoadError",
                            _.type = n,
                            _.request = i,
                            c[1](_)
                        }
                    }
                    ), "chunk-" + r, r)
                } else
                    e[r] = 0
        }
        ,
        __webpack_require__.O.j = r=>0 === e[r];
        var webpackJsonpCallback = (r,a)=>{
            var c, n, [i,_,b] = a, t = 0;
            if (i.some((r=>0 !== e[r]))) {
                for (c in _)
                    __webpack_require__.o(_, c) && (__webpack_require__.m[c] = _[c]);
                if (b)
                    var o = b(__webpack_require__)
            }
            for (r && r(a); t < i.length; t++)
                n = i[t],
                __webpack_require__.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return __webpack_require__.O(o)
        }
          , r = self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || [];
        r.forEach(webpackJsonpCallback.bind(null, 0)),
        r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
    }
    )()
}
)();
/*! elementor - v3.20.0 - 13-03-2024 */
(()=>{
    "use strict";
    var e, r, _, t, a, i = {}, n = {};
    function __webpack_require__(e) {
        var r = n[e];
        if (void 0 !== r)
            return r.exports;
        var _ = n[e] = {
            exports: {}
        };
        return i[e].call(_.exports, _, _.exports, __webpack_require__),
        _.exports
    }
    __webpack_require__.m = i,
    e = [],
    __webpack_require__.O = (r,_,t,a)=>{
        if (!_) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [_,t,a] = e[u], n = !0, c = 0; c < _.length; c++)
                    (!1 & a || i >= a) && Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c]))) ? _.splice(c--, 1) : (n = !1,
                    a < i && (i = a));
                if (n) {
                    e.splice(u--, 1);
                    var o = t();
                    void 0 !== o && (r = o)
                }
            }
            return r
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--)
            e[u] = e[u - 1];
        e[u] = [_, t, a]
    }
    ,
    _ = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    __webpack_require__.t = function(e, t) {
        if (1 & t && (e = this(e)),
        8 & t)
            return e;
        if ("object" == typeof e && e) {
            if (4 & t && e.__esModule)
                return e;
            if (16 & t && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        __webpack_require__.r(a);
        var i = {};
        r = r || [null, _({}), _([]), _(_)];
        for (var n = 2 & t && e; "object" == typeof n && !~r.indexOf(n); n = _(n))
            Object.getOwnPropertyNames(n).forEach((r=>i[r] = ()=>e[r]));
        return i.default = ()=>e,
        __webpack_require__.d(a, i),
        a
    }
    ,
    __webpack_require__.d = (e,r)=>{
        for (var _ in r)
            __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
                enumerable: !0,
                get: r[_]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e, r),
    r)), [])),
    __webpack_require__.u = e=>723 === e ? "lightbox.1b6e05e0607040eb8929.bundle.min.js" : 48 === e ? "text-path.b50b3e74488a4e302613.bundle.min.js" : 209 === e ? "accordion.8799675460c73eb48972.bundle.min.js" : 745 === e ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js" : 120 === e ? "counter.02cef29c589e742d4c8c.bundle.min.js" : 192 === e ? "progress.ca55d33bb06cee4e6f02.bundle.min.js" : 520 === e ? "tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js" : 181 === e ? "toggle.31881477c45ff5cf9d4d.bundle.min.js" : 791 === e ? "video.fea4f8dfdf17262f23e8.bundle.min.js" : 268 === e ? "image-carousel.4455c6362492d9067512.bundle.min.js" : 357 === e ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js" : 52 === e ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js" : 413 === e ? "container.c65a2a923085e1120e75.bundle.min.js" : void 0,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.o = (e,r)=>Object.prototype.hasOwnProperty.call(e, r),
    t = {},
    a = "elementor:",
    __webpack_require__.l = (e,r,_,i)=>{
        if (t[e])
            t[e].push(r);
        else {
            var n, c;
            if (void 0 !== _)
                for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                    var b = o[u];
                    if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == a + _) {
                        n = b;
                        break
                    }
                }
            n || (c = !0,
            (n = document.createElement("script")).charset = "utf-8",
            n.timeout = 120,
            __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc),
            n.setAttribute("data-webpack", a + _),
            n.src = e),
            t[e] = [r];
            var onScriptComplete = (r,_)=>{
                n.onerror = n.onload = null,
                clearTimeout(p);
                var a = t[e];
                if (delete t[e],
                n.parentNode && n.parentNode.removeChild(n),
                a && a.forEach((e=>e(_))),
                r)
                    return r(_)
            }
              , p = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = onScriptComplete.bind(null, n.onerror),
            n.onload = onScriptComplete.bind(null, n.onload),
            c && document.head.appendChild(n)
        }
    }
    ,
    __webpack_require__.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src),
        !e)) {
            var _ = r.getElementsByTagName("script");
            if (_.length)
                for (var t = _.length - 1; t > -1 && !e; )
                    e = _[t--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        __webpack_require__.p = e
    }
    )(),
    (()=>{
        var e = {
            162: 0
        };
        __webpack_require__.f.j = (r,_)=>{
            var t = __webpack_require__.o(e, r) ? e[r] : void 0;
            if (0 !== t)
                if (t)
                    _.push(t[2]);
                else if (162 != r) {
                    var a = new Promise(((_,a)=>t = e[r] = [_, a]));
                    _.push(t[2] = a);
                    var i = __webpack_require__.p + __webpack_require__.u(r)
                      , n = new Error;
                    __webpack_require__.l(i, (_=>{
                        if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0),
                        t)) {
                            var a = _ && ("load" === _.type ? "missing" : _.type)
                              , i = _ && _.target && _.target.src;
                            n.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")",
                            n.name = "ChunkLoadError",
                            n.type = a,
                            n.request = i,
                            t[1](n)
                        }
                    }
                    ), "chunk-" + r, r)
                } else
                    e[r] = 0
        }
        ,
        __webpack_require__.O.j = r=>0 === e[r];
        var webpackJsonpCallback = (r,_)=>{
            var t, a, [i,n,c] = _, o = 0;
            if (i.some((r=>0 !== e[r]))) {
                for (t in n)
                    __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
                if (c)
                    var u = c(__webpack_require__)
            }
            for (r && r(_); o < i.length; o++)
                a = i[o],
                __webpack_require__.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return __webpack_require__.O(u)
        }
          , r = self.webpackChunkelementor = self.webpackChunkelementor || [];
        r.forEach(webpackJsonpCallback.bind(null, 0)),
        r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
    }
    )()
}
)();
/*! elementor - v3.20.0 - 13-03-2024 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[354], {
    381: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = (e,t)=>{
            t = Array.isArray(t) ? t : [t];
            for (const n of t)
                if (e.constructor.name === n.prototype[Symbol.toStringTag])
                    return !0;
            return !1
        }
    }
    ,
    8135: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    },
                    classes: {
                        editMode: "elementor-edit-mode"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                }
            }
            getDocumentSettings(e) {
                let t;
                if (this.isEdit) {
                    t = {};
                    const e = elementor.settings.page.model;
                    jQuery.each(e.getActiveControls(), (n=>{
                        t[n] = e.attributes[n]
                    }
                    ))
                } else
                    t = this.$element.data("elementor-settings") || {};
                return this.getItems(t, e)
            }
            runElementsHandlers() {
                this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))
            }
            onInit() {
                this.$element = this.getSettings("$element"),
                super.onInit(),
                this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")),
                this.isEdit ? elementor.on("document:loaded", (()=>{
                    elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                }
                )) : this.runElementsHandlers()
            }
            onSettingsChange() {}
        }
        t.default = _default
    }
    ,
    6752: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090));
        class NestedTitleKeyboardHandler extends r.default {
            __construct(e) {
                super.__construct(e),
                this.directionNext = "next",
                this.directionPrevious = "previous",
                this.focusableElementSelector = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])'
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        itemTitle: ".e-n-tab-title",
                        itemContainer: ".e-n-tabs-content > .e-con"
                    },
                    ariaAttributes: {
                        titleStateAttribute: "aria-selected",
                        activeTitleSelector: '[aria-selected="true"]'
                    },
                    datasets: {
                        titleIndex: "data-tab-index"
                    },
                    keyDirection: {
                        ArrowLeft: elementorFrontendConfig.is_rtl ? this.directionNext : this.directionPrevious,
                        ArrowUp: this.directionPrevious,
                        ArrowRight: elementorFrontendConfig.is_rtl ? this.directionPrevious : this.directionNext,
                        ArrowDown: this.directionNext
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $itemTitles: this.findElement(e.itemTitle),
                    $itemContainers: this.findElement(e.itemContainer),
                    $focusableContainerElements: this.getFocusableElements(this.findElement(e.itemContainer))
                }
            }
            getFocusableElements(e) {
                return e.find(this.focusableElementSelector).not("[disabled], [inert]")
            }
            getKeyDirectionValue(e) {
                const t = this.getSettings("keyDirection")[e.key];
                return this.directionNext === t ? 1 : -1
            }
            getTitleIndex(e) {
                const {titleIndex: t} = this.getSettings("datasets");
                return e.getAttribute(t)
            }
            getTitleFilterSelector(e) {
                const {titleIndex: t} = this.getSettings("datasets");
                return `[${t}="${e}"]`
            }
            getActiveTitleElement() {
                const e = this.getSettings("ariaAttributes").activeTitleSelector;
                return this.elements.$itemTitles.filter(e)
            }
            onInit() {
                super.onInit(...arguments)
            }
            bindEvents() {
                this.elements.$itemTitles.on(this.getTitleEvents()),
                this.elements.$focusableContainerElements.on(this.getContentElementEvents())
            }
            unbindEvents() {
                this.elements.$itemTitles.off(),
                this.elements.$itemContainers.children().off()
            }
            getTitleEvents() {
                return {
                    keydown: this.handleTitleKeyboardNavigation.bind(this)
                }
            }
            getContentElementEvents() {
                return {
                    keydown: this.handleContentElementKeyboardNavigation.bind(this)
                }
            }
            isDirectionKey(e) {
                return ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)
            }
            isActivationKey(e) {
                return ["Enter", " "].includes(e.key)
            }
            handleTitleKeyboardNavigation(e) {
                if (this.isDirectionKey(e)) {
                    e.preventDefault();
                    const t = parseInt(this.getTitleIndex(e.currentTarget)) || 1
                      , n = this.elements.$itemTitles.length
                      , i = this.getTitleIndexFocusUpdated(e, t, n);
                    this.changeTitleFocus(i),
                    e.stopPropagation()
                } else if (this.isActivationKey(e)) {
                    if (e.preventDefault(),
                    this.handeTitleLinkEnterOrSpaceEvent(e))
                        return;
                    const t = this.getTitleIndex(e.currentTarget);
                    elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard", {
                        widgetId: this.getID(),
                        titleIndex: t
                    })
                } else
                    "Escape" === e.key && this.handleTitleEscapeKeyEvents(e)
            }
            handeTitleLinkEnterOrSpaceEvent(e) {
                const t = "a" === e?.currentTarget?.tagName?.toLowerCase();
                return !elementorFrontend.isEditMode() && t && (e?.currentTarget?.click(),
                e.stopPropagation()),
                t
            }
            getTitleIndexFocusUpdated(e, t, n) {
                let i = 0;
                switch (e.key) {
                case "Home":
                    i = 1;
                    break;
                case "End":
                    i = n;
                    break;
                default:
                    const r = this.getKeyDirectionValue(e);
                    i = n < t + r ? 1 : 0 === t + r ? n : t + r
                }
                return i
            }
            changeTitleFocus(e) {
                const t = this.elements.$itemTitles.filter(this.getTitleFilterSelector(e));
                this.setTitleTabindex(e),
                t.trigger("focus")
            }
            setTitleTabindex(e) {
                this.elements.$itemTitles.attr("tabindex", "-1");
                this.elements.$itemTitles.filter(this.getTitleFilterSelector(e)).attr("tabindex", "0")
            }
            handleTitleEscapeKeyEvents() {}
            handleContentElementKeyboardNavigation(e) {
                "Tab" !== e.key || e.shiftKey ? "Escape" === e.key && (e.preventDefault(),
                e.stopPropagation(),
                this.handleContentElementEscapeEvents(e)) : this.handleContentElementTabEvents(e)
            }
            handleContentElementEscapeEvents() {
                this.getActiveTitleElement().trigger("focus")
            }
            handleContentElementTabEvents() {}
        }
        t.default = NestedTitleKeyboardHandler
    }
    ,
    1292: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(2821));
        class CarouselHandlerBase extends r.default {
            getDefaultSettings() {
                return {
                    selectors: {
                        carousel: `.${elementorFrontend.config.swiperClass}`,
                        swiperWrapper: ".swiper-wrapper",
                        slideContent: ".swiper-slide",
                        swiperArrow: ".elementor-swiper-button",
                        paginationWrapper: ".swiper-pagination",
                        paginationBullet: ".swiper-pagination-bullet",
                        paginationBulletWrapper: ".swiper-pagination-bullets"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                  , t = {
                    $swiperContainer: this.$element.find(e.carousel),
                    $swiperWrapper: this.$element.find(e.swiperWrapper),
                    $swiperArrows: this.$element.find(e.swiperArrow),
                    $paginationWrapper: this.$element.find(e.paginationWrapper),
                    $paginationBullets: this.$element.find(e.paginationBullet),
                    $paginationBulletWrapper: this.$element.find(e.paginationBulletWrapper)
                };
                return t.$slides = t.$swiperContainer.find(e.slideContent),
                t
            }
            getSwiperSettings() {
                const e = this.getElementSettings()
                  , t = +e.slides_to_show || 3
                  , n = 1 === t
                  , i = elementorFrontend.config.responsive.activeBreakpoints
                  , r = {
                    mobile: 1,
                    tablet: n ? 1 : 2
                }
                  , s = {
                    slidesPerView: t,
                    loop: "yes" === e.infinite,
                    speed: e.speed,
                    handleElementorBreakpoints: !0,
                    breakpoints: {}
                };
                let o = t;
                Object.keys(i).reverse().forEach((t=>{
                    const n = r[t] ? r[t] : o;
                    s.breakpoints[i[t].value] = {
                        slidesPerView: +e["slides_to_show_" + t] || n,
                        slidesPerGroup: +e["slides_to_scroll_" + t] || 1
                    },
                    e.image_spacing_custom && (s.breakpoints[i[t].value].spaceBetween = this.getSpaceBetween(t)),
                    o = +e["slides_to_show_" + t] || n
                }
                )),
                "yes" === e.autoplay && (s.autoplay = {
                    delay: e.autoplay_speed,
                    disableOnInteraction: "yes" === e.pause_on_interaction
                }),
                n ? (s.effect = e.effect,
                "fade" === e.effect && (s.fadeEffect = {
                    crossFade: !0
                })) : s.slidesPerGroup = +e.slides_to_scroll || 1,
                e.image_spacing_custom && (s.spaceBetween = this.getSpaceBetween());
                const a = "arrows" === e.navigation || "both" === e.navigation
                  , l = "dots" === e.navigation || "both" === e.navigation || e.pagination;
                return a && (s.navigation = {
                    prevEl: ".elementor-swiper-button-prev",
                    nextEl: ".elementor-swiper-button-next"
                }),
                l && (s.pagination = {
                    el: `.elementor-element-${this.getID()} .swiper-pagination`,
                    type: e.pagination ? e.pagination : "bullets",
                    clickable: !0,
                    renderBullet: (e,t)=>`<span class="${t}" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e + 1}"></span>`
                }),
                "yes" === e.lazyload && (s.lazy = {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 1
                }),
                s.a11y = {
                    enabled: !0,
                    prevSlideMessage: elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
                    nextSlideMessage: elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
                    firstSlideMessage: elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
                    lastSlideMessage: elementorFrontend.config.i18n.a11yCarouselLastSlideMessage
                },
                s.on = {
                    slideChangeTransitionEnd: ()=>{
                        this.a11ySetSlideAriaHidden()
                    }
                    ,
                    slideChange: ()=>{
                        this.a11ySetPaginationTabindex(),
                        this.handleElementHandlers()
                    }
                    ,
                    init: ()=>{
                        this.a11ySetWidgetAriaDetails(),
                        this.a11ySetPaginationTabindex(),
                        this.a11ySetSlideAriaHidden("initialisation")
                    }
                },
                this.applyOffsetSettings(e, s, t),
                s
            }
            getOffsetWidth() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "offset_width", "size", e) || 0
            }
            applyOffsetSettings(e, t, n) {
                const i = e.offset_sides;
                if (!(elementorFrontend.isEditMode() && "NestedCarousel" === this.constructor.name) && i && "none" !== i)
                    switch (i) {
                    case "right":
                        this.forceSliderToShowNextSlideWhenOnLast(t, n),
                        this.addClassToSwiperContainer("offset-right");
                        break;
                    case "left":
                        this.addClassToSwiperContainer("offset-left");
                        break;
                    case "both":
                        this.forceSliderToShowNextSlideWhenOnLast(t, n),
                        this.addClassToSwiperContainer("offset-both")
                    }
            }
            forceSliderToShowNextSlideWhenOnLast(e, t) {
                e.slidesPerView = t + .001
            }
            addClassToSwiperContainer(e) {
                this.getDefaultElements().$swiperContainer[0].classList.add(e)
            }
            async onInit() {
                if (super.onInit(...arguments),
                !this.elements.$swiperContainer.length || 2 > this.elements.$slides.length)
                    return;
                const e = elementorFrontend.utils.swiper;
                this.swiper = await new e(this.elements.$swiperContainer,this.getSwiperSettings()),
                this.elements.$swiperContainer.data("swiper", this.swiper);
                "yes" === this.getElementSettings().pause_on_hover && this.togglePauseOnHover(!0)
            }
            bindEvents() {
                this.elements.$swiperArrows.on("keydown", this.onDirectionArrowKeydown.bind(this)),
                this.elements.$paginationWrapper.on("keydown", ".swiper-pagination-bullet", this.onDirectionArrowKeydown.bind(this)),
                this.elements.$swiperContainer.on("keydown", ".swiper-slide", this.onDirectionArrowKeydown.bind(this)),
                this.$element.find(":focusable").on("focus", this.onFocusDisableAutoplay.bind(this)),
                elementorFrontend.elements.$window.on("resize", this.getSwiperSettings.bind(this))
            }
            unbindEvents() {
                this.elements.$swiperArrows.off(),
                this.elements.$paginationWrapper.off(),
                this.elements.$swiperContainer.off(),
                this.$element.find(":focusable").off(),
                elementorFrontend.elements.$window.off("resize")
            }
            onDirectionArrowKeydown(e) {
                const t = elementorFrontend.config.is_rtl
                  , n = e.originalEvent.code
                  , i = t ? "ArrowLeft" : "ArrowRight";
                if (!(-1 !== ["ArrowLeft", "ArrowRight"].indexOf(n)))
                    return !0;
                (t ? "ArrowRight" : "ArrowLeft") === n ? this.swiper.slidePrev() : i === n && this.swiper.slideNext()
            }
            onFocusDisableAutoplay() {
                this.swiper.autoplay.stop()
            }
            updateSwiperOption(e) {
                const t = this.getElementSettings()[e]
                  , n = this.swiper.params;
                switch (e) {
                case "autoplay_speed":
                    n.autoplay.delay = t;
                    break;
                case "speed":
                    n.speed = t
                }
                this.swiper.update()
            }
            getChangeableProperties() {
                return {
                    pause_on_hover: "pauseOnHover",
                    autoplay_speed: "delay",
                    speed: "speed",
                    arrows_position: "arrows_position"
                }
            }
            onElementChange(e) {
                if (0 === e.indexOf("image_spacing_custom"))
                    return void this.updateSpaceBetween(e);
                if (this.getChangeableProperties()[e])
                    if ("pause_on_hover" === e) {
                        const e = this.getElementSettings("pause_on_hover");
                        this.togglePauseOnHover("yes" === e)
                    } else
                        this.updateSwiperOption(e)
            }
            onEditSettingsChange(e) {
                "activeItemIndex" === e && this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1)
            }
            getSpaceBetween() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "image_spacing_custom", "size", e) || 0
            }
            updateSpaceBetween(e) {
                const t = e.match("image_spacing_custom_(.*)")
                  , n = t ? t[1] : "desktop"
                  , i = this.getSpaceBetween(n);
                "desktop" !== n && (this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween = i),
                this.swiper.params.spaceBetween = i,
                this.swiper.update()
            }
            getPaginationBullets() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "array";
                const t = this.$element.find(this.getSettings("selectors").paginationBullet);
                return "array" === e ? Array.from(t) : t
            }
            a11ySetWidgetAriaDetails() {
                const e = this.$element;
                e.attr("aria-roledescription", "carousel"),
                e.attr("aria-label", elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel)
            }
            a11ySetPaginationTabindex() {
                const e = this.swiper?.params.pagination.bulletClass
                  , t = this.swiper?.params.pagination.bulletActiveClass;
                this.getPaginationBullets().forEach((e=>{
                    e.classList?.contains(t) || e.removeAttribute("tabindex")
                }
                ));
                const n = "ArrowLeft" === event?.code || "ArrowRight" === event?.code;
                event?.target?.classList?.contains(e) && n && this.$element.find(`.${t}`).trigger("focus")
            }
            getSwiperWrapperTranformXValue() {
                let e = this.elements.$swiperWrapper[0]?.style.transform;
                return e = e.replace("translate3d(", ""),
                e = e.split(","),
                e = parseInt(e[0].replace("px", "")),
                e || 0
            }
            a11ySetSlideAriaHidden() {
                if ("number" != typeof ("initialisation" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") ? 0 : this.swiper?.activeIndex))
                    return;
                const e = this.getSwiperWrapperTranformXValue()
                  , t = this.elements.$swiperWrapper[0].clientWidth;
                this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((n,i)=>{
                    0 <= i.offsetLeft + e && t > i.offsetLeft + e ? (i.removeAttribute("aria-hidden"),
                    i.removeAttribute("inert")) : (i.setAttribute("aria-hidden", !0),
                    i.setAttribute("inert", ""))
                }
                ))
            }
            handleElementHandlers() {}
        }
        t.default = CarouselHandlerBase
    }
    ,
    2821: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090));
        class SwiperHandlerBase extends r.default {
            getInitialSlide() {
                const e = this.getEditSettings();
                return e.activeItemIndex ? e.activeItemIndex - 1 : 0
            }
            getSlidesCount() {
                return this.elements.$slides.length
            }
            togglePauseOnHover(e) {
                e ? this.elements.$swiperContainer.on({
                    mouseenter: ()=>{
                        this.swiper.autoplay.stop()
                    }
                    ,
                    mouseleave: ()=>{
                        this.swiper.autoplay.start()
                    }
                }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
            }
            handleKenBurns() {
                const e = this.getSettings();
                this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
                this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(),
                this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground),
                this.$activeImageBg.addClass(e.classes.kenBurnsActive)
            }
        }
        t.default = SwiperHandlerBase
    }
    ,
    3090: e=>{
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            $element: null,
            editorListeners: null,
            onElementChange: null,
            onEditSettingsChange: null,
            onPageSettingsChange: null,
            isEdit: null,
            __construct(e) {
                this.isActive(e) && (this.$element = e.$element,
                this.isEdit = this.$element.hasClass("elementor-element-edit-mode"),
                this.isEdit && this.addEditorListeners())
            },
            isActive: ()=>!0,
            isElementInTheCurrentDocument() {
                return !!elementorFrontend.isEditMode() && elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId
            },
            findElement(e) {
                var t = this.$element;
                return t.find(e).filter((function() {
                    return jQuery(this).parent().closest(".elementor-element").is(t)
                }
                ))
            },
            getUniqueHandlerID(e, t) {
                return e || (e = this.getModelCID()),
                t || (t = this.$element),
                e + t.attr("data-element_type") + this.getConstructorID()
            },
            initEditorListeners() {
                var e = this;
                if (e.editorListeners = [{
                    event: "element:destroy",
                    to: elementor.channels.data,
                    callback(t) {
                        t.cid === e.getModelCID() && e.onDestroy()
                    }
                }],
                e.onElementChange) {
                    const t = e.getWidgetType() || e.getElementType();
                    let n = "change";
                    "global" !== t && (n += ":" + t),
                    e.editorListeners.push({
                        event: n,
                        to: elementor.channels.editor,
                        callback(t, n) {
                            e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n)
                        }
                    })
                }
                e.onEditSettingsChange && e.editorListeners.push({
                    event: "change:editSettings",
                    to: elementor.channels.editor,
                    callback(t, n) {
                        if (n.model.cid !== e.getModelCID())
                            return;
                        const i = Object.keys(t.changed)[0];
                        e.onEditSettingsChange(i, t.changed[i])
                    }
                }),
                ["page"].forEach((function(t) {
                    var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                    e[n] && e.editorListeners.push({
                        event: "change",
                        to: elementor.settings[t].model,
                        callback(t) {
                            e[n](t.changed)
                        }
                    })
                }
                ))
            },
            getEditorListeners() {
                return this.editorListeners || this.initEditorListeners(),
                this.editorListeners
            },
            addEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function(t) {
                    elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                }
                ))
            },
            removeEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function(t) {
                    elementorFrontend.removeListeners(e, t.event, null, t.to)
                }
                ))
            },
            getElementType() {
                return this.$element.data("element_type")
            },
            getWidgetType() {
                const e = this.$element.data("widget_type");
                if (e)
                    return e.split(".")[0]
            },
            getID() {
                return this.$element.data("id")
            },
            getModelCID() {
                return this.$element.data("model-cid")
            },
            getElementSettings(e) {
                let t = {};
                const n = this.getModelCID();
                if (this.isEdit && n) {
                    const e = elementorFrontend.config.elements.data[n]
                      , i = e.attributes;
                    let r = i.widgetType || i.elType;
                    i.isInner && (r = "inner-" + r);
                    let s = elementorFrontend.config.elements.keys[r];
                    s || (s = elementorFrontend.config.elements.keys[r] = [],
                    jQuery.each(e.controls, ((e,t)=>{
                        (t.frontend_available || t.editor_available) && s.push(e)
                    }
                    ))),
                    jQuery.each(e.getActiveControls(), (function(e) {
                        if (-1 !== s.indexOf(e)) {
                            let n = i[e];
                            n.toJSON && (n = n.toJSON()),
                            t[e] = n
                        }
                    }
                    ))
                } else
                    t = this.$element.data("settings") || {};
                return this.getItems(t, e)
            },
            getEditSettings(e) {
                var t = {};
                return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),
                this.getItems(t, e)
            },
            getCurrentDeviceSetting(e) {
                return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
            },
            onInit() {
                this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            },
            onDestroy() {
                this.isEdit && this.removeEditorListeners(),
                this.unbindEvents && this.unbindEvents()
            }
        })
    }
    ,
    2263: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090));
        class StretchedElement extends r.default {
            getStretchedClass() {
                return "e-stretched"
            }
            getStretchSettingName() {
                return "stretch_element"
            }
            getStretchActiveValue() {
                return "yes"
            }
            bindEvents() {
                const e = this.getUniqueHandlerID();
                elementorFrontend.addListenerOnce(e, "resize", this.stretch),
                elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element),
                elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element),
                elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this),
                elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
            }
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch),
                elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
            }
            isActive(e) {
                return elementorFrontend.isEditMode() || e.$element.hasClass(this.getStretchedClass())
            }
            getStretchElementForConfig() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e ? this.$element.find(e) : this.$element
            }
            getStretchElementConfig() {
                return {
                    element: this.getStretchElementForConfig(),
                    selectors: {
                        container: this.getStretchContainer()
                    },
                    considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
                }
            }
            initStretch() {
                this.stretch = this.stretch.bind(this),
                this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())
            }
            getStretchContainer() {
                return elementorFrontend.getKitSettings("stretched_section_container") || window
            }
            isStretchSettingEnabled() {
                return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue()
            }
            stretch() {
                this.isStretchSettingEnabled() && this.stretchElement.stretch()
            }
            onInit() {
                this.isActive(this.getSettings()) && (this.initStretch(),
                super.onInit(...arguments),
                this.stretch())
            }
            onElementChange(e) {
                this.getStretchSettingName() === e && (this.isStretchSettingEnabled() ? this.stretch() : this.stretchElement.reset())
            }
            onKitChangeStretchContainerChange() {
                this.stretchElement.setSettings("selectors.container", this.getStretchContainer()),
                this.stretch()
            }
        }
        t.default = StretchedElement
    }
    ,
    6412: (e,t,n)=>{
        "use strict";
        var i = n(3203)
          , r = i(n(5955))
          , s = i(n(8135))
          , o = i(n(5658))
          , a = i(n(2263))
          , l = i(n(3090))
          , c = i(n(2821))
          , u = i(n(1292))
          , d = i(n(7323))
          , h = i(n(32))
          , g = i(n(6752));
        r.default.frontend = {
            Document: s.default,
            tools: {
                StretchElement: o.default
            },
            handlers: {
                Base: l.default,
                StretchedElement: a.default,
                SwiperBase: c.default,
                CarouselBase: u.default,
                NestedTabs: d.default,
                NestedAccordion: h.default,
                NestedTitleKeyboardHandler: g.default
            }
        }
    }
    ,
    5658: e=>{
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: ()=>({
                element: null,
                direction: elementorFrontend.config.is_rtl ? "right" : "left",
                selectors: {
                    container: window
                },
                considerScrollbar: !1,
                cssOutput: "inline"
            }),
            getDefaultElements() {
                return {
                    $element: jQuery(this.getSettings("element"))
                }
            },
            stretch() {
                const e = this.getSettings();
                let t;
                try {
                    t = jQuery(e.selectors.container)
                } catch (e) {}
                t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)),
                this.reset();
                var n = this.elements.$element
                  , i = t.innerWidth()
                  , r = n.offset().left
                  , s = "fixed" === n.css("position")
                  , o = s ? 0 : r
                  , a = window === t[0];
                if (!a) {
                    var l = t.offset().left;
                    s && (o = l),
                    r > l && (o = r - l)
                }
                if (e.considerScrollbar && a) {
                    o -= window.innerWidth - i
                }
                s || (elementorFrontend.config.is_rtl && (o = i - (n.outerWidth() + o)),
                o = -o),
                e.margin && (o += e.margin);
                var c = {};
                let u = i;
                e.margin && (u -= 2 * e.margin),
                c.width = u + "px",
                c[e.direction] = o + "px",
                "variables" !== e.cssOutput ? n.css(c) : this.applyCssVariables(n, c)
            },
            reset() {
                const e = {}
                  , t = this.getSettings()
                  , n = this.elements.$element;
                "variables" !== t.cssOutput ? (e.width = "",
                e[t.direction] = "",
                n.css(e)) : this.resetCssVariables(n)
            },
            applyCssVariables(e, t) {
                e.css("--stretch-width", t.width),
                t.left ? e.css("--stretch-left", t.left) : e.css("--stretch-right", t.right)
            },
            resetCssVariables(e) {
                e.css({
                    "--stretch-width": "",
                    "--stretch-left": "",
                    "--stretch-right": ""
                })
            }
        })
    }
    ,
    6630: (e,t)=>{
        "use strict";
        function getChildrenWidth(e) {
            let t = 0;
            const n = e[0].parentNode
              , i = getComputedStyle(n)
              , r = parseFloat(i.gap) || 0;
            for (let n = 0; n < e.length; n++)
                t += e[n].offsetWidth + r;
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.changeScrollStatus = function changeScrollStatus(e, t) {
            "mousedown" === t.type ? (e.classList.add("e-scroll"),
            e.dataset.pageX = t.pageX) : (e.classList.remove("e-scroll", "e-scroll-active"),
            e.dataset.pageX = "")
        }
        ,
        t.setHorizontalScrollAlignment = function setHorizontalScrollAlignment(e) {
            let {element: t, direction: n, justifyCSSVariable: i, horizontalScrollStatus: r} = e;
            if (!t)
                return;
            !function isHorizontalScroll(e, t) {
                return e.clientWidth < getChildrenWidth(e.children) && "enable" === t
            }(t, r) ? t.style.setProperty(i, "") : function initialScrollPosition(e, t, n) {
                const i = elementorFrontend.config.is_rtl;
                if ("end" === t)
                    e.style.setProperty(n, "start"),
                    e.scrollLeft = i ? -1 * getChildrenWidth(e.children) : getChildrenWidth(e.children);
                else
                    e.style.setProperty(n, "start"),
                    e.scrollLeft = 0
            }(t, n, i)
        }
        ,
        t.setHorizontalTitleScrollValues = function setHorizontalTitleScrollValues(e, t, n) {
            const i = e.classList.contains("e-scroll")
              , r = "enable" === t
              , s = e.scrollWidth > e.clientWidth;
            if (!i || !r || !s)
                return;
            n.preventDefault();
            const o = parseFloat(e.dataset.pageX)
              , a = n.pageX - o;
            let l = 0;
            l = 20 < a ? 5 : -20 > a ? -5 : a;
            e.scrollLeft = e.scrollLeft - l,
            e.classList.add("e-scroll-active")
        }
    }
    ,
    2618: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(740);
        var r = i(n(7597))
          , s = i(n(381));
        class ArgsObject extends r.default {
            static getInstanceType() {
                return "ArgsObject"
            }
            constructor(e) {
                super(),
                this.args = e
            }
            requireArgument(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                if (!Object.prototype.hasOwnProperty.call(t, e))
                    throw Error(`${e} is required.`)
            }
            requireArgumentType(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                typeof n[e] !== t)
                    throw Error(`${e} invalid type: ${t}.`)
            }
            requireArgumentInstance(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                !(n[e]instanceof t || (0,
                s.default)(n[e], t)))
                    throw Error(`${e} invalid instance.`)
            }
            requireArgumentConstructor(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                n[e].constructor.toString() !== t.prototype.constructor.toString())
                    throw Error(`${e} invalid constructor type.`)
            }
        }
        t.default = ArgsObject
    }
    ,
    869: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.ForceMethodImplementation = void 0,
        n(740);
        class ForceMethodImplementation extends Error {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(`${e.isStatic ? "static " : ""}${e.fullName}() should be implemented, please provide '${e.functionName || e.fullName}' functionality.`, t),
                Object.keys(t).length && console.error(t),
                Error.captureStackTrace(this, ForceMethodImplementation)
            }
        }
        t.ForceMethodImplementation = ForceMethodImplementation;
        t.default = e=>{
            const t = Error().stack.split("\n")[2].trim()
              , n = t.startsWith("at new") ? "constructor" : t.split(" ")[1]
              , i = {};
            if (i.functionName = n,
            i.fullName = n,
            i.functionName.includes(".")) {
                const e = i.functionName.split(".");
                i.className = e[0],
                i.functionName = e[1]
            } else
                i.isStatic = !0;
            throw new ForceMethodImplementation(i,e)
        }
    }
    ,
    7597: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class InstanceType {
            static[Symbol.hasInstance](e) {
                let t = super[Symbol.hasInstance](e);
                if (e && !e.constructor.getInstanceType)
                    return t;
                if (e && (e.instanceTypes || (e.instanceTypes = []),
                t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0),
                t)) {
                    const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
                    -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                }
                return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
                t
            }
            static getInstanceType() {
                elementorModules.ForceMethodImplementation()
            }
            constructor() {
                let e = new.target;
                const t = [];
                for (; e.__proto__ && e.__proto__.name; )
                    t.push(e.__proto__),
                    e = e.__proto__;
                t.reverse().forEach((e=>this instanceof e))
            }
        }
        t.default = InstanceType
    }
    ,
    1192: (e,t,n)=>{
        "use strict";
        n(740);
        const Module = function() {
            const e = jQuery
              , t = arguments
              , n = this
              , i = {};
            let r;
            this.getItems = function(e, t) {
                if (t) {
                    const n = t.split(".")
                      , i = n.splice(0, 1);
                    if (!n.length)
                        return e[i];
                    if (!e[i])
                        return;
                    return this.getItems(e[i], n.join("."))
                }
                return e
            }
            ,
            this.getSettings = function(e) {
                return this.getItems(r, e)
            }
            ,
            this.setSettings = function(t, i, s) {
                if (s || (s = r),
                "object" == typeof t)
                    return e.extend(s, t),
                    n;
                const o = t.split(".")
                  , a = o.splice(0, 1);
                return o.length ? (s[a] || (s[a] = {}),
                n.setSettings(o.join("."), i, s[a])) : (s[a] = i,
                n)
            }
            ,
            this.getErrorMessage = function(e, t) {
                let n;
                if ("forceMethodImplementation" === e)
                    n = `The method '${t}' must to be implemented in the inheritor child.`;
                else
                    n = "An error occurs";
                return n
            }
            ,
            this.forceMethodImplementation = function(e) {
                throw new Error(this.getErrorMessage("forceMethodImplementation", e))
            }
            ,
            this.on = function(t, r) {
                if ("object" == typeof t)
                    return e.each(t, (function(e) {
                        n.on(e, this)
                    }
                    )),
                    n;
                return t.split(" ").forEach((function(e) {
                    i[e] || (i[e] = []),
                    i[e].push(r)
                }
                )),
                n
            }
            ,
            this.off = function(e, t) {
                if (!i[e])
                    return n;
                if (!t)
                    return delete i[e],
                    n;
                const r = i[e].indexOf(t);
                return -1 !== r && (delete i[e][r],
                i[e] = i[e].filter((e=>e))),
                n
            }
            ,
            this.trigger = function(t) {
                const r = "on" + t[0].toUpperCase() + t.slice(1)
                  , s = Array.prototype.slice.call(arguments, 1);
                n[r] && n[r].apply(n, s);
                const o = i[t];
                return o ? (e.each(o, (function(e, t) {
                    t.apply(n, s)
                }
                )),
                n) : n
            }
            ,
            n.__construct.apply(n, t),
            e.each(n, (function(e) {
                const t = n[e];
                "function" == typeof t && (n[e] = function() {
                    return t.apply(n, arguments)
                }
                )
            }
            )),
            function() {
                r = n.getDefaultSettings();
                const i = t[0];
                i && e.extend(!0, r, i)
            }(),
            n.trigger("init")
        };
        Module.prototype.__construct = function() {}
        ,
        Module.prototype.getDefaultSettings = function() {
            return {}
        }
        ,
        Module.prototype.getConstructorID = function() {
            return this.constructor.name
        }
        ,
        Module.extend = function(e) {
            const t = jQuery
              , n = this
              , child = function() {
                return n.apply(this, arguments)
            };
            return t.extend(child, n),
            (child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child,
            child.__super__ = n.prototype,
            child
        }
        ,
        e.exports = Module
    }
    ,
    6516: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(2640)).default.extend({
            getDefaultSettings: ()=>({
                container: null,
                items: null,
                columnsCount: 3,
                verticalSpaceBetween: 30
            }),
            getDefaultElements() {
                return {
                    $container: jQuery(this.getSettings("container")),
                    $items: jQuery(this.getSettings("items"))
                }
            },
            run() {
                var e = []
                  , t = this.elements.$container.position().top
                  , n = this.getSettings()
                  , i = n.columnsCount;
                t += parseInt(this.elements.$container.css("margin-top"), 10),
                this.elements.$items.each((function(r) {
                    var s = Math.floor(r / i)
                      , o = jQuery(this)
                      , a = o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                    if (s) {
                        var l = o.position()
                          , c = r % i
                          , u = l.top - t - e[c];
                        u -= parseInt(o.css("margin-top"), 10),
                        u *= -1,
                        o.css("margin-top", u + "px"),
                        e[c] += a
                    } else
                        e.push(a)
                }
                ))
            }
        });
        t.default = r
    }
    ,
    400: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Scroll {
            static scrollObserver(e) {
                let t = 0;
                const n = {
                    root: e.root || null,
                    rootMargin: e.offset || "0px",
                    threshold: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        const t = [];
                        if (e > 0 && e <= 100) {
                            const n = 100 / e;
                            for (let e = 0; e <= 100; e += n)
                                t.push(e / 100)
                        } else
                            t.push(0);
                        return t
                    }(e.sensitivity)
                };
                return new IntersectionObserver((function handleIntersect(n) {
                    const i = n[0].boundingClientRect.y
                      , r = n[0].isIntersecting
                      , s = i < t ? "down" : "up"
                      , o = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
                    e.callback({
                        sensitivity: e.sensitivity,
                        isInViewport: r,
                        scrollPercentage: o,
                        intersectionScrollDirection: s
                    }),
                    t = i
                }
                ),n)
            }
            static getElementViewportPercentage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = e[0].getBoundingClientRect()
                  , i = t.start || 0
                  , r = t.end || 0
                  , s = window.innerHeight * i / 100
                  , o = window.innerHeight * r / 100
                  , a = n.top - window.innerHeight
                  , l = 0 - a + s
                  , c = n.top + s + e.height() - a + o
                  , u = Math.max(0, Math.min(l / c, 1));
                return parseFloat((100 * u).toFixed(2))
            }
            static getPageScrollPercentage() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                const n = e.start || 0
                  , i = e.end || 0
                  , r = t || document.documentElement.scrollHeight - document.documentElement.clientHeight
                  , s = r * n / 100
                  , o = r + s + r * i / 100;
                return (document.documentElement.scrollTop + document.body.scrollTop + s) / o * 100
            }
        }
    }
    ,
    2640: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(1192)).default.extend({
            elements: null,
            getDefaultElements: ()=>({}),
            bindEvents() {},
            onInit() {
                this.initElements(),
                this.bindEvents()
            },
            initElements() {
                this.elements = this.getDefaultElements()
            }
        });
        t.default = r
    }
    ,
    5955: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(1192))
          , s = i(n(2640))
          , o = i(n(2618))
          , a = i(n(6516))
          , l = i(n(400))
          , c = i(n(869))
          , u = window.elementorModules = {
            Module: r.default,
            ViewModule: s.default,
            ArgsObject: o.default,
            ForceMethodImplementation: c.default,
            utils: {
                Masonry: a.default,
                Scroll: l.default
            }
        };
        t.default = u
    }
    ,
    7148: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(6752));
        class NestedAccordionTitleKeyboardHandler extends r.default {
            __construct() {
                super.__construct(...arguments);
                const e = arguments.length <= 0 ? void 0 : arguments[0];
                this.toggleTitle = e.toggleTitle
            }
            getDefaultSettings() {
                return {
                    ...super.getDefaultSettings(),
                    selectors: {
                        itemTitle: ".e-n-accordion-item-title",
                        itemContainer: ".e-n-accordion-item > .e-con"
                    },
                    ariaAttributes: {
                        titleStateAttribute: "aria-expanded",
                        activeTitleSelector: '[aria-expanded="true"]'
                    },
                    datasets: {
                        titleIndex: "data-accordion-index"
                    }
                }
            }
            handeTitleLinkEnterOrSpaceEvent(e) {
                this.toggleTitle(e)
            }
            handleContentElementEscapeEvents(e) {
                this.getActiveTitleElement().trigger("focus"),
                this.toggleTitle(e)
            }
            handleTitleEscapeKeyEvents(e) {
                const t = e?.currentTarget?.parentElement
                  , n = t?.open;
                n && this.toggleTitle(e)
            }
        }
        t.default = NestedAccordionTitleKeyboardHandler
    }
    ,
    32: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090))
          , s = i(n(7148));
        class NestedAccordion extends r.default {
            constructor() {
                super(...arguments),
                this.animations = new Map
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        accordion: ".e-n-accordion",
                        accordionContentContainers: ".e-n-accordion > .e-con",
                        accordionItems: ".e-n-accordion-item",
                        accordionItemTitles: ".e-n-accordion-item-title",
                        accordionContent: ".e-n-accordion-item > .e-con",
                        accordionWrapper: ".e-n-accordion-item"
                    },
                    default_state: "expanded"
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $accordion: this.findElement(e.accordion),
                    $contentContainers: this.findElement(e.accordionContentContainers),
                    $accordionItems: this.findElement(e.accordionItems),
                    $accordionTitles: this.findElement(e.accordionItemTitles),
                    $accordionContent: this.findElement(e.accordionContent)
                }
            }
            onInit() {
                super.onInit(...arguments),
                elementorFrontend.isEditMode() && this.interlaceContainers(),
                this.injectKeyboardHandler()
            }
            injectKeyboardHandler() {
                "nested-accordion.default" === this.getSettings("elementName") && new s.default({
                    $element: this.$element,
                    toggleTitle: this.clickListener.bind(this)
                })
            }
            interlaceContainers() {
                const {$contentContainers: e, $accordionItems: t} = this.getDefaultElements();
                e.each(((e,n)=>{
                    t[e].appendChild(n)
                }
                ))
            }
            bindEvents() {
                this.elements.$accordionTitles.on("click", this.clickListener.bind(this))
            }
            unbindEvents() {
                this.elements.$accordionTitles.off()
            }
            clickListener(e) {
                e.preventDefault();
                const t = this.getSettings()
                  , n = e?.currentTarget?.closest(t.selectors.accordionWrapper)
                  , i = n.querySelector(t.selectors.accordionItemTitles)
                  , r = n.querySelector(t.selectors.accordionContent)
                  , {max_items_expended: s} = this.getElementSettings()
                  , {$accordionTitles: o, $accordionItems: a} = this.elements;
                "one" === s && this.closeAllItems(a, o),
                n.open ? this.closeAccordionItem(n, i) : this.prepareOpenAnimation(n, i, r)
            }
            animateItem(e, t, n, i) {
                e.style.overflow = "hidden";
                let r = this.animations.get(e);
                r && r.cancel(),
                r = e.animate({
                    height: [t, n]
                }, {
                    duration: this.getAnimationDuration()
                }),
                r.onfinish = ()=>this.onAnimationFinish(e, i),
                this.animations.set(e, r),
                e.querySelector("summary")?.setAttribute("aria-expanded", i)
            }
            closeAccordionItem(e, t) {
                const n = `${e.offsetHeight}px`
                  , i = `${t.offsetHeight}px`;
                this.animateItem(e, n, i, !1)
            }
            prepareOpenAnimation(e, t, n) {
                e.style.overflow = "hidden",
                e.style.height = `${e.offsetHeight}px`,
                e.open = !0,
                window.requestAnimationFrame((()=>this.openAccordionItem(e, t, n)))
            }
            openAccordionItem(e, t, n) {
                const i = `${e.offsetHeight}px`
                  , r = `${t.offsetHeight + n.offsetHeight}px`;
                this.animateItem(e, i, r, !0)
            }
            onAnimationFinish(e, t) {
                e.open = t,
                this.animations.set(e, null),
                e.style.height = e.style.overflow = ""
            }
            closeAllItems(e, t) {
                t.each(((t,n)=>{
                    this.closeAccordionItem(e[t], n)
                }
                ))
            }
            getAnimationDuration() {
                const {size: e, unit: t} = this.getElementSettings("n_accordion_animation_duration");
                return e * ("ms" === t ? 1 : 1e3)
            }
        }
        t.default = NestedAccordion
    }
    ,
    7323: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090))
          , s = n(6630);
        class NestedTabs extends r.default {
            constructor() {
                super(...arguments),
                this.resizeListenerNestedTabs = null
            }
            getTabTitleFilterSelector(e) {
                return `[data-tab-index="${e}"]`
            }
            getTabContentFilterSelector(e) {
                return `*:nth-child(${e})`
            }
            getTabIndex(e) {
                return e.getAttribute("data-tab-index")
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        widgetContainer: ".e-n-tabs",
                        tabTitle: ".e-n-tab-title",
                        tabContent: ".e-n-tabs-content > .e-con",
                        headingContainer: ".e-n-tabs-heading",
                        activeTabContentContainers: ".e-con.e-active"
                    },
                    classes: {
                        active: "e-active"
                    },
                    ariaAttributes: {
                        titleStateAttribute: "aria-selected",
                        activeTitleSelector: '[aria-selected="true"]'
                    },
                    showTabFn: "show",
                    hideTabFn: "hide",
                    toggleSelf: !1,
                    hidePrevious: !0,
                    autoExpand: !0
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $tabTitles: this.findElement(e.tabTitle),
                    $tabContents: this.findElement(e.tabContent),
                    $headingContainer: this.findElement(e.headingContainer)
                }
            }
            getKeyboardNavigationSettings() {
                return this.getSettings()
            }
            activateDefaultTab() {
                const e = this.getSettings()
                  , t = this.getEditSettings("activeItemIndex") || 1
                  , n = {
                    showTabFn: e.showTabFn,
                    hideTabFn: e.hideTabFn
                };
                this.setSettings({
                    showTabFn: "show",
                    hideTabFn: "hide"
                }),
                this.changeActiveTab(t),
                this.setSettings(n)
            }
            deactivateActiveTab(e) {
                const t = this.getSettings()
                  , n = t.classes.active
                  , i = t.ariaAttributes.activeTitleSelector
                  , r = "." + n
                  , s = this.elements.$tabTitles.filter(i)
                  , o = this.elements.$tabContents.filter(r);
                return this.setTabDeactivationAttributes(s, e),
                o.removeClass(n),
                o[t.hideTabFn](0, (()=>this.onHideTabContent(o))),
                o
            }
            getTitleActivationAttributes() {
                return {
                    tabindex: "0",
                    [this.getSettings("ariaAttributes").titleStateAttribute]: "true"
                }
            }
            setTabDeactivationAttributes(e) {
                const t = this.getSettings("ariaAttributes").titleStateAttribute;
                e.attr({
                    tabindex: "-1",
                    [t]: "false"
                })
            }
            onHideTabContent() {}
            activateTab(e) {
                const t = this.getSettings()
                  , n = t.classes.active
                  , i = "show" === t.showTabFn ? 0 : 400;
                let r = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e))
                  , s = this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));
                if (!r.length) {
                    const t = Math.max(e - 1, 1);
                    r = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),
                    s = this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))
                }
                r.attr(this.getTitleActivationAttributes()),
                s.addClass(n),
                s[t.showTabFn](i, (()=>this.onShowTabContent(s)))
            }
            onShowTabContent(e) {
                elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),
                elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate", e),
                elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")
            }
            isActiveTab(e) {
                return "true" === this.elements.$tabTitles.filter('[data-tab-index="' + e + '"]').attr(this.getSettings("ariaAttributes").titleStateAttribute)
            }
            onTabClick(e) {
                e.preventDefault(),
                this.changeActiveTab(e.currentTarget?.getAttribute("data-tab-index"), !0)
            }
            getTabEvents() {
                return {
                    click: this.onTabClick.bind(this)
                }
            }
            getHeadingEvents() {
                const e = this.elements.$headingContainer[0];
                return {
                    mousedown: s.changeScrollStatus.bind(this, e),
                    mouseup: s.changeScrollStatus.bind(this, e),
                    mouseleave: s.changeScrollStatus.bind(this, e),
                    mousemove: s.setHorizontalTitleScrollValues.bind(this, e, this.getHorizontalScrollSetting())
                }
            }
            bindEvents() {
                this.elements.$tabTitles.on(this.getTabEvents()),
                this.elements.$headingContainer.on(this.getHeadingEvents());
                const e = {
                    element: this.elements.$headingContainer[0],
                    direction: this.getTabsDirection(),
                    justifyCSSVariable: "--n-tabs-heading-justify-content",
                    horizontalScrollStatus: this.getHorizontalScrollSetting()
                };
                this.resizeListenerNestedTabs = s.setHorizontalScrollAlignment.bind(this, e),
                elementorFrontend.elements.$window.on("resize", this.resizeListenerNestedTabs),
                elementorFrontend.elements.$window.on("resize", this.setTouchMode.bind(this)),
                elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.reInitSwipers),
                elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard", this.changeActiveTabByKeyboard.bind(this))
            }
            unbindEvents() {
                this.elements.$tabTitles.off(),
                this.elements.$headingContainer.off(),
                this.elements.$tabContents.children().off(),
                elementorFrontend.elements.$window.off("resize"),
                elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")
            }
            reInitSwipers(e, t) {
                const n = t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
                for (const e of n) {
                    if (!e.swiper)
                        return;
                    e.swiper.initialized = !1,
                    e.swiper.init()
                }
            }
            onInit() {
                super.onInit(...arguments),
                this.getSettings("autoExpand") && this.activateDefaultTab();
                const e = {
                    element: this.elements.$headingContainer[0],
                    direction: this.getTabsDirection(),
                    justifyCSSVariable: "--n-tabs-heading-justify-content",
                    horizontalScrollStatus: this.getHorizontalScrollSetting()
                };
                (0,
                s.setHorizontalScrollAlignment)(e),
                this.setTouchMode(),
                "nested-tabs.default" === this.getSettings("elementName") && new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings())
            }
            onEditSettingsChange(e, t) {
                "activeItemIndex" === e && this.changeActiveTab(t, !1)
            }
            onElementChange(e) {
                if (this.checkSliderPropsToWatch(e)) {
                    const e = {
                        element: this.elements.$headingContainer[0],
                        direction: this.getTabsDirection(),
                        justifyCSSVariable: "--n-tabs-heading-justify-content",
                        horizontalScrollStatus: this.getHorizontalScrollSetting()
                    };
                    (0,
                    s.setHorizontalScrollAlignment)(e)
                }
            }
            checkSliderPropsToWatch(e) {
                return 0 === e.indexOf("horizontal_scroll") || "breakpoint_selector" === e || 0 === e.indexOf("tabs_justify_horizontal") || 0 === e.indexOf("tabs_title_space_between")
            }
            changeActiveTab(e) {
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.isEdit && this.isElementInTheCurrentDocument())
                    return window.top.$e.run("document/repeater/select", {
                        container: elementor.getContainer(this.$element.attr("data-id")),
                        index: parseInt(e)
                    });
                const t = this.isActiveTab(e)
                  , n = this.getSettings();
                if (!n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(e),
                !n.hidePrevious && t && this.deactivateActiveTab(e),
                !t) {
                    if (this.isAccordionVersion())
                        return void this.activateMobileTab(e);
                    this.activateTab(e)
                }
            }
            changeActiveTabByKeyboard(e, t) {
                t.widgetId.toString() === this.getID().toString() && this.changeActiveTab(t.titleIndex, !0)
            }
            activateMobileTab(e) {
                setTimeout((()=>{
                    this.activateTab(e),
                    this.forceActiveTabToBeInViewport(e)
                }
                ), 10)
            }
            forceActiveTabToBeInViewport(e) {
                if (!elementorFrontend.isEditMode())
                    return;
                const t = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e));
                elementor.helpers.isInViewport(t[0]) || t[0].scrollIntoView({
                    block: "center"
                })
            }
            getActiveClass() {
                return this.getSettings().classes.active
            }
            getTabsDirection() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "tabs_justify_horizontal", "", e)
            }
            getHorizontalScrollSetting() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "horizontal_scroll", "", e)
            }
            isAccordionVersion() {
                return "contents" === this.elements.$headingContainer.css("display")
            }
            setTouchMode() {
                const e = this.getSettings("selectors").widgetContainer;
                if (elementorFrontend.isEditMode() || "resize" === event?.type) {
                    const t = ["mobile", "mobile_extra", "tablet", "tablet_extra"]
                      , n = elementorFrontend.getCurrentDeviceMode();
                    if (-1 !== t.indexOf(n))
                        return void this.$element.find(e).attr("data-touch-mode", "true")
                } else if ("ontouchstart"in window)
                    return void this.$element.find(e).attr("data-touch-mode", "true");
                this.$element.find(e).attr("data-touch-mode", "false")
            }
        }
        t.default = NestedTabs
    }
    ,
    5089: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(9268)
          , s = TypeError;
        e.exports = function(e) {
            if (i(e))
                return e;
            throw s(r(e) + " is not a function")
        }
    }
    ,
    1378: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = String
          , s = TypeError;
        e.exports = function(e) {
            if ("object" == typeof e || i(e))
                return e;
            throw s("Can't set " + r(e) + " as a prototype")
        }
    }
    ,
    6112: (e,t,n)=>{
        "use strict";
        var i = n(8759)
          , r = String
          , s = TypeError;
        e.exports = function(e) {
            if (i(e))
                return e;
            throw s(r(e) + " is not an object")
        }
    }
    ,
    6198: (e,t,n)=>{
        "use strict";
        var i = n(4088)
          , r = n(7740)
          , s = n(2871)
          , createMethod = function(e) {
            return function(t, n, o) {
                var a, l = i(t), c = s(l), u = r(o, c);
                if (e && n != n) {
                    for (; c > u; )
                        if ((a = l[u++]) != a)
                            return !0
                } else
                    for (; c > u; u++)
                        if ((e || u in l) && l[u] === n)
                            return e || u || 0;
                return !e && -1
            }
        };
        e.exports = {
            includes: createMethod(!0),
            indexOf: createMethod(!1)
        }
    }
    ,
    2306: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = i({}.toString)
          , s = i("".slice);
        e.exports = function(e) {
            return s(r(e), 8, -1)
        }
    }
    ,
    375: (e,t,n)=>{
        "use strict";
        var i = n(2371)
          , r = n(930)
          , s = n(2306)
          , o = n(211)("toStringTag")
          , a = Object
          , l = "Arguments" == s(function() {
            return arguments
        }());
        e.exports = i ? s : function(e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = a(e), o)) ? n : l ? s(t) : "Object" == (i = s(t)) && r(t.callee) ? "Arguments" : i
        }
    }
    ,
    8474: (e,t,n)=>{
        "use strict";
        var i = n(9606)
          , r = n(6095)
          , s = n(4399)
          , o = n(7826);
        e.exports = function(e, t, n) {
            for (var a = r(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
                var d = a[u];
                i(e, d) || n && i(n, d) || l(e, d, c(t, d))
            }
        }
    }
    ,
    2585: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(7826)
          , s = n(5736);
        e.exports = i ? function(e, t, n) {
            return r.f(e, t, s(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    ,
    5736: e=>{
        "use strict";
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    ,
    1343: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(7826)
          , s = n(3712)
          , o = n(9444);
        e.exports = function(e, t, n, a) {
            a || (a = {});
            var l = a.enumerable
              , c = void 0 !== a.name ? a.name : t;
            if (i(n) && s(n, c, a),
            a.global)
                l ? e[t] = n : o(t, n);
            else {
                try {
                    a.unsafe ? e[t] && (l = !0) : delete e[t]
                } catch (e) {}
                l ? e[t] = n : r.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !a.nonConfigurable,
                    writable: !a.nonWritable
                })
            }
            return e
        }
    }
    ,
    9444: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = Object.defineProperty;
        e.exports = function(e, t) {
            try {
                r(i, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (n) {
                i[e] = t
            }
            return t
        }
    }
    ,
    5283: (e,t,n)=>{
        "use strict";
        var i = n(3677);
        e.exports = !i((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    ,
    7886: e=>{
        "use strict";
        var t = "object" == typeof document && document.all
          , n = void 0 === t && void 0 !== t;
        e.exports = {
            all: t,
            IS_HTMLDDA: n
        }
    }
    ,
    821: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(8759)
          , s = i.document
          , o = r(s) && r(s.createElement);
        e.exports = function(e) {
            return o ? s.createElement(e) : {}
        }
    }
    ,
    4999: e=>{
        "use strict";
        e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    }
    ,
    1448: (e,t,n)=>{
        "use strict";
        var i, r, s = n(2086), o = n(4999), a = s.process, l = s.Deno, c = a && a.versions || l && l.version, u = c && c.v8;
        u && (r = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
        !r && o && (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = o.match(/Chrome\/(\d+)/)) && (r = +i[1]),
        e.exports = r
    }
    ,
    8684: e=>{
        "use strict";
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    ,
    79: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = Error
          , s = i("".replace)
          , o = String(r("zxcasd").stack)
          , a = /\n\s*at [^:]*:[^\n]*/
          , l = a.test(o);
        e.exports = function(e, t) {
            if (l && "string" == typeof e && !r.prepareStackTrace)
                for (; t--; )
                    e = s(e, a, "");
            return e
        }
    }
    ,
    8395: (e,t,n)=>{
        "use strict";
        var i = n(2585)
          , r = n(79)
          , s = n(2114)
          , o = Error.captureStackTrace;
        e.exports = function(e, t, n, a) {
            s && (o ? o(e, t) : i(e, "stack", r(n, a)))
        }
    }
    ,
    2114: (e,t,n)=>{
        "use strict";
        var i = n(3677)
          , r = n(5736);
        e.exports = !i((function() {
            var e = Error("a");
            return !("stack"in e) || (Object.defineProperty(e, "stack", r(1, 7)),
            7 !== e.stack)
        }
        ))
    }
    ,
    1695: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(4399).f
          , s = n(2585)
          , o = n(1343)
          , a = n(9444)
          , l = n(8474)
          , c = n(7189);
        e.exports = function(e, t) {
            var n, u, d, h, g, p = e.target, f = e.global, m = e.stat;
            if (n = f ? i : m ? i[p] || a(p, {}) : (i[p] || {}).prototype)
                for (u in t) {
                    if (h = t[u],
                    d = e.dontCallGetSet ? (g = r(n, u)) && g.value : n[u],
                    !c(f ? u : p + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                        if (typeof h == typeof d)
                            continue;
                        l(h, d)
                    }
                    (e.sham || d && d.sham) && s(h, "sham", !0),
                    o(n, u, h, e)
                }
        }
    }
    ,
    3677: e=>{
        "use strict";
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    ,
    7258: (e,t,n)=>{
        "use strict";
        var i = n(6059)
          , r = Function.prototype
          , s = r.apply
          , o = r.call;
        e.exports = "object" == typeof Reflect && Reflect.apply || (i ? o.bind(s) : function() {
            return o.apply(s, arguments)
        }
        )
    }
    ,
    6059: (e,t,n)=>{
        "use strict";
        var i = n(3677);
        e.exports = !i((function() {
            var e = function() {}
            .bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }
        ))
    }
    ,
    9413: (e,t,n)=>{
        "use strict";
        var i = n(6059)
          , r = Function.prototype.call;
        e.exports = i ? r.bind(r) : function() {
            return r.apply(r, arguments)
        }
    }
    ,
    4398: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(9606)
          , s = Function.prototype
          , o = i && Object.getOwnPropertyDescriptor
          , a = r(s, "name")
          , l = a && "something" === function something() {}
        .name
          , c = a && (!i || i && o(s, "name").configurable);
        e.exports = {
            EXISTS: a,
            PROPER: l,
            CONFIGURABLE: c
        }
    }
    ,
    1518: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(5089);
        e.exports = function(e, t, n) {
            try {
                return i(r(Object.getOwnPropertyDescriptor(e, t)[n]))
            } catch (e) {}
        }
    }
    ,
    8240: (e,t,n)=>{
        "use strict";
        var i = n(6059)
          , r = Function.prototype
          , s = r.call
          , o = i && r.bind.bind(s, s);
        e.exports = i ? o : function(e) {
            return function() {
                return s.apply(e, arguments)
            }
        }
    }
    ,
    563: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(930);
        e.exports = function(e, t) {
            return arguments.length < 2 ? (n = i[e],
            r(n) ? n : void 0) : i[e] && i[e][t];
            var n
        }
    }
    ,
    2964: (e,t,n)=>{
        "use strict";
        var i = n(5089)
          , r = n(1858);
        e.exports = function(e, t) {
            var n = e[t];
            return r(n) ? void 0 : i(n)
        }
    }
    ,
    2086: function(e, t, n) {
        "use strict";
        var check = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof n.g && n.g) || function() {
            return this
        }() || this || Function("return this")()
    },
    9606: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(3060)
          , s = i({}.hasOwnProperty);
        e.exports = Object.hasOwn || function hasOwn(e, t) {
            return s(r(e), t)
        }
    }
    ,
    7153: e=>{
        "use strict";
        e.exports = {}
    }
    ,
    6761: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(3677)
          , s = n(821);
        e.exports = !i && !r((function() {
            return 7 != Object.defineProperty(s("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    ,
    5974: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(3677)
          , s = n(2306)
          , o = Object
          , a = i("".split);
        e.exports = r((function() {
            return !o("z").propertyIsEnumerable(0)
        }
        )) ? function(e) {
            return "String" == s(e) ? a(e, "") : o(e)
        }
        : o
    }
    ,
    5070: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(8759)
          , s = n(7530);
        e.exports = function(e, t, n) {
            var o, a;
            return s && i(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && s(e, a),
            e
        }
    }
    ,
    9277: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(930)
          , s = n(4489)
          , o = i(Function.toString);
        r(s.inspectSource) || (s.inspectSource = function(e) {
            return o(e)
        }
        ),
        e.exports = s.inspectSource
    }
    ,
    8945: (e,t,n)=>{
        "use strict";
        var i = n(8759)
          , r = n(2585);
        e.exports = function(e, t) {
            i(t) && "cause"in t && r(e, "cause", t.cause)
        }
    }
    ,
    3278: (e,t,n)=>{
        "use strict";
        var i, r, s, o = n(640), a = n(2086), l = n(8759), c = n(2585), u = n(9606), d = n(4489), h = n(8944), g = n(7153), p = "Object already initialized", f = a.TypeError, m = a.WeakMap;
        if (o || d.state) {
            var v = d.state || (d.state = new m);
            v.get = v.get,
            v.has = v.has,
            v.set = v.set,
            i = function(e, t) {
                if (v.has(e))
                    throw f(p);
                return t.facade = e,
                v.set(e, t),
                t
            }
            ,
            r = function(e) {
                return v.get(e) || {}
            }
            ,
            s = function(e) {
                return v.has(e)
            }
        } else {
            var b = h("state");
            g[b] = !0,
            i = function(e, t) {
                if (u(e, b))
                    throw f(p);
                return t.facade = e,
                c(e, b, t),
                t
            }
            ,
            r = function(e) {
                return u(e, b) ? e[b] : {}
            }
            ,
            s = function(e) {
                return u(e, b)
            }
        }
        e.exports = {
            set: i,
            get: r,
            has: s,
            enforce: function(e) {
                return s(e) ? r(e) : i(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!l(t) || (n = r(t)).type !== e)
                        throw f("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    }
    ,
    930: (e,t,n)=>{
        "use strict";
        var i = n(7886)
          , r = i.all;
        e.exports = i.IS_HTMLDDA ? function(e) {
            return "function" == typeof e || e === r
        }
        : function(e) {
            return "function" == typeof e
        }
    }
    ,
    7189: (e,t,n)=>{
        "use strict";
        var i = n(3677)
          , r = n(930)
          , s = /#|\.prototype\./
          , isForced = function(e, t) {
            var n = a[o(e)];
            return n == c || n != l && (r(t) ? i(t) : !!t)
        }
          , o = isForced.normalize = function(e) {
            return String(e).replace(s, ".").toLowerCase()
        }
          , a = isForced.data = {}
          , l = isForced.NATIVE = "N"
          , c = isForced.POLYFILL = "P";
        e.exports = isForced
    }
    ,
    1858: e=>{
        "use strict";
        e.exports = function(e) {
            return null == e
        }
    }
    ,
    8759: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(7886)
          , s = r.all;
        e.exports = r.IS_HTMLDDA ? function(e) {
            return "object" == typeof e ? null !== e : i(e) || e === s
        }
        : function(e) {
            return "object" == typeof e ? null !== e : i(e)
        }
    }
    ,
    3296: e=>{
        "use strict";
        e.exports = !1
    }
    ,
    2071: (e,t,n)=>{
        "use strict";
        var i = n(563)
          , r = n(930)
          , s = n(5516)
          , o = n(1876)
          , a = Object;
        e.exports = o ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            var t = i("Symbol");
            return r(t) && s(t.prototype, a(e))
        }
    }
    ,
    2871: (e,t,n)=>{
        "use strict";
        var i = n(4005);
        e.exports = function(e) {
            return i(e.length)
        }
    }
    ,
    3712: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(3677)
          , s = n(930)
          , o = n(9606)
          , a = n(5283)
          , l = n(4398).CONFIGURABLE
          , c = n(9277)
          , u = n(3278)
          , d = u.enforce
          , h = u.get
          , g = String
          , p = Object.defineProperty
          , f = i("".slice)
          , m = i("".replace)
          , v = i([].join)
          , b = a && !r((function() {
            return 8 !== p((function() {}
            ), "length", {
                value: 8
            }).length
        }
        ))
          , y = String(String).split("String")
          , S = e.exports = function(e, t, n) {
            "Symbol(" === f(g(t), 0, 7) && (t = "[" + m(g(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!o(e, "name") || l && e.name !== t) && (a ? p(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t),
            b && n && o(n, "arity") && e.length !== n.arity && p(e, "length", {
                value: n.arity
            });
            try {
                n && o(n, "constructor") && n.constructor ? a && p(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch (e) {}
            var i = d(e);
            return o(i, "source") || (i.source = v(y, "string" == typeof t ? t : "")),
            e
        }
        ;
        Function.prototype.toString = S((function toString() {
            return s(this) && h(this).source || c(this)
        }
        ), "toString")
    }
    ,
    5681: e=>{
        "use strict";
        var t = Math.ceil
          , n = Math.floor;
        e.exports = Math.trunc || function trunc(e) {
            var i = +e;
            return (i > 0 ? n : t)(i)
        }
    }
    ,
    1879: (e,t,n)=>{
        "use strict";
        var i = n(4059);
        e.exports = function(e, t) {
            return void 0 === e ? arguments.length < 2 ? "" : t : i(e)
        }
    }
    ,
    7826: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(6761)
          , s = n(8202)
          , o = n(6112)
          , a = n(2258)
          , l = TypeError
          , c = Object.defineProperty
          , u = Object.getOwnPropertyDescriptor
          , d = "enumerable"
          , h = "configurable"
          , g = "writable";
        t.f = i ? s ? function defineProperty(e, t, n) {
            if (o(e),
            t = a(t),
            o(n),
            "function" == typeof e && "prototype" === t && "value"in n && g in n && !n[g]) {
                var i = u(e, t);
                i && i[g] && (e[t] = n.value,
                n = {
                    configurable: h in n ? n[h] : i[h],
                    enumerable: d in n ? n[d] : i[d],
                    writable: !1
                })
            }
            return c(e, t, n)
        }
        : c : function defineProperty(e, t, n) {
            if (o(e),
            t = a(t),
            o(n),
            r)
                try {
                    return c(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw l("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    ,
    4399: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(9413)
          , s = n(7446)
          , o = n(5736)
          , a = n(4088)
          , l = n(2258)
          , c = n(9606)
          , u = n(6761)
          , d = Object.getOwnPropertyDescriptor;
        t.f = i ? d : function getOwnPropertyDescriptor(e, t) {
            if (e = a(e),
            t = l(t),
            u)
                try {
                    return d(e, t)
                } catch (e) {}
            if (c(e, t))
                return o(!r(s.f, e, t), e[t])
        }
    }
    ,
    62: (e,t,n)=>{
        "use strict";
        var i = n(1352)
          , r = n(8684).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
            return i(e, r)
        }
    }
    ,
    6952: (e,t)=>{
        "use strict";
        t.f = Object.getOwnPropertySymbols
    }
    ,
    5516: (e,t,n)=>{
        "use strict";
        var i = n(8240);
        e.exports = i({}.isPrototypeOf)
    }
    ,
    1352: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(9606)
          , s = n(4088)
          , o = n(6198).indexOf
          , a = n(7153)
          , l = i([].push);
        e.exports = function(e, t) {
            var n, i = s(e), c = 0, u = [];
            for (n in i)
                !r(a, n) && r(i, n) && l(u, n);
            for (; t.length > c; )
                r(i, n = t[c++]) && (~o(u, n) || l(u, n));
            return u
        }
    }
    ,
    7446: (e,t)=>{
        "use strict";
        var n = {}.propertyIsEnumerable
          , i = Object.getOwnPropertyDescriptor
          , r = i && !n.call({
            1: 2
        }, 1);
        t.f = r ? function propertyIsEnumerable(e) {
            var t = i(this, e);
            return !!t && t.enumerable
        }
        : n
    }
    ,
    7530: (e,t,n)=>{
        "use strict";
        var i = n(1518)
          , r = n(6112)
          , s = n(1378);
        e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e, t = !1, n = {};
            try {
                (e = i(Object.prototype, "__proto__", "set"))(n, []),
                t = n instanceof Array
            } catch (e) {}
            return function setPrototypeOf(n, i) {
                return r(n),
                s(i),
                t ? e(n, i) : n.__proto__ = i,
                n
            }
        }() : void 0)
    }
    ,
    7999: (e,t,n)=>{
        "use strict";
        var i = n(9413)
          , r = n(930)
          , s = n(8759)
          , o = TypeError;
        e.exports = function(e, t) {
            var n, a;
            if ("string" === t && r(n = e.toString) && !s(a = i(n, e)))
                return a;
            if (r(n = e.valueOf) && !s(a = i(n, e)))
                return a;
            if ("string" !== t && r(n = e.toString) && !s(a = i(n, e)))
                return a;
            throw o("Can't convert object to primitive value")
        }
    }
    ,
    6095: (e,t,n)=>{
        "use strict";
        var i = n(563)
          , r = n(8240)
          , s = n(62)
          , o = n(6952)
          , a = n(6112)
          , l = r([].concat);
        e.exports = i("Reflect", "ownKeys") || function ownKeys(e) {
            var t = s.f(a(e))
              , n = o.f;
            return n ? l(t, n(e)) : t
        }
    }
    ,
    1632: (e,t,n)=>{
        "use strict";
        var i = n(7826).f;
        e.exports = function(e, t, n) {
            n in e || i(e, n, {
                configurable: !0,
                get: function() {
                    return t[n]
                },
                set: function(e) {
                    t[n] = e
                }
            })
        }
    }
    ,
    9586: (e,t,n)=>{
        "use strict";
        var i = n(1858)
          , r = TypeError;
        e.exports = function(e) {
            if (i(e))
                throw r("Can't call method on " + e);
            return e
        }
    }
    ,
    8944: (e,t,n)=>{
        "use strict";
        var i = n(9197)
          , r = n(5422)
          , s = i("keys");
        e.exports = function(e) {
            return s[e] || (s[e] = r(e))
        }
    }
    ,
    4489: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(9444)
          , s = "__core-js_shared__"
          , o = i[s] || r(s, {});
        e.exports = o
    }
    ,
    9197: (e,t,n)=>{
        "use strict";
        var i = n(3296)
          , r = n(4489);
        (e.exports = function(e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.32.0",
            mode: i ? "pure" : "global",
            copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }
    ,
    5558: (e,t,n)=>{
        "use strict";
        var i = n(1448)
          , r = n(3677)
          , s = n(2086).String;
        e.exports = !!Object.getOwnPropertySymbols && !r((function() {
            var e = Symbol();
            return !s(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && i && i < 41
        }
        ))
    }
    ,
    7740: (e,t,n)=>{
        "use strict";
        var i = n(9502)
          , r = Math.max
          , s = Math.min;
        e.exports = function(e, t) {
            var n = i(e);
            return n < 0 ? r(n + t, 0) : s(n, t)
        }
    }
    ,
    4088: (e,t,n)=>{
        "use strict";
        var i = n(5974)
          , r = n(9586);
        e.exports = function(e) {
            return i(r(e))
        }
    }
    ,
    9502: (e,t,n)=>{
        "use strict";
        var i = n(5681);
        e.exports = function(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : i(t)
        }
    }
    ,
    4005: (e,t,n)=>{
        "use strict";
        var i = n(9502)
          , r = Math.min;
        e.exports = function(e) {
            return e > 0 ? r(i(e), 9007199254740991) : 0
        }
    }
    ,
    3060: (e,t,n)=>{
        "use strict";
        var i = n(9586)
          , r = Object;
        e.exports = function(e) {
            return r(i(e))
        }
    }
    ,
    1288: (e,t,n)=>{
        "use strict";
        var i = n(9413)
          , r = n(8759)
          , s = n(2071)
          , o = n(2964)
          , a = n(7999)
          , l = n(211)
          , c = TypeError
          , u = l("toPrimitive");
        e.exports = function(e, t) {
            if (!r(e) || s(e))
                return e;
            var n, l = o(e, u);
            if (l) {
                if (void 0 === t && (t = "default"),
                n = i(l, e, t),
                !r(n) || s(n))
                    return n;
                throw c("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"),
            a(e, t)
        }
    }
    ,
    2258: (e,t,n)=>{
        "use strict";
        var i = n(1288)
          , r = n(2071);
        e.exports = function(e) {
            var t = i(e, "string");
            return r(t) ? t : t + ""
        }
    }
    ,
    2371: (e,t,n)=>{
        "use strict";
        var i = {};
        i[n(211)("toStringTag")] = "z",
        e.exports = "[object z]" === String(i)
    }
    ,
    4059: (e,t,n)=>{
        "use strict";
        var i = n(375)
          , r = String;
        e.exports = function(e) {
            if ("Symbol" === i(e))
                throw TypeError("Cannot convert a Symbol value to a string");
            return r(e)
        }
    }
    ,
    9268: e=>{
        "use strict";
        var t = String;
        e.exports = function(e) {
            try {
                return t(e)
            } catch (e) {
                return "Object"
            }
        }
    }
    ,
    5422: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = 0
          , s = Math.random()
          , o = i(1..toString);
        e.exports = function(e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++r + s, 36)
        }
    }
    ,
    1876: (e,t,n)=>{
        "use strict";
        var i = n(5558);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    ,
    8202: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(3677);
        e.exports = i && r((function() {
            return 42 != Object.defineProperty((function() {}
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
    }
    ,
    640: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(930)
          , s = i.WeakMap;
        e.exports = r(s) && /native code/.test(String(s))
    }
    ,
    211: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(9197)
          , s = n(9606)
          , o = n(5422)
          , a = n(5558)
          , l = n(1876)
          , c = i.Symbol
          , u = r("wks")
          , d = l ? c.for || c : c && c.withoutSetter || o;
        e.exports = function(e) {
            return s(u, e) || (u[e] = a && s(c, e) ? c[e] : d("Symbol." + e)),
            u[e]
        }
    }
    ,
    1557: (e,t,n)=>{
        "use strict";
        var i = n(563)
          , r = n(9606)
          , s = n(2585)
          , o = n(5516)
          , a = n(7530)
          , l = n(8474)
          , c = n(1632)
          , u = n(5070)
          , d = n(1879)
          , h = n(8945)
          , g = n(8395)
          , p = n(5283)
          , f = n(3296);
        e.exports = function(e, t, n, m) {
            var v = "stackTraceLimit"
              , b = m ? 2 : 1
              , y = e.split(".")
              , S = y[y.length - 1]
              , w = i.apply(null, y);
            if (w) {
                var E = w.prototype;
                if (!f && r(E, "cause") && delete E.cause,
                !n)
                    return w;
                var T = i("Error")
                  , C = t((function(e, t) {
                    var n = d(m ? t : e, void 0)
                      , i = m ? new w(e) : new w;
                    return void 0 !== n && s(i, "message", n),
                    g(i, C, i.stack, 2),
                    this && o(E, this) && u(i, this, C),
                    arguments.length > b && h(i, arguments[b]),
                    i
                }
                ));
                if (C.prototype = E,
                "Error" !== S ? a ? a(C, T) : l(C, T, {
                    name: !0
                }) : p && v in w && (c(C, w, v),
                c(C, w, "prepareStackTrace")),
                l(C, w),
                !f)
                    try {
                        E.name !== S && s(E, "name", S),
                        E.constructor = C
                    } catch (e) {}
                return C
            }
        }
    }
    ,
    740: (e,t,n)=>{
        "use strict";
        var i = n(1695)
          , r = n(2086)
          , s = n(7258)
          , o = n(1557)
          , a = "WebAssembly"
          , l = r[a]
          , c = 7 !== Error("e", {
            cause: 7
        }).cause
          , exportGlobalErrorCauseWrapper = function(e, t) {
            var n = {};
            n[e] = o(e, t, c),
            i({
                global: !0,
                constructor: !0,
                arity: 1,
                forced: c
            }, n)
        }
          , exportWebAssemblyErrorCauseWrapper = function(e, t) {
            if (l && l[e]) {
                var n = {};
                n[e] = o(a + "." + e, t, c),
                i({
                    target: a,
                    stat: !0,
                    constructor: !0,
                    arity: 1,
                    forced: c
                }, n)
            }
        };
        exportGlobalErrorCauseWrapper("Error", (function(e) {
            return function Error(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("EvalError", (function(e) {
            return function EvalError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("RangeError", (function(e) {
            return function RangeError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("ReferenceError", (function(e) {
            return function ReferenceError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("SyntaxError", (function(e) {
            return function SyntaxError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("TypeError", (function(e) {
            return function TypeError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("URIError", (function(e) {
            return function URIError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("CompileError", (function(e) {
            return function CompileError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("LinkError", (function(e) {
            return function LinkError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("RuntimeError", (function(e) {
            return function RuntimeError(t) {
                return s(e, this, arguments)
            }
        }
        ))
    }
    ,
    3203: e=>{
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
}, e=>{
    var t;
    t = 6412,
    e(e.s = t)
}
]);
!function(e) {
    "object" == typeof exports && "undefined" != typeof module || "function" != typeof define || !define.amd ? e() : define("inert", e)
}((function() {
    "use strict";
    var e, t, n, i, o, r, s = function(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        e
    };
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function d(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function u(e, t) {
        d(this, u),
        this._inertManager = t,
        this._rootElement = e,
        this._managedNodes = new Set,
        this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null,
        this._rootElement.setAttribute("aria-hidden", "true"),
        this._makeSubtreeUnfocusable(this._rootElement),
        this._observer = new MutationObserver(this._onMutation.bind(this)),
        this._observer.observe(this._rootElement, {
            attributes: !0,
            childList: !0,
            subtree: !0
        })
    }
    function h(e, t) {
        d(this, h),
        this._node = e,
        this._overrodeFocusMethod = !1,
        this._inertRoots = new Set([t]),
        this._savedTabIndex = null,
        this._destroyed = !1,
        this.ensureUntabbable()
    }
    function l(e) {
        if (d(this, l),
        !e)
            throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = e,
        this._managedNodes = new Map,
        this._inertRoots = new Map,
        this._observer = new MutationObserver(this._watchForInert.bind(this)),
        _(e.head || e.body || e.documentElement),
        "loading" === e.readyState ? e.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded()
    }
    function c(e, t, n) {
        if (e.nodeType == Node.ELEMENT_NODE) {
            var i = e;
            if (s = (t && t(i),
            i.shadowRoot))
                return void c(s, t, s);
            if ("content" == i.localName) {
                for (var o = (s = i).getDistributedNodes ? s.getDistributedNodes() : [], r = 0; r < o.length; r++)
                    c(o[r], t, n);
                return
            }
            if ("slot" == i.localName) {
                for (var s, a = (s = i).assignedNodes ? s.assignedNodes({
                    flatten: !0
                }) : [], d = 0; d < a.length; d++)
                    c(a[d], t, n);
                return
            }
        }
        for (var u = e.firstChild; null != u; )
            c(u, t, n),
            u = u.nextSibling
    }
    function _(e) {
        var t;
        e.querySelector("style#inert-style, link#inert-style") || ((t = document.createElement("style")).setAttribute("id", "inert-style"),
        t.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",
        e.appendChild(t))
    }
    "undefined" != typeof window && (e = Array.prototype.slice,
    t = Element.prototype.matches || Element.prototype.msMatchesSelector,
    n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","),
    s(u, [{
        key: "destructor",
        value: function() {
            this._observer.disconnect(),
            this._rootElement && (null !== this._savedAriaHidden ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")),
            this._managedNodes.forEach((function(e) {
                this._unmanageNode(e.node)
            }
            ), this),
            this._observer = null,
            this._rootElement = null,
            this._managedNodes = null,
            this._inertManager = null
        }
    }, {
        key: "_makeSubtreeUnfocusable",
        value: function(e) {
            var t = this
              , n = (c(e, (function(e) {
                return t._visitNode(e)
            }
            )),
            document.activeElement);
            if (!document.body.contains(e)) {
                for (var i = e, o = void 0; i; ) {
                    if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        o = i;
                        break
                    }
                    i = i.parentNode
                }
                o && (n = o.activeElement)
            }
            e.contains(n) && (n.blur(),
            n === document.activeElement && document.body.focus())
        }
    }, {
        key: "_visitNode",
        value: function(e) {
            e.nodeType === Node.ELEMENT_NODE && (e !== this._rootElement && e.hasAttribute("inert") && this._adoptInertRoot(e),
            (t.call(e, n) || e.hasAttribute("tabindex")) && this._manageNode(e))
        }
    }, {
        key: "_manageNode",
        value: function(e) {
            e = this._inertManager.register(e, this),
            this._managedNodes.add(e)
        }
    }, {
        key: "_unmanageNode",
        value: function(e) {
            (e = this._inertManager.deregister(e, this)) && this._managedNodes.delete(e)
        }
    }, {
        key: "_unmanageSubtree",
        value: function(e) {
            var t = this;
            c(e, (function(e) {
                return t._unmanageNode(e)
            }
            ))
        }
    }, {
        key: "_adoptInertRoot",
        value: function(e) {
            var t = this._inertManager.getInertRoot(e);
            t || (this._inertManager.setInert(e, !0),
            t = this._inertManager.getInertRoot(e)),
            t.managedNodes.forEach((function(e) {
                this._manageNode(e.node)
            }
            ), this)
        }
    }, {
        key: "_onMutation",
        value: function(t, n) {
            t.forEach((function(t) {
                var n, i = t.target;
                "childList" === t.type ? (e.call(t.addedNodes).forEach((function(e) {
                    this._makeSubtreeUnfocusable(e)
                }
                ), this),
                e.call(t.removedNodes).forEach((function(e) {
                    this._unmanageSubtree(e)
                }
                ), this)) : "attributes" === t.type && ("tabindex" === t.attributeName ? this._manageNode(i) : i !== this._rootElement && "inert" === t.attributeName && i.hasAttribute("inert") && (this._adoptInertRoot(i),
                n = this._inertManager.getInertRoot(i),
                this._managedNodes.forEach((function(e) {
                    i.contains(e.node) && n._manageNode(e.node)
                }
                ))))
            }
            ), this)
        }
    }, {
        key: "managedNodes",
        get: function() {
            return new Set(this._managedNodes)
        }
    }, {
        key: "hasSavedAriaHidden",
        get: function() {
            return null !== this._savedAriaHidden
        }
    }, {
        key: "savedAriaHidden",
        set: function(e) {
            this._savedAriaHidden = e
        },
        get: function() {
            return this._savedAriaHidden
        }
    }]),
    i = u,
    s(h, [{
        key: "destructor",
        value: function() {
            var e;
            this._throwIfDestroyed(),
            this._node && this._node.nodeType === Node.ELEMENT_NODE && (e = this._node,
            null !== this._savedTabIndex ? e.setAttribute("tabindex", this._savedTabIndex) : e.removeAttribute("tabindex"),
            this._overrodeFocusMethod && delete e.focus),
            this._node = null,
            this._inertRoots = null,
            this._destroyed = !0
        }
    }, {
        key: "_throwIfDestroyed",
        value: function() {
            if (this.destroyed)
                throw new Error("Trying to access destroyed InertNode")
        }
    }, {
        key: "ensureUntabbable",
        value: function() {
            var e;
            this.node.nodeType === Node.ELEMENT_NODE && (e = this.node,
            t.call(e, n) ? -1 === e.tabIndex && this.hasSavedTabIndex || (e.hasAttribute("tabindex") && (this._savedTabIndex = e.tabIndex),
            e.setAttribute("tabindex", "-1"),
            e.nodeType === Node.ELEMENT_NODE && (e.focus = function() {}
            ,
            this._overrodeFocusMethod = !0)) : e.hasAttribute("tabindex") && (this._savedTabIndex = e.tabIndex,
            e.removeAttribute("tabindex")))
        }
    }, {
        key: "addInertRoot",
        value: function(e) {
            this._throwIfDestroyed(),
            this._inertRoots.add(e)
        }
    }, {
        key: "removeInertRoot",
        value: function(e) {
            this._throwIfDestroyed(),
            this._inertRoots.delete(e),
            0 === this._inertRoots.size && this.destructor()
        }
    }, {
        key: "destroyed",
        get: function() {
            return this._destroyed
        }
    }, {
        key: "hasSavedTabIndex",
        get: function() {
            return null !== this._savedTabIndex
        }
    }, {
        key: "node",
        get: function() {
            return this._throwIfDestroyed(),
            this._node
        }
    }, {
        key: "savedTabIndex",
        set: function(e) {
            this._throwIfDestroyed(),
            this._savedTabIndex = e
        },
        get: function() {
            return this._throwIfDestroyed(),
            this._savedTabIndex
        }
    }]),
    o = h,
    s(l, [{
        key: "setInert",
        value: function(e, t) {
            if (t) {
                if (!this._inertRoots.has(e) && (t = new i(e,this),
                e.setAttribute("inert", ""),
                this._inertRoots.set(e, t),
                !this._document.body.contains(e)))
                    for (var n = e.parentNode; n; )
                        11 === n.nodeType && _(n),
                        n = n.parentNode
            } else
                this._inertRoots.has(e) && (this._inertRoots.get(e).destructor(),
                this._inertRoots.delete(e),
                e.removeAttribute("inert"))
        }
    }, {
        key: "getInertRoot",
        value: function(e) {
            return this._inertRoots.get(e)
        }
    }, {
        key: "register",
        value: function(e, t) {
            var n = this._managedNodes.get(e);
            return void 0 !== n ? n.addInertRoot(t) : n = new o(e,t),
            this._managedNodes.set(e, n),
            n
        }
    }, {
        key: "deregister",
        value: function(e, t) {
            var n = this._managedNodes.get(e);
            return n ? (n.removeInertRoot(t),
            n.destroyed && this._managedNodes.delete(e),
            n) : null
        }
    }, {
        key: "_onDocumentLoaded",
        value: function() {
            e.call(this._document.querySelectorAll("[inert]")).forEach((function(e) {
                this.setInert(e, !0)
            }
            ), this),
            this._observer.observe(this._document.body || this._document.documentElement, {
                attributes: !0,
                subtree: !0,
                childList: !0
            })
        }
    }, {
        key: "_watchForInert",
        value: function(n, i) {
            var o = this;
            n.forEach((function(n) {
                switch (n.type) {
                case "childList":
                    e.call(n.addedNodes).forEach((function(n) {
                        var i;
                        n.nodeType === Node.ELEMENT_NODE && (i = e.call(n.querySelectorAll("[inert]")),
                        t.call(n, "[inert]") && i.unshift(n),
                        i.forEach((function(e) {
                            this.setInert(e, !0)
                        }
                        ), o))
                    }
                    ), o);
                    break;
                case "attributes":
                    if ("inert" !== n.attributeName)
                        return;
                    var i = n.target
                      , r = i.hasAttribute("inert");
                    o.setInert(i, r)
                }
            }
            ), this)
        }
    }]),
    s = l,
    HTMLElement.prototype.hasOwnProperty("inert") || (r = new s(document),
    Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        get: function() {
            return this.hasAttribute("inert")
        },
        set: function(e) {
            r.setInert(this, e)
        }
    })))
}
));
var runtime = function(t) {
    "use strict";
    var e, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value
    }
    , i = (w = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator", a = w.asyncIterator || "@@asyncIterator", c = w.toStringTag || "@@toStringTag";
    function u(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        t[e]
    }
    try {
        u({}, "")
    } catch (r) {
        u = function(t, e, r) {
            return t[e] = r
        }
    }
    function h(t, r, n, i) {
        var a, c, u, h;
        r = r && r.prototype instanceof v ? r : v,
        r = Object.create(r.prototype),
        i = new O(i || []);
        return o(r, "_invoke", {
            value: (a = t,
            c = n,
            u = i,
            h = f,
            function(t, r) {
                if (h === p)
                    throw new Error("Generator is already running");
                if (h === y) {
                    if ("throw" === t)
                        throw r;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (u.method = t,
                u.arg = r; ; ) {
                    var n = u.delegate;
                    if (n && (n = function t(r, n) {
                        var o = n.method
                          , i = r.iterator[o];
                        return i === e ? (n.delegate = null,
                        "throw" === o && r.iterator.return && (n.method = "return",
                        n.arg = e,
                        t(r, n),
                        "throw" === n.method) || "return" !== o && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                        g) : "throw" === (o = l(i, r.iterator, n.arg)).type ? (n.method = "throw",
                        n.arg = o.arg,
                        n.delegate = null,
                        g) : (i = o.arg) ? i.done ? (n[r.resultName] = i.value,
                        n.next = r.nextLoc,
                        "return" !== n.method && (n.method = "next",
                        n.arg = e),
                        n.delegate = null,
                        g) : i : (n.method = "throw",
                        n.arg = new TypeError("iterator result is not an object"),
                        n.delegate = null,
                        g)
                    }(n, u),
                    n)) {
                        if (n === g)
                            continue;
                        return n
                    }
                    if ("next" === u.method)
                        u.sent = u._sent = u.arg;
                    else if ("throw" === u.method) {
                        if (h === f)
                            throw h = y,
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        "return" === u.method && u.abrupt("return", u.arg);
                    if (h = p,
                    "normal" === (n = l(a, c, u)).type) {
                        if (h = u.done ? y : s,
                        n.arg !== g)
                            return {
                                value: n.arg,
                                done: u.done
                            }
                    } else
                        "throw" === n.type && (h = y,
                        u.method = "throw",
                        u.arg = n.arg)
                }
            }
            )
        }),
        r
    }
    function l(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    t.wrap = h;
    var f = "suspendedStart"
      , s = "suspendedYield"
      , p = "executing"
      , y = "completed"
      , g = {};
    function v() {}
    function d() {}
    function m() {}
    var w, b, L = ((b = (b = (u(w = {}, i, (function() {
        return this
    }
    )),
    Object.getPrototypeOf)) && b(b(k([])))) && b !== r && n.call(b, i) && (w = b),
    m.prototype = v.prototype = Object.create(w));
    function x(t) {
        ["next", "throw", "return"].forEach((function(e) {
            u(t, e, (function(t) {
                return this._invoke(e, t)
            }
            ))
        }
        ))
    }
    function E(t, e) {
        var r;
        o(this, "_invoke", {
            value: function(o, i) {
                function a() {
                    return new e((function(r, a) {
                        !function r(o, i, a, c) {
                            var u;
                            if ("throw" !== (o = l(t[o], t, i)).type)
                                return (i = (u = o.arg).value) && "object" == typeof i && n.call(i, "__await") ? e.resolve(i.__await).then((function(t) {
                                    r("next", t, a, c)
                                }
                                ), (function(t) {
                                    r("throw", t, a, c)
                                }
                                )) : e.resolve(i).then((function(t) {
                                    u.value = t,
                                    a(u)
                                }
                                ), (function(t) {
                                    return r("throw", t, a, c)
                                }
                                ));
                            c(o.arg)
                        }(o, i, r, a)
                    }
                    ))
                }
                return r = r ? r.then(a, a) : a()
            }
        })
    }
    function j(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]),
        2 in t && (e.finallyLoc = t[2],
        e.afterLoc = t[3]),
        this.tryEntries.push(e)
    }
    function _(t) {
        var e = t.completion || {};
        e.type = "normal",
        delete e.arg,
        t.completion = e
    }
    function O(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        t.forEach(j, this),
        this.reset(!0)
    }
    function k(t) {
        if (t || "" === t) {
            var r, o = t[i];
            if (o)
                return o.call(t);
            if ("function" == typeof t.next)
                return t;
            if (!isNaN(t.length))
                return r = -1,
                (o = function o() {
                    for (; ++r < t.length; )
                        if (n.call(t, r))
                            return o.value = t[r],
                            o.done = !1,
                            o;
                    return o.value = e,
                    o.done = !0,
                    o
                }
                ).next = o
        }
        throw new TypeError(typeof t + " is not iterable")
    }
    return o(L, "constructor", {
        value: d.prototype = m,
        configurable: !0
    }),
    o(m, "constructor", {
        value: d,
        configurable: !0
    }),
    d.displayName = u(m, c, "GeneratorFunction"),
    t.isGeneratorFunction = function(t) {
        return !!(t = "function" == typeof t && t.constructor) && (t === d || "GeneratorFunction" === (t.displayName || t.name))
    }
    ,
    t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
        u(t, c, "GeneratorFunction")),
        t.prototype = Object.create(L),
        t
    }
    ,
    t.awrap = function(t) {
        return {
            __await: t
        }
    }
    ,
    x(E.prototype),
    u(E.prototype, a, (function() {
        return this
    }
    )),
    t.AsyncIterator = E,
    t.async = function(e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new E(h(e, r, n, o),i);
        return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
            return t.done ? t.value : a.next()
        }
        ))
    }
    ,
    x(L),
    u(L, c, "Generator"),
    u(L, i, (function() {
        return this
    }
    )),
    u(L, "toString", (function() {
        return "[object Generator]"
    }
    )),
    t.keys = function(t) {
        var e, r = Object(t), n = [];
        for (e in r)
            n.push(e);
        return n.reverse(),
        function t() {
            for (; n.length; ) {
                var e = n.pop();
                if (e in r)
                    return t.value = e,
                    t.done = !1,
                    t
            }
            return t.done = !0,
            t
        }
    }
    ,
    t.values = k,
    O.prototype = {
        constructor: O,
        reset: function(t) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = e,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = e,
            this.tryEntries.forEach(_),
            !t)
                for (var r in this)
                    "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type)
                throw t.arg;
            return this.rval
        },
        dispatchException: function(t) {
            if (this.done)
                throw t;
            var r = this;
            function o(n, o) {
                return c.type = "throw",
                c.arg = t,
                r.next = n,
                o && (r.method = "next",
                r.arg = e),
                !!o
            }
            for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                var a = this.tryEntries[i]
                  , c = a.completion;
                if ("root" === a.tryLoc)
                    return o("end");
                if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc")
                      , h = n.call(a, "finallyLoc");
                    if (u && h) {
                        if (this.prev < a.catchLoc)
                            return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc)
                            return o(a.finallyLoc)
                    } else if (u) {
                        if (this.prev < a.catchLoc)
                            return o(a.catchLoc, !0)
                    } else {
                        if (!h)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc)
                            return o(a.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                }
            }
            var a = (i = i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc ? null : i) ? i.completion : {};
            return a.type = t,
            a.arg = e,
            i ? (this.method = "next",
            this.next = i.finallyLoc,
            g) : this.complete(a)
        },
        complete: function(t, e) {
            if ("throw" === t.type)
                throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
            this.method = "return",
            this.next = "end") : "normal" === t.type && e && (this.next = e),
            g
        },
        finish: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc),
                    _(r),
                    g
            }
        },
        catch: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var r, n, o = this.tryEntries[e];
                if (o.tryLoc === t)
                    return "throw" === (r = o.completion).type && (n = r.arg,
                    _(o)),
                    n
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, r, n) {
            return this.delegate = {
                iterator: k(t),
                resultName: r,
                nextLoc: n
            },
            "next" === this.method && (this.arg = e),
            g
        }
    },
    t
}("object" == typeof module ? module.exports : {});
try {
    regeneratorRuntime = runtime
} catch (t) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = runtime : Function("r", "regeneratorRuntime = r")(runtime)
}
;wp.i18n.setLocaleData({
    'text direction\u0004ltr': ['ltr']
});
/*! pro-elements - v3.19.0 - 26-02-2024 */
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[819], {
    2: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        n(4242);
        var i = s(n(4774))
          , o = s(n(9575))
          , r = s(n(6254))
          , a = s(n(5161))
          , l = s(n(5039))
          , c = s(n(9210))
          , d = s(n(450))
          , u = s(n(7660));
        class ElementorProFrontend extends elementorModules.ViewModule {
            onInit() {
                super.onInit(),
                this.config = ElementorProFrontendConfig,
                this.modules = {},
                this.initOnReadyComponents()
            }
            bindEvents() {
                jQuery(window).on("elementor/frontend/init", this.onElementorFrontendInit.bind(this))
            }
            initModules() {
                let e = {
                    motionFX: i.default,
                    sticky: o.default,
                    codeHighlight: r.default,
                    videoPlaylist: a.default,
                    payments: l.default,
                    progressTracker: c.default
                };
                elementorProFrontend.trigger("elementor-pro/modules/init:before"),
                elementorProFrontend.trigger("elementor-pro/modules/init/before"),
                e = elementorFrontend.hooks.applyFilters("elementor-pro/frontend/handlers", e),
                jQuery.each(e, ((e,t)=>{
                    this.modules[e] = new t
                }
                )),
                this.modules.linkActions = {
                    addAction: function() {
                        elementorFrontend.utils.urlActions.addAction(...arguments)
                    }
                }
            }
            onElementorFrontendInit() {
                this.initModules()
            }
            initOnReadyComponents() {
                this.utils = {
                    controls: new d.default,
                    DropdownMenuHeightController: u.default
                }
            }
        }
        window.elementorProFrontend = new ElementorProFrontend
    }
    ,
    450: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Controls {
            getControlValue(e, t, n) {
                let s;
                return s = "object" == typeof e[t] && n ? e[t][n] : e[t],
                s
            }
            getResponsiveControlValue(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                const s = elementorFrontend.getCurrentDeviceMode()
                  , i = this.getControlValue(e, t, n);
                if ("widescreen" === s) {
                    const s = this.getControlValue(e, `${t}_widescreen`, n);
                    return s || 0 === s ? s : i
                }
                const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    withDesktop: !0
                });
                let r = s
                  , a = o.indexOf(s)
                  , l = "";
                for (; a <= o.length; ) {
                    if ("desktop" === r) {
                        l = i;
                        break
                    }
                    const s = `${t}_${r}`
                      , c = this.getControlValue(e, s, n);
                    if (c || 0 === c) {
                        l = c;
                        break
                    }
                    a++,
                    r = o[a]
                }
                return l
            }
        }
    }
    ,
    7660: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class DropdownMenuHeightController {
            constructor(e) {
                this.widgetConfig = e
            }
            calculateStickyMenuNavHeight() {
                this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName, "");
                const e = this.widgetConfig.elements.$dropdownMenuContainer.offset().top - jQuery(window).scrollTop();
                return elementorFrontend.elements.$window.height() - e
            }
            calculateMenuTabContentHeight(e) {
                return elementorFrontend.elements.$window.height() - e[0].getBoundingClientRect().top
            }
            isElementSticky() {
                return this.widgetConfig.elements.$element.hasClass("elementor-sticky") || this.widgetConfig.elements.$element.parents(".elementor-sticky").length
            }
            getMenuHeight() {
                return this.isElementSticky() ? this.calculateStickyMenuNavHeight() + "px" : this.widgetConfig.settings.dropdownMenuContainerMaxHeight
            }
            setMenuHeight(e) {
                this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName, e)
            }
            reassignMobileMenuHeight() {
                const e = this.isToggleActive() ? this.getMenuHeight() : 0;
                return this.setMenuHeight(e)
            }
            reassignMenuHeight(e) {
                if (!this.isElementSticky() || 0 === e.length)
                    return;
                const t = elementorFrontend.elements.$window.height() - e[0].getBoundingClientRect().top;
                e.height() > t && (e.css("height", this.calculateMenuTabContentHeight(e) + "px"),
                e.css("overflow-y", "scroll"))
            }
            resetMenuHeight(e) {
                this.isElementSticky() && (e.css("height", "initial"),
                e.css("overflow-y", "visible"))
            }
            isToggleActive() {
                const e = this.widgetConfig.elements.$menuToggle;
                return this.widgetConfig.attributes?.menuToggleState ? "true" === e.attr(this.widgetConfig.attributes.menuToggleState) : e.hasClass(this.widgetConfig.classes.menuToggleActiveClass)
            }
        }
    }
    ,
    4242: (e,t,n)=>{
        "use strict";
        n.p = ElementorProFrontendConfig.urls.assets + "js/"
    }
    ,
    6254: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("code-highlight", (()=>n.e(714).then(n.bind(n, 8604))))
            }
        }
        t.default = _default
    }
    ,
    4774: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(3515));
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("global", i.default, null)
            }
        }
        t.default = _default
    }
    ,
    3515: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(5469));
        class _default extends elementorModules.frontend.handlers.Base {
            __construct() {
                super.__construct(...arguments),
                this.toggle = elementorFrontend.debounce(this.toggle, 200)
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        container: ".elementor-widget-container"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $container: this.$element.find(e.container)
                }
            }
            bindEvents() {
                elementorFrontend.elements.$window.on("resize", this.toggle)
            }
            unbindEvents() {
                elementorFrontend.elements.$window.off("resize", this.toggle)
            }
            addCSSTransformEvents() {
                this.getElementSettings("motion_fx_motion_fx_scrolling") && !this.isTransitionEventAdded && (this.isTransitionEventAdded = !0,
                this.elements.$container.on("mouseenter", (()=>{
                    this.elements.$container.css("--e-transform-transition-duration", "")
                }
                )))
            }
            initEffects() {
                this.effects = {
                    translateY: {
                        interaction: "scroll",
                        actions: ["translateY"]
                    },
                    translateX: {
                        interaction: "scroll",
                        actions: ["translateX"]
                    },
                    rotateZ: {
                        interaction: "scroll",
                        actions: ["rotateZ"]
                    },
                    scale: {
                        interaction: "scroll",
                        actions: ["scale"]
                    },
                    opacity: {
                        interaction: "scroll",
                        actions: ["opacity"]
                    },
                    blur: {
                        interaction: "scroll",
                        actions: ["blur"]
                    },
                    mouseTrack: {
                        interaction: "mouseMove",
                        actions: ["translateXY"]
                    },
                    tilt: {
                        interaction: "mouseMove",
                        actions: ["tilt"]
                    }
                }
            }
            prepareOptions(e) {
                const t = this.getElementSettings()
                  , n = "motion_fx" === e ? "element" : "background"
                  , s = {};
                jQuery.each(t, ((n,i)=>{
                    const o = new RegExp("^" + e + "_(.+?)_effect")
                      , r = n.match(o);
                    if (!r || !i)
                        return;
                    const a = {}
                      , l = r[1];
                    jQuery.each(t, ((t,n)=>{
                        const s = new RegExp(e + "_" + l + "_(.+)")
                          , i = t.match(s);
                        if (!i)
                            return;
                        "effect" !== i[1] && ("object" == typeof n && (n = Object.keys(n.sizes).length ? n.sizes : n.size),
                        a[i[1]] = n)
                    }
                    ));
                    const c = this.effects[l]
                      , d = c.interaction;
                    s[d] || (s[d] = {}),
                    c.actions.forEach((e=>s[d][e] = a))
                }
                ));
                let i, o = this.$element;
                const r = this.getElementType();
                if ("element" === n && !["section", "container"].includes(r)) {
                    let e;
                    i = o,
                    e = "column" === r ? ".elementor-widget-wrap" : ".elementor-widget-container",
                    o = o.find("> " + e)
                }
                const a = {
                    type: n,
                    interactions: s,
                    elementSettings: t,
                    $element: o,
                    $dimensionsElement: i,
                    refreshDimensions: this.isEdit,
                    range: t[e + "_range"],
                    classes: {
                        element: "elementor-motion-effects-element",
                        parent: "elementor-motion-effects-parent",
                        backgroundType: "elementor-motion-effects-element-type-background",
                        container: "elementor-motion-effects-container",
                        layer: "elementor-motion-effects-layer",
                        perspective: "elementor-motion-effects-perspective"
                    }
                };
                return a.range || "fixed" !== this.getCurrentDeviceSetting("_position") || (a.range = "page"),
                "fixed" === this.getCurrentDeviceSetting("_position") && (a.isFixedPosition = !0),
                "background" === n && "column" === this.getElementType() && (a.addBackgroundLayerTo = " > .elementor-element-populated"),
                a
            }
            activate(e) {
                const t = this.prepareOptions(e);
                jQuery.isEmptyObject(t.interactions) || (this[e] = new i.default(t))
            }
            deactivate(e) {
                this[e] && (this[e].destroy(),
                delete this[e])
            }
            toggle() {
                const e = elementorFrontend.getCurrentDeviceMode()
                  , t = this.getElementSettings();
                ["motion_fx", "background_motion_fx"].forEach((n=>{
                    const s = t[n + "_devices"];
                    (!s || -1 !== s.indexOf(e)) && (t[n + "_motion_fx_scrolling"] || t[n + "_motion_fx_mouse"]) ? this[n] ? this.refreshInstance(n) : this.activate(n) : this.deactivate(n)
                }
                ))
            }
            refreshInstance(e) {
                const t = this[e];
                if (!t)
                    return;
                const n = this.prepareOptions(e);
                t.setSettings(n),
                t.refresh()
            }
            onInit() {
                super.onInit(),
                this.initEffects(),
                this.addCSSTransformEvents(),
                this.toggle()
            }
            onElementChange(e) {
                if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(e))
                    return "motion_fx_motion_fx_scrolling" === e && this.addCSSTransformEvents(),
                    void this.toggle();
                const t = e.match(".*?(motion_fx|_transform)");
                if (t) {
                    const e = t[0].match("(_transform)") ? "motion_fx" : t[0];
                    this.refreshInstance(e),
                    this[e] || this.activate(e)
                }
                /^_position/.test(e) && ["motion_fx", "background_motion_fx"].forEach((e=>{
                    this.refreshInstance(e)
                }
                ))
            }
            onDestroy() {
                super.onDestroy(),
                ["motion_fx", "background_motion_fx"].forEach((e=>{
                    this.deactivate(e)
                }
                ))
            }
        }
        t.default = _default
    }
    ,
    2292: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            getMovePointFromPassedPercents(e, t) {
                return +(t / e * 100).toFixed(2)
            }
            getEffectValueFromMovePoint(e, t) {
                return e * t / 100
            }
            getStep(e, t) {
                return "element" === this.getSettings("type") ? this.getElementStep(e, t) : this.getBackgroundStep(e, t)
            }
            getElementStep(e, t) {
                return -(e - 50) * t.speed
            }
            getBackgroundStep(e, t) {
                const n = this.getSettings("dimensions.movable" + t.axis.toUpperCase());
                return -this.getEffectValueFromMovePoint(n, e)
            }
            getDirectionMovePoint(e, t, n) {
                let s;
                return e < n.start ? "out-in" === t ? s = 0 : "in-out" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(n.start, e),
                "in-out-in" === t && (s = 100 - s)) : e < n.end ? "in-out-in" === t ? s = 0 : "out-in-out" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(n.end - n.start, e - n.start),
                "in-out" === t && (s = 100 - s)) : "in-out" === t ? s = 0 : "out-in" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(100 - n.end, 100 - e),
                "in-out-in" === t && (s = 100 - s)),
                s
            }
            translateX(e, t) {
                e.axis = "x",
                e.unit = "px",
                this.transform("translateX", t, e)
            }
            translateY(e, t) {
                e.axis = "y",
                e.unit = "px",
                this.transform("translateY", t, e)
            }
            translateXY(e, t, n) {
                this.translateX(e, t),
                this.translateY(e, n)
            }
            tilt(e, t, n) {
                const s = {
                    speed: e.speed / 10,
                    direction: e.direction
                };
                this.rotateX(s, n),
                this.rotateY(s, 100 - t)
            }
            rotateX(e, t) {
                e.axis = "x",
                e.unit = "deg",
                this.transform("rotateX", t, e)
            }
            rotateY(e, t) {
                e.axis = "y",
                e.unit = "deg",
                this.transform("rotateY", t, e)
            }
            rotateZ(e, t) {
                e.unit = "deg",
                this.transform("rotateZ", t, e)
            }
            scale(e, t) {
                const n = this.getDirectionMovePoint(t, e.direction, e.range);
                this.updateRulePart("transform", "scale", 1 + e.speed * n / 1e3)
            }
            transform(e, t, n) {
                n.direction && (t = 100 - t),
                this.updateRulePart("transform", e, this.getStep(t, n) + n.unit)
            }
            setCSSTransformVariables(e) {
                this.CSSTransformVariables = [],
                jQuery.each(e, ((e,t)=>{
                    const n = e.match(/_transform_(.+?)_effect/m);
                    if (n && t) {
                        if ("perspective" === n[1])
                            return void this.CSSTransformVariables.unshift(n[1]);
                        if (this.CSSTransformVariables.includes(n[1]))
                            return;
                        this.CSSTransformVariables.push(n[1])
                    }
                }
                ))
            }
            opacity(e, t) {
                const n = this.getDirectionMovePoint(t, e.direction, e.range)
                  , s = e.level / 10
                  , i = 1 - s + this.getEffectValueFromMovePoint(s, n);
                this.$element.css({
                    opacity: i,
                    "will-change": "opacity"
                })
            }
            blur(e, t) {
                const n = this.getDirectionMovePoint(t, e.direction, e.range)
                  , s = e.level - this.getEffectValueFromMovePoint(e.level, n);
                this.updateRulePart("filter", "blur", s + "px")
            }
            updateRulePart(e, t, n) {
                this.rulesVariables[e] || (this.rulesVariables[e] = {}),
                this.rulesVariables[e][t] || (this.rulesVariables[e][t] = !0,
                this.updateRule(e));
                const s = `--${t}`;
                this.$element[0].style.setProperty(s, n)
            }
            updateRule(e) {
                let t = "";
                t += this.concatTransformCSSProperties(e),
                t += this.concatTransformMotionEffectCSSProperties(e),
                this.$element.css(e, t)
            }
            concatTransformCSSProperties(e) {
                let t = "";
                return "transform" === e && jQuery.each(this.CSSTransformVariables, ((e,n)=>{
                    const s = n;
                    n.startsWith("flip") && (n = n.replace("flip", "scale"));
                    const i = n.startsWith("rotate") || n.startsWith("skew") ? "deg" : "px"
                      , o = n.startsWith("scale") ? 1 : 0 + i;
                    t += `${n}(var(--e-transform-${s}, ${o}))`
                }
                )),
                t
            }
            concatTransformMotionEffectCSSProperties(e) {
                let t = "";
                return jQuery.each(this.rulesVariables[e], (e=>{
                    t += `${e}(var(--${e}))`
                }
                )),
                t
            }
            runAction(e, t, n) {
                t.affectedRange && (t.affectedRange.start > n && (n = t.affectedRange.start),
                t.affectedRange.end < n && (n = t.affectedRange.end));
                for (var s = arguments.length, i = new Array(s > 3 ? s - 3 : 0), o = 3; o < s; o++)
                    i[o - 3] = arguments[o];
                this[e](t, n, ...i)
            }
            refresh() {
                this.rulesVariables = {},
                this.CSSTransformVariables = [],
                this.$element.css({
                    transform: "",
                    filter: "",
                    opacity: "",
                    "will-change": ""
                })
            }
            onInit() {
                this.$element = this.getSettings("$targetElement"),
                this.refresh()
            }
        }
        t.default = _default
    }
    ,
    371: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(3231));
        class _default extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                (0,
                i.default)(this, "onInsideViewport", (()=>{
                    this.run(),
                    this.animationFrameRequest = requestAnimationFrame(this.onInsideViewport)
                }
                ))
            }
            __construct(e) {
                this.motionFX = e.motionFX,
                this.intersectionObservers || this.setElementInViewportObserver()
            }
            setElementInViewportObserver() {
                this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({
                    callback: e=>{
                        e.isInViewport ? this.onInsideViewport() : this.removeAnimationFrameRequest()
                    }
                });
                const e = "page" === this.motionFX.getSettings("range") ? elementorFrontend.elements.$body[0] : this.motionFX.elements.$parent[0];
                this.intersectionObserver.observe(e)
            }
            runCallback() {
                this.getSettings("callback")(...arguments)
            }
            removeIntersectionObserver() {
                this.intersectionObserver && this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0])
            }
            removeAnimationFrameRequest() {
                this.animationFrameRequest && cancelAnimationFrame(this.animationFrameRequest)
            }
            destroy() {
                this.removeAnimationFrameRequest(),
                this.removeIntersectionObserver()
            }
            onInit() {
                super.onInit()
            }
        }
        t.default = _default
    }
    ,
    3802: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(371));
        class MouseMoveInteraction extends i.default {
            bindEvents() {
                MouseMoveInteraction.mouseTracked || (elementorFrontend.elements.$window.on("mousemove", MouseMoveInteraction.updateMousePosition),
                MouseMoveInteraction.mouseTracked = !0)
            }
            run() {
                const e = MouseMoveInteraction.mousePosition
                  , t = this.oldMousePosition;
                if (t.x === e.x && t.y === e.y)
                    return;
                this.oldMousePosition = {
                    x: e.x,
                    y: e.y
                };
                const n = 100 / innerWidth * e.x
                  , s = 100 / innerHeight * e.y;
                this.runCallback(n, s)
            }
            onInit() {
                this.oldMousePosition = {},
                super.onInit()
            }
        }
        t.default = MouseMoveInteraction,
        MouseMoveInteraction.mousePosition = {},
        MouseMoveInteraction.updateMousePosition = e=>{
            MouseMoveInteraction.mousePosition = {
                x: e.clientX,
                y: e.clientY
            }
        }
    }
    ,
    5931: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(371));
        class _default extends i.default {
            run() {
                if (pageYOffset === this.windowScrollTop)
                    return !1;
                this.onScrollMovement(),
                this.windowScrollTop = pageYOffset
            }
            onScrollMovement() {
                this.updateMotionFxDimensions(),
                this.updateAnimation(),
                this.resetTransitionVariable()
            }
            resetTransitionVariable() {
                this.motionFX.$element.css("--e-transform-transition-duration", "100ms")
            }
            updateMotionFxDimensions() {
                this.motionFX.getSettings().refreshDimensions && this.motionFX.defineDimensions()
            }
            updateAnimation() {
                let e;
                e = "page" === this.motionFX.getSettings("range") ? elementorModules.utils.Scroll.getPageScrollPercentage() : this.motionFX.getSettings("isFixedPosition") ? elementorModules.utils.Scroll.getPageScrollPercentage({}, window.innerHeight) : elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent),
                this.runCallback(e)
            }
        }
        t.default = _default
    }
    ,
    5469: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(5931))
          , o = s(n(3802))
          , r = s(n(2292));
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    type: "element",
                    $element: null,
                    $dimensionsElement: null,
                    addBackgroundLayerTo: null,
                    interactions: {},
                    refreshDimensions: !1,
                    range: "viewport",
                    classes: {
                        element: "motion-fx-element",
                        parent: "motion-fx-parent",
                        backgroundType: "motion-fx-element-type-background",
                        container: "motion-fx-container",
                        layer: "motion-fx-layer",
                        perspective: "motion-fx-perspective"
                    }
                }
            }
            bindEvents() {
                this.defineDimensions = this.defineDimensions.bind(this),
                elementorFrontend.elements.$window.on("resize elementor-pro/motion-fx/recalc", this.defineDimensions)
            }
            unbindEvents() {
                elementorFrontend.elements.$window.off("resize elementor-pro/motion-fx/recalc", this.defineDimensions)
            }
            addBackgroundLayer() {
                const e = this.getSettings();
                this.elements.$motionFXContainer = jQuery("<div>", {
                    class: e.classes.container
                }),
                this.elements.$motionFXLayer = jQuery("<div>", {
                    class: e.classes.layer
                }),
                this.updateBackgroundLayerSize(),
                this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
                (e.addBackgroundLayerTo ? this.$element.find(e.addBackgroundLayerTo) : this.$element).prepend(this.elements.$motionFXContainer)
            }
            removeBackgroundLayer() {
                this.elements.$motionFXContainer.remove()
            }
            updateBackgroundLayerSize() {
                const e = this.getSettings()
                  , t = {
                    x: 0,
                    y: 0
                }
                  , n = e.interactions.mouseMove
                  , s = e.interactions.scroll;
                n && n.translateXY && (t.x = 10 * n.translateXY.speed,
                t.y = 10 * n.translateXY.speed),
                s && (s.translateX && (t.x = 10 * s.translateX.speed),
                s.translateY && (t.y = 10 * s.translateY.speed)),
                this.elements.$motionFXLayer.css({
                    width: 100 + t.x + "%",
                    height: 100 + t.y + "%"
                })
            }
            defineDimensions() {
                const e = this.getSettings("$dimensionsElement") || this.$element
                  , t = e.offset()
                  , n = {
                    elementHeight: e.outerHeight(),
                    elementWidth: e.outerWidth(),
                    elementTop: t.top,
                    elementLeft: t.left
                };
                n.elementRange = n.elementHeight + innerHeight,
                this.setSettings("dimensions", n),
                "background" === this.getSettings("type") && this.defineBackgroundLayerDimensions()
            }
            defineBackgroundLayerDimensions() {
                const e = this.getSettings("dimensions");
                e.layerHeight = this.elements.$motionFXLayer.height(),
                e.layerWidth = this.elements.$motionFXLayer.width(),
                e.movableX = e.layerWidth - e.elementWidth,
                e.movableY = e.layerHeight - e.elementHeight,
                this.setSettings("dimensions", e)
            }
            initInteractionsTypes() {
                this.interactionsTypes = {
                    scroll: i.default,
                    mouseMove: o.default
                }
            }
            prepareSpecialActions() {
                const e = this.getSettings()
                  , t = !(!e.interactions.mouseMove || !e.interactions.mouseMove.tilt);
                this.elements.$parent.toggleClass(e.classes.perspective, t)
            }
            cleanSpecialActions() {
                const e = this.getSettings();
                this.elements.$parent.removeClass(e.classes.perspective)
            }
            runInteractions() {
                var e = this;
                const t = this.getSettings();
                this.actions.setCSSTransformVariables(t.elementSettings),
                this.prepareSpecialActions(),
                jQuery.each(t.interactions, ((t,n)=>{
                    this.interactions[t] = new this.interactionsTypes[t]({
                        motionFX: this,
                        callback: function() {
                            for (var t = arguments.length, s = new Array(t), i = 0; i < t; i++)
                                s[i] = arguments[i];
                            jQuery.each(n, ((t,n)=>e.actions.runAction(t, n, ...s)))
                        }
                    }),
                    this.interactions[t].run()
                }
                ))
            }
            destroyInteractions() {
                this.cleanSpecialActions(),
                jQuery.each(this.interactions, ((e,t)=>t.destroy())),
                this.interactions = {}
            }
            refresh() {
                this.actions.setSettings(this.getSettings()),
                "background" === this.getSettings("type") && (this.updateBackgroundLayerSize(),
                this.defineBackgroundLayerDimensions()),
                this.actions.refresh(),
                this.destroyInteractions(),
                this.runInteractions()
            }
            destroy() {
                this.destroyInteractions(),
                this.actions.refresh();
                const e = this.getSettings();
                this.$element.removeClass(e.classes.element),
                this.elements.$parent.removeClass(e.classes.parent),
                "background" === e.type && (this.$element.removeClass(e.classes.backgroundType),
                this.removeBackgroundLayer())
            }
            onInit() {
                super.onInit();
                const e = this.getSettings();
                this.$element = e.$element,
                this.elements.$parent = this.$element.parent(),
                this.$element.addClass(e.classes.element),
                this.elements.$parent = this.$element.parent(),
                this.elements.$parent.addClass(e.classes.parent),
                "background" === e.type && (this.$element.addClass(e.classes.backgroundType),
                this.addBackgroundLayer()),
                this.defineDimensions(),
                e.$targetElement = "element" === e.type ? this.$element : this.elements.$motionFXLayer,
                this.interactions = {},
                this.actions = new r.default(e),
                this.initInteractionsTypes(),
                this.runInteractions()
            }
        }
        t.default = _default
    }
    ,
    5039: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("paypal-button", (()=>n.e(256).then(n.bind(n, 4452)))),
                elementorFrontend.elementsHandler.attachHandler("stripe-button", (()=>Promise.all([n.e(699), n.e(156)]).then(n.bind(n, 7121))))
            }
        }
        t.default = _default
    }
    ,
    9210: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("progress-tracker", (()=>n.e(241).then(n.bind(n, 2177))))
            }
        }
        t.default = _default
    }
    ,
    9575: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(2090));
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("section", i.default, null),
                elementorFrontend.elementsHandler.attachHandler("container", i.default, null),
                elementorFrontend.elementsHandler.attachHandler("widget", i.default, null)
            }
        }
        t.default = _default
    }
    ,
    2090: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = elementorModules.frontend.handlers.Base.extend({
            currentConfig: {},
            debouncedReactivate: null,
            bindEvents() {
                elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "sticky", "resize", this.reactivateOnResize)
            },
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID() + "sticky", "resize", this.reactivateOnResize)
            },
            isStickyInstanceActive() {
                return void 0 !== this.$element.data("sticky")
            },
            getResponsiveSetting(e) {
                const t = this.getElementSettings();
                return elementorFrontend.getCurrentDeviceSetting(t, e)
            },
            getResponsiveSettingList: e=>["", ...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((t=>t ? `${e}_${t}` : e)),
            getConfig() {
                const e = this.getElementSettings()
                  , t = {
                    to: e.sticky,
                    offset: this.getResponsiveSetting("sticky_offset"),
                    effectsOffset: this.getResponsiveSetting("sticky_effects_offset"),
                    classes: {
                        sticky: "elementor-sticky",
                        stickyActive: "elementor-sticky--active elementor-section--handles-inside",
                        stickyEffects: "elementor-sticky--effects",
                        spacer: "elementor-sticky__spacer"
                    },
                    isRTL: elementorFrontend.config.is_rtl,
                    handleScrollbarWidth: elementorFrontend.isEditMode()
                }
                  , n = elementorFrontend.elements.$wpAdminBar
                  , s = this.isContainerElement(this.$element[0]) && !this.isContainerElement(this.$element[0].parentElement);
                return n.length && "top" === e.sticky && "fixed" === n.css("position") && (t.offset += n.height()),
                e.sticky_parent && !s && (t.parent = ".e-container, .e-container__inner, .e-con, .e-con-inner, .elementor-widget-wrap"),
                t
            },
            activate() {
                this.currentConfig = this.getConfig(),
                this.$element.sticky(this.currentConfig)
            },
            deactivate() {
                this.isStickyInstanceActive() && this.$element.sticky("destroy")
            },
            run(e) {
                if (this.getElementSettings("sticky")) {
                    var t = elementorFrontend.getCurrentDeviceMode();
                    -1 !== this.getElementSettings("sticky_on").indexOf(t) ? !0 === e ? this.reactivate() : this.isStickyInstanceActive() || this.activate() : this.deactivate()
                } else
                    this.deactivate()
            },
            reactivateOnResize() {
                clearTimeout(this.debouncedReactivate),
                this.debouncedReactivate = setTimeout((()=>{
                    const e = this.getConfig();
                    JSON.stringify(e) !== JSON.stringify(this.currentConfig) && this.run(!0)
                }
                ), 300)
            },
            reactivate() {
                this.deactivate(),
                this.activate()
            },
            onElementChange(e) {
                -1 !== ["sticky", "sticky_on"].indexOf(e) && this.run(!0);
                -1 !== [...this.getResponsiveSettingList("sticky_offset"), ...this.getResponsiveSettingList("sticky_effects_offset"), "sticky_parent"].indexOf(e) && this.reactivate()
            },
            onDeviceModeChange() {
                setTimeout((()=>this.run(!0)))
            },
            onInit() {
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments),
                elementorFrontend.isEditMode() && elementor.listenTo(elementor.channels.deviceMode, "change", (()=>this.onDeviceModeChange())),
                this.run()
            },
            onDestroy() {
                elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments),
                this.deactivate()
            },
            isContainerElement: e=>["e-container", "e-container__inner", "e-con", "e-con-inner"].some((t=>e?.classList.contains(t)))
        })
    }
    ,
    5161: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.hooks.addAction("frontend/element_ready/video-playlist.default", (e=>{
                    n.e(721).then(n.bind(n, 1580)).then((t=>{
                        let {default: n} = t;
                        elementorFrontend.elementsHandler.addHandler(n, {
                            $element: e,
                            toggleSelf: !1
                        })
                    }
                    ))
                }
                ))
            }
        }
        t.default = _default
    }
    ,
    3231: (e,t,n)=>{
        var s = n(4040);
        e.exports = function _defineProperty(e, t, n) {
            return (t = s(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
    ,
    3203: e=>{
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
    ,
    6027: (e,t,n)=>{
        var s = n(7501).default;
        e.exports = function _toPrimitive(e, t) {
            if ("object" !== s(e) || null === e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" !== s(i))
                    return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
    ,
    4040: (e,t,n)=>{
        var s = n(7501).default
          , i = n(6027);
        e.exports = function _toPropertyKey(e) {
            var t = i(e, "string");
            return "symbol" === s(t) ? t : String(t)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
    ,
    7501: e=>{
        function _typeof(t) {
            return e.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            _typeof(t)
        }
        e.exports = _typeof,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
}, e=>{
    var t;
    t = 2,
    e(e.s = t)
}
]);
!function() {
    "use strict";
    function Waypoint(options) {
        if (!options)
            throw new Error("No options passed to Waypoint constructor");
        if (!options.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter,
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options),
        this.element = this.options.element,
        this.adapter = new Waypoint.Adapter(this.element),
        this.callback = options.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context),
        Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        allWaypoints[this.key] = this,
        keyCounter += 1
    }
    var keyCounter = 0
      , allWaypoints = {};
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }
    ,
    Waypoint.prototype.trigger = function(args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }
    ,
    Waypoint.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key]
    }
    ,
    Waypoint.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    Waypoint.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    Waypoint.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints)
            allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++)
            allWaypointsArray[i][method]()
    }
    ,
    Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }
    ,
    Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }
    ,
    Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints)
            allWaypoints[waypointKey].enabled = !0;
        return this
    }
    ,
    Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    Waypoint.adapters = [],
    Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = Waypoint
}(),
function() {
    "use strict";
    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }
    function Context(element) {
        this.element = element,
        this.Adapter = Waypoint.Adapter,
        this.adapter = new this.Adapter(element),
        this.key = "waypoint-context-" + keyCounter,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        element.waypointContextKey = this.key,
        contexts[element.waypointContextKey] = this,
        keyCounter += 1,
        Waypoint.windowContext || (Waypoint.windowContext = !0,
        Waypoint.windowContext = new Context(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var keyCounter = 0
      , contexts = {}
      , Waypoint = window.Waypoint
      , oldWindowLoad = window.onload;
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint,
        this.refresh()
    }
    ,
    Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"),
        delete contexts[this.key])
    }
    ,
    Context.prototype.createThrottledResizeHandler = function() {
        function resizeHandler() {
            self.handleResize(),
            self.didResize = !1
        }
        var self = this;
        this.adapter.on("resize.waypoints", function() {
            self.didResize || (self.didResize = !0,
            Waypoint.requestAnimationFrame(resizeHandler))
        })
    }
    ,
    Context.prototype.createThrottledScrollHandler = function() {
        function scrollHandler() {
            self.handleScroll(),
            self.didScroll = !1
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function() {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0,
            Waypoint.requestAnimationFrame(scrollHandler))
        })
    }
    ,
    Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Context.prototype.handleScroll = function() {
        var triggeredGroups = {}
          , axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey]
              , isForward = axis.newScroll > axis.oldScroll
              , direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
                      , nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
                      , crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
                      , crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction),
                    triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups)
            triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }
    ,
    Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key],
        this.checkEmpty()
    }
    ,
    Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    Context.prototype.destroy = function() {
        var allWaypoints = [];
        for (var axis in this.waypoints)
            for (var waypointKey in this.waypoints[axis])
                allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++)
            allWaypoints[i].destroy()
    }
    ,
    Context.prototype.refresh = function() {
        var axes, isWindow = this.element == this.element.window, contextOffset = isWindow ? void 0 : this.adapter.offset(), triggeredGroups = {};
        this.handleScroll(),
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey], adjustment = waypoint.options.offset, oldTriggerPoint = waypoint.triggerPoint, elementOffset = 0, freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
                "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment),
                waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))),
                contextModifier = axis.contextScroll - axis.contextOffset,
                waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment),
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll,
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll,
                triggeredBackward = wasBeforeScroll && nowAfterScroll,
                triggeredForward = !wasBeforeScroll && !nowAfterScroll,
                !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward),
                triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward),
                triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward),
                triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups)
                triggeredGroups[groupKey].flushTriggers()
        }),
        this
    }
    ,
    Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }
    ,
    Context.refreshAll = function() {
        for (var contextId in contexts)
            contexts[contextId].refresh()
    }
    ,
    Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }
    ,
    window.onload = function() {
        oldWindowLoad && oldWindowLoad(),
        Context.refreshAll()
    }
    ,
    Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }
    ,
    Waypoint.Context = Context
}(),
function() {
    "use strict";
    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }
    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }
    function Group(options) {
        this.name = options.name,
        this.axis = options.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        groups[this.axis][this.name] = this
    }
    var groups = {
        vertical: {},
        horizontal: {}
    }
      , Waypoint = window.Waypoint;
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }
    ,
    Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction]
              , reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
          , isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }
    ,
    Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }
    ,
    Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }
    ,
    Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }
    ,
    Group.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }
    ,
    Waypoint.Group = Group
}(),
function() {
    "use strict";
    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    var $ = window.jQuery
      , Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }),
    $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
        JQueryAdapter[method] = $[method]
    }),
    Waypoint.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }),
    Waypoint.Adapter = JQueryAdapter
}(),
function() {
    "use strict";
    function createExtension(framework) {
        return function() {
            var waypoints = []
              , overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]),
            overrides.handler = arguments[0]),
            this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                });
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]),
                waypoints.push(new Waypoint(options))
            }),
            waypoints
        }
    }
    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
    window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;
    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }
    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {},
    x.ui.version = "1.13.2",
    /*!
         * jQuery UI :data 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.extend(x.expr.pseudos, {
        data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
            return function(t) {
                return !!x.data(t, e)
            }
        }) : function(t, e, i) {
            return !!x.data(t, i[3])
        }
    }),
    /*!
         * jQuery UI Disable Selection 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.fn.extend({
        disableSelection: (t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
        function() {
            return this.on(t + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }
        ),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }),
    /*!
         * jQuery UI Focusable 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.ui.focusable = function(t, e) {
        var i, n, o, s = t.nodeName.toLowerCase();
        return "area" === s ? (o = (i = t.parentNode).name,
        !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e,
        n && x(t).is(":visible") && function(t) {
            var e = t.css("visibility");
            for (; "inherit" === e; )
                t = t.parent(),
                e = t.css("visibility");
            return "visible" === e
        }(x(t)))
    }
    ,
    x.extend(x.expr.pseudos, {
        focusable: function(t) {
            return x.ui.focusable(t, null != x.attr(t, "tabindex"))
        }
    }),
    x.fn._form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
    }
    ,
    /*!
         * jQuery UI Form Reset Mixin 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = x(this);
            setTimeout(function() {
                var t = e.data("ui-form-reset-instances");
                x.each(t, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            var t;
            this.form = this.element._form(),
            this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t))
        },
        _unbindFormResetHandler: function() {
            var t;
            this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1),
            t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
        }
    },
    x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    /*!
         * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
    i = function(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    }
    ,
    x.escapeSelector = function(t) {
        return (t + "").replace(e, i)
    }
    ),
    x.fn.even && x.fn.odd || x.fn.extend({
        even: function() {
            return this.filter(function(t) {
                return t % 2 == 0
            })
        },
        odd: function() {
            return this.filter(function(t) {
                return t % 2 == 1
            })
        }
    }),
    /*!
         * jQuery UI Keycode 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    /*!
         * jQuery UI Labels 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.fn.labels = function() {
        var t, e, i;
        return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
        (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()),
        t = "label[for='" + x.escapeSelector(t) + "']",
        e = e.add(i.find(t).addBack(t))),
        this.pushStack(e)) : this.pushStack([])
    }
    ,
    x.ui.plugin = {
        add: function(t, e, i) {
            var n, o = x.ui[t].prototype;
            for (n in i)
                o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([e, i[n]])
        },
        call: function(t, e, i, n) {
            var o, s = t.plugins[e];
            if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (o = 0; o < s.length; o++)
                    t.options[s[o][0]] && s[o][1].apply(t.element, i)
        }
    },
    /*!
         * jQuery UI Position 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/position/
         */
    W = Math.max,
    C = Math.abs,
    o = /left|center|right/,
    s = /top|center|bottom/,
    r = /[\+\-]\d+(\.[\d]+)?%?/,
    l = /^\w+/,
    a = /%$/,
    h = x.fn.position,
    x.position = {
        scrollbarWidth: function() {
            var t, e, i;
            return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],
            x("body").append(e),
            t = i.offsetWidth,
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            n = t - i)
        },
        getScrollInfo: function(t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
              , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
              , e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: e ? x.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var e = x(t || window)
              , i = N(e[0])
              , n = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: n,
                offset: !i && !n ? x(t).offset() : {
                    left: 0,
                    top: 0
                },
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    },
    x.fn.position = function(f) {
        var c, d, p, g, m, v, y, w, b, _, t, e;
        return f && f.of ? (v = "string" == typeof (f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of),
        y = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(y),
        b = (f.collision || "flip").split(" "),
        _ = {},
        e = 9 === (e = (t = v)[0]).nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : N(e) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : e.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: e.pageY,
                left: e.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        },
        v[0].preventDefault && (f.at = "left top"),
        d = e.width,
        p = e.height,
        m = x.extend({}, g = e.offset),
        x.each(["my", "at"], function() {
            var t, e, i = (f[this] || "").split(" ");
            (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center",
            i[1] = s.test(i[1]) ? i[1] : "center",
            t = r.exec(i[0]),
            e = r.exec(i[1]),
            _[this] = [t ? t[0] : 0, e ? e[0] : 0],
            f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
        }),
        1 === b.length && (b[1] = b[0]),
        "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2),
        "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2),
        c = E(_.at, d, p),
        m.left += c[0],
        m.top += c[1],
        this.each(function() {
            var i, t, r = x(this), l = r.outerWidth(), a = r.outerHeight(), e = L(this, "marginLeft"), n = L(this, "marginTop"), o = l + e + L(this, "marginRight") + w.width, s = a + n + L(this, "marginBottom") + w.height, h = x.extend({}, m), u = E(_.my, r.outerWidth(), r.outerHeight());
            "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2),
            "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2),
            h.left += u[0],
            h.top += u[1],
            i = {
                marginLeft: e,
                marginTop: n
            },
            x.each(["left", "top"], function(t, e) {
                x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                    targetWidth: d,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: a,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: s,
                    offset: [c[0] + u[0], c[1] + u[1]],
                    my: f.my,
                    at: f.at,
                    within: y,
                    elem: r
                })
            }),
            f.using && (t = function(t) {
                var e = g.left - h.left
                  , i = e + d - l
                  , n = g.top - h.top
                  , o = n + p - a
                  , s = {
                    target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: d,
                        height: p
                    },
                    element: {
                        element: r,
                        left: h.left,
                        top: h.top,
                        width: l,
                        height: a
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                };
                d < l && C(e + i) < d && (s.horizontal = "center"),
                p < a && C(n + o) < p && (s.vertical = "middle"),
                W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical",
                f.using.call(this, t, s)
            }
            ),
            r.offset(x.extend(h, {
                using: t
            }))
        })) : h.apply(this, arguments)
    }
    ,
    x.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, n = n.width, s = t.left - e.collisionPosition.marginLeft, r = o - s, l = s + e.collisionWidth - n - o;
                e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o,
                t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
            },
            top: function(t, e) {
                var i, n = e.within, n = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height, s = t.top - e.collisionPosition.marginTop, r = n - s, l = s + e.collisionHeight - o - n;
                e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n,
                t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i = e.within
                  , n = i.offset.left + i.scrollLeft
                  , o = i.width
                  , i = i.isWindow ? i.scrollLeft : i.offset.left
                  , s = t.left - e.collisionPosition.marginLeft
                  , r = s - i
                  , s = s + e.collisionWidth - o - i
                  , l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0
                  , a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0
                  , h = -2 * e.offset[0];
                r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
            },
            top: function(t, e) {
                var i = e.within
                  , n = i.offset.top + i.scrollTop
                  , o = i.height
                  , i = i.isWindow ? i.scrollTop : i.offset.top
                  , s = t.top - e.collisionPosition.marginTop
                  , r = s - i
                  , s = s + e.collisionHeight - o - i
                  , l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0
                  , a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0
                  , h = -2 * e.offset[1];
                r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
            }
        },
        flipfit: {
            left: function() {
                x.ui.position.flip.left.apply(this, arguments),
                x.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                x.ui.position.flip.top.apply(this, arguments),
                x.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    x.ui.safeActiveElement = function(e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i = (i = i || e.body).nodeName ? i : e.body
    }
    ,
    x.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
    }
    ,
    /*!
         * jQuery UI Scroll Parent 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.fn.scrollParent = function(t) {
        var e = this.css("position")
          , i = "absolute" === e
          , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , t = this.parents().filter(function() {
            var t = x(this);
            return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
    }
    ,
    /*!
         * jQuery UI Tabbable 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.extend(x.expr.pseudos, {
        tabbable: function(t) {
            var e = x.attr(t, "tabindex")
              , i = null != e;
            return (!i || 0 <= e) && x.ui.focusable(t, i)
        }
    }),
    /*!
         * jQuery UI Unique ID 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
    x.fn.extend({
        uniqueId: (u = 0,
        function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++u)
            })
        }
        ),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
            })
        }
    });
    /*!
     * jQuery UI Widget 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var f, c = 0, d = Array.prototype.hasOwnProperty, p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData,
    function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }
    ),
    x.widget = function(t, i, e) {
        var n, o, s, r = {}, l = t.split(".")[0], a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i,
        i = x.Widget),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        x.expr.pseudos[a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }
        ,
        x[l] = x[l] || {},
        n = x[l][t],
        o = x[l][t] = function(t, e) {
            if (!this || !this._createWidget)
                return new o(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }),
        (s = new i).options = x.widget.extend({}, s.options),
        x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }
            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            r[e] = "function" != typeof n ? n : function() {
                var t, e = this._super, i = this._superApply;
                return this._super = o,
                this._superApply = s,
                t = n.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
        }),
        o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }),
        n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
    }
    ,
    x.widget.extend = function(t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o])
                i = n[o][e],
                d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }
    ,
    x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i
              , n = p.call(arguments, 1)
              , o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e,
                !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t,
                !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
            this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}),
                t._init && t._init()) : x.data(this, r, new e(i,this))
            })),
            o
        }
    }
    ,
    x.Widget = function() {}
    ,
    x.Widget._childConstructors = [],
    x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0],
            this.element = x(e),
            this.uuid = c++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = x(),
            this.hoverable = x(),
            this.focusable = x(),
            this.classesElementLookup = {},
            e !== this && (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }),
            this.document = x(e.style ? e.ownerDocument : e.document || e),
            this.window = x(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(),
            x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length)
                return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {},
                t = (i = t.split(".")).shift(),
                i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]),
                    o = 0; o < i.length - 1; o++)
                        n[i[o]] = n[i[o]] || {},
                        n = n[i[o]];
                    if (t = i.pop(),
                    1 === arguments.length)
                        return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                }
            return this._setOptions(s),
            this
        },
        _setOptions: function(t) {
            for (var e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t)
                n = this.classesElementLookup[e],
                t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()),
                this._removeClass(n, e),
                i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = []
              , r = this;
            function t(t, e) {
                for (var i, n = 0; n < t.length; n++)
                    i = r.classesElementLookup[t[n]] || x(),
                    i = o.add ? (function() {
                        var i = [];
                        o.element.each(function(t, e) {
                            x.map(r.classesElementLookup, function(t) {
                                return t
                            }).some(function(t) {
                                return t.is(e)
                            }) || i.push(e)
                        }),
                        r._on(x(i), {
                            remove: "_untrackClassesElement"
                        })
                    }(),
                    x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()),
                    r.classesElementLookup[t[n]] = i,
                    s.push(t[n]),
                    e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0),
            o.extra && t(o.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }),
            this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t
              , e = {
                extra: o ? e : i,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: n = "boolean" == typeof n ? n : i
            };
            return e.element.toggleClass(this._classes(e), n),
            this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s,
            s = o,
            o = !1),
            t ? (s = r = x(s),
            this.bindings = this.bindings.add(s)) : (t = s,
            s = this.element,
            r = this.widget()),
            x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/)
                  , n = t[1] + l.eventNamespace
                  , t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(e),
            this.bindings = x(this.bindings.not(t).get()),
            this.focusable = x(this.focusable.not(t).get()),
            this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {},
            (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            e.target = this.element[0],
            o = e.originalEvent)
                for (n in o)
                    n in e || (e[n] = o[n]);
            return this.element.trigger(e, i),
            !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    },
    x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof (t = t || {}) ? t = {
                duration: t
            } : !0 === t && (t = {}),
            n = !x.isEmptyObject(t),
            t.complete = i,
            t.delay && e.delay(t.delay),
            n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](),
                i && i.call(e[0]),
                t()
            })
        }
    })
});
/*! elementor - v3.20.0 - 13-03-2024 */
"use strict";
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[819], {
    9220: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(8135));
        class _default extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                this.documents = {},
                this.initDocumentClasses(),
                this.attachDocumentsClasses()
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        document: ".elementor"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $documents: jQuery(e.document)
                }
            }
            initDocumentClasses() {
                this.documentClasses = {
                    base: i.default
                },
                elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
            }
            addDocumentClass(e, t) {
                this.documentClasses[e] = t
            }
            attachDocumentsClasses() {
                this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))
            }
            attachDocumentClass(e) {
                const t = e.data()
                  , n = t.elementorId
                  , o = t.elementorType
                  , i = this.documentClasses[o] || this.documentClasses.base;
                this.documents[n] = new i({
                    $element: e,
                    id: n
                })
            }
        }
        t.default = _default
    }
    ,
    9804: (e,t,n)=>{
        var o = n(3203)
          , i = o(n(6397))
          , s = o(n(8704))
          , r = o(n(4985))
          , a = o(n(7537))
          , l = o(n(355))
          , d = o(n(2804))
          , c = o(n(3384));
        e.exports = function(e) {
            var t = this;
            const o = {};
            this.elementsHandlers = {
                "accordion.default": ()=>n.e(209).then(n.bind(n, 8470)),
                "alert.default": ()=>n.e(745).then(n.bind(n, 9269)),
                "counter.default": ()=>n.e(120).then(n.bind(n, 7884)),
                "progress.default": ()=>n.e(192).then(n.bind(n, 1351)),
                "tabs.default": ()=>n.e(520).then(n.bind(n, 9459)),
                "toggle.default": ()=>n.e(181).then(n.bind(n, 2)),
                "video.default": ()=>n.e(791).then(n.bind(n, 5363)),
                "image-carousel.default": ()=>n.e(268).then(n.bind(n, 5914)),
                "text-editor.default": ()=>n.e(357).then(n.bind(n, 1327)),
                "wp-widget-media_audio.default": ()=>n.e(52).then(n.bind(n, 7602))
            },
            elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-tabs.default"] = ()=>Promise.resolve().then(n.bind(n, 7323))),
            elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-accordion.default"] = ()=>Promise.resolve().then(n.bind(n, 32)));
            const addElementsHandlers = ()=>{
                this.elementsHandlers.section = [d.default, ...s.default, l.default, c.default],
                this.elementsHandlers.container = [...s.default],
                elementorFrontend.isEditMode() && this.elementsHandlers.container.push(...r.default),
                this.elementsHandlers.column = a.default,
                e.each(this.elementsHandlers, ((e,t)=>{
                    const n = e.split(".");
                    e = n[0];
                    const o = n[1] || null;
                    this.attachHandler(e, t, o)
                }
                ))
            }
              , isClassHandler = e=>e.prototype?.getUniqueHandlerID;
            this.addHandler = function(t, n) {
                const i = n.$element.data("model-cid");
                let s;
                if (i) {
                    s = t.prototype.getConstructorID(),
                    o[i] || (o[i] = {});
                    const e = o[i][s];
                    e && e.onDestroy()
                }
                const r = new t(n);
                elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`, n.$element, e),
                i && (o[i][s] = r)
            }
            ,
            this.attachHandler = (e,n,o)=>{
                Array.isArray(n) || (n = [n]),
                n.forEach((n=>function(e, n) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                    o = o ? "." + o : "";
                    const i = e + o;
                    elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`, (e=>{
                        if (isClassHandler(n))
                            t.addHandler(n, {
                                $element: e,
                                elementName: i
                            }, !0);
                        else {
                            const o = n();
                            if (!o)
                                return;
                            o instanceof Promise ? o.then((n=>{
                                let {default: o} = n;
                                t.addHandler(o, {
                                    $element: e,
                                    elementName: i
                                }, !0)
                            }
                            )) : t.addHandler(o, {
                                $element: e,
                                elementName: i
                            }, !0)
                        }
                    }
                    ))
                }(e, n, o)))
            }
            ,
            this.getHandler = function(e) {
                const t = this.elementsHandlers[e];
                return isClassHandler(t) ? t : new Promise((e=>{
                    t().then((t=>{
                        let {default: n} = t;
                        e(n)
                    }
                    ))
                }
                ))
            }
            ,
            this.getHandlers = function(e) {
                return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"),
                e ? this.getHandler(e) : this.elementsHandlers
            }
            ,
            this.runReadyTrigger = function(t) {
                if (elementorFrontend.config.is_static)
                    return;
                const n = jQuery(t)
                  , o = n.attr("data-element_type");
                if (o && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e),
                elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`, n, e),
                "widget" === o)) {
                    const t = n.attr("data-widget_type");
                    elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                }
            }
            ,
            this.init = ()=>{
                elementorFrontend.hooks.addAction("frontend/element_ready/global", i.default),
                addElementsHandlers()
            }
        }
    }
    ,
    5654: (e,t,n)=>{
        var o = n(3203);
        n(59);
        var i = o(n(9220))
          , s = o(n(5107))
          , r = o(n(3308))
          , a = o(n(1604))
          , l = o(n(1911))
          , d = o(n(4773))
          , c = o(n(2064))
          , u = o(n(8628))
          , h = o(n(8646))
          , m = o(n(6866))
          , g = o(n(4375))
          , p = o(n(6404))
          , f = o(n(6046))
          , v = o(n(1322))
          , b = n(6028);
        const _ = n(9469)
          , y = n(9804)
          , w = n(3346);
        class Frontend extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                this.config = elementorFrontendConfig,
                this.config.legacyMode = {
                    get elementWrappers() {
                        return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0"),
                        !1
                    }
                },
                this.populateActiveBreakpointsConfig()
            }
            get Module() {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"),
                elementorModules.frontend.handlers.Base
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        elementor: ".elementor",
                        adminBar: "#wpadminbar"
                    }
                }
            }
            getDefaultElements() {
                const e = {
                    window,
                    $window: jQuery(window),
                    $document: jQuery(document),
                    $head: jQuery(document.head),
                    $body: jQuery(document.body),
                    $deviceMode: jQuery("<span>", {
                        id: "elementor-device-mode",
                        class: "elementor-screen-only"
                    })
                };
                return e.$body.append(e.$deviceMode),
                e
            }
            bindEvents() {
                this.elements.$window.on("resize", (()=>this.setDeviceModeData()))
            }
            getElements(e) {
                return this.getItems(this.elements, e)
            }
            getPageSettings(e) {
                const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                return this.getItems(t, e)
            }
            getGeneralSettings(e) {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()", "3.0.0", "getKitSettings() and remove the `elementor_` prefix"),
                this.getKitSettings(`elementor_${e}`)
            }
            getKitSettings(e) {
                return this.getItems(this.config.kit, e)
            }
            getCurrentDeviceMode() {
                return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
            }
            getDeviceSetting(e, t, n) {
                if ("widescreen" === e)
                    return this.getWidescreenSetting(t, n);
                const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    largeToSmall: !0,
                    withDesktop: !0
                });
                let i = o.indexOf(e);
                for (; i > 0; ) {
                    const e = t[n + "_" + o[i]];
                    if (e || 0 === e)
                        return e;
                    i--
                }
                return t[n]
            }
            getWidescreenSetting(e, t) {
                const n = t + "_widescreen";
                let o;
                return o = e[n] ? e[n] : e[t],
                o
            }
            getCurrentDeviceSetting(e, t) {
                return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
            }
            isEditMode() {
                return this.config.environmentMode.edit
            }
            isWPPreviewMode() {
                return this.config.environmentMode.wpPreview
            }
            initDialogsManager() {
                let e;
                this.getDialogsManager = ()=>(e || (e = new DialogsManager.Instance),
                e)
            }
            initOnReadyComponents() {
                this.utils = {
                    youtube: new a.default,
                    vimeo: new l.default,
                    baseVideoLoader: new d.default,
                    anchors: new w,
                    get lightbox() {
                        return h.default.getLightbox()
                    },
                    urlActions: new c.default,
                    swiper: u.default,
                    environment: r.default,
                    assetsLoader: new m.default,
                    escapeHTML: b.escapeHTML,
                    events: p.default,
                    controls: new v.default
                },
                this.modules = {
                    StretchElement: elementorModules.frontend.tools.StretchElement,
                    Masonry: elementorModules.utils.Masonry
                },
                this.elementsHandler.init(),
                this.isEditMode() ? elementor.once("document:loaded", (()=>this.onDocumentLoaded())) : this.onDocumentLoaded()
            }
            initOnReadyElements() {
                this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
            }
            addUserAgentClasses() {
                for (const [e,t] of Object.entries(r.default))
                    t && this.elements.$body.addClass("e--ua-" + e)
            }
            setDeviceModeData() {
                this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
            }
            addListenerOnce(e, t, n, o) {
                if (o || (o = this.elements.$window),
                this.isEditMode())
                    if (this.removeListeners(e, t, o),
                    o instanceof jQuery) {
                        const i = t + "." + e;
                        o.on(i, n)
                    } else
                        o.on(t, n, e);
                else
                    o.on(t, n)
            }
            removeListeners(e, t, n, o) {
                if (o || (o = this.elements.$window),
                o instanceof jQuery) {
                    const i = t + "." + e;
                    o.off(i, n)
                } else
                    o.off(t, n, e)
            }
            debounce(e, t) {
                let n;
                return function() {
                    const o = this
                      , i = arguments
                      , s = !n;
                    clearTimeout(n),
                    n = setTimeout((()=>{
                        n = null,
                        e.apply(o, i)
                    }
                    ), t),
                    s && e.apply(o, i)
                }
            }
            waypoint(e, t, n) {
                n = jQuery.extend({
                    offset: "100%",
                    triggerOnce: !0
                }, n);
                return e.elementorWaypoint((function() {
                    const e = this.element || this
                      , o = t.apply(e, arguments);
                    return n.triggerOnce && this.destroy && this.destroy(),
                    o
                }
                ), n)
            }
            muteMigrationTraces() {
                jQuery.migrateMute = !0,
                jQuery.migrateTrace = !1
            }
            initModules() {
                const e = {
                    shapes: f.default
                };
                elementorFrontend.trigger("elementor/modules/init:before"),
                elementorFrontend.trigger("elementor/modules/init/before"),
                Object.entries(e).forEach((e=>{
                    let[t,n] = e;
                    this.modulesHandlers[t] = new n
                }
                ))
            }
            populateActiveBreakpointsConfig() {
                this.config.responsive.activeBreakpoints = {},
                Object.entries(this.config.responsive.breakpoints).forEach((e=>{
                    let[t,n] = e;
                    n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                }
                ))
            }
            init() {
                this.hooks = new _,
                this.breakpoints = new g.default(this.config.responsive),
                this.storage = new s.default,
                this.elementsHandler = new y(jQuery),
                this.modulesHandlers = {},
                this.addUserAgentClasses(),
                this.setDeviceModeData(),
                this.initDialogsManager(),
                this.isEditMode() && this.muteMigrationTraces(),
                p.default.dispatch(this.elements.$window, "elementor/frontend/init"),
                this.initModules(),
                this.initOnReadyElements(),
                this.initOnReadyComponents()
            }
            onDocumentLoaded() {
                this.documentsManager = new i.default,
                this.trigger("components:init"),
                new h.default
            }
        }
        window.elementorFrontend = new Frontend,
        elementorFrontend.isEditMode() || jQuery((()=>elementorFrontend.init()))
    }
    ,
    4058: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
            getDefaultSettings() {
                return {
                    classes: {
                        swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
                        swiperWrapper: "swiper-wrapper",
                        swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                        swiperPreloader: "swiper-lazy-preloader",
                        slideBackground: "elementor-background-slideshow__slide__image",
                        kenBurns: "elementor-ken-burns",
                        kenBurnsActive: "elementor-ken-burns--active",
                        kenBurnsIn: "elementor-ken-burns--in",
                        kenBurnsOut: "elementor-ken-burns--out"
                    }
                }
            }
            getSwiperOptions() {
                const e = this.getElementSettings()
                  , t = {
                    grabCursor: !1,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: "yes" === e.background_slideshow_loop,
                    speed: e.background_slideshow_transition_duration,
                    autoplay: {
                        delay: e.background_slideshow_slide_duration,
                        stopOnLastSlide: !e.background_slideshow_loop
                    },
                    handleElementorBreakpoints: !0,
                    on: {
                        slideChange: ()=>{
                            e.background_slideshow_ken_burns && this.handleKenBurns()
                        }
                    }
                };
                switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()),
                e.background_slideshow_slide_transition) {
                case "fade":
                    t.effect = "fade",
                    t.fadeEffect = {
                        crossFade: !0
                    };
                    break;
                case "slide_down":
                    t.autoplay.reverseDirection = !0,
                    t.direction = "vertical";
                    break;
                case "slide_up":
                    t.direction = "vertical"
                }
                return "yes" === e.background_slideshow_lazyload && (t.lazy = {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 1
                }),
                t
            }
            buildSwiperElements() {
                const e = this.getSettings("classes")
                  , t = this.getElementSettings()
                  , n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl"
                  , o = jQuery("<div>", {
                    class: e.swiperContainer,
                    dir: n
                })
                  , i = jQuery("<div>", {
                    class: e.swiperWrapper
                })
                  , s = t.background_slideshow_ken_burns
                  , r = "yes" === t.background_slideshow_lazyload;
                let a = e.slideBackground;
                if (s) {
                    a += " " + e.kenBurns;
                    const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                    a += " " + e[n]
                }
                r && (a += " swiper-lazy"),
                this.elements.$slides = jQuery(),
                t.background_slideshow_gallery.forEach((t=>{
                    const n = jQuery("<div>", {
                        class: e.swiperSlide
                    });
                    let o;
                    if (r) {
                        const n = jQuery("<div>", {
                            class: e.swiperPreloader
                        });
                        o = jQuery("<div>", {
                            class: a,
                            "data-background": t.url
                        }),
                        o.append(n)
                    } else
                        o = jQuery("<div>", {
                            class: a,
                            style: 'background-image: url("' + t.url + '");'
                        });
                    n.append(o),
                    i.append(n),
                    this.elements.$slides = this.elements.$slides.add(n)
                }
                )),
                o.append(i),
                this.$element.prepend(o),
                this.elements.$backgroundSlideShowContainer = o
            }
            async initSlider() {
                if (1 >= this.getSlidesCount())
                    return;
                const e = this.getElementSettings()
                  , t = elementorFrontend.utils.swiper;
                this.swiper = await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),
                this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper),
                e.background_slideshow_ken_burns && this.handleKenBurns()
            }
            activate() {
                this.buildSwiperElements(),
                this.initSlider()
            }
            deactivate() {
                this.swiper && (this.swiper.destroy(),
                this.elements.$backgroundSlideShowContainer.remove())
            }
            run() {
                "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
            }
            onInit() {
                super.onInit(),
                this.getElementSettings("background_slideshow_gallery") && this.run()
            }
            onDestroy() {
                super.onDestroy(),
                this.deactivate()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundSlideshow
    }
    ,
    9501: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BackgroundVideo extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        backgroundVideoContainer: ".elementor-background-video-container",
                        backgroundVideoEmbed: ".elementor-background-video-embed",
                        backgroundVideoHosted: ".elementor-background-video-hosted"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                  , t = {
                    $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                };
                return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),
                t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted),
                t
            }
            calcVideosSize(e) {
                let t = "16:9";
                "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                const n = this.elements.$backgroundVideoContainer.outerWidth()
                  , o = this.elements.$backgroundVideoContainer.outerHeight()
                  , i = t.split(":")
                  , s = i[0] / i[1]
                  , r = n / o > s;
                return {
                    width: r ? n : o * s,
                    height: r ? n / s : o
                }
            }
            changeVideoSize() {
                if ("hosted" !== this.videoType && !this.player)
                    return;
                let e;
                if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted),
                !e)
                    return;
                const t = this.calcVideosSize(e);
                e.width(t.width).height(t.height)
            }
            startVideoLoop(e) {
                if (!this.player.getIframe().contentWindow)
                    return;
                const t = this.getElementSettings()
                  , n = t.background_video_start || 0
                  , o = t.background_video_end;
                if (!t.background_play_once || e) {
                    if (this.player.seekTo(n),
                    o) {
                        setTimeout((()=>{
                            this.startVideoLoop(!1)
                        }
                        ), 1e3 * (o - n + 1))
                    }
                } else
                    this.player.stopVideo()
            }
            prepareVimeoVideo(e, t) {
                const n = this.getElementSettings()
                  , o = {
                    url: t,
                    width: this.elements.$backgroundVideoContainer.outerWidth().width,
                    autoplay: !0,
                    loop: !n.background_play_once,
                    transparent: !0,
                    background: !0,
                    muted: !0
                };
                n.background_privacy_mode && (o.dnt = !0),
                this.player = new e.Player(this.elements.$backgroundVideoContainer,o),
                this.handleVimeoStartEndTimes(n),
                this.player.ready().then((()=>{
                    jQuery(this.player.element).addClass("elementor-background-video-embed"),
                    this.changeVideoSize()
                }
                ))
            }
            handleVimeoStartEndTimes(e) {
                e.background_video_start && this.player.on("play", (t=>{
                    0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                }
                )),
                this.player.on("timeupdate", (t=>{
                    e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)),
                    this.player.getDuration().then((n=>{
                        e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                    }
                    ))
                }
                ))
            }
            prepareYTVideo(e, t) {
                const n = this.elements.$backgroundVideoContainer
                  , o = this.getElementSettings();
                let i = e.PlayerState.PLAYING;
                window.chrome && (i = e.PlayerState.UNSTARTED);
                const s = {
                    videoId: t,
                    events: {
                        onReady: ()=>{
                            this.player.mute(),
                            this.changeVideoSize(),
                            this.startVideoLoop(!0),
                            this.player.playVideo()
                        }
                        ,
                        onStateChange: t=>{
                            switch (t.data) {
                            case i:
                                n.removeClass("elementor-invisible elementor-loading");
                                break;
                            case e.PlayerState.ENDED:
                                "function" == typeof this.player.seekTo && this.player.seekTo(o.background_video_start || 0),
                                o.background_play_once && this.player.destroy()
                            }
                        }
                    },
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        playsinline: 1
                    }
                };
                o.background_privacy_mode && (s.host = "https://www.youtube-nocookie.com",
                s.origin = window.location.hostname),
                n.addClass("elementor-loading elementor-invisible"),
                this.player = new e.Player(this.elements.$backgroundVideoEmbed[0],s)
            }
            activate() {
                let e, t = this.getElementSettings("background_video_link");
                const n = this.getElementSettings("background_play_once");
                if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo",
                this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube",
                this.apiProvider = elementorFrontend.utils.youtube),
                this.apiProvider)
                    e = this.apiProvider.getVideoIDFromURL(t),
                    this.apiProvider.onApiReady((n=>{
                        "youtube" === this.videoType && this.prepareYTVideo(n, e),
                        "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                    }
                    ));
                else {
                    this.videoType = "hosted";
                    const e = this.getElementSettings("background_video_start")
                      , o = this.getElementSettings("background_video_end");
                    (e || o) && (t += "#t=" + (e || 0) + (o ? "," + o : "")),
                    this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)),
                    n && this.elements.$backgroundVideoHosted.on("ended", (()=>{
                        this.elements.$backgroundVideoHosted.hide()
                    }
                    ))
                }
                elementorFrontend.elements.$window.on("resize elementor/bg-video/recalc", this.changeVideoSize)
            }
            deactivate() {
                "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),
                elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
            }
            run() {
                const e = this.getElementSettings();
                (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
            }
            onInit() {
                super.onInit(...arguments),
                this.changeVideoSize = this.changeVideoSize.bind(this),
                this.run()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundVideo
    }
    ,
    8704: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(4058))
          , s = o(n(9501))
          , r = [i.default, s.default];
        t.default = r
    }
    ,
    7537: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = [o(n(4058)).default];
        t.default = i
    }
    ,
    4985: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = [()=>n.e(413).then(n.bind(n, 2929)), ()=>n.e(413).then(n.bind(n, 343)), ()=>n.e(413).then(n.bind(n, 8073))];
        t.default = o
    }
    ,
    6397: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class GlobalHandler extends elementorModules.frontend.handlers.Base {
            getWidgetType() {
                return "global"
            }
            animate() {
                const e = this.$element
                  , t = this.getAnimation();
                if ("none" === t)
                    return void e.removeClass("elementor-invisible");
                const n = this.getElementSettings()
                  , o = n._animation_delay || n.animation_delay || 0;
                e.removeClass(t),
                this.currentAnimation && e.removeClass(this.currentAnimation),
                this.currentAnimation = t,
                setTimeout((()=>{
                    e.removeClass("elementor-invisible").addClass("animated " + t)
                }
                ), o)
            }
            getAnimation() {
                return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
            }
            onInit() {
                if (super.onInit(...arguments),
                this.getAnimation()) {
                    const e = elementorModules.utils.Scroll.scrollObserver({
                        callback: t=>{
                            t.isInViewport && (this.animate(),
                            e.unobserve(this.$element[0]))
                        }
                    });
                    e.observe(this.$element[0])
                }
            }
            onElementChange(e) {
                /^_?animation/.test(e) && this.animate()
            }
        }
        t.default = e=>{
            elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                $element: e
            })
        }
    }
    ,
    355: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class HandlesPosition extends elementorModules.frontend.handlers.Base {
            isActive() {
                return elementorFrontend.isEditMode()
            }
            isFirstSection() {
                return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
            }
            isOverflowHidden() {
                return "hidden" === this.$element.css("overflow")
            }
            getOffset() {
                if ("body" === elementor.config.document.container)
                    return this.$element.offset().top;
                const e = jQuery(elementor.config.document.container);
                return this.$element.offset().top - e.offset().top
            }
            setHandlesPosition() {
                const e = elementor.documents.getCurrent();
                if (!e || !e.container.isEditable())
                    return;
                const t = "elementor-section--handles-inside";
                if (elementor.settings.page.model.attributes.scroll_snap)
                    return void this.$element.addClass(t);
                const n = this.isOverflowHidden();
                if (!n && !this.isFirstSection())
                    return;
                const o = n ? 0 : this.getOffset();
                if (o < 25) {
                    this.$element.addClass(t);
                    const e = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                    o < -5 ? e.css("top", -o) : e.css("top", "")
                } else
                    this.$element.removeClass(t)
            }
            onInit() {
                this.isActive() && (this.setHandlesPosition(),
                this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
            }
        }
        t.default = HandlesPosition
    }
    ,
    3384: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Shapes extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        container: "> .elementor-shape-%s"
                    },
                    svgURL: elementorFrontend.config.urls.assets + "shapes/"
                }
            }
            getDefaultElements() {
                const e = {}
                  , t = this.getSettings("selectors");
                return e.$topContainer = this.$element.find(t.container.replace("%s", "top")),
                e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")),
                e
            }
            isActive() {
                return elementorFrontend.isEditMode()
            }
            getSvgURL(e, t) {
                let n = this.getSettings("svgURL") + t + ".svg";
                return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e],
                -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))),
                n
            }
            buildSVG(e) {
                const t = "shape_divider_" + e
                  , n = this.getElementSettings(t)
                  , o = this.elements["$" + e + "Container"];
                if (o.attr("data-shape", n),
                !n)
                    return void o.empty();
                let i = n;
                this.getElementSettings(t + "_negative") && (i += "-negative");
                const s = this.getSvgURL(n, i);
                jQuery.get(s, (e=>{
                    o.empty().append(e.childNodes[0])
                }
                )),
                this.setNegative(e)
            }
            setNegative(e) {
                this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
            }
            onInit() {
                this.isActive(this.getSettings()) && (super.onInit(...arguments),
                ["top", "bottom"].forEach((e=>{
                    this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                }
                )))
            }
            onElementChange(e) {
                const t = e.match(/^shape_divider_(top|bottom)$/);
                if (t)
                    return void this.buildSVG(t[1]);
                const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                n && (this.buildSVG(n[1]),
                this.setNegative(n[1]))
            }
        }
        t.default = Shapes
    }
    ,
    2804: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class StretchedSection extends elementorModules.frontend.handlers.StretchedElement {
            getStretchedClass() {
                return "elementor-section-stretched"
            }
            getStretchSettingName() {
                return "stretch_section"
            }
            getStretchActiveValue() {
                return "section-stretched"
            }
        }
        t.default = StretchedSection
    }
    ,
    3346: (e,t,n)=>{
        var o = n(6028);
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: ()=>({
                scrollDuration: 500,
                selectors: {
                    links: 'a[href*="#"]',
                    targets: ".elementor-element, .elementor-menu-anchor",
                    scrollable: (0,
                    o.isScrollSnapActive)() ? "body" : "html, body"
                }
            }),
            getDefaultElements() {
                return {
                    $scrollable: jQuery(this.getSettings("selectors").scrollable)
                }
            },
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
            },
            handleAnchorLinks(e) {
                var t, n = e.currentTarget, i = location.pathname === n.pathname;
                if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
                    try {
                        t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                    } catch (e) {
                        return
                    }
                    if (t.length) {
                        var s = t.offset().top
                          , r = elementorFrontend.elements.$wpAdminBar
                          , a = jQuery(".elementor-section.elementor-sticky--active:visible");
                        r.length > 0 && (s -= r.height()),
                        a.length > 0 && (s -= Math.max.apply(null, a.map((function() {
                            return jQuery(this).outerHeight()
                        }
                        )).get())),
                        e.preventDefault(),
                        s = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", s),
                        (0,
                        o.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"),
                        this.elements.$scrollable.animate({
                            scrollTop: s
                        }, this.getSettings("scrollDuration"), "linear", (()=>{
                            (0,
                            o.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                        }
                        ))
                    }
                }
            },
            onInit() {
                elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            }
        })
    }
    ,
    6866: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class AssetsLoader {
            getScriptElement(e) {
                const t = document.createElement("script");
                return t.src = e,
                t
            }
            getStyleElement(e) {
                const t = document.createElement("link");
                return t.rel = "stylesheet",
                t.href = e,
                t
            }
            load(e, t) {
                const n = AssetsLoader.assets[e][t];
                return n.loader || (n.loader = new Promise((t=>{
                    const o = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                    o.onload = ()=>t(!0);
                    const i = "head" === n.parent ? n.parent : "body";
                    document[i].appendChild(o)
                }
                ))),
                n.loader
            }
        }
        t.default = AssetsLoader;
        const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min"
          , o = elementorFrontendConfig.experimentalFeatures.e_swiper_latest ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5` : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;
        AssetsLoader.assets = {
            script: {
                dialog: {
                    src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`
                },
                "share-link": {
                    src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`
                },
                swiper: {
                    src: o
                }
            },
            style: {}
        }
    }
    ,
    1322: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Controls {
            getControlValue(e, t, n) {
                let o;
                return o = "object" == typeof e[t] && n ? e[t][n] : e[t],
                o
            }
            getResponsiveControlValue(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                const o = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode()
                  , i = this.getControlValue(e, t, n);
                if ("widescreen" === o) {
                    const o = this.getControlValue(e, `${t}_widescreen`, n);
                    return o || 0 === o ? o : i
                }
                const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    withDesktop: !0
                });
                let r = o
                  , a = s.indexOf(o)
                  , l = "";
                for (; a <= s.length; ) {
                    if ("desktop" === r) {
                        l = i;
                        break
                    }
                    const o = `${t}_${r}`
                      , d = this.getControlValue(e, o, n);
                    if (d || 0 === d) {
                        l = d;
                        break
                    }
                    a++,
                    r = s[a]
                }
                return l
            }
        }
    }
    ,
    8646: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class LightboxManager extends elementorModules.ViewModule {
            static getLightbox() {
                const e = new Promise((e=>{
                    n.e(723).then(n.t.bind(n, 3896, 23)).then((t=>{
                        let {default: n} = t;
                        return e(new n)
                    }
                    ))
                }
                ))
                  , t = elementorFrontend.utils.assetsLoader.load("script", "dialog")
                  , o = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                return Promise.all([e, t, o]).then((()=>e))
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        links: "a, [data-elementor-lightbox]"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $links: jQuery(this.getSettings("selectors.links"))
                }
            }
            isLightboxLink(e) {
                if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo)
                    return !1;
                const t = elementorFrontend.getKitSettings("global_image_lightbox")
                  , n = e.dataset.elementorOpenLightbox;
                return "yes" === n || t && "no" !== n
            }
            async onLinkClick(e) {
                const t = e.currentTarget
                  , n = jQuery(e.target)
                  , o = elementorFrontend.isEditMode()
                  , i = o && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker")
                  , s = !!n.closest(".elementor-edit-area").length;
                if (!this.isLightboxLink(t))
                    return void (o && s && e.preventDefault());
                if (e.preventDefault(),
                o && !elementor.getPreferences("lightbox_in_editor"))
                    return;
                if (i)
                    return;
                (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
            }
            isOptimizedAssetsLoading() {
                return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e=>this.onLinkClick(e)))
            }
            onInit() {
                super.onInit(...arguments),
                this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e,t)=>{
                    if (this.isLightboxLink(t))
                        return LightboxManager.getLightbox(),
                        !1
                }
                ))
            }
        }
        t.default = LightboxManager
    }
    ,
    8628: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Swiper {
            constructor(e, t) {
                return this.config = t,
                this.config.breakpoints && (this.config = this.adjustConfig(t)),
                e instanceof jQuery && (e = e[0]),
                e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),
                e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),
                new Promise((t=>{
                    if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)
                        return t(this.createSwiperInstance(e, this.config));
                    elementorFrontend.utils.assetsLoader.load("script", "swiper").then((()=>t(this.createSwiperInstance(e, this.config))))
                }
                ))
            }
            createSwiperInstance(e, t) {
                const n = window.Swiper;
                return n.prototype.adjustConfig = this.adjustConfig,
                new n(e,t)
            }
            adjustConfig(e) {
                if (!e.handleElementorBreakpoints)
                    return e;
                const t = elementorFrontend.config.responsive.activeBreakpoints
                  , n = elementorFrontend.breakpoints.getBreakpointValues();
                return Object.keys(e.breakpoints).forEach((o=>{
                    const i = parseInt(o);
                    let s;
                    if (i === t.mobile.value || i + 1 === t.mobile.value)
                        s = 0;
                    else if (!t.widescreen || i !== t.widescreen.value && i + 1 !== t.widescreen.value) {
                        const e = n.findIndex((e=>i === e || i + 1 === e));
                        s = n[e - 1]
                    } else
                        s = i;
                    e.breakpoints[s] = e.breakpoints[o],
                    e.breakpoints[o] = {
                        slidesPerView: e.slidesPerView,
                        slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                    }
                }
                )),
                e
            }
        }
    }
    ,
    2064: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(5719);
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                    }
                }
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
            }
            initActions() {
                this.actions = {
                    lightbox: async e=>{
                        const t = await elementorFrontend.utils.lightbox;
                        e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"),
                        t.showModal(e))
                    }
                }
            }
            addAction(e, t) {
                this.actions[e] = t
            }
            runAction(e) {
                const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                if (!t)
                    return;
                const n = this.actions[t[1]];
                if (!n)
                    return;
                let o = {};
                const i = e.match(/settings=(.+)/);
                i && (o = JSON.parse(atob(i[1])));
                for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
                    r[a - 1] = arguments[a];
                n(o, ...r)
            }
            runLinkAction(e) {
                e.preventDefault(),
                this.runAction(jQuery(e.currentTarget).attr("href"), e)
            }
            runHashAction() {
                if (!location.hash)
                    return;
                const e = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                e && this.runAction(e.getAttribute("data-e-action-hash"))
            }
            createActionHash(e, t) {
                return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
            }
            onInit() {
                super.onInit(),
                this.initActions(),
                elementorFrontend.on("components:init", this.runHashAction.bind(this))
            }
        }
        t.default = _default
    }
    ,
    6028: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isScrollSnapActive = t.escapeHTML = void 0;
        t.escapeHTML = e=>{
            const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            };
            return e.replace(/[&<>'"]/g, (e=>t[e] || e))
        }
        ;
        t.isScrollSnapActive = ()=>"yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes?.scroll_snap : elementorFrontend.config.settings.page?.scroll_snap)
    }
    ,
    4773: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BaseLoader extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    isInserted: !1,
                    selectors: {
                        firstScript: "script:first"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                }
            }
            insertAPI() {
                this.elements.$firstScript.before(jQuery("<script>", {
                    src: this.getApiURL()
                })),
                this.setSettings("isInserted", !0)
            }
            getVideoIDFromURL(e) {
                const t = e.match(this.getURLRegex());
                return t && t[1]
            }
            onApiReady(e) {
                this.getSettings("isInserted") || this.insertAPI(),
                this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((()=>{
                    this.onApiReady(e)
                }
                ), 350)
            }
            getAutoplayURL(e) {
                return e.replace("&autoplay=0", "") + "&autoplay=1"
            }
        }
        t.default = BaseLoader
    }
    ,
    1911: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(4773));
        class VimeoLoader extends i.default {
            getApiURL() {
                return "https://player.vimeo.com/api/player.js"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
            }
            isApiLoaded() {
                return window.Vimeo
            }
            getApiObject() {
                return Vimeo
            }
            getAutoplayURL(e) {
                const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                return e.replace(t[0], "") + t
            }
        }
        t.default = VimeoLoader
    }
    ,
    1604: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(4773));
        class YoutubeLoader extends i.default {
            getApiURL() {
                return "https://www.youtube.com/iframe_api"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
            }
            isApiLoaded() {
                return window.YT && YT.loaded
            }
            getApiObject() {
                return YT
            }
        }
        t.default = YoutubeLoader
    }
    ,
    59: (e,t,n)=>{
        n.p = elementorFrontendConfig.urls.assets + "js/"
    }
    ,
    4375: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Breakpoints extends elementorModules.Module {
            constructor(e) {
                super(),
                this.responsiveConfig = e
            }
            getActiveBreakpointsList() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = {
                    largeToSmall: !1,
                    withDesktop: !1,
                    ...e
                };
                const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                if (e.withDesktop) {
                    const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                    t.splice(e, 0, "desktop")
                }
                return e.largeToSmall && t.reverse(),
                t
            }
            getBreakpointValues() {
                const {activeBreakpoints: e} = this.responsiveConfig
                  , t = [];
                return Object.values(e).forEach((e=>{
                    t.push(e.value)
                }
                )),
                t
            }
            getDesktopPreviousDeviceKey() {
                let e = "";
                const {activeBreakpoints: t} = this.responsiveConfig
                  , n = Object.keys(t)
                  , o = n.length;
                return e = "min" === t[n[o - 1]].direction ? n[o - 2] : n[o - 1],
                e
            }
            getDesktopMinPoint() {
                const {activeBreakpoints: e} = this.responsiveConfig;
                return e[this.getDesktopPreviousDeviceKey()].value + 1
            }
            getDeviceMinBreakpoint(e) {
                if ("desktop" === e)
                    return this.getDesktopMinPoint();
                const {activeBreakpoints: t} = this.responsiveConfig
                  , n = Object.keys(t);
                let o;
                if (n[0] === e)
                    o = 320;
                else if ("widescreen" === e)
                    o = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                else {
                    const i = n.indexOf(e);
                    o = t[n[i - 1]].value + 1
                }
                return o
            }
            getActiveMatchRegex() {
                return new RegExp(this.getActiveBreakpointsList().map((e=>"_" + e)).join("|") + "$")
            }
        }
        t.default = Breakpoints
    }
    ,
    6404: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Events = void 0;
        class Events {
            static dispatch(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                e = e instanceof jQuery ? e[0] : e,
                o && e.dispatchEvent(new CustomEvent(o,{
                    detail: n
                })),
                e.dispatchEvent(new CustomEvent(t,{
                    detail: n
                }))
            }
        }
        t.Events = Events;
        var n = Events;
        t.default = n
    }
    ,
    9469: e=>{
        e.exports = function() {
            var e, t = Array.prototype.slice, n = {
                actions: {},
                filters: {}
            };
            function _removeHook(e, t, o, i) {
                var s, r, a;
                if (n[e][t])
                    if (o)
                        if (s = n[e][t],
                        i)
                            for (a = s.length; a--; )
                                (r = s[a]).callback === o && r.context === i && s.splice(a, 1);
                        else
                            for (a = s.length; a--; )
                                s[a].callback === o && s.splice(a, 1);
                    else
                        n[e][t] = []
            }
            function _addHook(e, t, o, i, s) {
                var r = {
                    callback: o,
                    priority: i,
                    context: s
                }
                  , a = n[e][t];
                if (a) {
                    var l = !1;
                    if (jQuery.each(a, (function() {
                        if (this.callback === o)
                            return l = !0,
                            !1
                    }
                    )),
                    l)
                        return;
                    a.push(r),
                    a = function _hookInsertSort(e) {
                        for (var t, n, o, i = 1, s = e.length; i < s; i++) {
                            for (t = e[i],
                            n = i; (o = e[n - 1]) && o.priority > t.priority; )
                                e[n] = e[n - 1],
                                --n;
                            e[n] = t
                        }
                        return e
                    }(a)
                } else
                    a = [r];
                n[e][t] = a
            }
            function _runHook(e, t, o) {
                var i, s, r = n[e][t];
                if (!r)
                    return "filters" === e && o[0];
                if (s = r.length,
                "filters" === e)
                    for (i = 0; i < s; i++)
                        o[0] = r[i].callback.apply(r[i].context, o);
                else
                    for (i = 0; i < s; i++)
                        r[i].callback.apply(r[i].context, o);
                return "filters" !== e || o[0]
            }
            return e = {
                removeFilter: function removeFilter(t, n) {
                    return "string" == typeof t && _removeHook("filters", t, n),
                    e
                },
                applyFilters: function applyFilters() {
                    var n = t.call(arguments)
                      , o = n.shift();
                    return "string" == typeof o ? _runHook("filters", o, n) : e
                },
                addFilter: function addFilter(t, n, o, i) {
                    return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, o = parseInt(o || 10, 10), i),
                    e
                },
                removeAction: function removeAction(t, n) {
                    return "string" == typeof t && _removeHook("actions", t, n),
                    e
                },
                doAction: function doAction() {
                    var n = t.call(arguments)
                      , o = n.shift();
                    return "string" == typeof o && _runHook("actions", o, n),
                    e
                },
                addAction: function addAction(t, n, o, i) {
                    return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, o = parseInt(o || 10, 10), i),
                    e
                }
            },
            e
        }
    }
    ,
    3308: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        const matchUserAgent = e=>n.indexOf(e) >= 0
          , n = navigator.userAgent
          , o = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/")
          , i = matchUserAgent("Firefox")
          , s = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
          , r = /Trident|MSIE/.test(n) && !!document.documentMode
          , a = !r && !!window.StyleMedia || matchUserAgent("Edg")
          , l = !!window.chrome && matchUserAgent("Chrome") && !(a || o)
          , d = matchUserAgent("Chrome") && !!window.CSS
          , c = matchUserAgent("AppleWebKit") && !d;
        var u = {
            isTouchDevice: "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            appleWebkit: c,
            blink: d,
            chrome: l,
            edge: a,
            firefox: i,
            ie: r,
            mac: matchUserAgent("Macintosh"),
            opera: o,
            safari: s,
            webkit: matchUserAgent("AppleWebKit")
        };
        t.default = u
    }
    ,
    5107: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            get(e, t) {
                let n;
                t = t || {};
                try {
                    n = t.session ? sessionStorage : localStorage
                } catch (t) {
                    return e ? void 0 : {}
                }
                let o = n.getItem("elementor");
                o = o ? JSON.parse(o) : {},
                o.__expiration || (o.__expiration = {});
                const i = o.__expiration;
                let s = [];
                e ? i[e] && (s = [e]) : s = Object.keys(i);
                let r = !1;
                return s.forEach((e=>{
                    new Date(i[e]) < new Date && (delete o[e],
                    delete i[e],
                    r = !0)
                }
                )),
                r && this.save(o, t.session),
                e ? o[e] : o
            }
            set(e, t, n) {
                n = n || {};
                const o = this.get(null, n);
                if (o[e] = t,
                n.lifetimeInSeconds) {
                    const t = new Date;
                    t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
                    o.__expiration[e] = t.getTime()
                }
                this.save(o, n.session)
            }
            save(e, t) {
                let n;
                try {
                    n = t ? sessionStorage : localStorage
                } catch (e) {
                    return
                }
                n.setItem("elementor", JSON.stringify(e))
            }
        }
        t.default = _default
    }
    ,
    6046: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("text-path", (()=>n.e(48).then(n.bind(n, 6468))))
            }
        }
        t.default = _default
    }
    ,
    1855: (e,t,n)=>{
        var o = n(5516)
          , i = TypeError;
        e.exports = function(e, t) {
            if (o(t, e))
                return e;
            throw i("Incorrect invocation")
        }
    }
    ,
    3621: e=>{
        e.exports = {
            IndexSizeError: {
                s: "INDEX_SIZE_ERR",
                c: 1,
                m: 1
            },
            DOMStringSizeError: {
                s: "DOMSTRING_SIZE_ERR",
                c: 2,
                m: 0
            },
            HierarchyRequestError: {
                s: "HIERARCHY_REQUEST_ERR",
                c: 3,
                m: 1
            },
            WrongDocumentError: {
                s: "WRONG_DOCUMENT_ERR",
                c: 4,
                m: 1
            },
            InvalidCharacterError: {
                s: "INVALID_CHARACTER_ERR",
                c: 5,
                m: 1
            },
            NoDataAllowedError: {
                s: "NO_DATA_ALLOWED_ERR",
                c: 6,
                m: 0
            },
            NoModificationAllowedError: {
                s: "NO_MODIFICATION_ALLOWED_ERR",
                c: 7,
                m: 1
            },
            NotFoundError: {
                s: "NOT_FOUND_ERR",
                c: 8,
                m: 1
            },
            NotSupportedError: {
                s: "NOT_SUPPORTED_ERR",
                c: 9,
                m: 1
            },
            InUseAttributeError: {
                s: "INUSE_ATTRIBUTE_ERR",
                c: 10,
                m: 1
            },
            InvalidStateError: {
                s: "INVALID_STATE_ERR",
                c: 11,
                m: 1
            },
            SyntaxError: {
                s: "SYNTAX_ERR",
                c: 12,
                m: 1
            },
            InvalidModificationError: {
                s: "INVALID_MODIFICATION_ERR",
                c: 13,
                m: 1
            },
            NamespaceError: {
                s: "NAMESPACE_ERR",
                c: 14,
                m: 1
            },
            InvalidAccessError: {
                s: "INVALID_ACCESS_ERR",
                c: 15,
                m: 1
            },
            ValidationError: {
                s: "VALIDATION_ERR",
                c: 16,
                m: 0
            },
            TypeMismatchError: {
                s: "TYPE_MISMATCH_ERR",
                c: 17,
                m: 1
            },
            SecurityError: {
                s: "SECURITY_ERR",
                c: 18,
                m: 1
            },
            NetworkError: {
                s: "NETWORK_ERR",
                c: 19,
                m: 1
            },
            AbortError: {
                s: "ABORT_ERR",
                c: 20,
                m: 1
            },
            URLMismatchError: {
                s: "URL_MISMATCH_ERR",
                c: 21,
                m: 1
            },
            QuotaExceededError: {
                s: "QUOTA_EXCEEDED_ERR",
                c: 22,
                m: 1
            },
            TimeoutError: {
                s: "TIMEOUT_ERR",
                c: 23,
                m: 1
            },
            InvalidNodeTypeError: {
                s: "INVALID_NODE_TYPE_ERR",
                c: 24,
                m: 1
            },
            DataCloneError: {
                s: "DATA_CLONE_ERR",
                c: 25,
                m: 1
            }
        }
    }
    ,
    5719: (e,t,n)=>{
        var o = n(1695)
          , i = n(2086)
          , s = n(563)
          , r = n(5736)
          , a = n(7826).f
          , l = n(9606)
          , d = n(1855)
          , c = n(5070)
          , u = n(1879)
          , h = n(3621)
          , m = n(79)
          , g = n(5283)
          , p = n(3296)
          , f = "DOMException"
          , v = s("Error")
          , b = s(f)
          , _ = function DOMException() {
            d(this, y);
            var e = arguments.length
              , t = u(e < 1 ? void 0 : arguments[0])
              , n = u(e < 2 ? void 0 : arguments[1], "Error")
              , o = new b(t,n)
              , i = v(t);
            return i.name = f,
            a(o, "stack", r(1, m(i.stack, 1))),
            c(o, this, _),
            o
        }
          , y = _.prototype = b.prototype
          , w = "stack"in v(f)
          , k = "stack"in new b(1,2)
          , S = b && g && Object.getOwnPropertyDescriptor(i, f)
          , E = !(!S || S.writable && S.configurable)
          , M = w && !E && !k;
        o({
            global: !0,
            constructor: !0,
            forced: p || M
        }, {
            DOMException: M ? _ : b
        });
        var C = s(f)
          , A = C.prototype;
        if (A.constructor !== C)
            for (var D in p || a(A, "constructor", r(1, C)),
            h)
                if (l(h, D)) {
                    var $ = h[D]
                      , R = $.s;
                    l(C, R) || a(C, R, r(6, $.c))
                }
    }
}, e=>{
    e.O(0, [354], (()=>{
        return t = 5654,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
/*! pro-elements - v3.19.0 - 26-02-2024 */
"use strict";
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[437], {
    7996: (e,t,n)=>{
        var s = n(3203)
          , o = s(n(4042))
          , r = s(n(8528))
          , i = s(n(7857))
          , l = s(n(3184))
          , a = s(n(7043))
          , d = s(n(4223))
          , u = s(n(4231))
          , c = s(n(2741))
          , m = s(n(3513))
          , h = s(n(3002))
          , g = s(n(8650))
          , f = s(n(6701))
          , p = s(n(102))
          , _ = s(n(1748))
          , v = s(n(5438))
          , b = s(n(2439))
          , y = s(n(5032))
          , F = s(n(1474))
          , M = s(n(2105))
          , w = s(n(4351))
          , S = s(n(3159));
        const extendDefaultHandlers = e=>({
            ...e,
            ...{
                animatedText: o.default,
                carousel: r.default,
                countdown: i.default,
                hotspot: l.default,
                form: a.default,
                gallery: d.default,
                lottie: u.default,
                nav_menu: c.default,
                popup: m.default,
                posts: h.default,
                share_buttons: g.default,
                slides: f.default,
                social: p.default,
                themeBuilder: v.default,
                themeElements: b.default,
                woocommerce: y.default,
                tableOfContents: _.default,
                loopBuilder: F.default,
                megaMenu: M.default,
                nestedCarousel: w.default,
                taxonomyFilter: S.default
            }
        });
        elementorProFrontend.on("elementor-pro/modules/init:before", (()=>{
            elementorFrontend.hooks.addFilter("elementor-pro/frontend/handlers", extendDefaultHandlers)
        }
        ))
    }
    ,
    8491: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class AjaxHelper {
            addLoadingAnimationOverlay(e) {
                const t = document.querySelector(`.elementor-element-${e}`);
                t && t.classList.add("e-loading-overlay")
            }
            removeLoadingAnimationOverlay(e) {
                const t = document.querySelector(`.elementor-element-${e}`);
                t && t.classList.remove("e-loading-overlay")
            }
        }
    }
    ,
    8115: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.close = void 0;
        const o = new (s(n(4519)).default)("eicon");
        t.close = {
            get element() {
                return o.createSvgElement("close", {
                    path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
                    width: 1e3,
                    height: 1e3
                })
            }
        }
    }
    ,
    4519: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3231));
        class IconsManager {
            constructor(e) {
                if (this.prefix = `${e}-`,
                !IconsManager.symbolsContainer) {
                    const e = "e-font-icon-svg-symbols";
                    IconsManager.symbolsContainer = document.getElementById(e),
                    IconsManager.symbolsContainer || (IconsManager.symbolsContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    IconsManager.symbolsContainer.setAttributeNS(null, "style", "display: none;"),
                    IconsManager.symbolsContainer.setAttributeNS(null, "class", e),
                    document.body.appendChild(IconsManager.symbolsContainer))
                }
            }
            createSvgElement(e, t) {
                let {path: n, width: s, height: o} = t;
                const r = this.prefix + e
                  , i = "#" + this.prefix + e;
                if (!IconsManager.iconsUsageList.includes(r)) {
                    if (!IconsManager.symbolsContainer.querySelector(i)) {
                        const e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
                        e.id = r,
                        e.innerHTML = '<path d="' + n + '"></path>',
                        e.setAttributeNS(null, "viewBox", "0 0 " + s + " " + o),
                        IconsManager.symbolsContainer.appendChild(e)
                    }
                    IconsManager.iconsUsageList.push(r)
                }
                const l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return l.innerHTML = '<use xlink:href="' + i + '" />',
                l.setAttributeNS(null, "class", "e-font-icon-svg e-" + r),
                l
            }
        }
        t.default = IconsManager,
        (0,
        o.default)(IconsManager, "symbolsContainer", void 0),
        (0,
        o.default)(IconsManager, "iconsUsageList", [])
    }
    ,
    6399: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function runElementHandlers(e) {
            [...e].flatMap((e=>[...e.querySelectorAll(".elementor-element")])).forEach((e=>elementorFrontend.elementsHandler.runReadyTrigger(e)))
        }
    }
    ,
    4042: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("animated-headline", (()=>n.e(26).then(n.bind(n, 629))))
            }
        }
        t.default = _default
    }
    ,
    8528: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("media-carousel", (()=>n.e(534).then(n.bind(n, 8509)))),
                elementorFrontend.elementsHandler.attachHandler("testimonial-carousel", (()=>n.e(369).then(n.bind(n, 4526)))),
                elementorFrontend.elementsHandler.attachHandler("reviews", (()=>n.e(369).then(n.bind(n, 4526))))
            }
        }
        t.default = _default
    }
    ,
    7857: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("countdown", (()=>n.e(804).then(n.bind(n, 5449))))
            }
        }
        t.default = _default
    }
    ,
    7043: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("form", [()=>n.e(680).then(n.bind(n, 8503)), ()=>n.e(680).then(n.bind(n, 1393)), ()=>n.e(680).then(n.bind(n, 6529)), ()=>n.e(680).then(n.bind(n, 784)), ()=>n.e(680).then(n.bind(n, 2108)), ()=>n.e(680).then(n.bind(n, 5347))]),
                elementorFrontend.elementsHandler.attachHandler("subscribe", [()=>n.e(680).then(n.bind(n, 8503)), ()=>n.e(680).then(n.bind(n, 1393)), ()=>n.e(680).then(n.bind(n, 6529))])
            }
        }
        t.default = _default
    }
    ,
    4223: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("gallery", (()=>n.e(121).then(n.bind(n, 2219))))
            }
        }
        t.default = _default
    }
    ,
    3184: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("hotspot", (()=>n.e(888).then(n.bind(n, 1016))))
            }
        }
        t.default = _default
    }
    ,
    1474: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                ["post", "product"].forEach((e=>{
                    elementorFrontend.elementsHandler.attachHandler("loop-grid", (()=>n.e(985).then(n.bind(n, 4098))), e),
                    elementorFrontend.elementsHandler.attachHandler("loop-grid", (()=>n.e(149).then(n.bind(n, 6685))), e),
                    elementorFrontend.elementsHandler.attachHandler("loop-carousel", (()=>n.e(149).then(n.bind(n, 6685))), e),
                    elementorFrontend.elementsHandler.attachHandler("loop-carousel", (()=>n.e(153).then(n.bind(n, 7188))), e),
                    elementorFrontend.elementsHandler.attachHandler("loop-grid", (()=>n.e(356).then(n.bind(n, 6128))), e)
                }
                ))
            }
        }
        t.default = _default
    }
    ,
    3651: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(6399))
          , r = s(n(8491))
          , i = s(n(3601))
          , l = n(9408);
        class BaseFilterFrontendModule extends elementorModules.Module {
            constructor() {
                super(),
                this.loopWidgetsStore = new i.default
            }
            removeFilterFromLoopWidget(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                if (!this.loopWidgetsStore.getWidget(e))
                    return this.loopWidgetsStore.addWidget(e),
                    void this.refreshLoopWidget(e, t);
                if (n === s && this.loopWidgetsStore.unsetFilter(e, t),
                n !== s) {
                    const s = this.loopWidgetsStore.getFilterTerms(e, t).filter((function(e) {
                        return e !== n
                    }
                    ));
                    this.loopWidgetsStore.setFilterTerms(e, t, s)
                }
                this.refreshLoopWidget(e, t)
            }
            setFilterDataForLoopWidget(e, t, n) {
                let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                  , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "DISABLED";
                this.loopWidgetsStore.maybeInitializeWidget(e),
                this.loopWidgetsStore.maybeInitializeFilter(e, t);
                const r = this.validateMultipleFilterOperator(o);
                if ("DISABLED" !== r) {
                    const s = this.loopWidgetsStore.getFilterTerms(e, t) ?? []
                      , o = n.filterData.terms;
                    n.filterData.terms = [...new Set([...s, ...o])],
                    n.filterData.logicalJoin = r
                }
                this.loopWidgetsStore.setFilter(e, t, n),
                s ? this.refreshLoopWidget(e, t) : this.loopWidgetsStore.consolidateFilters(e)
            }
            validateMultipleFilterOperator(e) {
                return e && ["AND", "OR"].includes(e) ? e : "DISABLED"
            }
            getQueryStringInObjectForm() {
                const e = {};
                for (const t in this.loopWidgetsStore.get()) {
                    const n = this.loopWidgetsStore.getWidget(t);
                    for (const s in n.consolidatedFilters) {
                        const o = n.consolidatedFilters[s];
                        for (const n in o) {
                            const s = l.queryConstants[o[n].logicalJoin ?? "AND"].separator.decoded;
                            e[`e-filter-${t}-${n}`] = Object.values(o[n].terms).join(s)
                        }
                    }
                }
                return e
            }
            updateURLQueryString(e, t) {
                const n = new URL(window.location.href).searchParams
                  , s = this.getQueryStringInObjectForm()
                  , o = new URLSearchParams;
                n.forEach(((t,n)=>{
                    n.startsWith("e-filter") || o.append(n, t),
                    n.startsWith("e-page-" + e) && o.delete(n)
                }
                ));
                for (const e in s)
                    o.set(e, s[e]);
                let r = o.toString();
                r = r.replace(new RegExp(`${l.queryConstants.AND.separator.encoded}`,"g"), l.queryConstants.AND.separator.decoded),
                r = r.replace(new RegExp(`${l.queryConstants.OR.separator.encoded}`,"g"), l.queryConstants.OR.separator.decoded);
                const i = this.getFilterHelperAttributes(t);
                r = i.pageNum > 1 ? r ? this.formatQueryString(i.baseUrl, r) : i.baseUrl : r ? `?${r}` : location.pathname,
                history.pushState(null, null, r)
            }
            formatQueryString(e, t) {
                const n = e.includes("?") ? new URLSearchParams(e.split("?")[1]) : new URLSearchParams
                  , s = new URLSearchParams(t);
                for (const e of n.keys())
                    s.has(e) && s.delete(e);
                const o = ["page", "paged"];
                for (const e of o)
                    n.delete(e),
                    s.delete(e);
                const r = new URLSearchParams(n.toString());
                for (const [e,t] of s.entries())
                    r.append(e, t);
                return e.split("?")[0] + (r.toString() ? `?${r.toString()}` : "")
            }
            getFilterHelperAttributes(e) {
                const t = document.querySelector('[data-id="' + e + '"]');
                if (!t)
                    return {
                        baseUrl: location.href,
                        pageNum: 1
                    };
                return t.querySelector(".e-filter").dataset
            }
            prepareLoopUpdateRequestData(e, t) {
                const n = this.loopWidgetsStore.getConsolidatedFilters(e)
                  , s = this.getFilterHelperAttributes(t)
                  , o = {
                    post_id: elementorFrontend.config.post.id || this.getClosestDataElementorId(document.querySelector(`.elementor-element-${e}`)),
                    widget_filters: n,
                    widget_id: e,
                    pagination_base_url: s.baseUrl
                };
                if (elementorFrontend.isEditMode()) {
                    const t = window.top.$e.components.get("document").utils.findContainerById(e);
                    o.widget_model = t.model.toJSON({
                        remove: ["default", "editSettings", "defaultEditSettings"]
                    }),
                    o.is_edit_mode = !0
                }
                return o
            }
            getClosestDataElementorId(e) {
                const t = e.closest("[data-elementor-id]");
                return t ? t.getAttribute("data-elementor-id") : 0
            }
            getFetchArgumentsForLoopUpdate(e, t) {
                const n = this.prepareLoopUpdateRequestData(e, t)
                  , s = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(n)
                };
                return elementorFrontend.isEditMode() && elementorPro.config.loopFilter?.nonce && (s.headers["X-WP-Nonce"] = elementorPro.config.loopFilter?.nonce),
                s
            }
            fetchUpdatedLoopWidgetMarkup(e, t) {
                return fetch(`${elementorProFrontend.config.urls.rest}elementor-pro/v1/refresh-loop`, this.getFetchArgumentsForLoopUpdate(e, t))
            }
            createElementFromHTMLString(e) {
                const t = document.createElement("div");
                return e ? (t.innerHTML = e.trim(),
                t.firstElementChild) : (t.classList.add("elementor-widget-container"),
                t)
            }
            refreshLoopWidget(e, t) {
                this.loopWidgetsStore.consolidateFilters(e),
                this.updateURLQueryString(e, t);
                const n = document.querySelector(`.elementor-element-${e}`);
                if (!n)
                    return;
                this.ajaxHelper || (this.ajaxHelper = new r.default),
                this.ajaxHelper.addLoadingAnimationOverlay(e);
                return this.fetchUpdatedLoopWidgetMarkup(e, t).then((e=>e instanceof Response && e?.ok && !(400 <= e?.status) ? e.json() : {})).catch((e=>({}))).then((t=>{
                    if (!t?.data && "" !== t?.data)
                        return;
                    const s = n.querySelector(".elementor-widget-container")
                      , o = this.createElementFromHTMLString(t.data);
                    n.replaceChild(o, s),
                    this.handleElementHandlers(o),
                    elementorFrontend.config.experimentalFeatures.e_lazyload && document.dispatchEvent(new Event("elementor/lazyload/observe")),
                    elementorFrontend.elementsHandler.runReadyTrigger(document.querySelector(`.elementor-element-${e}`)),
                    n.classList.remove("e-loading")
                }
                )).finally((()=>{
                    this.ajaxHelper.removeLoadingAnimationOverlay(e)
                }
                ))
            }
            handleElementHandlers(e) {
                const t = e.querySelectorAll(".e-loop-item");
                (0,
                o.default)(t)
            }
        }
        t.default = BaseFilterFrontendModule
    }
    ,
    3159: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3651));
        class LoopFilter extends o.default {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("taxonomy-filter", (()=>n.e(188).then(n.bind(n, 6961))))
            }
        }
        t.default = LoopFilter
    }
    ,
    3601: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class LoopWidgetsStore {
            constructor() {
                this.widgets = {}
            }
            get() {
                return this.widgets
            }
            getWidget(e) {
                return this.widgets[e]
            }
            setWidget(e, t) {
                this.widgets[e] = t
            }
            unsetWidget(e) {
                delete this.widgets[e]
            }
            getFilters(e) {
                return this.getWidget(e).filters
            }
            getFilter(e, t) {
                return this.getWidget(e).filters[t]
            }
            setFilter(e, t, n) {
                this.getWidget(e).filters[t] = n
            }
            unsetFilter(e, t) {
                delete this.getWidget(e).filters[t]
            }
            getFilterTerms(e, t) {
                return this.getFilter(e, t).filterData.terms ?? []
            }
            setFilterTerms(e, t, n) {
                this.getFilter(e, t).filterData.terms = n
            }
            getConsolidatedFilters(e) {
                return this.getWidget(e).consolidatedFilters
            }
            setConsolidatedFilters(e, t) {
                this.getWidget(e).consolidatedFilters = t
            }
            addWidget(e) {
                this.setWidget(e, {
                    filters: {},
                    consolidatedFilters: {}
                })
            }
            maybeInitializeWidget(e) {
                this.getWidget(e) || this.addWidget(e)
            }
            maybeInitializeFilter(e, t) {
                if (this.getFilter(e, t))
                    return;
                this.setFilter(e, t, {
                    filterData: {
                        terms: []
                    }
                })
            }
            consolidateFilters(e) {
                const t = this.getFilters(e)
                  , n = {};
                for (const e in t) {
                    const s = t[e]
                      , o = s.filterType
                      , r = s.filterData;
                    0 !== r.terms.length && (n[o] || (n[o] = {}),
                    n[o][r.selectedTaxonomy] || (n[o][r.selectedTaxonomy] = []),
                    !r.terms || n[o][r.selectedTaxonomy].terms && n[o][r.selectedTaxonomy].terms.includes(r.terms) || (n[o][r.selectedTaxonomy] = {
                        terms: "string" === r.terms ? [r.terms] : r.terms
                    }),
                    r.logicalJoin && !n[o][r.selectedTaxonomy].logicalJoin && (n[o][r.selectedTaxonomy] = {
                        ...n[o][r.selectedTaxonomy] || {},
                        logicalJoin: r.logicalJoin ?? "AND"
                    }))
                }
                this.setConsolidatedFilters(e, n)
            }
        }
    }
    ,
    9408: e=>{
        e.exports = {
            queryConstants: {
                AND: {
                    separator: {
                        decoded: "+",
                        fromBrowser: " ",
                        encoded: "%2B"
                    },
                    operator: "AND"
                },
                OR: {
                    separator: {
                        decoded: "~",
                        fromBrowser: "~",
                        encoded: "%7C"
                    },
                    operator: "IN"
                },
                NOT: {
                    separator: {
                        decoded: "!",
                        fromBrowser: "!",
                        encoded: "%21"
                    },
                    operator: "NOT IN"
                },
                DISABLED: {
                    separator: {
                        decoded: "",
                        fromBrowser: "",
                        encoded: ""
                    },
                    operator: "AND"
                }
            }
        }
    }
    ,
    4231: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("lottie", (()=>n.e(288).then(n.bind(n, 1464))))
            }
        }
        t.default = _default
    }
    ,
    2105: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("mega-menu", [()=>n.e(495).then(n.bind(n, 9318)), ()=>n.e(157).then(n.bind(n, 9638)), ()=>n.e(244).then(n.bind(n, 6921))])
            }
        }
        t.default = _default
    }
    ,
    2741: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                jQuery.fn.smartmenus && (jQuery.SmartMenus.prototype.isCSSOn = function() {
                    return !0
                }
                ,
                elementorFrontend.config.is_rtl && (jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = !0)),
                elementorFrontend.elementsHandler.attachHandler("nav-menu", (()=>n.e(42).then(n.bind(n, 7480))))
            }
        }
        t.default = _default
    }
    ,
    4351: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("nested-carousel", (()=>n.e(209).then(n.bind(n, 1826))))
            }
        }
        t.default = _default
    }
    ,
    7107: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2635))
          , r = s(n(3467))
          , i = n(8115);
        class _default extends elementorModules.frontend.Document {
            bindEvents() {
                const e = this.getDocumentSettings("open_selector");
                e && elementorFrontend.elements.$body.on("click", e, this.showModal.bind(this))
            }
            startTiming() {
                new r.default(this.getDocumentSettings("timing"),this).check() && this.initTriggers()
            }
            initTriggers() {
                this.triggers = new o.default(this.getDocumentSettings("triggers"),this)
            }
            showModal(e, t) {
                const n = this.getDocumentSettings();
                if (!this.isEdit) {
                    if (!elementorFrontend.isWPPreviewMode()) {
                        if (this.getStorage("disable"))
                            return;
                        if (e && elementorProFrontend.modules.popup.popupPopped && n.avoid_multiple_popups)
                            return
                    }
                    this.$element = jQuery(this.elementHTML),
                    this.elements.$elements = this.$element.find(this.getSettings("selectors.elements"))
                }
                const s = this.getModal()
                  , o = s.getElements("closeButton");
                s.setMessage(this.$element).show(),
                this.isEdit || (n.close_button_delay && (o.hide(),
                clearTimeout(this.closeButtonTimeout),
                this.closeButtonTimeout = setTimeout((()=>o.show()), 1e3 * n.close_button_delay)),
                super.runElementsHandlers()),
                this.setEntranceAnimation(),
                n.timing && n.timing.times_count || this.countTimes(),
                elementorProFrontend.modules.popup.popupPopped = !0,
                !this.isEdit && n.a11y_navigation && this.handleKeyboardA11y(t)
            }
            setEntranceAnimation() {
                const e = this.getModal().getElements("widgetContent")
                  , t = this.getDocumentSettings()
                  , n = elementorFrontend.getCurrentDeviceSetting(t, "entrance_animation");
                if (this.currentAnimation && e.removeClass(this.currentAnimation),
                this.currentAnimation = n,
                !n)
                    return;
                const s = t.entrance_animation_duration.size;
                e.addClass(n),
                setTimeout((()=>e.removeClass(n)), 1e3 * s)
            }
            handleKeyboardA11y(e) {
                const t = this.getModal().getElements("widgetContent").find(":focusable");
                if (!t.length)
                    return;
                let n = null;
                e?.currentTarget && (n = jQuery(e.currentTarget));
                const s = t[t.length - 1]
                  , o = t[0]
                  , onKeyDownPressed = e=>{
                    const t = e.shiftKey;
                    if (!("Tab" === e.key || 9 === e.keyCode))
                        return;
                    const n = elementorFrontend.elements.window.document.activeElement;
                    if (t) {
                        n === o && (s.focus(),
                        e.preventDefault())
                    } else {
                        n === s && (o.focus(),
                        e.preventDefault())
                    }
                }
                ;
                o.focus();
                const r = elementorFrontend.elements.$window;
                r.on("keydown", onKeyDownPressed).on("elementor/popup/hide", (()=>{
                    r.off("keydown", onKeyDownPressed),
                    n && n.focus()
                }
                ))
            }
            setExitAnimation() {
                const e = this.getModal()
                  , t = this.getDocumentSettings()
                  , n = e.getElements("widgetContent")
                  , s = elementorFrontend.getCurrentDeviceSetting(t, "exit_animation")
                  , o = s ? t.entrance_animation_duration.size : 0;
                setTimeout((()=>{
                    s && n.removeClass(s + " reverse"),
                    this.isEdit || (this.$element.remove(),
                    e.getElements("widget").hide())
                }
                ), 1e3 * o),
                s && n.addClass(s + " reverse")
            }
            initModal() {
                let e;
                this.getModal = ()=>{
                    if (!e) {
                        const t = this.getDocumentSettings()
                          , n = this.getSettings("id")
                          , triggerPopupEvent = e=>{
                            const t = "elementor/popup/" + e;
                            elementorFrontend.elements.$document.trigger(t, [n, this]),
                            window.dispatchEvent(new CustomEvent(t,{
                                detail: {
                                    id: n,
                                    instance: this
                                }
                            }))
                        }
                        ;
                        let s = "elementor-popup-modal";
                        t.classes && (s += " " + t.classes);
                        const o = {
                            id: "elementor-popup-modal-" + n,
                            className: s,
                            closeButton: !0,
                            preventScroll: t.prevent_scroll,
                            onShow: ()=>triggerPopupEvent("show"),
                            onHide: ()=>triggerPopupEvent("hide"),
                            effects: {
                                hide: ()=>{
                                    t.timing && t.timing.times_count && this.countTimes(),
                                    this.setExitAnimation()
                                }
                                ,
                                show: "show"
                            },
                            hide: {
                                auto: !!t.close_automatically,
                                autoDelay: 1e3 * t.close_automatically,
                                onBackgroundClick: !t.prevent_close_on_background_click,
                                onOutsideClick: !t.prevent_close_on_background_click,
                                onEscKeyPress: !t.prevent_close_on_esc_key,
                                ignore: ".flatpickr-calendar"
                            },
                            position: {
                                enable: !1
                            }
                        };
                        elementorFrontend.config.experimentalFeatures.e_font_icon_svg && (o.closeButtonOptions = {
                            iconElement: i.close.element
                        }),
                        o.closeButtonClass = "eicon-close",
                        e = elementorFrontend.getDialogsManager().createWidget("lightbox", o),
                        e.getElements("widgetContent").addClass("animated");
                        const r = e.getElements("closeButton");
                        this.isEdit && (r.off("click"),
                        e.hide = ()=>{}
                        ),
                        this.setCloseButtonPosition()
                    }
                    return e
                }
            }
            setCloseButtonPosition() {
                const e = this.getModal()
                  , t = this.getDocumentSettings("close_button_position");
                e.getElements("closeButton").prependTo(e.getElements("outside" === t ? "widget" : "widgetContent"))
            }
            disable() {
                this.setStorage("disable", !0)
            }
            setStorage(e, t, n) {
                elementorFrontend.storage.set(`popup_${this.getSettings("id")}_${e}`, t, n)
            }
            getStorage(e, t) {
                return elementorFrontend.storage.get(`popup_${this.getSettings("id")}_${e}`, t)
            }
            countTimes() {
                const e = this.getStorage("times") || 0;
                this.setStorage("times", e + 1)
            }
            runElementsHandlers() {}
            async onInit() {
                super.onInit(),
                window.DialogsManager || await elementorFrontend.utils.assetsLoader.load("script", "dialog"),
                this.initModal(),
                this.isEdit ? this.showModal() : (this.$element.show().remove(),
                this.elementHTML = this.$element[0].outerHTML,
                elementorFrontend.isEditMode() || (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings("id") ? this.showModal() : this.startTiming()))
            }
            onSettingsChange(e) {
                const t = Object.keys(e.changed)[0];
                -1 !== t.indexOf("entrance_animation") && this.setEntranceAnimation(),
                "exit_animation" === t && this.setExitAnimation(),
                "close_button_position" === t && this.setCloseButtonPosition()
            }
        }
        t.default = _default
    }
    ,
    3513: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(7107));
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.hooks.addAction("elementor/frontend/documents-manager/init-classes", this.addDocumentClass),
                elementorFrontend.elementsHandler.attachHandler("form", (()=>n.e(50).then(n.bind(n, 8872)))),
                elementorFrontend.on("components:init", (()=>this.onFrontendComponentsInit())),
                elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode() || this.setViewsAndSessions()
            }
            addDocumentClass(e) {
                e.addDocumentClass("popup", o.default)
            }
            setViewsAndSessions() {
                const e = elementorFrontend.storage.get("pageViews") || 0;
                elementorFrontend.storage.set("pageViews", e + 1);
                if (!elementorFrontend.storage.get("activeSession", {
                    session: !0
                })) {
                    elementorFrontend.storage.set("activeSession", !0, {
                        session: !0
                    });
                    const e = elementorFrontend.storage.get("sessions") || 0;
                    elementorFrontend.storage.set("sessions", e + 1)
                }
            }
            showPopup(e, t) {
                const n = elementorFrontend.documentsManager.documents[e.id];
                if (!n)
                    return;
                const s = n.getModal();
                e.toggle && s.isVisible() ? s.hide() : n.showModal(null, t)
            }
            closePopup(e, t) {
                const n = jQuery(t.target).parents('[data-elementor-type="popup"]').data("elementorId");
                if (!n)
                    return;
                const s = elementorFrontend.documentsManager.documents[n];
                s.getModal().hide(),
                e.do_not_show_again && s.disable()
            }
            onFrontendComponentsInit() {
                elementorFrontend.utils.urlActions.addAction("popup:open", ((e,t)=>this.showPopup(e, t))),
                elementorFrontend.utils.urlActions.addAction("popup:close", ((e,t)=>this.closePopup(e, t)))
            }
        }
        t.default = _default
    }
    ,
    3467: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(6723))
          , r = s(n(3754))
          , i = s(n(6470))
          , l = s(n(221))
          , a = s(n(2193))
          , d = s(n(6195))
          , u = s(n(5247))
          , c = s(n(349))
          , m = s(n(5503));
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                this.document = t,
                this.timingClasses = {
                    page_views: o.default,
                    sessions: r.default,
                    url: i.default,
                    sources: l.default,
                    logged_in: a.default,
                    devices: d.default,
                    times: u.default,
                    browsers: c.default,
                    schedule: m.default
                }
            }
            check() {
                const e = this.getSettings();
                let t = !0;
                return jQuery.each(this.timingClasses, ((n,s)=>{
                    if (!e[n])
                        return;
                    new s(e,this.document).check() || (t = !1)
                }
                )),
                t
            }
        }
        t.default = _default
    }
    ,
    3107: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                this.document = t
            }
            getTimingSetting(e) {
                return this.getSettings(this.getName() + "_" + e)
            }
        }
        t.default = _default
    }
    ,
    349: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "browsers"
            }
            check() {
                if ("all" === this.getTimingSetting("browsers"))
                    return !0;
                const e = this.getTimingSetting("browsers_options")
                  , t = elementorFrontend.utils.environment;
                return e.some((e=>t[e]))
            }
        }
        t.default = _default
    }
    ,
    6195: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "devices"
            }
            check() {
                return -1 !== this.getTimingSetting("devices").indexOf(elementorFrontend.getCurrentDeviceMode())
            }
        }
        t.default = _default
    }
    ,
    2193: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "logged_in"
            }
            check() {
                const e = elementorFrontend.config.user;
                if (!e)
                    return !0;
                if ("all" === this.getTimingSetting("users"))
                    return !1;
                return !this.getTimingSetting("roles").filter((t=>-1 !== e.roles.indexOf(t))).length
            }
        }
        t.default = _default
    }
    ,
    6723: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "page_views"
            }
            check() {
                const e = elementorFrontend.storage.get("pageViews")
                  , t = this.getName();
                let n = this.document.getStorage(t + "_initialPageViews");
                return n || (this.document.setStorage(t + "_initialPageViews", e),
                n = e),
                e - n >= this.getTimingSetting("views")
            }
        }
        t.default = _default
    }
    ,
    2097: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3231));
        t.default = class ScheduleUtils {
            constructor(e) {
                (0,
                o.default)(this, "shouldDisplay", (()=>{
                    if (!this.settings.startDate && !this.settings.endDate)
                        return !0;
                    const e = this.getCurrentDateTime();
                    return (!this.settings.startDate || e >= this.settings.startDate) && (!this.settings.endDate || e <= this.settings.endDate)
                }
                )),
                this.settings = e.settings
            }
            getCurrentDateTime() {
                let e = new Date;
                return "site" === this.settings.timezone && this.settings.serverDatetime && (e = new Date(this.settings.serverDatetime)),
                e
            }
        }
    }
    ,
    5503: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107))
          , r = s(n(2097));
        class _default extends o.default {
            constructor() {
                super(...arguments);
                const {schedule_timezone: e, schedule_start_date: t, schedule_end_date: n, schedule_server_datetime: s} = this.getSettings();
                this.settings = {
                    timezone: e,
                    startDate: !!t && new Date(t),
                    endDate: !!n && new Date(n),
                    serverDatetime: !!s && new Date(s)
                },
                this.scheduleUtils = new r.default({
                    settings: this.settings
                })
            }
            getName() {
                return "schedule"
            }
            check() {
                return this.scheduleUtils.shouldDisplay()
            }
        }
        t.default = _default
    }
    ,
    3754: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "sessions"
            }
            check() {
                const e = elementorFrontend.storage.get("sessions")
                  , t = this.getName();
                let n = this.document.getStorage(t + "_initialSessions");
                return n || (this.document.setStorage(t + "_initialSessions", e),
                n = e),
                e - n >= this.getTimingSetting("sessions")
            }
        }
        t.default = _default
    }
    ,
    221: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "sources"
            }
            check() {
                const e = this.getTimingSetting("sources");
                if (3 === e.length)
                    return !0;
                const t = document.referrer.replace(/https?:\/\/(?:www\.)?/, "");
                return 0 === t.indexOf(location.host.replace("www.", "")) ? -1 !== e.indexOf("internal") : -1 !== e.indexOf("external") || -1 !== e.indexOf("search") && /^(google|yahoo|bing|yandex|baidu)\./.test(t)
            }
        }
        t.default = _default
    }
    ,
    6237: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class TimesUtils {
            constructor(e) {
                this.uniqueId = e.uniqueId,
                this.settings = e.settings,
                this.storage = e.storage
            }
            getTimeFramesInSecounds(e) {
                return {
                    day: 86400,
                    week: 604800,
                    month: 2628288
                }[e]
            }
            setExpiration(e, t, n) {
                if (this.storage.get(e))
                    this.storage.set(e, t);
                else {
                    const s = {
                        lifetimeInSeconds: this.getTimeFramesInSecounds(n)
                    };
                    this.storage.set(e, t, s)
                }
            }
            getImpressionsCount() {
                const e = this.storage.get(this.uniqueId) ?? 0;
                return parseInt(e)
            }
            incrementImpressionsCount() {
                if (this.settings.period)
                    if ("session" !== this.settings.period) {
                        const e = this.getImpressionsCount();
                        this.setExpiration(this.uniqueId, e + 1, this.settings.period)
                    } else
                        sessionStorage.setItem(this.uniqueId, parseInt(sessionStorage.getItem(this.uniqueId) ?? 0) + 1);
                else
                    this.storage.set("times", (this.storage.get("times") ?? 0) + 1)
            }
            shouldCountOnOpen() {
                this.settings.countOnOpen && this.incrementImpressionsCount()
            }
            shouldDisplayPerTimeFrame() {
                return this.getImpressionsCount() < this.settings.showsLimit && (this.shouldCountOnOpen(),
                !0)
            }
            shouldDisplayPerSession() {
                const e = sessionStorage.getItem(this.uniqueId) ?? 0;
                return parseInt(e) < this.settings.showsLimit && (this.shouldCountOnOpen(),
                !0)
            }
            shouldDisplayBackwordCompatible() {
                let e = arguments.length > 1 ? arguments[1] : void 0;
                const t = parseInt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) < parseInt(e);
                return this.shouldCountOnOpen(),
                t
            }
        }
    }
    ,
    5247: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107))
          , r = s(n(6237));
        class _default extends o.default {
            constructor() {
                super(...arguments),
                this.uniqueId = `popup-${this.document.getSettings("id")}-impressions-count`;
                const {times_count: e, times_period: t, times_times: n} = this.getSettings();
                this.settings = {
                    countOnOpen: e,
                    period: t,
                    showsLimit: parseInt(n)
                },
                "" === this.settings.period && (this.settings.period = !1),
                ["", "close"].includes(this.settings.countOnOpen) ? (this.settings.countOnOpen = !1,
                this.onPopupHide()) : this.settings.countOnOpen = !0,
                this.utils = new r.default({
                    uniqueId: this.uniqueId,
                    settings: this.settings,
                    storage: elementorFrontend.storage
                })
            }
            getName() {
                return "times"
            }
            check() {
                if (!this.settings.period) {
                    const e = this.document.getStorage("times") || 0
                      , t = this.getTimingSetting("times");
                    return this.utils.shouldDisplayBackwordCompatible(e, t)
                }
                if ("session" !== this.settings.period) {
                    if (!this.utils.shouldDisplayPerTimeFrame())
                        return !1
                } else if (!this.utils.shouldDisplayPerSession())
                    return !1;
                return !0
            }
            onPopupHide() {
                window.addEventListener("elementor/popup/hide", (()=>{
                    this.utils.incrementImpressionsCount()
                }
                ))
            }
        }
        t.default = _default
    }
    ,
    6470: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(3107));
        class _default extends o.default {
            getName() {
                return "url"
            }
            check() {
                const e = this.getTimingSetting("url")
                  , t = this.getTimingSetting("action")
                  , n = document.referrer;
                if ("regex" !== t)
                    return "hide" === t ^ -1 !== n.indexOf(e);
                let s;
                try {
                    s = new RegExp(e)
                } catch (e) {
                    return !1
                }
                return s.test(n)
            }
        }
        t.default = _default
    }
    ,
    2635: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(4622))
          , r = s(n(8729))
          , i = s(n(358))
          , l = s(n(62))
          , a = s(n(8811))
          , d = s(n(9758));
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                this.document = t,
                this.triggers = [],
                this.triggerClasses = {
                    page_load: o.default,
                    scrolling: r.default,
                    scrolling_to: i.default,
                    click: l.default,
                    inactivity: a.default,
                    exit_intent: d.default
                },
                this.runTriggers()
            }
            runTriggers() {
                const e = this.getSettings();
                jQuery.each(this.triggerClasses, ((t,n)=>{
                    if (!e[t])
                        return;
                    const s = new n(e,(()=>this.onTriggerFired()));
                    s.run(),
                    this.triggers.push(s)
                }
                ))
            }
            destroyTriggers() {
                this.triggers.forEach((e=>e.destroy())),
                this.triggers = []
            }
            onTriggerFired() {
                this.document.showModal(!0),
                this.destroyTriggers()
            }
        }
        t.default = _default
    }
    ,
    2162: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                this.callback = t
            }
            getTriggerSetting(e) {
                return this.getSettings(this.getName() + "_" + e)
            }
        }
        t.default = _default
    }
    ,
    62: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2162));
        class _default extends o.default {
            constructor() {
                super(...arguments),
                this.checkClick = this.checkClick.bind(this),
                this.clicksCount = 0
            }
            getName() {
                return "click"
            }
            checkClick() {
                this.clicksCount++,
                this.clicksCount === this.getTriggerSetting("times") && this.callback()
            }
            run() {
                elementorFrontend.elements.$body.on("click", this.checkClick)
            }
            destroy() {
                elementorFrontend.elements.$body.off("click", this.checkClick)
            }
        }
        t.default = _default
    }
    ,
    9758: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2162));
        class _default extends o.default {
            constructor() {
                super(...arguments),
                this.detectExitIntent = this.detectExitIntent.bind(this)
            }
            getName() {
                return "exit_intent"
            }
            detectExitIntent(e) {
                e.clientY <= 0 && this.callback()
            }
            run() {
                elementorFrontend.elements.$window.on("mouseleave", this.detectExitIntent)
            }
            destroy() {
                elementorFrontend.elements.$window.off("mouseleave", this.detectExitIntent)
            }
        }
        t.default = _default
    }
    ,
    8811: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2162));
        class _default extends o.default {
            constructor() {
                super(...arguments),
                this.restartTimer = this.restartTimer.bind(this)
            }
            getName() {
                return "inactivity"
            }
            run() {
                this.startTimer(),
                elementorFrontend.elements.$document.on("keypress mousemove", this.restartTimer)
            }
            startTimer() {
                this.timeOut = setTimeout(this.callback, 1e3 * this.getTriggerSetting("time"))
            }
            clearTimer() {
                clearTimeout(this.timeOut)
            }
            restartTimer() {
                this.clearTimer(),
                this.startTimer()
            }
            destroy() {
                this.clearTimer(),
                elementorFrontend.elements.$document.off("keypress mousemove", this.restartTimer)
            }
        }
        t.default = _default
    }
    ,
    4622: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2162));
        class _default extends o.default {
            getName() {
                return "page_load"
            }
            run() {
                this.timeout = setTimeout(this.callback, 1e3 * this.getTriggerSetting("delay"))
            }
            destroy() {
                clearTimeout(this.timeout)
            }
        }
        t.default = _default
    }
    ,
    358: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2162));
        class _default extends o.default {
            getName() {
                return "scrolling_to"
            }
            run() {
                let e;
                try {
                    e = jQuery(this.getTriggerSetting("selector"))
                } catch (e) {
                    return
                }
                this.waypointInstance = elementorFrontend.waypoint(e, this.callback)[0]
            }
            destroy() {
                this.waypointInstance && this.waypointInstance.destroy()
            }
        }
        t.default = _default
    }
    ,
    8729: (e,t,n)=>{
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(n(2162));
        class _default extends o.default {
            constructor() {
                super(...arguments),
                this.checkScroll = this.checkScroll.bind(this),
                this.lastScrollOffset = 0
            }
            getName() {
                return "scrolling"
            }
            checkScroll() {
                const e = scrollY > this.lastScrollOffset ? "down" : "up"
                  , t = this.getTriggerSetting("direction");
                if (this.lastScrollOffset = scrollY,
                e !== t)
                    return;
                if ("up" === e)
                    return void this.callback();
                const n = elementorFrontend.elements.$document.height() - innerHeight;
                scrollY / n * 100 >= this.getTriggerSetting("offset") && this.callback()
            }
            run() {
                elementorFrontend.elements.$window.on("scroll", this.checkScroll)
            }
            destroy() {
                elementorFrontend.elements.$window.off("scroll", this.checkScroll)
            }
        }
        t.default = _default
    }
    ,
    3002: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                ["classic", "full_content", "cards"].forEach((e=>{
                    elementorFrontend.elementsHandler.attachHandler("posts", (()=>n.e(985).then(n.bind(n, 2607))), e)
                }
                )),
                elementorFrontend.elementsHandler.attachHandler("posts", (()=>n.e(287).then(n.bind(n, 2298))), "classic"),
                elementorFrontend.elementsHandler.attachHandler("posts", (()=>n.e(287).then(n.bind(n, 2298))), "full_content"),
                elementorFrontend.elementsHandler.attachHandler("posts", (()=>n.e(287).then(n.bind(n, 8496))), "cards"),
                elementorFrontend.elementsHandler.attachHandler("portfolio", (()=>n.e(824).then(n.bind(n, 5208))))
            }
        }
        t.default = _default
    }
    ,
    8650: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("share-buttons", (()=>n.e(58).then(n.bind(n, 4112))))
            }
        }
        t.default = _default
    }
    ,
    6701: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("slides", (()=>n.e(114).then(n.bind(n, 9378))))
            }
        }
        t.default = _default
    }
    ,
    102: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("facebook-button", (()=>n.e(443).then(n.bind(n, 3225)))),
                elementorFrontend.elementsHandler.attachHandler("facebook-comments", (()=>n.e(443).then(n.bind(n, 3225)))),
                elementorFrontend.elementsHandler.attachHandler("facebook-embed", (()=>n.e(443).then(n.bind(n, 3225)))),
                elementorFrontend.elementsHandler.attachHandler("facebook-page", (()=>n.e(443).then(n.bind(n, 3225))))
            }
        }
        t.default = _default
    }
    ,
    1748: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("table-of-contents", (()=>Promise.all([n.e(699), n.e(838)]).then(n.bind(n, 8208))))
            }
        }
        t.default = _default
    }
    ,
    5438: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                ["archive_classic", "archive_full_content", "archive_cards"].forEach((e=>{
                    elementorFrontend.elementsHandler.attachHandler("archive-posts", (()=>n.e(685).then(n.bind(n, 8297))), e)
                }
                )),
                elementorFrontend.elementsHandler.attachHandler("archive-posts", (()=>n.e(685).then(n.bind(n, 8537))), "archive_classic"),
                elementorFrontend.elementsHandler.attachHandler("archive-posts", (()=>n.e(685).then(n.bind(n, 8537))), "archive_full_content"),
                elementorFrontend.elementsHandler.attachHandler("archive-posts", (()=>n.e(685).then(n.bind(n, 9409))), "archive_cards"),
                jQuery((function() {
                    var e = location.search.match(/theme_template_id=(\d*)/)
                      , t = e ? jQuery(".elementor-" + e[1]) : [];
                    t.length && jQuery("html, body").animate({
                        scrollTop: t.offset().top - window.innerHeight / 2
                    })
                }
                ))
            }
        }
        t.default = _default
    }
    ,
    2439: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("search-form", (()=>n.e(858).then(n.bind(n, 6709))))
            }
        }
        t.default = _default
    }
    ,
    5032: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-menu-cart", (()=>n.e(102).then(n.bind(n, 2083)))),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-purchase-summary", (()=>n.e(1).then(n.bind(n, 484)))),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-checkout-page", (()=>n.e(124).then(n.bind(n, 9035)))),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-cart", (()=>n.e(859).then(n.bind(n, 7649)))),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-my-account", (()=>n.e(979).then(n.bind(n, 1915)))),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-notices", (()=>n.e(497).then(n.bind(n, 2627)))),
                elementorFrontend.elementsHandler.attachHandler("woocommerce-product-add-to-cart", (()=>n.e(800).then(n.bind(n, 5767)))),
                elementorFrontend.isEditMode() && elementorFrontend.on("components:init", (()=>{
                    elementorFrontend.elements.$body.find(".elementor-widget-woocommerce-cart").length || elementorFrontend.elements.$body.append('<div class="woocommerce-cart-form">')
                }
                ))
            }
        }
        t.default = _default
    }
    ,
    8003: e=>{
        e.exports = wp.i18n
    }
}, e=>{
    e.O(0, [819], (()=>{
        return t = 7996,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {
    var t, e = location.hash.substring(1);
    /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1),
    t.focus())
}, !1);
function lazyLoadThumb(e) {
    var t = '<img data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>'
      , a = '<button class="play" aria-label="play Youtube video"></button>';
    return t.replace("ID", e) + a
}
function lazyLoadYoutubeIframe() {
    var e = document.createElement("iframe")
      , t = "ID?autoplay=1";
    t += 0 === this.parentNode.dataset.query.length ? '' : '&' + this.parentNode.dataset.query;
    e.setAttribute("src", t.replace("ID", this.parentNode.dataset.src)),
    e.setAttribute("frameborder", "0"),
    e.setAttribute("allowfullscreen", "1"),
    e.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
    this.parentNode.parentNode.replaceChild(e, this.parentNode)
}
document.addEventListener("DOMContentLoaded", function() {
    var e, t, p, a = document.getElementsByClassName("rll-youtube-player");
    for (t = 0; t < a.length; t++)
        e = document.createElement("div"),
        e.setAttribute("data-id", a[t].dataset.id),
        e.setAttribute("data-query", a[t].dataset.query),
        e.setAttribute("data-src", a[t].dataset.src),
        e.innerHTML = lazyLoadThumb(a[t].dataset.id),
        a[t].appendChild(e),
        p = e.querySelector('.play'),
        p.onclick = lazyLoadYoutubeIframe
});
