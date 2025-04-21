import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
    try {
        const userPrompt = `
        Based on the following financial data:
        - Total Budget: ${totalBudget} INR
        - Expenses: ${totalSpend} INR
        - Incomes: ${totalIncome} INR
        provide detailed financial advice in 2 sentences to help the user manage their finances.
        `

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [{ 
                role: 'user', 
                content: userPrompt
            }],            
        });
        
        const advice = chatCompletion.choices[0].message.content
        
        return advice;
    } catch(error) {
        return (
           <div>
                {error.message}
           </div>
        );
    }
}

export default getFinancialAdvice;