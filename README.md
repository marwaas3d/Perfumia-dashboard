readme_content = """
# 🧴 Perfumia Dashboard

demo : https://perfume-dashboard.netlify.app/

This is an Angular dashboard project to manage products for the **Perfumia** store.  
The backend is built using **Supabase**, allowing full CRUD (Create, Read, Update, Delete) operations on products.

## 🚀 Features

- ✅ Display list of all products  
- ➕ Add new product  
- 📝 Edit existing product  
- ❌ Delete product  
- 📡 Connected to **Supabase** Realtime API

## 🛠️ Technologies Used

- **Angular** 18  
- **Supabase**  
- **TypeScript**  
- **SCSS**

## 🧩 Folder Structure

src/
│
├── app/
│ ├── components/ # Reusable components
│ ├── pages/ # Pages like Products List, Add/Edit
│ ├── services/ # Supabase service to handle API
│ └── app.module.ts # Main app module
│
├── assets/ 
├── environments/ # Supabase keys and environment config
└── index.html

markdown
Copy
Edit

## 🔌 Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a project  
2. Create a table called `products` with fields like: 
   - `name` (text)  
   - `description` (text)  
   - `price` (number)  
   - `Cover Image URL` (text)  
3. Get your **Project URL** and **Anon Key** from `Project Settings > API`  
4. Add them to `environment.ts` like:

```ts
export const environment = {
  production: false,
  supabaseUrl: 'https://xyzcompany.supabase.co',
  supabaseKey: 'your-anon-key-here',
};
📦 Install Dependencies
bash
Copy
Edit
npm install
▶️ Run the Project
bash
Copy
Edit
ng serve
🧪 CRUD Operations
All operations are done using Supabase JS Client:

insert() → Add a new product

select() → Get all products

update() → Edit a product

delete() → Remove a product

These are wrapped inside a service like supabase.service.ts.
