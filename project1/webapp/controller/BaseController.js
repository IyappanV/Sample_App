sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Element",
        "sap/m/Button",
        "sap/ui/core/Fragment",
        "sap/m/Dialog",
        "sap/m/library",
    ],
    function (Controller, History, JSONModel, Element, Button, Fragment, Dialog, mobileLibrary) {
        "use strict";

        // shortcut for sap.m.ButtonType
        var ButtonType = mobileLibrary.ButtonType;

        // shortcut for sap.m.DialogType
        var DialogType = mobileLibrary.DialogType;

        return Controller.extend("com.project1.controller.BaseController", {
            onInit: function () {
                //
            },
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            getEventBus: function () {
                return this.getOwnerComponent().getEventBus();
            },
            getResourceBundle: function (text) {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(text);
            },
            showLoading: function (status) {
                this.getView().setBusy(status);
            },
            getModel: function (sName) {
                return this.getView().getModel(sName);
            },
            setModel: function (oModel, sName) {
                return this.getView().setModel(oModel, sName);
            },
            getId: function (id) {
                return this.getView().byId(id);
            },
            setState: function (id, state) {
                return this.getView().byId(id).setValueState(state);
            },
            setStateText: function (id, text) {
                return this.getView().byId(id).setValueStateText(text);
            },
            encode: function (value) {
                return btoa(value);
            },
            decode: function (value) {
                return atob(value);
            },
            setStorage: function (name, sContext) {
                jQuery.sap.require("jquery.sap.storage");
                var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
                oStorage.put(name, sContext);
            },
            setLocalStorage(name, data) {
                localStorage.setItem(name, JSON.stringify(data));
            },
            getStorage: function (name) {
                jQuery.sap.require("jquery.sap.storage");
                var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
                return oStorage.get(name);
            },

        }
        );
    }
);
