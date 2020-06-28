var wms_layers = [];

var format_BDsolACHCad97_0 = new ol.format.GeoJSON();
var features_BDsolACHCad97_0 = format_BDsolACHCad97_0.readFeatures(json_BDsolACHCad97_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDsolACHCad97_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDsolACHCad97_0.addFeatures(features_BDsolACHCad97_0);
var lyr_BDsolACHCad97_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDsolACHCad97_0, 
                style: style_BDsolACHCad97_0,
                interactive: true,
    title: 'BDsolACHCad97<br />\
    <img src="styles/legend/BDsolACHCad97_0_0.png" /> 0<br />\
    <img src="styles/legend/BDsolACHCad97_0_1.png" /> 1.000000<br />\
    <img src="styles/legend/BDsolACHCad97_0_2.png" /> 2.000000<br />\
    <img src="styles/legend/BDsolACHCad97_0_3.png" /> 3.000000<br />\
    <img src="styles/legend/BDsolACHCad97_0_4.png" /> 4.000000<br />\
    <img src="styles/legend/BDsolACHCad97_0_5.png" /> 5.000000<br />\
    <img src="styles/legend/BDsolACHCad97_0_6.png" /> <br />'
        });
var format_SondagesCad97_1 = new ol.format.GeoJSON();
var features_SondagesCad97_1 = format_SondagesCad97_1.readFeatures(json_SondagesCad97_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SondagesCad97_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SondagesCad97_1.addFeatures(features_SondagesCad97_1);
var lyr_SondagesCad97_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SondagesCad97_1, 
                style: style_SondagesCad97_1,
                interactive: true,
    title: 'SondagesCad97<br />\
    <img src="styles/legend/SondagesCad97_1_0.png" /> PM0<br />\
    <img src="styles/legend/SondagesCad97_1_1.png" /> PM1<br />\
    <img src="styles/legend/SondagesCad97_1_2.png" /> PM2<br />\
    <img src="styles/legend/SondagesCad97_1_3.png" /> SC0<br />\
    <img src="styles/legend/SondagesCad97_1_4.png" /> SC1<br />\
    <img src="styles/legend/SondagesCad97_1_5.png" /> SC2<br />\
    <img src="styles/legend/SondagesCad97_1_6.png" /> SP0<br />\
    <img src="styles/legend/SondagesCad97_1_7.png" /> SP1<br />\
    <img src="styles/legend/SondagesCad97_1_8.png" /> SP2<br />'
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ilots20200608Cad97_3 = new ol.format.GeoJSON();
var features_Ilots20200608Cad97_3 = format_Ilots20200608Cad97_3.readFeatures(json_Ilots20200608Cad97_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ilots20200608Cad97_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ilots20200608Cad97_3.addFeatures(features_Ilots20200608Cad97_3);
var lyr_Ilots20200608Cad97_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ilots20200608Cad97_3, 
                style: style_Ilots20200608Cad97_3,
                interactive: true,
    title: 'Ilots20200608Cad97<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_0.png" /> C_001<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_1.png" /> C_003<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_2.png" /> C_004<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_3.png" /> C_005<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_4.png" /> C_007<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_5.png" /> C_009<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_6.png" /> C_010<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_7.png" /> C_011<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_8.png" /> C_012<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_9.png" /> C_014<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_10.png" /> C_015<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_11.png" /> C_016<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_12.png" /> C_020<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_13.png" /> C_021<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_14.png" /> C_023<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_15.png" /> C_024<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_16.png" /> C_025<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_17.png" /> C_026<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_18.png" /> C_027<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_19.png" /> C_028<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_20.png" /> C_029<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_21.png" /> C_030<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_22.png" /> C_031<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_23.png" /> C_032<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_24.png" /> C_033<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_25.png" /> C_035<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_26.png" /> C_036<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_27.png" /> C_037<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_28.png" /> C_038<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_29.png" /> C_039<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_30.png" /> C_040<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_31.png" /> C_042<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_32.png" /> C_043<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_33.png" /> C_044<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_34.png" /> C_046<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_35.png" /> C_047<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_36.png" /> C_048<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_37.png" /> C_049<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_38.png" /> C_050<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_39.png" /> C_051<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_40.png" /> C_052<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_41.png" /> C_053<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_42.png" /> C_054<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_43.png" /> C_055<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_44.png" /> C_056<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_45.png" /> C_057<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_46.png" /> C_058<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_47.png" /> C_059<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_48.png" /> C_060<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_49.png" /> C_061<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_50.png" /> C_063<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_51.png" /> C_064<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_52.png" /> C_065<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_53.png" /> C_066<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_54.png" /> C_067<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_55.png" /> C_068<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_56.png" /> C_069<br />\
    <img src="styles/legend/Ilots20200608Cad97_3_57.png" /> <br />'
        });
