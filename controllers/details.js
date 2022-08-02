const StudentDetailsModel = require("../models/details");

exports.saveStudentDetails = async (req, res) => {
  try {
    const saveStudentInfo = new StudentDetailsModel(req.body);
    res.status(201).json(await saveStudentInfo.save());
  } catch (error) {
    res.status(500).send(error);
    console.log("first");
  }
};

exports.getAllStudentsDetails = async (req, res) => {
  try {
    const getStudentInfo = await StudentDetailsModel.find();
    res.status(201).json(getStudentInfo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getStudentDetails = async (req, res) => {
  try {
    const getStudentInfo = await StudentDetailsModel.find({
      _id: req.params.userId,
    });
    res.status(201).json(getStudentInfo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateStudentDetails = async (req, res) => {
  try {
    const _id = req.params.userId;
    const updateStudentInfo = await StudentDetailsModel.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
        usefindandmodify: false,
      }
    );
    -res.status(201).json(updateStudentInfo);
  } catch (error) {
    res.status(500).send(error);
  }
};
