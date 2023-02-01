
/*
    Se tienen tres bloques de código principales. Los tres se corresponden con los tres botones en la 
página.
    En los tres casos se busca que el mismo botón haga el cambio y retorne a su estado original tras un
nuevo click en el botón.
    En los tres bloques se llama al respectivo botón mediante el uso de su id y se usa el evento que 
se activa al hacer click en el botón. Al hacerlo activan las funciones.
    Todas las funciones tienen en común que poseen un if y un else. En los tres casos, se tiene una
condición propia del estado que se tenga presente (inicial). De ser válida pasa al otro estado (solo son 2).
Caso contrario (se tiene la página en el segundo estado), volverá al estado inicial. Usar cualquier
condición del estado inicial es suficiente pues todas cambiarán al efectuarse el cambio.

*/ 

/*La siguiente variable esun texto largo, el cual es separado del código por prolijidad */

const historia = 'Me considero una persona inteligente, competitiva y orgullosa. Tengo buenas aptitudes para la invención y la investigación. He sido nombrado miembro de la Real Society y me han nombrado Sir. Soy considerado por muchos como el mejor cientifico de todos los tiempos.';

/*
    El siguiente bloque muestra el código encargado de mostrar/ocultar la información de Newton en la
sección de "Acerca de mi".
    La condición del if es que la longitud inicial del texto sea nula, ya que, inicialmente, no hay
texto. Es el código dentro del if lo que muestra el mencionado texto. En el else, se oculta el texto.
    En ambos casos se usa un .innerHTML para modificar el contenido de dos elementos: el texto del
botón y el contenido del parrafo (el texto). Ver que ambos elementos son convocados por el id.
    */
document.getElementById('boton_inf').addEventListener('click', function () {
    
    if (document.getElementById('texto_inf').innerHTML.length == 0) {
        
        document.getElementById('texto_inf').innerHTML = historia;
        
        document.getElementById('boton_inf').innerHTML = 'Presione aquí para ocultar el texto';
    } else {

        document.getElementById('texto_inf').innerHTML = '';

        document.getElementById('boton_inf').innerHTML = 'Presione aquí para ver información de Newton';
    }
});


/* 
    El siguiente bloque es el encargado de mostrar/ocultar los datos personales de Newton.
    La condición del if es sobre la longitud del elemento que contiene el telefono de Newton, 
inicialmente nulo. Ver que siempre será nulo en el estado donde la información está oculta.
    El if tiene el código que muestra la información y el else tiene el código que la oculta.

    If
    Las primeras cuatro líneas de código y las siguientes cuatro líneas luego del if y el else dentro
de este if cambian los valores de, en el primer caso, de los elementos telefono, mail, localización
e instagram (el contenido que se muestra). En el segundo caso, se cambia el src de la imagen. En ambos
casos, se llama al elemento empleando su id.
    Respecto a la última línea, cambia el texto del botón
    La necesidad de colocar un if y else dentro de este if se debe a que la dirección de la imagen que
se busca establecer depende del modo en que se encuentre (cuestiones de la imagen): nocturno o normal.
Llama a los elementos a través de su id.

    Else
    La última línea cambia el texto del botón.
    Las otras colocan el valor de los elementos en nulo para ocultar toda la información. No se tiene
un if y else dentro pues, sin importar si se encuentra en modo nocturno o no, se oculta la info. Este
estado es el mismo para ambos casos.
*/

