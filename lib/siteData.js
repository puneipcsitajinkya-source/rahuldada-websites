// ---------------------------------------------------------------------------
// SITE DATA — edit everything here. Numbers marked "// placeholder" are not
// confirmed figures; swap them for the Mandal's real counts before launch.
// ---------------------------------------------------------------------------

export const org = {
  name: "Navchaitanya Bahuuddeshiya Vikas Yuva Mandal",
  shortName: "Navchaitanya Yuva Mandal",
  tagline: "Shiroli, Ghatanji, Yavatmal",
  established: 2003,
  workingSince: 2005,
  address: "At Post Shiroli, Taluka Ghatanji, District Yavatmal, Maharashtra – 445301",
  phone: "+91 00000 00000", // placeholder
  email: "info@navchaitanyayuvamandal.org", // placeholder
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const impactStats = [
  { value: "20+", label: "Years at work", note: `Registered in ${org.established}, active on ground since ${org.workingSince}` },
  { value: "10", label: "Paanpoi water points", note: "Set up each summer along the Shiroli–Ghatanji and Pandhari routes" },
  { value: "15 L", label: "Water carried daily", note: "Refilled by hand across every station through peak summer" },
  { value: "3", label: "Awards & honours", note: "Krishithon, Baliraja Sevabhavi Puraskar, and Tahsildar Office recognition" },
];

export const focusAreas = [
  {
    slug: "water",
    title: "Water Conservation",
    marathi: "जल संरक्षण",
    summary:
      "Check dams, farm ponds and rainwater harvesting structures that hold the monsoon back for the dry months, plus water-literacy work with the villages who depend on them.",
    image: "/images/water-pond-conservation.jpeg",
    points: ["Check dams & farm ponds", "Rainwater harvesting", "River rejuvenation", "Watershed development", "Water literacy programs"],
  },
  {
    slug: "birds",
    title: "Bird Conservation",
    marathi: "पक्षी संरक्षण",
    summary:
      "Every summer, as village ponds dry and temperatures climb past 44°C, our volunteers hang clay paanpoi — water bowls — on trees along ten routes and refill them by hand.",
    image: "/images/bird-paanpoi-hero.jpeg",
    points: ["Summer paanpoi (water pots)", "Nest distribution", "Bird rescue", "Awareness campaigns", "Plantation for bird habitat"],
  },
  {
    slug: "trees",
    title: "Tree Plantation",
    marathi: "वृक्षारोपण",
    summary:
      "Saplings raised in recycled containers — old detergent packets, bottles, tins — and planted along roadsides, farm bunds and school grounds until they can stand on their own.",
    image: "/images/tree-grown-roadside.jpeg",
    points: ["Roadside & farm-bund plantation", "Forest restoration", "Village green campaign", "School plantation drives", "Nursery from recycled waste"],
  },
  {
    slug: "environment",
    title: "Environmental Protection",
    marathi: "पर्यावरण रक्षण",
    summary:
      "Plastic-free and clean-village campaigns, composting awareness, and climate-change education carried village to village by our youth volunteers.",
    image: "/images/nursery-recycled-saplings.jpeg",
    points: ["Plastic-free campaign", "Clean village drives", "Waste & compost awareness", "Climate change awareness"],
  },
  {
    slug: "health",
    title: "Health Awareness",
    marathi: "आरोग्य जागृती",
    summary:
      "Camps and awareness sessions on disease prevention, vaccination, maternal and child health, and regular blood donation camps run with local health officers.",
    image: "/images/event-school-auditorium.jpeg",
    points: ["Health & vaccination camps", "Blood donation camps", "Women's & child health", "Disease awareness"],
  },
  {
    slug: "rural-development",
    title: "Rural Development",
    marathi: "ग्रामीण विकास",
    summary:
      "Skill-building, women's empowerment groups, youth leadership and farmer training in sustainable agriculture — work that keeps families rooted in their villages.",
    image: "/images/event-field-visit.jpeg",
    points: ["Skill development", "Women empowerment", "Youth development", "Farmer training & sustainable agriculture"],
  },
];

export const timeline2026 = [
  { done: true, label: "Tree Plantation drives" },
  { done: true, label: "Paanpoi (bird water point) distribution" },
  { done: true, label: "Health Camp" },
  { done: true, label: "River / pond cleaning" },
  { done: true, label: "Farmer training session" },
];

export const press = [
  {
    outlet: "Deshonnati",
    date: "20 Aug 2025",
    headlineMr: "जल, वृक्ष व पक्ष्यांची काळजी घेणाऱ्या नवचैतन्य संस्थेचा गौरव",
    headlineEn: "Ghatanji Tahsildar's office honours Navchaitanya for its water, tree and bird conservation work",
    image: "/images/press-deshonnati-award.jpeg",
  },
  {
    outlet: "Lokdoot",
    date: "27 Apr 2025",
    headlineMr: "उन्हाळ्यात पक्ष्यांसाठी देवदूत ठरला शिरोलीचा राहुल जिवने",
    headlineEn: "In the summer heat, Shiroli's Rahul Jivane became a lifeline for birds — paanpoi set up village to village",
    image: "/images/press-lokdoot.jpeg",
  },
  {
    outlet: "Punya Nagari",
    date: "26 Apr 2025",
    headlineMr: "शिरोलीचा राहुल पक्ष्यांना पाजतोय थंडगार पाणी",
    headlineEn: "Shiroli's Rahul is giving birds cool water to drink through the peak of summer",
    image: "/images/press-punyanagari.jpeg",
  },
];

export const awards = [
  {
    title: "Krishithon Kṛishithon — Spreading Green Spirit",
    year: "2019",
    detail: "Adarsh Grassroots Ideal Rural Development Youth Mandal award, 23–27 Nov 2019, presented by Human Service Foundation.",
    image: "/images/award-krishithon-medal.jpeg",
  },
  {
    title: "Baliraja Sevabhavi Puraskar",
    year: "2016",
    detail: "First prize for outstanding rural development work — awarded by Baliraja Sevabhavi Pratishthan, Ghatanji.",
    image: "/images/award-baliraja.jpeg",
  },
];

export const galleryImages = [
  { src: "/images/bird-paanpoi-hero.jpeg", alt: "A bird drinking from a hand-made clay water bowl hung on a tree", tag: "Birds" },
  { src: "/images/press-clip-bird-drinking.jpeg", alt: "News clipping of a bird drinking from a paanpoi water station", tag: "Press" },
  { src: "/images/tree-sapling-planted.jpeg", alt: "A young sapling freshly planted beside a village road", tag: "Trees" },
  { src: "/images/tree-grown-roadside.jpeg", alt: "Volunteer standing beside a tree grown tall along a roadside", tag: "Trees" },
  { src: "/images/volunteer-sapling.jpeg", alt: "Volunteer holding up a sapling ready for planting", tag: "Trees" },
  { src: "/images/nursery-recycled-saplings.jpeg", alt: "Saplings raised in recycled packets and containers", tag: "Nursery" },
  { src: "/images/water-pond-conservation.jpeg", alt: "A farm pond restored for water conservation", tag: "Water" },
  { src: "/images/event-school-auditorium.jpeg", alt: "Awareness street-play performed for students in an auditorium", tag: "Awareness" },
  { src: "/images/event-nehru-yuva-kendra.jpeg", alt: "Youth performance on stage at a Nehru Yuva Kendra programme", tag: "Events" },
  { src: "/images/event-krishithon-stage.jpeg", alt: "Team receiving the Krishithon award on stage", tag: "Awards" },
  { src: "/images/event-field-visit.jpeg", alt: "Members in discussion during a field visit", tag: "Events" },
  { src: "/images/award-krishithon-medal.jpeg", alt: "Krishithon award certificate and medal", tag: "Awards" },
  { src: "/images/award-baliraja.jpeg", alt: "Baliraja Sevabhavi Puraskar certificate", tag: "Awards" },
];

export const donationTiers = [
  { amount: "₹500", impact: "Sets up one clay paanpoi water point for the summer" },
  { amount: "₹1,000", impact: "Plants and stakes 10 saplings along a village road" },
  { amount: "₹5,000", impact: "Runs a village health & vaccination awareness camp" },
  { amount: "₹10,000", impact: "Funds a small water conservation structure" },
];
