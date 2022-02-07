const fs = require('fs').promises;

import { version,
Sensor,
Datum,
TimeSeries
} from '.';

let data;
let sensorObjects = [];

beforeAll(async () => {
  data = await fs.readFile('./resources/sensors_data.json', {
    encoding: 'utf8',
  });
  data = JSON.parse(data);
   data.forEach(s => {
    sensorObjects.push(new Sensor(s.id, s.name, s.type, s.data));
  });
});

describe('Sensor model tests', () => {
  describe('Dummy tests', () => {
    test('data is loaded with 3 elements', () => {
      expect(data.length).toBe(3);
    });
    test('version number from the model', () => {
      expect(version()).toBe('1.0.0');
    });
  });
  
   describe('suite des tests', () => {
    test('valeur de la propriété id du premier Sensor', () => {
      expect(sensorObjects[0]._id).toBe(1234);
    });
    test('valeur de la propriété name du premier Sensor', () => {
      expect(sensorObjects[0]._name).toBe('Température Bureau');
    });
    test('valeur de la propriété \'type\' du premier Sensor', () => {
      expect(sensorObjects[0]._type._name).toBe('TEMPERATURE');
    });
    test('type de la propriété \'data\' du premier Sensor', () => {
      expect(sensorObjects[0]._data instanceof TimeSeries)
        .toBe(true);
    });
    
    test('valeur de la propriété id du deuxieme Sensor', () => {
      expect(sensorObjects[1]._id).toBe(10245);
    });
    test('valeur de la propriété name du deuxieme Sensor', () => {
      expect(sensorObjects[1]._name).toBe('Porte du Garage');
    });
    test('valeur de la propriété \'type\' du deuxieme Sensor', () => {
      expect(sensorObjects[1]._type._name).toBe('DOOR');
    });
    test('type de la propriété \'data\' du deuxieme Sensor', () => {
      expect(sensorObjects[1]._data instanceof Datum).toBe(true);
    });
    test('valeur de la propriété \'value\' du deuxieme Sensor', () => {
      expect(sensorObjects[1]._data._value).toBe(0);
    });
    
    test('valeur de la propriété id du troisieme Sensor', () => {
      expect(sensorObjects[2]._id).toBe(2222);
    });
    test('valeur de la propriété name du troisieme Sensor', () => {
      expect(sensorObjects[2]._name).toBe('Ventilateur Ordinateur Bureau');
    });
    test('valeur de la propriété \'type\' du deuxieme Sensor', () => {
      expect(sensorObjects[2]._type._name).toBe('FAN_SPEED');
    });
    
  });
});
