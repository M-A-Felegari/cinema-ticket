import React from 'react';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import styles from './MovieCardSkeletom.module.css';

function MovieCardSkeleton() {
    return (
        <SkeletonTheme baseColor="var(--c-primary)" highlightColor="var(--c-primary-light)">
            <div className={styles.movieCardSkeleton}>
                <div className={styles.left}>
                        <Skeleton circle={true} width='5rem' height='5rem'/>
                </div>
                <div className={styles.right}>
                    <h1><Skeleton width={70}/></h1>
                    <p>
                        <Skeleton count={3} width='100%'/>
                    </p>
                </div>
            </div>
        </SkeletonTheme>

    );
}

export default MovieCardSkeleton;