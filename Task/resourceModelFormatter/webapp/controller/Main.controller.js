sap.ui.define(['sap/ui/core/mvc/Controller',
    'task/Models/model'],
    function(oController,Model){
        return oController.extend('task.controller.Main',{
            onInit:function(){
                 var oResource = Model.createResourceModel();
                 sap.ui.getCore().setModel(oResource);
            },
            onBeforeRendering:function(){
            //You can add any event you want to trigger just before the view render
            },
            
            onChange : function(){
            
                let sItem = this.getView().byId("idSelectLanguage").getSelectedKey();
                 sap.ui.getCore().getConfiguration().setLanguage(sItem);

            },

            changeLanguage : function(){
                let oRes1 = sap.ui.getCore().getModel();
                if(!oRes1){
                 return "Hello";

                }else{
                   let output = oRes1.getProperty("XTXT_TESTING");
                return output;
                }
                
            },
            onClick:function(){
             let oRes1 = sap.ui.getCore().getModel();
            let output = oRes1.getProperty("XTOAST_SHOW");


            sap.m.MessageToast.show(output);

            }

        })
    }
)
