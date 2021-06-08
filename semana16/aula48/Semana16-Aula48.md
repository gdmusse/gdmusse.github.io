# Aula 48
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** Foreign key é um campo de uma tabela que tem referencia uma PRIMARY KEY de outra tabela.

**b.** 
```
INSERT INTO Rating (id,comment,rate,movie_id)
VALUES (
	"001",
    "Top",
    10,
    "001"
);

```

**c.** 
```Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114503-gabriel-musse`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```
O erro acontece pois a foreign key não bate com nenhum valor de sua referência, as primaries keys da outra tabela.

**d.**
```
ALTER TABLE Movie DROP COLUMN rating;
```

**e.**
```Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114503-gabriel-musse`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```
O erro acontece pois a primary key da tabela ainda está conectada com alguma foreign key de outra tabela.

### Exercício 2

**a.** 
A tabela contem o id do filme e os ids dos atores que estão no filme, ambas referencias a outras tabelas. 

**b.** 
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "001"
)
```

**c.** 
O erro acontece pois a foreign key não bate com nenhum valor de sua referência, as primaries keys da outra tabela.


**d.** 
O erro acontece pois a primary key da tabela ainda está conectada com alguma foreign key de outra tabela.

### Exercício 3

**a.** 
O operador ON é o condicional, que verifica onde a condição bate e pega o que está escrito anteriormente.

**b.** 
```
SELECT Movie.title, Movie.id,Rating.rate FROM Movie JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 4

**a.** 
```
SELECT Movie.title, Movie.id, Rating.rate, Rating.comment FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

**b.**
```
SELECT Movie.id, Movie.title, MovieCast.actor_id FROM Movie 
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

**c.**
```
SELECT AVG(Rating.rate), Movie.title, Movie.id FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id GROUP BY (Movie.id);
```

