const dealershipSettings = {
  primaryPhone: "9708216666",
  secondaryPhone: "9262296515",
  primaryTel: "+919708216666",
  secondaryTel: "+919262296515",
  whatsappNumber: "919708216666",
  address: "Near Didarganj Check Post, NH-30, Patna, India - 800008",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Near%20Didarganj%20Check%20Post%2C%20NH-30%2C%20Patna%2C%20India%20-%20800008"
};

const uiText = {
  en: {
    navHome: "Home",
    navMachines: "Machines",
    navProducts: "Products",
    navServices: "Services",
    navAbout: "About us",
    navContact: "Contact",
    callNow: "Call 97082 16666",
    callShort: "Call",
    whatsapp: "WhatsApp",
    getQuote: "Get Quote",
    menu: "Menu",
    heroEyebrow: "Premium JCB dealership experience",
    heroTitle: "Power that moves Bihar.",
    heroCopy: "Premium JCB Construction Equipment for Every Job.",
    exploreMachines: "Explore Machines",
    contactUs: "Contact Us",
    scrollExplore: "Scroll to explore",
    showcaseEyebrow: "3D Machine Showcase",
    showcaseTitle: "Explore the fleet with depth, motion and focus.",
    showcaseIntro: "Select any JCB machine to see its official visual, category, specs, key features and enquiry path in one premium side detail panel.",
    lineup: "Lineup",
    machineCount: "14 machines",
    selectedMachine: "Selected Machine",
    category: "Category",
    keySpec: "Key spec",
    visual: "Visual",
    officialAsset: "Official JCB asset",
    interaction: "Interaction",
    style360: "360 style view",
    enquireNow: "Enquire Now",
    viewDetails: "View Details",
    allMachines: "All machines",
    backhoeLoaders: "Backhoe loaders",
    excavators: "Excavators",
    miniExcavators: "Mini excavators",
    loaders: "Loaders",
    showAll: "View All Machines",
    showFocused: "Show Focused View",
    machineDetails: "Machine Details",
    keyFeatures: "Key Features",
    bestFor: "Best For",
    officialPage: "Official Page",
    selectMachine: "Select a machine",
    tapForDetails: "Tap the card for full details",
    detailHint: "Tap any JCB card to open full details on the side.",
    enquiryReceived: "Enquiry received.",
    reference: "Reference",
    choiceQuote: "Get a quote",
    choiceDemo: "Book a demo",
    choiceFinance: "Finance",
    choiceService: "Service"
  },
  hi: {
    navHome: "होम",
    navMachines: "मशीन",
    navProducts: "प्रोडक्ट",
    navServices: "सर्विस",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क",
    callNow: "कॉल करें 97082 16666",
    callShort: "कॉल",
    whatsapp: "व्हाट्सऐप",
    getQuote: "कोटेशन लें",
    menu: "मेन्यू",
    heroEyebrow: "प्रीमियम JCB डीलरशिप अनुभव",
    heroTitle: "बिहार को आगे बढ़ाने वाली ताकत.",
    heroCopy: "हर काम के लिए प्रीमियम JCB कंस्ट्रक्शन मशीन.",
    exploreMachines: "मशीन देखें",
    contactUs: "संपर्क करें",
    scrollExplore: "आगे देखें",
    showcaseEyebrow: "3D मशीन शोकेस",
    showcaseTitle: "हर JCB मशीन को डिटेल, मोशन और फोकस के साथ देखें.",
    showcaseIntro: "किसी भी JCB मशीन पर टैप करें और उसकी फोटो, कैटेगरी, स्पेसिफिकेशन, फीचर्स और enquiry option side panel में देखें.",
    lineup: "लाइनअप",
    machineCount: "14 मशीनें",
    selectedMachine: "चुनी हुई मशीन",
    category: "कैटेगरी",
    keySpec: "मुख्य स्पेक",
    visual: "विजुअल",
    officialAsset: "ऑफिशियल JCB इमेज",
    interaction: "इंटरैक्शन",
    style360: "360 स्टाइल व्यू",
    enquireNow: "अभी enquiry करें",
    viewDetails: "डिटेल देखें",
    allMachines: "सभी मशीनें",
    backhoeLoaders: "बैकहो लोडर",
    excavators: "एक्सकेवेटर",
    miniExcavators: "मिनी एक्सकेवेटर",
    loaders: "लोडर",
    showAll: "सभी मशीनें देखें",
    showFocused: "फोकस्ड व्यू दिखाएं",
    machineDetails: "मशीन डिटेल",
    keyFeatures: "मुख्य फीचर्स",
    bestFor: "किस काम के लिए बेहतर",
    officialPage: "ऑफिशियल पेज",
    selectMachine: "मशीन चुनें",
    tapForDetails: "पूरी डिटेल के लिए कार्ड पर टैप करें",
    detailHint: "किसी भी JCB कार्ड पर टैप करें, पूरी डिटेल side में खुलेगी.",
    enquiryReceived: "Enquiry मिल गई.",
    reference: "Reference",
    choiceQuote: "कोटेशन लें",
    choiceDemo: "डेमो बुक करें",
    choiceFinance: "फाइनेंस",
    choiceService: "सर्विस"
  }
};

const categoryLabels = {
  en: {
    Backhoe: "Backhoe loader",
    Excavator: "Excavator",
    "Mini Excavator": "Mini excavator",
    Loader: "Loader"
  },
  hi: {
    Backhoe: "बैकहो लोडर",
    Excavator: "एक्सकेवेटर",
    "Mini Excavator": "मिनी एक्सकेवेटर",
    Loader: "लोडर"
  }
};

