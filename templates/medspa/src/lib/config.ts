import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Novuskin",
    tagline: "Achieve Your Best Skin Now.",
    phone: "(877) 668-8756",
    phoneHref: "tel:+18776688756",
    email: "info@novuskin.com",
    address: "3325 W Desert Inn Rd, Las Vegas, NV 89102",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Frisco", "Denver"],
    license: "NV Medical Esthetics License",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Acne Treatment", desc: "Target and clear breakouts for smoother, healthier skin.", urgent: false },
    { icon: "heart", title: "Hydradermabrasion", desc: "Deeply cleanse, exfoliate, and hydrate for a radiant complexion.", urgent: false },
    { icon: "star", title: "Skin Tightening", desc: "Non-invasive radio frequency to firm and lift sagging skin.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Permanent reduction of unwanted hair for silky-smooth skin.", urgent: false },
    { icon: "zap", title: "Injectables", desc: "Restore volume and smooth wrinkles with expert dermal fillers and neuromodulators.", urgent: false },
    { icon: "thermometer", title: "Wellness Program", desc: "Personalized plans to optimize your health and vitality from within.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Las Vegas, NV", stars: 5, text: "I've struggled with acne for years, and Novuskin's treatment has been a game-changer. After just three sessions, my skin is clearer and more confident than ever. The staff is incredibly knowledgeable and made me feel so comfortable throughout the process. Highly recommend!" },
    { name: "Mark T.", location: "Frisco, TX", stars: 5, text: "The Hydradermabrasion facial at Novuskin is pure bliss! My skin felt incredibly clean and looked so much brighter immediately after. It's become my go-to for a quick refresh before important events. Worth every penny for the glow!" },
    { name: "Jessica R.", location: "Denver, CO", stars: 5, text: "I was hesitant about injectables, but the team at Novuskin put all my fears at ease. The results are incredibly natural, and I look refreshed, not 'done.' They listened to my concerns and delivered exactly what I wanted. Truly professional and skilled." }
  ],

  trustBadges: [
    "Licensed & Certified Professionals", "Advanced Diagnostic Tools", "Customized Treatment Plans", "Membership Programs Available", "5-Star Client Reviews"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified professionals dedicated to your skin health." },
    { icon: "sparkles", title: "Personalized Care", desc: "We create custom treatment plans tailored to your unique skin concerns and goals." },
    { icon: "shield-check", title: "Advanced Technology", desc: "Utilizing cutting-edge equipment and techniques for superior results and safety." },
    { icon: "heart", title: "Comprehensive Services", desc: "From facials to injectables, we offer a full spectrum of aesthetic and wellness treatments." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "Your comfort and satisfaction are our top priorities, ensuring a positive experience every visit." },
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy lifestyle." }
  ],

  formServiceOptions: ["Acne Treatment", "Hydradermabrasion", "Skin Tightening", "Laser Hair Removal", "Injectables", "Wellness Program"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!