sap.ui.define([],
    function(){
        return {
            createJSONModel : function(){

                let oModel = new sap.ui.model.json.JSONModel();
             //  oModel.setDefaultBindingMode(BindingMode.OneWay);
                //  oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

                oModel.loadData("Models/modelData.json");

                return oModel;
            },
            createXMLModel : function(){

            }
        }
    }
);