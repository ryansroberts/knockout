/// <reference path="../utils.js" />

ko.templateEngine = function () {
    this.renderTemplate = function (templateName, data, options) {
        throw "Override renderTemplate in your ko.templateEngine subclass";
    },
    this.isTemplateRewritten = function (templateName) {
        throw "Override isTemplateRewritten in your ko.templateEngine subclass";
    },
    this.rewriteTemplate = function (templateName, rewriterCallback) {
        throw "Override rewriteTemplate in your ko.templateEngine subclass";
    },
    this.createJavaScriptEvaluatorBlock = function (script) {
        throw "Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass";
    }
};