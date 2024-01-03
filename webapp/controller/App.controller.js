sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("ui5.walkthrough.App", {
      onInit: function () {
        // set the data model on the view
        const oData = {
          recipient: {
            name: "UI5",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        // set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // Show message
        MessageToast.show(sMsg);
      },
    });
  }
);
