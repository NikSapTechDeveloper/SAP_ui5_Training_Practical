sap.ui.define(['sap/ui/core/mvc/Controller',
    'modelOutsideController/model/model'],
    function(oController,Model){
        return oController.extend('modelOutsideController.controller.Main',{
            onInit:function(){
                let oModel = Model.createJSONModel();
                
                sap.ui.getCore().setModel(oModel);
                this.getView().byId("salary").bindValue("/empData/salary"); 
                this.getView().byId("MarStatus").bindProperty("value", "/empData/marriageStatus"); 
            },
            onBeforeRendering:function(){
            //You can add any event you want to trigger just before the view render
            }
        })
    }
)