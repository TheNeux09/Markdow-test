import PropTypes from 'prop-types'

export function Button({ text }) {
    console.log(text)
    return <button>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string
}













// Teoria -- propTypes && DefaultProps //

// Podemos diferenciar los componentes de Hmtl Con los de React con una mayucusla al principio //
// Como yo me puedo asegurar que realmente me va a pasar lo valores, o que almenos darme una advertencia al desarrollador.
// Bueno para eso hay algo llamado "PropTypes" = Mejor dicho agregar algunos datos a estos props.
// Esto viene de un paquete que se llama = "npm propTypes" //
// Este pequete nos permite agregar algunon tipos de datos a los "props", es una forma de ayodar al desarrolado.Por ejemplo : "que el desarollador puede colocar algun tipo de dato extra para advertir al que lo esta utilizando".
// Importando 'PropTypes' lo que podesmo hacer es poder definir que dato voy a poder recibir // 

