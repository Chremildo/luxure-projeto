const content = {
  en: {
    starter: "Hi, I am James Lennan AI. Ask me about Brazil rentals, Airbnb-style stays, Rio tours, São Paulo neighborhoods, Uber/99, Pix, boleto, documents, safety, or how to contact James. I will answer with practical next steps.",
    thinking: "James Lennan AI is preparing a useful answer...",
    fallbackTitle: "Here is a practical starting point",
    fallbackIntro: "I can help with rentals, short stays, transport, payments, neighborhoods, tourist planning, and client preparation in Brazil. To make the advice more precise, tell me the city, dates, budget, number of guests, and whether this is tourism, relocation, or a long-term rental.",
    next: "Next step: send James your city, budget, dates, number of guests, and preferred neighborhood on WhatsApp so he can prepare a shortlist.",
    topics: {
      rental: {
        title: "Rental and Airbnb-style stay guidance",
        body: "For a rental or Airbnb-style stay, first decide if the client needs a short tourist stay, a monthly furnished apartment, or a longer contract. Short stays should prioritize easy check-in, Wi-Fi, air conditioning, building rules, cleaning fee, cancellation policy, and transport access. Monthly rentals should add contract terms, deposit, utility bills, condominium rules, and whether Pix, card, PayPal, Stripe checkout, Apple Pay, Google Pay, boleto, or transfer is accepted.",
        checklist: ["Confirm exact address before payment", "Ask for fresh photos or a video walkthrough", "Check Wi-Fi, air conditioning, laundry, elevator, parking, and building security", "Confirm deposit, cleaning fee, cancellation rules, and guest limit"]
      },
      neighborhoods: {
        title: "Neighborhood comparison",
        body: "Rio has very different routines by neighborhood. Penha can be practical and better value for local living. Campo Grande offers more space and works better with a car. Tijuca has metro access and traditional services. Botafogo is useful for tourists because it connects beach, metro, restaurants, and Sugarloaf. Barra is modern and better for longer stays. Ipanema and Leblon are premium beach areas with higher prices. In São Paulo, Jardins, Moema, Pinheiros, Vila Mariana, Bela Vista, and Moema are useful for work, restaurants, parks, and city access.",
        checklist: ["Match neighborhood to daily routine", "Check travel time at rush hour", "Compare safety, transport, food, pharmacy, and markets", "Do not choose only by photos"]
      },
      transport: {
        title: "Transport options in Brazil",
        body: "Clients usually compare Uber, 99, moto rides, bus, metro, rental car, and private driver. Uber or 99 is easiest for airports, nightlife, beach trips, and first arrivals. Moto can be fast in traffic but is not ideal for every client. Bus and metro are cheaper and practical in some areas. Rental car helps in Barra, Campo Grande, beach houses, family routines, and places far from metro. A private driver is best for airport arrival, late-night returns, and tourist days.",
        checklist: ["Use Uber/99 for first arrival", "Check if the building has parking before renting a car", "Use metro when the route is direct", "Use private driver for tours or late-night schedules"]
      },
      payments: {
        title: "Payment options and safety",
        body: "In Brazil, common payment options include Pix, credit or debit card, boleto, bank transfer, and sometimes PayPal or Stripe checkout. Stripe can support card, Apple Pay, and Google Pay style payments when it is connected by the business. Pix is fast for local transfers, PayPal can help some international clients, and boleto appears in formal services. Always confirm deposit, cancellation, cleaning fee, contract, receipt, and ID requirements before payment.",
        checklist: ["Never pay before confirming who receives the money", "Ask for receipt or booking confirmation", "Confirm refund rules in writing", "Confirm if PayPal or Stripe fees apply", "Be careful with prices that look too low"]
      },
      tourism: {
        title: "Rio tourist planning",
        body: "A good Rio plan should balance famous attractions with easy logistics. For a 3-day visit, one day can cover Christ the Redeemer, Santa Teresa, and dinner. Another day can focus on Ipanema or Leblon beach plus Sugarloaf at sunset. A third day can include Botanical Garden, museums, galleries, or a boat day if weather is good. For families, add more transport time and avoid overpacking the schedule.",
        checklist: ["Book major attractions early", "Check weather before Sugarloaf or boat days", "Plan beach days near the rental", "Use Uber/99 or driver for complex routes"]
      },
      contact: {
        title: "How to contact James",
        body: "For the fastest help, contact James on WhatsApp. Send the city, neighborhood preference, dates, budget, number of guests, payment preference, and whether you need rental, tourism, transport, or relocation help. If the client speaks Portuguese, English, or Spanish, James Lennan AI can keep the conversation in that language.",
        checklist: ["WhatsApp: +55 44 99884-3639", "Instagram: @jameslennan", "Mention if you prefer English, Portuguese, or Spanish", "Send screenshots or links of any property you want to compare"]
      }
    }
  },
  pt: {
    starter: "Oi, eu sou o James Lennan AI. Pergunte sobre aluguel no Brasil, estadia tipo Airbnb, passeios no Rio, bairros de São Paulo, Uber/99, Pix, boleto, documentos, segurança ou como falar com o James. Vou responder com passos práticos.",
    thinking: "James Lennan AI está preparando uma resposta útil...",
    fallbackTitle: "Aqui está um bom ponto de partida",
    fallbackIntro: "Posso ajudar com aluguel, estadia curta, transporte, pagamentos, bairros, turismo e preparação do cliente no Brasil. Para deixar a resposta mais precisa, me diga cidade, datas, orçamento, número de hóspedes e se é turismo, mudança ou aluguel longo.",
    next: "Próximo passo: envie para o James no WhatsApp a cidade, orçamento, datas, número de hóspedes e bairro preferido para ele preparar uma lista.",
    topics: {
      rental: {
        title: "Aluguel e estadia tipo Airbnb",
        body: "Para aluguel ou estadia tipo Airbnb, primeiro defina se o cliente precisa de estadia curta, apartamento mobiliado mensal ou contrato mais longo. Estadias curtas devem priorizar check-in fácil, Wi-Fi, ar-condicionado, regras do prédio, taxa de limpeza, cancelamento e acesso a transporte. Aluguel mensal deve incluir contrato, caução, contas, condomínio e forma de pagamento: Pix, cartão, PayPal, checkout Stripe, Apple Pay, Google Pay, boleto ou transferência.",
        checklist: ["Confirme o endereço exato antes de pagar", "Peça fotos recentes ou vídeo do imóvel", "Confira Wi-Fi, ar-condicionado, lavanderia, elevador, vaga e portaria", "Confirme caução, limpeza, cancelamento e limite de hóspedes"]
      },
      neighborhoods: {
        title: "Comparação de bairros",
        body: "No Rio, cada bairro muda muito a rotina. Penha pode ter valor mais prático para vida local. Campo Grande oferece mais espaço e combina melhor com carro. Tijuca tem metrô e serviços tradicionais. Botafogo é bom para turistas por conectar praia, metrô, restaurantes e Pão de Açúcar. Barra é moderna e funciona para estadias longas. Ipanema e Leblon são áreas premium de praia. Em São Paulo, Jardins, Moema, Pinheiros, Vila Mariana e Bela Vista funcionam bem para trabalho, restaurantes, parques e acesso urbano.",
        checklist: ["Combine o bairro com a rotina diária", "Veja tempo de deslocamento no horário de pico", "Compare segurança, transporte, comida, farmácia e mercado", "Não escolha só pelas fotos"]
      },
      transport: {
        title: "Transporte no Brasil",
        body: "Clientes costumam comparar Uber, 99, moto, ônibus, metrô, aluguel de carro e motorista particular. Uber ou 99 é mais simples para aeroporto, noite, praia e primeira chegada. Moto pode ser rápida no trânsito, mas não serve para todo cliente. Ônibus e metrô são mais baratos e funcionam em algumas rotas. Carro ajuda em Barra, Campo Grande, casas de praia, rotina de família e locais longe do metrô. Motorista particular é melhor para chegada, retorno tarde e dias de passeio.",
        checklist: ["Use Uber/99 na primeira chegada", "Confira se o prédio tem vaga antes de alugar carro", "Use metrô quando a rota for direta", "Use motorista para passeios ou horários tarde"]
      },
      payments: {
        title: "Pagamentos e segurança",
        body: "No Brasil, opções comuns são Pix, cartão de crédito ou débito, boleto, transferência bancária e, em alguns casos, PayPal ou checkout Stripe. Stripe pode aceitar cartão, Apple Pay e Google Pay quando estiver conectado ao negócio. Pix é rápido para transferências locais, PayPal pode ajudar clientes internacionais e boleto aparece em serviços formais. Sempre confirme caução, cancelamento, limpeza, contrato, recibo e documentos antes de pagar.",
        checklist: ["Nunca pague antes de confirmar quem recebe", "Peça recibo ou confirmação da reserva", "Confirme reembolso por escrito", "Confirme se PayPal ou Stripe têm taxas", "Desconfie de preço muito baixo"]
      },
      tourism: {
        title: "Planejamento turístico no Rio",
        body: "Um bom plano no Rio precisa equilibrar atrações famosas e logística simples. Em 3 dias, um dia pode ter Cristo Redentor, Santa Teresa e jantar. Outro dia pode ser praia em Ipanema ou Leblon e Pão de Açúcar no pôr do sol. O terceiro pode ter Jardim Botânico, museus, galerias ou passeio de barco se o clima ajudar. Para família, coloque mais tempo de deslocamento e evite agenda apertada.",
        checklist: ["Reserve atrações principais cedo", "Veja o clima antes de Pão de Açúcar ou barco", "Planeje praia perto do imóvel", "Use Uber/99 ou motorista para rotas complexas"]
      },
      contact: {
        title: "Como falar com James",
        body: "Para ajuda mais rápida, fale com James pelo WhatsApp. Envie cidade, bairro desejado, datas, orçamento, número de hóspedes, forma de pagamento e se precisa de aluguel, turismo, transporte ou mudança. Se o cliente fala português, inglês ou espanhol, o James Lennan AI pode continuar no idioma preferido.",
        checklist: ["WhatsApp: +55 44 99884-3639", "Instagram: @jameslennan", "Avise se prefere português, inglês ou espanhol", "Envie prints ou links de imóveis para comparar"]
      }
    }
  },
  es: {
    starter: "Hola, soy James Lennan AI. Pregúntame sobre alquileres en Brasil, estadías tipo Airbnb, tours en Río, barrios de São Paulo, Uber/99, Pix, boleto, documentos, seguridad o cómo hablar con James. Responderé con pasos prácticos.",
    thinking: "James Lennan AI está preparando una respuesta útil...",
    fallbackTitle: "Aquí tienes un buen punto de partida",
    fallbackIntro: "Puedo ayudar con alquileres, estadías cortas, transporte, pagos, barrios, turismo y preparación del cliente en Brasil. Para hacerlo más preciso, dime ciudad, fechas, presupuesto, número de huéspedes y si es turismo, mudanza o alquiler largo.",
    next: "Siguiente paso: envía a James por WhatsApp la ciudad, presupuesto, fechas, número de huéspedes y barrio preferido para preparar una lista.",
    topics: {
      rental: {
        title: "Alquiler y estadía tipo Airbnb",
        body: "Para un alquiler o estadía tipo Airbnb, primero define si el cliente necesita una estadía corta, un apartamento amueblado mensual o un contrato más largo. Las estadías cortas deben priorizar check-in fácil, Wi-Fi, aire acondicionado, reglas del edificio, limpieza, cancelación y transporte. Para alquiler mensual, revisa contrato, depósito, servicios, condominio y pago: Pix, tarjeta, PayPal, checkout Stripe, Apple Pay, Google Pay, boleto o transferencia.",
        checklist: ["Confirma la dirección exacta antes de pagar", "Pide fotos recientes o video del inmueble", "Revisa Wi-Fi, aire acondicionado, lavandería, ascensor, parking y seguridad", "Confirma depósito, limpieza, cancelación y límite de huéspedes"]
      },
      neighborhoods: {
        title: "Comparación de barrios",
        body: "En Río, cada barrio cambia mucho la rutina. Penha puede tener valor práctico para vida local. Campo Grande ofrece más espacio y funciona mejor con coche. Tijuca tiene metro y servicios tradicionales. Botafogo es útil para turistas por conectar playa, metro, restaurantes y Pan de Azúcar. Barra es moderna y sirve para estadías largas. Ipanema y Leblon son zonas premium de playa. En São Paulo, Jardins, Moema, Pinheiros, Vila Mariana y Bela Vista son útiles para trabajo, restaurantes, parques y acceso urbano.",
        checklist: ["Relaciona el barrio con la rutina diaria", "Mira el tiempo de viaje en hora pico", "Compara seguridad, transporte, comida, farmacia y mercado", "No elijas solo por fotos"]
      },
      transport: {
        title: "Transporte en Brasil",
        body: "Los clientes suelen comparar Uber, 99, moto, bus, metro, alquiler de coche y conductor privado. Uber o 99 es más simple para aeropuerto, noche, playa y primera llegada. Moto puede ser rápida en tráfico, pero no sirve para todos. Bus y metro son más económicos y funcionan en algunas rutas. Coche ayuda en Barra, Campo Grande, casas de playa, rutinas familiares y lugares lejos del metro. Conductor privado es mejor para llegada, regreso tarde y días turísticos.",
        checklist: ["Usa Uber/99 en la primera llegada", "Confirma parking antes de alquilar coche", "Usa metro cuando la ruta sea directa", "Usa conductor para tours o horarios tarde"]
      },
      payments: {
        title: "Pagos y seguridad",
        body: "En Brasil, las opciones comunes son Pix, tarjeta de crédito o débito, boleto, transferencia bancaria y, en algunos casos, PayPal o checkout Stripe. Stripe puede aceptar tarjeta, Apple Pay y Google Pay cuando esté conectado al negocio. Pix es rápido para transferencias locales, PayPal puede ayudar a clientes internacionales y boleto aparece en servicios formales. Confirma depósito, cancelación, limpieza, contrato, recibo y documentos antes de pagar.",
        checklist: ["Nunca pagues antes de confirmar quién recibe", "Pide recibo o confirmación de reserva", "Confirma reembolso por escrito", "Confirma si PayPal o Stripe tienen tarifas", "Desconfía de precios demasiado bajos"]
      },
      tourism: {
        title: "Plan turístico en Río",
        body: "Un buen plan en Río debe equilibrar atracciones famosas y logística simple. En 3 días, un día puede tener Cristo Redentor, Santa Teresa y cena. Otro día puede ser playa en Ipanema o Leblon y Pan de Azúcar al atardecer. El tercero puede incluir Jardín Botánico, museos, galerías o paseo en barco si el clima ayuda. Para familias, deja más tiempo de transporte y evita una agenda demasiado llena.",
        checklist: ["Reserva atracciones principales temprano", "Mira el clima antes de Pan de Azúcar o barco", "Planifica playa cerca del inmueble", "Usa Uber/99 o conductor para rutas complejas"]
      },
      contact: {
        title: "Cómo hablar con James",
        body: "Para ayuda más rápida, habla con James por WhatsApp. Envía ciudad, barrio deseado, fechas, presupuesto, número de huéspedes, forma de pago y si necesitas alquiler, turismo, transporte o mudanza. Si el cliente habla español, portugués o inglés, James Lennan AI puede continuar en el idioma preferido.",
        checklist: ["WhatsApp: +55 44 99884-3639", "Instagram: @jameslennan", "Indica si prefieres español, portugués o inglés", "Envía capturas o links de inmuebles para comparar"]
      }
    }
  }
};

