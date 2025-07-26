sap.ui.define(['fiori/comp/syz/fa/controller/BaseController','sap/ui/model/Filter','sap/ui/model/FilterOperator'],
    function(oBaseController,Filter,FilterOperator){
        return oBaseController.extend('fiori.comp.syz.fa.controller.view1',{
            onInit: function(){

            },
            onNext:function(){
             let oCurrentView = this.getView();
             let oAppCon = oCurrentView.getParent();
             oAppCon.to("idView2");
            },
            onSearch:function(oEvent){
                var sQuery = oEvent.getParameter("query");
                var oFilter1 = new Filter(
                    "empName",
                    FilterOperator.Contains,
                    sQuery);
                var oFilter2 = new Filter("type",FilterOperator.Contains,sQuery);
            
                let aFilter = [oFilter1,oFilter2];

                let oFilter = new Filter({
                    filters : aFilter,
                    and:false
                })
                this.getView().byId("idList1").getBinding("items").filter(oFilter);
            },
            onTriggerDelete:function(oEvent){
                let oItemToBeDeleted = oEvent.getParameter("listItem");
                let oVar = oEvent.getSource(); 
                oVar.removeItem(oItemToBeDeleted);
            },
            onItemPress : function(oEvent){
                let oList = oEvent.getParameter("listItem").getBindingContextPath();
                let oV2 = this.getView().getParent().getParent().getDetailPage("idView2");
                oV2.bindElement(oList);
                this.onNext();
            }
        });
    }
)