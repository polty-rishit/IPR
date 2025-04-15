import React, { useState } from 'react';
import LegalFooter from '../components/LegalFooter'

const Home = () => {
  const [activeTab, setActiveTab] = useState('legal-briefs');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <img 
              src="https://readdy.ai/api/search-image?query=A%2520minimalist%2520logo%2520for%2520NyayaBriefly%2520featuring%2520a%2520stylized%2520scale%2520of%2520justice%2520in%2520dark%2520green%2520with%2520gold%2520accents%252C%2520professional%2520and%2520clean%2520design%2520suitable%2520for%2520a%2520legal%2520tech%2520company%252C%2520simple%2520elegant%2520icon&width=40&height=40&seq=1&orientation=squarish" 
              alt="NyayaBriefly Logo" 
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold text-green-800">Nyaya</span>
          </div>
          <div className="ml-2 text-xs text-gray-600 flex flex-col">
            {/* <span className="font-semibold">BACKED BY</span>
            <span>GOOGLE FOR STARTUPS</span> */}
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {/* <a href="#pricing" className="text-gray-700 hover:text-green-800">Pricing</a> */}
          <a href="https://iprsearch.ipindia.gov.in/publicsearch" className="text-gray-700 hover:text-green-800">Resource Library</a>
          <a href="https://rishitraj.tech" className="text-gray-700 hover:text-green-800">Contact</a>
        </nav>
        
         
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="inline-flex items-center bg-yellow-100 text-green-800 px-4 py-1 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-800 rounded-full mr-2"></div>
            <span className="text-sm">8 out of 10 clients and freelancers use NyayaBriefly.</span>
          </div> */}
          
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Never miss an important<br />point in your Patent.
          </h1>
          
          <p className="text-xl text-gray-700 mb-10">
            We help you collaborate & write effective highlights,<br />
            summaries or briefs, to make your patent work easy.
          </p>
          
          <button className="px-6 py-3 bg-green-800 text-white text-lg rounded-md hover:bg-green-900 whitespace-nowrap cursor-pointer">
           <a href='/Search'>SEARCH FOR PATENTS</a>
          </button>
          <button className="px-6 py-3 mx-4 my-4 bg-green-800 text-white text-lg rounded-md hover:bg-green-900 whitespace-nowrap cursor-pointer">
           <a href='/Patents'>NIT JAMSHEDPUR PATENTS</a>
          </button>

          {/* { <div className="mt-12 flex items-center justify-center space-x-8">
            <span className="text-sm text-gray-500">Backed by:</span>
            <img src="https://readdy.ai/api/search-image?query=A%2520minimal%2520logo%2520for%2520LAUNCH%252C%2520tech%2520accelerator%2520company%2520logo%252C%2520professional%2520design%252C%2520dark%2520text%2520on%2520light%2520background%252C%2520simple%2520elegant%2520corporate%2520logo&width=80&height=30&seq=2&orientation=landscape" alt="Launch" className="h-6" />
            <img src="https://readdy.ai/api/search-image?query=A%2520minimal%2520logo%2520for%2520Y%2520Combinator%252C%2520tech%2520accelerator%2520company%2520logo%252C%2520professional%2520design%252C%2520dark%2520text%2520on%2520light%2520background%252C%2520simple%2520elegant%2520corporate%2520logo&width=80&height=30&seq=3&orientation=landscape" alt="Y Combinator" className="h-6" />
            <img src="https://readdy.ai/api/search-image?query=A%2520minimal%2520logo%2520for%2520Google%2520for%2520Startups%252C%2520tech%2520accelerator%2520company%2520logo%252C%2520professional%2520design%252C%2520dark%2520text%2520on%2520light%2520background%252C%2520simple%2520elegant%2520corporate%2520logo&width=100&height=30&seq=4&orientation=landscape" alt="Google for Startups" className="h-6" />
          </div> } */}
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative my-4">
          { <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg my-4">
            <div className="text-sm text-gray-800">
              <p className="font-bold mb-2">Brief: Supreme Court Judgment Analysis</p>
              <p className="mb-2"><span className="font-medium">Objective:</span> Analyze key legal principles from the recent Supreme Court judgment on privacy rightsand patents.</p>
              <p className="mb-2"><span className="font-medium">Target Audience:</span> Legal professionals, particularly advocates practicing in constitutional law, law students, and researchers focusing on privacy legislation in India.</p>
              <p className="mb-4 "><span className="font-medium">Key Points:</span> The judgment establishes privacy as a fundamental right under Article 21, sets limitations on government surveillance.</p>
              <p><span className="font-medium">Recommendations:</span> </p>
            </div>
          </div> }

          <div className="absolute z-10 right-0 bottom-0 translate-x-1/4 translate-y-1/4 sm:translate-x-0 sm:translate-y-0 sm:bottom-0 sm:right-0 md:-bottom-10 md:-right-10 lg:-bottom-20 lg:-right-20">
            {/* <img 
              src="https://readdy.ai/api/search-image?query=A%2520professional%2520Indian%2520woman%2520with%2520long%2520dark%2520hair%2520wearing%2520formal%2520business%2520attire%2520in%2520green%2520tones%252C%2520sitting%2520at%2520a%2520desk%2520with%2520legal%2520documents%252C%2520looking%2520thoughtful%252C%2520warm%2520lighting%252C%2520clean%2520minimal%2520background%252C%2520high%2520quality%2520professional%2520portrait&width=300&height=300&seq=5&orientation=squarish" 
              alt="Legal Professional" 
              className="w-64 h-64 object-cover"
            /> */}
          </div>

          <div className="absolute -bottom-30 sm:-bottom-20 md:-bottom-16 lg:-bottom-20 z-20 my-1">
            <img 
              src="https://readdy.ai/api/search-image?query=Simple%2520line%2520art%2520illustration%2520of%2520diverse%2520Indian%2520professionals%2520in%2520legal%2520and%2520business%2520settings%252C%2520minimalist%2520style%252C%2520green%2520and%2520yellow%2520color%2520scheme%252C%2520clean%2520professional%2520look%252C%2520showing%2520collaboration%2520and%2520teamwork&width=500&height=200&seq=6&orientation=landscape" 
              alt="Team Illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-10 px-6 py-12 bg-green-800 text-white ">
        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 -top-40">
            {/* Feature 1 */}
            <div 
              className={`p-4 cursor-pointer ${activeTab === 'legal-briefs' ? 'bg-green-700 rounded-t-lg' : ''}`}
              onClick={() => setActiveTab('legal-briefs')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl mb-2">📄</div>
                <h3 className="font-semibold mb-1">Legal Briefs</h3>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div 
              className={`p-4 cursor-pointer ${activeTab === 'highlights' ? 'bg-green-700 rounded-t-lg' : ''}`}
              onClick={() => setActiveTab('highlights')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl mb-2">🖍️</div>
                <h3 className="font-semibold mb-1">Highlights & Summaries</h3>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div 
              className={`p-4 cursor-pointer ${activeTab === 'audio-video' ? 'bg-green-700 rounded-t-lg' : ''}`}
              onClick={() => setActiveTab('audio-video')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl mb-2">🎥</div>
                <h3 className="font-semibold mb-1">Audio & Video Meetings</h3>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div 
              className={`p-4 cursor-pointer ${activeTab === 'project-spaces' ? 'bg-green-700 rounded-t-lg' : ''}`}
              onClick={() => setActiveTab('project-spaces')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl mb-2">📁</div>
                <h3 className="font-semibold mb-1">Project Spaces</h3>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div 
              className={`p-4 cursor-pointer ${activeTab === 'smart-scheduling' ? 'bg-green-700 rounded-t-lg' : ''}`}
              onClick={() => setActiveTab('smart-scheduling')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-semibold mb-1">Smart Scheduling</h3>
              </div>
            </div>
          </div>
          
          {/* Feature Content */}
          <div className="bg-green-700 p-6 rounded-b-lg rounded-tr-lg">
            {activeTab === 'legal-briefs' && (
              <div className="flex items-center">
                <div className="w-1/2 pr-6">
                  <h4 className="text-xl font-semibold mb-3">Legal Briefs</h4>
                  <p className="mb-4">
                    Convert your complex judgments and petitions into concise briefs to ensure you capture all key legal points and arguments. Our AI analyzes Indian legal precedents and formats.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Automatic citation extraction</li>
                    <li>Precedent identification</li>
                    <li>Ratio decidendi highlighting</li>
                    <li>Export in standard legal formats</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%2520professional%2520scene%2520showing%2520Indian%2520legal%2520documents%2520being%2520organized%2520and%2520summarized%252C%2520with%2520clean%2520visualization%2520of%2520text%2520extraction%252C%2520highlighting%2520key%2520points%2520in%2520legal%2520judgments%252C%2520modern%2520minimal%2520office%2520setting%2520with%2520Indian%2520legal%2520books%2520and%2520documents&width=400&height=300&seq=7&orientation=landscape" 
                    alt="Legal Briefs Feature" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'highlights' && (
              <div className="flex items-center">
                <div className="w-1/2 pr-6">
                  <h4 className="text-xl font-semibold mb-3">Highlights & Summaries</h4>
                  <p className="mb-4">
                    Identify key points and create concise summaries from lengthy legal documents. Our AI is trained on Indian case law and legal terminology.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Smart extraction of legal principles</li>
                    <li>Automatic detection of binding vs. persuasive precedents</li>
                    <li>Customizable highlight categories</li>
                    <li>Integration with Indian legal databases</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%2520professional%2520scene%2520showing%2520document%2520highlighting%2520process%2520with%2520Indian%2520legal%2520professionals%2520reviewing%2520digital%2520documents%252C%2520AI%2520highlighting%2520key%2520sections%2520of%2520text%252C%2520clean%2520modern%2520interface%2520with%2520Indian%2520legal%2520context%252C%2520professional%2520office%2520setting&width=400&height=300&seq=8&orientation=landscape" 
                    alt="Highlights Feature" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'audio-video' && (
              <div className="flex items-center">
                <div className="w-1/2 pr-6">
                  <h4 className="text-xl font-semibold mb-3">Meet The best People</h4>
                  <p className="mb-4">
                    Record your client meetings, court proceedings, and team discussions with real-time transcription and automatic summarization.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Support for multiple Indian languages</li>
                    <li>Legal terminology recognition</li>
                    <li>Court proceeding templates</li>
                    <li>Secure, encrypted storage</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%2520professional%2520scene%2520showing%2520Indian%2520legal%2520professionals%2520in%2520a%2520video%2520conference%2520meeting%2520with%2520transcription%2520happening%2520in%2520real-time%252C%2520modern%2520interface%2520showing%2520meeting%2520notes%2520being%2520automatically%2520generated%252C%2520clean%2520professional%2520setting%2520with%2520Indian%2520context&width=400&height=300&seq=9&orientation=landscape" 
                    alt="Audio & Video Feature" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'project-spaces' && (
              <div className="flex items-center">
                <div className="w-1/2 pr-6">
                  <h4 className="text-xl font-semibold mb-3">Project Spaces</h4>
                  <p className="mb-4">
                    Organize all your cases, clients, and research in dedicated workspaces. Collaborate with your team and share documents securely.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Case management templates</li>
                    <li>Client portal with secure access</li>
                    <li>Document version control</li>
                    <li>Integration with Indian e-courts</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%2520professional%2520interface%2520showing%2520project%2520management%2520system%2520for%2520legal%2520cases%2520with%2520Indian%2520context%252C%2520organized%2520folders%2520and%2520documents%252C%2520collaboration%2520features%252C%2520clean%2520modern%2520UI%2520design%2520with%2520Indian%2520legal%2520professionals%2520using%2520the%2520system&width=400&height=300&seq=10&orientation=landscape" 
                    alt="Project Spaces Feature" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'smart-scheduling' && (
              <div className="flex items-center">
                <div className="w-1/2 pr-6">
                  <h4 className="text-xl font-semibold mb-3">Smart Scheduling</h4>
                  <p className="mb-4">
                    Sync with Indian court calendars and manage your case hearings, client meetings, and deadlines in one place.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Integration with Indian court cause lists</li>
                    <li>Automated reminders for filing deadlines</li>
                    <li>Conflict detection with existing hearings</li>
                    <li>Mobile notifications and calendar sync</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%2520professional%2520calendar%2520interface%2520showing%2520court%2520scheduling%2520system%2520with%2520Indian%2520context%252C%2520organized%2520timeline%2520of%2520legal%2520appointments%2520and%2520hearings%252C%2520clean%2520modern%2520UI%2520design%2520with%2520Indian%2520legal%2520dates%2520and%2520terminology&width=400&height=300&seq=11&orientation=landscape" 
                    alt="Smart Scheduling Feature" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Why Legal Professionals Choose Nyaya</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is specifically designed for the Indian legal ecosystem, with features tailored to the unique needs of advocates, law firms, and legal departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-green-800 text-xl">⚖️</div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Indian Legal Context</h3>
              <p className="text-gray-600">
                Our AI is trained on Indian case law, statutes, and legal terminology, ensuring accurate analysis and relevant insights for your practice.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-green-800 text-xl">🔒</div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Data Security & Privacy</h3>
              <p className="text-gray-600">
                All your legal documents and client information are encrypted and stored securely, with compliance to Indian data protection regulations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-green-800 text-xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Time Efficiency</h3>
              <p className="text-gray-600">
                Reduce research and document preparation time by up to 70%, allowing you to focus on strategy and client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Trusted by Legal Professionals Across India</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from advocates, law firms, and legal departments who have transformed their practice with Nyaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <div className="text-green-800 text-xl">👤</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Rajesh Sharma</h4>
                  <p className="text-gray-600">Senior Advocate, Delhi High Court</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Nyaya has revolutionized how I prepare for cases. The AI-powered summaries help me quickly grasp complex judgments, and the citation extraction feature saves hours of manual work. It's an essential tool for any serious advocate."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <div className="text-green-800 text-xl">👤</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Priya Mehta</h4>
                  <p className="text-gray-600">Managing Partner, Mehta & Associates</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a law firm managing multiple cases simultaneously, Nyaya's project spaces and smart scheduling features have been game-changers. Our team collaboration has improved significantly, and we're able to serve our clients more efficiently."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your legal practice?</h2>
          <p className="text-xl mb-10">
            Join the growing community of Indian legal professionals using Nyaya to work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-3 bg-white text-green-800 text-lg font-semibold rounded-md hover:bg-gray-100 whitespace-nowrap cursor-pointer">
              Request Demo
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-md hover:bg-green-700 whitespace-nowrap cursor-pointer">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
       <LegalFooter/>
    </div>
  );
};

export default Home;