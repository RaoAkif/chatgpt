![Headstarter Banner](https://github.com/user-attachments/assets/80ea1608-e1b1-466f-9153-99153f4a65b8)

# ChatAI

> A ChatAI is a perplexity clone with multi-model support, integrating content scraping, source citation to mitigate hallucinations, and rate-limiting for scalability. Designed for accuracy, reliability, and a seamless AI-powered conversational experience.

![ChatAI](https://github.com/user-attachments/assets/a027bb78-d249-428a-9338-adf536d9ed8b)

## Built With

- **Node.js**, **Next.js**
- **Puppeteer**, **Cheerio**
- **Upstash Redis**
- **Groq API**
- **OpenAI API**

## Live Demo

[Live Site](https://chat.raoakif.site/)

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- API keys for Groq, Upstash Redis, and OpenAI

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/raoakif/chatai.git
    ```
2. Navigate to the project directory:
    ```bash
    cd chatai
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Configure environment variables by creating a `.env` file with the following content:
    ```env
    GROQ_API_KEY=""
    UPSTASH_REDIS_REST_URL=""
    UPSTASH_REDIS_REST_TOKEN=""
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Access the app at [http://localhost:3000](http://localhost:3000).

---

## Deployment

To deploy ChatAI to Vercel, follow these steps:

1. **Fork the Repository**  
   Fork the [ChatAI repository](https://github.com/raoakif/chatai) to your GitHub account.

2. **Create a New Project on Vercel**  
   - Go to [Vercel](https://vercel.com) and create a new project from your forked repository.
   - Vercel will automatically detect the repository settings and install the necessary dependencies.

3. **Configure Environment Variables**  
   In the Vercel dashboard, go to the project settings and add the following environment variables:
    ```env
    GROQ_API_KEY=""
    UPSTASH_REDIS_REST_URL=""
    UPSTASH_REDIS_REST_TOKEN=""
    ```

4. **Deploy the Project**  
   Click the **Deploy** button, and Vercel will automatically build and deploy your project. Once deployed, your ChatAI instance will be accessible via a Vercel-generated URL.

For more detailed deployment instructions, refer to the [Vercel Documentation](https://vercel.com/docs).

---

## Features

- **Query Handling:** Answer queries with context-rich, Markdown-formatted responses.
- **Content Scraping:** Utilize Puppeteer and Cheerio for web scraping to extract relevant content.
- **Rate Limiting:** Implement Upstash Redis for smooth handling of user requests.
- **Source Citation:** Reduce hallucinations by citing sources in answers.

---

## Core Files and TODOs

### Key Files

- **`src/app/page.tsx`**  
  Handle dynamic API responses and display user and AI chat interactions.

- **`src/app/api/chat/route.ts`**  
  Implement the chat API with Groq integration and web scraping using Puppeteer.

- **`src/middleware.ts`**  
  Manage rate-limiting logic via Upstash Redis.

### Planned Enhancements

- **Content Scraping Expansion:**  
  Add support for scraping YouTube videos, PDFs, CSV files, and images.

- **Data Visualization:**  
  Integrate charts (e.g., bar charts, line charts) for enriched responses.

- **Hierarchical Web Crawling:**  
  Develop a crawler to scrape linked content from relevant pages.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

---

## Authors

👤 **Rao Akif**

- GitHub: [@raoakif](https://github.com/raoakif)
- Twitter: [@raoakif](https://twitter.com/raoakif)
- LinkedIn: [RaoAkif](https://linkedin.com/in/raoakif)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Check the [issues page](../../issues/) for ongoing issues.

## Show Your Support

Give a ⭐️ if you like this project!

## Acknowledgments

- Inspiration from [Perplexity.ai](https://www.perplexity.ai)
- Thanks to all contributors and the libraries used in this project.

## 📝 License

This project is licensed under the [MIT License](./MIT.md).
