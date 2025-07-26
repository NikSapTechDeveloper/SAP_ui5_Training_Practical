sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(oController){
        return oController.extend('modelIntoController',{
            onInit:function(){

            //Setting model inside controller 
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    "empData":{
                        "empName":"John",
                        "empId":964723,
                        "salary":"10,000",
                        "smoker":false,
                        "marriageStatus":"Single"

                    }
                })
                sap.ui.getCore().setModel(oModel);
                this.getView().byId("salary").bindValue("/empData/salary"); //binding type 3
                this.getView().byId("MarStatus").bindProperty("value", "/empData/marriageStatus"); //binding type 4
            },
            onBeforeRendering:function(){
            //You can add any event you want to trigger just before the view render
            }
        })
    }
)