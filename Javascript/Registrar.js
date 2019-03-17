$(document).ready(function(){
    
    $('form').on('submit', function(){
        
        var parametros = {
            "nombre":nombre,
            "apellidos":apellidos,
            "facultad":facultad,
            "nombre_usuario":nombre_usuario,
            "contraseña":contraseña
        };
        if(validate_form){
            $.ajax({
                type: 'POST',
                url:'',
                data: parametros,
                success: function(data){
                    console.log(data);
                }
            });
    
        };
        
        return false;

    })
});

function validate_form(){
    if($('#nombre').val == "" || $('#nombre').val === null ){
        alert("el campo esta vacio.")
        $("#nombre").focus();
        return false;
    }
    if($('#apellidos').val == "" || $('#apellidos').val === null){
        alert("el campo esta vacio.")
        $("#apellidos").focus();
        return false;
    }
    if($('#facultad').val == "" || $('#facultad').val === null){
        alert("el campo esta vacio.")
        $("#facultad").focus();
        return false;
    }
    if($('#nombre_usuario').val == "" || $('#nombre_usuario').val === null){
        alert("el campo esta vacio.")
        $("#nombre_usuario").focus();
        return false;
    }
    if($('#contraseña').val == "" || $('#contraseña').val === null){
        alert("el campo esta vacio.")
        $("#contraseña").focus();
        return false;
    }

    return true;
};