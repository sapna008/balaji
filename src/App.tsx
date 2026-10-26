import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './components/layout/MainLayout';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { PropertiesPage } from './pages/Properties/PropertiesPage';
import { PropertyDetailsPage } from './pages/PropertyDetails/PropertyDetailsPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { LocationsPage } from './pages/Locations/LocationsPage';
import { BlogPage } from './pages/Blog/BlogPage';
import { BlogPostPage } from './pages/Blog/BlogPostPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { PrivacyPolicyPage } from './pages/Legal/PrivacyPolicyPage';
import { TermsPage } from './pages/Legal/TermsPage';
import { SitemapPage } from './pages/Legal/SitemapPage';
import { NotFoundPage } from './pages/Legal/NotFoundPage';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="properties" element={<PropertiesPage />} />
            <Route path="properties/:slug" element={<PropertyDetailsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="insights" element={<BlogPage />} />
            <Route path="insights/:slug" element={<BlogPostPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-and-conditions" element={<TermsPage />} />
            <Route path="sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
