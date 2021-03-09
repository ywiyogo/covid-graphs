// Ref: https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Projekte_RKI/Nowcasting.html
// var r_dates = [1583535600000, 1583622000000, 1583708400000, 1583794800000, 1583881200000, 1583967600000, 1584054000000, 1584140400000, 1584226800000, 1584313200000, 1584399600000, 1584486000000, 1584572400000, 1584658800000, 1584745200000, 1584831600000, 1584918000000, 1585004400000, 1585090800000, 1585177200000, 1585263600000, 1585350000000, 1585436400000, 1585519200000, 1585605600000, 1585692000000, 1585778400000, 1585864800000, 1585951200000, 1586037600000, 1586124000000, 1586210400000, 1586296800000, 1586383200000, 1586469600000, 1586556000000, 1586642400000, 1586728800000, 1586815200000, 1586901600000, 1586988000000, 1587074400000, 1587160800000, 1587247200000, 1587333600000, 1587420000000, 1587506400000, 1587592800000, 1587679200000, 1587765600000, 1587852000000, 1587938400000, 1588024800000, 1588111200000, 1588197600000, 1588284000000, 1588370400000, 1588456800000, 1588543200000, 1588629600000, 1588716000000, 1588802400000, 1588888800000, 1588975200000, 1589061600000, 1589148000000, 1589234400000, 1589320800000, 1589407200000, 1589493600000, 1589580000000, 1589666400000, 1589752800000, 1589839200000, 1589925600000, 1590012000000, 1590098400000, 1590184800000, 1590271200000, 1590357600000, 1590444000000, 1590530400000, 1590616800000, 1590703200000, 1590789600000, 1590876000000, 1590962400000, 1591048800000, 1591135200000, 1591221600000, 1591308000000, 1591394400000, 1591480800000, 1591567200000, 1591653600000, 1591740000000, 1591826400000, 1591912800000, 1591999200000, 1592085600000, 1592172000000, 1592258400000, 1592344800000, 1592431200000, 1592517600000, 1592604000000, 1592690400000, 1592776800000, 1592863200000, 1592949600000, 1593036000000, 1593122400000, 1593208800000, 1593295200000, 1593381600000, 1593468000000, 1593554400000, 1593640800000, 1593727200000, 1593813600000, 1593900000000, 1593986400000, 1594072800000, 1594159200000, 1594245600000, 1594332000000, 1594418400000, 1594504800000, 1594591200000, 1594677600000, 1594764000000, 1594850400000, 1594936800000, 1595023200000, 1595109600000, 1595196000000, 1595282400000, 1595368800000, 1595455200000, 1595541600000, 1595628000000, 1595714400000, 1595800800000, 1595887200000, 1595973600000, 1596060000000, 1596146400000, 1596232800000, 1596319200000, 1596405600000, 1596492000000, 1596578400000, 1596664800000, 1596751200000, 1596837600000, 1596924000000, 1597010400000, 1597096800000, 1597183200000, 1597269600000, 1597356000000, 1597442400000, 1597528800000, 1597615200000, 1597701600000, 1597788000000, 1597874400000, 1597960800000, 1598047200000, 1598133600000, 1598220000000, 1598306400000, 1598392800000, 1598479200000, 1598565600000, 1598652000000, 1598738400000, 1598824800000, 1598911200000, 1598997600000, 1599084000000, 1599170400000, 1599256800000, 1599343200000, 1599429600000, 1599516000000, 1599602400000, 1599688800000, 1599775200000, 1599861600000];
// var r_values = [2.34, 2.56, 2.93, 3.13, 3.21, 3.12, 2.84, 2.5, 2.18, 1.99, 1.74, 1.56, 1.4, 1.24, 1.13, 1.04, 0.98, 0.92, 0.89, 0.9, 0.88, 0.9, 0.91, 0.9, 0.92, 0.93, 0.93, 0.95, 0.93, 0.92, 0.89, 0.89, 0.87, 0.85, 0.83, 0.8, 0.81, 0.78, 0.79, 0.78, 0.76, 0.78, 0.8, 0.81, 0.84, 0.84, 0.83, 0.83, 0.81, 0.81, 0.83, 0.82, 0.82, 0.81, 0.81, 0.81, 0.82, 0.85, 0.86, 0.88, 0.9, 0.89, 0.9, 0.89, 0.87, 0.87, 0.86, 0.85, 0.85, 0.89, 0.92, 0.93, 0.96, 0.92, 0.92, 0.91, 0.85, 0.83, 0.82, 0.81, 0.87, 0.89, 0.9, 0.94, 0.92, 0.92, 0.88, 0.89, 0.89, 0.91, 0.95, 0.96, 0.96, 1.02, 1.03, 1.04, 1.07, 1.05, 1.07, 1.11, 1.19, 1.42, 1.47, 1.47, 1.42, 1.19, 1.12, 1.03, 0.83, 0.76, 0.73, 0.72, 0.83, 0.87, 0.89, 0.93, 0.95, 0.94, 0.93, 0.91, 0.92, 0.92, 0.93, 0.93, 0.95, 1, 1.07, 1.12, 1.17, 1.19, 1.23, 1.23, 1.2, 1.17, 1.15, 1.16, 1.17, 1.19, 1.19, 1.19, 1.17, 1.14, 1.11, 1.09, 1.07, 1.06, 1.05, 1.08, 1.14, 1.18, 1.2, 1.2, 1.18, 1.17, 1.16, 1.13, 1.14, 1.14, 1.16, 1.18, 1.17, 1.15, 1.12, 1.08, 1.06, 1.03, 0.99, 0.97, 0.95, 0.95, 0.97, 0.98, 0.98, 0.99, 0.99, 0.98, 0.98, 0.95, 0.97, 1, 1.02, 1.04, 1.04, 1.06, 1.08, 1.06, 1.06, 1.04, 1.];

