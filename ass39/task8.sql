CREATE TABLE UserLoginLog (
    LogID INT IDENTITY(1,1) PRIMARY KEY,   
    UserID INT NOT NULL,                 
    LoginTime DATETIME NOT NULL DEFAULT GETDATE()  
);
CREATE PROCEDURE LogUserLogin
    @UserID INT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO UserLoginLog (UserID, LoginTime)
    VALUES (@UserID, GETDATE());
END;