import * as Yup from 'yup';
import Equipment from '../models/Equipment';

class EquipmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      model: Yup.string().required(),
      category: Yup.string().required(),
      ppm: Yup.number().min(0).max(999999).integer().required(),
      wifi: Yup.boolean().required(),
      consumption: Yup.number().min(0).max(999999).required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Data validation failed' });

    const equipmentExists = await Equipment.findOne({
      where: { model: req.body.model },
    });

    if (equipmentExists)
      return res.status(400).json({ erro: 'Equipment already exists' });

    const { model, category, ppm, wifi, consumption } = await Equipment.create(
      req.body
    );

    return res.json({ model, category, ppm, wifi, consumption });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      model: Yup.string(),
      category: Yup.string(),
      ppm: Yup.number().min(0).max(999999).integer(),
      wifi: Yup.boolean(),
      consumption: Yup.number().min(0).max(999999),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Data validation failed' });

    const equipment = await Equipment.findByPk(req.params.id);

    if (!equipment)
      return res.status(400).json({ erro: 'Equipment does not exist' });

    if (req.body.model) {
      const modelExists = await Equipment.findOne({
        where: { model: req.body.model },
      });
      if (modelExists)
        return res.status(400).json({ erro: 'Equipment model already exists' });
    }

    const { model, category, ppm, wifi, consumption } = await equipment.update(
      req.body
    );

    return res.json({ model, category, ppm, wifi, consumption });
  }

  async delete(req, res) {
    const equipment = await Equipment.findByPk(req.params.id);

    if (!equipment)
      return res.status(400).json({ erro: 'Equipment does not exist' });

    await equipment.destroy();

    return res.send();
  }

  async show(req, res) {
    const equipments = await Equipment.findAll();

    return res.json({ equipments });
  }
}

export default new EquipmentController();
