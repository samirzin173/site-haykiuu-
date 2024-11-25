// Função para abrir o modal com informações do personagem
function openModal(personagem) {
  const modal = document.getElementById('modal');
  const nome = document.getElementById('nome-personagem');
  const imagem = document.getElementById('imagem-personagem');
  const descricao = document.getElementById('descricao-personagem');

  if (personagem === 'hinata') {
      nome.innerText = 'Shoyo Hinata';
      imagem.src = 'hinata.jpg';
      descricao.innerText = 'Um jogador determinado e cheio de energia.';
  } else if (personagem === 'kageyama') {
      nome.innerText = 'Tobio Kageyama';
      imagem.src = 'kageyama.jpg';
      descricao.innerText = 'Um levantador talentoso e competitivo.';
  } else if (personagem === 'tsukishima') {
      nome.innerText = 'Kei Tsukishima';
      imagem.src = 'tsukishima.jpg';
      descricao.innerText = 'Um jogador inteligente com uma visão crítica do jogo.';
  }

  modal.style.display = 'block';
}


function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}


function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const successMessage = document.getElementById('success-message');

  if (name && email && message) {
      successMessage.style.display = 'block';
      document.getElementById('contact-form').reset();
      setTimeout(() => {
          successMessage.style.display = 'none';
      }, 3000);
      return false; 
  }
  return false; 
}


document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const themeButton = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark-theme')) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
      themeButton.innerText = '🌞 Tema Claro';
  } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#333';
      themeButton.innerText = '🌙 Tema Escuro';
  }
});


function openTrailer(trailerId) {
  const trailerUrl = 'https://animesonlinecc.to/episodio/haikyuu-episodio-19/'; 
  window.open(trailerUrl, '_blank');
}