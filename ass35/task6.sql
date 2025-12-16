
CREATE TABLE employee_contacts_clean AS
SELECT emp_id,
       LOWER(TRIM(email)) AS clean_email,
       REGEXP_REPLACE(phone, '[^0-9]', '') AS clean_phone
FROM employees;