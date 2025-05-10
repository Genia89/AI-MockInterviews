import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Boost Your Interview Confidence with AI</h2>
                    <p className="text-lg">
                        Practice real questions and receive helpful, instant feedback to level up your performance.
                    </p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start and Interview</Link>
                    </Button>
                </div>

                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interview Journey</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview} />
                    ))}

                    {/*<p>Looks like there are no interviews available right now.</p>*/}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Begin Your Interview Practice</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview} />
                    ))}
                </div>

            </section>

        </>
    )
}
export default Page
