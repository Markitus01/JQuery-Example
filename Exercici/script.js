document.addEventListener("DOMContentLoaded", main);

function main()
{
    // Exercici 1:
    $("#boto").click(function (e)
    {
        let num = $("#valor");
        let inf = $("#res");

        if (num.val() >= 1 && num.val() <= 7)
        {
            switch (parseInt(num.val()))
            {
                case 1:
                    inf.text("Dilluns");
                    break;
                
                case 2:
                    inf.text("Dimarts");
                    break;

                case 3:
                    inf.text("Dimecres");
                    break;

                case 4:
                    inf.text("Dijous");
                    break;

                case 5:
                    inf.text("Divendres");
                    break;

                case 6:
                    inf.text("Dissabte");
                    break;

                case 7:
                    inf.text("Diumenge");
                    break;
            }
        }
        else
        {
            inf.text("El valor '" + num.val() + "' no és vàlid");
            num.val(null);
        }
    });

    // Exercici 2:
    $("body > *").each(function ()
    {
        // https://stackoverflow.com/questions/5347357/jquery-get-selected-element-tag-name
        let nom     = jQuery(this).prop("tagName");
        let altura  = $(this).height();
        let elem    = $("<div>");
        elem.text("Etiqueta: "+ nom +" - Altura: "+ altura);
        $("#res1").append(elem);

        if (nom == "P")
        {
            // https://api.jquery.com/find/
            if ($(this).find("img"))
            {
                console.log("Te imatge :/");
            }
            else
            {
                $(this).height("80px");
            }
        }
    });

    // Exercici 3:

}