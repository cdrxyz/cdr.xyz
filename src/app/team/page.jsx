import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Suzie Alexander',
        role: 'Founder. Ruby & Technical Project Management.',
        image: { src: imageChelseaHagon },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Andrew Alexander',
        role: 'Advisor, Kotlin Platform & Applied Agentic Engineering',
        image: { src: imageBenjaminRussel },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
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
