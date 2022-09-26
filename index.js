const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json());

app.post("/datos-financieros", (req, res) => {
  console.log(req.body);
  const { ingresosMensuales, gastosMensuales, tipoContrato } = req.body;
  const x = tipoContrato * (ingresosMensuales - gastosMensuales);
  let respuesta = "No aprobado";
  if (x >= 1000000) respuesta = "Aprobado";
  res.json({
    respuesta,
  });
});

app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});
