SELECT YEAR(hire_date) AS hire_year,
       MONTH(hire_date) AS hire_month,
       COUNT(*) AS hires
FROM employees
WHERE hire_date >= DATE_SUB(NOW(), INTERVAL 24 MONTH)
GROUP BY YEAR(hire_date), MONTH(hire_date)
ORDER BY hire_year, hire_month;