const machines = [
  {
    name: "JCB 3DX",
    category: "Backhoe",
    spec: { en: "Backhoe loader", hi: "बैकहो लोडर" },
    image: "assets/machines/jcb-3dx.webp",
    source: "https://www.jcb.com/en-IN/products/machines/backhoe-loaders/3dx/",
    specs: [
      { label: { en: "Max dig depth", hi: "मैक्स डिग डेप्थ" }, value: "4.77 m" },
      { label: { en: "Loader shovel capacity", hi: "लोडर शॉवल क्षमता" }, value: "1 m3" },
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "37 kW (49 hp)" },
      { label: { en: "Loader dump height", hi: "लोडर डंप हाइट" }, value: "2.74 m" },
      { label: { en: "Bucket capacity", hi: "बकेट क्षमता" }, value: "0.26 m3" }
    ],
    copy: {
      en: {
        description: "The JCB 3DX is an efficient backhoe loader powered by the JCB Stage 5-430 engine for fuel-saving work without compromising core performance.",
        features: ["Up to 10% lower fuel consumption", "Variable displacement hydraulic pump", "Multiple working modes", "ROPS and FOPS safety-focused cabin", "Heavy-duty boom and dipper"],
        bestFor: "General loading, digging, trenching, rural projects and day-to-day construction work."
      },
      hi: {
        description: "JCB 3DX एक efficient backhoe loader है, जिसमें JCB Stage 5-430 engine दिया गया है ताकि fuel saving के साथ strong performance मिले.",
        features: ["10% तक कम fuel consumption", "Variable displacement hydraulic pump", "Multiple working modes", "ROPS और FOPS safety cabin", "Heavy-duty boom और dipper"],
        bestFor: "Loading, digging, trenching, rural projects और daily construction work के लिए बेहतर."
      }
    }
  },
  {
    name: "JCB 3DX Plus",
    category: "Backhoe",
    spec: { en: "Backhoe loader", hi: "बैकहो लोडर" },
    image: "assets/machines/jcb-3dx-plus.webp",
    source: "https://www.jcb.com/en-IN/products/machines/backhoe-loaders/3dx-plus/",
    specs: [
      { label: { en: "Max dig depth", hi: "मैक्स डिग डेप्थ" }, value: "4.77 m" },
      { label: { en: "Loader shovel capacity", hi: "लोडर शॉवल क्षमता" }, value: "1.1 m3" },
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "55 kW" },
      { label: { en: "Loader dump height", hi: "लोडर डंप हाइट" }, value: "2.74 m" },
      { label: { en: "Bucket capacity", hi: "बकेट क्षमता" }, value: "0.26 m3" },
      { label: { en: "Torque", hi: "टॉर्क" }, value: "440 Nm" }
    ],
    copy: {
      en: {
        description: "The 3DX Plus is built for strong productivity with 2WD, 4WD and high-dump variants, combining fuel efficiency, reliability and operator comfort.",
        features: ["Up to 12% lower fuel consumption", "Eco, Standard and Plus modes", "Loading and roading modes", "Reduced in-cab noise", "Remote diagnostics support"],
        bestFor: "Contractors who need a balanced machine for loading, dozing, trenching, road work and mixed site jobs."
      },
      hi: {
        description: "3DX Plus 2WD, 4WD और high-dump variants के साथ productivity, fuel efficiency, reliability और operator comfort के लिए बनाया गया है.",
        features: ["12% तक कम fuel consumption", "Eco, Standard और Plus modes", "Loading और roading modes", "Cabin noise कम", "Remote diagnostics support"],
        bestFor: "Loading, dozing, trenching, road work और mixed site jobs करने वाले contractors के लिए सही."
      }
    }
  },
  {
    name: "JCB 3DX Xtra",
    category: "Backhoe",
    spec: { en: "Backhoe loader", hi: "बैकहो लोडर" },
    image: "assets/machines/jcb-3dx-xtra.webp",
    source: "https://www.jcb.com/en-IN/products/machines/backhoe-loaders/3dx-xtra/",
    specs: [
      { label: { en: "Max dig depth", hi: "मैक्स डिग डेप्थ" }, value: "5.05 m" },
      { label: { en: "Loader shovel capacity", hi: "लोडर शॉवल क्षमता" }, value: "1.1 m3" },
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "55 kW" },
      { label: { en: "Loader dump height", hi: "लोडर डंप हाइट" }, value: "2.93 m" },
      { label: { en: "Bucket capacity", hi: "बकेट क्षमता" }, value: "0.3 m3" }
    ],
    copy: {
      en: {
        description: "The 3DX Xtra carries EcoXPERT max range technology and is designed for customers who need extra breakout and loading capability.",
        features: ["Higher digging depth than 3DX Plus", "Larger bucket capacity", "EcoXPERT max range technology", "Built for tough site cycles", "Official JCB India machine visual"],
        bestFor: "More intensive excavation, loading and site preparation where extra depth and bucket size help productivity."
      },
      hi: {
        description: "3DX Xtra में EcoXPERT max range technology है और यह extra breakout performance और loading capability के लिए बनाया गया है.",
        features: ["3DX Plus से ज्यादा digging depth", "बड़ी bucket capacity", "EcoXPERT max range technology", "Tough site cycles के लिए तैयार", "Official JCB India image"],
        bestFor: "जहां extra digging depth और bucket size से productivity बढ़ती है, उन loading और excavation jobs के लिए."
      }
    }
  },
  {
    name: "JCB 3DX Super",
    category: "Backhoe",
    spec: { en: "Backhoe loader", hi: "बैकहो लोडर" },
    image: "assets/machines/jcb-3dx-super.webp",
    source: "https://www.jcb.com/en-IN/products/machines/backhoe-loaders/3dx-super/",
    specs: [
      { label: { en: "Max dig depth", hi: "मैक्स डिग डेप्थ" }, value: "5.05 m" },
      { label: { en: "Loader shovel capacity", hi: "लोडर शॉवल क्षमता" }, value: "1 m3" },
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "55 kW" },
      { label: { en: "Loader dump height", hi: "लोडर डंप हाइट" }, value: "2.93 m" },
      { label: { en: "Bucket capacity", hi: "बकेट क्षमता" }, value: "0.3 m3" }
    ],
    copy: {
      en: {
        description: "The 3DX Super is a stronger backhoe loader option in the 3DX range, focused on performance, reliability and demanding applications.",
        features: ["5.05 m max dig depth", "55 kW engine power", "0.3 m3 bucket capacity", "Stage 5-430 engine family", "Designed for productive ownership"],
        bestFor: "Professional users who need stronger digging depth and dependable backhoe performance."
      },
      hi: {
        description: "3DX Super, 3DX range का strong backhoe loader option है, जो performance, reliability और demanding applications पर focused है.",
        features: ["5.05 m max dig depth", "55 kW engine power", "0.3 m3 bucket capacity", "Stage 5-430 engine family", "Productive ownership के लिए designed"],
        bestFor: "Strong digging depth और dependable backhoe performance चाहने वाले professional users के लिए."
      }
    }
  },
  {
    name: "JCB 3DXL Plus Loader",
    category: "Loader",
    spec: { en: "Loader variant", hi: "लोडर वैरिएंट" },
    image: "assets/machines/jcb-3dxl-plus-loader.webp",
    source: "https://www.jcb.com/en-IN/products/machines/backhoe-loaders/3dxl-plus/",
    specs: [
      { label: { en: "Loader shovel capacity", hi: "लोडर शॉवल क्षमता" }, value: "1.1 m3 standard" },
      { label: { en: "Optional shovel", hi: "Optional शॉवल" }, value: "1.2 m3 / 6-in-1" },
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "55 kW" },
      { label: { en: "Loader dump height", hi: "लोडर डंप हाइट" }, value: "2.74 m" },
      { label: { en: "Torque", hi: "टॉर्क" }, value: "400 Nm" },
      { label: { en: "Configuration", hi: "कॉन्फिगरेशन" }, value: "2WD / 4WD" }
    ],
    copy: {
      en: {
        description: "The 3DXL Plus Loader is built for heavy-duty front loading applications with strong performance, comfort and JCB LiveLink support.",
        features: ["12% better fuel efficiency claim from JCB", "Compact wheelbase for manoeuvrability", "Heavy-duty boom and dipper", "Advanced filtration system", "ROPS and FOPS-rated cabin"],
        bestFor: "Material handling, front loading, hopper feeding and sites where loader work is the priority."
      },
      hi: {
        description: "3DXL Plus Loader heavy-duty front loading applications के लिए बनाया गया है, जिसमें performance, comfort और JCB LiveLink support मिलता है.",
        features: ["JCB के अनुसार 12% बेहतर fuel efficiency", "Compact wheelbase से manoeuvrability", "Heavy-duty boom और dipper", "Advanced filtration system", "ROPS और FOPS rated cabin"],
        bestFor: "Material handling, front loading, hopper feeding और loader-focused काम के लिए."
      }
    }
  },
  {
    name: "JCB NXT 140",
    category: "Excavator",
    spec: { en: "Tracked excavator", hi: "ट्रैक्ड एक्सकेवेटर" },
    image: "assets/machines/jcb-nxt-140.webp",
    source: "https://www.jcb.com/en-IN/products/machines/excavators/140-nxt/",
    specs: [
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "75 kW" },
      { label: { en: "Max operating weight", hi: "मैक्स operating weight" }, value: "14,320 kg" },
      { label: { en: "Bucket options", hi: "Bucket options" }, value: "0.72 m3 / 0.63 m3 quarry" },
      { label: { en: "Power modes", hi: "Power modes" }, value: "3 modes" },
      { label: { en: "Technology", hi: "Technology" }, value: "IntelliControl + LiveLink" }
    ],
    copy: {
      en: {
        description: "The NXT 140 is a tracked excavator with IntelliControl, reinforced structure, heavy-duty bucket design and power modes for productivity.",
        features: ["Power Plus mode for higher output", "Regenerative hydraulic circuit", "Reinforced boom and arm", "Digital display with operational data", "LiveLink telematics"],
        bestFor: "Earthwork, quarry support, excavation, lifting stability and productive mid-size project work."
      },
      hi: {
        description: "NXT 140 IntelliControl, reinforced structure, heavy-duty bucket design और productivity power modes वाला tracked excavator है.",
        features: ["Power Plus mode से higher output", "Regenerative hydraulic circuit", "Reinforced boom और arm", "Digital display में operational data", "LiveLink telematics"],
        bestFor: "Earthwork, quarry support, excavation, lifting stability और mid-size projects के लिए."
      }
    }
  },
  {
    name: "JCB NXT 205",
    category: "Excavator",
    spec: { en: "Tracked excavator", hi: "ट्रैक्ड एक्सकेवेटर" },
    image: "assets/machines/jcb-nxt-205.webp",
    source: "https://www.jcb.com/en-IN/products/machines/excavators/205-nxt/",
    specs: [
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "104 kW" },
      { label: { en: "Max operating weight", hi: "मैक्स operating weight" }, value: "20,550 kg" },
      { label: { en: "Class", hi: "क्लास" }, value: "20-21 tonne" },
      { label: { en: "Machine type", hi: "मशीन टाइप" }, value: "Tracked excavator" }
    ],
    copy: {
      en: {
        description: "The NXT 205 is a 20-21 tonne category excavator focused on heavy excavation, business productivity and efficient site cycles.",
        features: ["104 kW engine class", "20,550 kg max operating weight", "NXT level excavation focus", "Strong productivity positioning", "Official JCB India product asset"],
        bestFor: "Infrastructure jobs, heavy excavation, earthmoving and contractors who need higher output."
      },
      hi: {
        description: "NXT 205 20-21 tonne category का excavator है, जो heavy excavation, business productivity और efficient site cycles के लिए बनाया गया है.",
        features: ["104 kW engine class", "20,550 kg max operating weight", "NXT level excavation focus", "Strong productivity positioning", "Official JCB India image"],
        bestFor: "Infrastructure jobs, heavy excavation, earthmoving और high-output contractors के लिए."
      }
    }
  },
  {
    name: "JCB NXT 215LC",
    category: "Excavator",
    spec: { en: "Tracked excavator", hi: "ट्रैक्ड एक्सकेवेटर" },
    image: "assets/machines/jcb-nxt-215lc.webp",
    source: "https://www.jcb.com/en-IN/products/machines/excavators/nxt-215lc/",
    specs: [
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "104 kW" },
      { label: { en: "Max operating weight", hi: "मैक्स operating weight" }, value: "21,750 kg" },
      { label: { en: "Class", hi: "क्लास" }, value: "21 tonne" },
      { label: { en: "Machine type", hi: "मशीन टाइप" }, value: "Long-carriage tracked excavator" }
    ],
    copy: {
      en: {
        description: "The NXT 215LC is designed for higher output with lower fuel consumption, commonly positioned for irrigation, highways and infrastructure work.",
        features: ["21,750 kg max operating weight", "104 kW engine power", "Long-carriage excavator stance", "Productivity and fuel efficiency focus", "Heavy-duty project image"],
        bestFor: "Irrigation, highways, infrastructure, bulk earthwork and long productive site shifts."
      },
      hi: {
        description: "NXT 215LC higher output और lower fuel consumption के लिए designed है, खासकर irrigation, highways और infrastructure work के लिए.",
        features: ["21,750 kg max operating weight", "104 kW engine power", "Long-carriage excavator stance", "Productivity और fuel efficiency focus", "Heavy-duty project image"],
        bestFor: "Irrigation, highways, infrastructure, bulk earthwork और long site shifts के लिए."
      }
    }
  },
  {
    name: "JCB NXT 225LC M",
    category: "Excavator",
    spec: { en: "Tracked excavator", hi: "ट्रैक्ड एक्सकेवेटर" },
    image: "assets/machines/jcb-nxt-225lcm.webp",
    source: "https://www.jcb.com/en-IN/products/machines/excavators/nxt-225-lcm/",
    specs: [
      { label: { en: "Max engine power", hi: "मैक्स इंजन पावर" }, value: "110 kW" },
      { label: { en: "Max operating weight", hi: "मैक्स operating weight" }, value: "22,200 kg" },
      { label: { en: "Class", hi: "क्लास" }, value: "22 tonne" },
      { label: { en: "Machine type", hi: "मशीन टाइप" }, value: "Tracked excavator" }
    ],
    copy: {
      en: {
        description: "The NXT 225LC M is positioned for best-in-class power, performance, efficiency and technology in demanding excavation applications.",
        features: ["110 kW max engine power", "22,200 kg max operating weight", "Large excavator range", "Designed for demanding applications", "Premium NXT range presentation"],
        bestFor: "Large excavation, quarry-side work, earthmoving and contractors who need more reach and strength."
      },
      hi: {
        description: "NXT 225LC M demanding excavation applications में power, performance, efficiency और technology के लिए positioned है.",
        features: ["110 kW max engine power", "22,200 kg max operating weight", "Large excavator range", "Demanding applications के लिए", "Premium NXT range presentation"],
        bestFor: "Large excavation, quarry-side work, earthmoving और ज्यादा reach/strength वाली jobs के लिए."
      }
    }
  },
  {
    name: "JCB 81 eco+",
    category: "Excavator",
    spec: { en: "Compact excavator", hi: "कॉम्पैक्ट एक्सकेवेटर" },
    image: "assets/machines/jcb-81-eco-plus.webp",
    source: "https://www.jcb.com/en-IN/products/machines/excavators/jcb-81/",
    specs: [
      { label: { en: "Class", hi: "क्लास" }, value: "7-8 tonne" },
      { label: { en: "Engine power", hi: "इंजन पावर" }, value: "37 kW (49 hp)" },
      { label: { en: "Standard bucket", hi: "स्टैंडर्ड bucket" }, value: "0.35 m3" },
      { label: { en: "Heavy-duty bucket", hi: "Heavy-duty bucket" }, value: "0.32 m3" },
      { label: { en: "Arm length", hi: "Arm length" }, value: "1.74 m" },
      { label: { en: "Power modes", hi: "Power modes" }, value: "Eco / Standard / Power" }
    ],
    copy: {
      en: {
        description: "The JCB 81 eco+ is a 7-8 tonne compact excavator made for performance and savings with operator comfort, connectivity and versatile applications.",
        features: ["Designed for higher fuel efficiency", "0.35 m3 standard bucket", "Auto idle for fuel saving", "Large cab with visibility", "LiveLink connectivity"],
        bestFor: "Irrigation, landscaping, rural projects, brick fields, fisheries, sand mining and utility jobs."
      },
      hi: {
        description: "JCB 81 eco+ 7-8 tonne compact excavator है, जो performance, savings, operator comfort और connectivity के लिए बनाया गया है.",
        features: ["Higher fuel efficiency के लिए designed", "0.35 m3 standard bucket", "Auto idle से fuel saving", "बेहतर visibility वाली large cab", "LiveLink connectivity"],
        bestFor: "Irrigation, landscaping, rural projects, brick fields, fisheries, sand mining और utility jobs के लिए."
      }
    }
  },
  {
    name: "JCB 50Z",
    category: "Mini Excavator",
    spec: { en: "Mini excavator", hi: "मिनी एक्सकेवेटर" },
    image: "assets/machines/jcb-50z.webp",
    source: "https://www.jcb.com/en-IN/products/machines/mini-excavators/50z/",
    specs: [
      { label: { en: "Engine power", hi: "इंजन पावर" }, value: "48 hp" },
      { label: { en: "Torque", hi: "टॉर्क" }, value: "143 Nm" },
      { label: { en: "Pump flow", hi: "Pump flow" }, value: "126 lpm" },
      { label: { en: "Working depth", hi: "Working depth" }, value: "3.5 m" },
      { label: { en: "Reach", hi: "Reach" }, value: "5.85 m" },
      { label: { en: "Dump height", hi: "Dump height" }, value: "4 m" },
      { label: { en: "Operating modes", hi: "Operating modes" }, value: "8 modes" }
    ],
    copy: {
      en: {
        description: "The JCB 50Z is a compact excavator built for India's urban landscape, with zero tail swing, strong stability and advanced LiveLink.",
        features: ["Zero tail swing", "8 operating modes", "Auto idle and one-touch idle", "Intelligent display with dial throttle", "Designed for narrow sites"],
        bestFor: "Planting, pipe laying, drainage cleaning, canal sediment removal, trenching, railway cable work and industrial utility jobs."
      },
      hi: {
        description: "JCB 50Z भारत के urban landscape के लिए बनाया गया compact excavator है, जिसमें zero tail swing, strong stability और advanced LiveLink मिलता है.",
        features: ["Zero tail swing", "8 operating modes", "Auto idle और one-touch idle", "Dial throttle के साथ intelligent display", "Narrow sites के लिए designed"],
        bestFor: "Planting, pipe laying, drainage cleaning, canal sediment removal, trenching, railway cable work और industrial utility jobs के लिए."
      }
    }
  },
  {
    name: "JCB 30Plus",
    category: "Mini Excavator",
    spec: { en: "Mini excavator", hi: "मिनी एक्सकेवेटर" },
    image: "assets/machines/jcb-30plus.webp",
    source: "https://www.jcb.com/en-IN/products/machines/mini-excavators/30-plus/",
    specs: [
      { label: { en: "Engine power", hi: "इंजन पावर" }, value: "18.4 kW gross" },
      { label: { en: "Engine standard", hi: "Engine standard" }, value: "BS III" },
      { label: { en: "Hydraulic fittings", hi: "Hydraulic fittings" }, value: "ORFS" },
      { label: { en: "Track frame", hi: "Track frame" }, value: "Open-centre" },
      { label: { en: "Machine type", hi: "मशीन टाइप" }, value: "Mini excavator" }
    ],
    copy: {
      en: {
        description: "The JCB 30Plus is a compact mini excavator for restricted areas, built with robust components, operator comfort and versatile attachment compatibility.",
        features: ["Colour-coded hydraulic hoses", "ORFS hydraulic fittings", "Recessed bonnets and cast counterweight", "High-strength track legs", "Open-centre track frame"],
        bestFor: "Urban infrastructure, restricted sites, compact excavation and attachment-led jobs."
      },
      hi: {
        description: "JCB 30Plus restricted areas के लिए compact mini excavator है, जिसमें robust components, operator comfort और attachment compatibility मिलती है.",
        features: ["Colour-coded hydraulic hoses", "ORFS hydraulic fittings", "Recessed bonnets और cast counterweight", "High-strength track legs", "Open-centre track frame"],
        bestFor: "Urban infrastructure, restricted sites, compact excavation और attachment-led jobs के लिए."
      }
    }
  },
  {
    name: "JCB 37C HD",
    category: "Mini Excavator",
    spec: { en: "Mini excavator", hi: "मिनी एक्सकेवेटर" },
    image: "assets/machines/jcb-37c.webp",
    source: "https://www.jcb.com/en-IN/products/machines/mini-excavators/37c/",
    specs: [
      { label: { en: "Tail swing", hi: "Tail swing" }, value: "Conventional tail swing" },
      { label: { en: "Cabin comfort", hi: "Cabin comfort" }, value: "Suspension seat + fan" },
      { label: { en: "Service access", hi: "Service access" }, value: "Wide-opening steel bonnet" },
      { label: { en: "Safety system", hi: "Safety system" }, value: "JCB 2GO" },
      { label: { en: "Structure", hi: "Structure" }, value: "Heavy-duty boom and arm" }
    ],
    copy: {
      en: {
        description: "The JCB 37C HD is a compact conventional tail swing mini excavator made in India for confined areas and high lift-capacity work.",
        features: ["Conventional tail swing design", "Comfortable operator area", "Wide-opening steel bonnet", "High tensile boom and arm", "JCB 2GO hydraulic safety system"],
        bestFor: "Confined work areas, compact digging, higher lift-capacity jobs and service-friendly ownership."
      },
      hi: {
        description: "JCB 37C HD compact conventional tail swing mini excavator है, जो confined areas और high lift-capacity work के लिए made in India है.",
        features: ["Conventional tail swing design", "Comfortable operator area", "Wide-opening steel bonnet", "High tensile boom और arm", "JCB 2GO hydraulic safety system"],
        bestFor: "Confined work areas, compact digging, higher lift-capacity jobs और easy service ownership के लिए."
      }
    }
  },
  {
    name: "JCB 35Z HD",
    category: "Mini Excavator",
    spec: { en: "Mini excavator", hi: "मिनी एक्सकेवेटर" },
    image: "assets/machines/jcb-35z.webp",
    source: "https://www.jcb.com/en-IN/products/machines/mini-excavators/35z/",
    specs: [
      { label: { en: "Tail swing", hi: "Tail swing" }, value: "Zero tail swing" },
      { label: { en: "Class", hi: "क्लास" }, value: "Approx. 3.5 tonne" },
      { label: { en: "Cabin comfort", hi: "Cabin comfort" }, value: "Suspension seat + storage" },
      { label: { en: "Service access", hi: "Service access" }, value: "Wide-opening steel bonnet" },
      { label: { en: "Safety system", hi: "Safety system" }, value: "JCB 2GO" }
    ],
    copy: {
      en: {
        description: "The JCB 35Z HD is a compact zero tail swing mini excavator for restricted access jobsites, with comfort, safety and durability built in.",
        features: ["Zero tail swing design", "Designed for restricted access", "Heavy-duty high tensile boom and arm", "Comfortable operator area", "JCB 2GO safety system"],
        bestFor: "Tight urban jobsites, utility work, compact trenching and projects where rear overhang must stay controlled."
      },
      hi: {
        description: "JCB 35Z HD restricted access jobsites के लिए compact zero tail swing mini excavator है, जिसमें comfort, safety और durability मिलती है.",
        features: ["Zero tail swing design", "Restricted access के लिए designed", "Heavy-duty high tensile boom और arm", "Comfortable operator area", "JCB 2GO safety system"],
        bestFor: "Tight urban jobsites, utility work, compact trenching और controlled rear overhang वाली jobs के लिए."
      }
    }
  }
];

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentLang = localStorage.getItem("ppl-language") || "en";
let activeFilter = "all";
let activeMachineIndex = 1;
let showingAll = false;
let manualRotation = 0;

