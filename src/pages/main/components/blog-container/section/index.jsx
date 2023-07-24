import React from 'react';
import BlogList from '../list';
import style from './section.module.scss'

const BlogSection = () => {
    return (
        <section className={style.blog}>
            <div className="container">
                <h3 className={style.title}>More inspiration ideas in our blog</h3>
                <BlogList/>
            </div>
        </section>
    );
};

export default BlogSection;