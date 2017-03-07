var dataSource = [
  { year: 1896, gold: 2, silver: 0, bronze: 0 },
  { year: 1900, gold: 2, silver: 0, bronze: 3 },
  { year: 1904, gold: 0, silver: 0, bronze: 0 },
  { year: 1908, gold: 1, silver: 2, bronze: 2 },
  { year: 1912, gold: 2, silver: 2, bronze: 3 },
  { year: 1916, gold: 0, silver: 0, bronze: 0 },
  { year: 1920, gold: 0, silver: 2, bronze: 1 },
  { year: 1924, gold: 3, silver: 1, bronze: 2 },
  { year: 1928, gold: 1, silver: 2, bronze: 1 },
  { year: 1932, gold: 3, silver: 1, bronze: 1 },
  { year: 1936, gold: 0, silver: 0, bronze: 1 },
  { year: 1940, gold: 0, silver: 0, bronze: 0 },
  { year: 1944, gold: 0, silver: 0, bronze: 0 },
  { year: 1948, gold: 2, silver: 6, bronze: 5 },
  { year: 1952, gold: 6, silver: 2, bronze: 3 },
  { year: 1956, gold: 13, silver: 8, bronze: 14 },
  { year: 1960, gold: 8, silver: 8, bronze: 6 },
  { year: 1964, gold: 6, silver: 2, bronze: 10 },
  { year: 1968, gold: 5, silver: 7, bronze: 5 },
  { year: 1972, gold: 8, silver: 7, bronze: 2 },
  { year: 1976, gold: 0, silver: 1, bronze: 4 },
  { year: 1980, gold: 2, silver: 2, bronze: 5 },
  { year: 1984, gold: 4, silver: 8, bronze: 12 },
  { year: 1988, gold: 3, silver: 6, bronze: 5 },
  { year: 1992, gold: 7, silver: 9, bronze: 11 },
  { year: 1996, gold: 9, silver: 9, bronze: 23 },
  { year: 2000, gold: 16, silver: 25, bronze: 17 },
  { year: 2004, gold: 17, silver: 16, bronze: 16 },
  { year: 2008, gold: 14, silver: 15, bronze: 17 }];

$(function () {
    $("#chartContainer").dxChart({
        title: 'Australia Olympic Medals',
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'steparea',
            argumentField: 'year',
            steparea: {
                border: {
                    visible: false
                }
            }
        },
        series: [
            { valueField: 'bronze', name: 'Bronze Medals', color: 'orangered' },
            { valueField: 'silver', name: 'Silver Medals', color: 'silver' },
            { valueField: 'gold', name: 'Gold Medals', color: 'gold' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    });
});