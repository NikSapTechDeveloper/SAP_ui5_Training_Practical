sap.ui.jsview("miky.view.Main", {

   getControllerName: function(){
     return "miky.controller.Main";
   },
   createContent: function(oContrlr){
      var oBtn = new sap.m.Button({
         id:"idSpider",
         text:"Click me",
         press: oContrlr.callMe
      });
      return oBtn;
   }
});