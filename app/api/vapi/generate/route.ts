import {generateText} from "ai";
import {google} from "@ai-sdk/google";
import {getRandomInterviewCover} from "@/lib/utils";
import {db} from "@/firebase/admin";

export async function GET() {
    return Response.json({success: true, data: 'THANK YOU!'}, {status: 200});
}

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();

    try {
        const { text: questions } = await generateText({
            model: google('gemini-2.0-flash-001'),
            prompt: `Generate a list of interview questions.

            Job Role: ${role}  
            Experience Level: ${level}  
            Tech Stack: ${techstack}  
            Focus: ${type} questions (behavioral or technical)  
            Number of Questions: ${amount}

            Instructions:
            - Only return the list of questions, no explanations.
            - Format the output exactly as: ["Question 1", "Question 2", "Question 3", ...]
            - Do not include any special characters like *, /, or emojis.  
            - Keep the questions simple and easy to read aloud by a voice assistant.

            Thank you! <3
            `,
        });

        const interview = {
            role: role,
            type: type,
            level: level,
            techstack: techstack.split(","),
            questions: JSON.parse(questions),
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString(),
        };

        await db.collection("interviews").add(interview);

        return Response.json({ success: true }, { status: 200 });
    }catch (error){
        console.error(error);
        return Response.json({ success: false, error}, {status: 500});
    }

}