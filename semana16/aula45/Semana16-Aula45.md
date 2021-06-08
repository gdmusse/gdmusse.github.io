# Aula 45
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** **Varchar(255):** Sequência de caracteres de 255 caracteres.
**Date:** Representa uma data.
**Not null:** teste para verificar se o valor inserido é null(neste caso, não pode ser null).
**Primary key:** identificador único de cada linha.

**b.** **Show databases:** lista todas databases do server.
**Show Tables:** lista todas tabelas do database do server.

**c.** Retorna a estrutura da tabela.
### Exercício 2

**a.** 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "male"
);
```

**b.** ```Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'.``` Deu o erro pois o ID que tem propriedade única, está duplicado.

**c.** ```Error Code: 1136. Column count doesn't match value count at row 1.``` Foram declaradas 3 colunas a serem inseridas, mas foram escritas 5.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

**d.** ```Error Code: 1364. Field 'name' doesn't have a default value.``` Mesmo que não for declarado a coluna "name", ela não tem um valor padrão pra ser inserido neste caso. 

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

**e.** ```Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.``` A data de nascimento foi inserida como número, sem as "" para definir que é uma string.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

**f.** 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Deborah Secco",
  120000,
  "1979-11-26", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rodrigo Lombardi",
  120000,
  "1976-10-15", 
  "male"
);
```
### Exercício 3

**a.** 
```
SELECT * FROM Actor WHERE gender ="female";
```

**b.** 
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

**c.** 
```
SELECT * FROM Actor WHERE gender ="invalid";
``` 
Retorna somente a última linha da coluna, com os valores null.

**d.** 
```
SELECT id, name,salary from Actor WHERE salary < 500000;
```

**e.** ```
Error Code: 1054. Unknown column 'nome' in 'field list'```
A propriedade "nome" não existe, o correto é "name".

```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4

**a.** A query retorna os atores cujo nome comece com a letra A ou J e tenham o salário superior a R$ 300.000.

**b.**
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

**c.** 
```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g";
```

**d.**
```
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a" OR name LIKE "%G%" OR name LIKE "%g") AND salary BETWEEN 350000 AND 900000;
``` 

### Exercício 5

**a.**
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```
**b**
```
INSERT INTO Movie (id,title,synopsis,release_Date,rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
)
```
**c**
```
INSERT INTO Movie (id,title,synopsis,release_Date,rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
)
```
**d**
```
INSERT INTO Movie (id,title,synopsis,release_Date,rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
)
```
**e**
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

### Exercício 6

**a.**
```
SELECT id,title,rating FROM Movie WHERE id ="x";
```

**b.**
```
SELECT * FROM Movie WHERE title = "x";
```

**c.**
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```

### Exercício 7

**a.**
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```

**b.**
```
SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```

**c.**
```
SELECT * FROM MOVIE WHERE release_Date < "2020-05-04";
```

**d.**
```
SELECT * FROM MOVIE WHERE release_Date < "2020-05-04" AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```



