/* =====================================================
   MySQL Practiced File
   Topics Covered:
   - Database Creation
   - Table Creation
   - Constraints
   - INSERT
   - SELECT with WHERE, AND, OR
   - BETWEEN, IN, NOT IN
   - LIMIT
   - ORDER BY
   - Aggregate Functions
   - GROUP BY & HAVING
   - UPDATE
   - DELETE
   - ALTER TABLE
   ===================================================== */


/* =======================
   DATABASE OPERATIONS
   ======================= */

CREATE DATABASE rss;
SHOW DATABASES;
USE rss;


/* =======================
   TABLE CREATION
   ======================= */

CREATE TABLE volunteers(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
area VARCHAR(50) UNIQUE,
join_date DATE,
work_experience INT CHECK (work_experience>4),
status ENUM('Active','Super active','Inactive') DEFAULT 'Active',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;


/* =======================
   INSERT OPERATIONS
   ======================= */

INSERT INTO volunteers (id,name,area,join_date,work_experience) VALUES
(500,"raj","ayc",'2020-11-23',5);

INSERT INTO volunteers (name,area,join_date,work_experience) VALUES
("ram","mtc",'2019-11-23',7);

INSERT INTO volunteers (name,area,join_date,work_experience,status) VALUES
("rakesh","gkp",'2019-4-23',7,'Super active');

INSERT INTO volunteers (name,area,join_date,work_experience,status) VALUES
("","lkw",'2019-4-23',7,'Super active');

INSERT INTO volunteers (name,area,join_date,work_experience,status) VALUES
("jack","pjb",'2019-9-23',8,'Super active');

INSERT INTO volunteers (name,area,join_date,work_experience,status) VALUES
("biden","usa",'2019-9-23',18,'inactive');

INSERT INTO volunteers (name,area,join_date,work_experience) VALUES
("hunter","uk",'2014-9-23',17);

INSERT INTO volunteers (name,area,work_experience) VALUES
("humau","pak",17);

INSERT INTO volunteers (id,name,area,work_experience) VALUES
(233,"vijay","sl",12);

INSERT INTO volunteers (name,area,work_experience) VALUES
("xijiang","prc",11);

SELECT * FROM volunteers;


/* =======================
   WHERE CLAUSE PRACTICE
   ======================= */

SELECT name,area FROM volunteers
WHERE work_experience+2=9 AND status='Active';

SELECT name,area FROM volunteers
WHERE work_experience+2=9 OR status='Active';

SELECT * FROM volunteers
WHERE id BETWEEN 506 AND 510;

SELECT * FROM volunteers
WHERE name 
IN ('hunter','kabir','aman','biden','ram','joe');

SELECT id,name,area,work_experience FROM volunteers
WHERE name 
NOT IN ('hunter','kabir','aman','biden','ram','joe')
LIMIT 3;


/* =======================
   LIMIT & ORDER BY
   ======================= */

SELECT id ,area,name,join_date FROM volunteers
LIMIT 4;

SELECT id, area, name, join_date, work_experience 
FROM volunteers
ORDER BY work_experience DESC
LIMIT 4;


/* =======================
   AGGREGATE FUNCTIONS
   ======================= */

SELECT MAX(work_experience) FROM volunteers;

SELECT COUNT(work_experience) FROM volunteers
WHERE work_experience=7;

SELECT MIN(work_experience) from volunteers;

SELECT AVG(work_experience) from volunteers;

SELECT SUM(work_experience) from volunteers;


/* =======================
   GROUP BY & HAVING
   ======================= */

SELECT work_experience,SUM(work_experience) AS Labour
FROM volunteers
GROUP BY work_experience
HAVING SUM(work_experience)>20;

SELECT work_experience,SUM(work_experience) AS Labour
FROM volunteers
GROUP BY work_experience
ORDER BY Labour DESC LIMIT 2;


/* =======================
   UPDATE & DELETE
   ======================= */

UPDATE volunteers
SET join_date='2017-03-19'
WHERE work_experience=7;

DELETE FROM volunteers 
WHERE work_experience=8
LIMIT 1;

UPDATE volunteers
SET Gender='female'
WHERE ID=510;


/* =======================
   ALTER TABLE OPERATIONS
   ======================= */

DROP TABLE IF EXISTS members;

ALTER TABLE volunteers
ADD COLUMN Gender VARCHAR (30) DEFAULT 'male';

ALTER TABLE volunteers
DROP COLUMN Gender;

ALTER TABLE volunteers
CHANGE COLUMN join_date joining DATE;

ALTER TABLE volunteers
CHANGE COLUMN joining join_date DATE;

ALTER TABLE volunteers
MODIFY join_date DATE DEFAULT '2020-11-20';

DELETE FROM volunteers 
WHERE join_date IS NULL
LIMIT 3;
