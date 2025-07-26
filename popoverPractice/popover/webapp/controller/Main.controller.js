sap.ui.define([
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
], function (MessageToast, Fragment, Controller) {
    "use strict";

    return Controller.extend("task.controller.Main", {

        onInit: function () {

        },

        // onPress: function (oEvent) {
        //     var oButton = oEvent.getSource(),
        //         oView = this.getView();

        //     // create popover
        //     if (!this._pPopover) {
        //         this._pPopover = Fragment.load({
        //             name: "task.fragment.popover",
        //         }).then(function (oPopover) {
        //             oView.addDependent(oPopover);
        //             return oPopover;
        //         });
        //     }
        //     this._pPopover.then(function (oPopover) {
        //         oPopover.openBy(oButton);
        //     });
        // },
        oPopover: null,
        onPress: function (oEvent) {
            var oButton = oEvent.getSource();
            let that = this;
            if (!this.oPopover) {
                Fragment.load({
                    name: 'task.fragment.popover',
                    controller: this
                }).then(function (oFragment) {
                    that.oPopover = oFragment;
                    that.getView().addDependent(that.oPopover)
                    that.oPopover.openBy(oButton);
                });
            } else {
                this.oPopover.openBy(oButton);
            }
        },
        onEmailPress:function(){
            MessageToast.show("E-mail sent");
        }
        // handleResizablePopoverPress: function (oEvent) {
        // 	var oButton = oEvent.getSource(),
        // 		oView = this.getView()openBy;

        // 	// create popover
        // 	if (!this._pResizablePopover) {
        // 		this._pResizablePopover = Fragment.load({
        // 			id: oView.getId(),
        // 			name: "sap.m.sample.Popover.view.ResizablePopover",
        // 			controller: this
        // 		}).then(function(oPopover) {
        // 			oView.addDependent(oPopover);
        // 			oPopover.bindElement("/ProductCollection/0");
        // 			return oPopover;
        // 		});
        // 	}
        // 	this._pResizablePopover.then(function(oPopover) {
        // 		oPopover.openBy(oButton);
        // 	});
        // },

    });
});