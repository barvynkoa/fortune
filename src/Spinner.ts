/**
 * Created by Andrew on 9/12/2016.
 */

import Game = require('./Game');

class Spinner {
    private _fps:number;
    private _interval:number;
    private _startInterval:number;
    private _endInterval:number;
    private _deltaInterval:number;
    private _dt:number;

    private _canvas:any;
    private _context:any;

    private _counter:number;
    private _angleToRotate:number;
    private _speed:number;
    private _maxSpeed:number;
    private _minSpeed:number;

    private _img:any;

    private _numbers:Array<number>;

    private _isSpin:boolean;

    private  _temp:number;

    constructor(src:string) {
        this._fps = 60;
        this._interval = 1000/this._fps;
        this._canvas = document.getElementById('canvas');
        this._context = this._canvas.getContext('2d');
        this._endInterval = Date.now();
        this._dt = 0;

        this._counter = 0;
        this._angleToRotate = 0;
        this._speed = 1;
        this._maxSpeed = 5;
        this._minSpeed = 0.3;

        this._img = new Image();
        this._img.src = src;

        this._numbers = [
                        0, 32, 15, 19, 4, 21,
                        2, 25, 17, 34, 6, 27,
                        13, 36, 11, 30, 8, 23,
                        10, 5, 24, 16, 33, 1,
                        20, 14, 31, 9, 22, 18,
                        29, 7, 28, 12, 35, 3, 26];

        this._isSpin = false;

        this._temp = 0;

        this._context.globalCompositeOperation = 'destination-over';

        var self = this;
        window.requestAnimationFrame(function(){self.draw()});
    }

    private draw ():void {
        var self = this;
        window.requestAnimationFrame(function(){self.draw()});

        this._startInterval = Date.now();
        this._deltaInterval = this._startInterval - this._endInterval;

        if (this._deltaInterval > this._interval) {

            this._context.clearRect(0,0,this._canvas.width, this._canvas.height);

            this._context.fillStyle="#A3AA63";
            this._context.beginPath();
            this._context.moveTo(this._canvas.width/2 - 12,0);
            this._context.lineTo(this._canvas.width/2 + 12,0);
            this._context.lineTo(this._canvas.width/2, 30);
            this._context.fill();

            this._context.save();
            this._context.translate(this._canvas.width/2, this._canvas.height/2);
            this._context.rotate(this._counter * Math.PI / 180);
            this._context.drawImage(this._img, -this._canvas.width/2, -this._canvas.height/2);
            this._context.restore();

            if (this._angleToRotate > 0){
                this._dt++;
                this.updateSpeed();
                this._counter -= this._speed;
                this._angleToRotate -= this._speed;
                this._isSpin = true;
            }
            else {
                this._angleToRotate = 0;
                this._isSpin = false;
            }

            this._endInterval = this._startInterval - (this._deltaInterval % this._interval);


        }
    };

    private updateSpeed():void {
        if (this._angleToRotate<=360)
            if(this._speed>this._minSpeed)
                this._speed -= .035;
    }

    public spin(number):void {
        const step:number = 360/this._numbers.length;
        const index:number = this._numbers.indexOf(number);

        if (index == -1) return;

        const dirtySpinValue:number = (Math.random() * 3 + 2 | 0) * 360;

        this._angleToRotate = (this._counter<0 ? this._counter%360 + 360 : this._counter%360) + index * step + dirtySpinValue;

        this._temp = this._angleToRotate;

        this._speed = this._maxSpeed;

        this._dt = 0;
    }

    public isSpinNow():boolean {
        return this._isSpin;
    }
}

export = Spinner;