actionSheetVisible = ko.observable(false);
displayAsPopover = ko.observable(false);
actionSheetData = [
    { text: "Reply", onClick: function () { processClick("Reply") } },
    { text: "ReplyAll", onClick: function () { processClick("ReplyAll") } },
    { text: "Forward", onClick: function () { processClick("Forward") } },
    { text: "Delete", onClick: function () { processClick("Delete") } }
];
processClick = function (name) {
    DevExpress.ui.notify(name + " clicked", "success", 3000);
};
showActionSheet = function () {
    displayAsPopover(false);
    actionSheetVisible(true);
};
showActionSheetAsPopover = function () {
    displayAsPopover(true);
    actionSheetVisible(true);
};