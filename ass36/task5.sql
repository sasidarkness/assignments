SELECT LPAD(roll_number, 4, '0') AS formatted_roll
FROM students;

SELECT LPAD(roll_number::text, 4, '0') AS formatted_roll
FROM students;

SELECT RIGHT('0000' + CAST(roll_number AS VARCHAR(4)), 4) AS formatted_roll
FROM students;

SELECT LPAD(roll_number, 4, '0') AS formatted_roll
FROM students;
