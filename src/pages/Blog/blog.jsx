import React, { useState } from 'react';
import blogData from '../../json/blog.json';
import productData from '../../json/product.json';
import Images from '../../constant/images';
import { motion } from 'framer-motion';

const featuredProducts = productData.slice(0, 5);
const tags = ['crafts', 'street style'];

const POSTS_PER_PAGE = 2;

const BlogPage = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
    const paginatedPosts = blogData.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

    return (
        <div className="bg-[#fafafa] min-h-screen">
            <div className="relative w-full h-64 flex items-center justify-center" style={{ background: 'url(/src/assets/images/banner-08.jpg) center/cover, #222' }}>
                <h1 className="text-white text-4xl font-extrabold tracking-wide text-center z-10">NEWS</h1>
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 py-12 px-4 lg:px-0 max-w-6xl">
                {/* Blog Posts */}
                <div className="flex-1 flex flex-col gap-12 items-center">
                    {paginatedPosts.map((post) => (
                        <div key={post.id} className="flex flex-col items-center w-full max-w-2xl mx-auto p-8">
                            <div className="relative w-full" style={{ maxWidth: '700px', aspectRatio: '1/1' }}>
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover rounded"
                                    style={{ aspectRatio: '1/1' }}
                                />
                                <span className="absolute left-0 bottom-0 m-4 bg-black text-white text-xs px-3 py-1 rounded font-semibold tracking-wider shadow-lg">{post.date.toUpperCase()}</span>
                            </div>
                            <h2 className="text-2xl font-bold mt-8 mb-2 text-center hover:text-[#e65540] cursor-pointer transition-colors">{post.title}</h2>
                            <div className="text-xs text-gray-500 mb-2 text-center">
                                by fashe-theme Admin | <span className="text-[#e65540]">crafts, street style</span> | 1 Comments
                            </div>
                            <p className="text-base text-gray-700 mb-4 text-center">{post.description}</p>
                            <a href="#" className="text-sm text-[#e65540] font-semibold hover:underline flex items-center gap-1 justify-center">Continue Reading <span>&#8594;</span></a>
                        </div>
                    ))}
                    {/* Pagination */}
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border ${page === i + 1 ? 'bg-black text-white' : 'bg-white text-black border-gray-300'} transition-colors`}
                                aria-current={page === i + 1 ? 'page' : undefined}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Sidebar */}
                <aside className="w-full lg:w-1/3 flex flex-col gap-8">
                    {/* Search */}
                    <div className="bg-white rounded shadow-sm p-4 flex items-center gap-2">
                        <input type="text" placeholder="Search all articles..." className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none" />
                        <button className="text-gray-400 hover:text-[#e65540]">
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        </button>
                    </div>
                    {/* Featured Products */}
                    <div className="bg-white rounded shadow-sm p-4">
                        <h3 className="text-base font-bold mb-4">Featured Products</h3>
                        <ul className="flex flex-col gap-4">
                            {featuredProducts.map((product) => (
                                <li key={product.id} className="flex items-center gap-3">
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.7 }}
                                        src={Images[product.image]}
                                        alt={product.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <div>
                                        <div className="text-xs font-medium text-gray-700 line-clamp-1">{product.name}</div>
                                        <div className="text-xs text-gray-500">${product.price.toFixed(2)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Tags Cloud */}
                    <div className="bg-white rounded shadow-sm p-4">
                        <h3 className="text-base font-bold mb-4">Tags Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-600 border border-gray-200">{tag}</span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogPage;