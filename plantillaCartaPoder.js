var enviarNot =document.getElementById("notificationI")
enviarNot.addEventListener("click", function(){
var URLactual = window.location;
alert(URLactual);
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var Obtenerfecha=new Date();
var fecha =Obtenerfecha.getDate() + " de " + meses[Obtenerfecha.getMonth()] + " de " + Obtenerfecha.getFullYear()
var pdf = new jsPDF("p", "pt", "letter");
pdf.setFont("arial");
pdf.setFontSize(11);
pdf.setTextColor(0,0,0);
pdf.text( "Ciudad de México a "+fecha, 460, 50, "center" );
pdf.setFontType("bold");
pdf.text("INSTITUTO MEXICANO DE LA PROPIEDAD INDUSTRIAL",310,115,"center")
pdf.setFontType("bold")
pdf.text("OTORGO PODER",315,580,"center")
pdf.setFontType("bold")
pdf.text("______________________________",310,620,"center");
pdf.setFontType("bold")
pdf.text("Nombre",295,640)
pdf.setFontSize(8);
pdf.text("Av. Baja California 146-301 Roma Sur Cuauhtémoc 06770, Ciudad de México",310,730,"center");
pdf.text("contacto@hernandezcarreno.com / 5298599 / 88527529",312,745,"center")
pdf.text("www.hernandezcarreno.com",315,760,"center")
source = $("#content")[0];
specialElementHandlers = {
    "#bypassme": function (element, renderer) {
        return true
    }
};
margins = {
    top: 160,
    bottom: 60,
    left: 40,
    width: 522
};
pdf.fromHTML(
    source,
    margins.left,
    margins.top, {
        "width": margins.width,
        "elementHandlers": specialElementHandlers
    },

    function (dispose) {
        pdf.save("Carta poder, persona física.pdf");
    }, margins
);
}, false);
