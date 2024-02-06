import React from 'react';
import NoticeBox from "../Components/NoticeBox";
import loginImage from "../Assets/images/login_character.svg"
import './styles/ProfileScreen.css';
import { motion } from 'framer-motion';

function ProfileScreen() {

    return (
        <motion.main
            className='profileScreen'
            // initial={{ x:'-100%'}}
            // animate={{ x:0}}
            // // exit={{x:'100%',transition:{duration:.02}}}
            // transition={{ duration: .5}}
        >
            <div className='noticeBoxContainer'>
                <NoticeBox
                    imageSrc={loginImage}
                    imageAlt="login"
                    description="For a better experience, I recommend you to enter your phone number and have an account"
                    footer={(<button>LogIn</button>)}
                />
            </div>
        </motion.main>
    );
}

export default ProfileScreen;