sap.ui.define(['fiori/comp/syz/fa/controller/BaseController','sap/m/MessageBox','sap/m/MessageToast','sap/ui/core/Fragment','sap/ui/model/Filter','sap/ui/model/FilterOperator'],
    function(oBaseController, MessageBox,MessageToast,Fragment,Filter,FilterOperator){
        return oBaseController.extend('fiori.comp.syz.fa.controller.view2',{
            onInit: function(){
             this.oRouter = this.getOwnerComponent().getRouter();
             this.oRouter.getRoute("view2").attachMatched(this.herculis , this);
            },
            herculis:function(oEvent){
          
            // let ofruitName = oEvent.getParameter("arguments").fruitName;
            
             let ofruitId = oEvent.getParameter("arguments").fruitId;
             var sPath = "/" + ofruitId;
             this.getView().bindElement(sPath,{
              expand : "To_Supplier"
             });
            },
            goBack:function(){
                this.getView().getParent().to("idView1");
            },
            onSave : function(){
               let oRes = this.getView().getModel("i18n");
               let obundle = oRes.getResourceBundle();
               let message = obundle.getText("XMESSAGE");


              MessageBox.confirm("Do you want to save",{
                tittle:'confirmation',
                onClose:function(status){
                  if(status === "OK"){
                     MessageToast.show(message);
                  }else{
                     MessageToast.show("Oops, Not saved!");
                  }
                }
              })                                                                    
            },
            oPopupSupplier:null,
            oPopupCity:null,
            oField:null,
            onFilter : function(){
              let that =this;
              if(!this.oPopupSupplier){
                Fragment.load({
                name:'fiori.comp.syz.fa.fragment.popup',
                controller:this
              }).then(function(oFragment){
                  that.oPopupSupplier = oFragment;
                  that.oPopupSupplier.setTitle("Supplier");
                  that.getView().addDependent(that.oPopupSupplier)
                  that.oPopupSupplier.bindAggregation("items",{
                    path :'/ProductSet',
                    template : new sap.m.ObjectListItem({
                      title : '{NAME}'
                    })
                  }); 
                  
                  that.oPopupSupplier.open();
                  that.oPopupSupplier.setMultiSelect(true);
              });
              }else{
                this.oPopupSupplier.open();
              }
              // MessageBox.show("This site is under construction");
            },

            onRemoveFilter:function(){
               this.getView().byId("idTable").getBinding("items").filter([]);
            },
            onF4help: function(oEvent){
              this.oField = oEvent.getSource(); 
              let that =this;
              if(!this.oPopupCity){
                Fragment.load({
                  id:'idOnF4Help',
                name:'fiori.comp.syz.fa.fragment.popup',
                controller:this
              }).then(function(oFragment){
                  that.oPopupCity = oFragment;
                  that.oPopupCity.setTitle("Supplier");
                  that.getView().addDependent(that.oPopupCity)
                  that.oPopupCity.bindAggregation("items",{
                    path :'/ProductSet',
                    template : new sap.m.ObjectListItem({
                      title : '{CURRENCY_CODE}'
                    })
                  }); 

                  that.oPopupCity.open();
              });
              }else{
                this.oPopupCity.open();
              }
              // MessageBox.show("This site is under construction");

            },
            onSearchDialog:function(oEvent){
              var sVal = oEvent.getParameter("value");
               var oFilter1 = new Filter("NAME",FilterOperator.Contains, sVal);
               var oFilter2 = new Filter("CURRENCY_CODE",FilterOperator.Contains, sVal);
               var aFilter = [oFilter1,oFilter2];
               var finalFilter = new Filter({
                filters:aFilter,
                and:false
               })
               var oPopup = oEvent.getSource();
               oPopup.getBinding("items").filter(finalFilter);
            },
           onConfirmPopup :function(oEvent){
            let sId = oEvent.getSource().getId();
         
            if(sId.indexOf("idOnF4Help") != -1){
             let oSelectedItems = oEvent.getParameter("selectedItem");
            let sText = oSelectedItems.getTitle();
            this.oField.setValue(sText);
            }else{
               var aSelectedItems  = oEvent.getParameter("selectedItems");
             var arrFilter =[];
               for(let i=0;i<aSelectedItems.length;i++){
                
                   const element = aSelectedItems[i];
                    var sElemt  = element.getTitle();
                    var oFilter = new Filter("NAME",FilterOperator.EQ,sElemt);
                    arrFilter.push(oFilter);

               }
              let finalFilter = new Filter({
                filters : arrFilter,
                and : false
              });
               
               this.getView().byId("idTable").getBinding("items").filter(finalFilter);
            }
            
           },
           onItemPressSupp:function(oEvent){
              var sPath = oEvent.getParameter("listItem").getBindingContextPath();
              var sIndex = sPath.split("/")[sPath.split("/").length-1];
               this.oRouter.navTo("view3",{
                    suppId : sIndex
               });
           }
        });
    }
)