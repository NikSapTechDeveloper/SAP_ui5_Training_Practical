sap.ui.define([],
    function(){
        return {
            createXMLModel : function(){
               let oModel = new sap.ui.model.xml.XMLModel();
               oModel.loadData("Models/mockData.xml");

               return oModel;
            }
        }
    }
);