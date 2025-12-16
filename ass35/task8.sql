
UPDATE employees
SET username = CONCAT(
    SUBSTRING(first_name, 1, 3),
    LPAD(emp_id, 4, '0')
);