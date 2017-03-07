visible = ko.observable(false);
showTitle = ko.observable(true);
title = "My Popover";
target = ko.observable("#button");
togglePopover = function () {
    this.visible(!this.visible());
};