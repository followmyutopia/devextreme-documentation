Angular integration is supplied as an extension to DevExtreme that is available in the [DevExtreme-Angular](https://github.com/devexpress/DevExtreme-angular) GitHub repository. This guide assumes that you already have [NodeJS and npm](https://docs.npmjs.com/getting-started/installing-node) installed on your machine.

Before adding a DevExtreme widget to your application, install DevExtreme and DevExtreme-Angular npm packages.

    npm install --save devextreme devextreme-angular

Then, import DevExtreme modules within the main *.ts* file (usually *src/app.module.ts*).

    ...
    import { DxButtonModule } from 'devextreme-angular';

    @NgModule({ 
        ... 
        imports: [ 
            ... 
            DxButtonModule, 
            ... 
        ] 
    })
    export class AppModule {}

You can import **DevExtremeModule**, which includes all DevExtreme components, but we recommend that you import only those modules that contain the required functionality (for example, **DxButtonModule**) to decrease the startup time and the size of the final bundle.

The imported modules contain components that create DevExtreme widgets. For instance, the `dx-button` component creates the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget, `dx-range-slider` creates the [RangeSlider](/Documentation/Guide/Widgets/RangeSlider/Overview/), etc. The following code demonstrates how to add the **Button** widget to the template of the *"my-app"* component.

    @Component({
        selector: 'my-app',
        template: '<dx-button text="Press me" (onClick)="helloWorld()"></dx-button>'
    })
    export class AppComponent {
        helloWorld() {
            alert('Hello world!');
        }
    }

You can initialize widget options with a string value or the value of a component property. For example, the following code initializes the **text** option with a string value, the **type** option with the value of the `buttonType` component property.

    @Component({
        selector: 'my-app',
        template: '<dx-button text="Press me" [type]="buttonType"></dx-button>'
    })
    export class AppComponent {
        buttonType: string = 'default';
    }

[note]Initializing widget options in this manner does not mean that the widget option will be changed once its component property is changed. If you are looking for this kind of data binding, refer to the [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Change_Options) topic.

For more information on using DevExtreme widgets with Angular, refer to the [DevExtreme-Angular extension description](https://github.com/DevExpress/DevExtreme-angular#angular-2-ui-and-visualization-components-based-on-devextreme-widgets) on GitHub.

#####See Also#####
- [API Reference](/Documentation/ApiReference/) | **WidgetName** | **Configuration**
- [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Change_Options/)

[tags]basics, angular, create, configure, initialize, design time, component properties
