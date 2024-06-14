const{ Progress,Course,User} = require('../models/index');



exports.getUserProgress = async (req, res) => {
  const { id } = req.params;
  try {
    const progress = await Progress.findAll({
      where: { userId: id },
    });

    if (!progress) {
      return res.status(404).json({ message: 'No progress found for this user.' });
    }

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving progress.', error });
  }
}
exports.updateUserProgress = async (req, res) => {
  const { id } = req.params;
  const { courseId, enroll, status } = req.body;

  try {
     const newProgress = await Progress.create({ userId:id, courseId, enroll, status });
     newProgress.save()
     res.status(201).json({message:newProgress})

  } catch (error) {
    res.status(500).json({ message: 'Error updating progress.', error });
  }
};
