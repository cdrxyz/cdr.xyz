import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import imageSuzieAlexander from '@/images/team/suzie-alexander.jpg'
import imageAndrewAlexander from '@/images/team/andrew-alexander.jpg'
import imageAvatarSilhouette from '@/images/team/avatar-silhouette.jpg'

const team = [
  {
    title: 'Technical Staff',
    people: [
      {
        name: 'Suzie Alexander',
        title: 'Founder',
        specialties: ['Ruby', 'Technical Project Management', 'Agile Delivery'],
        bio: 'Suzie founded Cedar Labs on a simple premise: small teams deserve the same caliber of software that enterprises take for granted. With over a decade of experience shipping production Ruby systems and managing complex technical programs, she ensures every engagement stays on track and delivers real results.',
        image: { src: imageSuzieAlexander },
      },
      {
        name: 'Andrew Alexander',
        title: 'Founder & Member of Technical Staff',
        specialties: ['Kotlin', 'Platform Engineering', 'Agentic AI', 'Open Source'],
        bio: 'Andrew co-founded Cedar Labs after nearly eight years at Block, where he led Kotlin platform engineering for 3,000+ developers across Cash App, Square, and Afterpay. He architected Misk\'s native AI Model Context Protocol support, built server-side rendered admin dashboards that cut frontend delivery from three weeks to six hours, and migrated the company\'s largest 30 TB data set to the cloud. A certified open-source developer and Canada\'s Business Model Competition winner, he now focuses on bringing Fortune 500-grade engineering to the clients who need it most.',
        image: { src: imageAndrewAlexander },
      },
      {
        name: 'Luke Bristol',
        title: 'Applied AI Engineer',
        specialties: ['Model Fine-Tuning', 'ML Pipelines', 'Data Engineering'],
        bio: 'Luke specializes in taking foundation models and making them work for specific, real-world tasks. From fine-tuning LLMs to building the data pipelines that feed them, he bridges the gap between cutting-edge research and production-ready AI.',
        image: { src: imageAvatarSilhouette },
      },
      {
        name: 'Igor Kravitz',
        title: 'Fullstack Engineer',
        specialties: ['JavaScript', 'Python', 'Go', 'Rust'],
        bio: 'Igor is the kind of engineer who can build anything — and has. Whether it is a reactive frontend in JavaScript, a high-throughput backend in Go, or systems-level tooling in Rust, he picks the right tool for the job and ships code that does not need rewriting six months later.',
        image: { src: imageAvatarSilhouette },
      },
      {
        name: 'This could be you...',
        title: 'Join the Team',
        specialties: ['Your Skills', 'Your Expertise'],
        bio: 'We are always looking for proven operators who care about craft. If you have been battle-tested in production and want to work with a team that values substance over ceremony, we would love to hear from you.',
        image: { src: imageAvatarSilhouette },
        isCta: true,
      },
    ],
  },
]

function SpecialtyTag({ children }) {
  return (
    <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-0.5 text-xs font-medium text-neutral-600">
      {children}
    </span>
  )
}

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="pt-12 sm:pt-16">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <ul role="list" className="mt-10 space-y-12">
                {group.people.map((person) => (
                  <li key={person.name}>
                    <FadeIn>
                      <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[14rem_1fr] lg:gap-12">
                        {/* Photo */}
                        <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 lg:aspect-[3/4]">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-64 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:h-full"
                          />
                        </div>
                        {/* Bio */}
                        <div className="flex flex-col justify-center">
                          <h3 className="font-display text-xl font-semibold text-neutral-950">
                            {person.name}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-neutral-500">
                            {person.title}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {person.specialties.map((tag) => (
                              <SpecialtyTag key={tag}>{tag}</SpecialtyTag>
                            ))}
                          </div>
                          <p className="mt-4 max-w-2xl text-base/7 text-neutral-600">
                            {person.bio}
                          </p>
                          {person.isCta && (
                            <a
                              href="/contact"
                              className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
                            >
                              Get in touch
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="ml-1 h-4 w-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'Our Team',
  description:
    'Meet the people behind Cedar Labs — proven operators who deliver 10x results without 10x the cost.',
}

export default function TeamPage() {
  return (
    <>
      <PageIntro eyebrow="Our Team" title="The humans behind the code">
        <p>
          Small, senior, and stubbornly effective. Every member of our team has
          been battle-tested in production — no junior devs cutting their teeth
          on your dime.
        </p>
      </PageIntro>

      <Team />

      <ContactSection />
    </>
  )
}
