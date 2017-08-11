Open the view with controls to localize, add a `<script>` tag to the bottom, and call the **DevExpress.localization.locale** method to set the current locale.

    <!--Razor C#-->
    <script>
        DevExpress.localization.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

    <!--Razor VB-->
    <script>
        DevExpress.localization.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

<a href="/Demos/WidgetsGallery/Demo/Localization/UsingIntl/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
