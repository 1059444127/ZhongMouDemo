! function() {}(); //!
jQuery.noConflict();
jQuery(document).ready(function ($) {

    var counter = 0;
    var dtNow = new Date();
	"use strict";
	var ajaxData = {
	    "Table": [{
	        "土湿1": Math.round(Math.random() * 10000) / 100,
	        "土湿2": Math.round(Math.random() * 10000) / 100,
	        "土湿3": Math.round(Math.random() * 10000) / 100,
	        "土湿4": Math.round(Math.random() * 10000) / 100,
	        "土湿5": Math.round(Math.random() * 10000) / 100,
	        "土湿6": Math.round(Math.random() * 10000) / 100,
	        "日期": getDateString(dtNow, -21),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -20),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -19),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -18),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -17),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -16),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -15),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -14),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -13),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -12),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -11),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -10),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -9),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -8),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -7),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -6),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -5),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -4),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -3),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -2),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow, -1),
		}, {
		    "土湿1": Math.round(Math.random() * 10000) / 100,
		    "土湿2": Math.round(Math.random() * 10000) / 100,
		    "土湿3": Math.round(Math.random() * 10000) / 100,
		    "土湿4": Math.round(Math.random() * 10000) / 100,
		    "土湿5": Math.round(Math.random() * 10000) / 100,
		    "土湿6": Math.round(Math.random() * 10000) / 100,
		    "日期": getDateString(dtNow,0),
		}]
	};
    

	$('#ListTable').bootstrapTable('load', ajaxData.Table);



	var cloneOpr = {
		cloneObj: function(obj) {
			var newObj = [];
			for(var i in obj) {
				newObj[i] = obj[i];
			}
			return newObj;
		},
		cloneArr: function(arr) {
			var newArr = [];
			for(var i = 0; i < arr.length; i++) {
				if(typeof arr[i] === 'object') {
					newArr.push(this.cloneObj(arr[i]));
				} else {
					newArr.push(this[i]);
				}
			}
			return newArr;
		}
	};
	//声明定义变量
	var dt=null,dtDataA, dtColumns, hcDataA,hcxAxis,hcSeries;
	init();

	function init() {
	    dtDataA = cloneOpr.cloneArr(ajaxData.Table);
		dtColumns = dtColumnsFn(dtDataA);
		hcDataA = cloneOpr.cloneArr(ajaxData.Table);
		hcxAxis=hcxAxisFn(hcDataA);
		hcSeries = rowTocolHasFilter(hcDataA);
		//initDT();
		initHC();
	}

	function dtColumnsFn(arr) {
		var i = 0,
			result = [];
		for(var j in arr[0]) {
			result[i] = {};
			result[i]["data"] = j;
			result[i]["title"] = j;
			i++;
		}
		return result;
	}

	function selectOption(domId, opr) {
		var obj = document.getElementById(domId);
		var i = obj.selectedIndex;
		var t = obj.options[i].text;
		var v = obj.options[i].value;
		if(opr == "i") {
			return i;
		}
		if(opr == "t") {
			return t;
		}
		if(opr == "v") {
			return v;
		}
	}
	function hcxAxisFn(arr){
		var result=[];
		for(var i=0;i<arr.length;i++){
			for(var j in arr[i]){
				if(typeof j=="string"&&j=="日期"){
					result.push(arr[i][j]);
				}
			}
		}
		return result;
	}
	function rowTocolHasFilter(arr){
		var result=[],hcResult=[];
		var filterField=".日期.";
		for(var i=0;i<arr.length;i++){
			var k=0;
			for(var j in arr[i]){
				if(filterField.indexOf("."+j+".")==-1){
					if(typeof result[k]=="undefined"){
						result[k]=arr[i][j];
					}else{
						result[k]=result[k]+","+arr[i][j];
					}
					k++;
				}
			}
		}
		var l=0;
		for(var m in arr[0]){
			var obj={};
			if(filterField.indexOf("."+m+".")==-1){
				obj["name"]=m;
				obj["data"]=result[l].split(",");
				hcResult[l]=obj;
				l++;
			}
		}
		for(var n=0;n<hcResult.length;n++){
			for(var h=0;h<hcResult[n]["data"].length;h++){
				hcResult[n]["data"][h]=parseFloat(hcResult[n]["data"][h]);
			}
		}
		return hcResult;
	}
	//function initDT() {
	//	if(typeof dt === "object" && dt !== null) {
	//		dt.fnDestroy();
	//		$('#dt-narrow').empty();
	//		dt = null;
	//	}
	//	dt = $('#dt-narrow').dataTable({
	//		//"ajax": "data/objects.txt",
	//		"data": dtDataA,
	//		"ordering": true,
	//		"columns": dtColumns,
	//		"dom": '<"top">rt<"bottom"ilpf><"clear">',
	//		//		"dom": '<"top">rtB<"dt-buttons"><"bottom"ilpf><"clear">',
	//		"language": {
	//			"sProcessing": "处理中...",
	//			"sZeroRecords": "没有匹配结果",
	//			"sInfoPostFix": "",

	//			"sSearch": "搜索:",

	//			"sUrl": "",

	//			"sEmptyTable": "表中数据为空",

	//			"sLoadingRecords": "载入中...",

	//			"sInfoThousands": ",",
	//			"lengthMenu": "每页 _MENU_ 条记录",
	//			"zeroRecords": "没有找到记录",
	//			"info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
	//			"infoEmpty": "无记录",
	//			"infoFiltered": "(从 _MAX_ 条记录过滤)",

	//			"oPaginate": {

	//				"sFirst": "首页",

	//				"sPrevious": "上页",

	//				"sNext": "下页",

	//				"sLast": "末页"

	//			},

	//			"oAria": {

	//				"sSortAscending": ":以升序排列此列",

	//				"sSortDescending": ":以降序排列此列"

	//			}

	//		},
	//		//"bStateSave": true,
	//		//"sScrollX": "100%",
	//		"scrollY": true,
	//		"scrollX": true,
	//		//"bScrollCollapse": true,
	//		"iDisplayLength": 10,
	//		"aLengthMenu": [
	//			[10, 50, 100, -1],
	//			[10, 50, 100, "全部"]
	//		],
	//		// "pageLength":31,
	//		"bLengthChange": true,
	//		"pagingType": "full", //"full_numbers",
	//		buttons: [
	//			//    {
	//			//    extend: 'excelHtml5',
	//			//    text: '<span class="glyphicon glyphicon-export" style="color:#3AF"></span>&nbsp;<span style="color:blue;">excel</span>',
	//			//    customize: function (xlsx) {
	//			//        var sheet = xlsx.xl.worksheets['sheet1.xml'];
	//			//    }
	//			//},
	//			//{
	//			//    extend: 'csv',
	//			//    text: '<span class="glyphicon glyphicon-export" style="color:#3AF"></span>&nbsp;<span style="color:blue;">csv</span>',
	//			//    exportOptions: {
	//			//        modifier: {
	//			//            search: 'none'
	//			//        }
	//			//    }
	//			//}
	//		]
	//	}); //dataTables
	//}
	function initHC(){
		 $('#linechart').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: '曲线分析'
            },
            subtitle: {
                text: null//'Source: WorldClimate.com'
            },
            xAxis: {
                categories: hcxAxis
            },
            yAxis: {
                title: {
                    text: null//'Temperature (°C)'
                }
            },
            colors: ['#ff3333', '#33ff66', '#8bbc21', '#910000', '#1aadce',
       '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
            credits: {
                enabled: false
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: hcSeries
		 });

		 var chart = $('#linechart').highcharts();
		 for (var i = 2; i < chart.series.length; i++) {
		     chart.series[i].hide();
		 }
	    console.log(chart.series[0].data[0]);
	    setTimeout(shiftLines, 1000);

	}


    function getDateString(dateBase,tSpan) {
        var dt = new Date(dateBase);
        dt.setDate(dt.getDate()+tSpan);
        var year = dt.getFullYear().toString();
        var month = (dt.getMonth() + 101).toString().substr(1, 2);
        var day = (dt.getDate() + 100).toString().substr(1, 2);
        return year + '-' + month + '-' + day;
    }


    function shiftLines() {
        counter++;
        var dt = new Date();
	    var chart = $('#linechart').highcharts();
	    for (var i = 0; i < chart.series.length; i++) {
	        chart.series[i].addPoint([getDateString(dt, counter), Math.round(Math.random() * 10000) / 100 ], true, true);
	    }
	    setTimeout(shiftLines, 1000);
    }
}); //ready

