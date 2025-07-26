sap.ui.define(['sap/ui/core/mvc/Controller',
    'bindingType/Models/model'],
    function(oController,Model){
        return oController.extend('bindingType.controller.Main',{
            onInit:function(){
                let oModel = Model.createJSONModel();
                
                sap.ui.getCore().setModel(oModel);
                //  property binding type 3
                // this.getView().byId("salary").bindValue("/empData/salary"); 
                //  property binding type 4
                // this.getView().byId("MarStatus").bindProperty("value", "/empData/marriageStatus"); 
            },
            onBeforeRendering:function(){
            //You can add any event you want to trigger just before the view render
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