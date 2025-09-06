import React from 'react';

interface ScrollLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(to);
        if (element) {
            const navbarHeight = 84; // Adjust based on your navbar height
            const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <a href={`#${to}`} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

export default ScrollLink;