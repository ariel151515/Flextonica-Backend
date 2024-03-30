const mongoose = require("mongoose");
const password = encodeURIComponent('Relectura1515@@'); 

// 4.1 or later
const URI = `mongodb+srv://flextonica:${password}@flextonicacluster.oyhbcld.mongodb.net/?retryWrites=true&w=majority&appName=FlextonicaCluster`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true, // Habilitar certificados SSL no válidos
})

module.exports = mongoose.connection; // Exporta la conexión
