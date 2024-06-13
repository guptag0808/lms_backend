const { models } = require('../models');
const Progress = models.Progress;

exports.getProgress = async (req, res) => {
  const { id } = req.params;
  try {
    const progress = await Progress.findAll({ where: { userId: id } });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProgress = async (req, res) => {
  const { id } = req.params;
  const { courseId, completed } = req.body;
  try {
    const progress = await Progress.findOne({ where: { userId: id, courseId } });
    if (!progress) {
      return res.status(404).json({ error: 'Progress not found' });
    }
    progress.completed = completed;
    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