var date_series = [1583535600000,1583622000000,1583708400000,1583794800000,1583881200000,1583967600000,1584054000000,1584140400000,1584226800000,1584313200000,1584399600000,1584486000000,1584572400000,1584658800000,1584745200000,1584831600000,1584918000000,1585004400000,1585090800000,1585177200000,1585263600000,1585350000000,1585436400000,1585519200000,1585605600000,1585692000000,1585778400000,1585864800000,1585951200000,1586037600000,1586124000000,1586210400000,1586296800000,1586383200000,1586469600000,1586556000000,1586642400000,1586728800000,1586815200000,1586901600000,1586988000000,1587074400000,1587160800000,1587247200000,1587333600000,1587420000000,1587506400000,1587592800000,1587679200000,1587765600000,1587852000000,1587938400000,1588024800000,1588111200000,1588197600000,1588284000000,1588370400000,1588456800000,1588543200000,1588629600000,1588716000000,1588802400000,1588888800000,1588975200000,1589061600000,1589148000000,1589234400000,1589320800000,1589407200000,1589493600000,1589580000000,1589666400000,1589752800000,1589839200000,1589925600000,1590012000000,1590098400000,1590184800000,1590271200000,1590357600000,1590444000000,1590530400000,1590616800000,1590703200000,1590789600000,1590876000000,1590962400000,1591048800000,1591135200000,1591221600000,1591308000000,1591394400000,1591480800000,1591567200000,1591653600000,1591740000000,1591826400000,1591912800000,1591999200000,1592085600000,1592172000000,1592258400000,1592344800000,1592431200000,1592517600000,1592604000000,1592690400000,1592776800000,1592863200000,1592949600000,1593036000000,1593122400000,1593208800000,1593295200000,1593381600000,1593468000000,1593554400000,1593640800000,1593727200000,1593813600000,1593900000000,1593986400000,1594072800000,1594159200000,1594245600000,1594332000000,1594418400000,1594504800000,1594591200000,1594677600000,1594764000000,1594850400000,1594936800000,1595023200000,1595109600000,1595196000000,1595282400000,1595368800000,1595455200000,1595541600000,1595628000000,1595714400000,1595800800000,1595887200000,1595973600000,1596060000000,1596146400000,1596232800000,1596319200000,1596405600000,1596492000000,1596578400000,1596664800000,1596751200000,1596837600000,1596924000000,1597010400000,1597096800000,1597183200000,1597269600000,1597356000000,1597442400000,1597528800000,1597615200000,1597701600000,1597788000000,1597874400000,1597960800000,1598047200000,1598133600000,1598220000000,1598306400000,1598392800000,1598479200000,1598565600000,1598652000000,1598738400000,1598824800000,1598911200000,1598997600000,1599084000000,1599170400000,1599256800000,1599343200000,1599429600000,1599516000000,1599602400000,1599688800000,1599775200000,1599861600000,1599948000000,1600034400000,1600120800000,1600207200000,1600293600000,1600380000000,1600466400000,1600552800000,1600639200000,1600725600000,1600812000000,1600898400000,1600984800000,1601071200000,1601157600000,1601244000000,1601330400000,1601416800000,1601503200000,1601589600000,1601676000000,1601762400000,1601848800000,1601935200000,1602021600000,1602108000000,1602194400000,1602280800000,1602367200000,1602453600000,1602540000000,1602626400000,1602712800000,1602799200000,1602885600000,1602972000000,1603058400000,1603144800000,1603231200000,1603317600000,1603404000000,1603490400000,1603576800000,1603666800000,1603753200000,1603839600000,1603926000000,1604012400000,1604098800000,1604185200000,1604271600000,1604358000000,1604444400000,1604530800000,1604617200000,1604703600000,1604790000000,1604876400000,1604962800000,1605049200000,1605135600000,1605222000000,1605308400000,1605394800000,1605481200000,1605567600000,1605654000000,1605740400000,1605826800000,1605913200000,1605999600000,1606086000000,1606172400000,1606258800000,1606345200000,1606431600000,1606518000000,1606604400000,1606690800000,1606777200000,1606863600000,1606950000000,1607036400000,1607122800000,1607209200000,1607295600000,1607382000000,1607468400000,1607554800000,1607641200000,1607727600000,1607814000000,1607900400000,1607986800000,1608073200000,1608159600000,1608246000000,1608332400000,1608418800000,1608505200000,1608591600000,1608678000000,1608764400000,1608850800000,1608937200000,1609023600000,1609110000000,1609196400000,1609282800000,1609369200000 ]

