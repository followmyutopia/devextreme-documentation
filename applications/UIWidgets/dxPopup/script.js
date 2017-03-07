visible = ko.observable(false);
showTitle = ko.observable(true);
title = "My Popup";
togglePopup = function () {
    this.visible(!this.visible());
};