document.addEventListener("DOMContentLoaded", () => {
    // Login de Usuário
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;
            alert(`Login realizado com sucesso!\nE-mail: ${email}\nSenha: ${password}`);
            if (email === "admin@admin.com") {
                location.href = 'admin.html';
            } else {
                location.href = 'index.html';
            }
        });
    }
});

// Publicar Artigo
function publishArticle() {
    const title = document.getElementById('articleTitle').value;
    const content = document.getElementById('articleContent').value;
    alert(`Artigo publicado com sucesso!\nTítulo: ${title}\nConteúdo: ${content}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;

            // Simulação de login
            if (email === "admin@admin.com" && password === "admin123") {
                // Usuário é um administrador
                alert(`Bem-vindo, administrador!`);
                location.href = 'admin.html';  // Redireciona para o painel de administrador
            } else if (email === "user@user.com" && password === "user123") {
                // Usuário comum
                alert(`Bem-vindo, usuário!`);
                location.href = 'index.html';  // Redireciona para a página principal
            } else {
                // Usuário inválido
                alert('E-mail ou senha incorretos. Por favor, tente novamente.');
            }
        });
    }
});

// Publicar Artigo (somente para administradores)
function publishArticle() {
    const title = document.getElementById('articleTitle').value;
    const content = document.getElementById('articleContent').value;
    if (title && content) {
        alert(`Artigo publicado com sucesso!\nTítulo: ${title}\nConteúdo: ${content}`);
        location.href = 'admin.html';  // Redireciona para o painel de administração após a publicação
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.getElementById('articlesContainer');

    // Simulação de artigos publicados
    const articles = [
        { id: 1, title: "Primeiro Artigo", content: "Este é o conteúdo do primeiro artigo", link: "article.html?id=1" },
        { id: 2, title: "Segundo Artigo", content: "Este é o conteúdo do segundo artigo", link: "article.html?id=2" },
        { id: 3, title: "Terceiro Artigo", content: "Este é o conteúdo do terceiro artigo", link: "article.html?id=3" }
    ];

    // Gerar lista de artigos na página principal
    if (articlesContainer) {
        articles.forEach(article => {
            const col = document.createElement('div');
            col.classList.add('col-md-4');
            col.innerHTML = `
                <div class="card article-card">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.content.substring(0, 100)}...</p>
                        <a href="${article.link}" class="btn btn-success">Leia Mais</a>
                    </div>
                </div>
            `;
            articlesContainer.appendChild(col);
        });
    }
});

// oii

document.addEventListener("DOMContentLoaded", () => {
    loadArticles();

    function loadArticles() {
        // Simulação de carregamento dos artigos
        const articlesContainer = document.getElementById('articlesContainer');
        const articles = [
            { id: 1, title: "Artigo 1", content: "Conteúdo do Artigo 1" },
            { id: 2, title: "Artigo 2", content: "Conteúdo do Artigo 2" },
        ];

        articles.forEach(article => {
            const col = document.createElement('div');
            col.classList.add('col-md-4');
            col.innerHTML = `
                <div class="card article-card">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.content}</p>
                        <a href="article.html?id=${article.id}" class="btn btn-success">Leia Mais</a>
                    </div>
                </div>
            `;
            articlesContainer.appendChild(col);
        });
    }
});

function publishArticle() {
    // Função de publicação de artigo (simulada)
    const title = document.getElementById('articleTitle').value;
    const content = document.getElementById('articleContent').value;
    alert(`Artigo publicado: ${title}`);
}

