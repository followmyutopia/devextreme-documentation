var store = new DevExpress.data.ArrayStore({
    key: "Id",
    data: [],

    //note: If you uncomment all lines the page would contain too many toastr instances on each event.
    //Maybe we should rethink it.

    //modifying: function() { notify("Modifying fired"); },
    modified: function() { notify("Modified fired"); },

    loading: function() { notify("Loading fired"); },
    loaded: function() { notify("Loaded fired"); },

    //inserting: function() { notify("Inserting fired"); },
    inserted: function() { notify("Inserted fired"); },

    //updating: function() { notify("Updating fired"); },
    updated: function() { notify("Updated fired"); },

    //removing: function() { notify("Removing fired"); },
    removed: function() { notify("Removed fired"); }
});
//or
//store.on("modifying", function() { ... });
//or
//dataSource.store().on("modifying", function() { ... });

var dataSource = new DevExpress.data.DataSource({
    store: store,
    pageSize: 5
});

function notify(message) {
    toastr.info(message);
}

store.on("modified", function() {
    dataSource.load();
});
dataSource.on("changed", function() {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});

$(function() {
    toastr.options = {
        timeOut: 2000,
        showDuration: 300,
        hideDuration: 300,
        newestOnTop: true,
        positionClass: "toast-bottom-right"
    };

    $("#button1").click(function() {
        if(dataSource.items().length < 1) {
            var values = EMPLOYEES.shift();
            if(values)
                store.insert(values);
        }
    });
    $("#button2").click(function() {
        var first = dataSource.items()[0];
        if(first)
            store.update(first.Id, { FirstName: "Fenton", LastName: "Crackshell" });
    });
    $("#button3").click(function() {
        var first = dataSource.items()[0];
        if(first)
            store.remove(first.Id);
    });

    dataSource.load();
});