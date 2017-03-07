displayValueFields = ["name", "capital", "population", "area"];
displayExprValue = ko.observable(displayValueFields[0]);
valueFields = ["this", "name", "capital", "population", "area"];
valueExprValue = ko.observable(valueFields[0]);
value = ko.observable("");
selectedValueCaption = ko.observable(valueExprValue() === "this" ? "Object": valueExprValue());

nameVar = ko.observable("none");
capitalVar = ko.observable("none");
populationVar = ko.observable(0);
areaVar = ko.observable(0);

simpleDisplay = ko.observable("none");
objectDisplay = ko.observable("block");

valueExprValue.subscribe(function (newValue) {
    selectedValueCaption(valueExprValue() === "this" ? "Object" : valueExprValue());
    if (newValue === "this") {
        simpleDisplay("none");
        objectDisplay("block");
        return;
    }
    simpleDisplay("block");
    objectDisplay("none");
});

value.subscribe(function(newValue){
    nameVar(newValue.name);
    capitalVar(newValue.capital);
    populationVar(newValue.population);
    areaVar(newValue.area);
})

//An object passed to the dataSource configuration option of the lookup
lookupData = new DevExpress.data.DataSource([]);

//Loads json data and passes it to the DataSource
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupData.store().insert(data[i]);
    }
    lookupData.load();
}, "json");