$(document).ready(function(){
    $('form').on('submit', function(){
        
        var parametros = {
            "nombre":nombre,
            "apellidos":apellidos,
            "facultad":facultad,
            "nombre_usuario":nombre_usuario,
            "contraseña":contraseña
        };

        $.ajax({
            type: 'POST',
            url:'',
            data: parametros,
            success: function(data){
                console.log(data);
            }
        });

        return false;

    })
});