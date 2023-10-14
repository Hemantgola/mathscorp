function login()
{
    var id = document.getElementById("idno").value();
    if (id == "7bC16RNPND")
    {
        alert("Logined as Hemant Gola");
        document.getElementById("name").innerHTML = "Hemant Gola";
    }
    else
    {
        alert("Invalid id");
    }
}

function postl()
{
    document.getElementById("links").value += document.getElementById("link").value;
}