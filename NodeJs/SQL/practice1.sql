-- Create a database for your college.
-- Create a table named Teacher to store (id, name, subject, salary)
-- Insert following data in the table :
-- 23, "ajay", "math", 50000
-- 47, "bharat", "english", 60000
-- 18, "chetan", "chemistry", 45000
-- 9, "divya", "physics", 75000
-- Practice Qs
-- Select teachers whose salary is more than 55K
-- · Rename the salary column of teacher table to ctc
-- . Update salary of all teachers by giving them an increment of 25%
-- . Add a new column for teachers called city. The default city should be "Gurgaon"
-- · Delete the salary column for teacher table
CREATE DATABASE college;
USE college;            
CREATE TABLE Teacher(
id INT PRIMARY KEY,        
name VARCHAR(100),
subject VARCHAR(100),
salary INT
);
INSERT INTO teacher VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);
SELECT * FROM teacher;
SELECT * FROM teacher 
WHERE sallery >55000;
ALTER TABLE teacher
CHANGE COLUMN sallery ctc INT;
SET SQL_SAFE_UPDATES = 0;
UPDATE teacher
SET ctc = ctc*1.25;
ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT 'GURGAV';
ALTER TABLE teacher
DROP COLUMN city;
