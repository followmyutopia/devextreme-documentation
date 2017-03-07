<article data-show-web="/Content/Applications/16_1/DataLayer/AccessJSONDataViaDataSource/Step4/markup.html" data-show-first="script.js">

In some cases, data transferring operations take too much time, which can cause data loading failure. To avoid this problem, increase the AJAX request timeout. Handle the document [ajaxSend](http://api.jquery.com/ajaxsend/) event and assign the required value (in milliseconds) to the **timeout** option. The default timeout value is 30000.
</article>