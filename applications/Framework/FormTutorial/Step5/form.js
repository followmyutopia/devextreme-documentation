$(function() {
<!--//highlight-->
    var form = $('#formContainer').dxForm({
<!--//highlight-->
        formData: employees[0],
        items:  [
            {
                itemType: "group",
                caption: "Personal",
                items: [
                    {
                        dataField: "ID",
                        editorOptions: { readOnly: true }
                    },
                    { itemType: "empty" },
                    "First_Name",
                    "Last_Name",
                    {
                        dataField: "Full_Name",
                        helpText: "This value is composite from first and last name",
                        editorOptions: { readOnly: true }
                    },
                    { itemType: "empty" },
                    {
                        dataField: "Prefix",
                        editorType: "dxSelectBox",
                        editorOptions: { dataSource: ["Ms.", "Mr.", "Mrs.", "Miss", "Dr."] }
                    },
                    {
                        dataField: "Status",
                        editorType: "dxSelectBox",
                        editorOptions: { dataSource: ["Salaried", "Commission", "Terminated"] }
                    },
                    { itemType: "empty" },
                    {
                    	dataField: "Birth_Date",
                        editorType: 'dxDateBox',
                        editorOptions: { width: 150 }
                    },
                    {
                    	dataField: "Hire_Date",
                        editorType: 'dxDateBox',
                        editorOptions: { width: 150 }
                    }
                ]
            },
<!--//highlight-->
            {
                itemType: "tabbed",
                tabs: [
                    {
                        title: "Address",
                        items: [
                            {
                                dataField: "City",
                                editorType: "dxSelectBox",
                                editorOptions: { dataSource: [ "Los Angeles", "Pasadena", "Glendale" ] }
                            },
                            "Address"
                        ]
                    },
                    {
                        title: "Contact Information",
                        items: ["Zipcode", "Email", "Skype"]
                    },
                    {
                        title: "Phones",
                        items: ["Mobile_Phone", "Home_Phone"]
                    },
                    {
                        title: "Profile",
                        template: function () {
                            return $('<span>' + form.option('formData.Personal_Profile') + '</span>');
                        }
                    }
                ]
            }
<!--//highlight-->
        ],
        onFieldDataChanged: function(e) {
            var fullName = e.component.option("formData.Full_Name").split(" ");

            switch (e.dataField) {
                case "First_Name":
                    fullName[0] = e.value;
                    e.component.updateData("Full_Name", fullName.join(" "));
                    break;
                case "Last_Name":
                    fullName[1] = e.value;
                    e.component.updateData("Full_Name", fullName.join(" "));
                    break;
            }
        }
<!--//highlight-->
    }).dxForm('instance');
<!--//highlight-->
});
