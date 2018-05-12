import PlaceController from './PlaceController'
import PlaceView from './PlaceView'
import PlaceModel from './PlaceModel'

const model: PlaceModel = new PlaceModel({
    lat: 35.00004,
    lng: 40.54545
});
const view: PlaceView = new PlaceView(model);

const controller: PlaceController = new PlaceController(view, model);