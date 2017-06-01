The **Button** widget provides five predefined appearances controlled by the [type](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type) option. The **type** can be *"normal"*, *"default"*, *"back"*, *"danger"* or *"success"*. Choose the proper type depending on the commands that the **Button** performs.

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger", // or "normal" | "back" | "danger" | "success"
            text: "Delete",
            onClick: function (e) {
                // ...
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

Apart from plain text, the **Button** can display an icon. DevExtreme provides [built-in icons](/Documentation/Guide/Themes/Icon_Library/) that change their appearance depending on the platform. Certainly, you can [use an external icon library](/Documentation/Guide/Themes/Icon_Library/#Use_External_Icon_Libraries) or even [standalone icons](/Documentation/Guide/Themes/Icon_Library/#Alternative_to_the_Icon_Library). To specify the icon, set the [icon](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon) option.

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger",
            text: "Delete",
            icon: "remove",
            onClick: function (e) {
                // ...
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

If you need to define the **Button** content completely, specify a template for it. You can simply put this template inside the **Button** container...

    <!--HTML--><div id="buttonContainer">
        <i style="color:green">Refresh</i>
    </div>

... or you can combine the HTML markup for the template in the [template](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template) function.

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            template: function (e) {
                return $("<i />").text("Refresh")
                                 .css("color", "green");
            },
            onClick: function (e) {
                // ...
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Button** container using the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. To switch the templates on-the-fly, change the value of the [template](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template) option.

    <!--HTML--><div id="buttonContainer">
        <div data-options="dxTemplate: { name: 'withIcon' }">
            <span class="dx-icon-refresh"></span>
            <span>Refresh</span>
        </div>
        <div data-options="dxTemplate: { name: 'withLoadingIndicator' }">
            <span>
                <img id="loadingIndicator" src="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg" />
            </span>
            <span>Refresh</span>
        </div>
    </div>


    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            template: "withIcon",
            onClick: function (e) {
            	e.component.option("template", "withLoadingIndicator");
                setTimeout(function() {
                	e.component.option("template", "withIcon");
                }, 2000)
            }
        });
    });

    <!--CSS-->#buttonContainer {
        height: 50px;
        width: 100px
    }

    #buttonContainer > div > span {
        vertical-align: middle
    }

    #loadingIndicator {
        height: 14px;
        width: 14px;
    }

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Button API Reference](/Documentation/ApiReference/UI_Widgets/dxAccordion/)

[tags]button, appearance, customize, templates, type, icon