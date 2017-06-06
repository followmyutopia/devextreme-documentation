<article data-show="/Content/Applications/17_2/framework/CustomizeLayout/step2/index.html" data-show-first="SlideOut/SlideOutLayout.css">

Open the **SlideOut**/*SlideOutLayout.css* file. To provide a style for the added toolbar, introduce a *layout-footer* class within the *slideout-layout* class.

    <!--CSS-->.slideout-layout .layout-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 44px;
    }

Now, you have a toolbar positioned correctly, but the "content" section knows nothing about the added toolbar because the content position is absolute. To avoid overlapping, the content bottom should be moved up to the height of the toolbar. So add the following changes to the *layout-content* class.

    <!--CSS-->.slideout-layout .layout-content {
        bottom: 44px;
    }

Apply the newly introduced **layout-footer** style to the element with the toolbar in the layout markup.
</article>