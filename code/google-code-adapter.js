//- JavaScript source code

//- google-code-adapter.js ~~
//                                                      ~~ (c) SRW, 28 Feb 2013
//                                                  ~~ last updated 28 Feb 2013

(function () {
    'use strict';

 // Pragmas

    /*jslint browser: true, indent: 4, maxlen: 80 */

 // Prerequisites

    if (window.hasOwnProperty('QM') === false) {
        throw new Error('QMachine is not loaded.');
    }

 // Declarations

    var QM;

 // Definitions

    QM = window.QM;

 // Out-of-scope definitions

    Object.defineProperty(QM, 'puts', {
     // NOTE: I commented out two of the next three lines
     // because their values match the ES5.1 default values.
        //configurable: false,
        enumerable: true,
        //writable: false,
        value: function () {
         // This function needs documentation.
            var div = document.createElement('div');
            document.body.appendChild(div);
            QM.when.apply(this, arguments).Q(function (evt) {
             // This function needs documentation.
                div.className = 'output';
                div.innerHTML += this.val.join(' ');
                return evt.exit();
            }).on('error', function (message) {
             // This function needs documentation.
                div.className = 'error';
                div.innerHTML += message;
                return;
            });
            return;
        }
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