document.getElementById('boton_sup').addEventListener('click', function () {
    if (document.getElementById('telefono').innerHTML.length == 0) {
        document.getElementById('telefono').innerHTML = '0800 62654 312 hh1';
        document.getElementById('mail').innerHTML = 'Newton@PadreDeLaFisica.com';
        document.getElementById('localizacion').innerHTML = 'Woolsthorpe Manor, condado de Lincolnshire, este de Inglaterra';
        document.getElementById('instagram').innerHTML = '@IssacNewton';
    
        if (document.querySelector('#im_newton')) {
            document.getElementById('foto_telefono').src = 'archivos/simbolo_telefono.png';
            document.getElementById('foto_mail').src = 'archivos/simbolo_mail.png';
            document.getElementById('foto_localizacion').src = 'archivos/simbolo_localizacion.png';
            document.getElementById('foto_instagram').src = 'archivos/simbolo_instagram.png';
        } else {
            document.getElementById('foto_telefono').src = 'archivos/telefono_blanco.png';
            document.getElementById('foto_mail').src = 'archivos/mail_blanco.png';
            document.getElementById('foto_localizacion').src = 'archivos/localizacion_blanco.png';
            document.getElementById('foto_instagram').src = 'archivos/instagram_blanco.png';
        }
    
        document.getElementById('foto_telefono').alt = 'Telefono de Newton';
        document.getElementById('foto_mail').alt = 'Mail de Newton';
        document.getElementById('foto_localizacion').alt = 'Ubicación de Newton';
        document.getElementById('foto_instagram').alt = 'Instagram de Newton';
    
        document.getElementById('texto_boton_sup').innerHTML = 'Presione aquí para ocultar datos personales';
    } else {
        document.getElementById('telefono').innerHTML = '';
        document.getElementById('mail').innerHTML = '';
        document.getElementById('localizacion').innerHTML = '';
        document.getElementById('instagram').innerHTML = '';
    
        document.getElementById('foto_telefono').src = '';
        document.getElementById('foto_mail').src = '';
        document.getElementById('foto_localizacion').src = '';
        document.getElementById('foto_instagram').src = '';
    
        document.getElementById('foto_telefono').alt = '';
        document.getElementById('foto_mail').alt = '';
        document.getElementById('foto_localizacion').alt = '';
        document.getElementById('foto_instagram').alt = '';

        document.getElementById('texto_boton_sup').innerHTML = 'Presione aquí para mostrar datos personales';
    }

})


/*
    El siguiente bloque de código se encarga de activar/desactivar el modo nocturno.
    La condición del if es si existe una id. En el modo inicial, se tienen las id del modo normal (modo
nocturno desactivado). La id que se busca mostrar forma parte de estasmencionadas. La única forma de
que exista es en el modo normal. De esta forma, pasará al modo nocturno. Tanto en el if como en el else
se cambian id y clases (correspondientes al modo en cuestión) pues para pasar al otro modo se cambian
las id o clases (según corresponda) de los elementos necesarios. Ver en la hoja de estilos (estilos.css)
que se tienen ambos tipos de clases: las propias del modo normal y las propias del nocturno.
    Según corresponda, los elementos son llamados según su clase o id. Ver que, si se los llama con el
nombre de clase, se debe iterar en el elemento dado. Esto se debe a que el elemento resultado de este
llamado es una lista pues hay varios elementos con la misma clase. Se itera y se modifican las clases
de a una. 
Se emplea un for, cuya condición de parada es que la variable con la que se itera ("element") se igual
a la cantidad de elementos en la lista en cuestión. Ver que, como la cantidad de elementos con la clase
en cuestión se va reduciendo, este número fue previamente guardado en una variable.

    If
    Las  primeras cinco líneas de código cambian las id de ciertos elementos. 
    El siguiente if y else es necesario pues, si está activado el botón que muestra las fotos de la
parte de datos personales, debe mostrar la dirección de la imagen propia del modo nocturno. Caso
contrario (que no muestre la información), debe permanecer así.
    Luego vienen los códigos que cambian las clases, los iteradores for. Hay casos que, dentro del for,
se tiene una única línea de código. Estos casos se corresponden con los elementos que tienen una única 
clase. Es decir puede modificarse la clase entera. Pero, si el elemento tiene más de una clase, el
planteo añadir la nueva clase y eliminar la anterior.
    La última línea de código cambia el texto del botón.

    Else
    Es lo mismo pero al revés.
*/

