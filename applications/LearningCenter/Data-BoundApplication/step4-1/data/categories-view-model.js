
(function() {
    window.MyApp.CategoryViewModel = function(data) {
            this.CategoryID = ko.observable();
            this.CategoryName = ko.observable();
            this.Description = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(window.MyApp.CategoryViewModel.prototype, {
        toJS: function() {
            return {
                CategoryID: this.CategoryID(),
                CategoryName: this.CategoryName(),
                Description: this.Description(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.CategoryID(data.CategoryID);
                this.CategoryName(data.CategoryName);
                this.Description(data.Description);

            }
        }
    });
})();