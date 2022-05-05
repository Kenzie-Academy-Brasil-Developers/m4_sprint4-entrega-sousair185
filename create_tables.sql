CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY UNIQUE,
  name VARCHAR(128) UNIQUE NOT NULL,
  );
  
CREATE TABLE IF NOT EXISTS products (
  product_id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR(200) NOT NULL,
  price DECIMAL(8,2) NOT NULL,
  CHECK (price > 0),
  category_id INTEGER,
  PRIMARY KEY (product_id),
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL
  );