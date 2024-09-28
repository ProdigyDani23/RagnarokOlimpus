const routineData = {
    monday: {
        title1: "Cardio (Resistencia Cardiovascular)",
        title2: "Fortalecimiento de Lumbares",
        title3: "Estiramientos y Flexibilidad",
        cardio: [
            {    ejercicio: "Saltos con cuerda", 
                 series: "1", 
                 repeticiones: "12 minutos-Intervalos: 40 segundos de salto",
                 peso: "-",
                 descanso: "20 segundos", 
                 link: "https://mundoentrenamiento.com/evidencias-sobre-el-salto-a-la-comba/" 
            },
            {
                ejercicio: " Burpees ", 
                series: "4", 
                repeticiones: "12 repeticiones",
                peso: "-",
                descanso: "30-40 segundos ", 
                link: "https://mundoentrenamiento.com/burpee-dice-la-ciencia/"
            },
            {
                ejercicio: "Mountain Climbers  ", 
                series: "4", 
                repeticiones: "45 segundos",
                peso: "-",
                descanso: " 30 segundos", 
                link: "https://mundoentrenamiento.com/mountain-climbers/"
            }
        ],
        lumbares: [
            {
                ejercicio: " Superman ", 
                series: "4", 
                repeticiones: "20 repeticiones",
                peso: "-",
                descanso: " 30-45 segundos", 
                link: "https://www.planetfitness.com/es/community/articles/como-hacer-la-pose-de-superman-y-por-que-querras-hacerla"               
            },
            {
                ejercicio: " Bird-Dog ", 
                series: "4", 
                repeticiones: "12 repeticiones",
                peso: "-",
                descanso: " 30 segundos", 
                link: "https://www.elmundo.es/yodona/vida-saludable/2024/08/19/669f8889e4d4d8f2058b458c.html"
            }
        ],
        estiramiento: [
            {
                ejercicio: "Estiramiento de isquiotibiales  ", 
                series: "3", 
                repeticiones: "45 segundos por pierna",
                peso: "-",
                descanso: "sin descanso ", 
                link: "https://www.spine-health.com/es/bienestar/ejercicio-fisico/estiramientos-especificos-isquiotibiales-aliviar-dolor-espalda"
            },
            {
                ejercicio: " Rotación de tronco en posición sentada ", 
                series: "3", 
                repeticiones: "45 segundos por lado",
                peso: "-",
                descanso: " sin descanso", 
                link: "https://www.mayoclinic.org/es/healthy-lifestyle/stress-management/multimedia/seated-spinal-twist/vid-20453586"
            },
            {
                ejercicio: " Estiramiento de flexores de cadera ", 
                series: "3", 
                repeticiones: "45 segundos por lado",
                peso: "-",
                descanso: " sin descanso", 
                link: "https://www.entrenamientos.com/ejercicios/estiramiento-de-flexores-de-cadera"
            },
            {
                ejercicio: "Corregir hombros caidos",
                series: "1",
                repeticiones: "10-20 respiraciones",
                peso: "-",
                descanso:"sin descanso",
                link: "https://www.instagram.com/reel/C_9X6PutcWq/?igsh=dTdhdmRwMDVnYzZ2"
            }
        ]


    },
    tuesday :{
        title1 : "Abdomen (Máquina y Rueda Abdominal)",
        title2 :"Flexibilidad para Lumbares",
        title3 : "Estiramientos Generales",
        abdomen : [
            {
                ejercicio: "Abs Coaster",
                series: "4",
                repeticiones: "20 repeticiones",
                peso: "-",
                descanso: "45 segundos",
                link: "https://fitnessprogramer.com/exercise/ab-coaster-machine/"
            },
            {
                ejercicio: "Rueda abdominal",
                series: "4",
                repeticiones: "15 repeticiones",
                peso: "-",
                descanso: "45 segundos",
                link: "https://www.entrenamientos.com/ejercicios/abdominales-con-roller"
            },
            {
                ejercicio: "Plancha frontal",
                series: "4",
                repeticiones: "mantener 1 minuto",
                peso: "-",
                descanso: "30 segundos",
                link: "https://www.entrenamientos.com/ejercicios/plancha-con-apoyo-de-antebrazos"
            },
            {
                ejercicio: "plancha lateral",
                series: "4",
                repeticiones: "mantener 45 segundos por lado",
                peso: "-",
                descanso: "30 segundos",
                link:"https://www.entrenamientos.com/ejercicios/plancha-lateral-con-apoyo-de-antebrazo  "
            }
        ],
        lumbares: [
            {

            },
            {
                
            }
        ]
    },

};

// Función para cargar los títulos desde los datos del objeto routineData
function cargarTitulos(dia) {
    document.getElementById('title1').textContent = routineData[dia].title1;
    document.getElementById('title2').textContent = routineData[dia].title2;
    document.getElementById('title3').textContent = routineData[dia].title3;
}

// Función para cargar los ejercicios en las tablas correspondientes
function cargarEjercicios(idTabla, ejercicios) {
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
            <td> <a href="${ejercicio.link}" target="_blank">Click aqui </a></td>
        </tr>
        `;
        tbody.innerHTML += fila;
    });
}

// Cargar los datos de la rutina del lunes al cargar la página
document.getElementById('lunes-tab').addEventListener('click', () => {
    cargarTitulos('monday');
    cargarEjercicios('table1', routineData.monday.cardio);
    cargarEjercicios('table2', routineData.monday.lumbares);
    cargarEjercicios('table3', routineData.monday.estiramiento);
});

/*cargar los datos de la rutina del martes*/
document.getElementById('martes-tab').addEventListener('click', () => {
    cargarTitulos('tuesday');
    cargarEjercicios('table1', routineData.tuesday.abdomen);
    cargarEjercicios('table2', routineData.tuesday.lumbares);
    
    
    
});


/*              ejercicio: "  ", 
                series: "", 
                repeticiones: "",
                peso: "-",
                descanso: " ", 
                link: ""
                
                
                */