var scripts = document.getElementsByTagName("script");
var myscript = scripts[scripts.length - 1];
var TickerList = [];
var undefined = "undefined";
var EmptyFunc = function() {}
    ;
var Class = {
    create: function() {
        return ( function() {
                if (this.initialize) {
                    this.initialize.apply(this, arguments)
                }
            }
        )
    }
};
Function.prototype.bind = function(b) {
    var a = this;
    return ( function() {
            a.apply(b, arguments)
        }
    )
}
;
if (typeof Function.prototype.apply == undefined) {
    Function.prototype.apply = function(object, parameters) {
        var parameterStrings = [];
        if (!object) {
            object = window
        }
        if (!parameters) {
            parameters = []
        }
        for (var i = 0; i < parameters.length; i++) {
            parameterStrings[i] = "parameters[" + i + "]"
        }
        object.__apply__ = this;
        var result = eval("object.__apply__(" + parameterStrings.join(", ") + ")");
        object.__apply__ = null ;
        return result
    }
}
var HLComm = Class.create();
HLComm.prototype = {
    initialize: function(url) {
        var frame, container;
        if ("".replace(/^$/, function() {
                return "x"
            }) != "x") {
            var div = document.createElement("div");
            with (div.style) {
                height = width = border = "0px";
                visibility = "hidden";
                position = "absolute"
            }
            document.body.appendChild(div);
            div.innerHTML = '<iframe src=""></iframe>';
            frame = div.firstChild;
            container = div
        } else {
            frame = document.createElement("iframe");
            document.body.appendChild(frame);
            container = frame
        }
        with (container.style) {
            height = width = border = "0px";
            visibility = "hidden";
            position = "absolute"
        }
        for (var i = 0; i < window.frames.length; i++) {
            if (window.frames[i] == frame) {
                frame = window.frames[i];
                break
            }
        }
        this.frame = frame;
        this.url = url
    },
    sendRealRequest: function(a) {
        var c = this.frame;
        var b;
        if (c.contentDocument) {
            b = c.contentDocument
        } else {
            if (c.contentWindow) {
                b = c.contentWindow.document
            } else {
                if (c.document) {
                    b = c.document
                }
            }
        }
        if (!b) {
            setTimeout(function() {
                arguments.callee(a)
            }, 100);
            return
        }
        b.open();
        b.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><script type="text/javascript" >var xmlstring = {};<\/script><script type="text/javascript" src="' + this.url + "\"><\/script></head><body onLoad=\"var d='';try{d=xmlstring}catch(e){}window.parent.TickerList[" + a + '].handleResponse(d);"></body></html>');
        b.close()
    }
};
var Ticker = Class.create();
Ticker.prototype = {
    tickingPeriod: 120 * 1000,
    downloadInterval: 119 * 1000,
    updateInterval: 59,
    startPercent: 99,
    tickStep: 0,
    tickerStartSum: 0,
    tickerEndSum: 0,
    tickerStartTime: 0,
    ticking: true,
    counter: 0,
    errmsg: "-",
    xml: "",
    downloadTime: 0,
    type: "",
    setup: false,
    initialize: function(a) {
        if (!a.info) {
            return
        }
        this.currency = (a.currency ? a.currency.toLowerCase() : "usd");
        this.info = a.info;
        if (a.root_url) {
            this.xml = a.root_url
        } else {
            this.xml = myscript.src.replace(/jackpots\/new_jackpotjs.js.*/, "")
        }
        this.xml += "jpdata/";
        switch (a.info) {
            case 1:
                if (!a.game || (a.local == 1 && !a.casino)) {
                    return
                }
                this.countElement = "game";
                if (a.casino) {
                    this.casino = a.casino.toLowerCase()
                }
                this.game = a.game.toLowerCase();
                this.xml += (a.local == 1 ? (this.casino + "_") : "");
                this.xml += this.game;
                this.setup = true;
                break;
            case 2:
                if (!a.casino) {
                    return
                }
                this.countElement = "casinototal";
                this.casino = a.casino.toLowerCase();
                this.xml += this.casino;
                this.setup = true;
                break;
            case 4:
                this.xml += "casinostotal";
                this.local = (a.local == 1 || a.local == 0 ? a.local : 2);
                this.setup = true;
                break;
            case 5:
                if (!a.group) {
                    return
                }
                this.countElement = "game";
                this.group = a.group.toLowerCase();
                this.xml += "group_" + this.group;
                this.setup = true;
                break;
            default:
                return
        }
        this.xml += ".xml.js";
        this.setup = true;
        if (a.type == "count" || a.type == "sum") {
            this.ticking = false;
            this.type = a.type;
            if (this.type == "count") {
                this.sign = "";
                this.signpos = ""
            }
        }
        this.comm = new HLComm(this.xml);
        this.name = window.TickerList.length;
        window.TickerList[window.TickerList.length] = this
    },
    attachToTextBox: function(a) {
        this.textbox = $(a)
    },
    debugTextBox: function(a) {
        this.debug = $(a)
    },
    SetCurrencySign: function(a) {
        if (this.type != "count") {
            this.sign = a
        }
    },
    SetCurrencyPos: function(a) {
        if (this.type != "count") {
            this.signpos = a
        }
    },
    requestJackpot: function() {
        this.comm.sendRealRequest(this.name)
    },
    handleResponse: function(d) {
        this.errmsg = "-";
        var c = this.tickerEndSum;
        var g = 0;
        var a = 0;
        var l, h;
        var e = (d.endTime - d.startTime) + (d.execInterval * 60) + 180;
        this.downloadInterval = e * 1000;
        this.tickingPeriod = this.downloadInterval + 60000;
        l = this.parseFromString(d.jpxml);
        if (l) {
            if (this.info == 4 && this.local == 2) {
                var j = this.findTargetNodes(l);
                if (j && j.length > 0) {
                    c = 0;
                    for (var f = 0; f < j.length; f++) {
                        var b = j[f];
                        var k = 0;
                        if (this.type == "sum") {
                            k = parseFloat(b.getAttribute("wins"), 10)
                        } else {
                            if (this.type == "count") {
                                k = parseFloat(b.getAttribute("winc"), 10)
                            } else {
                                if (b.firstChild && b.firstChild.nodeValue) {
                                    k = parseFloat(b.firstChild.nodeValue, 10)
                                }
                            }
                        }
                        if (!isNaN(k)) {
                            c += k
                        }
                        g += (isNaN(parseFloat(b.getAttribute("seed"), 10)) ? 0 : parseFloat(b.getAttribute("seed"), 10));
                        a += (isNaN(parseFloat(b.getAttribute("step"), 10)) ? 0 : parseFloat(b.getAttribute("step"), 10))
                    }
                    if (c == 0) {
                        c = this.tickerEndSum
                    }
                    if (typeof this.sign == "undefined") {
                        this.sign = j[0].getAttribute("sign");
                        if (this.sign.length == 3) {
                            this.sign = " " + this.currency.toUpperCase();
                            this.signpos = 1
                        }
                    }
                    if (typeof this.signpos == "undefined") {
                        this.signpos = j[0].getAttribute("pos")
                    }
                }
            } else {
                h = this.findTargetNode(l);
                if (h) {
                    if (this.type == "sum") {
                        c = parseFloat(h.getAttribute("wins"), 10)
                    } else {
                        if (this.type == "count") {
                            c = parseFloat(h.getAttribute("winc"), 10)
                        } else {
                            if (h.firstChild && h.firstChild.nodeValue) {
                                c = parseFloat(h.firstChild.nodeValue, 10)
                            }
                        }
                    }
                    if (isNaN(c)) {
                        c = this.tickerEndSum
                    }
                    if (typeof this.sign == "undefined") {
                        this.sign = h.getAttribute("sign");
                        if (this.sign.length == 3) {
                            this.sign = " " + this.currency.toUpperCase();
                            this.signpos = 1
                        }
                    }
                    if (typeof this.signpos == "undefined") {
                        this.signpos = h.getAttribute("pos")
                    }
                    g = parseFloat(h.getAttribute("seed"), 10);
                    a = parseFloat(h.getAttribute("step"), 10);
                    if (isNaN(g)) {
                        g = 0
                    }
                    if (isNaN(a)) {
                        a = 0
                    }
                }
            }
        }
        this.setJackpot(c, g, a)
    },
    findTargetNodes: function(a) {
        var e = a;
        var b = [];
        if (this.type == "count") {
            return a.getElementsByTagName("total")
        }
        var c = e.getElementsByTagName("amount");
        for (var d = 0; d < c.length; d++) {
            if (c[d].getAttribute("currency").toLowerCase() == this.currency) {
                b.push(c[d])
            }
        }
        return b
    },
    findTargetNode: function(b) {
        var e = b;
        var g;
        if (this.info == 4) {
            var f = false;
            var a = b.getElementsByTagName("total");
            for (var d = 0; d < a.length; d++) {
                if (a[d].getAttribute("local") == this.local) {
                    e = a[d];
                    f = true
                }
            }
            if (!f) {
                return false
            }
            if (this.type == "count") {
                return e
            }
        }
        if (this.type == "count") {
            g = e.getElementsByTagName(this.countElement)[0]
        } else {
            var c = e.getElementsByTagName("amount");
            for (var d = 0; d < c.length; d++) {
                if (c[d].getAttribute("currency").toLowerCase() == this.currency) {
                    g = c[d];
                    break
                }
            }
        }
        return g
    },
    parseFromString: function(c) {
        var a = {};
        if (typeof (DOMParser) != "undefined") {
            var a = (new DOMParser()).parseFromString(c, "text/xml")
        } else {
            try {
                a = new ActiveXObject("Microsoft.XMLDOM");
                a.async = false;
                a.loadXML(c)
            } catch (b) {
                a.err = 1;
                a.errmsg = b
            }
        }
        if (c == "" || a.err == 1) {
            this.errormsg = a.errmsg;
            return false
        }
        return a
    },
    setJackpot: function(d, c, e) {
        this.tickerEndSum = d;
        var b = this.getJackpot();
        var a = Math.round((this.tickingPeriod / this.updateInterval) * 100000000000) / 100000000000;
        if (e > 0) {
            this.tickerStartSum = Math.max(this.tickerEndSum - e * this.tickingPeriod / 1000, this.tickerEndSum * this.startPercent / 100, c);
            this.tickerStartSum = Math.max(this.tickerStartSum, b);
            this.tickStep = Math.min(e, (this.tickerEndSum - this.tickerStartSum) / a)
        } else {
            this.tickerStartSum = this.tickerEndSum * this.startPercent / 100;
            this.tickerStartSum = Math.max(this.tickerStartSum, b);
            this.tickStep = (this.tickerEndSum - this.tickerStartSum) / a
        }
        this.tickerStartTime = (new Date()).getTime();
        if (this.debug) {
            var f = "";
            if (this.info == 1) {
                f += "GameTicker: " + this.game + "/" + (this.casino ? this.casino : "global") + "/" + this.currency
            }
            if (this.info == 2) {
                f += "CasinoTicker: " + this.casino + "/" + this.currency
            }
            if (this.info == 4) {
                f += "TotalTicker: " + (this.local == 2 ? "(local+global) " : (this.local == 1 ? "(local) " : "global ")) + this.currency
            }
            if (this.info == 5) {
                f += "GroupTicker: " + this.group + "/" + this.currency
            }
            if (this.type) {
                f += " - " + this.type
            }
            if (this.errmsg == "-") {
                this.debug.innerHTML = f + "<br>StartSum: " + this.tickerStartSum + "<br>EndSum: " + this.tickerEndSum + "<br>TickingPeriod: " + this.tickingPeriod + "<br>TickingStep: " + this.tickStep + "<br>" + this.xml
            } else {
                this.debug.innerHTML = f + "<br>" + this.errmsg + "<br>counter: " + this.counter
            }
        }
    },
    getJackpot: function() {
        var b = (new Date()).getTime();
        if (this.tickerStartTime == 0) {
            return 0
        }
        if (!this.ticking) {
            return this.tickerEndSum
        }
        var a = (b - this.tickerStartTime) / this.updateInterval;
        return this.tickerStartSum + a * this.tickStep
    },
    updateJackpot: function() {
        var a = (new Date()).getTime();
        if (this.counter == 0) {
            if (navigator && navigator.userAgent && ((navigator.userAgent.toLowerCase()).indexOf("opera") != -1)) {
                setTimeout(this.requestJackpot.bind(this), 100)
            }
            this.counter = this.counter + 1;
            this.downloadTime = a;
            setTimeout(this.requestJackpot.bind(this), 500);
            this.requestJackpot();
            return
        }
        if (a > this.downloadTime + this.downloadInterval) {
            this.counter = this.counter + 1;
            this.downloadTime = a;
            this.requestJackpot();
            return
        }
        return false
    },
    showJackpot: function() {
        var a = this.getJackpot();
        if (this.type != "count") {
            a = Math.round(a * 100) / 100 + "";
            if (a.match(/^\d+\.\d$/)) {
                a = a + "0"
            }
            if (a.match(/^\d+$/)) {
                a = a + ".00"
            }
        }
        var b = $updating;
        if (a > 0) {
            b = (this.signpos != 0 ? a + this.sign : this.sign + a)
        }
        if (a > 0 && this.type == "count") {
            b = a
        }
        this.textbox.html(b)
    },
    tick: function() {
        if (!this.setup || !this.textbox) {
            return false
        }
        if (this.tickerStartTime != 0 && !this.ticking) {
            this.showJackpot();
            return false
        }
        this.updateJackpot();
        this.showJackpot();
        setTimeout(this.tick.bind(this), this.updateInterval)
    }
};
