import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  BookOpen, 
  Stethoscope, 
  Briefcase, 
  ShieldAlert, 
  CheckCircle2, 
  Menu, 
  X, 
  Send,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What is Zakat', href: '#zakat' },
    { name: 'Causes', href: '#causes' },
    { name: 'Impact', href: '#impact' },
    { name: 'Donate', href: '#donate' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-slate-800">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-emerald-900">Peace Pect</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#donate" 
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-emerald-200"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-emerald-900" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 px-6 flex flex-col gap-4 border-t border-emerald-50"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#donate" 
              className="bg-emerald-600 text-white text-center py-3 rounded-xl font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 -skew-x-12 translate-x-24 z-0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Empowering Communities Through Giving</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Purify Your Wealth, <span className="text-emerald-600">Empower</span> a Life.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Your Zakat and Sadaqah are more than just donations; they are bridge to self-reliance for thousands of families in underserved communities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#donate" 
              className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 flex items-center gap-2"
            >
              Start Your Donation <Send className="w-5 h-5" />
            </a>
            <a 
              href="#zakat" 
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop" 
              alt="Helping children" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-emerald-50">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 font-medium">Disbursement Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ZakatExplainer = () => {
  return (
    <section id="zakat" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div>
             <div className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4">
               <Info className="w-4 h-4" />
               Understanding Zakat
             </div>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">What is Zakat and Why Give?</h2>
             <p className="text-lg text-slate-600 mb-6 leading-relaxed">
               Zakat is a mandatory charitable contribution for capable Muslims, serving as a pillar of faith and a tool for social justice. It is designed to purify one's wealth and foster a balanced society.
             </p>
             <div className="space-y-4">
               {[
                 "Purifies your hard-earned wealth and prevents greed.",
                 "Directly impacts the 8 categories mentioned in the Holy Quran.",
                 "Reduces economic inequality by circulating wealth.",
                 "Fulfills a fundamental religious obligation with transparency."
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start">
                   <div className="mt-1 bg-emerald-50 p-1 rounded-full">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                   </div>
                   <p className="text-slate-700 font-medium">{item}</p>
                 </div>
               ))}
             </div>
           </div>
           <div className="bg-emerald-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
              <div className="relative z-10">
                <blockquote className="text-2xl font-serif italic mb-8 border-l-4 border-emerald-200 pl-6 py-2">
                  "Those who spend their wealth in the way of Allah is like a grain of corn which grows seven ears, and each ear has a hundred grains."
                </blockquote>
                <div className="space-y-6">
                   <div className="flex justify-between items-end border-b border-white/20 pb-4">
                     <span className="text-emerald-100 font-medium">Global Poverty Goal</span>
                     <span className="text-white text-3xl font-bold">Zero Hunger</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-white/20 pb-4">
                     <span className="text-emerald-100 font-medium">Impact Projects</span>
                     <span className="text-white text-3xl font-bold">500+</span>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Causes = () => {
  const causes = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education Support",
      description: "Scholarships, school kits, and vocational training for bright students from low-income families.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Assistance",
      description: "Covering surgical costs, chronic medication, and emergency hospital bills for those in need.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Livelihood & Jobs",
      description: "Small business grants, rickshaw donation, and skill development to foster long-term self-reliance.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Disaster Relief",
      description: "Emergency food packs, shelter kits, and medical camps during natural disasters and crises.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <section id="causes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Relief Areas</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
          Every rupee you contribute is channeled directly into verified causes that create sustainable impact.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {causes.map((cause, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
               <img 
                src={cause.image} 
                alt={cause.title} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
               />
            </div>
            <div className="p-8">
              <div className="bg-emerald-50 text-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {cause.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cause.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {cause.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    cause: 'Education Support'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(data.message);
        setFormData({ name: '', phone: '', email: '', amount: '', cause: 'Education Support' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="donate" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-white" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Express Your Generosity</h2>
          <p className="text-slate-600">Your information is secure and will only be used for donation verification and updates.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-2xl shadow-emerald-100 p-8 md:p-12 border border-emerald-50"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">WhatsApp / Phone</label>
              <input 
                required
                type="tel" 
                placeholder="+91 98765 43210"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Donation Cause</label>
              <select 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                value={formData.cause}
                onChange={(e) => setFormData({...formData, cause: e.target.value})}
              >
                <option>Education Support</option>
                <option>Medical Assistance</option>
                <option>Livelihood & Jobs</option>
                <option>Disaster Relief</option>
                <option>General Sadaqah</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Donation Amount (INR)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">₹</span>
                <input 
                  required
                  type="number" 
                  placeholder="5000"
                  className="w-full pl-12 pr-5 py-5 bg-slate-50 border border-slate-100 rounded-xl text-3xl font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button 
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition shadow-xl shadow-emerald-200 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? 'Processing...' : 'Pay / Donate Securely'}
                <ShieldCheck className="w-6 h-6" />
              </button>
            </div>
          </form>

          <AnimatePresence>
            {success && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100 flex items-center gap-4"
              >
                <div className="bg-emerald-600 p-2 rounded-full text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-medium text-lg">{success}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 opacity-60">
           <div className="flex items-center gap-2 font-semibold">
             <ShieldCheck className="w-5 h-5" /> 256-bit Encryption
           </div>
           <div className="flex items-center gap-2 font-semibold">
             <CheckCircle2 className="w-5 h-5" /> Verified Charity
           </div>
           <div className="flex items-center gap-2 font-semibold">
             <CheckCircle2 className="w-5 h-5" /> KYC Documents Available
           </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const steps = [
    {
      title: "Transparent Verification",
      text: "Every appeal is verified by local field officers with physical verification and proof of need.",
      icon: <ShieldCheck className="w-10 h-10" />
    },
    {
      title: "100% Disbursement",
      text: "We ensure that 100% of your Zakat reaches the intended beneficiary without administrative deductions.",
      icon: <Zap className="w-10 h-10" />
    },
    {
      title: "Shariah Compliance",
      text: "Guided by a Shariah board to ensure your Zakat is spent strictly as per Islamic principles.",
      icon: <CheckCircle2 className="w-10 h-10" />
    }
  ];

  return (
    <section id="impact" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({length: 12}).map((_, i) => (
            <div key={i} className="border-r border-white/20 h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Peace Pect?</h2>
          <p className="text-emerald-300 text-lg">Commitment to trust, transparency, and timely aid.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex mb-6 text-emerald-400 bg-white/5 p-6 rounded-3xl border border-white/10 shadow-2xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-emerald-100/70 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-emerald-900/50 rounded-[3rem] border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-6">Our Impact Tracker</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div>
                 <p className="text-4xl font-black text-emerald-400 mb-1">12,500+</p>
                 <p className="text-sm font-bold uppercase tracking-widest text-emerald-300/50">Families Helped</p>
               </div>
               <div>
                 <p className="text-4xl font-black text-emerald-400 mb-1">₹8.2Cr</p>
                 <p className="text-sm font-bold uppercase tracking-widest text-emerald-300/50">Disbursed</p>
               </div>
               <div>
                 <p className="text-4xl font-black text-emerald-400 mb-1">28 States</p>
                 <p className="text-sm font-bold uppercase tracking-widest text-emerald-300/50">In India Cover</p>
               </div>
               <div>
                 <p className="text-4xl font-black text-emerald-400 mb-1">100%</p>
                 <p className="text-sm font-bold uppercase tracking-widest text-emerald-300/50">Shariah Verified</p>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-400 font-medium">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
        <div className="md:col-span-2">
           <div className="flex items-center gap-2 mb-6 text-white">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Heart className="w-5 h-5" />
            </div>
            <span className="font-bold text-2xl tracking-tight">Peace Pect</span>
          </div>
          <p className="max-w-md text-slate-500 leading-relaxed mb-8">
            India's most transparent Zakat platform connecting generous hearts with those truly in need. We empower communities through sustainable charitable initiatives.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition cursor-pointer">
              <Send className="w-5 h-5 shrink-0" />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#zakat" className="hover:text-emerald-500 transition">How it Works</a></li>
            <li><a href="#causes" className="hover:text-emerald-500 transition">Causes</a></li>
            <li><a href="#donate" className="hover:text-emerald-500 transition">Donate Online</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Impact Reports</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500" /> +91 000 000 0000</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-emerald-500" /> support@peacepect.org</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-emerald-500" /> Mumbai, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
        <p>© 2024 Peace Pect Foundation. All Rights Reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:underline">Terms of Service</a>
           <a href="#" className="hover:underline">Privacy Policy</a>
           <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-emerald-200 selection:text-emerald-900 scroll-smooth">
      <Navbar />
      <Hero />
      <div className="relative">
        <ZakatExplainer />
        <Causes />
        <TrustSection />
        <DonationForm />
      </div>
      <Footer />
    </div>
  );
}

