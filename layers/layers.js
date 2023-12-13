var wms_layers = [];

var lyr_Pente_CCPP_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pente_CCPP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Pente_CCPP_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [249627.292514, 6343021.713067, 296548.061015, 6384183.348567]
                            })
                        });
var format_Bassins_V_1 = new ol.format.GeoJSON();
var features_Bassins_V_1 = format_Bassins_V_1.readFeatures(json_Bassins_V_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bassins_V_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bassins_V_1.addFeatures(features_Bassins_V_1);
var lyr_Bassins_V_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bassins_V_1, 
                style: style_Bassins_V_1,
                interactive: true,
    title: 'Bassins_V<br />\
    <img src="styles/legend/Bassins_V_1_0.png" /> 1<br />\
    <img src="styles/legend/Bassins_V_1_1.png" /> 10<br />\
    <img src="styles/legend/Bassins_V_1_2.png" /> 11<br />\
    <img src="styles/legend/Bassins_V_1_3.png" /> 12<br />\
    <img src="styles/legend/Bassins_V_1_4.png" /> 13<br />\
    <img src="styles/legend/Bassins_V_1_5.png" /> 14<br />\
    <img src="styles/legend/Bassins_V_1_6.png" /> 15<br />\
    <img src="styles/legend/Bassins_V_1_7.png" /> 16<br />\
    <img src="styles/legend/Bassins_V_1_8.png" /> 17<br />\
    <img src="styles/legend/Bassins_V_1_9.png" /> 18<br />\
    <img src="styles/legend/Bassins_V_1_10.png" /> 2<br />\
    <img src="styles/legend/Bassins_V_1_11.png" /> 3<br />\
    <img src="styles/legend/Bassins_V_1_12.png" /> 4<br />\
    <img src="styles/legend/Bassins_V_1_13.png" /> 5<br />\
    <img src="styles/legend/Bassins_V_1_14.png" /> 6<br />\
    <img src="styles/legend/Bassins_V_1_15.png" /> 7<br />\
    <img src="styles/legend/Bassins_V_1_16.png" /> 8<br />\
    <img src="styles/legend/Bassins_V_1_17.png" /> 9<br />'
        });
var format_Cours_eau_VFF_2 = new ol.format.GeoJSON();
var features_Cours_eau_VFF_2 = format_Cours_eau_VFF_2.readFeatures(json_Cours_eau_VFF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_eau_VFF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_eau_VFF_2.addFeatures(features_Cours_eau_VFF_2);
var lyr_Cours_eau_VFF_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cours_eau_VFF_2, 
                style: style_Cours_eau_VFF_2,
                interactive: true,
    title: 'Cours_eau_VFF<br />\
    <img src="styles/legend/Cours_eau_VFF_2_0.png" /> 1<br />\
    <img src="styles/legend/Cours_eau_VFF_2_1.png" /> 2<br />\
    <img src="styles/legend/Cours_eau_VFF_2_2.png" /> 3<br />\
    <img src="styles/legend/Cours_eau_VFF_2_3.png" /> 4<br />\
    <img src="styles/legend/Cours_eau_VFF_2_4.png" /> 5<br />'
        });
var format_EPCI_CCPP_3 = new ol.format.GeoJSON();
var features_EPCI_CCPP_3 = format_EPCI_CCPP_3.readFeatures(json_EPCI_CCPP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_CCPP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_CCPP_3.addFeatures(features_EPCI_CCPP_3);
var lyr_EPCI_CCPP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_CCPP_3, 
                style: style_EPCI_CCPP_3,
                interactive: true,
                title: '<img src="styles/legend/EPCI_CCPP_3.png" /> EPCI_CCPP'
            });

lyr_Pente_CCPP_0.setVisible(true);lyr_Bassins_V_1.setVisible(true);lyr_Cours_eau_VFF_2.setVisible(true);lyr_EPCI_CCPP_3.setVisible(true);
var layersList = [lyr_Pente_CCPP_0,lyr_Bassins_V_1,lyr_Cours_eau_VFF_2,lyr_EPCI_CCPP_3];
lyr_Bassins_V_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_Cours_eau_VFF_2.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_EPCI_CCPP_3.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Bassins_V_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'Range', 'NAME': 'TextEdit', });
lyr_Cours_eau_VFF_2.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_EPCI_CCPP_3.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Bassins_V_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', });
lyr_Cours_eau_VFF_2.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_EPCI_CCPP_3.set('fieldLabels', {'ID': 'inline label', 'CODE_SIREN': 'inline label', 'NATURE': 'inline label', 'NOM': 'inline label', 'DATE_CREAT': 'inline label', 'DATE_MAJ': 'inline label', 'DATE_APP': 'inline label', 'DATE_CONF': 'inline label', 'ID_AUT_ADM': 'inline label', });
lyr_EPCI_CCPP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});