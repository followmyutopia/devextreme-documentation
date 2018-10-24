===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to highlight rows and cells whose data changed. 
<!--/shortDescription-->

<!--fullDescription-->
You can change the following CSS rules and classes that control highlighting:

    <!--CSS-->
    @keyframes dx-{widgetname}-highlight-change {
        from {
            background-color: #efefef;
        }
        50% {
            background-color: #efefef;
        }
    }
    .dx-{widgetname}-cell-updated-animation {
        animation: dx-{widgetname}-highlight-change 1s;
    }
    .dx-{widgetname}-row-inserted-animation {
        animation: dx-{widgetname}-highlight-change 1s;
    }

<!--/fullDescription-->