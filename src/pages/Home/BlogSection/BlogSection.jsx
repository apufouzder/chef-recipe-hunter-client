import { useEffect, useState } from "react";


const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tasty-chef-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className="my-10">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-4">Our <span className="text-orange-500">Blogs</span></h1>
                <p className="text-gray-700 text-lg">Meet our team of talented Bangladeshi chefs who are passionate about creating delicious and authentic dishes. <br /> Get ready to indulge in a culinary journey through the rich and diverse tastes of Bangladesh!</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
                {
                    blogs.map(blog => (
                        <div key={blog.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={blog.featuredImage} alt={blog.title} /></figure>
                            <strong className="mt-2 pl-4 text-orange-400">Date: {blog.publicationDate}</strong>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>Author: {blog.author}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning">Read more</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogSection;