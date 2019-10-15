//TIPOS DE VARIAVEIS

var nome = "rondinelle";
var idade = 23;
var peso = 80.5;
var humano = true;
//ARRAY
var alunos=['Rondinelle','Juliano','Diego'];
//OBJETO
var aluno={
    nome:'Rondinelle',
    idade:23,
    peso:105.50,
    humano:true
};
//MOSTRAR VARIAVEIS
console.log(`Meu nome ${nome}, tenho ${idade}, meu peso e ${peso}, e humano = a ${humano}`);
//MOSTRAR ARRAY
for (var i =0;i<alunos.length;i++){
    console.log(alunos[i]);
}
