//TRABALHO N2: EMERSON PONCIANO, INGRID CASTELO, LUZIA VITORIA, MARIA CLAUDIANA

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CONECTAR AO BANCO DE DADOS

const conn = mysql.createConnection({
    host: "localhost",
    user: "root", //USUARIO
    password: "", //SENHA
    database: "books", //NOME DO SEU BANCO
});

conn.connect(function (err) {

if (err) {
    console.log(err);
}
    console.log("conectado ao Mysql");

    app.listen(3200, "127.0.0.1", () => {
        console.log("App rodando");
    });
});

//Rotas

app.get("/style", function (req, res) {
    res.sendFile(__dirname + "/css/style.css");
});

app.get("/", function (req, res) {
    res.render("book");
});

//CADASTRAR NO BANCO DE DADOS
app.post("/livros", function (req, res) {

    const cadastrar = req.body.cadastrar;
    const visualizar = req.body.visualizar;
    const editar = req.body.editar;
    const excluir = req.body.excluir;

//Cadastrar
if (cadastrar) {
    console.log(req.body);

    const titulo = req.body.titulo;
    const page = req.body.page;

    //INSERINDO DADOS NA TABELA book nas colunas titulo_book e pagina_book

    const query = `INSERT INTO book (titulo_book, pagina_book) VALUES ('${titulo}', '${page}')`;

    conn.query(query, function (err) {
    if (err) {
        console.log(err);
    }
    });
}

//MOSTRAR DADOS DA TABELA
if (visualizar) {
    const query = "SELECT * FROM book";

    conn.query(query, function (err, data) {
    if (err) {
        console.log(err);
    }

    const livros = data;
    console.log(livros);

    res.render("livros", { lista: livros });
    });
}

//EDITAR

if (editar) {
    console.log(req.body);

    const id = req.body.id;
    const titulo = req.body.titulo;
    const page = req.body.page;

    const query = ` UPDATE book SET titulo_book='${titulo}', pagina_book='${page}' WHERE id_book = '${id}' `;

    conn.query(query, function (err) {

    if (err) {
        console.log(err);
    }

      const query = "SELECT * FROM book";

    conn.query(query, function (err, data) {

        if (err) {
        console.log(err);
        }

        const livros = data;
        console.log(livros);

        res.render("livros", { lista: livros });
    });

    });
}

//EXCLUIR

if (excluir) {
    console.log(req.body);

    const id = req.body.id;

    const query = `DELETE FROM book WHERE id_book= ${id}`

    conn.query(query, function (err) {

    if (err) {
        console.log(err);
    }

      const query = "SELECT * FROM book";

    conn.query(query, function (err, data) {

        if (err) {
        console.log(err);
        }

        const livros = data;
        console.log(livros);

        res.render("livros", { lista: livros });
    });

    });
}


});

//MOSTRAR DADOS DO BANCO DE DADOS NO TERMINAL

app.get("/dados", (req, res) => {
  const query = "SELECT * FROM book";

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const livros = data;
    console.log(livros);

    res.render("livros", { lista: livros });
  });
});
