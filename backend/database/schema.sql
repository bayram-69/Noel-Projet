-- Delete this query and add yours !
CREATE TABLE manufacturer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    production_country VARCHAR(255)
);

CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(155),
    category_id INTEGER,
    quantity INTEGER,
    price INTEGER,
    fav BOOLEAN default 0,
    manufacturer_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id)
);

CREATE TABLE user (
    id int  NOT NULL AUTO_INCREMENT,
    firstname varchar(150)  NOT NULL,
    lastname varchar(150)  NOT NULL,
    birthdate date  NOT NULL,
    mail varchar(255)  NOT NULL UNIQUE,
    password varchar(255)  NOT NULL,
    registration_date DATETIME NOT NULL DEFAULT NOW(),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT user_pk PRIMARY KEY (id)
);

CREATE TABLE contact (
    id INT  NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email varchar(255)  NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT NOW(),
    CONSTRAINT id PRIMARY KEY (id)
);
