//"use strict";
jQuery.noConflict();
jQuery(document).ready(function ($) {
    $('#map').height($(document).height() - $('#navbar').height() - 5);


	var map;
	//默认值  centerAndZoom
	var center = new BMap.Point(116.404, 39.915);
	var zoom = 11;
	var colorArr = ["blue", "red", "green", "pink", "green"];
	var myIcon = new BMap.Icon("/ShangQing/track_map_icon.png", new BMap.Size(30, 47));
	//var mapStyleArr=["bluish","light","googlelite","grassgreen","hardedge"];
	//默认值  normal  可选  bluish  light  googlelite  grassgreen
	var mapStyle = "light"; //mapStyleArr[~~(mapStyleArr.length*Math.random())];
	var boundary = "中牟";

	var bmapData = [{
	    lng: 113.921136,
	    lat: 34.613278,
	    label: "墒情",
	    title: "河范",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	    "土湿5": Math.round(Math.random() * 100),
	    "土湿6": Math.round(Math.random() * 100),
	}, {
	    lng: 113.946145,
	    lat: 34.613635,
	    label: "墒情",
	    title: "前吕镇",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	    "土湿5": Math.round(Math.random() * 100),
	}, {
	    lng: 113.968279,
	    lat: 34.604603,
	    label: "墒情",
	    title: "张堂村",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	}, {
	    lng: 113.980209,
	    lat: 34.57655,
	    label: "墒情",
	    title: "小庄",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	    "土湿5": Math.round(Math.random() * 100),
	    "土湿6": Math.round(Math.random() * 100),
	}, {
	    lng: 113.927604,
	    lat: 34.581899,
	    label: "墒情",
	    title: "闫家",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	    "土湿5": Math.round(Math.random() * 100),
	}, {
	    lng: 113.902451,
	    lat: 34.604721,
	    label: "墒情",
	    title: "高陈",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	}, {
	    lng: 113.949738,
	    lat: 34.637161,
	    label: "墒情",
	    title: "西岗",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	    "土湿5": Math.round(Math.random() * 100),
	    "土湿6": Math.round(Math.random() * 100),
	}, {
	    lng: 113.943989,
	    lat: 34.600562,
	    label: "墒情",
	    title: "树头村",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	}, {
	    lng: 113.89699,
	    lat: 34.573459,
	    label: "墒情",
	    title: "黑牛张村",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	    "土湿4": Math.round(Math.random() * 100),
	    "土湿5": Math.round(Math.random() * 100),
	    "土湿6": Math.round(Math.random() * 100),
	}, {
	    lng: 113.932778,
	    lat: 34.569654,
	    label: "墒情",
	    title: "后王村",
	    imgsrc: "/ShangQing/qiqiang2.jpg",
	    "土湿1": Math.round(Math.random() * 100),
	    "土湿2": Math.round(Math.random() * 100),
	    "土湿3": Math.round(Math.random() * 100),
	}];
	map = new BMap.Map("map", {
		enableHighResolution: true,
		enableMapClick: false,
	});
	map.centerAndZoom(center, zoom);
	map.setMapStyle({
		style: mapStyle
	});

	////--#region---start
	// 复杂的自定义覆盖物
	function ComplexCustomOverlay(point, text, mouseoverText, obj, colorObj) {
		this._point = point;
		this._text = text;
		this._overText = mouseoverText;
		this._obj = obj;
		this._colorObj = colorObj;
	}
	ComplexCustomOverlay.prototype = new BMap.Overlay();
	ComplexCustomOverlay.prototype.initialize = function(map) {
		this._map = map;
		colorObj = this._colorObj;
		var div = this._div = document.createElement("div");
		div.style.position = "absolute";
		div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
		div.style.backgroundColor = colorObj.txtcolor; //"white";// "#EE5D5B";
		div.style.border = "none";
		div.style.color = "black"; // "white"; //// "white";
		div.style.height = "24px";
		div.style.padding = "auto";
		div.style.lineHeight = "24px";
		div.style.whiteSpace = "nowrap";
		div.style.MozUserSelect = "none";
		div.style.fontSize = "12px";
		div.style.letterSpacing = "2px";
		div.style.paddingLeft = "4px";
		div.style.paddingRight = "4px";
		//div.style.fontWeight = "bold";
		div.style.textAlign = "center";
		div.style.margin = "0 auto";
		div.style.fontFamily = "微软雅黑";
		var span = this._span = document.createElement("span");
		div.appendChild(span);
		span.appendChild(document.createTextNode(this._text));
		var that = this;

		var arrow = this._arrow = document.createElement("div");
		//arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
		arrow.style.position = "absolute";
		arrow.style.width = "10px";
		arrow.style.height = "10px";
		arrow.style.top = "40px";
		arrow.style.left = "20px";
		arrow.style.overflow = "hidden";
		div.appendChild(arrow);
		var overBeforeColor;
		div.onmouseover = function() {
			overBeforeColor = this.style.backgroundColor;
			div.style.color = "white";
			this.style.backgroundColor = "#cc00cc"; // "#6BADCA";
			this.style.borderColor = "none"; // "#0000ff";
			this.getElementsByTagName("span")[0].innerHTML = that._overText;
			arrow.style.backgroundPosition = "0px -20px";
		}

		div.onmouseout = function() {
			this.style.backgroundColor = overBeforeColor; // colorObj.txtcolor; //"white"; "#EE5D5B";
			div.style.color = "black";
			this.style.borderColor = "none"; //  "#BC3B3A";
			this.getElementsByTagName("span")[0].innerHTML = that._text;
			arrow.style.backgroundPosition = "0px 0px";
		}
		map.getPanes().labelPane.appendChild(div);

		return div;
	}
	ComplexCustomOverlay.prototype.draw = function() {
			var map = this._map;
			var pixel = map.pointToOverlayPixel(this._point);
			this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + 38 + "px";
			this._div.style.top = pixel.y - 20 + "px";
		}
		////#region---end

	bmapMain();

	function bmapMain() {
		bmapInit();
	}

	function bmapInit() {
		//卫星地图  mapType:BMAP_SATELLITE_MAP,
		//			map = new BMap.Map("bmap", {
		//				enableHighResolution: true,
		//				enableMapClick: false,
		//			});
		//			map.centerAndZoom(center, zoom);
		//			map.setMapStyle({
		//				style: mapStyle
		//			});
		setMapEvent();
	}

	function setMapEvent() {
		map.enableScrollWheelZoom();
		map.enableKeyboard();
		map.enableDragging();
		map.enableDoubleClickZoom();
		map.enableAutoResize();
		addMapControl();
	}

	function addMapControl() {
		var scaleControl = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_BOTTOM_LEFT
		});
		scaleControl.setUnit(BMAP_UNIT_METRIC);
		map.addControl(scaleControl);
		var navControl = new BMap.NavigationControl({
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			type: 3
		});
		map.addControl(navControl);
		map.addControl(new BMap.MapTypeControl());
		getBoundary(boundary);
		addMarker(bmapData);
		addCustomMarker(bmapData);
	}

	function addMarker(aArr) {
		var point, marker;
		var pointArr = [],
			markerArr = [];
		for(var i = 0, len = aArr.length; i < len; i++) {
			point = new BMap.Point(aArr[i].lng, aArr[i].lat);

			marker = new BMap.Marker(point, {
				icon: myIcon
			});
			markerArr.push(marker);
			//map.addOverlay(marker);
			addSearchInfoWindow(marker, aArr[i], i);
		}
		var markerClusterer = new BMapLib.MarkerClusterer(map, {
			markers: markerArr
		});
	}

	function addCustomMarker(aArr) {
		var labelbgColor = "#ffffff";
		var point, marker, myCompOverlay;
		var pointArr = [],
			markerArr = [];
		for(var i = 0,len=aArr.length; i < len; i++) {
			point = new BMap.Point(aArr[i].lng, aArr[i].lat);
			pointArr.push(point);
			var label = aArr[i].label,
				mouseoverTxt = aArr[i].label+"&nbsp;-&nbsp;"+aArr[i].title;
			myCompOverlay = new ComplexCustomOverlay(point, label, mouseoverTxt, aArr[i],{
					txtcolor: labelbgColor
				});
			map.addOverlay(myCompOverlay);
		}
		//map.setViewport(pointArr);
	}

	function markerMove(m) {
		m.enableDragging();
		m.addEventListener("dragend", function(e) {
			console.log(e.point.lng + "," + e.point.lat);
		});
		//	m.addEventListener("mouseover", function(e) {
		//m.setAnimation(null); 
		//});
		var timer = setTimeout(function() {
			m.setAnimation(null);
		}, 1500);
	}

	function addSearchInfoWindow(m, aObj, i) {
		var sTitle = ['					<a class="h3" style=\'margin:0 0 0 0;padding:0.2em 0\' href="#/HistoryData">',
			aObj.title,
			' </a> '
		].join("");
		var contentArr = ['<div id="infowindow' + i + '" data-id="infowindow', i, '">',

			'					<div style="">',
			'						<img style=\'float:right;margin:2px;\' id=\'imgDemo\' src=\'' + aObj.imgsrc + '\' width=\'90\' height=\'90\' title=\'天安门\'/>',
			'					</div>',
			'					',
			'					</div>'
		];

		for(var q in aObj) {
			//  '					<p><span class="t">类别:</span><span>', aObj['label'], '</span></p>',//每一个字段数据
			if(q != "lng" && q != "lat" && q != "label" && q != "title" && q != "imgsrc") {
				contentArr.splice(-1, 0, '<p><span class="t">' + q + '</span>' + ":&nbsp;" + '<span>' + aObj[q] + '</span></p>');
			}
		}
		var content = contentArr.join("");

		//创建检索信息窗口对象
		var searchInfoWindow = null;
		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title: sTitle, //标题
			width: 290, //宽度
			height: "auto", //高度
			panel: "panel", //检索结果面板
			enableAutoPan: true, //自动平移
			enableMessage: false
				//			,
				//			searchTypes   :[
				//				BMAPLIB_TAB_SEARCH,   //周边检索
				//				BMAPLIB_TAB_TO_HERE,  //到这里去
				//				BMAPLIB_TAB_FROM_HERE //从这里出发
				//			]
		});
		m.addEventListener("click", function(e) {
			searchInfoWindow.open(m);
		});
				m.addEventListener("mouseover", function(e) {
					searchInfoWindow.open(m);
				});

	}

	function getBoundary(cityname) {
		var bdary = new BMap.Boundary();
		var color = "blue"; // colorArr[~~(Math.random() * colorArr.length)];
		bdary.get(cityname, function(rs) {
			var count = rs.boundaries.length;
			for(var i = 0; i < count; i++) {
				var ply = new BMap.Polygon(rs.boundaries[i], {
					strokeWeight: 2,
					setFillColor: null,
					strokeColor: color,
					fillOpacity: 0.1
				});
				if(i == 0) {
					var plycenter = ply;
				}
				map.addOverlay(plycenter);
				map.setViewport(plycenter.getPath());
			}
		});
		//		setTimeout(function(){
		//		    limitBround();
		//		},500);
	}

	function　 limitBround() {
		var bs = map.getBounds(); //获取可视区域
		var bssw = bs.getSouthWest(); //可视区域左下角
		var bsne = bs.getNorthEast(); //可视区域右上角
		//alert("当前地图可视范围是：" + bssw.lng + "," + bssw.lat + "到" + bsne.lng + "," + bsne.lat);
		var b = new BMap.Bounds(new BMap.Point(bssw.lng, bssw.lat), new BMap.Point(bsne.lng, bsne.lat));
		try {
			BMapLib.AreaRestriction.setBounds(map, b);
		} catch(e) {
			alert(e);
		}
	}

}); //ready