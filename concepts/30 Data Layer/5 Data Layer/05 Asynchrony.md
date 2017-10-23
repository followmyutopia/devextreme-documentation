All Data transferring operations in the data layer are asynchronous, whether it be an access to a remote service or to local data. It is made to support the universal Store interface, regardless of the source of data you access. These operations return a Promise ([jQuery](http://api.jquery.com/Types/#Promise) or [native](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) depending on the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag's value). Use this Promise to specify callbacks for successful operation completion and for operation failure.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            //success callback
        })
        .fail(function(error) {
            //error callback
        });
