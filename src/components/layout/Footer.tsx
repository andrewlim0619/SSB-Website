import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Jasa Boga", href: "/jasa-boga" },
  { label: "Hubungi Kami", href: "/hubungi-kami" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-pad py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wide">KONTAK</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Jl. Kav DPR blok A4 no 169-170 Cipondoh Tangerang, Banten, Kota Tangerang, Cipondoh, 15148</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>xxxx@ptssb.co.id</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>0812 3456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-teal" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.99 0C5.376 0 0 5.373 0 11.99c0 2.117.554 4.1 1.522 5.825L0 24l6.335-1.499A11.934 11.934 0 0011.99 24C18.607 24 24 18.627 24 12.01 24 5.373 18.607 0 11.99 0zm0 21.818a9.823 9.823 0 01-5.011-1.371l-.36-.214-3.732.882.916-3.636-.235-.373A9.79 9.79 0 012.18 12.01c0-5.417 4.393-9.828 9.81-9.828 5.418 0 9.828 4.411 9.828 9.828 0 5.418-4.41 9.808-9.828 9.808z" />
                </svg>
                <span>0812 3456 789</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wide">HUBUNGI KAMI</h3>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-teal hover:text-teal text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-teal hover:text-teal text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.99 0C5.376 0 0 5.373 0 11.99c0 2.117.554 4.1 1.522 5.825L0 24l6.335-1.499A11.934 11.934 0 0011.99 24C18.607 24 24 18.627 24 12.01 24 5.373 18.607 0 11.99 0zm0 21.818a9.823 9.823 0 01-5.011-1.371l-.36-.214-3.732.882.916-3.636-.235-.373A9.79 9.79 0 012.18 12.01c0-5.417 4.393-9.828 9.81-9.828 5.418 0 9.828 4.411 9.828 9.828 0 5.418-4.41 9.808-9.828 9.808z" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:xxxx@ptssb.co.id" aria-label="Email" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-teal hover:text-teal text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="container-pad py-4 text-center text-xs text-gray-400">
          © 2024 PT Selera Sukses Bersama. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
