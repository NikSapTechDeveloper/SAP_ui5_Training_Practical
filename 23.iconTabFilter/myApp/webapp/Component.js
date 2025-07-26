sap.ui.define(['sap/ui/core/UIComponent'],
  function (UIComponent) {

    "use strict";
    return UIComponent.extend('fiori.comp.syz.fa.Component', {
      
      metadata: {
        manifest: 'json'
      },
      init: function () {

        //Calling base class(UIComponent) constructor 
        UIComponent.prototype.init.apply(this);
      },
      createContent: function () {
        let oView = new sap.ui.view("idRootView", {
          viewName: "fiori.comp.syz.fa.view.App",
          type: "XML"
        })
        let oView1 = new sap.ui.view("idView1", {
          viewName: "fiori.comp.syz.fa.view.view1",
          type: "XML"
        })
        let oView2 = new sap.ui.view("idView2", {
          viewName: "fiori.comp.syz.fa.view.view2",
          type: "XML"
        })
        var oAppCon = oView.byId("idApp");
        oAppCon.addMasterPage(oView1).addDetailPage(oView2);

        return oView;
      },
      destroy: function () {

      }

    })
  }
)