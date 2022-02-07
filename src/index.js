export const version = () => '1.0.0';

/* le modèle objet */
export class Data {
}
export class TimeSeries extends Data {

  constructor(values, labels) {
    super();
    this._values = values;
    this._labels = labels;
  }
}

export class Datum extends Data {


  constructor(value) {
    super();
    this._value = value;
  }
}
// Using of the enum pattern
export class SensorType {

  constructor(name) {
    this._name = name;
  }
}
export class Sensor {

  constructor(id, name, sensorType, data) {
    this._id = id;
    this._name = name;
    this._type = new SensorType(sensorType);
    if ('values' in data) {
      this._data = new TimeSeries(data.values, data.labels);
    } else if ('value' in data) {
      this._data = new Datum(data.value);
    } else {
      this._data = new Data(data);
    }
  }
}
