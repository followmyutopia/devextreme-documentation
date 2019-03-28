You can access a widget instance in the component as described in [Call Methods](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Call_Methods).

You can also use [template reference variables](https://angular.io/guide/template-syntax#template-reference-variables--var-) to access a widget instance in the markup:

    <!--HTML-->
    <dx-select-box #targetSelectBox [items]="items"></dx-select-box>
    {{targetSelectBox.value}}
