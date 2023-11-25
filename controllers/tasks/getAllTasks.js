import { Op } from "sequelize";
import { Tag, Task } from "../../models/index.js";

export default async (req, res) => {
  try {
    let { searchingParams, searchTags } = await composeSearchingParameters(req.query);
    let tasks = await Task.findAll(searchingParams);

    if (searchTags) {
      let tasksIds = tasks.map(task => task.taskId);
      tasks = await Task.findAll({
        where: {
          taskId: {
            [Op.in]: tasksIds
          }
        },
        order: [["taskId", "ASC"]],
        include: {
          model: Tag,
          as: "tags",
          through: {
            attributes: []
          }
        }
      });
    }

    return res.send(tasks);
  } catch (error) {
    console.error("err.name", error.name);
    console.error("err.message", error.message);
    console.error("err.errors", error.errors);
    if (error.errors) {
      return res.status(400).send(error.errors[0].message);
    }
    if (error.message) {
      return res.status(400).send(error.message);
    }
    return res.sendStatus(500);
  }
};

async function composeSearchingParameters(query) {
  let qProjId = query.proj;
  let qLimit = query.limit;
  let qPage = query.page;
  let qTagName = query.tag;
  let qDescription = query.desc;
  let qState = query.state;

  if (qPage && !qLimit) {
    qPage = null;
  }

  let whereClause = {
    ...(qProjId != null && { projId: qProjId }),
    ...(qDescription != null && { description: qDescription }),
    ...(qState != null && { state: qState }),
  };

  let searchingParams = {
    where: whereClause,
    order: [["taskId", "ASC"]],
    ...((qLimit != null) && { limit: qLimit }),
    ...((qPage != null) && { offset: qLimit * (qPage - 1) }),
    include: {
      model: Tag,
      as: "tags",
      ...((qTagName != null) && { where: { tagId: (await Tag.findOne({ where: { name: qTagName }})).tagId }}),
      through: {
        attributes: []
      }
    }
  };

  return { searchingParams: searchingParams, searchTags: !!qTagName };
}