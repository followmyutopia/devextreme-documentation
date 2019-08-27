---
id: Query.count()
---
---
##### shortDescription
Calculates the number of data items.

##### return: Promise<Number>
A Promise that is resolved after the operation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
---
##### jQuery

    <!--JavaScript-->
    DevExpress.data.query([10, 20, 30, 40, 50])
        .count()
        .done(function (result) {
            console.log(result); // outputs 5
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            Query([10, 20, 30, 40, 50])
                .count()
                .then(result => {
                    console.log(result); // outputs 5
                });
        };
    }

---