document.getElementById('boton_cambiarModo').addEventListener('click', function () {

    if (document.querySelector('#im_newton')) {
        document.getElementById('im_newton').id = 'im_newton_nocturno';
        document.getElementById('columna_izq').id = 'columna_izq_nocturno';
        document.getElementById('columna_der').id = 'columna_der_nocturno';
        document.getElementById('columna_der_inf').id = 'columna_der_inf_nocturno';
        document.getElementById('ultima_fila').id = 'ultima_fila_nocturno';

        if (document.getElementById('telefono').innerHTML.length == 0) {
            document.getElementById('foto_telefono').src = '';
            document.getElementById('foto_mail').src = '';
            document.getElementById('foto_localizacion').src = '';
            document.getElementById('foto_instagram').src = '';
        } else {
            document.getElementById('foto_telefono').src = 'archivos/telefono_blanco.png';
            document.getElementById('foto_mail').src = 'archivos/mail_blanco.png';
            document.getElementById('foto_localizacion').src = 'archivos/localizacion_blanco.png';
            document.getElementById('foto_instagram').src = 'archivos/instagram_blanco.png';
        }
        

        const largo_fondo = document.getElementsByClassName('fondo').length 
        for(var element = 0; element<largo_fondo; element++) {
            document.getElementsByClassName('fondo')[0].classList.add('fondo_nocturno');
            document.getElementsByClassName('fondo')[0].classList.remove('fondo');
        }

        const largo_h3_centrado = document.getElementsByClassName('h3_centrado').length
        for(var element = 0; element<largo_h3_centrado; element++) {
            document.getElementsByClassName('h3_centrado')[0].className = 'h3_centrado_nocturno';
        }

        const largo_texto = document.getElementsByClassName('texto').length
        for(var element = 0; element<largo_texto; element++) {
            document.getElementsByClassName('texto')[0].className = 'texto_nocturno';
        }

        const largo_boton = document.getElementsByClassName('boton').length
        for(var element = 0; element<largo_boton; element++) {
            document.getElementsByClassName('boton')[0].className = 'boton_nocturno';
        }

        const largo_texto_titulo = document.getElementsByClassName('texto_titulo').length
        for(var element = 0; element<largo_texto_titulo; element++) {
            document.getElementsByClassName('texto_titulo')[0].className = 'texto_titulo_nocturno';
        }

        document.getElementById('texto_cambiarModo').innerHTML = 'Modo normal'

    } else {
        document.getElementById('im_newton_nocturno').id = 'im_newton';
        document.getElementById('columna_izq_nocturno').id = 'columna_izq';
        document.getElementById('columna_der_nocturno').id = 'columna_der';
        document.getElementById('columna_der_inf_nocturno').id = 'columna_der_inf';
        document.getElementById('ultima_fila_nocturno').id = 'ultima_fila';

        if (document.getElementById('telefono').innerHTML.length == 0) {
            document.getElementById('foto_telefono').src = '';
            document.getElementById('foto_mail').src = '';
            document.getElementById('foto_localizacion').src = '';
            document.getElementById('foto_instagram').src = '';
        } else {
            document.getElementById('foto_telefono').src = 'archivos/simbolo_telefono.png';
            document.getElementById('foto_mail').src = 'archivos/simbolo_mail.png';
            document.getElementById('foto_localizacion').src = 'archivos/simbolo_localizacion.png';
            document.getElementById('foto_instagram').src = 'archivos/simbolo_instagram.png';
        }
        

        const largo_fondo = document.getElementsByClassName('fondo_nocturno').length 
        for(var element = 0; element<largo_fondo; element++) {
            document.getElementsByClassName('fondo_nocturno')[0].classList.add('fondo');
            document.getElementsByClassName('fondo_nocturno')[0].classList.remove('fondo_nocturno');
        }

        const largo_h3_centrado = document.getElementsByClassName('h3_centrado_nocturno').length
        for(var element = 0; element<largo_h3_centrado; element++) {
            document.getElementsByClassName('h3_centrado_nocturno')[0].className = 'h3_centrado';
        }

        const largo_texto = document.getElementsByClassName('texto_nocturno').length
        for(var element = 0; element<largo_texto; element++) {
            document.getElementsByClassName('texto_nocturno')[0].className = 'texto';
        }

        const largo_boton = document.getElementsByClassName('boton_nocturno').length
        for(var element = 0; element<largo_boton; element++) {
            document.getElementsByClassName('boton_nocturno')[0].className = 'boton';
        }

        const largo_texto_titulo = document.getElementsByClassName('texto_titulo_nocturno').length
        for(var element = 0; element<largo_texto_titulo; element++) {
            document.getElementsByClassName('texto_titulo_nocturno')[0].className = 'texto_titulo';
        }

        document.getElementById('texto_cambiarModo').innerHTML = 'Modo nocturno';
    }
})
