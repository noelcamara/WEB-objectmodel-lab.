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
