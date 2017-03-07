

DXWorkout.Log = function (params) {
    var log = ko.computed(function() {
        return DevExpress.data.query(DXWorkout.workouts())
            .sortBy(function(item) { return new Date(item.startDate); }, "desc")
            .groupBy(function(item) { return Globalize.format(new Date(item.startDate), "MMM yyyy"); })
            .toArray();
    });

    function handleItemClick(e) {
        DXWorkout.app.navigate("Results/show/" + e.itemData.id);
    };

    return {
        log: log,
        handleItemClick: handleItemClick,

        viewShowing: function(args) {
            var renderResult = args.viewInfo.renderResult;
            if(renderResult)
                renderResult.$markup.find(".dx-content > .dx-scrollable").data("dxScrollView").scrollTo(0);
        }
    };
};