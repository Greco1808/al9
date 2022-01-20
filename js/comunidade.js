const todosOsProjetos = document.querySelector('.js-todos-projetos')


function montaCartao(projeto){

	let cartao =  	`	
		<div class="descricao__projeto" data-id="${projeto.id}">
			<div class="container_borda" style="background: ${projeto.detalhesDoProjeto.borda}">
				<div class="editor">
					<div>
						<img src='img/mac.svg' id="mac"/>
					</div>
						<div class="codigo-wrapper">
								<code class="codigo hljs ${projeto.detalhesDoProjeto.linguagem}" autocomplete="off" autocorrect="off" 
								aria-label="editor" contenteditable="false"></code>
						</div>
						</div>
					</div>
				<h1>${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>
				<p>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
					<div class="socialmedia__container">
						<span style="color:white; font-size:1.5em;" class="icone__chat"><i class="fas fa-comment"></i></span>
						<span class="contador_comentario_socialmedia">9</span>
						<span style="font-size:1.5em;" class="icone__like"><i class="fas fa-heart"></i></span>
						<span class="contador_curtida_socialmedia" data-curtida="${projeto.curtida}">9</span>
						<div class="usuario__container">
						<img src="img/logo-usuario.svg" class="usuario__imagem">
						<p>Nome</p>
					</div>
			</div>
				
				`
	return cartao
	

}


function mostraProjetos(){

	if(localStorage.length = 0){

	return

	}
	let projetos =[]
	
	for(let i = 0; i< localStorage.length; i++){

		projetos.push(JSON.parse(localStorage.getItem(i)))

	}

		projetos.forEach( (projeto) =>  {

			todosOsProjetos.innerHTML += montaCartao(projeto)
			const codigoHTML = document.querySelector(`[data-id="${projeto.id}"]`)
			codigoHTML.querySelector('code').textContent = projeto.detalhesDoProjeto.codigo
			codigoHighlight = hljs.highlightElement(codigoHTML.querySelector('code'))


			console.log(projeto)
			
		})

			
	}





	






mostraProjetos()

