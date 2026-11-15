import { CreditCard, Smartphone, Globe, ArrowRight } from "lucide-react";

const paymentOptions = [
    {
        title: "Mobile Money",
        tagline: "Familiar. Convenient. Accessible.",
        desc: "Receive payments through mobile money services that customers across African markets use for everyday transactions.",
        icon: Smartphone,
    },
    {
        title: "Card Payments",
        tagline: "Give Customers More Ways to Pay.",
        desc: "Accept payments through supported debit and credit cards, making it easier for customers to complete purchases.",
        icon: CreditCard,
    },
    {
        title: "International Payments",
        tagline: "Reach Customers Beyond Borders.",
        desc: "Connect with customers in other markets and receive payments through supported international payment channels.",
        icon: Globe,
    },
];

export function PaymentGrid() {
    return (
        <section className="section bg-white">
            <div className="wrap grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-12 lg:gap-y-10">
                {/* Left Content */}
                <div className="lg:col-span-5 lg:row-start-1">
                    <span className="eyebrow mb-6">
                        PAYMENTS &amp; COMMERCE
                    </span>
                    <h2 className="title-section mb-8">
                        Get Paid. <br />
                        <span>From Anywhere.</span>
                    </h2>
                    <div className="flex flex-col gap-4">
                        <p className="lead">
                            Make it easier for customers to pay you, wherever they are.
                        </p>
                        <p className="lead">
                            Whether you are selling to someone in your community, another city, or across borders, Ndiara connects your business with convenient payment options that help you serve more customers and grow your sales.
                        </p>
                        <p className="lead">
                            Accept payments through mobile money, bank cards, and international payment channels, giving your customers more ways to pay and your business more opportunities to sell.
                        </p>
                    </div>

                </div>

                {/* Payment options */}
                <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-3">
                    {paymentOptions.map((option) => (
                        <div key={option.title} className="flex items-start gap-6">
                            <option.icon className="mt-0.5 w-7 h-7 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                            <div>
                                <h3 className="title-card">{option.title}</h3>
                                <p className="mt-2 font-semibold text-navy">{option.tagline}</p>
                                <p className="mt-2 leading-relaxed text-muted">{option.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
                    {/* TODO(content): link "Explore Payment Options" to the payments page once it exists. */}
                    <a href="#" className="text-link min-h-11">
                        Explore Payment Options <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
