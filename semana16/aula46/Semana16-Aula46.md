# Aula 46
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** Retira a coluna salary da tabela Actor.

**b.** Troca a coluna gender da tabela Actor para sex, sendo um texto de no máximo 6 caracteres.

**c.** Troca a coluna gender da tabela Actor para gender, sendo um texto de no maxímo 255 caracteres.

**d.** 
```
ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);
```
### Exercício 2

**a.** 
```
UPDATE Actor 
SET name = "x", birth_date = "x" 
WHERE id="003";
```

**b.** 
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

**c.** 
```
UPDATE Actor
SET name = "x", birth_date = "x", salary = x, gender = "x"
WHERE id = "005";
``` 

**d.** ```0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 ``` Não ocorreu um erro, porém não modificou nada pois o WHERE não bateu com nenhum dado da tabela.

### Exercício 3

**a.** 
```
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro"
```

**b.** 
```
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000
```

### Exercício 4

**a.** 
```
SELECT Max(salary) FROM Actor
```

**b.**
```
SELECT Min(salary) FROM Actor 
WHERE gender = "female"
```

**c.** 
```
SELECT COUNT(*) FROM Actor 
WHERE gender = "female"
```

**d.**
```
SELECT SUM(salary) FROM Actor
``` 

### Exercício 5

**a.** A query separa as atrizes em um grupo e os atores em outro, e conta quantos tem em cada grupo.

**b.**
```
SELECT id, name FROM Actor
ORDER BY name DESC
WHERE gender = 'male'
```
**c.**
```
SELECT * FROM Actor
ORDER BY salary;
```
**d.**
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
**e.**
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

**a.**
```
ALTER TABLE Movie 
ADD playing_limit_date Date;
```

**b.**
```
ALTER TABLE Movie 
CHANGE rating rating FLOAT;
```

**c.**
```
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "001"
```
e
```
UPDATE Movie
SET playing_limit_date = "2021-06-12"
WHERE id = "002"
```

**d.**
```0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 ``` Não ocorreu um erro, porém não modificou nada pois o WHERE não bateu com nenhum dado da tabela.
### Exercício 7

**a.**
```
SELECT Count(*) FROM Movie 
WHERE rating > 7.5;
```

**b.**
```
SELECT AVG(rating) FROM Movie;
```

**c.**
```
SELECT COUNT(*) FROM Movie 
WHERE playing_limit_date > CURDATE();
```

**d.**
```
SELECT COUNT(*) FROM Movie 
WHERE release_date > CURDATE();
```

**e.**
```
SELECT MAX(rating) FROM Movie;
```

**f.**
```
SELECT MIN(rating) FROM Movie;
```

### Exercício 7

**a.**
```
SELECT * FROM Movie 
ORDER BY title ASC;
```

**b.**
```
SELECT * FROM Movie 
ORDER BY title DESC LIMIT 5;
```

**c.**
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

**d.**
```
SELECT * FROM Movie 
ORDER BY rating 
DESC LIMIT 3;
```


