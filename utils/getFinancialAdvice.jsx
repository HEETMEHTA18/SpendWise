import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const prompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} INR
      - Expenses: ${totalSpend} INR
      - Incomes: ${totalIncome} INR

      Provide detailed financial advice in 2 sentences to help the user manage their finances.
    `;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`, // Use correct key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-maverick:free",
        messages: [{ role: "user", content: [{ type: "text", text: prompt }] }],
      }),
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response found.";
  } catch (error) {
    console.error("API error:", error);
    return `Error: ${error.message}`;
  }
};

export default getFinancialAdvice;