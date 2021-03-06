/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of RedemptionRequest
 *
 * @constructor
 */
angular.module('GeniusReferralsLib')
    .factory('RedemptionRequest', ['BaseModel',
        function (BaseModel) {
            var RedemptionRequest = function (obj) {
                if (!obj) {
                    this.advocateToken = null;
                    this.requestStatusSlug = null;
                    this.requestActionSlug = null;
                    this.currencyCode = null;
                    this.amount = null;
                    this.description = null;
                    this.advocatesPaypalUsername = null;
        
                    // Append to variable dictionary
                    this._variableDict['advocateToken'] = 'advocate_token';
                    this._variableDict['requestStatusSlug'] = 'request_status_slug';
                    this._variableDict['requestActionSlug'] = 'request_action_slug';
                    this._variableDict['currencyCode'] = 'currency_code';
                    this._variableDict['advocatesPaypalUsername'] = 'advocates_paypal_username';
                } else {
                    this.advocateToken = obj.advocate_token;
                    this.requestStatusSlug = obj.request_status_slug;
                    this.requestActionSlug = obj.request_action_slug;
                    this.currencyCode = obj.currency_code;
                    this.amount = obj.amount;
                    this.description = obj.description;
                    this.advocatesPaypalUsername = obj.advocates_paypal_username;
            
                    // Append to variable dictionary
                    this._variableDict['advocateToken'] = 'advocate_token';
                    this._variableDict['requestStatusSlug'] = 'request_status_slug';
                    this._variableDict['requestActionSlug'] = 'request_action_slug';
                    this._variableDict['currencyCode'] = 'currency_code';
                    this._variableDict['advocatesPaypalUsername'] = 'advocates_paypal_username';
                }
            }
    
            RedemptionRequest.prototype = new BaseModel();
            RedemptionRequest.prototype.constructor = RedemptionRequest;
        
            /**
             * The advocate's token
             *
             * @return {string}
             */
            RedemptionRequest.prototype.getAdvocateToken = function () {
                return this.advocateToken;
            };
        
            /**
             * Setter for AdvocateToken
             * 
             * @param {string} value 
             */
            RedemptionRequest.prototype.setAdvocateToken = function (value) {
                this.advocateToken = value;
            };
        
            /**
             * The request status identifier
             *
             * @return {string}
             */
            RedemptionRequest.prototype.getRequestStatusSlug = function () {
                return this.requestStatusSlug;
            };
        
            /**
             * Setter for RequestStatusSlug
             * 
             * @param {string} value 
             */
            RedemptionRequest.prototype.setRequestStatusSlug = function (value) {
                this.requestStatusSlug = value;
            };
        
            /**
             * The request action identifier
             *
             * @return {string}
             */
            RedemptionRequest.prototype.getRequestActionSlug = function () {
                return this.requestActionSlug;
            };
        
            /**
             * Setter for RequestActionSlug
             * 
             * @param {string} value 
             */
            RedemptionRequest.prototype.setRequestActionSlug = function (value) {
                this.requestActionSlug = value;
            };
        
            /**
             * The currency code
             *
             * @return {string}
             */
            RedemptionRequest.prototype.getCurrencyCode = function () {
                return this.currencyCode;
            };
        
            /**
             * Setter for CurrencyCode
             * 
             * @param {string} value 
             */
            RedemptionRequest.prototype.setCurrencyCode = function (value) {
                this.currencyCode = value;
            };
        
            /**
             * The amount to be redeemed
             *
             * @return {int}
             */
            RedemptionRequest.prototype.getAmount = function () {
                return this.amount;
            };
        
            /**
             * Setter for Amount
             * 
             * @param {int} value 
             */
            RedemptionRequest.prototype.setAmount = function (value) {
                this.amount = value;
            };
        
            /**
             * The description of the requests, useful to store extra information about the request.
             *
             * @return {string|null}
             */
            RedemptionRequest.prototype.getDescription = function () {
                return this.description;
            };
        
            /**
             * Setter for Description
             * 
             * @param {string|null} value 
             */
            RedemptionRequest.prototype.setDescription = function (value) {
                this.description = value;
            };
        
            /**
             * The advocate's PayPal username
             *
             * @return {string|null}
             */
            RedemptionRequest.prototype.getAdvocatesPaypalUsername = function () {
                return this.advocatesPaypalUsername;
            };
        
            /**
             * Setter for AdvocatesPaypalUsername
             * 
             * @param {string|null} value 
             */
            RedemptionRequest.prototype.setAdvocatesPaypalUsername = function (value) {
                this.advocatesPaypalUsername = value;
            };
        
            return RedemptionRequest;
        }
    ]);

}(angular));
