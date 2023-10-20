import React, {ReactNode} from 'react';
import styles from './index.module.css'
import {ImNotification} from "react-icons/im";
import { motion } from 'framer-motion';
interface NoticeBoxProps {
    imageSrc:string
    imageAlt:string
    description:string
    footer?:ReactNode
}

function NoticeBox({imageSrc,imageAlt,description,footer}:NoticeBoxProps) {
    return (
        <motion.div
            className={styles.noticeBox}
            initial={{opacity:0,y:-30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.3}}
        >
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
        </motion.div>
    );
}

export default NoticeBox;