CREATE DATABASE IF NOT EXISTS quotesApp

USE quotesApp

CREATE TABLE quotes (
  ID INT NOT NULL AUTO_INCREMENT,
  AUTHOR VARCHAR(100) NOT NULL,
  QUOTE VARCHAR(1000) NOT NULL,
  IntroTime DATE NOT NULL,
  PRIMARY KEY (ID)
);
