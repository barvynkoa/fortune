/**
 * Created by Andrew on 9/12/2016.
 */

import Spinner = require('./Spinner');

class Game {
    private _spinner:Spinner;
    constructor () {
        this._spinner = new Spinner('res/zoom_wheel.png');

        var self:any = this;
        var button:any = document.getElementById("spinBtn");
        var textField:any = document.getElementById("spinNumber");

        button.addEventListener('click', function () {
            var spinNumber:number = parseInt(textField.value);
            if (isNaN(spinNumber) || spinNumber<0 || spinNumber>36) {
                alert("Invalid number!")
            }
            else{
                if (self._spinner.isSpinNow()) {
                    alert("Please wait...");
                    return;
                }
                self._spinner.spin(spinNumber);
            }

        });
    }
}

export = Game;