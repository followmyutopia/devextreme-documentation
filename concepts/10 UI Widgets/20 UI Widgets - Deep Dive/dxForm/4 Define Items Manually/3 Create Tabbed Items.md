<article>
If you need to organize items into tabbed pages, use [Tabbed](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/) form items. To create a Tabbed item, assign "tabbed" to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/#itemType) option.

You can specify configuration options of tabs using the [tabs](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/tabs/) option. This option accepts an array of tab configuration objects.

Each tab of a tabbed form item can have its own layout, which does not depend on the form layout. Thus, even if a tabbed item spans three columns, the layout of each tab may consist of any number of columns. For example, two or five. The number of columns in a tab layout is defined by the [colCount](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/tabs/#colCount) option of a tab. A tab title is specified using the [title](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/tabs/#title) option.

A tab can contain items of any type including group and tabbed items, which may also contain nested groups or tabbed pages. The child items of a tab are specified using the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/tabs/#items) option.

    <!--JavaScript-->
    var formOptions: {
        formData: employeeData,
        colCount: 3,
        items: [
            'FirstName',
            'LastName',
            {
                itemType: 'tabbed',
                tabs: [
                    {
                        title: 'Info',
                        colCount: 2,
                        items: [
                            'Position',
                            'BirthDate',
                            'HireDate',
                            'City'
                        ]
                    },
                    {
                        title: 'Contacts',
                        items: [
                            'Phone',
                            'Email'
                        ]
                    }
                ]
            }
        ]
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/TabbedItem/markup.html, Content/Applications/16_1/UIWidgets/dxForm/TabbedItem/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>

The **Form** widget uses the [TabPanel](/Documentation/ApiReference/UI_Widgets/dxTabPanel/) widget to display tabbed items. You can modify options of the tab panel using the [tabPanelOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/#tabPanelOptions) option, which accepts the [dxTabPanel configuration object](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/).

For the complete list of tabbed item configuration options, refer to the [Tabbed Item](/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/) API reference.
</article>