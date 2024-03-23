import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Bonjour je suis <GradientText>Loan</GradientText> 👋
        </>
      }
      description={
        <>
          J'ai une chaine youtube de jeu retro et de roblox{' '}
          <a
            className='text-cyan-400 hover:underline'
            href='/'>
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a
            className='text-cyan-400 hover:underline'
            href='/'>
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </>
      }
      avatar={
        <img
          className='h-80 w-80 rounded-full object-cover object-center shadow-lg'
          src='/assets/images/avatar.png'
          alt='Avatar image'
          loading='lazy'
        />
      }
      socialButtons={
        <>
          <a href='/'>
            <HeroSocial
              src='/assets/images/twitter-icon.png'
              alt='Twitter icon'
            />
          </a>
          <a href='/'>
            <HeroSocial
              src='/assets/images/facebook-icon.png'
              alt='Facebook icon'
            />
          </a>
          <a href='/'>
            <HeroSocial
              src='/assets/images/linkedin-icon.png'
              alt='Linkedin icon'
            />
          </a>
          <a
            href='https://www.youtube.com/@Loann_roblox'
            target='_blank'>
            <HeroSocial
              src='/assets/images/youtube-icon.png'
              alt='Youtube icon'
            />
          </a>
        </>
      }
    />
    <iframe
      src='https://www.retrogames.cc/embed/8805-hyper-street-fighter-2%3A-the-anniversary-edition-031222-japan.html'
      width='600'
      height='450'
      frameborder='no'
      allowfullscreen='true'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      scrolling='no'></iframe>
  </Section>
);

export { Hero };
