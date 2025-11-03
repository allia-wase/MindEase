const Assessment = require('../models/Assessment');

exports.createAssessment = async (req, res) => {
  try {
    const assessment = new Assessment({
      student: req.user.id,
      ...req.body
    });
    await assessment.save();
    res.status(201).json(assessment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getAssessments = async (req, res) => {
  try {
    let assessments;
    if (req.user.role === 'student') {
      assessments = await Assessment.find({ student: req.user.id });
    } else if (req.user.role === 'counselor') {
      assessments = await Assessment.find().populate('student', 'name email');
    } else {
      assessments = await Assessment.find();
    }
    res.json(assessments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