var format_Courbesdeniveau_4 = new ol.format.GeoJSON();
var features_Courbesdeniveau_4 = format_Courbesdeniveau_4.readFeatures(json_Courbesdeniveau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbesdeniveau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbesdeniveau_4.addFeatures(features_Courbesdeniveau_4);
var lyr_Courbesdeniveau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Courbesdeniveau_4, 
                style: style_Courbesdeniveau_4,
                interactive: true,
                title: '<img src="styles/legend/Courbesdeniveau_4.png" /> Courbes de niveau'
            });
var format_Trace20200608Cad97_5 = new ol.format.GeoJSON();
var features_Trace20200608Cad97_5 = format_Trace20200608Cad97_5.readFeatures(json_Trace20200608Cad97_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trace20200608Cad97_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trace20200608Cad97_5.addFeatures(features_Trace20200608Cad97_5);
var lyr_Trace20200608Cad97_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trace20200608Cad97_5, 
                style: style_Trace20200608Cad97_5,
                interactive: true,
                title: '<img src="styles/legend/Trace20200608Cad97_5.png" /> Trace20200608Cad97'
            });
var format_Borne20200608Cad97_6 = new ol.format.GeoJSON();
var features_Borne20200608Cad97_6 = format_Borne20200608Cad97_6.readFeatures(json_Borne20200608Cad97_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Borne20200608Cad97_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borne20200608Cad97_6.addFeatures(features_Borne20200608Cad97_6);
var lyr_Borne20200608Cad97_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Borne20200608Cad97_6, 
                style: style_Borne20200608Cad97_6,
                interactive: true,
                title: '<img src="styles/legend/Borne20200608Cad97_6.png" /> Borne20200608Cad97'
            });
var format_Fourreaux20200608Cad97_7 = new ol.format.GeoJSON();
var features_Fourreaux20200608Cad97_7 = format_Fourreaux20200608Cad97_7.readFeatures(json_Fourreaux20200608Cad97_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fourreaux20200608Cad97_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fourreaux20200608Cad97_7.addFeatures(features_Fourreaux20200608Cad97_7);
var lyr_Fourreaux20200608Cad97_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fourreaux20200608Cad97_7, 
                style: style_Fourreaux20200608Cad97_7,
                interactive: true,
                title: '<img src="styles/legend/Fourreaux20200608Cad97_7.png" /> Fourreaux20200608Cad97'
            });
var format_Parcelles97_8 = new ol.format.GeoJSON();
var features_Parcelles97_8 = format_Parcelles97_8.readFeatures(json_Parcelles97_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles97_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles97_8.addFeatures(features_Parcelles97_8);
var lyr_Parcelles97_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelles97_8, 
                style: style_Parcelles97_8,
                interactive: true,
                title: '<img src="styles/legend/Parcelles97_8.png" /> Parcelles97'
            });
var group_Campagne_Sondages_22062020_v2 = new ol.layer.Group({
                                layers: [lyr_SondagesCad97_1,],
                                title: "Campagne_Sondages_22-06-2020_v2"});
var group_Pdologie = new ol.layer.Group({
                                layers: [lyr_BDsolACHCad97_0,],
                                title: "Pédologie"});