// 7 days r values
var r_values = [2.34, 2.56, 2.93, 3.13, 3.22, 3.12, 2.84, 2.5, 2.18, 1.99, 1.74, 1.56, 1.39, 1.24, 1.13, 1.04, 0.98, 0.92, 0.9, 0.9, 0.88, 0.9, 0.9, 0.9, 0.92, 0.93, 0.93, 0.95, 0.93, 0.92, 0.89, 0.89, 0.87, 0.85, 0.83, 0.81, 0.81, 0.79, 0.79, 0.78, 0.76, 0.78, 0.8, 0.81, 0.84, 0.84, 0.82, 0.83, 0.81, 0.81, 0.83, 0.82, 0.82, 0.81, 0.81, 0.81, 0.82, 0.85, 0.86, 0.89, 0.9, 0.89, 0.9, 0.89, 0.87, 0.87, 0.85, 0.85, 0.85, 0.89, 0.92, 0.93, 0.96, 0.92, 0.92, 0.91, 0.85, 0.83, 0.82, 0.81, 0.87, 0.89, 0.91, 0.94, 0.92, 0.92, 0.87, 0.89, 0.89, 0.91, 0.95, 0.96, 0.96, 1.01, 1.03, 1.04, 1.06, 1.05, 1.07, 1.11, 1.19, 1.43, 1.48, 1.47, 1.42, 1.19, 1.13, 1.04, 0.83, 0.76, 0.73, 0.73, 0.83, 0.87, 0.89, 0.93, 0.95, 0.94, 0.93, 0.9, 0.92, 0.92, 0.93, 0.93, 0.95, 1.01, 1.07, 1.12, 1.17, 1.19, 1.23, 1.23, 1.19, 1.17, 1.14, 1.16, 1.17, 1.19, 1.2, 1.19, 1.17, 1.14, 1.12, 1.09, 1.06, 1.06, 1.05, 1.08, 1.13, 1.17, 1.19, 1.19, 1.17, 1.17, 1.16, 1.13, 1.14, 1.14, 1.16, 1.18, 1.17, 1.15, 1.12, 1.07, 1.06, 1.03, 0.99, 0.97, 0.95, 0.95, 0.97, 0.98, 0.98, 0.98, 0.98, 0.98, 0.97, 0.96, 0.98, 1.01, 1.03, 1.06, 1.06, 1.08, 1.1, 1.09, 1.1, 1.11, 1.12, 1.15, 1.14, 1.15, 1.15, 1.14, 1.12, 1.07, 1.03, 1.01, 1.01, 1.02, 1.04, 1.06, 1.09, 1.11, 1.12, 1.12, 1.13, 1.15, 1.19, 1.23, 1.28, 1.31, 1.36, 1.38, 1.39, 1.38, 1.35, 1.32, 1.29, 1.3, 1.31, 1.34, 1.37, 1.38, 1.37, 1.38, 1.4, 1.42, 1.44, 1.43, 1.39, 1.34, 1.29, 1.26, 1.21, 1.17, 1.13, 1.08, 1.06, 1.04, 1.04, 1.03, 1.03, 1.02, 0.99, 0.98, 0.97, 0.96, 0.96, 0.97, 0.99, 1.02, 1.04, 1.05, 1.05, 1.04, 1.04, 1.02, 1, 0.98, 0.95, 0.94, 0.94, 0.94, 0.94, 0.96, 0.98, 1.01, 1.04, 1.07, 1.09, 1.12, 1.15, 1.16, 1.17, 1.16, 1.16, 1.14, 1.12, 1.1, 1.08, 1.06, 1.05, 1.03, 1.02, 1, 0.98, 0.96, 0.94, 0.92, 0.88, 0.87, 0.83, 0.8, 0.8, 0.83, 0.89, 0.95]
var deaths = [0, 0, 0, 2, 0, 1, 2, 0, 3, 4, 0, 0, 0, 8, 11, 16, 8, 31, 28, 35, 49, 55, 72, 64, 66, 128, 149, 140, 145, 141, 184, 92, 173, 254, 246, 266, 171, 129, 126, 170, 285, 315, 299, 242, 184, 110, 194, 281, 215, 227, 179, 140, 110, 163, 202, 173, 193, 94, 74, 43, 139, 165, 123, 147, 103, 26, 22, 116, 101, 89, 101, 57, 33, 21, 72, 83, 57, 27, 42, 31, 10, 45, 47, 62, 39, 39, 11, 11, 11, 29, 30, 32, 33, 22, 6, 37, 18, 26, 8, 18, 6, 4, 9, 30, 26, 16, 11, -1, 3, 10, 19, 13, 21, 6, 3, 4, 12, 12, 9, 9, 7, 2, 4, 8, 12, 12, 6, 6, 3, 1, 4, 3, 7, 4, 1, 1, 2, 4, 5, 6, 10, 7, 0, 0, 4, 6, 6, 7, 7, -7, 7, 8, 12, 7, 8, 12, 1, 1, 4, 6, 4, 14, 6, 0, 1, 4, 7, 10, 7, 7, 2, 3, 5, 3, 5, 3, 1, 6, 3, 4, 11, 8, 1, 2, 1, 0, 4, 9, 3, 1, 5, 2, 1, 12, 6, 3, 7, 6, 2, 0, 10, 13, 19, 15, 9, 5, 3, 11, 17, 12, 8, 19, 2, 5, 12, 16, 16, 11, 15, 11, 6, 13, 43, 33, 24, 33, 10, 12, 47, 39, 30, 49, 49, 29, 24, 42, 85, 89, 77, 103, 29, 49, 131, 151, 118, 166, 130, 63, 63, 154, 261, 215, 218, 178, 107, 62, 267, 305, 251, 260, 254, 138, 90, 249, 410, 389, 426, 379, 158, 125, 388, 487, 479, 432, 483, 255, 147, 423, 590, 440, 598, 496, 321, 188, 500, 952, 698, 813, 702, 409, 226, 731, 962, 802, 412, 240, 356, 348, 852, 1129]

