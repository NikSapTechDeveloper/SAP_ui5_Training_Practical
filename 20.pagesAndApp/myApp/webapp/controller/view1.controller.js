sap.ui.define(['fiori/comp/syz/fa/controller/BaseController'],
    function(oBaseController){
        return oBaseController.extend('fiori.comp.syz.fa.controller.view1',{
            onInit: function(){
//Your code
            },
            onNext:function(){
             let oCurrentView = this.getView();
             let oAppCon = oCurrentView.getParent();
             oAppCon.to("idView2");
            }
        });
    }
)