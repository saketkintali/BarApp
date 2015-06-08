/**
 * Created by saketmohan on 6/6/15.
 */

(function(angular) {

    var app = angular.module('barApp',[]);

    app.controller('BarCtrl', barController);

    function barController() {

        var bc = this;

        bc.stocks = [
        {
            "ingredient": "Vodka",
            "qty": 750,
            "measurement": "ML"
        },
        {
            "ingredient": "Sweet Vermouth",
            "qty": 750,
            "measurement": "ML"
        },
        {
            "ingredient": "Agave Nector",
            "qty": 24,
            "measurement": "oz"
        },
        {
            "ingredient": "Cherries",
            "qty": 9,
            "measurement": ""
        },
            {
                "ingredient": "Gin",
                "qty": 1.5,
                "measurement": "L"
            },
            {
                "ingredient": "Dry Vermouth",
                "qty": 750,
                "measurement": "ML"
            },
            {
                "ingredient": "Orange Juice",
                "qty": 48,
                "measurement": "oz"
            },
            {
                "ingredient": "Celery Stalks",
                "qty": 16,
                "measurement": ""
            },
            {
                "ingredient": "Tequila",
                "qty": 750,
                "measurement": "ML"
            },
            {
                "ingredient": "Bloody Mary Mix",
                "qty": 2,
                "measurement": "L"
            },
            {
                "ingredient": "Limes",
                "qty": 36,
                "measurement": ""
            },
            {
                "ingredient": "Olives",
                "qty": 24,
                "measurement": ""
            },
            {
                "ingredient": "Whiskey",
                "qty": 750,
                "measurement": "ML"
            }

        ];


    }

    app.controller('NameCtrl', NameControl);

    function NameControl() {

        var hc = this;
        hc.name = "Bartender Problem";
    }

    app.controller('HomeCtrl', HomeControl);

    function HomeControl() {

        var mctrl = this;
        mctrl.count = 0;
        mctrl.count1 = 0;
        mctrl.count2 = 0;
        mctrl.count3 = 0;
        mctrl.count4 = 0;
        mctrl.maxcount = 20;

        mctrl.add = function() {
                mctrl.count++;

        }
        mctrl.minus = function() {
           if(mctrl.count>0)
            mctrl.count--;

        }
        mctrl.add1 = function() {
            mctrl.count1++;

        }
        mctrl.minus1 = function() {
            if(mctrl.count1>0)
                mctrl.count1--;

        }
        mctrl.add2 = function() {
            mctrl.count2++;

        }
        mctrl.minus2 = function() {
            if(mctrl.count2>0)
                mctrl.count2--;

        }
        mctrl.add3 = function() {
            mctrl.count3++;

        }
        mctrl.minus3 = function() {
            if(mctrl.count3>0)
                mctrl.count3--;

        }
        mctrl.add4 = function() {
            mctrl.count4++;

        }
        mctrl.minus4 = function() {
            if(mctrl.count4>0)
                mctrl.count4--;

        }
    }

})(angular);