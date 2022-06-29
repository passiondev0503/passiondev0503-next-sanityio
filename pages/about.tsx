import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import {
  Antdesign,
  Express,
  Facebook,
  Flutter,
  Github,
  Go,
  Instagram,
  Javascript,
  Laravel,
  Linkedin,
  Medium,
  Mysql,
  Nestjs,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  Python,
  ReactLogo,
  Tailwindcss,
  Twitter,
  Typescript
} from '@styled-icons/simple-icons';

const skills = [
  { icon: Javascript },
  { icon: Typescript },
  { icon: Nodedotjs },
  { icon: Go },
  { icon: ReactLogo },
  { icon: Postgresql },
  { icon: Mysql },
  { icon: Nestjs },
  { icon: Express },
  { icon: Nextdotjs },
  { icon: Tailwindcss },
  { icon: Antdesign },
  { icon: Python },
  { icon: Laravel },
  { icon: Flutter }
];

const socials = [
  { icon: Github, link: 'https://github.com/kenaqshal' },
  { icon: Instagram, link: 'https://www.instagram.com/kenaqshal' },
  { icon: Linkedin, link: 'https://www.linkedin.com/in/kenaqshal' },
  { icon: Facebook, link: 'https://www.facebook.com/kenaqshal.bramasta' },
  { icon: Twitter, link: 'https://twitter.com/kenaqshal' },
  { icon: Medium, link: 'https://medium.com/@kenaqshal31' }
];
export default function About() {
  return (
    <Container title="About – Ken Aqshal Bramasta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6 max-w-2xl">
          <h6>
            Hey I’m Bramasta, a software engineer who currently living in
            Jakarta, Indonesia 🇮🇩
          </h6>
          <p>
            I'm currently working at{' '}
            <Link href="https://www.mbiz.co.id/">Mbiz</Link>, maintaining and
            developing the future of procurement stuff. Before that, I worked at
            Bangun Kreatif Abadi, as a technical consultant.
          </p>
          <p>
            I grew up in Bekasi, West Java. Just side of Jakarta(the most
            crowded city in indonesia🚗), and I come from a software engineering
            background in Vocational high school. I love working in the backend
            because I don't have an interest in design and am more comfortable
            creating a high-speed and reliable service rather than responsive
            design. And I spent almost 90% of my career as a backend engineer✨.
          </p>

          <p>
            Before getting into software development, I wanted to be an
            architect and create the tallest building architecture🏛, but when I
            can't get the architecture major in vocational high school, so I
            choose software engineering since I love to play with computers, and
            then I realized what my real passion was and started learning more
            about software engineer especially in how to make a system 👨‍💻
          </p>

          <p>
            In my spare time🆓, I love being outdoors, reading a comic or book,
            and watching the movie
          </p>

          <p>
            Learn more about me on my{' '}
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              resume
            </Link>
            , <Link href="/timeline">timeline</Link> and please don't hesitate
            to <Link href="/contact">contact me</Link>!
          </p>

          <h4 className="text-2xl">Skills</h4>
          <div className="flex flex-wrap w-full flex-row gap-y-3">
            {skills.map((item, key) => {
              return (
                <div className="basis-10" key={key}>
                  <item.icon className="w-8 h-auto text-gray-800 dark:text-gray-200" />
                </div>
              );
            })}
          </div>

          <h4 className="text-2xl mb-0">Socials</h4>
          <p className="mb-2 mt-0">
            You can also follow my work, projects and occassional insights into
            my life on my social networks:
          </p>
          <div className="flex flex-wrap w-full flex-row gap-y-3">
            {socials.map((item, key) => {
              return (
                <div className="basis-10" key={key}>
                  <Link href={item.link}>
                    <a target="_blank" rel="noopener noreferrer">
                      <item.icon className="w-8 h-auto text-gray-800 dark:text-gray-200" />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
