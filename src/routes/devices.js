const express = require('express');
const router = express.Router();

// GET /devices - ดึงข้อมูลอุปกรณ์ทั้งหมด
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'DHT11 Sensor', status: 'online' },
    { id: 2, name: 'Relay Module', status: 'offline' }
  ]);
});

module.exports = router;
