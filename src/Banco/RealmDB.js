import Realm from 'realm';
import {v4 as uuidv4} from 'uuid';

const HistorySchema = {
  name: 'History',
  properties: {
    id: 'string',
    info: 'string',
    type: 'string',
    date: 'string',
  },
  primaryKey: 'id',
};

const realm = async () => {
  return await Realm.open({
    path: 'qrreader',
    schema: [HistorySchema],
    schemaVersion: 1,
  });
};

export const setHistory = (item, type) => {
  realm.write(() => {
    realm.create('qrreader', {
      id: uuidv4(),
      info: item,
      type: type,
      date: Date(),
    });
  });
};

export const getHistoryFull = () => {
  const history = realm.objects('History');
  console.log(history);
  return history;
};
