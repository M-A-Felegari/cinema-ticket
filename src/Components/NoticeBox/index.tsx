import React, {ReactNode} from 'react';
import styles from './index.module.css'
import {ImNotification} from "react-icons/im";
interface NoticeBoxProps {
    imageSrc:string
    imageAlt:string
    description:string
    footer?:ReactNode
}

function NoticeBox({imageSrc,imageAlt,description,footer}:NoticeBoxProps) {
    return (
        <div className={styles.noticeBox}>
            <div className={styles.topBar}>
                <ImNotification/> Notice
            </div>
            <div className={styles.main}>
                <div className={styles.imageContainer}>
                    <img src={imageSrc} alt={imageAlt}/>
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.footer}>
                    {footer}
                </div>
            </div>
        </div>
    );
}

export default NoticeBox;