lyr_BDsolACHCad97_0.setVisible(true);lyr_SondagesCad97_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Ilots20200608Cad97_3.setVisible(true);lyr_Courbesdeniveau_4.setVisible(true);lyr_Trace20200608Cad97_5.setVisible(true);lyr_Borne20200608Cad97_6.setVisible(true);lyr_Fourreaux20200608Cad97_7.setVisible(true);lyr_Parcelles97_8.setVisible(true);
var layersList = [group_Pdologie,group_Campagne_Sondages_22062020_v2,lyr_OpenStreetMap_2,lyr_Ilots20200608Cad97_3,lyr_Courbesdeniveau_4,lyr_Trace20200608Cad97_5,lyr_Borne20200608Cad97_6,lyr_Fourreaux20200608Cad97_7,lyr_Parcelles97_8];
lyr_BDsolACHCad97_0.set('fieldAliases', {'qc_id': 'qc_id', 'id_sol': 'id_sol', 'idsol': 'idsol', 'code_sol': 'code_sol', 'pos': 'pos', 'prof': 'prof', 'code_prof': 'code_prof', 'text': 'text', 'text_dom': 'text_dom', 'code_text': 'code_text', 'pier': 'pier', 'code_pier': 'code_pier', 'ru': 'ru', 'code_ru': 'code_ru', 'commune': 'commune', 'code_sol_1': 'code_sol_1', 'utn': 'utn', 'date_carto': 'date_carto', 'date_modif': 'date_modif', 'nb_carto': 'nb_carto', 'surface': 'surface', });
lyr_SondagesCad97_1.set('fieldAliases', {'qc_id_1': 'qc_id_1', 'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'type': 'type', 'autorisé': 'autorisé', });
lyr_Ilots20200608Cad97_3.set('fieldAliases', {'qc_id': 'qc_id', 'kml_style': 'kml_style', 'kml_folder': 'kml_folder', 'map_name': 'map_name', 'nom': 'nom', 'cabine': 'cabine', 'proprio_1': 'proprio_1', 'proprio_2': 'proprio_2', 'proprio_3': 'proprio_3', 'proprio_4': 'proprio_4', 'proprio_5': 'proprio_5', 'proprio_6': 'proprio_6', 'proprio_7': 'proprio_7', 'proprio_8': 'proprio_8', 'proprio_9': 'proprio_9', 'proprio_10': 'proprio_10', 'proprio_11': 'proprio_11', 'proprio_12': 'proprio_12', 'surface': 'surface', });
lyr_Courbesdeniveau_4.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'elev': 'elev', });
lyr_Trace20200608Cad97_5.set('fieldAliases', {'qc_id': 'qc_id', 'kml_style': 'kml_style', 'kml_folder': 'kml_folder', 'tessellate': 'tessellate', 'map_name': 'map_name', 'name': 'name', 'layer': 'layer', 'long_m': 'long_m', 'open': 'open', 'id_2': 'id_2', 'longueur': 'longueur', 'l_tot': 'l_tot', });
lyr_Borne20200608Cad97_6.set('fieldAliases', {'qc_id': 'qc_id', 'kml_style': 'kml_style', 'kml_folder': 'kml_folder', 'map_name': 'map_name', 'numéro': 'numéro', });
lyr_Fourreaux20200608Cad97_7.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'map_name': 'map_name', 'kml_style': 'kml_style', 'kml_folder': 'kml_folder', });
lyr_Parcelles97_8.set('fieldAliases', {'qc_id_1': 'qc_id_1', 'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'geo_parcel': 'geo_parcel', 'annee': 'annee', 'object_rid': 'object_rid', 'idu': 'idu', 'geo_sectio': 'geo_sectio', 'geo_subdse': 'geo_subdse', 'supf': 'supf', 'geo_indp': 'geo_indp', 'coar': 'coar', 'tex': 'tex', 'tex2': 'tex2', 'codm': 'codm', 'creat_date': 'creat_date', 'update_dat': 'update_dat', 'inspireid': 'inspireid', 'lot': 'lot', 'ogc_fid': 'ogc_fid', });
lyr_BDsolACHCad97_0.set('fieldImages', {'qc_id': '', 'id_sol': '', 'idsol': '', 'code_sol': '', 'pos': '', 'prof': '', 'code_prof': '', 'text': '', 'text_dom': '', 'code_text': '', 'pier': '', 'code_pier': '', 'ru': '', 'code_ru': '', 'commune': '', 'code_sol_1': '', 'utn': '', 'date_carto': '', 'date_modif': '', 'nb_carto': '', 'surface': '', });
lyr_SondagesCad97_1.set('fieldImages', {'qc_id_1': '', 'qc_id_0': '', 'qc_id': '', 'name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudemo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'draworder': '', 'icon': '', 'type': '', 'autorisé': '', });
lyr_Ilots20200608Cad97_3.set('fieldImages', {'qc_id': '', 'kml_style': '', 'kml_folder': '', 'map_name': '', 'nom': '', 'cabine': '', 'proprio_1': '', 'proprio_2': '', 'proprio_3': '', 'proprio_4': '', 'proprio_5': '', 'proprio_6': '', 'proprio_7': '', 'proprio_8': '', 'proprio_9': '', 'proprio_10': '', 'proprio_11': '', 'proprio_12': '', 'surface': '', });
lyr_Courbesdeniveau_4.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'id': '', 'elev': '', });
lyr_Trace20200608Cad97_5.set('fieldImages', {'qc_id': '', 'kml_style': '', 'kml_folder': '', 'tessellate': '', 'map_name': '', 'name': '', 'layer': '', 'long_m': '', 'open': '', 'id_2': '', 'longueur': '', 'l_tot': '', });
lyr_Borne20200608Cad97_6.set('fieldImages', {'qc_id': '', 'kml_style': '', 'kml_folder': '', 'map_name': '', 'numéro': '', });
lyr_Fourreaux20200608Cad97_7.set('fieldImages', {'qc_id': '', 'name': '', 'map_name': '', 'kml_style': '', 'kml_folder': '', });
lyr_Parcelles97_8.set('fieldImages', {'qc_id_1': '', 'qc_id_0': 'TextEdit', 'qc_id': 'TextEdit', 'geo_parcel': 'TextEdit', 'annee': 'TextEdit', 'object_rid': 'TextEdit', 'idu': 'TextEdit', 'geo_sectio': 'TextEdit', 'geo_subdse': 'TextEdit', 'supf': 'TextEdit', 'geo_indp': 'TextEdit', 'coar': 'TextEdit', 'tex': 'TextEdit', 'tex2': 'TextEdit', 'codm': 'TextEdit', 'creat_date': 'TextEdit', 'update_dat': 'TextEdit', 'inspireid': 'TextEdit', 'lot': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_BDsolACHCad97_0.set('fieldLabels', {});
lyr_SondagesCad97_1.set('fieldLabels', {});
lyr_Ilots20200608Cad97_3.set('fieldLabels', {'qc_id': 'no label', 'kml_style': 'no label', 'kml_folder': 'no label', 'map_name': 'no label', 'nom': 'no label', 'cabine': 'no label', 'proprio_1': 'no label', 'proprio_2': 'no label', 'proprio_3': 'no label', 'proprio_4': 'no label', 'proprio_5': 'no label', 'proprio_6': 'no label', 'proprio_7': 'no label', 'proprio_8': 'no label', 'proprio_9': 'no label', 'proprio_10': 'no label', 'proprio_11': 'no label', 'proprio_12': 'no label', 'surface': 'no label', });
lyr_Courbesdeniveau_4.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'id': 'no label', 'elev': 'no label', });
lyr_Trace20200608Cad97_5.set('fieldLabels', {'qc_id': 'no label', 'kml_style': 'no label', 'kml_folder': 'no label', 'tessellate': 'no label', 'map_name': 'no label', 'name': 'no label', 'layer': 'no label', 'long_m': 'no label', 'open': 'no label', 'id_2': 'no label', 'longueur': 'no label', 'l_tot': 'no label', });
lyr_Borne20200608Cad97_6.set('fieldLabels', {'qc_id': 'no label', 'kml_style': 'no label', 'kml_folder': 'no label', 'map_name': 'no label', 'numéro': 'no label', });
lyr_Fourreaux20200608Cad97_7.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'map_name': 'no label', 'kml_style': 'no label', 'kml_folder': 'no label', });
lyr_Parcelles97_8.set('fieldLabels', {'qc_id_1': 'no label', 'qc_id_0': 'no label', 'qc_id': 'no label', 'geo_parcel': 'header label', 'annee': 'no label', 'object_rid': 'no label', 'idu': 'no label', 'geo_sectio': 'no label', 'geo_subdse': 'no label', 'supf': 'no label', 'geo_indp': 'no label', 'coar': 'no label', 'tex': 'no label', 'tex2': 'no label', 'codm': 'no label', 'creat_date': 'no label', 'update_dat': 'no label', 'inspireid': 'no label', 'lot': 'no label', 'ogc_fid': 'no label', });
lyr_Parcelles97_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});