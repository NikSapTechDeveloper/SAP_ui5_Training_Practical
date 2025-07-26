sap.ui.define(['fiori/comp/syz/fa/controller/BaseController'],
    function(oBaseController){
        return oBaseController.extend('fiori.comp.syz.fa.controller.view2',{
            onInit: function(){

            },
            goBack:function(){
                this.getView().getParent().to("idView1");
            }
        });
    }
)