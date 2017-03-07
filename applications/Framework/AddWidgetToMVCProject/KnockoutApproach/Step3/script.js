//highlight
var viewModel = {
    randomValue: ko.observable("0000000000"),
    clickHandler: function () {
        var result = "";
        for (var i = 0; i < 10; i++)
            result += Math.round(Math.random() * 9);
        this.randomValue(result);
    }
}
//highlight
window.onload = function () {
    ko.applyBindings(viewModel);
}
