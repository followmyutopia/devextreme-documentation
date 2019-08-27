---
id: ui.setTemplateEngine(name)
module: ui/set_template_engine
export: default
---
---
##### shortDescription
Sets a template engine.

##### param(templateEngineName): String
The template engine's name: *"jquery-tmpl", "jsrender", "mustache", "hogan", "underscore", "handlebars"* and *"doT"*.

---
If you use the jQuery approach, you can register a custom template engine to define custom templates for widget elements. For this purpose, call the **DevExpress.ui.setTemplateEngine(name)** method passing the name of the required template engine as a parameter.

If there is no required template engine within the supported engines, use the [DevExpress.ui.setTemplateEngine(options)](/Documentation/ApiReference/Common/Utils/ui/#setTemplateEngineoptions) method passing an object that provides functions for template parsing and rendering.

[note]This method does not apply if Knockout or AngularJS libraries are attached to your application. In this case, the Knockout or AngularJS built-in template engine is used.