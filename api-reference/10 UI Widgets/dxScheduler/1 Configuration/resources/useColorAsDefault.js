var owners = [
    { id: 1, text: "Samantha Bright", color: "orange" },
    { id: 2, text: "John Heart", color: "green" },
    { id: 3, text: "Todd Hoffman", color: "maroon" }
];
 
var priorities = [
    { id: 1, text: "Low Priority", color: "lightblue" },
    { id: 2, text: "High Priority", color: "red" }
];
 
var appointments = [{
    text: "Google AdWords Strategy",
    ownerId: [2], priority: 1,
    startDate: new Date(2016, 1, 1, 9, 0),
    endDate: new Date(2016, 1, 1, 10, 30)
}, {
    text: "New Brochures",
    ownerId: [1], priority: 2,
    startDate: new Date(2016, 1, 1, 11, 30),
    endDate: new Date(2016, 1, 1, 14, 15)
}, {
    text: "Brochure Design Review",
    ownerId: [2], priority: 1,
    startDate: new Date(2016, 1, 3, 13, 15),
    endDate: new Date(2016, 1, 3, 16, 15)
}, {
    text: "Website Re-Design Plan",
    ownerId: [3], priority: 2,
    startDate: new Date(2016, 1, 3, 16, 45),
    endDate: new Date(2016, 1, 4, 11, 15)
}, {
    text: "Rollout of New Website and Marketing Brochures",
    ownerId: [3], priority: 2,
    startDate: new Date(2016, 1, 2, 8, 15),
    endDate: new Date(2016, 1, 2, 10, 45)
}, {
    text: "Update Sales Strategy Documents",
    ownerId: [2], priority: 1,
    startDate: new Date(2016, 1, 2, 12, 0),
    endDate: new Date(2016, 1, 2, 13, 45)
}];
 
$(function() {
    var scheduler = $("#schedulerContainer").dxScheduler({
        dataSource: appointments,
        views: ["timelineMonth"],
        currentView: "timelineMonth",
        currentDate: new Date(2016, 1, 1),
        resources: [{
            dataSource: owners,
            fieldExpr: "ownerId",
            allowMultiple: true,
            label: "Owner"
        }, { 
            dataSource: priorities,
            fieldExpr: "priority",
            allowMultiple: false,
            label: "Priority"
        }],
        height: 300
    }).dxScheduler("instance");
    
    $("#switchContainer").dxSwitch({
        onText: "Owners",
        offText: "Priorities",
        width: 80,
        value: false,
        onValueChanged: function(e) {
            scheduler.option("resources[0].useColorAsDefault", e.value);
            scheduler.repaint();
        }
    });
});