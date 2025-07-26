sap.ui.define(['sap/ui/core/mvc/Controller',
    'multipleModel/Models/model'],
    function(oController,Model){
        return oController.extend('multipleModel.controller.Main',{
            onInit:function(){
                let oModel = Model.createJSONModel("Models/modelData.json");
               let oModel2 = Model.createJSONModel("Models/modelData_2.json");

          //No name model are default models 
          
                sap.ui.getCore().setModel(oModel);
                sap.ui.getCore().setModel(oModel2,"second");
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

                //On click a button setting another model practice
                 let oModel2 = Model.createJSONModel("Models/modelData_2.json");
                     sap.ui.getCore().setModel(oModel2);
              
            }
        })
    }
)