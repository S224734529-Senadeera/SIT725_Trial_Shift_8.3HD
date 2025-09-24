const express = require('express');
const router = express.Router();

router.get('/student', (req, res) => {
  res.json({ name: "Senadeera Arachchige Pamuditha Rasanjana Senadeera", studentId: "S224734529" });
});

module.exports = router;