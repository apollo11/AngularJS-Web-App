/**
 * Created by apollomm on 3/3/16.
 */
var ticker = new Ticker({info: 1, local: 1, casino: 'playtech',
    game: 'car',currency: 'eur'	});
ticker.attachToTextBox('text1');
ticker.tick();
var ticker2 = new Ticker({info: 1, local: 1, casino: 'playtech',
    game: 'car', type: 'count'	});
ticker2.attachToTextBox('text2');
ticker2.tick();
var ticker3 = new Ticker({info: 5, group: 'ms', type: 'sum'	});
ticker3.attachToTextBox('text3');
ticker3.tick();
var ticker4 = new Ticker({info: 2, casino: 'playtech'	});
ticker4.attachToTextBox('text4');
ticker4.tick();
var ticker5 = new Ticker({info: 4, local: 0, type: 'count'	});
ticker5.attachToTextBox('text5');
ticker5.tick();
var ticker6 = new Ticker({info: 4, type: 'sum'	});
ticker6.attachToTextBox('text6');
ticker6.SetCurrencySign('dollar');
ticker6.SetCurrencyPos(1)	;
ticker6.tick();