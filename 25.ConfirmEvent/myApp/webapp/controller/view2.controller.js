sap.ui.define(['fiori/comp/syz/fa/controller/BaseController','sap/m/MessageBox','sap/m/MessageToast','sap/ui/core/Fragment'],
    function(oBaseController, MessageBox,MessageToast,Fragment){
        return oBaseController.extend('fiori.comp.syz.fa.controller.view2',{
            onInit: function(){
             
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
                    path :'/fruitData',
                    template : new sap.m.ObjectListItem({
                      title : '{empName}'
                    })
                  }); 

                  that.oPopupSupplier.open();
              });
              }else{
                this.oPopupSupplier.open();
              }
              // MessageBox.show("This site is under construction");
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
                    path :'/fruitData',
                    template : new sap.m.ObjectListItem({
                      title : '{city}'
                    })
                  }); 

                  that.oPopupCity.open();
              });
              }else{
                this.oPopupCity.open();
              }
              // MessageBox.show("This site is under construction");

            },
           onConfirmPopup :function(oEvent){
            // let sId = oEvent.getSource().getId();
            let oSelectedItems = oEvent.getParameter("selectedItem");
            let sText = oSelectedItems.getTitle();
            this.oField.setValue(sText);
            // if(sId.indexOf("fruitData") != -1){
            //  let oSelectedItems = oEvent.getParameter("selectedItem");
            // let sText = oSelectedItems.getTitle();
            // this.oField.setValue(sText);
            // }else{

            // }
            
           }
        });
    }
)