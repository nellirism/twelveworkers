INSERT INTO department (dept_name) VALUES ('Happiness'), ('Kindness'), ('People'), ('Security');
INSERT INTO company_role (title, salary, dept_id) VALUES
('Happiness Manager', 80000.00, 3), 
('Head of Kindness', 60000.00, 1),
('Director of People', 30000.00, 1),
('Liaison of Joy', 30000.00, 1 ),
('Charity Leader', 20000.00, 1),                
('Smiles Manager', 40000.00, 2),
('Good Follower', 30000.00, 2),
('Agape Captain', 20000.00, 1);

INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('Maple', 'Chocorish', 1, null),
('Agave', 'Eden', 2, 1),
('Syrup', 'Caramel', 1, null),
('Autumn', 'Destiny', 3, 1),
('Zevia', 'Winterling', 4, null);