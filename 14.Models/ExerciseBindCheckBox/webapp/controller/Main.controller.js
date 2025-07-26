sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(oController){
        return oController.extend('exercise.controller.Main',{
            onInit:function(){

            //Setting model inside controller 
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    "empData":{
                        "empName":"John",
                        "empId":964723,
                        "salary":"10,000",
                        "smoker":true,
                        "marriageStatus":"Single"

                    }
                })
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