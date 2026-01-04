import React, { useState } from 'react';
import { Heart, MapPin, Info, CheckCircle, AlertCircle, Menu, X, ArrowRight, ShieldCheck, Globe, Users, Star, Utensils, Moon, Clock, Shield, HelpCircle, ChevronDown, ChevronUp, Hourglass, Hand, Activity, BookOpen } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  // Ouvre la première question (Pédagogie) par défaut pour la relecture
  const [openFaq, setOpenFaq] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('userName'),
      email: formData.get('userEmail'),
      message: formData.get('userMessage'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        const errorData = await response.json();
        console.error('Erreur envoi email:', errorData);
        setFormStatus('error');
      }
    } catch (err) {
      console.error('Erreur réseau:', err);
      setFormStatus('error');
    }
  };

  const scrollToFaq = (index) => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
      setOpenFaq(index);
    }
  };

  const faqData = [
    {
      question: "Grandir avec notre petit compagnon : Apports Pédagogiques et Valeurs",
      answer: (
        <div className="space-y-6 text-gray-700">
          <p className="italic text-gray-600 border-l-4 border-amber-300 pl-4">
            "L'accueil d'un hamster russe n'est pas seulement un loisir ; c'est une opportunité pour les enfants de mettre en pratique les valeurs de service et de loyauté qui nous sont chères. En prenant soin d'un être plus fragile qu'eux, ils apprennent à devenir les gardiens bienveillants de la Création."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
              <h4 className="font-bold text-amber-800 mb-2">1. La Responsabilité : L'honneur de l'engagement</h4>
              <p className="text-sm mb-2">S'occuper d'un animal est un acte de service qui demande de la constance.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li><strong>La Parole Donnée :</strong> S'engager à soigner l'animal est un pacte de loyauté. On ne le soigne pas seulement par envie, mais par promesse.</li>
                <li><strong>Le Sens du Devoir :</strong> Les tâches quotidiennes deviennent des petits rituels de service qui forgent le caractère.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
              <h4 className="font-bold text-amber-800 mb-2">2. Le Respect du Rythme : L'apprentissage de l'Empathie</h4>
              <p className="text-sm mb-2">Respecter son sommeil, c'est apprendre à mettre ses désirs de côté pour le bien de l'autre.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li><strong>La Maîtrise de Soi :</strong> Ne pas réveiller l'animal enseigne la tempérance et la patience.</li>
                <li><strong>Le Silence et la Douceur :</strong> Adapter son comportement développe l'attention au plus vulnérable.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
              <h4 className="font-bold text-amber-800 mb-2">3. L'Observation : S'émerveiller de la Nature</h4>
              <p className="text-sm mb-2">Une leçon de science naturelle et de gratitude.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li><strong>La Curiosité Intellectuelle :</strong> Tenir un journal d'observation pour partager les découvertes.</li>
                <li><strong>L'Émerveillement :</strong> Voir la complexité d'un si petit être renforce le respect pour la vie.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
              <h4 className="font-bold text-amber-800 mb-2">4. La Discipline et l'Hygiène</h4>
              <p className="text-sm mb-2">Extension du soin porté à son propre foyer.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li><strong>L'Ordre :</strong> La propreté de l'environnement est le fondement de l'harmonie.</li>
                <li><strong>La Rigueur :</strong> L'attention aux détails lors du nettoyage.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">Répartition des Rôles (Entraide Fraternelle)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mission</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">Le Frère Aîné</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Le Frère Cadet</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="px-4 py-3 font-medium">Alimentation</td>
                    <td className="px-4 py-3 text-gray-600">Mesurer la dose, sélectionner le légume.</td>
                    <td className="px-4 py-3 text-gray-600">Déposer délicatement dans la gamelle.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Hygiène</td>
                    <td className="px-4 py-3 text-gray-600">Vérifier le biberon, nettoyer le bac à sable.</td>
                    <td className="px-4 py-3 text-gray-600">Aider à brosser les petits accessoires.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Apprivoisement</td>
                    <td className="px-4 py-3 text-gray-600">Guider son frère pour la sécurité.</td>
                    <td className="px-4 py-3 text-gray-600">Offrir une friandise main ouverte.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Santé</td>
                    <td className="px-4 py-3 text-gray-600">Surveiller le comportement général.</td>
                    <td className="px-4 py-3 text-gray-600">Alerter si le hamster est réveillé/dort.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <p className="font-serif italic text-lg text-amber-800">« Celui qui est fidèle dans les petites choses le sera aussi dans les grandes. »</p>
            <p className="text-sm text-gray-500 mt-2">En prenant soin de ce petit compagnon avec sérieux et amour, les deux frères se préparent ensemble à porter, plus tard, de plus hautes responsabilités.</p>
          </div>
        </div>
      )
    },
    {
      question: "Que doit manger exactement un hamster russe ? (Guide complet)",
      answer: (
        <div className="space-y-4 text-gray-700">
          <p>Pour nourrir au mieux votre petit compagnon, il est important de se rappeler que le hamster russe est omnivore : il a besoin d'un mélange équilibré de graines, de végétaux et même de quelques protéines animales.</p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-sm">
            <h4 className="font-bold text-amber-800 mb-2">La base et les compléments</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Graines :</strong> Millet, avoine et tournesol (avec modération).</li>
              <li><strong>Légumes frais :</strong> Courgette, concombre, endive (2 fois par semaine).</li>
              <li><strong>Protéines :</strong> Vers de farine ou blanc de poulet cuit à l'eau.</li>
              <li><strong>Fruits :</strong> À considérer comme des friandises occasionnelles (pomme, fraise).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "Gestion de la cage et Aménagement (Guide complet)",
      answer: (
        <div className="space-y-4 text-gray-700">
          <p>Le bien-être dépend d'une cage spacieuse (min 70x40cm) et d'un aménagement stimulant.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Litière :</strong> Épaisse (15-20cm) de chanvre ou lin.</li>
            <li><strong>Sable :</strong> Terre à bain indispensable pour le poil.</li>
            <li><strong>Roue :</strong> Accessoire vital pour l'exercice quotidien.</li>
          </ul>
        </div>
      )
    },
    {
      question: "La manipulation : Comment l'apprivoiser en douceur ?",
      answer: (
        <div className="space-y-4 text-gray-700 text-sm">
          <p>L'apprivoisement demande de la patience, surtout avec les enfants :</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Étape 1 :</strong> Main ouverte au sol pour le laisser sentir.</li>
            <li><strong>Étape 2 :</strong> Friandise dans la paume pour l'attirer.</li>
            <li><strong>Étape 3 :</strong> Soulever en "coupe" avec les deux mains.</li>
          </ol>
        </div>
      )
    },
    {
      question: "Santé & Hygiène : La check-list pour la famille",
      answer: (
        <div className="space-y-4 text-gray-700 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Quotidien :</strong> Changer l'eau, retirer les frais non mangés.</li>
            <li><strong>Hebdo :</strong> Nettoyer les coins souillés.</li>
            <li><strong>Bimensuel :</strong> Nettoyage complet de la cage.</li>
            <li><strong>Vigilance :</strong> Surveiller l'aspect du poil et des yeux.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Quelle est l'espérance de vie d'un hamster russe ?",
      answer: (
        <div className="space-y-4 text-gray-700">
          <p>L'espérance de vie d'un hamster russe est malheureusement assez courte, ce qui est important à expliquer aux enfants (comme Éloi et William) pour les préparer. En moyenne, un hamster russe vit entre <strong>18 mois et 3 ans</strong>.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-center">
              <h4 className="font-bold text-green-800">La jeunesse</h4>
              <p className="text-xs text-green-600 font-medium">0 à 10 mois</p>
              <p className="text-sm mt-2 text-gray-600">Actif et explorateur.</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
              <h4 className="font-bold text-blue-800">L'âge adulte</h4>
              <p className="text-xs text-blue-600 font-medium">10 à 18 mois</p>
              <p className="text-sm mt-2 text-gray-600">Rythme stabilisé.</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 text-center">
              <h4 className="font-bold text-orange-800">La vieillesse</h4>
              <p className="text-xs text-orange-600 font-medium">Après 18-20 mois</p>
              <p className="text-sm mt-2 text-gray-600">Ralentissement général.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Pourquoi choisir un élevage plutôt qu'une animalerie ?",
      answer: "En animalerie, les hamsters sont souvent issus de croisements intensifs (hybrides), ce qui fragilise leur santé. Notre élevage familial garantit une lignée pure, manipulée quotidiennement par nos enfants, assurant un animal robuste et parfaitement sociabilisé."
    }
  ];

  return (
    <div className="font-sans text-gray-700 bg-stone-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-2xl font-bold text-amber-600 tracking-tight">
                Hamster-russe.com
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition">Accueil</a>
              <a href="#souche" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition">Lignée Pure</a>
              <a href="#famille" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition">Élevage Familial</a>
              <a href="#conseils" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition">Guide Expert</a>
              <a href="#contact" className="bg-amber-600 text-white hover:bg-amber-700 px-4 py-2 rounded-full text-sm font-medium transition shadow-md">Adopter</a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <a href="#accueil" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-gray-700">Accueil</a>
              <a href="#famille" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-gray-700">Famille</a>
              <a href="#conseils" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-gray-700">Conseils</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-amber-600 font-bold">Adopter</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="accueil" className="relative bg-amber-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Élevage de Hamster Russe</span>{' '}
              <span className="block text-amber-600">à Puteaux (92)</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl">
              Adoptez un <strong>hamster russe gris pur</strong> (Agouti), issu d'une lignée authentique. Un élevage fondé sur la transmission et le respect de la vie.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-amber-600 text-white rounded-md font-bold hover:bg-amber-700 transition">Réserver un bébé</a>
              <a href="#famille" className="px-8 py-3 bg-amber-100 text-amber-800 rounded-md font-bold hover:bg-amber-200 transition">Notre Histoire</a>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 ml-12">
            <img src="/hamster-russe-agouti-elevage-puteaux.jpg" alt="Deux adorables hamsters russes agouti dans leur nid - Élevage familial à Puteaux" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </header>

      {/* Origin Section */}
      <section id="souche" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Génétique & Authenticité</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Le Vrai Hamster Russe (Phodopus sungorus)
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Nous élevons exclusivement la variété sauvage "Agouti". Une souche saine importée de Russie, sans croisement ni hybridation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-stone-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mx-auto mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">Origine Russie Certifiée</h3>
              <p className="mt-2 text-base text-gray-500">
                Loin des élevages intensifs, nos reproducteurs proviennent de leur habitat naturel en Russie. Cette traçabilité garantit une génétique non altérée.
              </p>
            </div>

            <div className="text-center p-6 bg-stone-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mx-auto mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">Santé & Longévité</h3>
              <p className="mt-2 text-base text-gray-500">
                La couleur grise (Agouti) est signe de robustesse. Nos hamsters vivent plus longtemps et sont épargnés par les tares génétiques courantes des couleurs artificielles.
              </p>
            </div>

            <div className="text-center p-6 bg-stone-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">Éthique & Bien-être</h3>
              <p className="mt-2 text-base text-gray-500">
                Nous ne sommes pas une animalerie. Chaque portée est planifiée pour respecter le repos des femelles et garantir un développement optimal des bébés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section id="famille" className="py-16 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2 bg-amber-600 p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <Users size={32} className="text-amber-200 mr-3" />
                <h2 className="text-3xl font-extrabold">Une famille de passionnés à Puteaux</h2>
              </div>
              <p className="text-lg text-amber-50 mb-6">
                L'élevage est situé au cœur de notre foyer. C'est une aventure humaine où chaque membre de la famille joue un rôle clé.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="flex-shrink-0 h-6 w-6 text-amber-300 mt-1" />
                  <p className="ml-3 text-base">
                    <strong>Le Papa (Clément) :</strong> Gestionnaire de la lignée, il veille au respect des standards de la race et à la santé vétérinaire de l'élevage.
                  </p>
                </div>
                <div className="flex items-start">
                  <Star className="flex-shrink-0 h-6 w-6 text-amber-300 mt-1" />
                  <p className="ml-3 text-base">
                    <strong>La Maman (Organisation) :</strong> Elle est le cœur battant de l'accueil, elle orchestre la relation avec les adoptants et veille à la dimension pédagogique de chaque rencontre.
                  </p>
                </div>
                <div className="flex items-start">
                  <Star className="flex-shrink-0 h-6 w-6 text-amber-300 mt-1" />
                  <p className="ml-3 text-base">
                    <strong>Les Enfants (Éloi & William) :</strong> Nos "sociabilisateurs" en chef ! Grâce à eux, les bébés sont habitués quotidiennement aux voix, aux rires et aux manipulations douces.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-stone-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Des hamsters parfaits pour les familles</h3>
              <p className="text-gray-600 mb-6">
                Vous cherchez un premier animal de compagnie pour votre enfant en Île-de-France ?
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5" />
                  <div className="ml-3">
                    <span className="block font-bold text-gray-900">Zéro agressivité :</span>
                    <span className="text-gray-600">Nos hamsters ne mordent pas.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5" />
                  <div className="ml-3">
                    <span className="block font-bold text-gray-900">Confiance :</span>
                    <span className="text-gray-600">Ils viennent spontanément dans la main.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5" />
                  <div className="ml-3">
                    <span className="block font-bold text-gray-900">Conseils :</span>
                    <span className="text-gray-600">Nous formons vos enfants lors de l'adoption.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advice Grid */}
      <section id="conseils" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">La transmission d'Harcourt</h2>
            <p className="text-4xl font-extrabold text-gray-900">Le Guide du Petit Gardien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FEATURED: Pedagogical Values */}
            <article className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row bg-amber-100 rounded-2xl p-8 border border-amber-200 hover:shadow-xl transition shadow-md">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white text-amber-600 shadow-inner flex items-center justify-center">
                  <BookOpen size={40} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Grandir avec notre petit compagnon : Apports Pédagogiques</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Découvrez comment l'accueil d'un hamster russe devient une école de la vie. Entre honneur de l'engagement, maîtrise de soi et émerveillement devant l'œuvre du Créateur, nous partageons nos rituels familiaux pour impliquer vos enfants.
                </p>
                <button
                  onClick={() => scrollToFaq(0)}
                  className="inline-flex items-center font-bold text-amber-800 hover:text-amber-950 transition"
                >
                  Découvrir nos valeurs pédagogiques
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </article>

            {/* Alimentation Card */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-md transition">
              <Utensils className="text-amber-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Alimentation équilibrée</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">Un mélange précis de graines, légumes et protéines animales pour une santé de fer.</p>
              <button onClick={() => scrollToFaq(1)} className="text-amber-600 text-sm font-bold flex items-center hover:underline">Voir le menu complet <ArrowRight className="ml-1" size={16} /></button>
            </article>

            {/* Habitat Card */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-md transition">
              <Shield className="text-amber-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">L'habitat idéal</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">Litière épaisse, bain de sable et roue adaptée : les piliers du bien-être nocturne.</p>
              <button onClick={() => scrollToFaq(2)} className="text-amber-600 text-sm font-bold flex items-center hover:underline">Découvrir l'aménagement <ArrowRight className="ml-1" size={16} /></button>
            </article>

            {/* Apprivoisement Card */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-md transition">
              <Hand className="text-amber-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Manipulation douce</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">Gagner la confiance de son petit compagnon étape par étape, sans jamais le brusquer.</p>
              <button onClick={() => scrollToFaq(3)} className="text-amber-600 text-sm font-bold flex items-center hover:underline">Méthode de manipulation <ArrowRight className="ml-1" size={16} /></button>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Questions Fréquentes (FAQ)</h2>
            <p className="mt-2 text-gray-500">Réponses rapides pour nos futurs adoptants.</p>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-stone-50 transition"
                >
                  <span className="font-bold text-gray-900">{item.question}</span>
                  {openFaq === index ? <ChevronUp className="text-amber-600" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-6 border-t border-stone-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MapPin size={48} className="text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold mb-6">Venir à notre rencontre</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Nous sommes situés à <strong>Puteaux (92800)</strong>. Pour garantir la sérénité de nos animaux et de notre foyer, la remise s'effectue sur rendez-vous à la Gare de Puteaux ou sur le Parvis de La Défense.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
            {formStatus === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Demande enregistrée</h3>
                <p className="text-gray-500">Nous reviendrons vers vous sous 24h pour organiser une rencontre et l'adoption.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-8 text-amber-600 font-bold underline">Envoyer un autre message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Demander une adoption</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-gray-700 mb-2">Votre Nom de famille</label>
                    <input name="userName" type="text" placeholder="Nom de famille" required className="p-4 bg-gray-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-gray-700 mb-2">Votre Email</label>
                    <input name="userEmail" type="email" placeholder="contact@famille.fr" required className="p-4 bg-gray-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-gray-700 mb-2">Votre message pour la famille</label>
                  <textarea name="userMessage" rows="4" placeholder="Bonjour, nous habitons Paris et souhaiterions offrir un petit compagnon à nos enfants..." required className="p-4 bg-gray-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"></textarea>
                </div>
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.</p>
                )}
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-5 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg disabled:opacity-50">
                  {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-amber-500 mb-4 tracking-tighter">Hamster-russe.com</p>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto italic">Élevage familial de particuliers passionnés. Transmission de valeurs et respect de la Création.</p>
          <div className="border-t border-gray-800 pt-8 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hamster-russe.com - Puteaux, Hauts-de-Seine (92).</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
