
  // Función para formatear la fecha en formato "YYYY-MM-DD"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Agrega un cero delante si es necesario
    const day = String(date.getDate()).padStart(2, '0'); // Agrega un cero delante si es necesario
    return `${year}-${month}-${day}`;
  };

  const ini = formatDate(new Date(nuevaFechaFin));
  const fin = formatDate(new Date(nuevaFechaInicio)); 
  
  const obj = {
     ini: ini,
     fin: fin,
  }

  console.log(obj);
  const result = await traeMacrosSemanal(uid, ini, fin);

  const resultado = {
    inicioSemana: result.macrosSemanal.fechaInicio,
    finSemana: result.macrosSemanal.fechaFin
  }

  setFechaInicio(new Date(resultado.inicioSemana));
  setFechaFin(new Date(resultado.finSemana));