function t(key) {
  return uiText[currentLang]?.[key] || uiText.en[key] || key;
}

function localized(value) {
  if (typeof value === "string") {
    return value;
  }
  return value?.[currentLang] || value?.en || "";
}

function machineCopy(machine) {
  return machine.copy[currentLang] || machine.copy.en;
}

function categoryLabel(machine) {
  return categoryLabels[currentLang]?.[machine.category] || machine.category;
}

function whatsappUrl(message = "Hello, I would like to enquire about JCB machines and dealership services.") {
  return `https://wa.me/${dealershipSettings.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setupBusinessLinks() {
  qsa(".phone-primary").forEach((link) => {
    link.href = `tel:${dealershipSettings.primaryTel}`;
  });
  qsa(".phone-secondary").forEach((link) => {
    link.href = `tel:${dealershipSettings.secondaryTel}`;
  });
  qsa(".whatsapp-link").forEach((link) => {
    link.href = whatsappUrl();
  });
  qsa(".map-link").forEach((link) => {
    link.href = dealershipSettings.mapsUrl;
  });
}

function machineOptionHtml() {
  return `<option value="">${t("selectMachine")}</option>${machines.map((machine) => `<option>${machine.name}</option>`).join("")}`;
}

function setupMachineSelects() {
  ["#machine", "#contact-machine"].forEach((selector) => {
    const select = qs(selector);
    if (select) {
      const value = select.value;
      select.innerHTML = machineOptionHtml();
      if (value) {
        select.value = value;
      }
    }
  });
}

function categoryCount(filter) {
  if (filter === "all") {
    return machines.length;
  }
  return machines.filter((machine) => machine.category === filter).length;
}

function updateCategoryCounts() {
  qsa(".category").forEach((button) => {
    const count = categoryCount(button.dataset.filter);
    const label = t(button.dataset.labelKey || "allMachines");
    button.innerHTML = `${label} <small>${String(count).padStart(2, "0")}</small>`;
  });
}

function applyStaticLanguage() {
  document.documentElement.lang = currentLang === "hi" ? "hi" : "en";
  qsa("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  qsa(".lang-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
  qsa(".choice").forEach((button) => {
    const key = `choice${button.dataset.type}`;
    button.textContent = t(key);
  });
}

function applyLanguage() {
  localStorage.setItem("ppl-language", currentLang);
  applyStaticLanguage();
  setupMachineSelects();
  updateCategoryCounts();
  renderSelector();
  renderProducts();
  selectMachine(activeMachineIndex);
  renderDetailDrawer(machines[activeMachineIndex]);
}

function setupLanguageSwitch() {
  qsa(".lang-option").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang || "en";
      applyLanguage();
    });
  });
}

function renderSelector() {
  const list = qs("#selector-list");
  if (!list) {
    return;
  }

  list.innerHTML = machines.map((machine, index) => `
    <button class="selector-button${index === activeMachineIndex ? " active" : ""}" type="button" data-index="${index}" aria-label="${t("viewDetails")} ${machine.name}">
      <img src="${machine.image}" alt="" loading="lazy" />
      <span><strong>${machine.name}</strong><span>${localized(machine.spec)}</span></span>
    </button>
  `).join("");

  qsa(".selector-button", list).forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      selectMachine(index);
      openDetailDrawer(index);
    });
  });
}

function renderProducts() {
  const grid = qs("#machine-grid");
  const showAllButton = qs("#show-all");
  if (!grid) {
    return;
  }

  const filtered = activeFilter === "all" ? machines : machines.filter((machine) => machine.category === activeFilter);
  const limit = showingAll ? filtered.length : Math.min(6, filtered.length);

  grid.innerHTML = filtered.map((machine, position) => {
    const index = machines.indexOf(machine);
    const hiddenClass = position >= limit ? " is-hidden" : "";
    return `
      <article class="product-card${hiddenClass}" data-tilt-card data-index="${index}" tabindex="0" aria-label="${t("viewDetails")} ${machine.name}">
        <div class="product-image">
          <img src="${machine.image}" alt="${machine.name}" loading="lazy" />
        </div>
        <div class="product-info">
          <small>${localized(machine.spec)} • ${t("tapForDetails")}</small>
          <h3>${machine.name}</h3>
          <p>${machineCopy(machine).description}</p>
          <div class="product-actions">
            <button type="button" class="outline-button view-details magnetic" data-index="${index}">${t("viewDetails")}</button>
            <button type="button" class="button button-yellow get-quote magnetic" data-machine="${machine.name}">${t("getQuote")}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  qsa(".product-card", grid).forEach((card) => {
    const index = Number(card.dataset.index);
    const showDetails = (event) => {
      if (event.target.closest("button,a,input,select,textarea")) {
        return;
      }
      selectMachine(index);
      openDetailDrawer(index);
    };

    card.addEventListener("click", showDetails);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMachine(index);
        openDetailDrawer(index);
      }
    });
  });

  qsa(".view-details", grid).forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      selectMachine(index);
      openDetailDrawer(index);
    });
  });

  qsa(".get-quote", grid).forEach((button) => {
    button.addEventListener("click", () => openEnquiry(button.dataset.machine));
  });

  bindTiltCards();
  bindMagneticButtons();

  if (showAllButton) {
    showAllButton.hidden = filtered.length <= 6;
    showAllButton.textContent = showingAll ? t("showFocused") : t("showAll");
  }
}

