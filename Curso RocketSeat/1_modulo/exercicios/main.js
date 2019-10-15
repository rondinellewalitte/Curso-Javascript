/*
1º exercício
Crie uma função que dado o objeto a seguir:
};


var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function mostra(){
    console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com
    nº ${endereco.numero}.`)
}

console.log(mostra());
--------------------------
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:



function pares(x, y) {
    for(var i = x;i<=y;i++){
        var resultado = (i%2==0)?`O numero ${i} e Par`:`Numero ${i} e impar`;

        console.log(resultado);
    }
   }
pares(2,10);

----------------------------

3º exercício
Escreva uma função que verifique se o vetor de habilidades passado 
possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
// código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.


function temHabilidade(skills,x) 
{
    var estado=false;
    for(var i =0;i<=x;i++)
    {
        if(skills[i]=='Javascript')
        {
            estado = true;
        }
    }
    return estado;
}

   
var skills = ["Javascript", "ReactJS", "React Native"];
var tam=skills.length;

console.log(temHabilidade(skills,tam));

--------------------------------
4o exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
  // código aqui
}
var anosEstudo = 7; experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário // De 3-6 anos: Avançado
// De 7 acima: Jedi Master


function experiencia(anos) 
{
    if(anos>=0&&anos<=1){
        return "Iniciante";
    }
    else if(anos>1&&anos<=3){
        return "Intermediario";
    }
    else if(anos>3&&anos<=6){
        return "Avancado";
    }
    else if(anos>=7){
        return "Jedi Master";
    }
}

  var anosEstudo = 1; 
  console.log(experiencia(anosEstudo));

  ---------------------------
5o exercício
Dado o seguinte vetor de objetos:
var usuarios = [ {
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"] },
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
} ];
Escreva uma função que produza o seguinte resultado:
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir 
valores de um array com um separador utilize o join.

*/

var usuarios = [ {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"] },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    } ];

    
function mostra(user){
    for(var i=0;i<=1;i++){
        console.log( `${user[i].nome} possui as habilidades: ${user[i].habilidades}`);
    }
}

mostra(usuarios);





