import { Op } from 'sequelize';

import UserTechnicalRecord from '@app/models/UserTechnicalRecord';
import { makeIndex } from '@app/helpers/collections';

async function findAllByUserIds(ids) {
  const items = await UserTechnicalRecord.findAll({
    where: { userId: { [Op.in]: ids } },
  });

  const itemsIndex = makeIndex(items, 'userId');

  return ids.map((id) => itemsIndex[id]);
}

export {
  findAllByUserIds, //
};
