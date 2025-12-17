CREATE PROCEDURE GetProductDetails
    @ProductID INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        StockQuantity
    FROM Products
    WHERE ProductID = @ProductID;
END;