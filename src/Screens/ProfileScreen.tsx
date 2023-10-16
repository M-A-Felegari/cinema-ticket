import React from 'react';
import NoticeBox from "../Components/NoticeBox";
import loginImage from "../Assets/images/login_character.svg"

function ProfileScreen() {
    return (
        <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{width:'90%',marginTop:'1.5rem'}}>
                <NoticeBox
                    imageSrc={loginImage}
                    imageAlt="login"
                    description="For a better experience, I recommend you to enter your phone number and have an account"
                    footer={(<button>LogIn</button>)}
                />
            </div>
        </div>
    );
}

export default ProfileScreen;