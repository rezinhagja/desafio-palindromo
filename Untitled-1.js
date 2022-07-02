
//solução 1
function verificaPalindromo(string) {
    if(!string) return;

   return string.split("").reverse().join("") === string
}

// solução 2
// omo
// 012
// abbbba
// 012345

function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; 1++) {
        if(string[i] !== string[string.length- i - i]) {
       return false;
      }

     }

      return true;
     }