import { useEffect } from 'react';
import { businessConfig } from '../../config/businessConfig';

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
}) => {
  useEffect(() => {
    // Set document title
    const fullTitle = `${title} | ${businessConfig.name} Mumbai`;
    document.title = fullTitle;

    // Set meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Set canonical link
    if (canonicalPath) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute(
        'href',
        `https://www.balajienterprisesmumbai.com${canonicalPath}`
      );
    }
  }, [title, description, canonicalPath]);

  return null;
};
