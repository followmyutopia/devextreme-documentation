//<!--//highlight-->
var vehiclesPerCapita = [
    { name: 'Europe' },
    { name: 'North America' },
    { name: 'Australia & Oceania' },
    { name: 'Asia' },
    { continent: 'Europe', name: 'San Marino', vehicles: 1263 },
    { continent: 'Europe', name: 'Monaco', vehicles: 842 },
    { continent: 'Europe', name: 'Liechtenstein', vehicles: 826 },
    { continent: 'North America', name: 'United States', vehicles: 809 },
    { continent: 'Europe', name: 'Iceland', vehicles: 747 },
    { continent: 'Europe', name: 'Luxembourg', vehicles: 741 },
    { continent: 'Australia & Oceania', name: 'Australia', vehicles: 731 },
    { continent: 'Europe', name: 'Malta', vehicles: 709 },
    { continent: 'Australia & Oceania', name: 'New Zealand', vehicles: 708 },
    { continent: 'Australia & Oceania', name: 'Guam', vehicles: 703 },
    { continent: 'Europe', name: 'Italy', vehicles: 682 },
    { continent: 'North America', name: 'Canada', vehicles: 662 },
    { continent: 'Europe', name: 'Spain', vehicles: 593 },
    { continent: 'Europe', name: 'Germany', vehicles: 588 },
    { continent: 'Asia', name: 'Japan', vehicles: 588 },
    { continent: 'Europe', name: 'Austria', vehicles: 585 },
    { continent: 'Europe', name: 'Poland', vehicles: 580 },
    { continent: 'Europe', name: 'France', vehicles: 578 },
    { continent: 'Europe', name: 'Switzerland', vehicles: 573 },
    { continent: 'Europe', name: 'Lithuania', vehicles: 560 }
];
//<!--//highlight-->

$(function () {
    $("#treeMapContainer").dxTreeMap({
        pathModified: true,
//<!--//highlight-->
        dataSource: vehiclesPerCapita,
        idField: 'name',
        parentField: 'continent',
        valueField: 'vehicles'
//<!--//highlight-->
    });
});
