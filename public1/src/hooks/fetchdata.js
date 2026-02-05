const API_BASE_URL = "http://localhost:5000/api";
export async function getProjects() {
 const res = await fetch(`${API_BASE_URL}/projects`);
 if (!res.ok) {
   throw new Error("Failed to fetch projects");
 }
 return res.json();
}
export async function getBlogs() {
 const res = await fetch(`${API_BASE_URL}/blogs`);
 if (!res.ok) {
   throw new Error("Failed to fetch blogs");
 }
 return res.json();
}
}
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/api";
export default function Home() {
 const [projects, setProjects] = useState([]);
 useEffect(() => {
   getProjects()
     .then(setProjects)
     .catch(console.error);
 }, []);
 return (
<div>
     {projects.map((p: any) => (
<div key={p._id}>{p.title}</div>
     ))}
</div>
 );
}
import axios from 'axios';

axios.get('https://willtech-website.onrender.com/fetch') 
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });