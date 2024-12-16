import Services from "@/components/ui/services"

const content = {
    section: "Business Consultancy",
    headline: "Tailored Business Strategies for Sustainable Growth",
    description: "At MR Deva International, we specialize in consulting services that help businesses unlock new opportunities, streamline operations, and enhance profitability. Our consulting solutions are tailored to each client’s needs, encompassing strategic planning, market analysis, financial planning, and growth strategies.",
    services: [
        "Strategic Business Planning",
        "Market Entry & Expansion Strategy",
        "Financial Analysis & Planning",
        "Risk Management"
    ],
    callToAction: {
        text: "Get in Touch for Consulting Solutions"
    }
};

const Business = () => {
    return (
        <Services content={content} />
    )
}

export default Business;