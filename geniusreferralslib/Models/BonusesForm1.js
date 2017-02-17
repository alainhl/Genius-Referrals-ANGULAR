/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of BonusesForm1
 *
 * @constructor
 */
angular.module('GeniusReferralsLib')
    .factory('BonusesForm1', ['BaseModel', 'Bonuses1',
        function (BaseModel, Bonuses1) {
            var BonusesForm1 = function (obj) {
                if (!obj) {
                    this.bonus = null;
                } else {
                    this.bonus = new Bonuses1(obj.bonus);
                }
            }
    
            BonusesForm1.prototype = new BaseModel();
            BonusesForm1.prototype.constructor = BonusesForm1;
        
            /**
             * The bonuses' wrapper
             *
             * @return {Bonuses1}
             */
            BonusesForm1.prototype.getBonus = function () {
                return this.bonus;
            };
        
            /**
             * Setter for Bonus
             * 
             * @param {Bonuses1} value 
             */
            BonusesForm1.prototype.setBonus = function (value) {
                this.bonus = value;
            };
        
            return BonusesForm1;
        }
    ]);

}(angular));