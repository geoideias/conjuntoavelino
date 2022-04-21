var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_GERAL_QUADRAS_1 = new ol.format.GeoJSON();
var features_GERAL_QUADRAS_1 = format_GERAL_QUADRAS_1.readFeatures(json_GERAL_QUADRAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GERAL_QUADRAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GERAL_QUADRAS_1.addFeatures(features_GERAL_QUADRAS_1);
var lyr_GERAL_QUADRAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GERAL_QUADRAS_1, 
                style: style_GERAL_QUADRAS_1,
                interactive: true,
                title: '<img src="styles/legend/GERAL_QUADRAS_1.png" /> GERAL_QUADRAS'
            });

lyr_GooglecnSatellite_0.setVisible(true);lyr_GERAL_QUADRAS_1.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_GERAL_QUADRAS_1];
lyr_GERAL_QUADRAS_1.set('fieldAliases', {'id': 'id', 'COD': 'COD', 'PROP': 'PROP', 'END': 'END', 'x': 'x', });
lyr_GERAL_QUADRAS_1.set('fieldImages', {'id': 'TextEdit', 'COD': 'TextEdit', 'PROP': 'TextEdit', 'END': 'TextEdit', 'x': 'TextEdit', });
lyr_GERAL_QUADRAS_1.set('fieldLabels', {'id': 'no label', 'COD': 'inline label', 'PROP': 'header label', 'END': 'inline label', 'x': 'no label', });
lyr_GERAL_QUADRAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});