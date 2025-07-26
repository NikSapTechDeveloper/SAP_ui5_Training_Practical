sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(oController){
        return oController.extend("hooks.controller.Main",{
            b:290,
            z:0,
            onInit:function(){ //hook 1
            // this.z=this.b+100;
            //  alert(this.b +"==>"+this.z);

            },
             onBeforeRendering:function(){ //hook 2
              this.getView().byId("empId").setValue("23456");
            },
            
            onAfterRendering: function(){//hook 3
            $("#oXmlView--empId").fadeOut(4000).fadeIn(5000);
            },
            // onExit : function(){ //hook 4
            //    this.getView().byId("btn").detachPress(this.callMe,this);
            // },
            
            callMe: function(){ //testing my app
                alert("hello");
            }
        })
    }
)