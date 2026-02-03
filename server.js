const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000; // A porta do nosso servidor

// 1. Configurações (Middleware)
app.use(cors()); // Libera acesso do celular/emulador
app.use(bodyParser.json());

// Dados Mockados (Fingindo ser um Banco de Dados)
const USERS_DB = [
    {
        id: 1,
        email: "eve.holt@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
    }
];

// 2. Rota de Login (POST /api/login)
app.get('/', (req, res) => {
    res.send('API Funcionando! Use /api/login ou /api/users');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log(`Tentativa de login: ${email} | senha: ${password}`);

    // Validação simples (mantendo a compatibilidade com o que você já testou)
    if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
        // Gera um token falso mas válido visualmente
        const token = jwt.sign({ email: email }, 'segredo-do-trabalho', { expiresIn: '1h' });
        
        return res.json({ token: token });
    }

    return res.status(400).json({ error: 'Usuário não encontrado ou senha incorreta' });
});

// 3. Rota de Listagem (GET /api/users)
app.get('/api/users', (req, res) => {
    // Retorna no mesmo formato que o ReqRes retornava (data: [])
    res.json({
        page: 1,
        per_page: 6,
        total: 12,
        total_pages: 2,
        data: USERS_DB
    });
});

// 4. Iniciar Servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`   Local:   http://localhost:${PORT}`);
    console.log(`   Na Rede: Você precisa descobrir seu IP (ipconfig)`);
});