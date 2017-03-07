startDate = new Date();
endDate = new Date();
startDate.setDate(startDate.getDate() - 15);
endDate.setDate(endDate.getDate() + 15);
minDate = ko.observable(startDate);
maxDate = ko.observable(endDate);
firstDay = ko.observable(0);
popupVisible = ko.observable(false);