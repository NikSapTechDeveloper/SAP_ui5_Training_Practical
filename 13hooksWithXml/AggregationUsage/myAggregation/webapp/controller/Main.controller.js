sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(oController){
        return oController.extend('aggregation.controller.Main',{
            callMe:function(){
                alert("Hello motu");
            }
        }
            
        )
    }
)