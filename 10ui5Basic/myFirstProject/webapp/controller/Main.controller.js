sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(oController){
        return oController.extend("miky.controller.Main",{
         
            doExercise:function(){
                // var oApp = sap.ui.getCore();
                var oApp = this.getView();
                var oData = oApp.byId("input1");
                var val = oData.getValue();
                alert(val);
            },

         //first xml view usage
         practiceXML:function(){
            alert("Helloo xml");
         },
         
            callMe:function(){
            // alert("welcome Your controller class working properly");

            //This is i am going to do for practice of set text run time
           var oApp = sap.ui.getCore();
            var oBtn = oApp.byId("idSpider");
           oBtn.setText("I am changed now!");

         }
        
       })
    }
)