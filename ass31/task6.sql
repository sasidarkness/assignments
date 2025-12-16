
CREATE TABLE assignments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_id INT NOT NULL,
    title VARCHAR(100),
    description TEXT,
    due_date DATE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);
