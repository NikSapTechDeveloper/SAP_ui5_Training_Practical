sap.ui.define(['sap/ui/core/mvc/Controller',
    'fiori/comp/syz/fa/util/lifeSaver'
],
    function(oController,lifeSaver){
        return oController.extend('fiori.comp.syz.fa.controller.BaseController',{
            //write reusable function code
            formatter:lifeSaver 
        })
    }
)