var rchart = {
    components: {
        apexchart: VueApexCharts
    },
    template: `<div id="rchart">
                <apexchart type="line" width="100%" height="800" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
            </div>`,
    i18n: { // `i18n` option, setup locale info for component
        messages: {
            en: {
                i18n_series: [{
                    name: 'R Values',
                    type: 'line',
                    data: r_values
                },
                {
                    name: 'Covid-19 Deaths',
                    type: 'column',
                    data: deaths
                },
                ],
                i18n_options: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'R Values & Covid Deaths',
                        align: 'center',
                        style: {
                            fontSize: '26px',
                        }
                    },
                    colors: ['#008FFB', '#FF9800'],

                    zoom: {
                        type: 'xy',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 1,
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                    },
                    xaxis: {
                        title: {
                            text: "Date",
                            style: {
                                fontSize: '20px',
                            }
                        },
                        type: 'datetime',
                        categories: date_series
                    },
                    yaxis: [{
                        max: 5,
                        min: 0,
                        seriesName: 'R Values',
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        title: {
                            text: "R Value",
                            style: {
                                fontSize: '20px',
                                color: '#008FFB'
                            }
                        },
                        lines: {
                            show: true,
                            color: '#008FFB'
                        },
                        labels: {

                        },
                    },
                    {
                        min: -10,
                        seriesName: 'Covid-19 Deaths',
                        opposite: true,
                        axisTicks: {
                            show: true,
                            color: '#FF9800'
                        },
                        decimalsInFloat: 0,
                        axisBorder: {
                            show: true,
                            color: '#FF9800'
                        },
                        title: {
                            text: "Number of deaths",
                            style: {
                                color: '#FF9800',
                                fontSize: '20px',
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                                color: '#FF9800',
                            },

                        },
                    },
                    ],
                    annotations: {
                        xaxis: [{
                            x: 1588024800000,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(0,0,255,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(0,50,250,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '27.04.: Mandatory mask',
                            }
                        },
                        {
                            x: 1596319200000,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: 'Querdenken-Demo in Berlin',
                            }
                        },
                        {
                            x: 1598738400000,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: 'Querdenken-Demo in Berlin',
                            }
                        },
                        {
                            x: 1585004400000,
                            x2: 1588802400000,
                            strokeDashArray: 0,
                            fillColor: 'rgba(208,0,0,  0.4)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '23.03.: 1st Lockdown',
                            }
                        },
                        {
                            x: 1604358000000,
                            x2: 1608159600000,
                            strokeDashArray: 0,
                            fillColor: 'rgba(208,200,0, 0.4)',
                            label: {
                                borderColor: 'rgba(255, 165,0, 0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255, 165,0, 0.4)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '02.11.: Lockdown "light"',
                            }
                        },
                        {
                            x: 1604790000000,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125, 0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125, 0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: 'Querdenken-Demo in Leipzig',
                            }
                        },
                        {
                            x: 1608159600000,
                            x2: 1609369200000,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '16.12.: 2nd Lockdown',
                            }
                        },],
                        yaxis: [{
                            y: 0.8,
                            y2: 1.2,
                            borderColor: '#000',
                            fillColor: 'rgba(208,0,0,  0.4)',
                            opacity: 0.2,
                            label: {
                                borderColor: '#333',
                                style: {
                                    fontSize: '14px',
                                    color: '#333',
                                    background: 'rgba(208,0,0,  0.5)',
                                },
                                text: 'Threshold range',
                            }
                        }]
                    }
                },
            },
            de: {
                i18n_series: [{
                    name: 'R-Werte',
                    type: 'line',
                    data: r_values
                },
                {
                    name: 'Covid-19 Sterbefälle',
                    type: 'column',
                    data: deaths
                },
                ],
                i18n_options: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'R-Werte & Sterbefälle',
                        align: 'center',
                        style: {
                            fontSize: '26px',
                        }
                    },
                    zoom: {
                        type: 'xy',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    colors: ['#008FFB', '#FF9800'],
                    toolbar: {
                        autoSelected: 'zoom'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 1,
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                    },
                    xaxis: {
                        title: {
                            text: "Datum",
                            style: {
                                fontSize: '20px',
                            }
                        },
                        type: 'datetime',
                        categories: date_series
                    },
                    yaxis: [{
                        max: 5,
                        min: 0,
                        seriesName: 'R-Werte',
                        axisTicks: {
                            show: true,
                            color: '#008FFB'
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        title: {
                            text: "R-Wert",
                            style: {
                                fontSize: '20px',
                                color: '#008FFB'
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {
                            style: {
                                color: '#008FFB',
                                fontSize: '14px',
                            },
                        },
                    },
                    {
                        min: -10,
                        seriesName: 'Covid-19 Sterbefälle',
                        opposite: true,
                        axisTicks: {
                            show: true,
                            color: '#FF9800'
                        },
                        color: '#FF9800',
                        decimalsInFloat: 0,
                        axisBorder: {
                            show: true,
                            color: '#FF9800'
                        },
                        title: {
                            text: "Anzahl der Sterbefälle",
                            style: {
                                color: '#FF9800',
                                fontSize: '20px',
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                                color: '#FF9800',
                            },
                        },
                    },
                    ],
                    annotations: {
                        xaxis: [{
                            x: 1588024800000,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(0,0,255,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(0,50,250,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '27.04.: Maskenpflicht',
                            }
                        },
                        {
                            x: 1585004400000,
                            x2: 1588802400000,
                            strokeDashArray: 0,
                            fillColor: 'rgba(208,0,0,  0.4)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '23.03.: 1. Lockdown',
                            }
                        },
                        {
                            x: 1596319200000,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: 'Querdenken-Demo in Berlin',
                            }
                        },
                        {
                            x: 1598738400000,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: 'Querdenken-Demo in Berlin',
                            }
                        },
                        {
                            x: 1604358000000,
                            x2: 1608159600000,
                            strokeDashArray: 0,
                            fillColor: 'rgba(208,200,0,  0.4)',
                            label: {
                                borderColor: 'rgba(255, 165,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255, 165,0,  0.4)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '02.11.: Lockdown "light"',
                            }
                        },
                        {
                            x: 1604790000000,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: 'Querdenken-Demo in Leipzig',
                            }
                        },
                        {
                            x: 1608159600000,
                            x2: 1609369200000,
                            strokeDashArray: 0,
                            fillColor: 'rgba(255,0,0,  0.6)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '16.12.: 2. Lockdown',
                            }
                        },
                        ],
                        yaxis: [{
                            y: 0.8,
                            y2: 1.2,
                            borderColor: '#000',
                            fillColor: 'rgba(208,0,0,  0.4)',
                            opacity: 0.2,
                            label: {
                                borderColor: '#333',
                                style: {
                                    fontSize: '14px',
                                    color: '#333',
                                    background: 'rgba(208,0,0,  0.5)',
                                },
                                text: 'Grenzwertbereich',
                            }
                        }]
                    }
                },

            }
        }
    },
    data: function () {
        return {};
    },
    methods: {},
}