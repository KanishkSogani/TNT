import React from "react";

const Footer = () => {
    return (
        <footer className={`flex items-center justify-center py-4 bg-[#B5E8F8] text-black dark:text-white dark:bg-black " }`}>
            <p className="text-center text-lg font-medium" style={{ fontFamily: "var(--font-bebas-nueue)" }} >
                <span className="mr-1">&copy;</span>
                The Stable Order. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
