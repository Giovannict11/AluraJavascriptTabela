var times = []

function criarTime(nome){
  return (team ={
    nome :nome,
    vitorias :0 ,
    empates:0,
    derrotas:0,
    pontos:0,
    
  })
}
function adicionarTime(){
  nomeTime = document.getElementById("time").value // vai pegar o nbome do time digitado no campo de texto
  if(nomeTime ==""){
    alert( "time invalido" )
  }else{
    times.push(criarTime(nomeTime)) //vai listar o time no vetor que foi declarado no começo.
    exibirTimesNaTela(times)
    document.getElementById("time").value = ""
  }
}


function calcularPontos(times){ //paremetro time que vai ser os times inseridos na tabela
  var pontos = (times.vitorias * 3)+ times.empates
  return pontos
  exibirTimesNaTela(pontos)
}




function exibirTimesNaTela(times){
  var html = ""
for (var i = 0; i< times.length ; i++){ // loop para ir adicionando times.
  html += "<tr><td>"+ times[i].nome + "</td>"// adicionando dados a tabela
  html += "<td>"+ times[i].vitorias + "</td>"
  html += "<td>"+ times.[i].empates + "</td>"
  html += "<td>"+ times.[i].derrotas + "</td>"
  html += "<td>"+ times.[i].pontos + "</td> "
  
  html +="<td><button onClick='adicionarVitoria("+ [i] +")'>Vitória</button></td>"
   html+= "<td><button onClick='adicionarEmpate("+[i] +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ [i] +")'>Derrota</button></td> </tr>"
}
  var tabelaTimes = document.getElementById("tabelaTimes")
  tabelaTimes.innerHTML = html
  }

function adicionarVitoria(i){
  var time = times[i]
  time.vitorias++
  time.pontos = calcularPontos(time)
  exibirTimesNaTela(times)
}

function adicionarEmpate(i){
  var time = times[i]
  time.empates++
  time.pontos = calcularPontos(time)
  exibirTimesNaTela(times)
}

function adicionarDerrota(i){
  var time = times[i]
  time.derrotas++
  exibirTimesNaTela(times)
}