function setText(selector, value) {
  const element = qs(selector);
  if (element) {
    element.textContent = value;
  }
}

function selectMachine(index, scrollToShowcase = false) {
  const machine = machines[index] || machines[0];
  const copy = machineCopy(machine);
  activeMachineIndex = machines.indexOf(machine);
  const stages = qsa(".machine-stage");

  stages.forEach((stage) => stage.classList.add("is-switching"));

  window.setTimeout(() => {
    const showcaseImage = qs("#showcase-image");
    const heroImage = qs("#hero-machine-image");

    if (showcaseImage) {
      showcaseImage.src = machine.image;
      showcaseImage.alt = machine.name;
    }

    if (heroImage) {
      heroImage.src = machine.image;
      heroImage.alt = machine.name;
    }

    setText("#hero-machine-name", machine.name);
    setText("#showcase-title", machine.name);
    setText("#showcase-description", copy.description);
    setText("#showcase-category", categoryLabel(machine));
    setText("#showcase-spec", localized(machine.spec));

    const featureList = qs("#feature-list");
    if (featureList) {
      featureList.innerHTML = copy.features.slice(0, 4).map((feature) => `<li>${feature}</li>`).join("");
    }

    qsa(".selector-button").forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.index) === activeMachineIndex);
    });

    renderDetailDrawer(machine);
    stages.forEach((stage) => stage.classList.remove("is-switching"));
  }, prefersReducedMotion ? 0 : 180);

  if (scrollToShowcase) {
    qs("#machines")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  }
}

