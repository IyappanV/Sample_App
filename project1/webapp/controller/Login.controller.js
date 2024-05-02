sap.ui.define([
    "com/project1/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    'sap/m/MessageBox'
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("com.project1.controller.Login", {
            onInit: function () {
                this.oOwnerComponent = this.getOwnerComponent();

                this.oRouter = this.oOwnerComponent.getRouter();
                this.oModel = this.oOwnerComponent.getModel();
                this.oRouter.getRoute("login");
            }
        });
    });
