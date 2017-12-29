All operations with widget options are carried out through the properties of the component that contains the widget. To bind a widget option to a component property, enclose the option's name in "[( )]" and assign the name of the component property to it. This binding is illustrated by the following example where the **value** option of the [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/) widget is bound to the `textBoxValue` component property.

    @Component({
        selector: 'my-app',
        template: '<dx-text-box [(value)]="textBoxValue"></dx-text-box>'
    })
    export class AppComponent {
        textBoxValue: string = 'Text box value';
    }

Now, if you change the `textBoxValue` component property in code, the **TextBox** text will mirror the changes. And vice versa, if an end user changes **TextBox** in the UI, the `textBoxValue` component property will be updated.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Text_Box/Overview/Angular/Light/"
}

#####See Also#####
- [API Reference](/Documentation/ApiReference/).**WidgetName**.**Configuration**
- [Create and Configure a Widget](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angular, change options, get, set, runtime, two-way binding
