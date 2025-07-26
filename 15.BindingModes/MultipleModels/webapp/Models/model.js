sap.ui.define(['sap/ui/model/json/JSONModel'],
    function(JSONModel){
        return {
            createJSONModel : function(filePath){

                let oModel = new JSONModel();
                oModel.loadData(filePath);

                return oModel;
            },
            createXMLModel : function(){

            }
        }
    }
);