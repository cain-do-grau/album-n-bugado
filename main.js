var imagens = ["https://farelosjuridicos.com.br/colunistas/sites/default/files/blog/grande-familia-feliz-com-estilo-desenhado-de-mao_23-2147824041_0.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUyXuaZ6mh1LdDidTEmAbBpxrVvTeE1zajw&usqp=CAU", "https://i0.wp.com/maeemdia.com/wp-content/uploads/2020/02/papel-de-pai-6.jpg?fit=2500%2C1666&ssl=1", "https://media.istockphoto.com/id/145928004/pt/foto/irm%C3%A3o-irm%C3%A3-luta.jpg?s=1024x1024&w=is&k=20&c=TX09tII4EHEXbTXzOPJa0Ef5biaM8mEVuFX1JuR908o="];
var nomes = ["album de família","joana e joão","mariana e mario","kyle e kelly"];
var i = 0;

function proximo(){
i++;

var numbersOfFamilyMemberInArray = 3

if(i > numbersOfFamilyMemberInArray)
{
i = 0;

}

var updatedImage = imagens [i];

var updatedName=nomes[i];

document.getElementById("foto").src = updatedImage;

document.getElementById("nome").innerHTML = updatedName;
}