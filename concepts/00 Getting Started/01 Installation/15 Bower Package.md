[note] Bower is currently in maintenance mode. We recommend using [npm](/Documentation/Guide/Getting_Started/Installation/npm_Package/) or [Yarn](/Documentation/Guide/Getting_Started/Installation/npm_Package/#Using_Yarn) in new projects instead.

To install the <a href="https://github.com/devexpress/bower-devextreme" target="_blank">DevExtreme Bower package</a>, open the console, navigate to your app folder and run the following command:

    bower install devextreme#~19.2 --save

Optionally, you can install the Knockout or AngularJS package:

    bower install knockout

<!-------->

    bower install angular

After the installation is completed, you can find all the libraries in the bower_components folder. Link them within the `<head>` tag on your index page:

    <!--HTML-->
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="bower_components/knockout/dist/knockout.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" href="bower_components/devextreme/css/dx.common.css">
    <link rel="stylesheet" href="bower_components/devextreme/css/dx.light.css">

    <!-- DevExtreme library -->
    <script type="text/javascript" src="bower_components/devextreme/js/dx.all.js"></script>
