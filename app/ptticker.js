var scripts = document.getElementsByTagName('script');
var myscript = scripts[scripts.length - 1];
var TickerList = [];
var undefined = 'undefined';
var EmptyFunc = function() {};
var Class = {
    create: function() {
        return (function() {
            if (this.initialize) {
                this.initialize.apply(this, arguments);
            }
        });
    }
};
Function.prototype.bind = function(object) {
    var __method = this;
    return (function() {
        __method.apply(object, arguments);
    });
};

function abc() {
    var elements = [];
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length == 1)
            return element;
        elements[elements.length] = element;
    }
    return elements;
}
if (typeof Function.prototype.apply == undefined) {
    Function.prototype.apply = function(object, parameters) {
        var parameterStrings = [];
        if (!object) object = window;
        if (!parameters) parameters = [];
        for (var i = 0; i < parameters.length; i++)
            parameterStrings[i] = 'parameters[' + i + ']';
        object.__apply__ = this;
        var result = eval('object.__apply__(' + parameterStrings.join(', ') + ')');
        object.__apply__ = null;
        return result;
    }
};
var HLComm = Class.create();
HLComm.prototype = {
    initialize: function(url) {
        var frame, container;
        if (''.replace(/^$/, function() {
                return 'x'
            }) != 'x') {
            var div = document.createElement('div');
            with(div.style) {
                height = width = border = '0px';
                visibility = 'hidden';
                position = 'absolute';
            }
            document.body.appendChild(div);
            div.innerHTML = '<iframe src=""></iframe>';
            frame = div.firstChild;
            container = div;
        } else {
            frame = document.createElement('iframe');
            document.body.appendChild(frame);
            container = frame;
        }
        with(container.style) {
            height = width = border = '0px';
            visibility = 'hidden';
            position = 'absolute';
        }
        for (var i = 0; i < window.frames.length; i++) {
            if (window.frames[i] == frame) {
                frame = window.frames[i];
                break;
            }
        }
        this.frame = frame;
        this.url = url;
    },
    sendRealRequest: function(tickername) {
        var frame = this.frame;
        var doc;
        if (frame.contentDocument) {
            doc = frame.contentDocument;
        } else if (frame.contentWindow) {
            doc = frame.contentWindow.document;
        } else if (frame.document) {
            doc = frame.document;
        }
        if (!doc) {
            setTimeout(function() {
                arguments.callee(tickername);
            }, 100);
            return;
        }
        doc.open();
        doc.write('<html>' + '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>' + '<script type="text/javascript" >var xmlstring = {};</script>' + '<script type="text/javascript" src="' + this.url + '"></script>' + '</head>' + '<body onLoad="var d=\'\';' + 'try{d=xmlstring}catch(e){}' + 'window.parent.TickerList[' + tickername + '].handleResponse(d);">' + '</body>' + '</html>');
        doc.close();
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
    errmsg: '-',
    xml: '',
    downloadTime: 0,
    type: '',
    setup: false,
    initialize: function(attr) {
        if (!attr.info) {
            return;
        }
        this.currency = (attr.currency ? attr.currency.toLowerCase() : 'usd');
        this.info = attr.info;
        if (attr.root_url) {
            this.xml = attr.root_url;
        } else {
            this.xml = myscript.src.replace(/jackpots\/new_jackpotjs.js.*/, '');
            this.xml = 'http://tickers.playtech.com/';
        }
        this.xml += 'jpdata/datalink/';
        switch (attr.info) {
            case 1:
                if (!attr.game || (attr.local == 1 && !attr.casino)) {
                    return;
                }
                this.countElement = 'game';
                if (attr.casino) this.casino = attr.casino.toLowerCase();
                this.game = attr.game.toLowerCase();
                this.xml += (attr.local == 1 ? (this.casino + '_') : '');
                this.xml += this.game;
                this.setup = true;
                break;
            case 2:
                if (!attr.casino) {
                    return;
                }
                this.countElement = 'casinototal';
                this.casino = attr.casino.toLowerCase();
                this.xml += this.casino;
                this.setup = true;
                break;
            case 4:
                this.xml += 'casinostotal';
                this.local = (attr.local == 1 || attr.local == 0 ? attr.local : 2);
                this.setup = true;
                break;
            case 5:
                if (!attr.group) {
                    return;
                }
                this.countElement = 'game';
                this.group = attr.group.toLowerCase();
                this.xml += 'group_' + this.group;
                this.setup = true;
                break;
            default:
                return;
        }
        this.xml += '.xml.js';
        this.setup = true;
        if (attr.type == 'count' || attr.type == 'sum') {
            this.ticking = false;
            this.type = attr.type;
            if (this.type == 'count') {
                this.sign = '';
                this.signpos = '';
            }
        }
        this.comm = new HLComm(this.xml);
        this.name = window.TickerList.length;
        window.TickerList[window.TickerList.length] = this;
    },
    attachToTextBox: function(id) {
        this.textbox = abc(id);
    },
    debugTextBox: function(id) {
        this.debug = abc(id);
    },
    SetCurrencySign: function(sign) {
        if (this.type != 'count') this.sign = sign;
    },
    SetCurrencyPos: function(pos) {
        if (this.type != 'count') {
            this.signpos = pos;
        }
    },
    requestJackpot: function() {
        this.comm.sendRealRequest(this.name);
    },
    handleResponse: function(response) {
        this.errmsg = '-';
        var jp = this.tickerEndSum;
        var seed = 0;
        var step = 0;
        var xmldoc, targetNode;
        var generationInterval = (response.endTime - response.startTime) + (response.execInterval * 60) + 180;
        this.downloadInterval = generationInterval * 1000;
        this.tickingPeriod = this.downloadInterval + 60000;
        xmldoc = this.parseFromString(response.jpxml);
        if (xmldoc) {
            if (this.info == 4 && this.local == 2) {
                var targetNodes = this.findTargetNodes(xmldoc);
                if (targetNodes && targetNodes.length > 0) {
                    jp = 0;
                    for (var i = 0; i < targetNodes.length; i++) {
                        var node = targetNodes[i];
                        var jpval = 0;
                        if (this.type == 'sum') jpval = parseFloat(node.getAttribute('wins'), 10);
                        else if (this.type == 'count') jpval = parseFloat(node.getAttribute('winc'), 10);
                        else if (node.firstChild && node.firstChild.nodeValue) jpval = parseFloat(node.firstChild.nodeValue, 10);
                        if (!isNaN(jpval)) jp += jpval;
                        seed += (isNaN(parseFloat(node.getAttribute('seed'), 10)) ? 0 : parseFloat(node.getAttribute('seed'), 10));
                        step += (isNaN(parseFloat(node.getAttribute('step'), 10)) ? 0 : parseFloat(node.getAttribute('step'), 10));
                    }
                    if (jp == 0) jp = this.tickerEndSum;
                    if (typeof this.sign == 'undefined') {
                        this.sign = targetNodes[0].getAttribute('sign');
                        if (this.sign.length == 3) {
                            this.sign = ' ' + this.currency.toUpperCase();
                            this.signpos = 1;
                        }
                    }
                    if (typeof this.signpos == 'undefined') this.signpos = targetNodes[0].getAttribute('pos');
                }
            } else {
                targetNode = this.findTargetNode(xmldoc);
                if (targetNode) {
                    if (this.type == 'sum') {
                        jp = parseFloat(targetNode.getAttribute('wins'), 10);
                    } else if (this.type == 'count') {
                        jp = parseFloat(targetNode.getAttribute('winc'), 10);
                    } else if (targetNode.firstChild && targetNode.firstChild.nodeValue) {
                        jp = parseFloat(targetNode.firstChild.nodeValue, 10);
                    }
                    if (isNaN(jp)) jp = this.tickerEndSum;
                    if (typeof this.sign == 'undefined') {
                        this.sign = targetNode.getAttribute('sign');
                        if (this.sign.length == 3) {
                            this.sign = ' ' + this.currency.toUpperCase();
                            this.signpos = 1;
                        }
                    }
                    if (typeof this.signpos == 'undefined') this.signpos = targetNode.getAttribute('pos');
                    seed = parseFloat(targetNode.getAttribute('seed'), 10);
                    step = parseFloat(targetNode.getAttribute('step'), 10);
                    if (isNaN(seed)) seed = 0;
                    if (isNaN(step)) step = 0;
                }
            }
        }
        this.setJackpot(jp, seed, step);
    },
    findTargetNodes: function(xmldoc) {
        var baseElement = xmldoc;
        var targetNodes = [];
        if (this.type == 'count') {
            return xmldoc.getElementsByTagName('total');
        }
        var amountNodes = baseElement.getElementsByTagName('amount');
        for (var i = 0; i < amountNodes.length; i++) {
            if (amountNodes[i].getAttribute('currency').toLowerCase() == this.currency) {
                targetNodes.push(amountNodes[i]);
            }
        }
        return targetNodes;
    },
    findTargetNode: function(xmldoc) {
        var baseElement = xmldoc;
        var targetNode;
        if (this.info == 4) {
            var found = false;
            var totalElements = xmldoc.getElementsByTagName('total');
            for (var i = 0; i < totalElements.length; i++) {
                if (totalElements[i].getAttribute('local') == this.local) {
                    baseElement = totalElements[i];
                    found = true;
                }
            }
            if (!found) return false;
            if (this.type == 'count') return baseElement;
        }
        if (this.type == 'count') {
            targetNode = baseElement.getElementsByTagName(this.countElement)[0];
        } else {
            var amountNodes = baseElement.getElementsByTagName('amount');
            for (var i = 0; i < amountNodes.length; i++) {
                if (amountNodes[i].getAttribute('currency').toLowerCase() == this.currency) {
                    targetNode = amountNodes[i];
                    break;
                }
            }
        }
        return targetNode;
    },
    parseFromString: function(xmlstring) {
        var xmldoc = {};
        if (typeof(DOMParser) != "undefined") {
            var xmldoc = (new DOMParser()).parseFromString(xmlstring, "text/xml");
        } else {
            try {
                xmldoc = new ActiveXObject("Microsoft.XMLDOM");
                xmldoc.async = false;
                xmldoc.loadXML(xmlstring);
            } catch (e) {
                xmldoc.err = 1
                xmldoc.errmsg = e;
            }
        }
        if (xmlstring == '' || xmldoc.err == 1) {
            this.errormsg = xmldoc.errmsg;
            return false;
        }
        return xmldoc;
    },
    setJackpot: function(jackpot, seed, step) {
        this.tickerEndSum = jackpot;
        var currentTcValue = this.getJackpot();
        var nrOfSteps = Math.round((this.tickingPeriod / this.updateInterval) * 100000000000) / 100000000000;
        if (step > 0) {
            this.tickerStartSum = Math.max(this.tickerEndSum - step * this.tickingPeriod / 1000, this.tickerEndSum * this.startPercent / 100, seed);
            this.tickerStartSum = Math.max(this.tickerStartSum, currentTcValue);
            this.tickStep = Math.min(step, (this.tickerEndSum - this.tickerStartSum) / nrOfSteps);
        } else {
            this.tickerStartSum = this.tickerEndSum * this.startPercent / 100;
            this.tickerStartSum = Math.max(this.tickerStartSum, currentTcValue);
            this.tickStep = (this.tickerEndSum - this.tickerStartSum) / nrOfSteps;
        }
        this.tickerStartTime = (new Date()).getTime();
        if (this.debug) {
            var text = '';
            if (this.info == 1) text += 'GameTicker: ' + this.game + '/' + (this.casino ? this.casino : 'global') + '/' + this.currency;
            if (this.info == 2) text += 'CasinoTicker: ' + this.casino + '/' + this.currency;
            if (this.info == 4) text += 'TotalTicker: ' + (this.local == 2 ? '(local+global) ' : (this.local == 1 ? '(local) ' : 'global ')) + this.currency;
            if (this.info == 5) text += 'GroupTicker: ' + this.group + '/' + this.currency;
            if (this.type) text += ' - ' + this.type;
            if (this.errmsg == '-') {
                this.debug.innerHTML = text + '<br>StartSum: ' + this.tickerStartSum + '<br>EndSum: ' + this.tickerEndSum + '<br>TickingPeriod: ' + this.tickingPeriod + '<br>TickingStep: ' + this.tickStep + '<br>' + this.xml;
            } else {
                this.debug.innerHTML = text + '<br>' + this.errmsg + '<br>counter: ' + this.counter;
            }
        }
    },
    getJackpot: function() {
        var t = (new Date()).getTime();
        if (this.tickerStartTime == 0) {
            return 0;
        }
        if (!this.ticking) {
            return this.tickerEndSum;
        }
        var nrOfSteps = (t - this.tickerStartTime) / this.updateInterval;
        return this.tickerStartSum + nrOfSteps * this.tickStep;
    },
    updateJackpot: function() {
        var t = (new Date()).getTime();
        if (this.counter == 0) {
            if (navigator && navigator.userAgent && ((navigator.userAgent.toLowerCase()).indexOf('opera') != -1)) {
                setTimeout(this.requestJackpot.bind(this), 100);
            }
            this.counter = this.counter + 1;
            this.downloadTime = t;
            setTimeout(this.requestJackpot.bind(this), 500);
            this.requestJackpot();
            return;
        }
        if (t > this.downloadTime + this.downloadInterval) {
            this.counter = this.counter + 1;
            this.downloadTime = t;
            this.requestJackpot();
            return;
        }
        return false;
    },
    showJackpot: function() {
        var newvalue = this.getJackpot();
        if (this.type != 'count') {
            newvalue = Math.round(newvalue * 100) / 100 + '';
            if (newvalue.match(/^\d+\.\d$/)) {
                newvalue = newvalue + '0';
            }
            if (newvalue.match(/^\d+$/)) {
                newvalue = newvalue + '.00';
            }
        }
        var text = 'æ­£åœ¨æ›´æ–°';
        if (newvalue > 0) {
            text = (this.signpos != 0 ? addCommas(newvalue) + this.sign : this.sign + addCommas(newvalue));
        }
        if (newvalue > 0 && this.type == 'count') {
            text = newvalue;
        }
        this.textbox.innerHTML = text;
    },
    tick: function() {
        if (!this.setup || !this.textbox) {
            return false;
        }
        if (this.tickerStartTime != 0 && !this.ticking) {
            this.showJackpot();
            return false;
        }
        this.updateJackpot();
        this.showJackpot();
        setTimeout(this.tick.bind(this), this.updateInterval);
    }
}

function addCommas(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}
