CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100),
    marks INT
);
INSERT INTO students (student_name, marks) VALUES
('Arun', 85),
('kumar', 92),
('sasi', 78),
('divya', 95);
delimiter $$
create procedure pd_std()
begin
select * from students;
end $$
delimiter ;
call pd_std()