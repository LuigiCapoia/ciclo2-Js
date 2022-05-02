window.onload = function () {
   // `https://viacep.com.br/ws/${cep}/json/`;


   function resultadoCep(cepDoMeAche) {

      for (let campo in cepDoMeAche) {
         if (document.querySelector(`#${campo}`))
            document.querySelector(`#${campo}`).value = cepDoMeAche[campo];

      }


   }








   let cepDoMeAche = async function (cep) {
      let url = `https://viacep.com.br/ws/${cep}/json/`;
      try {
         let dadosRua = await fetch(url);

         let dadosJson = await dadosRua.json();

         resultadoCep(dadosJson);

      } catch (error) {
         alert("CEP errado ou inexistente");
      }


   }

   //cepDoMeAche(`87060515`);

   const btBuscar = document.querySelector("#boton");
   const cepp = document.querySelector("#ceep");
   btBuscar.addEventListener(`click`, function () {

      cepDoMeAche(cepp.value);

   })


}
