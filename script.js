const ejerciciosLunes = {
    cardio : [
        {
            ejercicio : "Saltos con cuerda",
            series : 1,
            repeticiones : "12 minutos (40 segundos de salto)",
            peso : "Mi peso corporal",
            descanso: "20 segundos",
            link : "https://mundoentrenamiento.com/evidencias-sobre-el-salto-a-la-comba/"
        },
        {
            ejercicio: "Burpees",
            series: 4,
            repeticiones: 12,
            peso: "mi peso corporal",
            descanso: "30-40 segundos",
            link: "https://mundoentrenamiento.com/burpee-dice-la-ciencia/"
        },
        {
            ejercicio: "Mountain Climbers",
            series: 4,
            repeticiones: "45 segundos",
            peso: "Mi peso corporal",
            descanso: "30-40 segundos",
            link: "https://mundoentrenamiento.com/mountain-climbers/"
        }
    ],
    lumbares : [
        {
            ejercicio: "Superman",
            series: 4,
            repeticiones: 20,
            peso: "Mi peso corporal",
            descanso: "30-45 segundos",
            link: "https://www.planetfitness.com/es/community/articles/como-hacer-la-pose-de-superman-y-por-que-querras-hacerla",
        },
       { ejercicio:" Bird-Dog" ,
        series: 4,
        repeticiones: 12,
        peso: "Ki peso corporal",
        descanso: "30 segundos",
        link: "https://www.elmundo.es/yodona/vida-saludable/2024/08/19/669f8889e4d4d8f2058b458c.html"
    }
    ],
    flexibilidad : [
        {
            ejercicio:"Estiramiento isquiotibiales" ,
            series: 3,
            repeticiones: "45 segundos por pierna",
            peso: "Mi peso corporal",
            descanso: "Sin descanso",
            link: "https://mundoentrenamiento.com/sindrome-de-isquiotibiales-cortos/"
        },
        {
            ejercicio:"Rotacion de tronco en posicion sentada",
            series: 3,
            repeticiones: "45 segundos por lado",
            peso: "Mi peso corporal",
            descanso: "Sin descanso",
            link : "https://www.mayoclinic.org/es/healthy-lifestyle/stress-management/multimedia/seated-spinal-twist/vid-20453586" 
        },
        {
            ejercicio: "Estiramiento de flexores de cadera",
            series: 3,
            repeticiones: "45 segundos por lado",
            peso: "Mi peso corporal",
            descanso: "sin descanso",
            link: "https://www.entrenamientos.com/ejercicios/estiramiento-de-flexores-de-cadera"
        }
    ]
}

const ejerciciosMartes =  {
    abdomen : 
        [{
            ejercicio : "Abs coaster",
            series : 4,
            repeticiones : 15 ,
            peso : "Sin peso (Buscar manera de aumentar el peso)",
            descanso: "45 segundos",
            link : "https://fitnessprogramer.com/exercise/ab-coaster-machine/"
        },
        {
            ejercicio :"Rueda Abdominal" ,
            series : 4,
            repeticiones : 15,
            peso : "Sin peso",
            descanso: "45 segundos",
            link : "https://www.entrenamientos.com/ejercicios/abdominales-con-roller"
        },
        {
            ejercicio :"Plancha Frontal" ,
            series : 4,
            repeticiones : "1 minuto",
            peso : "Mi peso corporal",
            descanso: "30 segundos",
            link : "https://www.entrenamientos.com/ejercicios/plancha-con-apoyo-de-antebrazos"
        },
        {
            ejercicio :"Plancha Lateral" ,
            series : 4,
            repeticiones : "45 segundos por lado",
            peso : "Mi peso corporal",
            descanso: "30 segundos ",
            link : "https://www.entrenamientos.com/ejercicios/plancha-lateral-con-apoyo-de-antebrazo"
        }
    ],
    flexibilidadLumbares: [
        {
            ejercicio:"Estiramiento del gato-camello",
            series: 4,
            repeticiones: "45 segundos",
            peso : "Mi peso corporal",
            descanso: "Sin descanso",
            link : "https://www.cigna.com/es-us/knowledge-center/hw/gato-camello-abk4473"
        },
        {
            ejercicio :"Flexión lumbar tumbado",
            series :4,
            repeticiones:"45 segundos",
            peso : "Mi peso corporal",
            descanso: "sin descanso",
            link : "https://www.cigna.com/es-us/knowledge-center/hw/ejercicio-de-rodillas-al-pecho-sig44113"
        }
        
    ],
    estiramientosGenerales: [
        {
            ejercicio :"Estiramiento de la espalda baja en postura del niño",
            series :3,
            repeticiones :"1 minuto",
            peso : "Mi peso corporal",
            descanso: "sin descanso",
            link : "https://www.mayoclinic.org/es/healthy-lifestyle/stress-management/multimedia/childs-pose/vid-20453580"
        },
       { ejercicio :"Estiramiento de caderas y glúteos",
        series :3,
        repeticiones :"45 segundos",
        peso : "Mi peso corporal",
        descanso: "sin descanso",
        link : "https://xuanlanyoga.com/baddha-konasana/"
    }
    ]
}



// funcion para cargar los ejercicios en la tabla correspondiente
function cargarEjercicios (idTabla, ejercicios) {
    const tbody = document.getElementById(idTabla);
    tbody.innerHTML = "";
    ejercicios.forEach(ejercicio => {
        const fila = `
        <tr>
                <td>${ejercicio.ejercicio}</td>
                <td>${ejercicio.series}</td>
                <td>${ejercicio.repeticiones}</td>
                <td>${ejercicio.peso}</td>
                <td>${ejercicio.descanso}</td>
                <td><a href="${ejercicio.link}" target="_blank">Clic aquí</a></td>
        </tr>
        `;
        tbody.innerHTML += fila;
    });
}

//cargar los ejercicios en las tablas al cargar la pagina
document.getElementById('lunes-tab').addEventListener('click', () => {
    cargarEjercicios('table1', ejerciciosLunes.cardio);
    cargarEjercicios('table2', ejerciciosLunes.lumbares);
    cargarEjercicios('table3', ejerciciosLunes.flexibilidad);
});

document.getElementById('martes-tab').addEventListener('click',() =>  {
    cargarEjercicios('table1', ejerciciosMartes.abdomen);
    cargarEjercicios('table2', ejerciciosMartes.flexibilidadLumbares);
    cargarEjercicios('table3', ejerciciosMartes.estiramientosGenerales);
});


/*          ejercicio: ,
            series: , 
            repeticiones: ,
            peso: , 
            descanso: , 
            link:  ,
            */