sap.ui.define(['sap/ui/model/resource/ResourceModel'],
    function(ResourceModel){
        return {
            createResourceModel : function(){
                var oModel = new ResourceModel({
                    bundleUrl :'i18n/i18n.properties'
                });
                return oModel;
                
            }
        }
    }
);