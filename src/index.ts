import PlaceController from './core/PlaceController'
import PlaceView from './core/PlaceView'
import PlaceModel from './core/PlaceModel'

const model: PlaceModel = new PlaceModel({
    lat: 35.00004,
    lng: 40.54545
});
const view: PlaceView = new PlaceView(model);

const controller: PlaceController = new PlaceController(view, model);