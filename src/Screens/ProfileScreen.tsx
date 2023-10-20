import React from 'react';
import NoticeBox from "../Components/NoticeBox";
import loginImage from "../Assets/images/login_character.svg"
import './styles/ProfileScreen.css';

function ProfileScreen() {
    return (
        <main className='profileScreen'>
            <div className='noticeBoxContainer'>
                <NoticeBox
                    imageSrc={loginImage}
                    imageAlt="login"
                    description="For a better experience, I recommend you to enter your phone number and have an account"
                    footer={(<button>LogIn</button>)}
                />
            </div>
        </main>
    );
}

export default ProfileScreen;