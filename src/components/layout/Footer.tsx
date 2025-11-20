import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full mt-12 bg-black text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="About WEBTOON">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Help">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Guidelines">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Canvas">
                  Canvas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Publish</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Start Publishing">
                  Publish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Careers">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4" role="list">
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Message Circle">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-neutral-400 text-xs leading-relaxed">
          <p>© 2025 Webtoon (Unofficial Redesign for Educational/Portfolio Use)</p>
          <p className="mt-1">
            Created by Pushan Bhattacharyya for UX research and portfolio purposes only. 
            No affiliation with WEBTOON Entertainment Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

