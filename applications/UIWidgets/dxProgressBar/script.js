clickCount = ko.observable(0);
buttonText = ko.observable('Make 20 clicks');
updateProgress = function () {
    clickCount(clickCount() + 1);
    if (clickCount() < 20) {
        buttonText("Make " + (20 - clickCount()) + " clicks");
        return;
    }
    if (buttonText() === "Reset progress") {
        clickCount(0);
        buttonText("Make 20 clicks");
        return;
    }
    buttonText("Reset progress");
};