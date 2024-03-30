
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true, // Habilitar certificados SSL no válidos
})

module.exports = mongoose.connection; // Exporta la conexión
