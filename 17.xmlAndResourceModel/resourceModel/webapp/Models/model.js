sap.ui.define([],
    function(){
        return {
            createJSONModel : function(){

                let oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("Models/modelData.json");

                return oModel;
            },
            createXMLModel : function(){

            },
            createResourceModel:function(){
                let oModel = new sap.ui.model.resource.ResourceModel({
                    bundleUrl:'i18n/i18n.properties'
                });
                return oModel;
            }
        }
    }
);