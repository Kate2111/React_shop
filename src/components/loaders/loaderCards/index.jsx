import React from "react"
import ContentLoader from "react-content-loader"
import style from './loader.module.scss'

const LoaderCards = ({numberOfLoaderCards}) => {
    return ( 
        <div className={style.item}>
            {Array.from({ length: numberOfLoaderCards }, (_, index) => (
                <ContentLoader key={index}
                    speed={2}
                    width={200}
                    height={336}
                    viewBox="0 0 200 336"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="3" ry="3" width="200" height="250" /> 
                    <rect x="0" y="304" rx="3" ry="3" width="48" height="24" /> 
                    <circle cx="176" cy="315" r="14" /> 
                    <circle cx="136" cy="314" r="14" /> 
                    <rect x="0" y="263" rx="0" ry="0" width="200" height="6" /> 
                    <rect x="0" y="273" rx="0" ry="0" width="200" height="6" /> 
                    <rect x="0" y="283" rx="0" ry="0" width="200" height="6" />
                </ContentLoader>
            ))}
        </div>
    );
};


export default LoaderCards;
