CREATE DATABASE restobupro;

\c restobupro

CREATE TABLE users (
    id          SERIAL       PRIMARY KEY,
    nombre      VARCHAR(100),
    email       VARCHAR(100) UNIQUE NOT NULL,
    contraseña  VARCHAR(100) NOT NULL
)