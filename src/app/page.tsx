"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Utensils } from "lucide-react";

export default function ManasiRooftopPage() {
    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="background-highlight"
            borderRadius="soft"
            contentWidth="medium"
            sizing="mediumLarge"
            background="floatingGradient"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="layered"
            headingFontWeight="semibold"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarLayoutFloatingInline
                        brandName="Manasi Roof Top"
                        navItems={[
                            { name: "Menu", id: "menu" },
                            { name: "About", id: "about" },
                            { name: "Reservations", id: "contact" },
                            { name: "Reviews", id: "testimonials" }
                        ]}
                        button={{
                            text: "Book Table",                            href: "#contact"
                        }}
                    />
                </div>

                <div id="hero" data-section="hero">
                    <HeroBillboard
                        title="Elevated Family Dining"
                        description="Experience breathtaking sky-high views combined with the heartwarming taste of home-cooked meals at Manasi Roof Top."
                        background={{ variant: "sparkles-gradient" }}
                        tag="Roof Top Family Restaurant"
                        tagIcon={Utensils}
                        imageSrc="http://img.b2bpic.net/free-photo/roulets-with-vegetables-white-wine_140725-830.jpg"
                        imageAlt="Rooftop dining ambiance at sunset"
                        buttons={[
                            { text: "Reserve Now", href: "#contact" },
                            { text: "Explore Menu", href: "#menu" }
                        ]}
                    />
                </div>

                <div id="about" data-section="about">
                    <TextAbout
                        title="A sanctuary for families and food enthusiasts, Manasi Roof Top brings people together under the open sky for unforgettable culinary moments."
                        useInvertedBackground={false}
                        buttons={[
                            { text: "Our Story", href: "#" }
                        ]}
                    />
                </div>

                <div id="menu" data-section="menu">
                    <ProductCardOne
                        title="Signature Specialties"
                        description="Our kitchen focuses on fresh, seasonal ingredients served with a view that inspires."
                        products={[
                            {
                                id: "1",                                name: "Manasi Special Sizzler",                                price: "$32",                                imageSrc: "http://img.b2bpic.net/free-photo/meat-sage-with-eggplant-potatoes-cooked-charcoal_140725-7391.jpg"
                            },
                            {
                                id: "2",                                name: "Garden Fresh Pasta",                                price: "$24",                                imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-farfalle-pasta-with-cheese-olive-tablecloth_23-2147925964.jpg"
                            },
                            {
                                id: "3",                                name: "Rooftop Delight Dessert",                                price: "$14",                                imageSrc: "http://img.b2bpic.net/free-photo/top-view-souffle-with-strawberry-icing-with-fruit-decor-plate_140725-11554.jpg"
                            }
                        ]}
                        gridVariant="three-columns-all-equal-width"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                    />
                </div>

                <div id="impact" data-section="impact">
                    <MetricCardFourteen
                        title="Our Journey"
                        tag="Serving Smiles"
                        metrics={[
                            { id: "1", value: "10k+", description: "Satisfied Families Served" },
                            { id: "2", value: "500+", description: "Stunning Sunsets Watched" }
                        ]}
                        metricsAnimation="slide-up"
                        useInvertedBackground={true}
                    />
                </div>

                <div id="testimonials" data-section="testimonials">
                    <TestimonialCardTen
                        title="Guest Experiences"
                        description="See what our patrons have to say about their time at the top."
                        testimonials={[
                            {
                                id: "1",                                title: "Perfect Family Spot",                                quote: "The atmosphere is unmatched. We loved bringing our kids here; the staff was wonderful!",                                name: "Sarah J.",                                role: "Regular Guest",                                imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-people-with-drinks_23-2150124808.jpg"
                            }
                        ]}
                        textboxLayout="default"
                        useInvertedBackground={true}
                    />
                </div>

                <div id="comparison" data-section="comparison">
                    <FeatureCardSixteen
                        title="The Manasi Difference"
                        description="We prioritize quality and atmosphere above all else."
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                        negativeCard={{ items: ["Fast-food chains", "No ambiance", "Limited seating"] }}
                        positiveCard={{ items: ["Family-run warmth", "Panoramic rooftop views", "Fresh local ingredients"] }}
                    />
                </div>

                <div id="contact" data-section="contact">
                    <ContactText
                        text="Ready for dinner with a view? Reserve your spot at Manasi Roof Top today."
                        background={{ variant: "plain" }}
                        buttons={[{ text: "Book via Phone", href: "tel:+1234567890" }]}
                        useInvertedBackground={false}
                    />
                </div>

                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Manasi Roof Top"
                        leftLink={{ text: "Privacy Policy", href: "#" }}
                        rightLink={{ text: "Contact", href: "#contact" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}