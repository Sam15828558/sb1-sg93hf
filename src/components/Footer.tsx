import React from 'react';

export function Footer() {
  return (
    <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
          <a
            href="https://formation.shinobi.club"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Formation Shinobi
          </a>
          <a
            href="https://lafaquinerie.shinobi.club"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            La Faquinerie
          </a>
          <a
            href="https://linktr.ee/2manyseos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            2ManySEOs
          </a>
          <a
            href="https://www.threads.net/@shinobindaclub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Threads
          </a>
          <a
            href="https://consultant-2-seo.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a
            href="https://www.tumblr.com/shinobi-club"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Tumblr
          </a>
          <a
            href="https://www.instapaper.com/p/fitbit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Instapaper
          </a>
        </div>
      </div>
    </footer>
  );
}