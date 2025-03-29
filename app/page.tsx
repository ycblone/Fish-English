import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeacherCard from "@/components/teacher-card"
import TeacherCarousel from "@/components/teacher-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/titleicon.JPG" alt="Fish English Logo" width={150} height={32} />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="#teachers" className="text-sm font-medium hover:underline underline-offset-4">
              Teachers
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:underline underline-offset-4">
              Courses
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Register
            </Button>
            <Button size="sm">Log In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Learn English with expert teachers from around the world
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Personalized lessons, flexible scheduling, and a supportive learning environment to help you achieve
                fluency.
              </p>
            </div>
          </div>
        </section>

        <section id="teachers" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Globe className="h-5 w-5" />
              <h2 className="text-2xl font-bold">Our Teachers</h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter mb-8">Meet Our Western English Teachers</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="max-w-[600px] text-muted-foreground">
                    Experienced professionals from the US, UK, Canada, and Australia, bringing authentic accents and
                    cultural insights to your English learning journey.
                  </p>
                  <div className="flex gap-2">
                    <Button id="western-prev" variant="outline" size="icon" className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button id="western-next" variant="outline" size="icon" className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>

                <TeacherCarousel id="western-teachers" buttonPrevId="western-prev" buttonNextId="western-next">
                  <TeacherCard
                    name="Rossanna Fantilanan"
                    title="TEFL Certified, 8+ Years Experience"
                    country="United States"
                    image="/teacher6.jpg"
                    certifications={["TEFL", "CELTA"]}
                    specialties={["Business English", "Pronunciation"]}
                  />
                  <TeacherCard
                    name="John Lloyd Reyes"
                    title="MA in TESOL, 6+ Years Experience"
                    country="United Kingdom"
                    image="/teacher5.JPG"
                    certifications={["TESOL", "DELTA"]}
                    specialties={["Academic English", "IELTS Preparation"]}
                  />
                  <TeacherCard
                    name="Sarah Miller"
                    title="BA in Education, 5+ Years Experience"
                    country="Canada"
                    image="/teacher3.JPG"
                    certifications={["TEFL", "TKT"]}
                    specialties={["Conversation", "Grammar"]}
                  />
                  <TeacherCard
                    name="Michael Davis"
                    title="CELTA Certified, 7+ Years Experience"
                    country="Australia"
                    image="/teacher4.JPG"
                    certifications={["CELTA", "TEFL"]}
                    specialties={["Exam Preparation", "Public Speaking"]}
                  />
                  <TeacherCard
                    name="Olivia Johnson"
                    title="TESOL Certified, 4+ Years Experience"
                    country="United States"
                    image="/teacher5.JPG"
                    certifications={["TESOL", "TKT"]}
                    specialties={["Young Learners", "Phonics"]}
                  />
                </TeacherCarousel>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tighter mb-8">Meet Our Filipino English Teachers</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="max-w-[600px] text-muted-foreground">
                    Highly qualified teachers from the Philippines with excellent English proficiency, offering
                    affordable and effective language instruction.
                  </p>
                  <div className="flex gap-2">
                    <Button id="filipino-prev" variant="outline" size="icon" className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button id="filipino-next" variant="outline" size="icon" className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>

                <TeacherCarousel id="filipino-teachers" buttonPrevId="filipino-prev" buttonNextId="filipino-next">
                  <TeacherCard
                    name="Maria Santos"
                    title="TESOL Certified, 6+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TESOL", "TEFL"]}
                    specialties={["Conversation", "Vocabulary Building"]}
                  />
                  <TeacherCard
                    name="Juan Reyes"
                    title="BA in English, 5+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TEFL", "TKT"]}
                    specialties={["Grammar", "Reading Comprehension"]}
                  />
                  <TeacherCard
                    name="Ana Cruz"
                    title="MA in Education, 7+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TESOL", "CELTA"]}
                    specialties={["Business English", "TOEFL Preparation"]}
                  />
                  <TeacherCard
                    name="Carlos Mendoza"
                    title="TEFL Certified, 4+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TEFL", "TKT"]}
                    specialties={["Pronunciation", "Listening Skills"]}
                  />
                  <TeacherCard
                    name="Sofia Garcia"
                    title="BA in English Literature, 5+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TEFL", "TESOL"]}
                    specialties={["Writing", "Speaking"]}
                  />
                  <TeacherCard
                    name="Miguel Lim"
                    title="TESOL Certified, 6+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TESOL", "TKT"]}
                    specialties={["Conversation", "Idioms and Expressions"]}
                  />
                  <TeacherCard
                    name="Isabella Tan"
                    title="CELTA Certified, 5+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["CELTA", "TEFL"]}
                    specialties={["Business Communication", "Interview Preparation"]}
                  />
                  <TeacherCard
                    name="Gabriel Aquino"
                    title="BA in Education, 4+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TEFL", "TKT"]}
                    specialties={["Young Learners", "Phonics"]}
                  />
                  <TeacherCard
                    name="Camila Dizon"
                    title="TESOL Certified, 7+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TESOL", "TEFL"]}
                    specialties={["Exam Preparation", "Academic English"]}
                  />
                  <TeacherCard
                    name="Rafael Bautista"
                    title="MA in TESOL, 8+ Years Experience"
                    country="Philippines"
                    image="/placeholder.svg?height=400&width=300"
                    certifications={["TESOL", "DELTA"]}
                    specialties={["Advanced Grammar", "Presentation Skills"]}
                  />
                </TeacherCarousel>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Fish English?</h2>
                <p className="text-muted-foreground">
                  Our platform offers a unique blend of Western and Filipino teachers, giving you the best of both
                  worlds - authentic accents and cultural insights at affordable rates.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Flexible scheduling - classes available 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Personalized learning plans tailored to your goals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Certified teachers with years of experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Interactive lessons with modern teaching methods</span>
                  </li>
                </ul>
                <Button className="mt-4">Book a Free Trial Lesson</Button>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Online English class"
                width={600}
                height={400}
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=24&width=24" alt="Fish English Logo" width={24} height={24} />
            <span className="text-sm font-semibold">Fish English</span>
          </div>
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fish English. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

