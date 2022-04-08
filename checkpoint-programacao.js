function Aluno(nome,notas,faltas){
    this.nome= nome;
    this.notas= notas;
    this.faltas= faltas;

    this.calculaMedia = function (){
        let soma = 0;
        for(let i= 0; i < this.notas.length; i++){
            soma = soma + this.notas [i];

            
        }
        return soma/this.notas.length;
    }
    this.adicionaFaltas = function (){
        return this.faltas++;

    }
}

let aluno1 = new Aluno("Fred",[5.2,7.0, 8.5, 9.0], 3);
let aluno2 = new Aluno("Maria",[6,5,8.0, 8.5, 10.0], 2);
let aluno3 = new Aluno("José",[6.2,8.2, 9.5, 8.0], 1);
let aluno4 = new Aluno("lucinda",[8.2,9.0, 7.5, 8.0], 4);

console.log(aluno1.calculaMedia());
console.log(aluno1.adicionaFaltas());

var alunos = [aluno1, aluno2, aluno3, aluno4];
var cursos = {nomeCurso: "Aromateriapia",
notaDeAprovacao:7.5,
faltasMaximas:4, 
estudantes: alunos,

criarAluno: function(nome, notas, faltas){ 
    alunos.push(new Aluno(nome, notas, faltas));
    return this;

},

avaliarAluno: function(nome){
    let porcentagem = ((this.notaDeAprovacao*10)/100)
    if ((nome.calculaMedia()>=this.notaDeAprovacao)&(nome.adicionaFaltas()<this.faltasMaximas)){
        return true;
    }else if ((nome.calculaMedia()>this.notaDeAprovacao+ porcentagem)&(nome.adicionaFaltas()==this.faltasMaximas)){
        return true;
        }
    return false;
},
resultadoAluno: function(){
    var resultado = [];
    for(let i =0; i < this.estudantes.length; i++){
        let aluno = this.estudantes[i].nome;
        resultado.push(aluno);
        resultado.push(this.avaliarAluno(this.estudantes[i]));
        
    }
    return resultado;
}
}
cursos.criarAluno("Amanda",[6.5, 8.2, 7.0,6.5],2);

console.log(cursos.avaliarAluno(aluno1));

console.log(cursos.resultadoAluno());