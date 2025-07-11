SEO Keyword AI Agent (n8n Workflow)
Project Vision: Unlocking First-Page Potential
Imagine a world where finding high-impact, low-competition keywords isn't a tedious, manual task, but an intelligent, automated journey. Our SEO Keyword AI Agent is designed to be that game-changer. Starting with just a single idea, it meticulously expands, analyzes, and refines keyword opportunities, empowering us to dominate search rankings and drive meaningful organic traffic. This isn't just about data; it's about uncovering the precise language that connects your audience with your solutions, ensuring every content effort lands on Google's coveted first page.

Workflow Overview: Your Automated SEO Strategist
This n8n workflow acts as a powerful, intelligent SEO agent. It takes a single seed keyword, intelligently expands it using AI, enriches it with real-time search volume and competition data, intelligently filters and augments the list, and finally delivers actionable keyword insights directly to a Google Sheet. It's designed to streamline your keyword research, providing you with a curated list of top 50 keyword candidates, sorted for optimal first-page potential.

Detailed Workflow Breakdown
Let's dive into how this agent meticulously crafts your keyword strategy:

Phase 1: Seed & Expand – The Brainstorming Spark
The goal here is to take your core idea and intelligently expand it into a rich array of related terms, ensuring we don't miss any hidden opportunities.

1. Manual Trigger: Your Idea, Our Starting Point

This node is your simple, human-friendly entry point. You provide your core concept (e.g., "Global Internship"), and it kicks off the entire discovery process. It’s the spark that ignites our agent's deep dive!

2. OpenAI Message Model: The Keyword Brainstormer

Here, we leverage the intelligence of OpenAI. This node acts as our expert brainstormer, generating a broad spectrum of similar and relevant keywords that a human might not immediately think of. It's about casting a wide net to catch all potential leads.

3. & 4. Code Nodes: Taming the Data Jungle

AI is brilliant, but its output needs structure. These diligent data wranglers ensure your original seed keyword is robustly captured. More critically, they parse the AI's creative output into a clean, de-duplicated list of individual keywords. We want every keyword to be its own actionable item, ready for the next stage of rigorous analysis, and we smartly re-integrate your original seed keyword to ensure it's always considered.

Phase 2: Qualify & Quantify – The Data Discovery Dive
This phase is all about enriching our expanded keyword list with critical SEO metrics (search volume and competition) that tell us which keywords are truly worth pursuing.

5. Code Node: Batching for Efficiency

Before we query external services for data, we're being smart. This node bundles all our brainstormed keywords into a single package. Why? Because making one big request to a data provider like DataForSEO is far more efficient and cost-effective than hundreds of small ones – less overhead, more speed!

6. Code Node: The Budget Guardian (Max 100 Keywords)

While we aim for extensive data, we're also mindful of API costs and processing limits. This node acts as a crucial gatekeeper, ensuring we only request data for a manageable number of keywords (up to 100). It's about smart resource management, preventing unexpected budget surprises.

7. Code Node: API Request Preparer

Every API has its unique language. This node translates our internal data format into precisely what the DataForSEO API expects, setting the stage for a seamless data retrieval.

8. HTTP Request: DataForSEO – The Truth Teller

This is where we get the real numbers! We call on DataForSEO, a powerful external SEO tool, to fetch the monthly search volume (how many people search for this?) and competition data (how hard is it to rank?). This data is the backbone of our "first-page potential" analysis, focused on US English search data.

9. Code Node: The Metrics Master & First Filter

We've received a treasure trove of data, but now we need to make sense of it. This node intelligently extracts and normalizes the competition (to a 0-100 scale) and search volume. Crucially, it then applies our first strategic filter: we only keep keywords with a competition score of 70 or less and a monthly volume of at least 10. This is our direct attack on the "first page" goal! We then sort them by lowest competition and highest volume, putting the most promising candidates at the very top.

Phase 3: Reinforce & Refine – The Intelligent Augmentation
This phase focuses on overcoming any data limitations by intelligently generating more "first-page potential" keywords and enriching all candidates with strategic, actionable insights.

10. OpenAI Message Model: The Keyword Multiplier

