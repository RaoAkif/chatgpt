// /api/chat/route.ts
// TODO: Implement the chat API with Groq and web scraping with Cheerio and Puppeteer
// Refer to the Next.js Docs on how to read the Request body: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// Refer to the Groq SDK here on how to use an LLM: https://www.npmjs.com/package/groq-sdk
// Refer to the Cheerio docs here on how to parse HTML: https://cheerio.js.org/docs/basics/loading
// Refer to Puppeteer docs here: https://pptr.dev/guides/what-is-puppeteer

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface PostRequestBody {
  query: string;
}

const prompt = `
You are an expert assistant with expertise in financial analysis. Your task is to generate a beautiful, well-structured answer for the following query. The response should be:

Headings: Use clear and descriptive headings to organize your response. Main topics should have the ## markdown for second-level headers, and subtopics can be ### or #### for deeper nesting.

Bullet Points: Where appropriate, use bullet points to list key ideas or concepts. Ensure the lists are easy to read, and indent them properly.

Numbered Lists: For any sequential information, use numbered lists to show a clear order or steps.

Bold and Italic Text: Emphasize important terms, keywords, or concepts using bold for emphasis and italic for secondary points.

Code Blocks: If technical terms or code snippets are mentioned, present them in fenced code blocks. Use triple backticks for multi-line code blocks or inline backticks for short snippets.

Indentation: Ensure the text is indented properly for readability. Use proper spacing for paragraphs and sections to avoid cluttered text.

Clear and Concise Language: The response should be detailed, yet easy to follow, with concise explanations and examples where necessary.

Please generate the response for the query below:
`;

export async function POST(req: Request): Promise<Response> {
  try {
    const body: PostRequestBody = await req.json();
    const { query } = body;

    console.log(query)
    
    if (!query) {
      return new Response(
        JSON.stringify({ error: "Missing required parameter: query" }),
        { status: 400 }
      );
    }

    const completion: string = await groq.chat.completions
      .create({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: query.trim() },
        ],
      })
      .then((chatCompletion) => chatCompletion.choices[0]?.message?.content || "");

    return new Response(JSON.stringify({ data: completion }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error occurred while processing POST request:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}