function renderDetailDrawer(machine = machines[activeMachineIndex]) {
  const drawer = qs("#machine-detail-drawer");
  if (!drawer || !machine) {
    return;
  }

  const copy = machineCopy(machine);
  const image = qs("#drawer-image");
  const official = qs("#drawer-official");

  if (image) {
    image.src = machine.image;
    image.alt = machine.name;
  }

  setText("#drawer-title", machine.name);
  setText("#drawer-description", copy.description);
  setText("#drawer-bestfor", copy.bestFor);

  const specs = [
    { label: t("category"), value: categoryLabel(machine) },
    { label: t("keySpec"), value: localized(machine.spec) },
    ...machine.specs.map((spec) => ({ label: localized(spec.label), value: spec.value }))
  ];

  const specBox = qs("#drawer-specs");
  if (specBox) {
    specBox.innerHTML = specs.map((spec) => `
      <div class="drawer-spec">
        <span>${spec.label}</span>
        <strong>${spec.value}</strong>
      </div>
    `).join("");
  }

  const featureList = qs("#drawer-features");
  if (featureList) {
    featureList.innerHTML = copy.features.map((feature) => `<li>${feature}</li>`).join("");
  }

  if (official) {
    official.href = machine.source;
  }
}

function openDetailDrawer(index = activeMachineIndex) {
  const machine = machines[index] || machines[0];
  activeMachineIndex = machines.indexOf(machine);
  renderDetailDrawer(machine);
  const drawer = qs("#machine-detail-drawer");
  drawer?.classList.add("is-open");
  drawer?.setAttribute("aria-hidden", "false");
  qs(".drawer-close")?.focus({ preventScroll: true });
}

