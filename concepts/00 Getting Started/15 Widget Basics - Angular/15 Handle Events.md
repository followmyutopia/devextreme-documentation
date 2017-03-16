To handle an event, use a configuration option. All event handling options are given names that begin with *on*. 

    @Component({
        selector: 'my-app',
        template: '<dx-button text="Press me" (onClick)="clickHandler()"></dx-button>'
    })
    export class AppComponent {
        clickHandler() {
            alert('Button is clicked');
        }
    }

#####See Also#####
- [API Reference](/Documentation/ApiReference/) | **WidgetName** | **Events**
- [DevExtreme-Angular description on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angular, handle events, subscribe
