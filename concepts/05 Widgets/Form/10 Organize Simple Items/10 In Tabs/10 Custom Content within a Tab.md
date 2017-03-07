The **Form** widget allows you to specify custom templates for an individual tab and its content. For this purpose, assign callback functions to the [tabTemplate](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#tabTemplate) and [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#template) options, respectively. With [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS) and [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout), you can declare templates using a different technique described in the [Implement a Custom Template](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/#Implement_a_Custom_Template) topic.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                birthDate: new Date(1964, 03, 15),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Data Protection Policy",
                    tabTemplate: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p style='color: red'>" + itemData.title );
                    },
                    template: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p><i>By filling out this form," 
                                            + " you agree to the terms of the" 
                                            + "<a href='#'>Data Protection Policy</a>");
                    }
                }, {
                    title: "Info",
                    items: ["position", "birthDate", "city"]
                }, {
                    title: "Contacts",
                    items: [ "phone", "email"]
                }]
            }]
        });
    });