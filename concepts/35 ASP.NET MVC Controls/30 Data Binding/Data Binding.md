All DevExtreme controls that operate with data collections have the `DataSource()` method. Unlike other control methods, `DataSource()` do not have a direct counterpart in the DevExtreme JavaScript API, although its purpose resembles that of the **Stores** in the [DevExtreme Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/). The `DataSource()` method configures data access for a control. The following topics describe in details how to use this method for accessing data from different sources.

Besides `DataSource()`, data-bound controls (except **PivotGrid**) have the `DataSourceOptions()` method. It exposes a builder that configures initial sorting, filtering, grouping, and other data shaping operations. The builder's methods do have JavaScript API counterparts, which are described in [this section](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/).

#####See Also#####
- [ASP.NET MVC Controls - Fundamentals](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals)

[tags]asp.net mvc controls, bind data, static collections, webapi, web api, json, odata
