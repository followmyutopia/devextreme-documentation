menuItems = [{
    text: 'Tutorials',
    items: [
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/VSIntegration.png',
            text: 'VS Integration',
            items: [
                { text: 'Your First Mobile App in Visual Studio' },
                { text: 'Create a Mobile App in Visual Studio' },
                { text: 'Add a ChartJS Chart in Visual Studio' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/SPAFramework.png',
            text: 'SPA Framework',
            beginGroup: true,
            items: [
                { text: 'Your First Application' },
                { text: 'Add a Navigation Bar' },
                { text: 'Add a Toolbar Item' },
                { text: 'Add a Menu Item' },
                { text: 'Set a Layout for a View' },
                { text: 'Customize a Layout' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/UIWidgets.png',
            text: 'UI Widgets',
            items: [
                { text: 'Configure Widget - Knockout Approach' },
                { text: 'Configure Widget - jQuery Approach' },
                { text: 'Configure Widget - Angular Approach' },
                { text: 'Configure DataGrid' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/DataVisualization.png',
            text: 'Data Visualization',
            items: [
                { text: 'Configure Charts' },
                { text: 'Configure Guages' },
                { text: 'Configure RangeSelector' },
                { text: 'Configure VectorMap' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/DataLayer.png',
            text: 'Data Layer',
            items: [
                { text: 'Filtering' },
                { text: 'Grouping' },
                { text: 'Paging' },
                { text: 'Searching' },
                { text: 'Sorting' }
            ]
        }
    ]
},
{
    text: 'Guides',
    items: [
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/VSIntegration.png',
            text: 'VS Integration',
            items: [
                { text: 'Project Templates' },
                { text: 'Design-Time Features' },
                { text: 'Simulation Tools' },
                { text: 'Packaging' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/SPAFramework.png',
            text: 'SPA Framework',
            items: [
                { text: 'Application Design' },
                { text: 'Application Project' },
                { text: 'Actions' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/none.png',
            text: 'Demos Inside'
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/UIWidgets.png',
            text: 'UI Widgets',
            items: [
                { text: 'Basics' },
                { text: 'UI Widgets Categories' },
                { text: 'UI Widgets - Deep Dive' },
                { text: 'DataGrid' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/DataVisualization.png',
            text: 'Data Visualization',
            items: [
                { text: 'Charts' },
                { text: 'Guages' },
                { text: 'RangeSelector' },
                { text: 'VectorMap' }
            ]
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/DataLayer.png',
            text: 'Data Layer'
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/none.png',
            text: 'Themes'
        },
        {
            icon: '/Content/images/doc/17_2/PhoneJS/menus/none.png',
            text: 'Common'
        }
    ]
},
{
    text: 'Reference',
    disabled: true,
    items: [
        { text: 'Data Library' },
        { text: 'Application Framework' },
        { text: 'Framework Markup Components' },
        { text: 'UI Widgets' },
        { text: 'Data Visualization Widgets' },
        { text: 'CSS Classes' },
        { text: 'UI Events' },
        { text: 'Common Object Structures' },
        { text: 'Utils' }
    ]
}];
itemClicked = function(data) {
    if (!data.itemData.items) {
        DevExpress.ui.notify("The \"" + data.itemData.text + "\" item is clicked", "success", 500);
    }
}