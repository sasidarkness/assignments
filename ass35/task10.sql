CREATE VIEW vw_valid_phones AS
SELECT emp_id,
       phone,
       CASE 
           WHEN REGEXP_LIKE(phone, '^[0-9]{10,15}$') 
           THEN CONCAT('+', phone)  
           ELSE 'INVALID'
       END AS normalized_phone
FROM (
    SELECT emp_id, REGEXP_REPLACE(phone, '[^0-9]', '') AS phone
    FROM employees
) t;