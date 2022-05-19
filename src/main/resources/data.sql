DROP TABLE IF EXISTS employees;

CREATE TABLE employees
(
id BIGINT IDENTITY ,
firstName varchar(255),
lastName varchar(255),
email varchar(255),
PRIMARY KEY (id)
);

INSERT INTO employees (firstName, lastName, email) VALUES
  ('ziko', 'Dangote', 'jul@hotmail.fr'),
  ('Bill', 'Gates', 'jul2@hotmail.fr'),
  ('florent', 'bomb', 'jul4@hotmail.fr');