sap.ui.define(['sap/ui/core/mvc/Controller',
    'bindingMode/Models/model'],
    function(oController,Model){
        return oController.extend('bindingMode.controller.Main',{
            onInit:function(){
                let oModel = Model.createJSONModel();
                 
                //  oModel.setDefaultBindingMode("OneWay");

                // this.getView().setModel(oModel);
                sap.ui.getCore().setModel(oModel);

                this.getView().byId("salary").bindValue("/empData/salary"); 
                this.getView().byId("MarStatus").bindProperty("value", "/empData/marriageStatus"); 
            },
            onBeforeRendering:function(){

                                

            //You can add any event you want to trigger just before the view render
            },
            youChanged:function(){
            //    let oModel =  Model.createJSONModel();
               //    here this is one way we are doing but it by default for json model 2 way
            //    oModel.setProperty("/empData/empName","Nikita");
                let oModel = sap.ui.getCore().getModel();
                 oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
                //   sap.ui.getCore().setModel(oModel);
                // this.getView().byId("empName").bindValue("/empData/empName"); 

           
            //  by this , we can limit our binding mode manually,
            //  but as per gold standard not recomended to change
            }
        })
    }
)