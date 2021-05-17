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

const getRealm = async () => {
  return await Realm.open({
    path: 'qrreader',
    schema: [HistorySchema],
    schemaVersion: 1,
  });
};

export const setHistory = async (item, type) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.create('History', {
        id: uuidv4(),
        info: item,
        type: type,
        date: Date(),
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const getHistoryFull = async () => {
  const realm = await getRealm();
  try {
    const history = realm.objects('History');
    console.log(history);
    return history;
  } catch (error) {
    console.error(error);
  }
};

export const delHistoryFull = async () => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.delete(realm.objects("History"));
      console.log('histórico deletado com sucesso');
    });
  } catch (error) {
    console.error(error);
  }
};
