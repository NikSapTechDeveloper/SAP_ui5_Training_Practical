sap.ui.define([],
    function(){
        return {
            createJSONModel : function(){

                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    "empData":{
                        "empName":"John",
                        "empId":964723,
                        "salary":"10,000",
                        "smoker":false,
                        "marriageStatus":"Single"

                    }
                });

                return oModel;
            },
            createXMLModel : function(){

            }
        }
    }
);