import Link from 'next/link';
import { Mail, Link2 as LinkIcon } from 'lucide-react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.502 1.905 6.37l-.36 1.325-1.431.395 1.365-.374.351-1.251zM11.999 9.352c-.225 0-.442.028-.65.085-.206.057-.42.127-.61.271-.19.144-.35.343-.46.573-.11.23-.15.483-.15.722 0 .23.04.47.13.68.09.21.22.39.38.53.16.14.35.25.56.33.21.08.43.12.65.12.26 0 .5-.06.71-.16.21-.1.39-.25.53-.43.14-.18.25-.39.3-.63.05-.24.06-.48.01-.73s-.15-.49-.3-.68c-.15-.19-.34-.34-.57-.44-.23-.1-.48-.15-.73-.15zm4.538 5.43c-.225.33-.538.588-.893.736-.355.148-.737.21-1.125.21-.46 0-.9-.08-1.31-.23-.41-.15-.78-.37-1.11-.65-.33-.28-.6-.6-.82-1.04-.22-.44-.33-.95-.33-1.52 0-.57.11-1.06.34-1.5.23-.44.53-.81.9-1.11.37-.3.8-.52 1.28-.66.48-.14 1-.21 1.52-.21.51 0 1 .07 1.46.21.46.14.86.36 1.21.66.35.3.63.67.84 1.1.21.43.32.94.32 1.51 0 .61-.13 1.16-.38 1.64-.12.24-.28.45-.46.63zm-4.53-3.23c-.26 0-.5.06-.71.16-.21.1-.39.24-.53.42-.14.18-.24.39-.3.61-.06.22-.07.45-.01.68s.16.45.3.64c.14.19.33.34.56.44.23.1.48.15.74.15.28 0 .54-.06.78-.17.24-.11.45-.27.61-.47.16-.2.28-.44.35-.71.07-.27.08-.55.03-.83s-.17-.55-.32-.78c-.15-.23-.35-.42-.59-.56-.24-.14-.51-.21-.79-.21z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="instagram-gradient" cx="30.29%" cy="99.42%" r="141.25%" fx="30.29%" fy="99.42%">
        <stop stopColor="#F9D423" offset="0%" />
        <stop stopColor="#FD5949" offset="45.24%" />
        <stop stopColor="#D6249F" offset="60.33%" />
        <stop stopColor="#6C289F" offset="90.22%" />
      </radialGradient>
    </defs>
    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GoogleIconSimple = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.02 10.18v3.64h5.51c-.22 1.18-1.5 3.32-5.51 3.32-3.32 0-6.02-2.76-6.02-6.14s2.7-6.14 6.02-6.14c1.88 0 3.12.8 3.84 1.54l2.84-2.76C16.92 1.8 14.72 0 12.02 0 5.4 0 0 5.38 0 12s5.4 12 12.02 12c6.8 0 11.52-4.72 11.52-11.78 0-.8-.08-1.54-.22-2.22h-11.3z" />
    </svg>
);

const InstagramIconSimple = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 4.316c-2.404 0-4.352 1.948-4.352 4.352s1.948 4.352 4.352 4.352 4.352-1.948 4.352-4.352S14.404 8.479 12 8.479zm0 7.262c-1.606 0-2.91-1.304-2.91-2.91s1.304-2.91 2.91-2.91 2.91 1.304 2.91 2.91-1.304 2.91-2.91 2.91zm5.92-7.58c-.703 0-1.27.567-1.27 1.27s.567 1.27 1.27 1.27 1.27-.567 1.27-1.27-.567-1.27-1.27-1.27z"/>
    </svg>
);


const FooterSection = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 w-full">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between pb-8">
                    <Link href="/" className="text-2xl font-bold mb-6 md:mb-0 text-white">
                        {'gdg'}<span className="text-[#a855f7]">_</span>{'jdcoem'}
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <a href="https://spectrum.gdgvitm.tech/" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:underline underline-offset-4 transition-all">Spectrum</a>
                        <Link href="/gallery" className="text-base text-white hover:underline underline-offset-4 transition-all">Gallery</Link>
                        <Link href="/team" className="text-base text-white hover:underline underline-offset-4 transition-all">Team</Link>
                        <Link href="/join-us" className="text-base text-white hover:underline underline-offset-4 transition-all">Join Us</Link>
                    </nav>

                    <div className="flex items-center space-x-6 mt-6 md:mt-0">
                        <a href="https://gdg.community.dev/gdg-on-campus-jd-college-of-engineering-and-management-nagpur/" target="_blank" rel="noopener noreferrer" aria-label="GDG Community Page" className="hover:opacity-80 transition-opacity">
                           <GoogleIcon className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/GDGJWDCOEM" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80 transition-opacity">
                           <GithubIcon className="w-6 h-6 text-white" />
                        </a>
                        <a href="https://www.linkedin.com/company/google-developer-groups-jdcoem-nagpur" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                            <LinkedinIcon className="w-6 h-6 text-[#0a66c2]" />
                        </a>
                        <a href="https://chat.whatsapp.com/GTP2ydK7MyXFBRwf8vnrNW" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
                            <WhatsAppIcon className="w-6 h-6 text-[#25d366]" />
                        </a>
                        <a href="https://www.instagram.com/gdg_jdcoem/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                
                <div className="border-t border-[#333333] my-8"></div>

                <div className="flex flex-col items-center text-center space-y-6 pt-4">
                    <div className="flex items-center space-x-6 text-[#ec4899]">
                        <a href="https://gdg.community.dev/gdg-on-campus-jd-college-of-engineering-and-management-nagpur/" target="_blank" rel="noopener noreferrer" aria-label="GDG Community Page" className="hover:opacity-80 transition-opacity">
                           <GoogleIconSimple className="w-7 h-7" />
                        </a>
                        <a href="https://github.com/GDGJWDCOEM" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80 transition-opacity">
                           <GithubIcon className="w-7 h-7" />
                        </a>
                        <a href="https://www.linkedin.com/company/google-developer-groups-jdcoem-nagpur" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                            <LinkedinIcon className="w-7 h-7" />
                        </a>
                        <a href="https://chat.whatsapp.com/GTP2ydK7MyXFBRwf8vnrNW" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
                            <WhatsAppIcon className="w-7 h-7" />
                        </a>
                        <a href="https://www.instagram.com/gdg_jdcoem/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                           <InstagramIconSimple className="w-7 h-7" />
                        </a>
                    </div>
                    
                    <p className="text-sm text-[#9ca3af]">
                        Copyright © 2025 GDG JDCOEM Nagpur. Open Source.
                    </p>

                    <a href="mailto:gdgoncampus.jdcoem@gmail.com" className="flex items-center gap-2 text-[#ec4899] text-sm hover:underline">
                        <Mail className="w-4 h-4" />
                        gdgoncampus.jdcoem@gmail.com
                    </a>

                    <p className="text-sm text-gray-400">
                        GDG-JDCOEM operates from JD College of Engineering and Management, Nagpur, India.
                    </p>

                    <a href="#" className="flex items-center gap-2 text-[#ec4899] text-sm hover:underline">
                        <LinkIcon className="w-4 h-4" />
                        Did you see our Terminal?
                    </a>
                    
                    <div className="font-mono text-sm bg-gray-900 px-4 py-2 rounded-md inline-block">
                        <span className="text-[#00ff00] select-none">$ </span>
                        sudo rm -rf negativity/
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;