function closeDetailDrawer() {
  const drawer = qs("#machine-detail-drawer");
  drawer?.classList.remove("is-open");
  drawer?.setAttribute("aria-hidden", "true");
}

function setupDetailDrawer() {
  qsa(".drawer-close,.drawer-backdrop").forEach((button) => {
    button.addEventListener("click", closeDetailDrawer);
  });

  qs("#drawer-quote")?.addEventListener("click", () => {
    closeDetailDrawer();
    openEnquiry(machines[activeMachineIndex]?.name || "", "Quote");
  });

  qs("#showcase-details-button")?.addEventListener("click", () => {
    openDetailDrawer(activeMachineIndex);
  });

  qs(".showcase-visual")?.addEventListener("click", (event) => {
    if (event.target.closest(".showcase-controls,button,input,label")) {
      return;
    }
    openDetailDrawer(activeMachineIndex);
  });

  qs(".hero-machine")?.addEventListener("click", () => {
    openDetailDrawer(activeMachineIndex);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetailDrawer();
    }
  });
}

function setupFilters() {
  qsa(".category").forEach((button) => {
    button.addEventListener("click", () => {
      qsa(".category").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      showingAll = false;
      renderProducts();
    });
  });

  qs("#show-all")?.addEventListener("click", () => {
    showingAll = !showingAll;
    renderProducts();
  });
}

