import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.author} />
    <p>
      &copy; Copyright {new Date().getFullYear()} par{' '}
      <a href="https://lareponsedev.com" target="_blank">
        LaReponseDev
      </a>
    </p>
  </Section>
);

export { Footer };
