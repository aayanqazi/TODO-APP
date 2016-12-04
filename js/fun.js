function adduser()
{
   
   var uli = document.getElementById("user");
   if(uli.childNodes.length <= 1)
   {

    var ref = document.createElement("LI");
    var inp = document.getElementById("chats").value;
    if(inp!="")
    {
    var deleted = document.createElement('a');
   deleted.href="javascript:deletion()";
    deleted.innerHTML = "<span class='glyphicon glyphicon-trash dustbin'aria-hidden='true'></span>";
    var text = document.createTextNode(inp);
    ref.appendChild(text);
    ref.appendChild(deleted);
    document.getElementById("user").appendChild(ref); 
    }
    else
    {
        alert("Please Enter Username First !!!");
    }
   }
   else
   {
       alert("Sorry !! You can enter only one username at a time");
   }
}
h1
{
    color:red;
}
function deletion()
{
    var ulElem = document.getElementById("user");
        ulElem.removeChild(ulElem.childNodes[0]);
}
function chatting()
{
    var link = document.createElement("LI");
    var inpu = document.getElementById("chat").value;
    var elem = document.getElementById("user");
    var user = elem.innerText;

    if(user != "")
    {
    var sett = user + ":" + " " +inpu;
    var text = document.createTextNode(sett);
    link.appendChild(text);
    document.getElementById("todos").appendChild(link);
    }
    else{
        alert("Please first Enter Username !!! ");
    }
    
}
function del()
{
    
}