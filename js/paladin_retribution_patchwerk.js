Highcharts.chart('paladin_retribution_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                129792,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                9847,
                8593,
                7199,
                6381,
                3444,
                6563,
                6235,
                7249,
                6289,
                8338,
                7908,
                6108,
                6085,
                6408,
                5154,
                5410,
                6207,
                5579,
                5586,
                5410,
                5423,
                6920,
                7205,
                5130,
                6919,
                4488,
                0,
                4327,
                6410,
                7885,
                4769,
                0,
                3355,
                0,
                3802,
                2795,
                4581,
                8560,
                3899,
                2895,
                4181,
                4146,
                1660,
                1475,
                2228
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                8989,
                9648,
                6308,
                7308,
                2470,
                7367,
                5705,
                4288,
                7115,
                5105,
                4525,
                5466,
                7954,
                6486,
                5996,
                3929,
                5212,
                6906,
                5974,
                5336,
                6307,
                6990,
                4291,
                6546,
                6264,
                6165,
                5938,
                5117,
                5374,
                4749,
                4742,
                0,
                4076,
                0,
                2341,
                3750,
                5921,
                8366,
                2741,
                3890,
                1466,
                1606,
                2521,
                1302,
                1258
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                8642,
                6576,
                5595,
                7062,
                4149,
                5537,
                5951,
                7695,
                4795,
                5118,
                6471,
                5568,
                3911,
                5890,
                6022,
                4047,
                5720,
                5746,
                4584,
                4925,
                3956,
                6193,
                5899,
                4786,
                6309,
                4103,
                6311,
                4240,
                6822,
                6265,
                2833,
                0,
                3638,
                0,
                1872,
                4218,
                4336,
                5281,
                2489,
                2621,
                2574,
                2069,
                1254,
                1937,
                1664
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                6686,
                7068,
                6019,
                5660,
                4347,
                5898,
                5021,
                4033,
                5680,
                4986,
                5256,
                5310,
                4878,
                4228,
                5435,
                3835,
                4892,
                3342,
                5463,
                5336,
                5276,
                6997,
                4733,
                3821,
                5747,
                3903,
                3961,
                5311,
                5515,
                4145,
                5462,
                0,
                3822,
                0,
                1426,
                1398,
                4001,
                6422,
                2574,
                2270,
                1656,
                2706,
                2235,
                2820,
                1013
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                75782,
                8395,
                5139,
                4954,
                1365,
                4798,
                5503,
                5629,
                4903,
                6202,
                3626,
                4649,
                6034,
                4489,
                4644,
                4757,
                4105,
                5054,
                5380,
                6296,
                3951,
                4864,
                4938,
                3794,
                4052,
                5853,
                4227,
                2618,
                4118,
                4975,
                3071,
                3709,
                3545,
                3009,
                3615,
                3171,
                2329,
                5484,
                2338,
                2681,
                2454,
                634,
                2615,
                394,
                1865
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                65929,
                4880,
                68914,
                2131,
                64685,
                4099,
                5147,
                3881,
                3614,
                3988,
                4257,
                3923,
                5584,
                62355,
                3329,
                4903,
                4437,
                1676,
                3401,
                5633,
                3714,
                3425,
                56069,
                3912,
                2812,
                57683,
                3396,
                5026,
                5391,
                3297,
                6054,
                2525,
                3934,
                943,
                2730,
                3788,
                5785,
                2008,
                779,
                1561,
                3334,
                1424,
                1555,
                1400
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                67811,
                0,
                81713,
                0,
                60057,
                57104,
                58341,
                57498,
                59005,
                58835,
                57052,
                56617,
                0,
                63144,
                55746,
                54455,
                56195,
                53568,
                52365,
                46750,
                51557,
                0,
                46512,
                51332,
                0,
                50612,
                42330,
                41110,
                49847,
                60122,
                43668,
                54613,
                45591,
                40009,
                32999,
                16297,
                36450,
                35614,
                32734,
                31283,
                30502,
                27762,
                27542
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-09-01 04:09:40"
    },
    title: {
        text: "Paladin - Retribution - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Specter of Betrayal",
            "Vial of Ceaseless Toxins",
            "Eye of Command",
            "Infernal Cinders",
            "Unstable Arcanocrystal",
            "Cradle of Anguish",
            "Horn of Valor",
            "Chaos Talisman",
            "Entwined Elemental Foci",
            "Stat Stick (Versatility)",
            "Ettin Fingernail",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Convergence of Fates",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Faulty Countermeasure",
            "Fel-Oiled Infernal Machine",
            "Nightmare Egg Shell",
            "Claw of the Crystalline Scorpid",
            "PVP Badge of Victory",
            "Umbral Moonglaives",
            "Bloodstained Handkerchief",
            "Gift of Radiance",
            "Astral Alchemist Stone",
            "PVP Insignia of Victory",
            "Might of Krosus",
            "Ursoc's Rending Paw",
            "The Devilsaur's Bite",
            "Darkmoon Deck: Dominion",
            "Spontaneous Appendages",
            "Infernal Alchemist Stone",
            "Nature's Call",
            "Terrorbound Nexus",
            "Void Stalker's Contract",
            "Draught of Souls",
            "Mark of Dargrul",
            "Spiked Counterweight",
            "Tiny Oozeling in a Jar",
            "Toe Knee's Promise",
            "Windscar Whetstone",
            "Giant Ornamental Pearl",
            "Ravaged Seed Pod"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 78108",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 78108.0,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});