checkBoxState = ko.observable(false);
setValueText(checkBoxState());
checkBoxState.subscribe(setValueText);
function setValueText(newValue) {
    $("#stateText").text(newValue===undefined ? "undefined": newValue);
}