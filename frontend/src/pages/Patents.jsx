// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LegalFooter from "../components/LegalFooter";
import LegalHeader from "../components/LegalHeader";

const Patents = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const patents = [
    {
      id: 1,
      title: "A system and a process for evaluating dielectric relaxation in dipolar liquid",
      inventors: "Dr. Swagatadeb Sahoo",
      filingNumber: "2020104029",
      abstract: "This innovation is significant for understanding the molecular dynamics of polar liquids, which has applications in materials science, electronics, and chemical engineering. The patent focuses on measuring dielectric relaxation—a process that describes how a dielectric medium responds to an external electric field—by analyzing relaxation times and dipole moments in various polar mixtures.​",
      filedDate: "13-11-2019",
      status: "Granted",
      email: "swagatadeb.ece@nitjsr.ac.in",
      phone: "9434369728",
      documentationLink: "https://link.springer.com/article/10.1007/s12648-019-01437-3",
      detailedOverviewLink: "https://patents.google.com/",
      image: "inventor1.png",
      links: [
        { label: "Full Patent PDF", url: "./s12034-021-02597-x.pdf" },
        // { label: "Research Paper", url: "/papers/dielectric-relaxation.pdf" }
      ],
      // additionalInfo: "This patent represents a breakthrough in dielectric measurement techniques with applications in material science and electronics."
    },
    {
      id: 2,
      title: "Artificial Intelligence Based Technique to Monitor the Cold Storage Unit Which is Powered by Solar Energy",
      inventors: "Prof. Prabha Chand",
      filingNumber: "2.02231E+11", // Placeholder since original number is in scientific notation
      abstract: "An AI-driven monitoring system for solar-powered cold storage units aimed at enhancing efficiency, reliability, and sustainability in energy usage and storage management.",
      filedDate: "2022-09-16",
      status: "Published",
      email: "pchand.me@nitjsr.ac.in",
      phone: "7903825868",
      documentationLink: "https://klatunetworks.com/news/KLATU-Receives-Cold-Storage-U.S.-Patent-Predicting-Failures-of-LN2-Storage-Tanks", // Replace with actual link if available
      detailedOverviewLink: "https://link.springer.com/article/10.1007/s00500-022-06938-0",  // Replace with actual link if available
      image: "inventor2.png",
      links: [
        { label: "Full Patent PDF", url: "https://openknowledge.fao.org/server/api/core/bitstreams/fc30f1af-1cb8-4af5-8d8d-18914f7b5591/content" },
        // { label: "White Paper", url: "/whitepapers/ai-cold-storage.pdf" }
      ],
    }
    ,
    {
      "id": 3,
      "title": "Zeroth Order Resonator (ZOR) Antenna using Slotted Metamaterial Structure",
      "inventors": "Rashmi Sinha",
      "filingNumber": "EMP/E-1/29503/2020-KOL. 2020",
      "abstract": "A novel antenna design based on zeroth-order resonance achieved using slotted metamaterial structures. This design enables compact and efficient antennas suitable for modern communication systems.",
      "filedDate": "2021-12-31",
      "status": "Granted",
      "email": "rsinha.ece@nitjsr.ac.in",
      "phone": "9431301154",
      "documentationLink": "https://link.springer.com/article/10.1007/s10470-022-02044-9",
      "detailedOverviewLink": "https://patents.google.com/",
      "image": "inventor3.png",
      "links": [
        { "label": "Full Patent PDF", "url": "./s10470-022-02044-9.pdf" },
        // { "label": "Technical Overview", "url": "/docs/zor-antenna-overview.pdf" }
      ]
    }
    ,
    {
      id: 4,
      title: "Photoelectrochemical (PEC) Cell System for Hydrogen Production",
      inventors: "Ajay Yadav, Arshad Ali Khan, Ajay Kumar, Amit Prakash, Hira Lal Yadav, Uday Kumar, Ajay Kumar Singh, Ayush Kumar Agarwal",
      filingNumber: "202331043849 A",
      abstract: "A system utilizing photoelectrochemical (PEC) cells for the efficient and clean production of hydrogen, combining renewable solar energy with advanced material science for sustainable energy generation.",
      filedDate: "2023-08-18",
      status: "Published",
      email: "ajay.ece@nitjsr.ac.in",
      phone: "7979855119",
      documentationLink: "https://www.sciencedirect.com/science/article/pii/S2452223623000743", // Replace with actual document link
      detailedOverviewLink: "https://www.sciencedirect.com/topics/engineering/photoelectrochemical-hydrogen-production", // Replace with actual detailed page
      image: "inventor4.png",
      links: [
        { "label": "Full Patent PDF", "url": "https://pubs.aip.org/aip/apm/article/7/8/080901/123144/Photoelectrochemical-cells-for-solar-hydrogen" },
        // { label: "White Paper", url: "/whitepapers/pec-hydrogen-production.pdf" }
      ],
    }
    ,
    {
      id: 5,
      title: "A System for Patient Authentication in Emergency Healthcare Scenarios Using a Master Iris Template",
      inventors: "Saptarshi Roychowdhury, Anwesa Das, Vinay Kumar, Binod Kumar Singh",
      filingNumber: "2.02331E+11", // Adjusted for formatting; replace with actual full number if known
      abstract: "A biometric system designed to authenticate patients during emergency healthcare situations using a pre-registered master iris template, ensuring rapid and accurate identification without the need for physical documents.",
      filedDate: "2024-03-14",
      status: "First report submitted",
      email: "bksingh.cse@nitjsr.ac.in",
      phone: "8210729128",
      documentationLink: "https://www.medicaps.ac.in/faculty/faculty-of-science/department-of-forensic-science/patent", // Replace with actual link if available
      detailedOverviewLink: "https://fraser.stlouisfed.org/title/survey-current-business-46/august-1924-10273/fulltext", // Replace with actual link
      image: "inventor5.png",
      links: [
        { "label": "Full Patent PDF", "url": "https://apps.bea.gov/scb/issues/1924/scb-1924-august.pdf" },
         
      ]
    }
    ,
    {
      id: 6,
      title: "Framework for Defining the Critical Zone in Foundation-Cavity Interaction and the Method Thereof",
      inventors: "Kumar Shubham, Dr. Subhadeep Metya",
      filingNumber: "2.02431E+11", // Approximate from 2.02431E+11; replace with actual number if available
      abstract: "A novel framework for identifying and analyzing the critical zone in soil-structure interactions where foundations are affected by sub-surface cavities, enabling improved structural stability assessment and design.",
      filedDate: "2024-04-19",
      status: "Published",
      email: "smetya.ce@nitjsr.ac.in",
      phone: "8910690990",
      documentationLink: "https://patents.google.com/patent/US7139999B2/en", // Replace with actual if available
      detailedOverviewLink: "https://patents.google.com/patent/US7139999B2/en", // Replace with actual if available
      image: "inventor6.png",
      links: [
        { "label": "Full Patent PDF", "url": "https://jssaherstoragenew.blob.core.windows.net/jss/Publication/Patent/Patent_Publish_49439.pdf" },
        
      ]
    },
    {
      id: 7,
      title: "Optical 7 Segment Decoder using Electro-optic Effect based Directional Couplers",
      inventors: "Ajay Yadav, Ajay Kumar, Amit Prakash, Mayank Srivastava, Basudeba Behera, Nagendra Kumar",
      filingNumber: "202331056079",
      abstract: "An optical seven-segment decoder utilizing electro-optic effect based directional couplers for segment control. This innovative approach allows for high-speed, low-power optical signal decoding, enabling applications in integrated photonics and optical computing systems.",
      filedDate: "2023-10-06",
      status: "Published",
      email: "ajay.ece@nitjsr.ac.in",
      phone: "7979855119",
      documentationLink: "https://www.researchgate.net/figure/Layout-digram-of-the-optical-directional-coupler_fig1_378136974", // Replace with actual link if available
      detailedOverviewLink: "https://sites.google.com/view/basudebbehera/publications?utm_source=chatgpt.com", // Replace with actual link if available
      image: "inventor4.png",
      links: [
        {
          label: "Full Patent PDF",
          url: "https://jssaherstoragenew.blob.core.windows.net/jss/Publication/Patent/Patent_Publish_49439.pdf?utm_source=chatgpt.com"
        }
      ]
    },
    {
      id: 8,
      title: "ULTRA-COMPACT PENTABAND POLARIZATION INSENSITIVE AND ANGULARLY STEADY METASURFACE",
      inventors: "Dr. Surajit Kundu",
      filingNumber: "202331000000",
      abstract: "The invention relates to a compact metasurface design that achieves polarization insensitivity and angular stability across five distinct frequency bands (pentaband). ", // Add abstract if available
      filedDate: "2023-10-13",
      status: "Published",
      email: "surajitkundu.ece@nitjsr.ac.in",
      phone: "9832271039",
      documentationLink: "https://www.researchgate.net/publication/316558869_A_polarization_insensitive_compact_ultrathin_wide-angle_penta-band_metamaterial_absorber", // Replace with actual link if available
      detailedOverviewLink: "https://nitjsr.ac.in/faculty/surajit-kundu", // Replace or update as needed
      image: "inventor8.png",
      links: [
        {
          label: "Full Patent PDF",
          url: "./s13369-025-10140-x.pdf" // Add actual PDF link if available
        }
      ]
    },
    {
      id: 9,
      title: "A SYSTEM AND METHOD FOR FLUSHING A URINAL",
      inventors: "Dr. Ashok K. Mandal, Mr. Kamal Kant, and Dr. Omhari Gupta",
      filingNumber: "202202231000", // Approximated from scientific notation 2.02231E+11
      abstract: "A system and method aimed at improving the efficiency and automation of urinal flushing mechanisms. The design includes sensors and control logic for optimized water usage and hygiene.", // Add or revise abstract if you have the official one
      filedDate: "2023-11-15",
      status: "Granted",
      email: "omhari.ee@nitjsr.ac.in",
      phone: "9455414453",
      documentationLink: "https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2023167653", // Add if available
      detailedOverviewLink: "https://patentscope.wipo.int/search/docs2/pct/WO2023167653/pdf/VtYIYfJEziawvVIsfuFjvHeIpr2CkNpn9BeJyuA_99k", // Update link if needed
      image: "inventor9.png",
      links: [
        {
          label: "Full Patent PDF",
          url: "https://patentscope.wipo.int/search/docs2/iasr/WO2023167653/pdf/VxDgCFw67e6ivI860iwtdv45nU7rp2oq5_UauRgabcc" // Replace with actual PDF link if available
        }
      ]
    }
    
    
    
    
    
    ,
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Granted":
        return "bg-green-800 text-white";
      case "Published":
        return "bg-yellow-600 text-white";
      case "Filed":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const toggleCardExpansion = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <LegalHeader/>
      {/* Background watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
        <i className="fas fa-om text-[800px] text-[#1A513B]"></i>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#1A513B] to-[#D4A017] my-auto mr-4"></div>
            <i className="fas fa-scroll text-[#D4A017] text-3xl"></i>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#D4A017] to-[#1A513B] my-auto ml-4"></div>
          </div>
          <h1 className="text-4xl font-bold font-mono text-[#1A513B] mb-4">
            INSTITUTE PATENTS
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Showcasing our commitment to innovation and research excellence
            through intellectual property contributions in legal technology and
            beyond.
          </p>
        </div>
        {/* Patent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patents.map((patent) => (
            <div
              key={patent.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 ${
                expandedCard === patent.id ? "lg:col-span-3 md:col-span-2" : ""
              }`}
              onClick={() => toggleCardExpansion(patent.id)}
            >
              <div className="h-3 bg-gradient-to-r from-[#1A513B] to-[#D4A017]"></div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                <img
                 src={`./${patent.image}`}
                 alt={`Inventor ${patent.id}`}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#1A513B]"
/>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-mono text-[#1A513B] leading-tight mb-2">
                      {patent.title}
                    </h3>
                    <div className="flex items-center">
                      <i className="fas fa-certificate text-[#D4A017] mr-2"></i>
                      <span className="text-sm text-gray-600">
                        Patent Excellence Award
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Inventors:</span>{" "}
                    {patent.inventors}
                  </p>
                  <p className="text-sm font-mono text-gray-700 mb-1">
                    <span className="font-semibold">Filing No:</span>{" "}
                    {patent.filingNumber}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Contact:</span>{" email: "}
                    <a href={`mailto:${patent.email}`} className="text-[#1A513B] hover:underline">{patent.email}</a>, {patent.phone}
                  </p>
                </div>
                <div className="mb-4">
                  <p
                    className={`text-sm text-gray-700 ${
                      expandedCard === patent.id ? "" : "line-clamp-3"
                    }`}
                  >
                    <span className="font-semibold">Abstract:</span>{" "}
                    {patent.abstract}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-600">
                    <i className="far fa-calendar-alt mr-1"></i> Filed:{" "}
                    {patent.filedDate}
                  </div>
                  <div
                    className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                      patent.status
                    )} whitespace-nowrap`}
                  >
                    {patent.status}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 justify-center">
                  {patent.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1A513B] hover:text-[#D4A017] transition-colors inline-flex items-center gap-2"
                    >
                      {link.label}
                      <i className="fas fa-external-link-alt text-xs"></i>
                    </a>
                  ))}
                </div>
                {expandedCard === patent.id && (
  <div className="mt-6 pt-4 border-t border-gray-100">
    <h4 className="text-lg font-mono font-bold text-[#1A513B] mb-2">
      Additional Details
    </h4>
    <p className="text-sm text-gray-700 mb-3">
      {patent.additionalInfo}
    </p>
    <div className="flex flex-col gap-2">
      <a
        href={patent.documentationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1A513B] text-white font-mono px-4 py-2 rounded-md hover:bg-[#164432] transition-colors cursor-pointer whitespace-nowrap text-center"
      >
        Download Complete Documentation
      </a>
      <a
        href={patent.detailedOverviewLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1A513B] hover:text-[#D4A017] text-sm font-mono underline transition-colors flex items-center justify-center gap-2"
      >
        <i className="fas fa-external-link-alt"></i>
        Detailed Patent Overview
      </a>
    </div>
  </div>
)}
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#1A513B] text-white font-mono px-6 py-3 rounded-md hover:bg-[#164432] transition-colors cursor-pointer whitespace-nowrap">
            EXPLORE MORE PATENTS
          </button>
        </div>
      </div>
      <LegalFooter />
    </div>
  );
};

export default Patents;