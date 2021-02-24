import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import { getCenter } from 'ol/extent';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
import { getFair, getFairs } from './fair';
import Feature from 'ol/Feature';

var img = new Image();

img.onload = function () {
    var height = img.height;
    var width = img.width;

    var extent = [0, 0, width, height];
    var projection = new Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: extent,
    });

    var features = [];

    var allPoints = getFairs();

    Object.keys(allPoints).forEach(function (key) {

        var element = allPoints[key];

        var iconFeature = new Feature({
            geometry: new Point([element.x, element.y])
        });

        var iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'pin-green.png',
            }),
        });

        iconFeature.setStyle(iconStyle);
        iconFeature.setId(key);
        features.push(iconFeature);
    });

    var vectorSource = new VectorSource({
        features: features
    });

    var vectorLayer = new VectorLayer({
        source: vectorSource
    });

    var map = new Map({
        layers: [
            new ImageLayer({
                source: new Static({
                    url: 'fair-area.jpeg',
                    projection: projection,
                    imageExtent: extent
                })
            }),
            vectorLayer
        ],
        target: document.getElementById('map'),
        view: new View({
            projection: projection,
            center: getCenter(extent),
            zoom: 2.3,
            maxZoom: 8,
            minZoom: 1.5
        }),
    });

    map.on('click', function (evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
            return feature;
        });
        if (feature) {

            var id = feature.getId();
            var fair = getFair(id);

            var name = document.getElementById('fairOwner');
            name.innerHTML = fair.name;

            var description = document.getElementById('fairInfo');
            description.innerHTML = fair.description;

            var link = document.getElementById('anchor');
            link.href = fair.website;
            link.text = fair.name;

        } else {
            $(element).popover('dispose');
        }
    });

    map.on('pointermove', function (e) {
        if (e.dragging) {
            $(element).popover('dispose');
            return;
        }
        var pixel = map.getEventPixel(e.originalEvent);
        var hit = map.hasFeatureAtPixel(pixel);
        map.getTarget().style.cursor = hit ? 'pointer' : '';
    });
}

img.src = '/fair-area.jpeg';

