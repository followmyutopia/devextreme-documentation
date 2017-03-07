MyApp.log = function (params) {
    function getTime() {
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    };

    function log(state) {
        viewModel.log(viewModel.log() + getTime() + " the view is " + state + "\n");
    };

    function viewRendered() {
        log("rendered");
    }

    function viewShowing() {
        log("being shown");
    };

    function viewShown() {
        log("shown");
    };

    function viewHidden() {
        log("hidden");
    };

    var viewModel = {
        log: ko.observable(''),
        //highlight
        viewRendered: viewRendered,
        viewShowing: viewShowing,
        viewShown: viewShown,
        viewHidden: viewHidden
        //highlight
    };

    return viewModel;
};
