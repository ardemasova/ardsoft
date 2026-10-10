/* ArdSoft Solutions — Legal notice, Privacy policy, Cookie policy (EN/ES/FR/DE/RU)
   Placeholders like {legalName} are filled from COMPANY in i18n.js. */
const LEGAL = {
en: {
upd: "Last updated: {updated}",
legal: `<h2>Legal notice</h2><p class="upd">{UPD}</p>
<h3>1. Website owner</h3>
<p>In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of the website <b>{domain}</b> is:</p>
<dl><dt>Owner</dt><dd>{legalName} (trading as {brand})</dd><dt>Tax ID (NIF/CIF)</dt><dd>{taxId}</dd><dt>Address</dt><dd>{address}</dd><dt>E-mail</dt><dd>{email}</dd><dt>Registry details</dt><dd>{registry}</dd></dl>
<h3>2. Purpose</h3><p>This website provides information about the services of {brand} and allows visitors to contact us.</p>
<h3>3. Terms of use</h3><p>By using this website you agree to use it lawfully and in good faith. We make reasonable efforts to keep the information accurate and the website available, but we do not guarantee the absence of errors or interruptions and are not liable for damages arising from the use of the website, except where the law provides otherwise. We may change the content of the website at any time.</p>
<h3>4. Intellectual and industrial property</h3><p>All content of this website — texts, logo, graphics, design and source code — belongs to {legalName} or is used with permission. Reproduction, distribution or modification without prior written consent is prohibited.</p>
<h3>5. External links</h3><p>This website contains links to third-party websites (for example, LinkedIn). We are not responsible for their content or privacy practices.</p>
<h3>6. Applicable law and jurisdiction</h3><p>This legal notice is governed by Spanish law. Any dispute shall be submitted to the courts of Barcelona, unless consumer protection rules establish a different jurisdiction.</p>
<h3>7. Language versions</h3><p>This page is available in several languages for convenience. In case of discrepancy, the Spanish version prevails.</p>`,
privacy: `<h2>Privacy policy</h2><p class="upd">{UPD}</p>
<h3>1. Data controller</h3>
<dl><dt>Controller</dt><dd>{legalName}</dd><dt>Tax ID</dt><dd>{taxId}</dd><dt>Address</dt><dd>{address}</dd><dt>E-mail</dt><dd>{email}</dd></dl>
<h3>2. What data we process</h3><ul>
<li><b>Contact form:</b> name, e-mail, company (optional), area of interest, your message, the language of the page and the time you gave consent.</li>
<li><b>Technical data:</b> when you visit the website, our hosting provider automatically processes your IP address, browser type and date/time of access in server logs to deliver the website and keep it secure.</li></ul>
<p>Please do not include special categories of personal data (e.g. health data) in your message.</p>
<h3>3. Purposes and legal basis</h3><ul>
<li>Answering your request and preparing a possible offer — your consent (Art. 6(1)(a) GDPR) and steps taken at your request before entering into a contract (Art. 6(1)(b) GDPR).</li>
<li>Operating and protecting the website — our legitimate interest in a secure, working website (Art. 6(1)(f) GDPR).</li></ul>
<p>We do not use your data for automated decision-making or profiling, and we do not send marketing communications without your separate consent.</p>
<h3>4. How long we keep data</h3><p>We keep request data for as long as necessary to handle your request and at most 12 months after our last communication, unless a contractual relationship arises — in that case, for the duration of the relationship and the periods required by law (e.g. tax and commercial obligations). Server logs are kept by the hosting provider for a limited period according to its policies.</p>
<h3>5. Recipients and service providers</h3><p>We do not sell or transfer your data to third parties. We use the following providers who process data on our behalf:</p><ul>
<li><b>Web3Forms</b> — delivers the contact form to our mailbox.</li>
<li><b>Google (Gmail)</b> — e-mail service where requests are received.</li>
<li><b>GitHub, Inc. (GitHub Pages)</b> — website hosting.</li></ul>
<p>Some of these providers may process data outside the European Economic Area (for example, in the USA). In such cases, transfers are based on an adequacy decision of the European Commission (such as the EU–US Data Privacy Framework) or on Standard Contractual Clauses. Data may also be disclosed to public authorities where required by law.</p>
<h3>6. Your rights</h3><p>You can request access to, rectification or erasure of your data, restriction of or objection to processing, and data portability, and you can withdraw your consent at any time without affecting the lawfulness of prior processing. Send your request to <b>{email}</b>. We may ask you to verify your identity.</p>
<p>If you believe your rights have been infringed, you can lodge a complaint with the Spanish Data Protection Agency (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) or another EU supervisory authority.</p>
<h3>7. Security</h3><p>The website is served over HTTPS and access to received requests is limited to the persons who need it to answer you.</p>
<h3>8. Minors</h3><p>This website is intended for businesses and is not directed at persons under 14 years of age.</p>
<h3>9. Changes</h3><p>We may update this policy. The current version is always available on this page.</p>`,
cookies: `<h2>Cookie policy</h2><p class="upd">{UPD}</p>
<h3>1. Do we use cookies?</h3><p>No. This website does not use cookies for analytics, advertising or tracking, and does not load third-party trackers. Fonts and images are served from our own domain.</p>
<h3>2. Local storage</h3><p>When you choose a language, it is saved in your browser's local storage (key <code>ardsoft_lang</code>) so that the site opens in the same language next time. This is strictly necessary for a function you explicitly requested and is therefore exempt from consent under Article 22.2 LSSI-CE. It is not used to identify or track you.</p>
<h3>3. How to delete it</h3><p>You can delete local storage at any time in your browser settings (site data). The site will then simply open in the default language.</p>
<h3>4. Changes</h3><p>If we ever introduce analytics or other non-essential cookies, we will ask for your consent beforehand and update this policy.</p>`
},

es: {
upd: "Última actualización: {updated}",
legal: `<h2>Aviso legal</h2><p class="upd">{UPD}</p>
<h3>1. Titular del sitio web</h3>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), el titular del sitio web <b>{domain}</b> es:</p>
<dl><dt>Titular</dt><dd>{legalName} (nombre comercial {brand})</dd><dt>NIF/CIF</dt><dd>{taxId}</dd><dt>Domicilio</dt><dd>{address}</dd><dt>Correo electrónico</dt><dd>{email}</dd><dt>Datos registrales</dt><dd>{registry}</dd></dl>
<h3>2. Objeto</h3><p>Este sitio web ofrece información sobre los servicios de {brand} y permite a los visitantes ponerse en contacto con nosotros.</p>
<h3>3. Condiciones de uso</h3><p>Al utilizar este sitio web te comprometes a hacerlo de forma lícita y de buena fe. Hacemos esfuerzos razonables para mantener la información actualizada y el sitio disponible, pero no garantizamos la ausencia de errores o interrupciones ni respondemos de los daños derivados de su uso, salvo en los casos previstos por la ley. Podemos modificar los contenidos en cualquier momento.</p>
<h3>4. Propiedad intelectual e industrial</h3><p>Todos los contenidos del sitio — textos, logotipo, gráficos, diseño y código fuente — pertenecen a {legalName} o se utilizan con autorización. Queda prohibida su reproducción, distribución o modificación sin consentimiento previo por escrito.</p>
<h3>5. Enlaces externos</h3><p>Este sitio contiene enlaces a sitios de terceros (por ejemplo, LinkedIn). No somos responsables de su contenido ni de sus prácticas de privacidad.</p>
<h3>6. Legislación aplicable y jurisdicción</h3><p>El presente aviso legal se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales de Barcelona, salvo que la normativa de protección de consumidores establezca otro fuero.</p>
<h3>7. Versiones lingüísticas</h3><p>Esta página está disponible en varios idiomas por comodidad. En caso de discrepancia, prevalecerá la versión en español.</p>`,
privacy: `<h2>Política de privacidad</h2><p class="upd">{UPD}</p>
<h3>1. Responsable del tratamiento</h3>
<dl><dt>Responsable</dt><dd>{legalName}</dd><dt>NIF/CIF</dt><dd>{taxId}</dd><dt>Domicilio</dt><dd>{address}</dd><dt>Correo electrónico</dt><dd>{email}</dd></dl>
<h3>2. Qué datos tratamos</h3><ul>
<li><b>Formulario de contacto:</b> nombre, correo electrónico, empresa (opcional), área de interés, tu mensaje, el idioma de la página y el momento en que diste tu consentimiento.</li>
<li><b>Datos técnicos:</b> al visitar el sitio, nuestro proveedor de alojamiento trata automáticamente tu dirección IP, tipo de navegador y fecha/hora de acceso en los registros del servidor para servir la web y mantenerla segura.</li></ul>
<p>Te pedimos que no incluyas categorías especiales de datos (por ejemplo, datos de salud) en tu mensaje.</p>
<h3>3. Finalidades y base jurídica</h3><ul>
<li>Responder a tu solicitud y preparar una posible oferta — tu consentimiento (art. 6.1.a RGPD) y la aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD).</li>
<li>Funcionamiento y protección del sitio web — nuestro interés legítimo en una web segura y operativa (art. 6.1.f RGPD).</li></ul>
<p>No tomamos decisiones automatizadas ni elaboramos perfiles, y no enviamos comunicaciones comerciales sin tu consentimiento específico.</p>
<h3>4. Plazo de conservación</h3><p>Conservamos los datos de la solicitud el tiempo necesario para atenderla y, como máximo, 12 meses desde la última comunicación, salvo que surja una relación contractual; en ese caso, durante la relación y los plazos exigidos por la ley (por ejemplo, obligaciones fiscales y mercantiles). Los registros del servidor los conserva el proveedor de alojamiento durante un periodo limitado conforme a sus políticas.</p>
<h3>5. Destinatarios y encargados del tratamiento</h3><p>No vendemos ni cedemos tus datos a terceros. Utilizamos los siguientes proveedores que tratan datos por nuestra cuenta:</p><ul>
<li><b>Web3Forms</b> — envío del formulario de contacto a nuestro buzón.</li>
<li><b>Google (Gmail)</b> — servicio de correo en el que recibimos las solicitudes.</li>
<li><b>GitHub, Inc. (GitHub Pages)</b> — alojamiento del sitio web.</li></ul>
<p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo (por ejemplo, en EE. UU.). En tal caso, las transferencias se basan en una decisión de adecuación de la Comisión Europea (como el Marco de Privacidad de Datos UE-EE. UU.) o en Cláusulas Contractuales Tipo. Los datos también podrán comunicarse a las autoridades cuando lo exija la ley.</p>
<h3>6. Tus derechos</h3><p>Puedes ejercer los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad, así como retirar tu consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo. Envía tu solicitud a <b>{email}</b>. Podremos pedirte que acredites tu identidad.</p>
<p>Si consideras que tus derechos no han sido respetados, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) u otra autoridad de control de la UE.</p>
<h3>7. Seguridad</h3><p>El sitio se sirve mediante HTTPS y el acceso a las solicitudes recibidas se limita a las personas que lo necesitan para responderte.</p>
<h3>8. Menores</h3><p>Este sitio está dirigido a empresas y no a personas menores de 14 años.</p>
<h3>9. Cambios</h3><p>Podemos actualizar esta política. La versión vigente estará siempre disponible en esta página.</p>`,
cookies: `<h2>Política de cookies</h2><p class="upd">{UPD}</p>
<h3>1. ¿Utilizamos cookies?</h3><p>No. Este sitio no utiliza cookies analíticas, publicitarias ni de seguimiento, ni carga rastreadores de terceros. Las fuentes y las imágenes se sirven desde nuestro propio dominio.</p>
<h3>2. Almacenamiento local</h3><p>Cuando eliges un idioma, se guarda en el almacenamiento local de tu navegador (clave <code>ardsoft_lang</code>) para que la web se abra en el mismo idioma la próxima vez. Es estrictamente necesario para una función que has solicitado expresamente y, por tanto, está exento de consentimiento conforme al artículo 22.2 de la LSSI-CE. No se utiliza para identificarte ni hacer seguimiento.</p>
<h3>3. Cómo eliminarlo</h3><p>Puedes borrar el almacenamiento local en cualquier momento desde la configuración de tu navegador (datos de sitios). La web se abrirá entonces en el idioma predeterminado.</p>
<h3>4. Cambios</h3><p>Si en el futuro incorporamos analítica u otras cookies no esenciales, te pediremos el consentimiento previamente y actualizaremos esta política.</p>`
},

fr: {
upd: "Dernière mise à jour : {updated}",
legal: `<h2>Mentions légales</h2><p class="upd">{UPD}</p>
<h3>1. Éditeur du site</h3>
<p>Conformément à l'article 10 de la loi espagnole 34/2002 sur les services de la société de l'information et le commerce électronique (LSSI-CE), l'éditeur du site <b>{domain}</b> est :</p>
<dl><dt>Éditeur</dt><dd>{legalName} (nom commercial {brand})</dd><dt>N° fiscal (NIF/CIF)</dt><dd>{taxId}</dd><dt>Adresse</dt><dd>{address}</dd><dt>E-mail</dt><dd>{email}</dd><dt>Immatriculation</dt><dd>{registry}</dd></dl>
<h3>2. Objet</h3><p>Ce site présente les services de {brand} et permet aux visiteurs de nous contacter.</p>
<h3>3. Conditions d'utilisation</h3><p>En utilisant ce site, vous vous engagez à le faire de manière licite et de bonne foi. Nous faisons des efforts raisonnables pour que les informations soient exactes et le site disponible, sans garantir l'absence d'erreurs ou d'interruptions, et déclinons toute responsabilité pour les dommages liés à son utilisation, sauf disposition légale contraire. Le contenu peut être modifié à tout moment.</p>
<h3>4. Propriété intellectuelle</h3><p>L'ensemble du contenu — textes, logo, graphismes, design et code source — appartient à {legalName} ou est utilisé avec autorisation. Toute reproduction, diffusion ou modification sans accord écrit préalable est interdite.</p>
<h3>5. Liens externes</h3><p>Ce site contient des liens vers des sites tiers (par exemple LinkedIn). Nous ne sommes pas responsables de leur contenu ni de leurs pratiques en matière de confidentialité.</p>
<h3>6. Droit applicable et juridiction</h3><p>Les présentes mentions sont régies par le droit espagnol. Tout litige relève des tribunaux de Barcelone, sauf si les règles de protection des consommateurs prévoient une autre juridiction.</p>
<h3>7. Versions linguistiques</h3><p>Cette page est proposée en plusieurs langues par commodité. En cas de divergence, la version espagnole prévaut.</p>`,
privacy: `<h2>Politique de confidentialité</h2><p class="upd">{UPD}</p>
<h3>1. Responsable du traitement</h3>
<dl><dt>Responsable</dt><dd>{legalName}</dd><dt>N° fiscal</dt><dd>{taxId}</dd><dt>Adresse</dt><dd>{address}</dd><dt>E-mail</dt><dd>{email}</dd></dl>
<h3>2. Données traitées</h3><ul>
<li><b>Formulaire de contact :</b> nom, e-mail, entreprise (facultatif), domaine d'intérêt, votre message, la langue de la page et l'heure de votre consentement.</li>
<li><b>Données techniques :</b> lors de votre visite, notre hébergeur traite automatiquement votre adresse IP, le type de navigateur et la date/heure d'accès dans les journaux du serveur, afin de fournir le site et d'en assurer la sécurité.</li></ul>
<p>Merci de ne pas inclure de catégories particulières de données (par exemple des données de santé) dans votre message.</p>
<h3>3. Finalités et bases légales</h3><ul>
<li>Répondre à votre demande et préparer une éventuelle offre — votre consentement (art. 6(1)(a) RGPD) et des mesures précontractuelles prises à votre demande (art. 6(1)(b) RGPD).</li>
<li>Fonctionnement et sécurité du site — notre intérêt légitime (art. 6(1)(f) RGPD).</li></ul>
<p>Nous ne prenons aucune décision automatisée, ne faisons pas de profilage et n'envoyons pas de prospection sans votre consentement distinct.</p>
<h3>4. Durée de conservation</h3><p>Les données de la demande sont conservées le temps nécessaire à son traitement et au maximum 12 mois après notre dernier échange, sauf si une relation contractuelle naît ; dans ce cas, pendant la relation et les durées imposées par la loi (obligations fiscales et commerciales). Les journaux serveur sont conservés par l'hébergeur pour une durée limitée selon sa politique.</p>
<h3>5. Destinataires et sous-traitants</h3><p>Nous ne vendons ni ne cédons vos données. Nous faisons appel aux prestataires suivants, qui traitent les données pour notre compte :</p><ul>
<li><b>Web3Forms</b> — transmission du formulaire vers notre messagerie.</li>
<li><b>Google (Gmail)</b> — service de messagerie recevant les demandes.</li>
<li><b>GitHub, Inc. (GitHub Pages)</b> — hébergement du site.</li></ul>
<p>Certains prestataires peuvent traiter des données hors de l'Espace économique européen (par exemple aux États-Unis). Ces transferts reposent alors sur une décision d'adéquation de la Commission européenne (comme le Data Privacy Framework UE–États-Unis) ou sur des clauses contractuelles types. Les données peuvent aussi être communiquées aux autorités si la loi l'exige.</p>
<h3>6. Vos droits</h3><p>Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité, et pouvez retirer votre consentement à tout moment, sans remettre en cause la licéité du traitement antérieur. Adressez votre demande à <b>{email}</b>. Nous pouvons vous demander de justifier votre identité.</p>
<p>Vous pouvez introduire une réclamation auprès de l'Agence espagnole de protection des données (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) ou d'une autre autorité de contrôle de l'UE, comme la CNIL.</p>
<h3>7. Sécurité</h3><p>Le site est servi en HTTPS et l'accès aux demandes reçues est limité aux personnes qui en ont besoin pour vous répondre.</p>
<h3>8. Mineurs</h3><p>Ce site s'adresse aux entreprises et n'est pas destiné aux personnes de moins de 14 ans.</p>
<h3>9. Modifications</h3><p>Cette politique peut être mise à jour. La version en vigueur est toujours disponible sur cette page.</p>`,
cookies: `<h2>Politique de cookies</h2><p class="upd">{UPD}</p>
<h3>1. Utilisons-nous des cookies ?</h3><p>Non. Ce site n'utilise pas de cookies d'analyse, de publicité ou de suivi et ne charge aucun traceur tiers. Les polices et images sont servies depuis notre propre domaine.</p>
<h3>2. Stockage local</h3><p>Lorsque vous choisissez une langue, celle-ci est enregistrée dans le stockage local de votre navigateur (clé <code>ardsoft_lang</code>) afin que le site s'ouvre dans la même langue la prochaine fois. Ce stockage est strictement nécessaire à une fonction que vous avez expressément demandée et est donc exempté de consentement (article 22.2 LSSI-CE). Il ne sert pas à vous identifier ni à vous suivre.</p>
<h3>3. Suppression</h3><p>Vous pouvez supprimer le stockage local à tout moment dans les paramètres de votre navigateur (données des sites). Le site s'ouvrira alors dans la langue par défaut.</p>
<h3>4. Modifications</h3><p>Si nous ajoutons un jour des outils d'analyse ou d'autres cookies non essentiels, nous vous demanderons votre consentement au préalable et mettrons à jour cette politique.</p>`
},

de: {
upd: "Stand: {updated}",
legal: `<h2>Impressum</h2><p class="upd">{UPD}</p>
<h3>1. Anbieter der Website</h3>
<p>Gemäß Artikel 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI-CE) ist Anbieter der Website <b>{domain}</b>:</p>
<dl><dt>Anbieter</dt><dd>{legalName} (Handelsname {brand})</dd><dt>Steuernummer (NIF/CIF)</dt><dd>{taxId}</dd><dt>Anschrift</dt><dd>{address}</dd><dt>E-Mail</dt><dd>{email}</dd><dt>Registerangaben</dt><dd>{registry}</dd></dl>
<h3>2. Zweck</h3><p>Diese Website informiert über die Leistungen von {brand} und ermöglicht die Kontaktaufnahme.</p>
<h3>3. Nutzungsbedingungen</h3><p>Mit der Nutzung dieser Website verpflichten Sie sich zu einer rechtmäßigen Nutzung nach Treu und Glauben. Wir bemühen uns um korrekte Inhalte und eine verfügbare Website, übernehmen jedoch keine Gewähr für Fehlerfreiheit oder ununterbrochene Verfügbarkeit und haften nicht für Schäden aus der Nutzung, soweit gesetzlich nicht anders vorgesehen. Inhalte können jederzeit geändert werden.</p>
<h3>4. Urheber- und Markenrechte</h3><p>Alle Inhalte – Texte, Logo, Grafiken, Design und Quellcode – gehören {legalName} oder werden mit Erlaubnis verwendet. Vervielfältigung, Verbreitung oder Änderung ohne vorherige schriftliche Zustimmung ist untersagt.</p>
<h3>5. Externe Links</h3><p>Diese Website enthält Links zu Websites Dritter (z. B. LinkedIn). Für deren Inhalte und Datenschutzpraktiken sind wir nicht verantwortlich.</p>
<h3>6. Anwendbares Recht und Gerichtsstand</h3><p>Es gilt spanisches Recht. Gerichtsstand ist Barcelona, sofern Verbraucherschutzvorschriften keinen anderen Gerichtsstand vorsehen.</p>
<h3>7. Sprachfassungen</h3><p>Diese Seite wird zur besseren Verständlichkeit in mehreren Sprachen angeboten. Bei Abweichungen ist die spanische Fassung maßgeblich.</p>`,
privacy: `<h2>Datenschutzerklärung</h2><p class="upd">{UPD}</p>
<h3>1. Verantwortlicher</h3>
<dl><dt>Verantwortlicher</dt><dd>{legalName}</dd><dt>Steuernummer</dt><dd>{taxId}</dd><dt>Anschrift</dt><dd>{address}</dd><dt>E-Mail</dt><dd>{email}</dd></dl>
<h3>2. Welche Daten wir verarbeiten</h3><ul>
<li><b>Kontaktformular:</b> Name, E-Mail, Unternehmen (optional), Interessensbereich, Ihre Nachricht, Sprache der Seite und Zeitpunkt Ihrer Einwilligung.</li>
<li><b>Technische Daten:</b> Beim Besuch der Website verarbeitet unser Hosting-Anbieter automatisch Ihre IP-Adresse, den Browsertyp sowie Datum und Uhrzeit des Zugriffs in Server-Logs, um die Website bereitzustellen und zu schützen.</li></ul>
<p>Bitte übermitteln Sie in Ihrer Nachricht keine besonderen Kategorien personenbezogener Daten (z. B. Gesundheitsdaten).</p>
<h3>3. Zwecke und Rechtsgrundlagen</h3><ul>
<li>Beantwortung Ihrer Anfrage und Vorbereitung eines möglichen Angebots – Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).</li>
<li>Betrieb und Sicherheit der Website – unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).</li></ul>
<p>Wir treffen keine automatisierten Entscheidungen, erstellen keine Profile und senden keine Werbung ohne Ihre gesonderte Einwilligung.</p>
<h3>4. Speicherdauer</h3><p>Anfragedaten speichern wir so lange, wie es zur Bearbeitung erforderlich ist, höchstens jedoch 12 Monate nach der letzten Kommunikation – es sei denn, es entsteht ein Vertragsverhältnis; dann für dessen Dauer und die gesetzlichen Aufbewahrungsfristen (z. B. steuer- und handelsrechtlich). Server-Logs werden vom Hosting-Anbieter für einen begrenzten Zeitraum gemäß seinen Richtlinien gespeichert.</p>
<h3>5. Empfänger und Auftragsverarbeiter</h3><p>Wir verkaufen Ihre Daten nicht und geben sie nicht an Dritte weiter. Folgende Dienstleister verarbeiten Daten in unserem Auftrag:</p><ul>
<li><b>Web3Forms</b> – Zustellung des Kontaktformulars an unser Postfach.</li>
<li><b>Google (Gmail)</b> – E-Mail-Dienst, über den Anfragen eingehen.</li>
<li><b>GitHub, Inc. (GitHub Pages)</b> – Hosting der Website.</li></ul>
<p>Einige Anbieter können Daten außerhalb des Europäischen Wirtschaftsraums (z. B. in den USA) verarbeiten. Die Übermittlung erfolgt dann auf Grundlage eines Angemessenheitsbeschlusses der EU-Kommission (etwa des EU-US Data Privacy Framework) oder von Standardvertragsklauseln. Eine Weitergabe an Behörden erfolgt nur, wenn dies gesetzlich vorgeschrieben ist.</p>
<h3>6. Ihre Rechte</h3><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit und können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung berührt wird. Richten Sie Ihre Anfrage an <b>{email}</b>. Wir können Sie bitten, Ihre Identität nachzuweisen.</p>
<p>Sie können sich bei der spanischen Datenschutzbehörde (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) oder einer anderen Aufsichtsbehörde in der EU beschweren.</p>
<h3>7. Sicherheit</h3><p>Die Website wird über HTTPS ausgeliefert; Zugriff auf eingegangene Anfragen haben nur Personen, die sie zur Beantwortung benötigen.</p>
<h3>8. Minderjährige</h3><p>Diese Website richtet sich an Unternehmen und nicht an Personen unter 14 Jahren.</p>
<h3>9. Änderungen</h3><p>Wir können diese Erklärung aktualisieren. Die jeweils aktuelle Fassung finden Sie auf dieser Seite.</p>`,
cookies: `<h2>Cookie-Richtlinie</h2><p class="upd">{UPD}</p>
<h3>1. Verwenden wir Cookies?</h3><p>Nein. Diese Website verwendet keine Analyse-, Werbe- oder Tracking-Cookies und lädt keine Tracker von Drittanbietern. Schriften und Bilder werden von unserer eigenen Domain geladen.</p>
<h3>2. Lokaler Speicher</h3><p>Wenn Sie eine Sprache wählen, wird diese im lokalen Speicher Ihres Browsers abgelegt (Schlüssel <code>ardsoft_lang</code>), damit die Website beim nächsten Besuch in derselben Sprache öffnet. Dies ist für eine von Ihnen ausdrücklich gewünschte Funktion unbedingt erforderlich und daher nach Art. 22.2 LSSI-CE (bzw. § 25 Abs. 2 TDDDG) einwilligungsfrei. Es dient nicht dazu, Sie zu identifizieren oder zu verfolgen.</p>
<h3>3. Löschen</h3><p>Sie können den lokalen Speicher jederzeit in Ihren Browser-Einstellungen (Websitedaten) löschen. Die Website öffnet dann in der Standardsprache.</p>
<h3>4. Änderungen</h3><p>Sollten wir künftig Analyse- oder andere nicht notwendige Cookies einsetzen, holen wir vorher Ihre Einwilligung ein und aktualisieren diese Richtlinie.</p>`
},

ru: {
upd: "Последнее обновление: {updated}",
legal: `<h2>Правовая информация</h2><p class="upd">{UPD}</p>
<h3>1. Владелец сайта</h3>
<p>В соответствии со статьёй 10 испанского Закона 34/2002 об услугах информационного общества и электронной торговле (LSSI-CE) владельцем сайта <b>{domain}</b> является:</p>
<dl><dt>Владелец</dt><dd>{legalName} (торговое название {brand})</dd><dt>Налоговый номер (NIF/CIF)</dt><dd>{taxId}</dd><dt>Адрес</dt><dd>{address}</dd><dt>E-mail</dt><dd>{email}</dd><dt>Регистрационные данные</dt><dd>{registry}</dd></dl>
<h3>2. Назначение сайта</h3><p>Сайт содержит информацию об услугах {brand} и позволяет посетителям связаться с нами.</p>
<h3>3. Условия использования</h3><p>Используя сайт, вы обязуетесь делать это законно и добросовестно. Мы стараемся поддерживать информацию актуальной, а сайт доступным, но не гарантируем отсутствие ошибок и перерывов в работе и не несём ответственности за ущерб от использования сайта, кроме случаев, предусмотренных законом. Содержание сайта может быть изменено в любое время.</p>
<h3>4. Интеллектуальная собственность</h3><p>Все материалы сайта — тексты, логотип, графика, дизайн и исходный код — принадлежат {legalName} или используются с разрешения правообладателей. Воспроизведение, распространение или изменение без предварительного письменного согласия запрещены.</p>
<h3>5. Внешние ссылки</h3><p>Сайт содержит ссылки на сторонние ресурсы (например, LinkedIn). Мы не отвечаем за их содержание и политику конфиденциальности.</p>
<h3>6. Применимое право и подсудность</h3><p>Настоящая информация регулируется законодательством Испании. Споры рассматриваются судами Барселоны, если нормы о защите прав потребителей не предусматривают иное.</p>
<h3>7. Языковые версии</h3><p>Страница доступна на нескольких языках для удобства. В случае расхождений преимущество имеет версия на испанском языке.</p>`,
privacy: `<h2>Политика конфиденциальности</h2><p class="upd">{UPD}</p>
<h3>1. Оператор персональных данных</h3>
<dl><dt>Оператор</dt><dd>{legalName}</dd><dt>Налоговый номер</dt><dd>{taxId}</dd><dt>Адрес</dt><dd>{address}</dd><dt>E-mail</dt><dd>{email}</dd></dl>
<h3>2. Какие данные мы обрабатываем</h3><ul>
<li><b>Форма заявки:</b> имя, e-mail, компания (необязательно), интересующее направление, текст сообщения, язык страницы и время предоставления согласия.</li>
<li><b>Технические данные:</b> при посещении сайта хостинг-провайдер автоматически обрабатывает IP-адрес, тип браузера, дату и время доступа в журналах сервера — для работы сайта и его защиты.</li></ul>
<p>Пожалуйста, не указывайте в сообщении данные особых категорий (например, сведения о здоровье).</p>
<h3>3. Цели и правовые основания</h3><ul>
<li>Ответ на заявку и подготовка возможного предложения — ваше согласие (ст. 6(1)(a) GDPR) и преддоговорные действия по вашему запросу (ст. 6(1)(b) GDPR).</li>
<li>Работа и защита сайта — наш законный интерес (ст. 6(1)(f) GDPR).</li></ul>
<p>Мы не принимаем автоматизированных решений, не составляем профили и не отправляем рекламные рассылки без отдельного согласия.</p>
<h3>4. Сроки хранения</h3><p>Данные заявки хранятся столько, сколько нужно для её обработки, и не дольше 12 месяцев после последнего общения, если не возникли договорные отношения; в этом случае — в течение их действия и сроков, установленных законом (например, налоговых и коммерческих). Журналы сервера хранятся хостинг-провайдером ограниченное время согласно его правилам.</p>
<h3>5. Получатели и обработчики</h3><p>Мы не продаём и не передаём ваши данные третьим лицам. Мы используем следующих подрядчиков, обрабатывающих данные по нашему поручению:</p><ul>
<li><b>Web3Forms</b> — доставка заявок с формы на нашу почту.</li>
<li><b>Google (Gmail)</b> — почтовый сервис, куда приходят заявки.</li>
<li><b>GitHub, Inc. (GitHub Pages)</b> — хостинг сайта.</li></ul>
<p>Некоторые подрядчики могут обрабатывать данные за пределами Европейской экономической зоны (например, в США). В этом случае передача основана на решении Европейской комиссии о достаточности защиты (например, EU–US Data Privacy Framework) или на стандартных договорных положениях. Данные могут быть переданы государственным органам, если этого требует закон.</p>
<h3>6. Ваши права</h3><p>Вы вправе запросить доступ к своим данным, их исправление или удаление, ограничение обработки, возразить против обработки, получить данные в переносимом формате, а также в любой момент отозвать согласие — это не влияет на законность обработки до отзыва. Направьте запрос на <b>{email}</b>. Мы можем попросить подтвердить вашу личность.</p>
<p>Если вы считаете, что ваши права нарушены, вы можете подать жалобу в Испанское агентство по защите данных (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) или другой надзорный орган ЕС.</p>
<h3>7. Безопасность</h3><p>Сайт работает по HTTPS, доступ к полученным заявкам есть только у тех, кому он нужен для ответа.</p>
<h3>8. Несовершеннолетние</h3><p>Сайт предназначен для компаний и не ориентирован на лиц младше 14 лет.</p>
<h3>9. Изменения</h3><p>Мы можем обновлять эту политику. Актуальная версия всегда доступна на этой странице.</p>`,
cookies: `<h2>Политика cookie</h2><p class="upd">{UPD}</p>
<h3>1. Используем ли мы cookie?</h3><p>Нет. Сайт не использует аналитические, рекламные или отслеживающие cookie и не загружает сторонние трекеры. Шрифты и изображения загружаются с нашего собственного домена.</p>
<h3>2. Локальное хранилище</h3><p>Когда вы выбираете язык, он сохраняется в локальном хранилище браузера (ключ <code>ardsoft_lang</code>), чтобы в следующий раз сайт открылся на том же языке. Это строго необходимо для функции, которую вы явно запросили, поэтому согласие не требуется (ст. 22.2 LSSI-CE). Эти данные не используются для вашей идентификации или отслеживания.</p>
<h3>3. Как удалить</h3><p>Вы можете в любой момент очистить локальное хранилище в настройках браузера (данные сайтов). После этого сайт будет открываться на языке по умолчанию.</p>
<h3>4. Изменения</h3><p>Если мы когда-либо добавим аналитику или другие необязательные cookie, мы заранее запросим ваше согласие и обновим эту политику.</p>`
}
};