const intentKeywords = {
  rental: ["rent", "rental", "airbnb", "stay", "house", "apartment", "aluguel", "alugar", "estadia", "casa", "apartamento", "alquiler", "alquilar"],
  neighborhoods: ["penha", "campo grande", "tijuca", "botafogo", "barra", "ipanema", "leblon", "jardins", "moema", "pinheiros", "vila mariana", "bairro", "neighborhood", "barrio"],
  transport: ["uber", "99", "bus", "metro", "moto", "car", "ride", "transport", "ônibus", "onibus", "metrô", "carro", "transporte", "coche"],
  payments: ["pix", "card", "boleto", "payment", "pay", "deposit", "paypal", "stripe", "apple pay", "google pay", "cartão", "cartao", "pagamento", "pagar", "depósito", "deposito", "tarjeta", "pago"],
  tourism: ["tour", "tourist", "travel", "trip", "itinerary", "cristo", "sugarloaf", "passeio", "turismo", "viagem", "roteiro", "viaje"],
  contact: ["contact", "whatsapp", "instagram", "phone", "call", "james", "contato", "telefone", "ligar", "llamar"]
};

const languageHints = {
  pt: ["voce", "você", "aluguel", "alugar", "imovel", "imóvel", "segurança", "passeio", "brasil", "comprar", "ônibus", "cartão"],
  es: ["alquiler", "alquilar", "propiedad", "seguridad", "inversión", "comprar", "vender", "viaje", "español", "tarjeta"]
};

