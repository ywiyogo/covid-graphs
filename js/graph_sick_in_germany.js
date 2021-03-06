// Reference https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV/

var months_de = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
]
var months_en = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var v2010_2016 = [2.89, 4.56, 4.66, 3.98, 3.40, 3.67, 3.87, 3.49, 3.57, 3.73, 3.73, 4.39]
var v2017 = [3.3, 6.1, 5.3, 3.9, 3.3, 4.1, 3.6, 3.9, 4.4, 3.5, 3.7, 5.3]
var v2018 = [3.2, 5.8, 7.0, 3.4, 3.6, 4.2, 3.6, 4.1, 3.6, 3.9, 4.5, 4.2]
var v2019 = [3.2, 6.1, 5.9, 4.6, 3.9, 3.6, 3.9, 4.4, 3.6, 4.3, 4.4, 4.1]
var v2020 = [3.3, 4.6, 4.5, 6.5, 3.8, 3.4, 4.2, 3.6, 4.1, 4.7, 4.1]

var sickchart = {
    components: {
        apexchart: VueApexCharts
    },
    template: `<div id="chartSick">
                <apexchart type="line" width="100%" height="800" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
                <br/>
            </div>`,
    i18n: {
        // `i18n` option, setup locale info for component
        messages: {
            en: {
                i18n_series: [{
                    name: "Average of 2010-2016",
                    type: "line",
                    data: v2010_2016
                },
                {
                    name: "2017",
                    type: "line",
                    data: v2017
                },
                {
                    name: "2018",
                    type: "line",
                    data: v2018
                },
                {
                    name: "2019",
                    type: "line",
                    data: v2019
                },
                {
                    name: "2020",
                    type: "line",
                    data: v2020
                }
                ],
                i18n_options: {
                    type: "line",
                    stroke: {
                        curve: 'smooth',
                        width: [1, 1, 1, 1, 2],
                        dashArray: [4, 8, 0, 0, 0]
                    },
                    stacked: false,
                    title: {
                        text: "Sick leave from statutory health insurance in Germany",
                        align: "center",
                        style: {
                            fontSize: "26px"
                        }
                    },
                    colors: ['#5f6368', '#fbbc03', '#33a853', '#4285f4', '#ea4335'],

                    zoom: {
                        type: "xy",
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: "zoom"
                    },
                    dataLabels: {
                        enabled: true
                    },
                    markers: {
                        size: 1
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 10,
                        height: 120,
                        fontSize: "20px",
                        onItemClick: {
                            toggleDataSeries: true
                        },
                    },
                    subtitle: {
                        text: "Ref: https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV",
                        offsetY: 760,
                        margin: 5,
                        align: "center",
                        style: {
                            fontSize: "20px"
                        }
                    },
                    xaxis: {
                        title: {
                            text: "Month of the year",
                            style: {
                                fontSize: "20px"
                            }
                        },
                        type: "string",
                        categories: months_en
                    },
                    yaxis: [{
                        max: 7.5,
                        seriesName: "Sick ratio",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                        },
                        title: {
                            text: "Sick ratio",
                            style: {
                                fontSize: "20px",
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {}
                    }],
                    datamarker: [{
                        value: "2020",
                        time: "March",
                        tooltext: "Covid-19 Pandemic & Exit restriction"
                    },],
                    annotations: {


                    }
                }
            },
            de: {
                i18n_series: [{
                    name: "Durchschnitt von 2010-2016",
                    type: "line",
                    data: v2010_2016
                },
                {
                    name: "2017",
                    type: "line",
                    data: v2017
                },
                {
                    name: "2018",
                    type: "line",
                    data: v2018
                },
                {
                    name: "2019",
                    type: "line",
                    data: v2019
                },
                {
                    name: "2020",
                    type: "line",
                    data: v2020
                }
                ],
                i18n_options: {
                    type: "line",
                    stroke: {
                        curve: 'smooth',
                        width: [2, 2, 2, 2, 6],
                        dashArray: [4, 8, 0, 0, 0]
                    },
                    stacked: false,
                    title: {
                        text: "Krankenstand der gesetzlichen Krankenversicherung in Deutschland",
                        align: "center",
                        margin: 30,
                        floating: true,
                        style: {
                            fontSize: "26px"
                        }
                    },
                    zoom: {
                        type: "xy",
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    colors: ['#5f6368', '#fbbc03', '#33a853', '#4285f4', '#ea4335'],
                    toolbar: {
                        autoSelected: "zoom"
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    markers: {
                        size: 1
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 10,
                        height: 120,
                        fontSize: "20px",
                        onItemClick: {
                            toggleDataSeries: true
                        },

                    },
                    subtitle: {
                        text: "Ref: https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV",
                        offsetY: 760,
                        margin: 5,
                        align: "center",
                        style: {
                            fontSize: "20px"
                        }
                    },
                    xaxis: {
                        title: {
                            text: "Kalendermonat",
                            style: {
                                fontSize: "20px"
                            }
                        },
                        type: "string",
                        categories: months_de
                    },
                    yaxis: [{
                        max: 7.5,
                        seriesName: "Krankenanteil",
                        axisTicks: {
                            show: true,

                        },
                        axisBorder: {
                            show: true,

                        },
                        title: {
                            text: "Krankenanteil in %",
                            style: {
                                fontSize: "20px",
                            }
                        },
                        lines: {
                            show: true
                        },
                        labels: {
                            style: {
                                fontSize: "14px"
                            }
                        }
                    }],

                    annotations: {


                    }
                }
            }
        }
    },
    data: function () {
        return {}
    },
    methods: {}
}