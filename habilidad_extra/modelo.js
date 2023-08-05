function Prediccion(mun_origen,mun_destino,vehiculo,clase)
{
    //preparar los datos
    const inputData = [[mun_origen,mun_destino,vehiculo,clase]];
    //Predecir
    var tensor = tf.tensor1d([mun_origen,mun_destino,vehiculo,clase]).reshape([1, 4]);

    var prediccion = modelo.predict(tensor);
    // Acceder a los datos de la predicción
    prediccion.data().then(data => {
  
    // Si quieres convertir los datos a un array plano regular, puedes hacerlo así:
    const predictionArray = Array.from(data);
    //Agregar las predicciones
    console.log(predictionArray[1])
    const div_IA = document.getElementById("seccion_prediccion");
    div_IA.innerHTML ="";

    const pasajeros = document.createElement('h2');
    pasajeros.textContent += "Pasajeros :"+ Math.round(predictionArray[0]);
    div_IA.appendChild(pasajeros);

    const horas = document.createElement('h2');
    horas.textContent += "Tiempo estimado :"+ Math.round(predictionArray[1])+" Horas";
    div_IA.appendChild(horas);
  });
}