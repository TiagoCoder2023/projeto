import { links } from '../data/config';

function Links() {
    return (
        <ul className="links-list">
            {links.map((link) => (
                <li key={link.id}>
                    <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Links;

