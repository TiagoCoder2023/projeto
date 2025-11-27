import { useContext } from 'react';
import { ThemeContext } from '../App';
import { profileData } from '../data/config';

function Profile() {
    const { isLightMode } = useContext(ThemeContext);
    const avatar = isLightMode ? profileData.avatarLight : profileData.avatar;

    return (
        <div className="profile">
            <img src={avatar} alt="Foto de perfil avatar" />
            <p style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px' }}>{profileData.name}</p>
            <p>{profileData.username}</p>
            {profileData.location && (
                <p style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>📍 {profileData.location}</p>
            )}
        </div>
    );
}

export default Profile;