function applyStageRotation() {
  qsa(".machine-stage").forEach((stage) => {
    stage.style.setProperty("--stage-rotate", `${manualRotation}deg`);
  });
}

function setupShowcaseControls() {
  qsa("[data-rotate]").forEach((button) => {
    button.addEventListener("click", () => {
      manualRotation += Number(button.dataset.rotate || 0);
      applyStageRotation();
    });
  });

  qs("#zoom-control")?.addEventListener("input", (event) => {
    const scale = Number(event.currentTarget.value) / 100;
    qs("#showcase-stage")?.style.setProperty("--stage-scale", scale.toFixed(2));
  });
}

function bindStageTilt() {
  qsa("[data-tilt-zone]").forEach((zone) => {
    const stage = qs(".machine-stage", zone);

    zone.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion) {
        return;
      }
      const rect = zone.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const target = stage || zone;

      if (stage) {
        stage.style.setProperty("--stage-rotate", `${manualRotation + x * 18}deg`);
        stage.style.setProperty("--stage-tilt", `${-y * 9}deg`);
      } else {
        zone.style.transform = `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 7}deg)`;
      }

      target.style.willChange = "transform";
    });

    zone.addEventListener("pointerleave", () => {
      if (stage) {
        stage.style.setProperty("--stage-rotate", `${manualRotation}deg`);
        stage.style.setProperty("--stage-tilt", "0deg");
      } else {
        zone.style.transform = "";
      }
    });
  });
}

