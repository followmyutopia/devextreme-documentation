<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>
<html>
<!-- Uncomment when using the Angular approach
<html ng-app="myApp">
    -->
<head runat="server">
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
    <script src="/SharedStatic/DevExtreme/16_2/js/jquery-2.2.3.min.js"></script>
    <!--Add a link either to Knockout or to Angular
    <script src="/SharedStatic/DevExtreme/16_2/js/knockout-3.4.0.js"></script>
    <script src="/SharedStatic/DevExtreme/16_2/js/angular.js"></script>
    <script src="/SharedStatic/DevExtreme/16_2/js/angular-sanitize.js"></script>-->
    <script src="/SharedStatic/DevExtreme/16_2/js/dx.web.js"></script>
    <script src="/MyJS/script_jQuery.js"></script>
    <!--<script src="/MyJS/script_Knockout.js"></script>-->
    <!--<script src="/MyJS/script_Angular.js"></script>-->
    <link rel="stylesheet" type="text/css" href="/SharedStatic/DevExtreme/16_2/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="/SharedStatic/DevExtreme/16_2/css/dx.light.css" />
</head>
<body>
<!-- Uncomment when using the Angular approach
    <body ng-controller="defaultCtrl">
-->

    <!--jQuery approach-->
    <div id="buttonContainer"></div>
    <p id="randomValue">0000000000</p>
    <p>Disable button <span id="checkBoxContainer"></span></p>
        
    <!--Knockout approach
    <div data-bind="dxButton: {
        text: 'Generate random value',
        onClick: clickHandler,
        disabled: buttonDisabled
    }"></div>
    <p>Random value: <b data-bind="text: randomValue"></b></p>
    <p>Disable button <span data-bind="dxCheckBox: { value: buttonDisabled }"></span></p>
        -->
    <!--Angular approach
    <div dx-button="{
        text: 'Generate random value',
        onClick: clickHandler,
        bindingOptions: { 
            disabled: 'buttonDisabled'
        }
    }"></div>
    <p>Random value: <b>{{randomValue}}</b></p>
    <p>Disable button <span dx-check-box="{ bindingOptions: { value: 'buttonDisabled' } }"></span></p>
    -->
</body>
</html>