// =======================================
// CHATGPT-STYLE LOCAL CONCIERGE
// Builds richer multilingual guidance without a backend
// =======================================
export const initChatbot = () => {
  const chat = document.querySelector("[data-ai-chat]");
  const panel = document.querySelector("#ai-chat-panel");
  const messages = document.querySelector("[data-chat-messages]");
  const form = document.querySelector("[data-chat-form]");
  const input = document.querySelector("#ai-chat-input");
  const toggle = document.querySelector("[data-chat-toggle]");
  const languageSelects = document.querySelectorAll("[data-language-select], [data-chat-language]");
  if (!chat || !panel || !messages || !form || !input || !toggle) return;

  let activeLanguage = localStorage.getItem("lennan-language") || "en";

  const syncLanguage = (language) => {
    activeLanguage = language;
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    localStorage.setItem("lennan-language", language);
    document.dispatchEvent(new CustomEvent("james-language-change", { detail: { language } }));
    languageSelects.forEach((select) => {
      select.value = language;
    });
  };

  const detectLanguage = (text) => {
    const normalized = text.toLowerCase();
    if (languageHints.pt.some((word) => normalized.includes(word))) return "pt";
    if (languageHints.es.some((word) => normalized.includes(word))) return "es";
    return activeLanguage;
  };

  const detectIntents = (text) => {
    const normalized = text.toLowerCase();
    const intents = Object.entries(intentKeywords)
      .filter(([, keywords]) => keywords.some((keyword) => normalized.includes(keyword)))
      .map(([intent]) => intent);
    return intents.length ? intents : ["rental", "neighborhoods", "contact"];
  };

  const formatAnswer = (text, language) => {
    const config = content[language];
    const intents = detectIntents(text).slice(0, 4);
    const blocks = intents.map((intent) => {
      const topic = config.topics[intent];
      return `<section><h3>${topic.title}</h3><p>${topic.body}</p><ul>${topic.checklist.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
    });

    const intro = intents.length
      ? config.fallbackIntro
      : `${config.fallbackTitle}. ${config.fallbackIntro}`;

    return `<p>${intro}</p>${blocks.join("")}<p><strong>${config.next}</strong></p>`;
  };

  const setOpen = (isOpen) => {
    panel.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
    chat.classList.toggle("is-open", isOpen);
    if (isOpen) input.focus();
  };

  const addMessage = (contentHtml, owner = "bot") => {
    const bubble = document.createElement("div");
    bubble.className = `ai-chat__message ai-chat__message--${owner}`;
    bubble.innerHTML = contentHtml;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  };

  const addTyping = () => {
    const typing = document.createElement("div");
    typing.className = "ai-chat__message ai-chat__message--bot ai-chat__typing";
    typing.innerHTML = `<span></span><span></span><span></span>`;
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
    return typing;
  };

  const ask = (text) => {
    if (!text.trim()) return;
    const language = detectLanguage(text);
    syncLanguage(language);
    setOpen(true);
    addMessage(text.replace(/[<>&]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[character]), "user");
    const typing = addTyping();
    window.setTimeout(() => {
      typing.remove();
      addMessage(formatAnswer(text, language), "bot");
    }, 520);
  };

  languageSelects.forEach((select) => {
    select.addEventListener("change", () => {
      syncLanguage(select.value);
      addMessage(`<p>${content[activeLanguage].starter}</p>`);
    });
  });

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  document.querySelector("[data-chat-close]")?.addEventListener("click", () => setOpen(false));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ask(input.value);
    form.reset();
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  document.addEventListener("click", (event) => {
    const prompt = event.target.closest("[data-chat-prompt]")?.dataset.chatPrompt;
    if (prompt) ask(prompt);
  });

  syncLanguage(activeLanguage);
  addMessage(`<p>${content[activeLanguage].starter}</p>`);
};
