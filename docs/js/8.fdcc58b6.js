(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"18aa":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"bg-grey-3 column"},[o("div",{attrs:{id:"chartTest"}},[o("apexchart",{attrs:{type:"line",width:"100%",height:"800rem",series:e.$t("i18n_series"),options:e.$t("i18n_options")}}),o("br")],1),o("div",{attrs:{id:"chartDeaths"}},[o("apexchart",{attrs:{type:"line",width:"100%",height:"800rem",series:e.$t("deaths_series"),options:e.$t("deaths_options")}}),o("br")],1),o("q-page-container",{staticStyle:{padding:"1em 5em"}},[o("q-card",{staticClass:"bg-grey-9 my-card",attrs:{dark:"",bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("text.notes")))])]),o("q-separator",{attrs:{dark:"",inset:""}}),o("q-card-section",[o("li",[e._v(e._s(e.$t("notes.n1")))]),o("li",[e._v(e._s(e.$t("notes.n2")))]),o("li",[e._v(e._s(e.$t("notes.n3")))]),o("li",[e._v(e._s(e.$t("notes.n4")))]),o("li",[e._v(e._s(e.$t("notes.n5"))+"\n                                  "),o("a",{staticClass:"text-warning",attrs:{href:"https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html"}},[e._v("https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html")])])])],1)],1)],1)},a=[],s=["10/2020","11/2020","12/2020","13/2020","14/2020","15/2020","16/2020","17/2020","18/2020","19/2020","20/2020","21/2020","22/2020","23/2020","24/2020","25/2020","26/2020","27/2020","28/2020","29/2020","30/2020","31/2020","32/2020","33/2020","34/2020","35/2020","36/2020","37/2020","38/2020","39/2020","40/2020","41/2020","42/2020","43/2020","44/2020","45/2020","46/2020","47/2020","48/2020","49/2020","50/2020","51/2020","52/2020","53/2020","1/2021","2/2021","3/2021","4/2021","5/2021","6/2021","7/2021","8/2021","9/2021","10/2021","11/2021","12/2021","13/2021","14/2021","15/2021","16/2021"],l=[69184,128008,374534,377599,417646,386241,339983,363659,327799,385638,431682,356489,408078,342328,327980,384834,472823,512969,513572,544219,556634,589201,719476,871191,1034449,1133623,1052942,1148465,1147879,1220279,1129127,1218988,1284349,1445463,1663992,1634729,1467454,1400145,1381117,1395790,1516038,1672033,1090372,845729,1231405,1187564,1113690,1151633,1101499,1060602,1103231,1171798,1153270,1280050,1367247,1415220,1178378,1168950,1311887,1409259],i=[1722,7470,25886,33139,37649,30829,22724,18127,12600,10181,7142,5315,4335,3219,2956,5588,3919,3204,3042,3608,4537,5888,7374,8545,8868,8273,8203,10403,13647,15178,19930,30220,46e3,80097,118111,128537,128986,131185,128882,138305,169520,188283,141413,129930,157772,124037,110163,97383,82436,67882,67379,72059,71715,85655,107827,131857,128814,140800,163282,175711],n=[2.5,5.8,6.9,8.8,9,8,6.7,5,3.8,2.6,1.7,1.5,1.1,.9,.9,1.5,.8,.6,.6,.7,.8,1,1,1,.9,.7,.8,.9,1.2,1.2,1.8,2.5,3.6,5.5,7.1,7.9,8.8,9.4,9.3,9.9,11.2,11.3,13,15.4,12.8,10.4,9.9,8.5,7.5,6.4,6.1,6.1,6.2,6.7,7.9,9.3,10.9,12,12.4,12.5],f=[2,12,43,334,953,1331,1621,1346,1009,746,519,333,253,168,119,95,75,55,51,21,34,23,55,35,38,26,30,24,37,71,72,86,162,255,449,808,1196,1537,2101,2649,3015,4262,3729,4494,6071,6076,5451,5075,4572,3443,2881,2204,1855,1471,1293,1206,1093,1390,1561,1650],c=[.002,.002,.01,.025,.043,.071,.074,.08,.073,.073,.063,.058,.052,.04,.017,.019,.017,.017,.006,.007,.004,.007,.004,.004,.003,.004,.002,.003,.005,.004,.003,.004,.003,.004,.006,.009,.012,.016,.019,.018,.023,.026,.035,.038,.049,.049,.052,.055,.051,.043,.031,.026,.017,.012,.009,.008,.01,.01,.009],b={components:{apexchart:VueApexCharts},i18n:{messages:{en:{i18n_series:[{name:"Number of Tests",type:"column",data:l},{name:"Positive Tests",type:"column",data:i},{name:"Positive Rate",type:"line",data:n}],deaths_series:[{name:"Number of 'Covid-19 Deaths'",type:"column",data:f},{name:"Infection Fatality Rate",type:"line",data:c}],deaths_options:{type:"line",stacked:!1,colors:["#FF4560","#00E396"],title:{text:"Covid Death in Germany",align:"center",style:{fontSize:"26px"}},zoom:{type:"xy",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},dataLabels:{enabled:!1},markers:{size:2},plotOptions:{bar:{columnWidth:"70%"}},xaxis:{labels:{style:{fontSize:"14px"}},title:{text:"Calendar weeks",style:{fontSize:"20px"}},categories:s},yaxis:[{seriesName:"Number of 'Covid-19 Deaths'",axisTicks:{show:!0},axisBorder:{show:!0,color:"#FF4560"},title:{text:"Deaths",style:{color:"#111",fontSize:"20px"}},lines:{show:!0},labels:{style:{fontSize:"14px"},formatter:function(e){return e.toFixed(0)}}},{seriesName:"Infection Fatality Rate",opposite:!0,show:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},lines:{show:!0},title:{text:"Infection Fatality Rate",style:{color:"#00E396",fontSize:"20px"}}}],legend:{horizontalAlign:"left",offsetX:40,fontSize:"20px"},annotations:{xaxis:[{x:"8/2021",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"Start of the third wave propaganda"}}]}},i18n_options:{type:"line",stacked:!1,title:{text:"Tests & Infection Rate",align:"center",style:{fontSize:"26px"}},zoom:{type:"xy",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},dataLabels:{enabled:!1},markers:{size:2},colors:["#008FFB","#00E396","#FF4560","#FEB019","#775DD0"],stroke:{width:[4,4,4,4,3]},plotOptions:{bar:{columnWidth:"70%"}},xaxis:{labels:{style:{fontSize:"14px"}},title:{text:"Calendar weeks",style:{fontSize:"20px"}},categories:s},yaxis:[{seriesName:"Number of Tests",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},title:{text:"Numbers of test",style:{color:"#008FFB",fontSize:"20px"}},lines:{show:!0},labels:{style:{fontSize:"14px"},formatter:function(e){return e/1e3+"K"}}},{seriesName:"Number of Tests",show:!1,labels:{formatter:function(e){return e.toFixed(0)}}},{seriesName:"Positive Rate",axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{fontSize:"14px"},style:{color:"#FEB019"}},title:{text:"Rate in % (line plot)",formatter:function(e){return e.toFixed(0)},style:{color:"#FEB019",fontSize:"20px"}}}],tooltip:{shared:!1,intersect:!0,x:{show:!0}},legend:{horizontalAlign:"left",offsetX:40,fontSize:"20px"},annotations:{xaxis:[{x:"11/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"11.03.: WHO declared Covid-19 Pandemic"}},{x:"13/2020",x2:"19/2020",borderColor:"#000",fillColor:"#FEB019",opacity:.2,label:{borderColor:"#333",style:{fontSize:"14px",color:"#333",background:"rgba(208,0,0,  0.5)"},offsetY:-10,text:"23.03.-06.05: Exit restriction"}},{x:"15/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)"},offsetY:-10,text:'09.04.:"End of the pandemic only with vaccines"'}},{x:"16/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"15.04.: Mask obligation"}},{x:"19/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"09.05.: 1st Querdenken Demo in Stuttgart"}},{x:"23/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"06.06.: BLM Demo in big cities"}},{x:"25/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"16.06.: Corona-Warn-App, 18.06: Outbreak in Tönnies"}},{x:"31/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"01.08.: Querdenken Demo in Berlin"}},{x:"35/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"29.08.: Querdenken Demo in Berlin"}},{x:"45/2020",strokeDashArray:0,fillColor:"rgba(208,200,0,  0.4)",label:{borderColor:"rgba(255,0,0,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(255,50,50,  0.73)",opacity:.6},offsetY:-10,text:"07.11: Demo in Leipzig"}},{x:"45/2020",x2:"51/2020",strokeDashArray:0,fillColor:"rgba(208,200,0,  0.4)",label:{borderColor:"rgba(255,0,0,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(255,50,50,  0.73)",opacity:.6},offsetY:150,text:'02.11.: 2nd Lockdown "light"'}},{x:"51/2020",x2:"16/2021",strokeDashArray:0,fillColor:"rgba(255,0,0,  0.6)",label:{borderColor:"rgba(255,0,0,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(255,50,50,  0.73)",opacity:.6},offsetY:-10,text:"16.12.: 2nd Lockdown"}}]}}},de:{deaths_series:[{name:"Todesfälle",type:"column",data:f},{name:"Fallsterblichkeit",type:"line",data:c}],deaths_options:{type:"line",stacked:!1,colors:["#FF4560","#008FFB"],title:{text:"Covid19-Sterbefälle & Fallsterblichkeit",align:"center",style:{fontSize:"26px"}},zoom:{type:"xy",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},dataLabels:{enabled:!1},markers:{size:2},plotOptions:{bar:{columnWidth:"70%"}},xaxis:{labels:{style:{fontSize:"14px"}},title:{text:"Kalenderwoche",style:{fontSize:"20px"}},categories:s},yaxis:[{seriesName:"Todesfälle",axisTicks:{show:!0},axisBorder:{show:!0,color:"#FF4560"},title:{text:"Sterbefälle an/mit Covid-19",style:{color:"#FF4560",fontSize:"20px"}},lines:{show:!0},labels:{style:{fontSize:"14px"},formatter:function(e){return e.toFixed(0)}}},{seriesName:"Fallsterblichkeit",opposite:!0,show:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},lines:{show:!0},title:{text:"Fallsterblichkeit",style:{color:"#008FFB",fontSize:"20px"}}}],legend:{horizontalAlign:"left",offsetX:40,fontSize:"20px"},annotations:{xaxis:[{x:"8/2021",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"Start der dritten Welle Propaganda"}}]}},i18n_series:[{name:"Anzahl der Testungen",type:"column",data:l},{name:"Positiv Getestet",type:"column",data:i},{name:"Positivenrate",type:"line",data:n}],i18n_options:{type:"line",stacked:!1,title:{text:"Testungen & Positivenrate",align:"center",style:{fontSize:"26px"}},zoom:{type:"xy",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},dataLabels:{enabled:!1},markers:{size:2},colors:["#008FFB","#00E396","#FF4560","#FEB019","#775DD0"],stroke:{width:[4,4,4,4,3]},plotOptions:{bar:{columnWidth:"70%"}},xaxis:{labels:{style:{fontSize:"14px"}},title:{text:"Kalenderwoche",style:{fontSize:"20px"}},categories:s},yaxis:[{seriesName:"Anzahl der Testungen",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},title:{text:"Anzahl (Balkendiagramm)",style:{color:"#008FFB",fontSize:"20px"}},lines:{show:!0},labels:{style:{fontSize:"14px"},formatter:function(e){return e.toFixed(0)}}},{seriesName:"Anzahl der Testungen",show:!1,opposite:!0,labels:{formatter:function(e){return e.toFixed(0)}}},{seriesName:"Positivenrate",axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{fontSize:"14px",color:"#FEB019"}},title:{text:"Rate in % (Liniendiagramm)",formatter:function(e){return e.toFixed(0)},style:{color:"#FEB019",fontSize:"20px"}}}],tooltip:{shared:!1,intersect:!0,x:{show:!0}},legend:{horizontalAlign:"left",offsetX:40,fontSize:"20px"},annotations:{xaxis:[{x:"11/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"11.03.: WHO erklärte die Covid-19-Pandemie"}},{x:"13/2020",x2:"19/2020",borderColor:"#000",fillColor:"#FEB019",opacity:.2,label:{borderColor:"#333",style:{fontSize:"14px",color:"#333",background:"rgba(208,0,0,  0.5)"},offsetY:-10,text:"23.03.-06.05.: 1. Lockdown"}},{x:"15/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)"},offsetY:-10,text:'09.04.:"Ohne Impfstoffe endet die Pandemie nicht."'}},{x:"18/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"27.04.: Maskenpflicht"}},{x:"19/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"09.05.: 1. Querdenken-Demo in Stuttgart"}},{x:"23/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"06.06.: BLM-Demo in den großen Städten"}},{x:"25/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"16.06.: Corona-Warn-App, 18.06: Tönnies-Ausbruch"}},{x:"31/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"01.08.: Querdenken-Demo in Berlin"}},{x:"35/2020",strokeDashArray:0,label:{borderColor:"rgba(108,117,125,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(108,117,125,  0.73)",opacity:.6},offsetY:-10,text:"29.08.: Querdenken-Demo in Berlin"}},{x:"45/2020",strokeDashArray:0,fillColor:"rgba(208,200,0,  0.4)",label:{borderColor:"rgba(255,0,0,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(255,50,50,  0.73)",opacity:.6},offsetY:-10,text:"07.11: Demo Leipzig "}},{x:"45/2020",x2:"50/2020",strokeDashArray:0,fillColor:"rgba(208,200,0,  0.4)",label:{borderColor:"rgba(255,0,0,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(255,50,50,  0.73)",opacity:.6},offsetY:130,text:'2.Lockdown "light"'}},{x:"51/2020",x2:"16/2021",strokeDashArray:0,fillColor:"rgba(255,0,0,  0.6)",label:{borderColor:"rgba(255,0,0,  0.73)",style:{fontSize:"14px",color:"#fff",background:"rgba(255,50,50,  0.73)",opacity:.6},offsetY:-10,text:"16.12.: 2. Lockdown"}}]}}}}}},x=b,d=o("2877"),p=o("9989"),y=o("09e3"),g=o("f09f"),h=o("a370"),u=o("eb85"),k=o("eebe"),m=o.n(k),z=Object(d["a"])(x,r,a,!1,null,null,null);t["default"]=z.exports;m()(z,"components",{QPage:p["a"],QPageContainer:y["a"],QCard:g["a"],QCardSection:h["a"],QSeparator:u["a"]})}}]);