function bindTiltCards() {
  qsa("[data-tilt-card]").forEach((card) => {
    if (card.dataset.tiltBound) {
      return;
    }
    card.dataset.tiltBound = "true";

    card.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion) {
        return;
      }
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${-y * 7}deg) rotateY(${x * 8}deg) translateY(-5px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function bindMagneticButtons() {
  qsa(".magnetic").forEach((button) => {
    if (button.dataset.magneticBound) {
      return;
    }
    button.dataset.magneticBound = "true";

    button.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion) {
        return;
      }
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

function setupCursorLight() {
  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
  }, { passive: true });
}

function setupScrollMotion() {
  const progress = qs(".scroll-progress");
  const heroMachine = qs(".hero-machine");

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const amount = max > 0 ? window.scrollY / max : 0;

    if (progress) {
      progress.style.transform = `scaleX(${amount})`;
    }

    document.body.classList.toggle("scrolled", window.scrollY > 40);

    if (heroMachine && !prefersReducedMotion) {
      heroMachine.style.transform = `translateY(${Math.min(90, window.scrollY * 0.08)}px)`;
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupRevealAnimations() {
  const revealItems = qsa(".reveal");
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupCounters() {
  const counters = qsa(".counter");

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const started = performance.now();
    const duration = prefersReducedMotion ? 1 : 1100;

    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      counter.textContent = String(Math.round(target * progress)).padStart(target < 10 ? 2 : 0, "0");
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
}

function setupParticles() {
  const canvas = qs(".particle-field");
  if (!canvas || prefersReducedMotion) {
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = window.innerWidth < 700 ? 28 : 62;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.18,
      vy: Math.random() * 0.28 + 0.08,
      alpha: Math.random() * 0.32 + 0.08
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.y > height + 8) {
        particle.y = -8;
        particle.x = Math.random() * width;
      }
      if (particle.x < -8) {
        particle.x = width + 8;
      }
      if (particle.x > width + 8) {
        particle.x = -8;
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(247, 198, 0, ${particle.alpha})`;
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
}

function setupForms() {
  const dialog = qs("#enquiry-dialog");
  const formContent = qs("#form-content");
  const successContent = qs("#success-content");
  const machineSelect = qs("#machine");

  function setChoice(type) {
    const match = qsa(".choice").find((button) => button.dataset.type === type) || qs(".choice");
    qsa(".choice").forEach((button) => button.classList.toggle("selected", button === match));
  }

  window.openEnquiry = (machineName = "", type = "Quote") => {
    if (!dialog) {
      return;
    }
    if (formContent) {
      formContent.hidden = false;
    }
    if (successContent) {
      successContent.hidden = true;
    }
    if (machineSelect) {
      machineSelect.value = machineName || machines[activeMachineIndex]?.name || "";
    }
    setChoice(type);
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  };

  qsa(".quote-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.textContent || "";
      const type = text.toLowerCase().includes("support") ? "Service" : "Quote";
      openEnquiry(machines[activeMachineIndex]?.name, type);
    });
  });

  qsa(".choice").forEach((button) => {
    button.addEventListener("click", () => setChoice(button.dataset.type));
  });

  qsa(".dialog-close,.dialog-done").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog")?.close());
  });

  qs("#enquiry-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = `PPL-ENQ-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
    const entries = JSON.parse(localStorage.getItem("ppl-enquiries") || "[]");
    entries.push({
      id,
      type: qs(".choice.selected")?.dataset.type || "Quote",
      machine: machineSelect?.value || "",
      name: qs("#name")?.value || "",
      phone: qs("#phone")?.value || "",
      city: qs("#city")?.value || "",
      message: qs("#message")?.value || "",
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("ppl-enquiries", JSON.stringify(entries));
    setText("#enquiry-id", id);
    if (formContent) {
      formContent.hidden = true;
    }
    if (successContent) {
      successContent.hidden = false;
    }
  });

  qs("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = `PPL-WEB-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
    const entries = JSON.parse(localStorage.getItem("ppl-contact-enquiries") || "[]");
    entries.push({
      id,
      machine: qs("#contact-machine")?.value || "",
      name: qs("#contact-name")?.value || "",
      phone: qs("#contact-phone")?.value || "",
      message: qs("#contact-message")?.value || "",
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("ppl-contact-enquiries", JSON.stringify(entries));
    setText("#contact-status", `${t("enquiryReceived")} ${t("reference")} ${id}.`);
    event.currentTarget.reset();
  });
}

function setupCalculator() {
  const calculator = qs("#calculator");
  if (!calculator) {
    return;
  }

  const calc = () => {
    const price = Number(qs("#price")?.value || 0);
    const down = Number(qs("#down")?.value || 0);
    const rate = Number(qs("#rate")?.value || 0) / 1200;
    const tenure = Number(qs("#tenure")?.value || 0);
    const loan = Math.max(0, price - down);
    const emi = rate && tenure ? loan * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1) : loan / Math.max(tenure, 1);
    setText("#emi", `Rs ${Math.round(emi).toLocaleString("en-IN")}`);
  };

  qsa("input,select", calculator).forEach((element) => element.addEventListener("input", calc));
  calc();
}

function setupNavigation() {
  const nav = qs(".nav");
  const toggle = qs(".menu-toggle");

  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(Boolean(open)));
  });

  qsa(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  applyStaticLanguage();
  setupLanguageSwitch();
  setupBusinessLinks();
  setupMachineSelects();
  updateCategoryCounts();
  renderSelector();
  renderProducts();
  selectMachine(activeMachineIndex);
  setupFilters();
  setupShowcaseControls();
  setupDetailDrawer();
  bindStageTilt();
  bindTiltCards();
  bindMagneticButtons();
  setupCursorLight();
  setupScrollMotion();
  setupRevealAnimations();
  setupCounters();
  setupParticles();
  setupForms();
  setupCalculator();
  setupNavigation();
  setText("#year", new Date().getFullYear());

  window.addEventListener("load", () => {
    requestAnimationFrame(() => document.body.classList.add("loaded"));
  });
  window.setTimeout(() => document.body.classList.add("loaded"), 1400);
}

init();
