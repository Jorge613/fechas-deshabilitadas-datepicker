// -----------------INICIO SELECCION DE DIAS A DESHABILITAR EN DATEPICKER ----------------------
var array = ["2018-09-18","2018-09-15","2018-10-16"]


$('#datepicker').datepicker({
    beforeShowDay: function(date){
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [ array.indexOf(string) == -1 ]
    }
});

// ----------------- FIN SELECCION DE DIAS A DESHABILITAR EN DATEPICKER ----------------------
//BY Jorgeosorio Dev.
