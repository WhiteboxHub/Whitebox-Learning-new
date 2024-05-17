CREATE DATABASE student;
use student

CREATE TABLE student(
    StudentID int not null AUTO_INCREMENT,
    FirstName varchar(100) NOT NULL,
    Surname varchar(100) NOT NULL,
    PRIMARY KEY (StudentID)
);

INSERT INTO student (FirstName, Surname)
VALUES ("Ameer", "Hamza"), ("Hemanth", "Kumar"), ("Vinay", "Patel");
