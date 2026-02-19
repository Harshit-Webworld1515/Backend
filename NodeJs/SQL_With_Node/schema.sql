CREATE TABLE user(
id VARCHAR(50) PRIMARY KEY,
username VARCHAR(50) UNIQUE,
email VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(50) NOT NULL
);
-- to run the above code:=> mysql -u root -p then enter the password Harshit@9670

