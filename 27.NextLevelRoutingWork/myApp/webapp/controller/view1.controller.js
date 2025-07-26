sap.ui.define(['fiori/comp/syz/fa/controller/BaseController','sap/ui/model/Filter','sap/ui/model/FilterOperator'],
    function(oBaseController,Filter,FilterOperator){
        return oBaseController.extend('fiori.comp.syz.fa.controller.view1',{
            onInit: function(){
                this.oRouter = this.getOwnerComponent().getRouter(); 
                this.oRouter.getRoute("view2").attachMatched(this.herculis , this);
 
            },
            // onNext:function(){
            //  let oCurrentView = this.getView();
            //  let oAppCon = oCurrentView.getParent();
            //  oAppCon.to("idView2");
            // },
            herculis:function(oEvent){
            
            // let ofruitName = oEvent.getParameter("arguments").fruitName;
            
            //  let ofruitId = oEvent.getParameter("arguments").fruitId;
            //  var sPath = "/fruitData/" + ofruitId;
            //   let oList = this.getView().byId("idList1");
            //   let aItems = oList.getItems();
            
            //   for(let i=0;i < aItems.length;i++){
            //      const element = aItems[i];
            //      if(element.getBindingContextPath() === sPath){
            //         var oItemObject = element;
            //         break;
            //      }
            //   }
            //   debugger;
            //   oList.setSelectedItem(oItemObject);
            // getting arguments which contains route parameters
            let oArguments = oEvent.getParameter("arguments");
            // Index of the item where the route is navigating
            let sItemIndex = oArguments.fruitId;
            // List object for manipulation
            let oList = this.getView().byId('idList1');
            // array of items in the list for getting the item in route
            let aItem = oList.getItems();
            // item with the index provided in the route
            let oItem = aItem[sItemIndex];
            // setting selection according to route navigation
            oList.setSelectedItem(oItem);
            },
            onSearch:function(oEvent){
                var sQuery = oEvent.getParameter("query");
                var oFilter1 = new Filter("empName",FilterOperator.Contains,sQuery);
                var oFilter2 = new Filter("type",FilterOperator.Contains,sQuery);
            
                let aFilter = [oFilter1,oFilter2];

                let oFilter = new Filter({
                    filters : aFilter,
                    and:false
                })
                this.getView().byId("idList1").getBinding("items").filter(oFilter);
            },
            // onTriggerDelete:function(oEvent){
            //     let oItemToBeDeleted = oEvent.getParameter("listItem");
            //     let oVar = oEvent.getSource(); 
            //     oVar.removeItem(oItemToBeDeleted);
            // }
            onItemPress : function(oEvent){
                let oList = oEvent.getParameter("listItem").getBindingContextPath();  
        
                let myId = oList.split("/")[oList.split("/").length-1];
                let sName =  oEvent.getParameter("listItem").getBindingInfo("title").binding.oValue
            

                this.oRouter.navTo("view2",{
                    fruitName : sName ,
                    fruitId : myId
                });
                
                // let oV2 = this.getView().getParent().getParent().getDetailPage("idView2");
                // oV2.bindElement(oList);
                // this.onNext();
            }
        });
    }
)