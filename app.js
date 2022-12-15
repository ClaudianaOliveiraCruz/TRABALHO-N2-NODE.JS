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

app.get("/stylelogin", function (req, res) {
    res.sendFile(__dirname + "/css/login.css");
});

app.get("/stylemenu", function (req, res) {
    res.sendFile(__dirname + "/css/menu.css");
});

app.get("/", function (req, res) {
    res.render("login");
});

app.get("/cadastro", function (req, res) {
    res.render("cadastro");
});

app.get("/sair", function (req, res) {
    res.render("login");
});

app.get("/cadastro", function (req, res) {
    res.render("cadastro");
});

app.get("/cad-livro", function (req, res) {
    
    if (email && senha) {

        conn.query('SELECT * FROM book WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {  	
            
    
            if (results.length > 0) {
    
                    res.render('cad-livro', {lista:results});
                
                
            } else {
    
                res.render('login');
                
            }	
            
            
    
        });
    }
});

app.get("/telaInicial", function (req, res) {

    if (email && senha) {

        conn.query('SELECT * FROM book WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {  	
            
    
            if (results.length > 0) {
    
                    res.render('tela_inicial', {lista:results});
                
                
            } else {
    
                res.render('login');
                
            }	
            
            
    
        });
    }
});

app.get("/edituser", function (req, res) {

    if (email && senha) {

        conn.query('SELECT * FROM book WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {  	
            
    
            if (results.length > 0) {
    
                    res.render('edit', {lista:results});
                
                
            } 
            
            
    
        });
    }

});

app.get("/visulivro", function (req, res) {

    conn.query('SELECT * FROM livros', function(error, results, fields) {  	
            
    
        if (results.length > 0) {

                res.render('livros', {lista:results});
            
            
        } 
        
        

    });
    

});

app.post("/updatelivro", function (req, res) {

    const editarlivro = req.body.editarlivro;
    const excluirlivro = req.body.excluirlivro;

    const id_livro = req.body.id_livro;
    const autor = req.body.autor;
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const pagina = req.body.pagina;
    const genero = req.body.genero;


    if(editarlivro){

        const query = `UPDATE livros SET autor='${autor}', titulo='${titulo}', sinopse='${sinopse}', paginas='${pagina}', genero='${genero}'  WHERE id_livro= ${id_livro}`
        
        conn.query(query, function(err, data){

            if(err){
                console.log(err)
            }
    
            conn.query(query, function (err) {

                if (err) {
                    console.log(err);
                }
            
                  const query = "SELECT * FROM livros";
            
                conn.query(query, function (err, data) {
            
                    if (err) {
                    console.log(err);
                    }
            
                    const livros = data;
                    console.log(livros);
            
                    res.render("livros", { lista: livros });
                });
            
                });

});

    }

    if(excluirlivro){

        const query = `DELETE FROM livros WHERE id_livro= ${id_livro}`	

        conn.query(query, function(err, data){

            if(err){
                console.log(err)
            }
    
            conn.query(query, function (err) {

                if (err) {
                    console.log(err);
                }
            
                  const query = "SELECT * FROM livros";
            
                conn.query(query, function (err, data) {
            
                    if (err) {
                    console.log(err);
                    }
            
                    const livros = data;
                    console.log(livros);
            
                    res.render("livros", { lista: livros });
                });
            
                });

});


    

    }

    


});



app.post("/update", function (req, res) {

    const editar = req.body.editar;
    const excluir = req.body.excluir;

    const id_book = req.body.id_book;
    const nome_usuario = req.body.nome_usuario;
    const email1 = req.body.email;
    const senha1 = req.body.senha;


    if(editar){

        const query = `UPDATE book SET nome_usuario='${nome_usuario}', email='${email}', senha='${senha}' WHERE id_book= ${id_book}`
        
        conn.query(query, function(err, data){

            if(err){
                console.log(err)
            }
    
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
            
                    res.render("edit", { lista: livros });
                });
            
                });

});

    }


    if(excluir){

        const query = `DELETE FROM book WHERE id_book= ${id_book}`	

    conn.query(query, function(err, data){

        if(err){
            console.log(err)
        }

        res.redirect('/');      

    });

    }
    


});


app.post("/login", function (req, res) {

        email = req.body.email;
        senha = req.body.senha;

    if (email && senha) {

		conn.query('SELECT * FROM book WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {  	
            

            if (results.length > 0) {

                    res.render('tela_inicial', {lista:results});
                
                
			} else {

                res.render('login');
                
			}	
            
            

		});
	}
    

});

app.post("/cadastro", function (req, res) {

    const nome_usuario = req.body.nome_usuario;
    const email = req.body.email;
    const senha = req.body.senha;


    const query = `INSERT INTO book (nome_usuario, email, senha) VALUES ('${nome_usuario}', '${email}', '${senha}'  )`;

    conn.query(query, function (err) {
    if (err) {
        console.log(err);
    }
    res.render("login");
    });
    

});

app.post("/cadastro-livro", function (req, res) {

    if (email && senha) {

		conn.query('SELECT * FROM book WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {  	
            

            if (results.length > 0) {

                    res.render('cad-livro', {lista:results});
                
                
			} else {

                res.render('login');
                
			}	
            
            

		});
	}

    const id = req.body.id_book;

    const cadLivro = req.body.cadlivro;

    const autor = req.body.autor;
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const pagina = req.body.pagina;
    const genero = req.body.genero;

if(cadLivro){
    const query = `INSERT INTO livros (autor, titulo, sinopse, paginas, genero, fk_user) VALUES ('${autor}', '${titulo}', '${sinopse}', '${pagina}', '${genero}', '${id}'  )`;

    conn.query(query, function (err) {
    if (err) {
        console.log(err);
    }
    
    });
}

});
