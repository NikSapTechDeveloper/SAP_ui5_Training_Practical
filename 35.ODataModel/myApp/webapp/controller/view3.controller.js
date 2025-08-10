sap.ui.define(['fiori/comp/syz/fa/controller/BaseController','sap/ui/core/routing/History'],
    function(oBaseController,History){
       return oBaseController.extend('fiori.comp.syz.fa.controller.view3',{
         onInit:function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("view3").attachMatched(this.herculis,this);

         },
         herculis:function(oEvent){
         
            var sSuppId = oEvent.getParameter("arguments").suppId;
            var sPath = "/fruitData/" + sSuppId;
            this.getView().bindElement(sPath);
         },
         onBackHistoryNav:function(){
            var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true /*no history*/);
			}
         }

       })
    }
)