-- Qs: Create a table to store student info (roll_no, name, city, marks).
-- Insert following data in the table :
-- 110, "adam", "Delhi", 76
-- 108, "bob", "Mumbai", 65
-- 124, "casey", "Pune", 94
-- 112, "duke", "Pune", 80
-- Practice Qs
-- · Select all students who scored 75+
-- . Find names of all cities where students are from 4
-- . Find the maximum marks of students from each city
-- . Find the average of the class
-- · Add a new column grade, assign grade such that :
-- marks > 80, grade = O
-- marks 70-80, grade = A
-- marks 60-70, grade = B
CREATE DATABASE school;
USE school;
CREATE TABLE students(
roll_no INT PRIMARY KEY,
name VARCHAR(100),
city VARCHAR(100),
marks INT
);
INSERT INTO students VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);
SELECT * FROM students;
SELECT * FROM students
WHERE marks > 75;
SELECT DISTINCT city FROM students;
SELECT city, MAX(marks) FROM students   
GROUP BY city;
SELECT AVG(marks) FROM students;
ALTER TABLE students
ADD COLUMN grade VARCHAR(5);
UPDATE  students
SET grade='O'
WHERE marks>80 ;
UPDATE  students
SET grade='A'
WHERE marks>70 AND marks<=80 ;
UPDATE  students
SET grade='B'
WHERE marks>60 AND marks<70;
SET SQL_SAFE_UPDATES = 0;
