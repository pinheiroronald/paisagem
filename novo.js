let inf_cliente = []
let nome = ["Ronald","Romeu","Amanda","Carlos","Samuel","Raiane"];
let tele =["969897654","832459087","834256768","981234567","879045344"];
let cad ={nome:"", fon:""}

for(let i =0; i<6;i++){
 cad.nome = nome[i]
 cad.fon = tele[i] 
 inf_cliente.push(cad) 
}
console.log(inf_cliente[6])