sap.ui.define(['sap/ui/core/mvc/Controller',
    'xml/resource/model/practice/Models/model'],
    function(oController,Model){
        return oController.extend('xml.resource.model.practice.controller.Main',{
            onInit:function(){
                let oXmlModel = Model.createXMLModel();
                sap.ui.getCore().setModel(oXmlModel);
            },
           
            onSelect :function(oEvent){
 // Going to do Element binding:-

            //step 1:- Address of element
            let aElement = oEvent.getParameter("rowContext").getPath();

            //step 2:- object of simple form 
            let oSimpleForm = this.getView().byId("idSimpleForm");

            //step 3:- Bind the element to the simple form
            oSimpleForm.bindElement(aElement);

            //  setTimeout(()=>{
            //  alert("I am got selected!");

            // },500)
            }
        })
    }
)