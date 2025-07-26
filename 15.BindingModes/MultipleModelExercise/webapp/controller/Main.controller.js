sap.ui.define(['sap/ui/core/mvc/Controller',
    'exercise/Models/model'],
    function(oController,Model){
        return oController.extend('exercise.controller.Main',{
            onInit:function(){
                this.oModel = Model.createJSONModel("Models/modelData.json");
                this.oModel2 = Model.createJSONModel("Models/modelData_2.json");

          //No name model are default models 
          
                sap.ui.getCore().setModel(this.oModel);
                // sap.ui.getCore().setModel(oModel2,"second");
                //named model can be acces --name>-- syntax , like:- second> for model2 access
                this.getView().byId("salary").bindValue("/empData/salary"); 
                this.getView().byId("MarStatus").bindProperty("value", "/empData/marriageStatus"); 
            },
            onBeforeRendering:function(){
            //You can add any event you want to trigger just before the view render
            },
            youChanged:function(){
               let oModel = sap.ui.getCore().getModel();
               oModel.setProperty("/empData/empName","Nikita");
            
  
            },
            youChangedModel:function(){
                
                let checkModel = sap.ui.getCore().getModel();
                if(checkModel === this.oModel2){
                sap.ui.getCore().setModel(this.oModel);

                }else{
                 sap.ui.getCore().setModel(this.oModel2);

                }
                // if(checkModel === oModel){
                //     sap.ui.getCore().setModel(oModel2);
                // }else{
                //     sap.ui.getCore().setModel(oModel);

                // }
            }
        })
    }
)