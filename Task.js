import './Task.css' 

export function TaskCard(params) {
    return <div class='card'>
        <h1>Mi primer tarea</h1>
        <p>Tarea Realizada</p>
    </div>
}


// Esto son estilos en linea, para poder poner codigo de css dentro de react hay que porner = <div style={{color:'red'}}, <= asi es como se coloca codigo de css en linea.///
// Tambien otra forma de poder agregar codigo css dentro de react, guardando todos los datos dentro de una varible, y a esta misma colocalar en un elemento HTML.
// Ej:
// const style = {background: "red", color: 'blue', padding: '20px' }
// <div styles={style}></div> = Asi nosotros agregamos estilo css //
// Cuando queremos agregar un archivo css, si o si lo tenemos que importar //
// Ahora esto es posible porque nosotros utilizamos una herramienta llamada 'Create React App' en donde esta misma tiene otra herramienta 'Web Pack' // 