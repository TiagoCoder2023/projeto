import { links } from '../data/config';

function SocialLinks() {
    return (
        <div className="social-links">
            {links.map((link) => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                >
                    <ion-icon name={link.icon}></ion-icon>
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;

