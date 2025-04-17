import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser
})

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpent) => {
    try {
        const userPrompt = `
        Based on the following financial data:
        - Total Budget: ${totalBudget} INR
        - Expenses: ${totalSpent} INR
        - Incomes: ${totalIncome} INR
        provide detailed financial advice in 2 sentences to help the user manage their finances.
        `

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-4o',
        })
    } catch {

    }
}