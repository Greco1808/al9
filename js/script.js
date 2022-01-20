const linguagem = document.querySelector(".linguagem")
const areaDoCodigo = document.querySelector(".codigo-wrapper")
const botao = document.querySelector(".visualizar__highlight")
const tituloDoProjeto = document.querySelector("#titulo__projeto")
const descricaoDoProjeto = document.querySelector("#descricao__projeto")
const code = document.querySelector('#descricao__projeto')
const colorPicker = document.querySelector(".cor__campo")


botao.addEventListener("click",function(){

	const codigo = areaDoCodigo.innerText
	areaDoCodigo.innerHTML =`<code class="preview hljs ${linguagem.value}" contenteditable="true"></code>`
	areaDoCodigo.querySelector('code').textContent = codigo
	hljs.highlightElement(areaDoCodigo.querySelector('code'))



})



function mudaCor(){



colorPicker.addEventListener("input", function(){

const corSelecionada = colorPicker.value;

console.log(corSelecionada)

document.querySelector(".background__container").style.background = corSelecionada


})


}

let numeroId = 1;

function atribuiId(){

	if(localStorage.length == 0){

		return 0
	}

	if(localStorage.length == numeroId){

		let novoId = numeroId
		numeroId++
		return novoId

	}

}

if(localStorage.length > 0){

	numeroId = localStorage.length
}

//lógica para montar o projeto

function montaProjeto() {

   
	let projeto = {


		'id': atribuiId(),
		'detalhesDoProjeto': {
				'nomeDoProjeto': tituloDoProjeto.value,
				'descricaoDoProjeto': descricaoDoProjeto.value,
				'linguagem': linguagem.value,
				'codigo': areaDoCodigo.querySelector('code').innerText,
				'borda': colorPicker.value,
				'curtida':""
				
		}
	}
	return projeto;
}

//lógica para transformar um objeto em string

function salvarLocalStorage(objetoJson){

	localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}


//lógica para salvar um novo projeto

const salvar = document.querySelector(".salvar")

salvar.addEventListener("click", () =>{

	if (typeof(Storage) !== "undefined"){

		
		console.log("suporta")
		

		const projeto = montaProjeto();
		salvarLocalStorage(projeto)

		console.log(projeto)


		

	}else{

		console.log("não suporta")
	}

})


mudaCor()




