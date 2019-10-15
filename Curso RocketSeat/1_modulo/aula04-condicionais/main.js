function retornaSexo(sexo){
    if ('F'===sexo)
    {
        return 'Feminino';
    }
    else if('M'===sexo)
    {
        return 'Masculino';
    }
    else
    {
        return 'Outro';
    }
}

console.log(retornaSexo('fdfdf'));