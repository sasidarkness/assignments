
SELECT 
    DATEDIFF(
        CASE 
            WHEN CURDATE() > DATE(CONCAT(YEAR(CURDATE()), '-05-15'))
            THEN DATE(CONCAT(YEAR(CURDATE()) + 1, '-05-15'))
            ELSE DATE(CONCAT(YEAR(CURDATE()), '-05-15'))
        END,
        CURDATE()
    ) AS days_until_next_birthday;
