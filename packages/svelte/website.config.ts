export const seo = {
  title: "Neue Frisur? Gibt's bei uns!",
  description:
    "Wir schneiden dir die Harre! Aber mal so richtig! Komm vorbei und überzeug dich selbst.",
  canonical: "https://friseur.vercel.app",
  openGraph: {
    url: "https://friseur.vercel.app",
    title: "Neue Frisur? Gibt's bei uns!",
    description:
      "Wir schneiden dir die Harre! Aber mal so richtig! Komm vorbei und überzeug dich selbst.",
    images: [
      {
        url: "https://friseur.vercel.app/seo-thumbnail-small.png",
        width: 800,
        height: 418,
        alt: "Og Image Alt Small",
      },
      {
        url: "https://friseur.vercel.app/seo-thumbnail.png",
        width: 1012,
        height: 506,
        alt: "Og Image Alt",
      },
    ],
    site_name: "Friseur",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
export const UNIQUESELLINGPOINTS = [
	{
		headline: 'Digital',
		description:
			'Bei uns ist außer das Friseur-Handwerk alles digital. Von der Terminbuchung bis zur Bezahlung. So haben wir mehr Zeit für das wichtigste. Dich.',
		icon: 'RocketIcon'
	},
	{
		headline: 'Echte Beratung',
		description:
			'Bei uns gibts kein “Wie viel Millimeter sollen es denn sein?” Wir gehen auf dich ein und finden genau die richtige Frisur für dich.',
		icon: 'PersonIcon'
	},
	{
		headline: 'Friseur Handwerk',
		description:
			'Einmal gelernt, für immer beherscht? Nope. Unsere Friseure bilden sich ständig weiter. Immer auf der Suche das Handwerk zu meistern.',
		icon: 'BackpackIcon'
	},
	{
		headline: 'Kein Shishi',
		description:
			'Bei uns bekommst du genau das was du brauchst. Wir sind kein Wellness-Tempel der dir irgendwelche Cremes aufschatzen will.',
		icon: 'CrumpledPaperIcon'
	}
];

export const ABOUTUSPOINTS = [
	{
		headline: 'Die Bezahlung bei Friseuren ist Mist.',
		tag: 'Digital',
		description: [
			'Vor jedem Friseurbesuch noch mal das Kleingeld checken. Und Trinkeld via Kartenzahlung geben geht nicht. Oder erstmal anrufen ob es noch einen Termin gibt?',
			'Das liegt daran, weil die meisten Friseure gammlige Kassensysteme haben oder Abrechnungstools die keiner versteht.',
			'Bei uns alles kein Problem. Bezahlung via PayPal? Vorher oder direkt bei uns? Trinkgeld direkt drauf? Machen wir!'
		],
		bulletPoints: [
			'Bargeldlose Bezahlung, ob bei uns oder vorher.',
			'PayPal, Karte, Apple-/Google Pay.'
		]
	},
	{
		headline: 'Beratung sollte Ehrensache sein und nicht lästig.',
		tag: 'Echte Beratung',
		description: [
			'Bist du ein Mann? Dann kennst du die Frage sicher: “Wie viel Millimeter sollen es denn sein? Als Frau hattest du vielleicht schon mal das Problem: Im bekommst eine Frisur die für den Moment mal gut aussieht, sobald du aber Duschen gehst ist alles futsch.',
			'Das liegt daran, weil du oft gar nicht richtig beraten wirst.',
			'Unsere Fragenkatalog umfasst Dinge wie: Bist to total fancy oder magst du es eher minimalistisch? Wie viel Zeit nimmst du dir für deine Haare?'
		],
		bulletPoints: [
			'Individuelle Beratung um die passende Frisur zu finden.',
			'Wir merken uns deine Wünsche, sodass wir von Mal zu Mal besser und du glücklicher wirst.'
		]
	},
	{
		headline: 'Wir lernen nie aus um dir das beste Handwerk bieten zu können.',
		tag: 'Friseur Handwerk',
		description: [
			'Viele Friseure kennen aktuelle Trends oder sogar klassische Schnitte nicht.',
			'Das liegt daran, weil oft nicht genügend für die Weiterbildung der Friseure getan wird.',
			'Bei uns bekommt jeder die Chance sich individuell oder im Team weiterzubilden.'
		],
		bulletPoints: [
			'Top ausgebildete Freuseure die ihr Handwerk beherschen.',
			'Weiter- und Ausbildung gehört zu unseren täglichen Aufgaben.'
		]
	}
];
