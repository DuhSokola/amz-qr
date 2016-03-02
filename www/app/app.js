;(function () {
    'use strict';

    var deps = [
        'app.routes',
        'app.carResource',
        'pascalprecht.translate',
        'ngMaterial',
        'ngProgress',
        'ngSanitize',
        'ngCookies'
    ];

    var app = angular.module('app', deps);

    app.config(function ($translateProvider, $httpProvider) {

        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        $translateProvider.translations('DE', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Wählen Sie das gewünschte Model aus:",
            "VARIANTLIST_SELECTMODEL": "Wählen Sie die gewünschte Variante aus:",
            "IMAGEAREA_FROM": "Erhältlich ab",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Sonderzahlung:",
            "LEASINGCALC_DURATION": "Laufzeit:",
            "LEASINGCALC_MILAGE": "Jährliche Laufleistung:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Monate",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Aktuelle Leasingangebote",
            "LEASINGCALC_OFFER_TEXT": "<b>{{description}}</b> <br /> Gültig bis: <b>{{validTo}}</b> <br />Laufzeit: <b>{{runningTimeFrom}} - {{runningTimeTo}} Monate</b> <br /> Jährliche Laufleistung: <b>bis {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Berechnen",
            "LEASINGCALC_CONTACT": "Kontaktanfrage",
            "LEASINGCALC_BUTTON_BACK": "Zurück",
            "LEASINGCALC_MOTHLY_PAYMENT": "Monatliche Rate:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Zinssatz:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effektiv:",

            "LANDINGPAGE_LEASING": "Leasing berechnen",
            "LANDINGPAGE_TESTDRIVE": "Probefahrt",
            "LANDINGPAGE_CATALOG": "Katalog",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Zur Modelübersicht",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Ihre Daten",
            "CONTACT_LEGEND_CATALOG": "Katalogversand",
            "CONTACT_LEGEND_TESTDRIVE": "Probefahrt",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Datenschutzbestimmung",
            "CONTACT_MODELS": "Weitere Varianten",
            "CONTACT_SALUTATION_MR": "Herr",
            "CONTACT_SALUTATION_MRS": "Frau",
            "CONTACT_SALUTATION": "Anrede",
            "CONTACT_FIRSTNAME": "Vorname",
            "CONTACT_LASTNAME": "Name",
            "CONTACT_STREET": "Strasse",
            "CONTACT_STREET_NR": "Strassen Nr.",
            "CONTACT_ZIP": "PLZ",
            "CONTACT_CITY": "Ort",
            "CONTACT_TELEPHONE": "Telefon",
            "CONTACT_EMAIL": "Email",
            "CONTACT_CATALOG": "Katalog bestellen",
            "CONTACT_CATALOG_ELECTRONIC": "Elektronisch",
            "CONTACT_CATALOG_PRINTED": "Gedruckt",
            "CONTACT_TESTDRIVE": "Kontaktaufnahme für Probefahrt",
            "CONTACT_TESTDRIVE_EMAIL": "per Email",
            "CONTACT_TESTDRIVE_TELEFON": "per Telefon",
            "CONTACT_LEASING": "Kontaktaufnahme für Leasingsberatung",
            "CONTACT_LEASING_EMAIL": "per Email",
            "CONTACT_LEASING_TELEPHONE": "per Telefon",
            "CONTACT_NEWSLETTER": "Ich möchte Newsletter erhalten",
            "CONTACT_PRIVACY": "Ich bin mit den Datenschutzbestimmungen einverstanden",
            "CONTACT_BUTTON_SUBMIT": "Senden",
            "CONTACT_BUTTON_BACK": "Zurück",
            "CONTACT_ERROR_SALUTATION": "Anrede pflicht",
            "CONTACT_ERROR_FIRSTNAME": "Vorname pflicht",
            "CONTACT_ERROR_LASTNAME": "Name pflicht",
            "CONTACT_ERROR_STREET": "Strasse pflicht",
            "CONTACT_ERROR_STREET_NR": "Strassen Nummer pflicht",
            "CONTACT_ERROR_ZIP": "PLZ pflicht",
            "CONTACT_ERROR_CITY": "Ort pflicht",
            "CONTACT_ERROR_TELEPHONE": "Telefon pflicht",
            "CONTACT_ERROR_EMAIL": "Geben Sie valide Email ein",
            "CONTACT_ERROR_CATALOG": "Katalog pflicht",
            "CONTACT_ERROR_TESTDRIVE": "Probefahrt pflicht",
            "CONTACT_ERROR_LEASING": "Leasing pflicht",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter pflicht",
            "CONTACT_ERROR_PRIVACY": "Datenschutzbestimmung pflicht",

            "FOOTER_IMPRINT": "Impressum",
            "FOOTER_PRIVACY": "Nutzungsbedingungen",
            "FOOTER_CONDITION": "Datenschutzbestimmungen",
            "FOOTER_COPYRIGHT_VW": "© Volkswagen AG 2016",
            "FOOTER_COPYRIGHT_AUDI": "© Audi AG 2016",
            "FOOTER_COPYRIGHT_SKODA": "© Skoda AG 2016",
            "FOOTER_COPYRIGHT_SEAT": "© Seat AG 2016",
            "FOOTER_CONDITION_POPUP": "Ich bin damit einverstanden, dass meine personenbezogenen Daten zum Zwecke der Interessentenbefragung und Interessenteninformation (z.B. über Produkte, Dienstleistungen und Veranstaltungen " +
            "der AMAG Automobil- und Motoren AG und ihren Marken) bearbeitet werden. Weiter bin ich damit einverstanden, dass meine Daten der AMAG Automobil- und Motoren AG, Aarauerstrasse 20, " +
            "5116 Schinznach-Bad, deren Vertragspartner und/oder an einen autorisierten Dienstleister übermittelt werden. Schliesslich bin ich damit einverstanden, dass mir die AMAG Automobil- und Motoren AG " +
            "fernmeldetechnisch (z.B. per E-Mail) Informationen und Werbung zu Produkten, Dienstleistungen und Veranstaltungen ihrer Marken sendet. Die Daten werden ausschliesslich in Übereinstimmung mit den " +
            "schweizerischen Bestimmungen zum Datenschutz verwendet. Insbesondere erfolgt keine Weitergabe von Daten an unbefugte Dritte. " +
            "Bei Personen ausserhalb der Schweiz oder Fürstentum Lichtenstein werden die Daten an den Importeur der jeweiligen Marken des entsprechenden Landes für die gleichen Zwecke wie oben erwähnt weitergegeben.",

            "POPUP_SUBMIT": "Bestätigung",
            "POPUP_SUBMIT_TEXT": "Die Anfrage wurde erfolgreich gesendet",

            "LEASING_NO_SELECT": "Keine",

            "LEASING_HEADER_TEXT": "Leasing Rechner",

            "DESKTOP_BLOCK_TITLE": "Herzlich Willkommen!",
            "DESKTOP_BLOCK_TEXT": "Die Seite ist nur für die mobile Nutzung ausgelegt. Bitte öffnen sie diese Seite auf Ihrem mobile Gerät."
        });

        $translateProvider.translations('FR', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Sélectionnez le modèle souhaité:",
            "VARIANTLIST_SELECTMODEL": "Sélectionnez la variante souhaitée::",
            "IMAGEAREA_FROM": "Disponible à partir de",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Acompte spécial:",
            "LEASINGCALC_DURATION": "Durée contractuelle:",
            "LEASINGCALC_MILAGE": "Kilométrage annuel:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Mois",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Offres de leasing",
            "LEASINGCALC_OFFER_TEXT": "<b>{{description}}</b> <br /> Valable jusqu'au: <b>{{validTo}}</b> <br />Durée contractuelle: <b>{{runningTimeFrom}} - {{runningTimeTo}} mois</b> <br /> Kilométrage annuel: <b>jusqu'à {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calculer",
            "LEASINGCALC_CONTACT": "Demande de prise de contact",
            "LEASINGCALC_BUTTON_BACK": "Retourner",
            "LEASINGCALC_MOTHLY_PAYMENT": "Mensualité:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Taux d'intérêt:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Réel:",

            "LANDINGPAGE_LEASING": "Calculer le leasing",
            "LANDINGPAGE_TESTDRIVE": "Essai routier",
            "LANDINGPAGE_CATALOG": "Catalogue",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Aller à l'aperçu des modèles",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Vos données",
            "CONTACT_LEGEND_CATALOG": "Envoi du catalogue",
            "CONTACT_LEGEND_TESTDRIVE": "Essai routier",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Dispositions sur la protection des données",
            "CONTACT_MODELS": "Autres variantes",
            "CONTACT_SALUTATION_MR": "Monsieur",
            "CONTACT_SALUTATION_MRS": "Madame",
            "CONTACT_SALUTATION": "Civilité",
            "CONTACT_FIRSTNAME": "Prénom",
            "CONTACT_LASTNAME": "Nom",
            "CONTACT_STREET": "Rue",
            "CONTACT_STREET_NR": "Numéro",
            "CONTACT_ZIP": "NPA",
            "CONTACT_CITY": "Lieu",
            "CONTACT_TELEPHONE": "Téléphone",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Commande de catalogue",
            "CONTACT_CATALOG_ELECTRONIC": "Version numérique",
            "CONTACT_CATALOG_PRINTED": "Version imprimée",
            "CONTACT_TESTDRIVE": "Prise de contact pour l'essai routier",
            "CONTACT_TESTDRIVE_EMAIL": "par e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "par téléphone",
            "CONTACT_LEASING": "Prise de contact pour un conseil de leasing",
            "CONTACT_LEASING_EMAIL": "par e-mail",
            "CONTACT_LEASING_TELEPHONE": "par téléphone",
            "CONTACT_NEWSLETTER": "Je souhaite recevoir la newsletter",
            "CONTACT_PRIVACY": "J'accepte les dispositions de protection des données",
            "CONTACT_BUTTON_SUBMIT": "Envoyer",
            "CONTACT_BUTTON_BACK": "Retour",
            "CONTACT_ERROR_SALUTATION": "Civilité / obligatoire",
            "CONTACT_ERROR_FIRSTNAME": "Prénom obligatoire",
            "CONTACT_ERROR_LASTNAME": "Nom obligatoire",
            "CONTACT_ERROR_STREET": "Rue obligatoire",
            "CONTACT_ERROR_STREET_NR": "Numéro obligatoire",
            "CONTACT_ERROR_ZIP": "NPA obligatoire",
            "CONTACT_ERROR_CITY": "Lieu obligatoire",
            "CONTACT_ERROR_TELEPHONE": "Téléphone obligatoire",
            "CONTACT_ERROR_EMAIL": "Tapez une adresse e-mail valide",
            "CONTACT_ERROR_CATALOG": "Catalogue obligatoire",
            "CONTACT_ERROR_TESTDRIVE": "Essai routier obligatoire",
            "CONTACT_ERROR_LEASING": "Leasing obligatoire",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter obligatoire",
            "CONTACT_ERROR_PRIVACY": "Dispositions sur la protection des données obligatoires",

            "FOOTER_IMPRINT": "Empreinte",
            "FOOTER_PRIVACY": "Conditions d'utilisation",
            "FOOTER_CONDITION": "Dispositions sur la protection des données",
            "FOOTER_COPYRIGHT_VW": "© Volkswagen AG 2016",
            "FOOTER_COPYRIGHT_AUDI": "© Audi AG 2016",
            "FOOTER_COPYRIGHT_SKODA": "© Skoda AG 2016",
            "FOOTER_COPYRIGHT_SEAT": "© Seat AG 2016",

            "FOOTER_CONDITION_POPUP": "Je consens à ce que mes données personnelles soient utilisées à des fins de sondage et d’information de personnes intéressées (par exemple au sujet de produits, " +
            "de services ou d’événements d’AMAG Automobil- und Motoren AG et de ses marques). J’accepte également que mes données soient transmises à AMAG Automobil- und Motoren AG, Aarauerstrasse 20, " +
            "5116 Schinznach-Bad, à leurs partenaires contractuels et/ou à d’autres prestataires de services agréés. Enfin, je consens à ce qu’AMAG Automobil- und Motoren AG m’envoie par voie de " +
            "télécommunication (par exemple par e-mail) des informations et de la publicité concernant les produits, les services et les événements de ses marques. Les données seront utilisées exclusivement " +
            "en conformité avec les dispositions suisses relatives à la protection des données. Les données ne seront en aucun cas transmises à des tiers non autorisés. " +
            "Les données des personnes ne résidant pas en Suisse ou dans la Principauté du Liechtenstein seront communiquées à l’importateur du pays concerné aux fins susmentionnées.",

            "POPUP_SUBMIT": "Confirmation",
            "POPUP_SUBMIT_TEXT": "Nous avons reçu votre demande",

            "LEASING_NO_SELECT": "non",

            "LEASING_HEADER_TEXT": "Leasing calculatrice",

            "DESKTOP_BLOCK_TITLE": "Soyez les bienvenus!",
            "DESKTOP_BLOCK_TEXT": "Cette page n’est conçue que pour l‘utilisation mobile. Veuillez y accéder via votre appareil mobile."
        });

        $translateProvider.translations('IT', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Selezioni il modello desiderato:",
            "VARIANTLIST_SELECTMODEL": "Selezioni la variante desiderata:",
            "IMAGEAREA_FROM": "Disponibile da",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Anticipo:",
            "LEASINGCALC_DURATION": "Durata:",
            "LEASINGCALC_MILAGE": "Chilometraggio annuale:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Mesi",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Offerte leasing",
            "LEASINGCALC_OFFER_TEXT": "<b>{{description}}</b> <br /> Validità fino al: <b>{{validTo}}</b> <br />Durata: <b>{{runningTimeFrom}} - {{runningTimeTo}} mesi</b> <br /> Chilometraggio annuale: <b>fino a {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calcola",
            "LEASINGCALC_CONTACT": "Richiesta di contatto",
            "LEASINGCALC_BUTTON_BACK": "Indietro",
            "LEASINGCALC_MOTHLY_PAYMENT": "Rata mensile:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Tasso d'interesse:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominale:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effettivo:",

            "LANDINGPAGE_LEASING": "Calcola leasing",
            "LANDINGPAGE_TESTDRIVE": "Giro di prova",
            "LANDINGPAGE_CATALOG": "Catalogo",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Vai alla panoramica dei modelli",

            "CONTACT_LEGEND_CUSTOMER_DATA": "I suoi dati",
            "CONTACT_LEGEND_CATALOG": "Spedizione catalogo",
            "CONTACT_LEGEND_TESTDRIVE": "Giro di prova",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Disposizione sulla protezione dei dati ",
            "CONTACT_MODELS": "Altre varianti",
            "CONTACT_SALUTATION_MR": "Signor",
            "CONTACT_SALUTATION_MRS": "Signora",
            "CONTACT_SALUTATION": "Appellativo",
            "CONTACT_FIRSTNAME": "Nome",
            "CONTACT_LASTNAME": "Cognome",
            "CONTACT_STREET": "Via",
            "CONTACT_STREET_NR": "Via numero",
            "CONTACT_ZIP": "NPA",
            "CONTACT_CITY": "Località ",
            "CONTACT_TELEPHONE": "Telefono",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Ordina catalogo",
            "CONTACT_CATALOG_ELECTRONIC": "Versione elettronica",
            "CONTACT_CATALOG_PRINTED": "Versione stampata",
            "CONTACT_TESTDRIVE": "Contatto per giro di prova",
            "CONTACT_TESTDRIVE_EMAIL": "per e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "per telefono",
            "CONTACT_LEASING": "Contatto per consulenza leasing",
            "CONTACT_LEASING_EMAIL": "per e-mail",
            "CONTACT_LEASING_TELEPHONE": "per telefono",
            "CONTACT_NEWSLETTER": "Desidero ricevere la newsletter",
            "CONTACT_PRIVACY": "Concordo con le disposizioni sulla protezione dei dati",
            "CONTACT_BUTTON_SUBMIT": "Inviare",
            "CONTACT_BUTTON_BACK": "Indietro",
            "CONTACT_ERROR_SALUTATION": "Appellativo obbligatorio ",
            "CONTACT_ERROR_FIRSTNAME": "Nome obbligatorio",
            "CONTACT_ERROR_LASTNAME": "Cognome obbligatorio",
            "CONTACT_ERROR_STREET": "Via obbligatorio",
            "CONTACT_ERROR_STREET_NR": "Numero obbligatorio",
            "CONTACT_ERROR_ZIP": "NPA obbligatorio",
            "CONTACT_ERROR_CITY": "Località obbligatorio",
            "CONTACT_ERROR_TELEPHONE": "Telefono obbligatorio",
            "CONTACT_ERROR_EMAIL": "Inserire un'e-mail valida",
            "CONTACT_ERROR_CATALOG": "Catalogo obbligatorio",
            "CONTACT_ERROR_TESTDRIVE": "Giro di prova obbligatorio",
            "CONTACT_ERROR_LEASING": "Leasing obbligatorio",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter obbligatorio",
            "CONTACT_ERROR_PRIVACY": "Disposizione sulla protezione dei dati obbligatorio",

            "FOOTER_IMPRINT": "Informazioni Legali",
            "FOOTER_PRIVACY": "Condizioni d'uso",
            "FOOTER_CONDITION": "Disposizioni in materia di protezione dei dati",
            "FOOTER_COPYRIGHT_VW": "© Volkswagen AG 2016",
            "FOOTER_COPYRIGHT_AUDI": "© Audi AG 2016",
            "FOOTER_COPYRIGHT_SKODA": "© Skoda AG 2016",
            "FOOTER_COPYRIGHT_SEAT": "© Seat AG 2016",

            "FOOTER_CONDITION_POPUP": "Accetto che i miei dati personali vengano elaborati per fini di sondaggio e informazione degli interessati (ad esempio a proposito di prodotti, servizi " +
            "ed eventi di AMAG Automobil- und Motoren AG e dei suoi marchi). Inoltre, accetto che i miei dati personali siano trasmessi ad AMAG Automobil- und Motoren AG, Aarauerstrasse 20, " +
            "5116 Schinznach-Bad, ai suoi partner contrattuali e/o a un prestatore di servizi autorizzato. Infine accetto che AMAG Automobil- und Motoren AG mi invii tramite una tecnica di " +
            "telecomunicazione (ad esempio per e-mail) informazioni e pubblicità su prodotti, servizi ed eventi dei suoi marchi. I dati sono utilizzati esclusivamente in conformità con le " +
            "disposizioni svizzere in materia di protezione dei dati. In particolare, i dati non saranno inoltrati a terzi non autorizzati. " +
            "I dati personali di coloro che non risiedono né in Svizzera né nel Principato del Liechtenstein saranno trasmessi all’importatore del relativo paese allo stesso scopo sopra menzionato.",

            "POPUP_SUBMIT": "Conferma",
            "POPUP_SUBMIT_TEXT": "La sua richiesta è stata ricevuta con successo",

            "LEASING_NO_SELECT": "no",

            "LEASING_HEADER_TEXT": "Leasing calcolatrice",

            "DESKTOP_BLOCK_TITLE": "Benvenuti!",
            "DESKTOP_BLOCK_TEXT": "La pagina è predisposta esclusivamente per la consultazione con dispositivi mobili. La preghiamo di aprire questa pagina sul suo dispositivo mobile."
        });

        $translateProvider.translations('EN', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Select your required model:",
            "VARIANTLIST_SELECTMODEL": "Select your required variant:",
            "IMAGEAREA_FROM": "Available from",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Special bonus:",
            "LEASINGCALC_DURATION": "Term:",
            "LEASINGCALC_MILAGE": "Annual mileage:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Months",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Leasing offering",
            "LEASINGCALC_OFFER_TEXT": "<b>{{description}}</b> <br /> Valid until: <b>{{validTo}}</b> <br />Term: <b>{{runningTimeFrom}} - {{runningTimeTo}} months</b> <br /> Annual mileage: <b> up to {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calculate",
            "LEASINGCALC_CONTACT": "Contact request",
            "LEASINGCALC_BUTTON_BACK": "Back",
            "LEASINGCALC_MOTHLY_PAYMENT": "Monthly installment:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Interest rate:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal rate:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effective rate:",

            "LANDINGPAGE_LEASING": "Calculate leasing",
            "LANDINGPAGE_TESTDRIVE": "Test drive",
            "LANDINGPAGE_CATALOG": "Catalogue",
            "LANDINGPAGE_BACK_TO_MODELLIST": "To overview of models",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Your data",
            "CONTACT_LEGEND_CATALOG": "Dispatch catalogue",
            "CONTACT_LEGEND_TESTDRIVE": "Test drive",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Data protection provisions",
            "CONTACT_MODELS": "Other variants",
            "CONTACT_SALUTATION_MR": "Mr",
            "CONTACT_SALUTATION_MRS": "Ms",
            "CONTACT_SALUTATION": "Title",
            "CONTACT_FIRSTNAME": "First name",
            "CONTACT_LASTNAME": "Last name",
            "CONTACT_STREET": "Street",
            "CONTACT_STREET_NR": "Street no.",
            "CONTACT_ZIP": "Postcode",
            "CONTACT_CITY": "Town/City",
            "CONTACT_TELEPHONE": "Telephone",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Order catalogue",
            "CONTACT_CATALOG_ELECTRONIC": "Electronic",
            "CONTACT_CATALOG_PRINTED": "Printed",
            "CONTACT_TESTDRIVE": "Contact for test drive",
            "CONTACT_TESTDRIVE_EMAIL": "by e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "by telephone",
            "CONTACT_LEASING": "Contact for leasing consultation",
            "CONTACT_LEASING_EMAIL": "by e-mail",
            "CONTACT_LEASING_TELEPHONE": "by telephone",
            "CONTACT_NEWSLETTER": "I would like to receive the newsletter",
            "CONTACT_PRIVACY": "I agree to the data protection provisions",
            "CONTACT_BUTTON_SUBMIT": "Send",
            "CONTACT_BUTTON_BACK": "Back",
            "CONTACT_ERROR_SALUTATION": "Title (mandatory) ",
            "CONTACT_ERROR_FIRSTNAME": "First name (mandatory)",
            "CONTACT_ERROR_LASTNAME": "Last name (mandatory)",
            "CONTACT_ERROR_STREET": "Street (mandatory)",
            "CONTACT_ERROR_STREET_NR": "Street number (mandatory)",
            "CONTACT_ERROR_ZIP": "Postcode (mandatory)",
            "CONTACT_ERROR_CITY": "Town/City (mandatory)",
            "CONTACT_ERROR_TELEPHONE": "Telephone (mandatory)",
            "CONTACT_ERROR_EMAIL": "Enter a valid e-mail address",
            "CONTACT_ERROR_CATALOG": "Catalogue (mandatory)",
            "CONTACT_ERROR_TESTDRIVE": "Test drive (mandatory)",
            "CONTACT_ERROR_LEASING": "Leasing (mandatory)",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter (mandatory)",
            "CONTACT_ERROR_PRIVACY": "Data protection provisions (mandatory)",

            "FOOTER_IMPRINT": "Imprint",
            "FOOTER_PRIVACY": "Terms of Use",
            "FOOTER_CONDITION": "Privacy Policy",
            "FOOTER_COPYRIGHT_VW": "© Volkswagen AG 2016",
            "FOOTER_COPYRIGHT_AUDI": "© Audi AG 2016",
            "FOOTER_COPYRIGHT_SKODA": "© Skoda AG 2016",
            "FOOTER_COPYRIGHT_SEAT": "© Seat AG 2016",

            "FOOTER_CONDITION_POPUP": "I agree that my personal data may be used for the purposes of conducting surveys of and collecting information from " +
            "interested parties (e.g. regarding products, services and events of AMAG Automobil- und Motoren AG and its brands). Furthermore, I agree that " +
            "my data may be transferred to AMAG Automobil- und Motoren AG, Aarauerstrasse 20, 5116 Schinznach-Bad, Switzerland, its contractual partners and/or " +
            "authorised service providers. Finally, I give permission for AMAG Automobil- und Motoren AG to contact me (e.g. via e-mail) with information and " +
            "advertising about products, services and events pertaining to its brands. This data will be used solely in accordance with Swiss data protection legislation. " +
            "In particular, this data will at no time be transferred to unauthorised third parties. In the case of persons resident outside Switzerland or the Principality " +
            "of Liechtenstein, personal data will be transferred to the importer based in the relevant country, and said data will be used for the same purposes as outlined above.",

            "POPUP_SUBMIT": "Confirmation",
            "POPUP_SUBMIT_TEXT": "The request has been successfully sent.",

            "LEASING_NO_SELECT": "no promotion",

            "LEASING_HEADER_TEXT": "Leasing Calculator",

            "DESKTOP_BLOCK_TITLE": "Welcome!",
            "DESKTOP_BLOCK_TEXT": "This site is designed for mobile use only. Please open this site on your mobile device."

    });

        $translateProvider.preferredLanguage('EN');

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        /*$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
         $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';*/
        $httpProvider.defaults.useXDomain = true;

    });

    app.run(function ($rootScope) {
        $rootScope.selectedCSSFile = 'volkswagen';

        $rootScope.carsApi = 'https://www.leadcollector.amag.ch/readAllModelVariants';

        $rootScope.leasingApi = 'https://www.leadcollector.amag.ch/leasingCalcStatisticModule/leasingCalcWithStatistic';
        $rootScope.leasingPromotionApi = 'https://www.leadcollector.amag.ch/leasingCalcStatisticModule/leasingPromotions';

        $rootScope.global = {};
        $rootScope.global.languages = ['EN', 'DE', 'FR', 'IT'];
        $rootScope.global.campaign = 'autosalon_genf_2016_qr';
        $rootScope.global.data = {};
        $rootScope.global.params = {};

    });

    app.controller('mainCtrl', ['$scope', '$rootScope', 'CarResource', 'ngProgressFactory', 'blockUI', 'CarDataReader', 'LeasingPromotionDataResource', '$state', '$sanitize',
        function ($scope, $rootScope, CarResource, ngProgressFactory, blockUI, CarDataReader, LeasingPromotionDataResource) {

            if (window.location.href) {
                /*Workaround REDIRECTS*/
                /*if (window.location.href == 'https://qr.volkswagen.ch/1wkO' || window.location.href == 'http://qr.volkswagen.ch/1wkO') {
                    window.location.href = 'http://q-r.to/1wkO'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/1x3M' || window.location.href == 'http://qr.volkswagen.ch/1x3M') {
                    window.location.href = 'http://q-r.to/1x3M'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/23md' || window.location.href == 'http://qr.volkswagen.ch/23md') {
                    window.location.href = 'http://q-r.to/23md'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/1x2x' || window.location.href == 'http://qr.volkswagen.ch/1x2x') {
                    window.location.href = 'http://q-r.to/1x2x'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/1xrG' || window.location.href == 'http://qr.volkswagen.ch/1xrG') {
                    window.location.href = 'http://q-r.to/1xrG'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/2D5i' || window.location.href == 'http://qr.volkswagen.ch/2D5i') {
                    window.location.href = 'http://q-r.to/2D5i'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/1x3B' || window.location.href == 'http://qr.volkswagen.ch/1x3B') {
                    window.location.href = 'http://q-r.to/1x3B'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/20bA' || window.location.href == 'http://qr.volkswagen.ch/20bA') {
                    window.location.href = 'http://q-r.to/20bA'
                }
                if (window.location.href == 'https://qr.volkswagen.ch/2GTo' || window.location.href == 'http://qr.volkswagen.ch/2GTo') {
                    window.location.href = 'http://q-r.to/2GTo'
                }*/

                /*WORKAROUND TO BRANDS*/
                if (window.location.href == 'https://qr.volkswagen.ch/') {
                    console.log("ROUTE TO VW");
                    window.location.href = 'https://qr.volkswagen.ch/#/modelList/vw'
                }
                if (window.location.href == 'https://qr.skoda.ch/') {
                    console.log("ROUTE TO SKODA");
                    window.location.href = 'https://qr.skoda.ch/#/modelList/skoda'
                }
                if (window.location.href == 'https://qr.audi.ch/') {
                    console.log("ROUTE TO AUDI");
                    window.location.href = 'https://qr.audi.ch/#/modelList/audi'
                }
                if (window.location.href == 'https://qr.seat.ch/') {
                    console.log("ROUTE TO SEAT");
                    window.location.href = 'https://qr.seat.ch/#/modelList/seat'
                }
                if (window.location.href == 'https://qr.vw-nutzfahrzeuge.ch/') {
                    console.log("ROUTE TO VWNF");
                    window.location.href = 'https://qr.vw-nutzfahrzeuge.ch/#/modelList/vwnf'
                }


            }

            $rootScope.toggleDesktopOverlay = function () {
                $('.desktop-overlay').css('display', 'none');
            };
            $rootScope.toggleNavi = function () {
                $('.header-wrapper').toggleClass('active');
            };
            $rootScope.openPopup = function () {
                $('.info-popup').addClass('active');
            };
            $rootScope.openPopupImprint = function () {
                $('#popup_imprint').addClass('active');
            };
            $rootScope.openPopupPrivacy = function () {
                $('#popup_privacy').addClass('active');
            };
            $rootScope.openPopupConditions = function () {
                $('#popup_conditions').addClass('active');
            };
            $rootScope.closePopup = function () {
                $('.info-popup').removeClass('active');
            };

            $rootScope.$watch('global.params.selectedBrand', function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.progressbar = ngProgressFactory.createInstance();
                    $scope.progressbar.start();
                    blockUI.start();
                    CarResource.getByBrand($rootScope.global.params.selectedBrand, function (response) {
                            $rootScope.global.params.allModels = response.models;
                            CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                            LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                                $rootScope.global.params.leasingPromotions = res.data;
                                //console.log($rootScope.global.params.leasingPromotions);
                                //console.log($rootScope.global.params.selectedModelVariantObj);
                                $scope.progressbar.complete();
                                blockUI.stop();
                            }, function (data) {
                                console.log('ERROR');
                                $scope.progressbar.complete();
                                blockUI.stop();
                            });
                            $scope.progressbar.complete();
                            blockUI.stop();
                        },
                        function (error) {
                            console.log('ERROR');
                            $scope.progressbar.complete();
                            blockUI.stop();
                        });
                }
            }, true);

            $rootScope.$watch('global.params.selectedModel', function () {
                if ($rootScope.global.params.allModels) {
                    CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                    LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].id.substring(0, 5) == '0001_') {
                                res.data.splice(i, 1);
                                i--;
                            }
                        }
                        $rootScope.global.params.leasingPromotions = res.data;
                    }, function (data) {
                        console.log('ERROR LEASING PROMOTIONS');
                    });
                }
            });

            $rootScope.$watch('global.params.selectedModelVariant', function () {
                if ($rootScope.global.params.allModels && $rootScope.global.params.selectedModel && $rootScope.global.params.selectedModelVariant) {
                    CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                    LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].id.substring(0, 5) == '0001_') {
                                res.data.splice(i, 1);
                                i--;
                            }
                        }
                        $rootScope.global.params.leasingPromotions = res.data;
                    }, function (data) {
                        console.log('ERROR LEASING PROMOTIONS');
                    });
                }
            });

            $rootScope.$on('$translateChangeSuccess', function () {
                var progressbar = ngProgressFactory.createInstance();
                progressbar.start();
                blockUI.start();
                LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                    $rootScope.global.params.leasingPromotions = res.data;
                    console.log($rootScope.global.params.leasingPromotions);
                    progressbar.complete();
                    blockUI.stop();
                }, function (data) {
                    console.log('ERROR');
                    progressbar.complete();
                    blockUI.stop();
                });
                progressbar.complete();
                blockUI.stop();
            });

            $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
                $rootScope.previousState = from.name;
                $rootScope.currentState = to.name;
            });

            $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
                if (toParams.brand) {
                    if (toParams.brand.toLowerCase() === 'vw') {
                        $rootScope.selectedCSSFile = 'volkswagen';
                    } else if (toParams.brand.toLowerCase() === 'audi') {
                        $rootScope.selectedCSSFile = 'audi';
                    } else if (toParams.brand.toLowerCase() === 'skoda') {
                        $rootScope.selectedCSSFile = 'skoda';
                    } else if (toParams.brand.toLowerCase() === 'seat') {
                        $rootScope.selectedCSSFile = 'seat';
                    } else if (toParams.brand.toLowerCase() === 'vwnf') {
                        $rootScope.selectedCSSFile = 'volkswagen';
                    } else {
                        $rootScope.selectedCSSFile = 'volkswagen';
                    }
                }
            });

        }]);

}());
