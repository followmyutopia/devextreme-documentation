An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>&larr; / &rarr; </td>
      <td>Decreases/increases the value of the focused handle by a <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxSlider/Configuration/#step">step</a>.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Decreases/increases the value of the focused handle by a <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxSlider/Configuration/#keyStep">keyStep</a>.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Sets the focused handle to the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxSlider/Configuration/#min">minimum</a>/<a href="/Documentation/17_2/ApiReference/UI_Widgets/dxSlider/Configuration/#max">maximum</a> value or to the value of the other handle.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxSlider/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let slider =  $("#sliderContainer").dxSlider("instance");
        slider.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        slider.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxSliderComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxSliderComponent) slider: DxSliderComponent
        registerKeyHandlers () {
            this.slider.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.slider.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }

---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Slider Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-slider-overview/ios7)
- [Slider API Reference](/Documentation/ApiReference/UI_Widgets/dxSlider/)

[tags]slider, accessibility, keyboard shortcuts