Sometimes, even with all our efforts, the initial data pull might yield fewer high-potential keywords than we'd like. This is where our AI steps in again! If our rigorous filtering resulted in a small list (e.g., only 6 keywords), this node prompts a powerful LLM (Deepseek-r1 via Openrouter) to intelligently generate more similar keywords that are likely to have comparable competition and search volume profiles. It's a clever way to ensure we always have a robust list of 50 potential targets, even when hard data is scarce for very niche terms.

11. Code Node: AI-Generated Keyword Formatting

The AI has given us more great ideas, and this node formats them consistently, clearly tagging them as "estimated" data. This helps us distinguish keywords with direct DataForSEO validation from those intelligently estimated by the AI.

12. Code Node: The Merging Maestro

Now we have two valuable lists: the validated keywords from DataForSEO and the AI-generated "estimated" keywords. This node's job is to merge them seamlessly into a single, comprehensive list of up to 50 unique keywords. We prioritize the hard data, but we also ensure our AI's intelligent estimations fill any gaps, providing a full, actionable list. It's about combining the best of both worlds – precision and intelligent expansion.

13. Code Node: The Final Sort – Strategic Prioritization

Before final delivery, we want to present the keywords in the most strategic order possible. This node performs a sophisticated sort: real (DataForSEO) keywords first, then within those groups, sorting by lowest competition, then highest monthly volume. This ensures our most reliable, high-potential opportunities are always at the very top of the list.

14. Basic LLM Chain (Openrouter / Deepseek-r1 - Insight Engine)

This is the heart of the AI's strategic contribution! For each of our top 50 keywords, this LLM acts as our expert SEO strategist, generating two crucial pieces of information:

Justification: A concise explanation of why this keyword is a good target (e.g., "Low competition, high volume"). This helps you quickly grasp its value.

Content Angle: A concrete, actionable idea for content. No more staring at a blank page! This provides immediate direction for content creators.

This step transforms raw data into actionable SEO strategy, making the agent's output immensely valuable.

15. Code Node: The JSON Architect & Deduplicator

The LLM's output is brilliant, but it needs to be perfectly structured for our final report. This resilient node meticulously parses the AI's response, extracting each keyword's justification and content angle, ensuring it's in a clean, valid JSON format. It also intelligently deduplicates any keywords that might have slipped through earlier, ensuring our final list is truly unique and exactly 50 candidates. This guarantees our final output is pristine and ready for easy use.

Phase 4: Output & Reporting – Delivering Actionable Insights
All that hard work culminates here, presenting your optimized keyword list in an accessible, organized format, ready for immediate implementation.

16. Google Sheets (Append Mode): Your Actionable Dashboard

This node is our final delivery mechanism, exporting the complete, refined list of 50 keywords, along with their volume, competition, AI-generated justifications, and content angles, directly into a Google Sheet.

The genius lies in its "Append Mode: New sheet per seed keyword ([Seed]_YYYYMMDD)" approach. This means for every new keyword search, you get a beautifully organized, timestamped sheet. No more messy, overflowing spreadsheets; just clean, focused insights ready for your team to turn into traffic!

How to Use This Workflow
Getting started with your SEO Keyword AI Agent is straightforward:

Download: Clone this repository or download the seo_keyword_ai_agent_workflow.json file.

Import to n8n: In your n8n instance, click 'New' -> 'Import from File' and select the downloaded JSON.

Configure Credentials:

OpenAI: Set up your OpenAI API key credential.

DataForSEO: Set up your DataForSEO API key credential.

Google Sheets: Authenticate your Google Sheet connection.

Openrouter: Configure your Openrouter API key credential (used by the 'Basic LLM Chain' node).

Run: Input your seed keyword in the 'Manual Trigger' node and execute the workflow.

Review Results: Check your specified Google Sheet for the generated keyword insights, organized perfectly.

Files in This Repository
seo_keyword_ai_agent_workflow.json: The core n8n workflow file.

workflow_description.json: A structured JSON representation of this project's description and nodes.

Any .js files mentioned in the nodes (though in n8n, these are typically embedded within the workflow JSON).

Contribution
Feel free to fork this repository, suggest improvements, or open issues. Your contributions are welcome!
