CREATE PROCEDURE GetMonthlySales
    @Year INT,
    @Month INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT SUM(Amount) AS TotalSales
    FROM Sales
    WHERE YEAR(SaleDate) = @Year
      AND MONTH(SaleDate) = @Month;
END;
EXEC GetMonthlySales @Year = 2025, @Month = 12;