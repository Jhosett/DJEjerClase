var array;
function arraymulti(){
    array=[
        {user:"Darwin", cod:"192106", doc:"1092175831", tipouser:"Estudiante"},
        {user:"Jhosett", cod:"190006", doc:"1092666831", tipouser:"Admin"},
        {user:"Bermudez", cod:"192121", doc:"1092175987", tipouser:"Profesor"}
    ]
    let fecha = new Date();
    var horas = fecha.getHours;
    console.log(horas);
}

function compara(){
    var nombre = $("#nombre").val();
    for (let i=0;i<array.length;i++){
        if (nombre==array[i].user){
            console.log("El nombre SI existe");
        }
        else{
            console.log("El nombre NO existe");
        }
    }
}