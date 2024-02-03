import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <p>
      &copy; Copyright {new Date().getFullYear()}{' '}
      <a
        href='https://lareponsedev.com'
        target='_blank'
        className='text-cyan-400 hover:underline'>
        LaReponseDev
      </a>
      . Design{' '}
      <a
        href='https://creativedesignsguru.com/'
        target='_blank'
        className='text-cyan-400 hover:underline'>
        CreativeDesignsGuru
      </a>
      .
    </p>
  </Section>
);

export { Footer };
