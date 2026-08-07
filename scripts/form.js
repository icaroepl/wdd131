document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "Last Modified: " + document.lastModified;

const products = [
  "Software Development",
  "Creative Professional",
  "Information Technology",
  "Data Professional",
  "Construction",
  "Manufacturing",
  "Business Professional",
  "Cyber Security"
];

document.getElementById("p-0").textContent = products[0];
document.getElementById("p-1").textContent = products[1];
document.getElementById("p-2").textContent = products[2];
document.getElementById("p-3").textContent = products[3];
document.getElementById("p-4").textContent = products[4];
document.getElementById("p-5").textContent = products[5];
document.getElementById("p-6").textContent = products[6];
document.getElementById("p-7").textContent = products[7];

/* 
  Esta função gerencia a contagem de revisões/visitas usando o localStorage.
  - localStorage.getItem('visitCount'): Busca o valor armazenado sob a chave 'visitCount'.
  - Number(...): Converte o texto retornado pelo localStorage em número, pois o localStorage só salva Strings.
  - || 0 (Fallback): Se o localStorage retornar 'null' (primeira visita) ou 'NaN' (dado inválido),
    o operador '||' garante que a variável comece com o valor padrão 0 em vez de quebrar o código.
*/

function visitCount() {
  // Se não existir nada no localStorage, Number(null) vira 0
  let visits = Number(localStorage.getItem('visitCount')) || 0;

  // Incrementa +1
  visits++;

  // Salva o novo valor atualizado
  localStorage.setItem('visitCount', visits);

  return visits;
}

visitCount();