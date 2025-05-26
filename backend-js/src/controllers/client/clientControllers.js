const { response } = require("express");
const queryAsync = require("../../utils/db");

exports.getHome = (req, res) => {
  queryAsync("SELECT * FROM programs ORDER BY ID_program DESC LIMIT 4")
    .then((results) => {
      if (results.length === 0) {
        return res.status(404).json({ error: "No programs found" });
      }
      res.status(200).json(results);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.getAbout = (req, res) => {
  queryAsync("SELECT * FROM users")
    .then((results) => {
      if (results.length === 0) {
        return res.status(404).json({ error: "No users found" });
      }
      res.status(200).json(results);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.getPrograms = async (req, res) => {
  try {
    // const all = await queryAsync(
    //   "SELECT * FROM programs ORDER BY ID_program DESC LIMIT 4"
    // );
    // const riset = await queryAsync(
    //   "SELECT * FROM programs WHERE jenis_program = 'riset' OR jenis_program = 'penelitian' ORDER BY ID_program DESC LIMIT 4"
    // );
    // const pemberdayaan = await queryAsync(
    //   "SELECT * FROM programs WHERE jenis_program = 'pemberdayaan masyarakat' ORDER BY ID_program DESC LIMIT 4"
    // );
    // res.status(200).json({
    //   all,
    //   riset,
    //   pemberdayaan
    // });
    queryAsync(
      "SELECT * FROM programs ORDER BY ID_program DESC LIMIT 4"
    )
    .then((response) => {
      if (response.length === 0) {
        return res.status(404).json({ error: "No programs found" });
      }
      res.status(200).json(response);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });

  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getBerita = (req, res) => {
  try {
    queryAsync("SELECT * FROM news")
      .then((response) => {
        if (response.length === 0) {
          return res.status(404).json({ error: "No news found" });
        } else {
          res.status(200).json(response);
        }
      })
      .catch((error) => {
        // console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  } catch (error) {}
};

exports.getJurnal = (res, req) => {
  try {
    queryAsync("SELECT * FROM jurnal")
      .then((response) => {
        if (response.length === 0) {
          return res.status(404).json({ error: "No jurnal found" });
        } else {
          res.status(200).json(response);
        }
      })
      .catch((error) => {
        // console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  } catch (err) {
    // console.error(err);
  }
};

exports.getResearch = (req, res) => {
  try {
    const { jenis } = req.body;
    queryAsync(`SELECT * FROM programs WHERE jenis_program = '${jenis}'`).then(
      (response) => {
        if (response.length === 0) {
          return res.status(404).json({ error: "No research found" });
        } else {
          res.status(200).json(response);
        }
      }
    )
    .catch((error) =>{
      // console.error(error);
      res.status(500).json({ message: "Internal server error" });
    })
  } catch (error) {
    // console.error(error);
  }
};
