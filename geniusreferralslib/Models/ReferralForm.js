/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ReferralForm
 *
 * @constructor
 */
angular.module('GeniusReferralsLib')
    .factory('ReferralForm', ['BaseModel', 'Referral',
        function (BaseModel, Referral) {
            var ReferralForm = function (obj) {
                if (!obj) {
                    this.referral = null;
                } else {
                    this.referral = new Referral(obj.referral);
                }
            }
    
            ReferralForm.prototype = new BaseModel();
            ReferralForm.prototype.constructor = ReferralForm;
        
            /**
             * The referral's wrapper
             *
             * @return {Referral}
             */
            ReferralForm.prototype.getReferral = function () {
                return this.referral;
            };
        
            /**
             * Setter for Referral
             * 
             * @param {Referral} value 
             */
            ReferralForm.prototype.setReferral = function (value) {
                this.referral = value;
            };
        
            return ReferralForm;
        }
    ]);

}(angular));
