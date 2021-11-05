sap.ui.define([
    "sap/ui/core/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        onInit: function() {
            var oViewModel = new JSONModel({
                currency: "COP"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});