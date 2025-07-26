sap.ui.define(['fiori/comp/syz/fa/controller/BaseController','sap/m/MessageBox','sap/m/MessageToast'],
    function(oBaseController, MessageBox,MessageToast){
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
            }
        });
    }
)