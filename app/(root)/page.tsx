import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";
import {getCurrentUser, getInterviewsByUserId, getLatestInterviews} from "@/lib/actions/auth.actions";

const Page = async () => {
    const user = await getCurrentUser();

    const[userInterviews, latestInterviews] = await Promise.all([
        await getInterviewsByUserId(user?.id!),
        await getLatestInterviews({ userId: user?.id! })
    ]);

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;

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
                    {hasPastInterviews ? (
                            userInterviews?.map((interview) => (
                                <InterviewCard {...interview}  key={interview.id}/>
                            ))) : (
                                <p>You haven&apos;t taken any interviews yet.</p>
                    )}

                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Begin Your Interview Practice</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        latestInterviews?.map((interview) => (
                            <InterviewCard {...interview}  key={interview.id}/>
                        ))) : (
                        <p>Looks like there aren&apos;t interviews available right now.</p>
                    )}
                </div>

            </section>

        </>
    )
}
export default Page
