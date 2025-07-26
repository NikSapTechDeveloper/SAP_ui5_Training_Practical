sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(oController){
        return oController.extend('exercise.controller.Main',{
            callMe:function(){
                alert("Hello motu");
            },

            //Setting default value every time just before view render
            onBeforeRendering:function(){
              this.getView().byId("empId").setValue("2346");
              this.getView().byId("empName").setValue("John");
              this.getView().byId("salary").setValue("20,000");
              this.getView().byId("chkbox").setSelected(true);
            }
        }
            
        )
    }
)