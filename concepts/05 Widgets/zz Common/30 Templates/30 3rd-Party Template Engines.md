You can choose a 3rd-party template engine if you do not use Angular, AngularJS, or Knockout. DevExtreme supports the following template engines out of the box:

- [JsRender](https://github.com/BorisMoore/jsrender)
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

To use one of them, pass its name to the [DevExpress.ui.setTemplateEngine(name)](/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename) method:

    <!--JavaScript-->
    DevExpress.ui.setTemplateEngine("underscore");

    $(function() {
        $("#list").dxList({
            // ...
            itemTemplate: $("#itemTemplate")
        });
    })

    <!--HTML-->
    <div id="list"></div>
    <script type="text/html" id="itemTemplate">
        <!-- your Underscore template -->
    </script>

<a href="/Demos/WidgetsGallery/Demo/List/Item3RdPartyEngineTemplate/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

You can also use other template engines, but you need to implement functions that compile and render templates in this case. See [DevExpress.ui.setTemplateEngine(options)](/Documentation/ApiReference/Common/Utils/ui/#setTemplateEngineoptions) for details.
