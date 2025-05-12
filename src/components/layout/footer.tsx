import Link from 'next/link';
import { Youtube, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://www.youtube.com/channel/UC_MAancGcA0YeACrpSwokhQ" aria-label="Youtube" className="text-muted-foreground hover:text-primary transition-colors">
            <Youtube size={24} />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Soda Stereo. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
          Diseñado por CIDSIA
        </p>
      </div>
    </footer>
  );
}
