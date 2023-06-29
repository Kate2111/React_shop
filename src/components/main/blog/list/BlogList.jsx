import React from 'react';
import style from './BlogList.module.scss'

const BlogList = () => {
    const blogs =[
        {name: "img_1.jpg", date: "March 12, 2020 |", autor: "by Ann Summers | ", theme: "Inrerior", title: "Listicle actually selvage activated charcoal for the drinking vinegar"},
        {name: "img_2.jpg", date: "September 28,2020 |", autor: "by Finnagan Morningstar | ", theme: "Dining room interior", title: "Red selfies edison bulb four dollar toast humblebrag"},
    ]

    return (
        <div className={style.items}>
            {
                blogs.map(blog => {
                    return  <div>
                                <a className={style.linkImg} href="#" >
                                    <img className={style.img} src={require(`@assets/images/block/${blog.name}`)} alt="block" />
                                </a>

                                <div className={style.links}>
                                    <span className={style.date}>{blog.date}</span>
                                    <a className={style.autor} href="#">{blog.autor}</a>
                                    <a className={style.theme}href="#">{blog.theme}</a>
                                </div>

                                <a href="#">
                                    <h4 className={style.title}>{blog.title}</h4>
                                </a>
                            </div>
                })
            }
        </div>
    );
};

export default BlogList;