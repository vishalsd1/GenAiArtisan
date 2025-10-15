import React, { useState, useEffect, useRef } from 'react';
import { Camera, Heart, Zap, Sparkles, Upload, ArrowRight, Globe, Users, Shield, Flame, Play, X, Send, MessageCircle, Loader } from 'lucide-react';

export default function KimayaPlatform() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('artisan');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showEchoGenerator, setShowEchoGenerator] = useState(false);
  const [selectedCraft, setSelectedCraft] = useState(null);
  const [showARPreview, setShowARPreview] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [generatingEcho, setGeneratingEcho] = useState(false);
  const [echoGenerated, setEchoGenerated] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const crafts = [
    {
      id: 1,
      name: 'Nagpur Orange Weave',
      artisan: 'Radha Sharma',
      location: 'Nagpur, Maharashtra',
      price: '₹8,500',
      story: 'Three generations of weaving tradition. My grandmother started this craft in 1985. Each thread carries the memory of our family struggle and triumph.',
      image: '🧵',
      destiny: 'A collector who values heritage',
      earnings: 'Direct 85% revenue share',
      echo: {
        title: 'Living Heritage Weave',
        heritage: 'Nagpur Cotton Tradition (40 years)',
        techniques: 'Hand-loom, natural dyes, generational knowledge',
        cultural: 'Preserves endangered weaving art form'
      }
    },
    {
      id: 2,
      name: 'Blue Pottery Vessel',
      artisan: 'Ahmed Khan',
      location: 'Jaipur, Rajasthan',
      price: '₹12,000',
      story: 'Ancient Mughal techniques passed down through 5 generations. Every brushstroke tells a story of our dynasty.',
      image: '🏺',
      destiny: 'Someone seeking cultural authenticity',
      earnings: 'Digital licensing potential',
      echo: {
        title: 'Mughal Legacy Pottery',
        heritage: 'Jaipur Blue Pottery (120 years)',
        techniques: 'Hand-painted, mineral pigments, traditional kiln',
        cultural: 'Connects to Mughal artistic traditions'
      }
    },
    {
      id: 3,
      name: 'Brass Lamp Sculpture',
      artisan: 'Maya Patel',
      location: 'Moradabad, UP',
      price: '₹6,200',
      story: 'Metalwork secrets learned from my father. Every hammer strike is meditation, every curve is prayer.',
      image: '🪔',
      destiny: 'A home design enthusiast',
      earnings: 'Fractal scaling royalties',
      echo: {
        title: 'Sacred Metalwork Art',
        heritage: 'Moradabad Brassware (80 years)',
        techniques: 'Hand-hammered, traditional casting',
        cultural: 'Spiritual significance in Hindu temples'
      }
    }
  ];

  const problems = [
    { icon: '📉', title: 'Loss of Heritage', desc: 'Unique cultural significance erased in generic listings' },
    { icon: '💸', title: 'Loss of Profit', desc: 'Only 15% of sale price reaches the artisan' },
    { icon: '🌐', title: 'Digital Invisibility', desc: 'No skills to reach global buyers directly' }
  ];

  const features = [
    { icon: '✨', title: 'AI Echo Engine', desc: 'One photo creates your craft\'s digital soul' },
    { icon: '🧠', title: 'Destiny Matching', desc: 'AI connects you with buyers who truly value your story' },
    { icon: '🔗', title: 'Heritage Chain', desc: 'Blockchain proves authenticity forever' },
    { icon: '🕶️', title: 'Mela-Verse', desc: 'AR/VR experiences bring crafts to life' }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateEcho = () => {
    setGeneratingEcho(true);
    setTimeout(() => {
      setEchoGenerated({
        title: 'Traditional Handwoven Saree',
        story: 'This exquisite piece represents 40 years of family weaving traditions from Nagpur. Created using natural indigo dyes and hand-loom techniques passed through 3 generations. Each pattern tells stories of harvest seasons and celebrations.',
        heritage: 'Authentic Nagpur Weaving (1985-2025)',
        techniques: 'Hand-loom, natural dyes, traditional patterns',
        cultural: 'Preserves endangered textile art form',
        sustainability: 'Eco-friendly, zero waste production',
        verified: true
      });
      setGeneratingEcho(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            किमया
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-6 hidden md:flex">
              <button onClick={() => setActiveTab('artisan')} className={`transition ${activeTab === 'artisan' ? 'text-purple-400' : 'hover:text-purple-400'}`}>For Artisans</button>
              <button onClick={() => setActiveTab('buyer')} className={`transition ${activeTab === 'buyer' ? 'text-purple-400' : 'hover:text-purple-400'}`}>For Buyers</button>
            </div>
            <button onClick={() => setWhatsappOpen(true)} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              We Save Stories
            </span>
            <br />
            Not Just Sell Products
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Every craft has a soul. Every artisan has a legacy. We transform handmade treasures into living digital companions that preserve heritage and unlock true value.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setShowEchoGenerator(true)} className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition">
              Try AI Echo Engine ✨
            </button>
            <button onClick={() => document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' })} className="border border-purple-400 px-8 py-3 rounded-full hover:bg-purple-900/20 transition">
              Discover Crafts →
            </button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Artisans Struggle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((prob, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-8 rounded-2xl border border-purple-700/30 hover:border-purple-500 transition">
                <div className="text-5xl mb-4">{prob.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{prob.title}</h3>
                <p className="text-gray-300">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Echo Generator Demo */}
      {showEchoGenerator && (
        <section className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/50 rounded-3xl p-8 max-w-4xl w-full border border-purple-500/50 my-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">AI Echo Engine Demo</h2>
              <button onClick={() => {
                setShowEchoGenerator(false);
                setUploadedImage(null);
                setEchoGenerated(null);
              }} className="hover:text-red-400 transition">
                <X className="w-8 h-8" />
              </button>
            </div>

            {!echoGenerated ? (
              <div className="space-y-6">
                <div className="bg-black/50 p-12 rounded-xl border-2 border-dashed border-purple-400 text-center cursor-pointer hover:border-purple-300 transition"
                  onClick={() => fileInputRef.current?.click()}>
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="uploaded" className="w-full h-64 object-cover rounded-lg" />
                  ) : (
                    <div>
                      <Camera className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                      <p className="text-lg font-semibold mb-2">Click to upload a craft photo</p>
                      <p className="text-gray-400">or drag and drop</p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-600">
                  <h3 className="font-bold mb-3">📝 Craft Story (Optional)</h3>
                  <textarea
                    placeholder="Tell us about your craft, traditions, and heritage..."
                    className="w-full bg-black/50 text-white p-4 rounded border border-purple-500 placeholder-gray-500 focus:outline-none focus:border-purple-300"
                    rows={4}
                  />
                </div>

                <button
                  onClick={generateEcho}
                  disabled={!uploadedImage || generatingEcho}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 flex items-center justify-center gap-2">
                  {generatingEcho ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Generating Your Echo...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Echo with AI
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-6 rounded-xl border border-purple-400">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{echoGenerated.title}</h3>
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-gray-200 mb-4">{echoGenerated.story}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/50 p-4 rounded-lg border border-purple-600">
                    <p className="text-sm text-gray-400">Heritage Line</p>
                    <p className="font-bold text-purple-300">{echoGenerated.heritage}</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg border border-purple-600">
                    <p className="text-sm text-gray-400">Techniques</p>
                    <p className="font-bold text-purple-300">{echoGenerated.techniques}</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg border border-purple-600">
                    <p className="text-sm text-gray-400">Cultural Impact</p>
                    <p className="font-bold text-purple-300">{echoGenerated.cultural}</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg border border-purple-600">
                    <p className="text-sm text-gray-400">Sustainability</p>
                    <p className="font-bold text-purple-300">{echoGenerated.sustainability}</p>
                  </div>
                </div>

                <div className="bg-green-900/30 p-4 rounded-lg border border-green-600 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-bold text-green-300">Blockchain Verified ✓</p>
                    <p className="text-sm text-green-200">Echo minted on heritage chain. Authenticity guaranteed forever.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setShowARPreview(true)} className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" /> View in AR 🕶️
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-bold hover:shadow-lg transition">
                    List on Marketplace 🌍
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* AR Preview */}
      {showARPreview && (
        <section className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            <button
              onClick={() => setShowARPreview(false)}
              className="absolute top-6 right-6 z-60 hover:text-red-400 transition">
              <X className="w-8 h-8" />
            </button>

            <div className="bg-gradient-to-b from-purple-900/80 to-black rounded-3xl p-8 border border-purple-500/50">
              <h2 className="text-3xl font-bold mb-6 text-center">Mela-Verse AR Preview</h2>

              {/* 3D-like AR Representation */}
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 via-black to-pink-600/20 rounded-2xl mb-6 flex items-center justify-center border border-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 animate-pulse opacity-30 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="relative z-10 text-center">
                  <div className="text-9xl mb-4 transform -rotate-12 hover:rotate-0 transition duration-500">🧵</div>
                  <p className="text-purple-300 font-bold">Interactive 3D Preview</p>
                  <p className="text-gray-400 text-sm">Rotate • Zoom • View in Room</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <button className="bg-purple-900/50 hover:bg-purple-900/70 border border-purple-500 py-3 rounded-lg transition">
                  🔄 Rotate 360°
                </button>
                <button className="bg-purple-900/50 hover:bg-purple-900/70 border border-purple-500 py-3 rounded-lg transition">
                  📸 Place in Room
                </button>
                <button className="bg-purple-900/50 hover:bg-purple-900/70 border border-purple-500 py-3 rounded-lg transition">
                  🎨 See All Colors
                </button>
                <button className="bg-purple-900/50 hover:bg-purple-900/70 border border-purple-500 py-3 rounded-lg transition">
                  📖 Read Story
                </button>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-purple-600 mb-6">
                <p className="text-sm text-gray-400 mb-2">📍 How it works:</p>
                <p className="text-purple-300">Point your phone camera at the craft to experience it in augmented reality. See how it looks in your space before purchasing.</p>
              </div>

              <button
                onClick={() => setShowARPreview(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition">
                Close AR Preview
              </button>
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp Chat Demo */}
      {whatsappOpen && (
        <section className="fixed bottom-0 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div>
              <p className="font-bold">किमया Support</p>
              <p className="text-sm text-green-100">Online</p>
            </div>
            <button onClick={() => setWhatsappOpen(false)} className="hover:bg-green-700 p-2 rounded transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
              <p className="text-sm text-gray-800">👋 Hello! Welcome to किमया. How can we help you share your craft story today?</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg max-w-xs ml-auto text-right">
              <p className="text-sm text-gray-800">I want to upload my weaving</p>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
              <p className="text-sm text-gray-800">📸 Perfect! Just take a photo of your craft and upload it. Our AI Echo Engine will create your digital story instantly!</p>
            </div>
          </div>

          <div className="border-t p-3 bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      {/* Solution Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">The Kimaya Difference</h2>
          <p className="text-center text-gray-400 mb-16">Four pillars of transformation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 p-6 rounded-xl border border-purple-600/20 group-hover:border-purple-400 transition h-full">
                  <div className="text-4xl mb-4">{feat.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition">{feat.title}</h3>
                  <p className="text-sm text-gray-400">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Radha's Journey: One Photo, Infinite Possibilities</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'One Photo', desc: 'Snap your craft' },
              { num: '2', title: 'AI Echo', desc: 'Digital soul created' },
              { num: '3', title: 'Heritage Chain', desc: 'Blockchain verified' },
              { num: '4', title: 'Destiny Match', desc: 'Meet your buyer' },
              { num: '5', title: 'Fair Deal', desc: '85% revenue share' }
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-20 px-6" id="marketplace">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Artisan Marketplace</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {crafts.map((craft) => (
              <div
                key={craft.id}
                onClick={() => setSelectedCraft(craft)}
                className="group cursor-pointer bg-gradient-to-b from-purple-900/40 to-transparent rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500 transition transform hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-9xl group-hover:scale-110 transition">
                  {craft.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{craft.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{craft.artisan}</p>
                  <p className="text-sm text-purple-300 mb-4">📍 {craft.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-400">{craft.price}</span>
                    <Heart className="w-6 h-6 hover:fill-pink-500 hover:text-pink-500 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Detail Modal */}
      {selectedCraft && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/40 rounded-3xl p-8 max-w-2xl w-full border border-purple-500/50 my-10">
            <div className="flex justify-between items-start mb-6">
              <div className="text-9xl">{selectedCraft.image}</div>
              <button onClick={() => setSelectedCraft(null)} className="hover:text-red-400 transition">
                <X className="w-8 h-8" />
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-2">{selectedCraft.name}</h2>
            <p className="text-purple-300 font-semibold mb-4">By {selectedCraft.artisan}</p>

            <div className="space-y-4 mb-6 text-gray-300">
              <div>
                <p className="text-purple-300 font-bold mb-2">📖 Artisan's Story</p>
                <p>{selectedCraft.story}</p>
              </div>
              <div>
                <p className="text-purple-300 font-bold mb-2">🏛️ Digital Echo Generated</p>
                <div className="bg-black/50 p-3 rounded">
                  <p className="text-purple-200 font-semibold">{selectedCraft.echo.title}</p>
                  <p className="text-sm text-gray-400">Heritage: {selectedCraft.echo.heritage}</p>
                  <p className="text-sm text-gray-400">Techniques: {selectedCraft.echo.techniques}</p>
                </div>
              </div>
              <div>
                <p className="text-purple-300 font-bold mb-2">✨ Destiny Match</p>
                <p>{selectedCraft.destiny}</p>
              </div>
              <div>
                <p className="text-purple-300 font-bold mb-2">💰 Artisan Earnings</p>
                <p>{selectedCraft.earnings}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition">
                Buy with Destiny 🌍
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" /> View in AR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { stat: '50K+', label: 'Artisans Connected' },
            { stat: '500K+', label: 'Crafts Preserved' },
            { stat: '₹50Cr+', label: 'Revenue Shared' },
            { stat: '180+', label: 'Countries Reached' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl p-12 border border-purple-500/50 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
          <p className="text-gray-300 mb-8">Join thousands of artisans preserving heritage while earning fair value.</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
            Get Started Today ✨
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 py-12 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">किमया</p>
              <p className="text-gray-400 text-sm">Eternal Echoes of Heritage</p>
            </div>
            <div>
              <p className="font-bold mb-3 text-purple-300">For Artisans</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer">Upload Craft</li>
                <li className="hover:text-purple-400 cursor-pointer">Earnings Guide</li>
                <li className="hover:text-purple-400 cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3 text-purple-300">For Buyers</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer">Browse Crafts</li>
                <li className="hover:text-purple-400 cursor-pointer">Stories</li>
                <li className="hover:text-purple-400 cursor-pointer">Verify Authenticity</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3 text-purple-300">Connect</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer">WhatsApp</li>
                <li className="hover:text-purple-400 cursor-pointer">Instagram</li>
                <li className="hover:text-purple-400 cursor-pointer">Email</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-900/30 pt-8 text-center text-gray-500 text-sm">
            <p className="mb-2">किमया - Preserving Heritage | Empowering Artisans | Connecting Stories</p>
            <p>© 2025 GenX Team. Built for Google Hackathon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}