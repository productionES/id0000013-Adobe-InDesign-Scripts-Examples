
    
//_____________________________________________________________________________________
//		 COUNT ALL PARAGRAPH STYLES IN A PARAGRAPH STYLES GROUP WITH THE SAME NAME             

var Doc = app.documents[0];
var paragraphStyle1 = [];
var paragraphStyle2 = [];   
var paragraphStyle3 = []; 
var paragraphStyle4 = []; 
var counter = 0;     
var paragraphStyleGroup1 = Doc.paragraphStyleGroups.itemByName("INDEX");  
while(counter < paragraphStyleGroup1.paragraphStyles.length){      
    if(paragraphStyleGroup1.paragraphStyles[counter].name.toString().indexOf("Index Level 01 Roman Tracking-") != -1){    
        paragraphStyle1.push(paragraphStyleGroup1.paragraphStyles[counter]);} 
    if(paragraphStyleGroup1.paragraphStyles[counter].name.toString().indexOf("Index Level 02 Roman Tracking-") != -1){    
        paragraphStyle2.push(paragraphStyleGroup1.paragraphStyles[counter]);}
    if(paragraphStyleGroup1.paragraphStyles[counter].name.toString().indexOf("Index Level 03 Roman Tracking-") != -1){    
        paragraphStyle3.push(paragraphStyleGroup1.paragraphStyles[counter]);}
    if(paragraphStyleGroup1.paragraphStyles[counter].name.toString().indexOf("Index Level 04 Roman Tracking-") != -1){    
		paragraphStyle4.push(paragraphStyleGroup1.paragraphStyles[counter]);}         
  counter++;}   
  
totalParagraphStyle1=paragraphStyle1.length; 
totalParagraphStyle2=paragraphStyle2.length;  
totalParagraphStyle3=paragraphStyle3.length; 
totalParagraphStyle4=paragraphStyle4.length;
//____________________________________________________________________________________
//      END COUNT ALL PARAGRAPH STYLES IN A PARAGRAPH STYLES GROUP WITH THE SAME NAME



//_____________________________________________________________________________________
//		 APPLY PARAGRAPH OR CHARACTER STYLE ONLY IF MATCH  
var myDoc = app.activeDocument,      
myCodes = [

//CROSS-REFERENCES
"véase",
"véase también",
"véanse",
"véanse también",    
" g\\r",
" g ",






//OTHERS
"Sutra de los eones afortunados",
"Sutras del vinaya",
"Sutra del vajra cortante",
"Compasión universal",
"Tesoro de fenomenología",
"Los tres aspectos principales del camino",
"Sutra rogado por Upali",
"Sutra implorado por aquellos de intención superior",
"Sutra de los diez planos",
"Sutra de las cien acciones",
"Sutra del sabio y el necio",
"Sutra de la sagrada luz dorada",
"Sutra impartido por el infante Rahadata",
"Sutra expuesto para los Oyentes",
"Sutra que surge de los árboles mecidos por el viento",
"Sutra que surge de la protuberancia de la coronilla del Tathagata",
"Canciones de la palabra",
"Canción de la práctica de la visión de la vacuidad",
"Sesenta estrofas de razonamientos",
"Sutra del secreto de los Tathagatas Superiores",
"Sutra de la pregunta de Gaganganyha",
"La preciosa guirnalda",
"Sutra de la liberación perfecta de Maitreya",
"Sutra de la perfección de la sabiduría en ocho mil versos",
"Sutra conciso de la perfección de la sabiduría",
"Ornamento del camino medio",
"Ornamento de los sutras mahayanas",
"Ornamento para la realización clara",
"Las instrucciones orales del Mahamudra",
"Nuevo manual de meditación",
"Nuevo corazón de la sabiduría",
"Sutra del encuentro del padre y el hijo",
"Tesoro de contemplación",
"Sutra de la recreación de Manyhushri",
"Madhyamakavatara",
"Oración liberadora",
"Lamrim",
"La lámpara para la sabiduría",
"La lámpara del camino hacia la iluminación",
"Sutra rey de la concentración",
"El Dharma kadam de los Hijos",
"El Dharma kadam del Padre",
"Sutra que interpreta la intención",
"Instrucción a Katyayana",
"Iluminación del camino medio",
"Cómo comprender la mente",
"Guía del modo de vida del Bodhisatva",
"Gran tesoro de méritos",
"Carta amistosa",
"Discernimiento de las dos verdades",
"Sutra de la relación dependiente",
"Exposición concisa de las etapas del camino",
"Compendio de sutras",
"Compendio de fenomenología \(Abhidharma\)",
"Comentario a la \«Cognición válida\»",
"Sutra del acopio de joyas",
"Sutra nube de joyas",
"Palabras claras",
"Clara iluminación de la intención",
"El fulgor del razonamiento",
"Relatos de renacimientos",
"Abhidharma",
"Autocomentario",
"Alabanza al dharmadhatu",
"Alabanza a lo inconcebible",
"Alabanza a lo supramundano",
"Alabanza a lo último",
"Canción de la vacuidad",
"Cien sabidurías",
"Cinco etapas de la etapa de consumación de Guhyasamayha",
"Colección de alabanzas",
"Colección de consejos",
"Colección de razonamientos",
"Compendio de Sutras",
"Consejos de corazón",
"Cuatrocientas estrofas",
"Discernimiento del camino medio y los extremos",
"El árbol de la sabiduría",
"El continuo sublime",
"El yoga de la Gran Madre Prajnaparamita",
"Exposición de los fenómenos y su vacuidad",
"Finamente entretejido",
"Gotas para curar a los seres",
"Guía de las obras del Bodhisatva",
"Guía del camino medio",
"La carta amistosa",
"La Gran Madre",
"La lámpara del camino",
"La preciosa guirnalda",
"Oraciones para meditar",
"Oración Liberadora",
"Ornamento de los Sutras mahayanas",
"Ornamento para la realización clara",
"Ornamento de siete textos",
"Prajnaparamitasutra",
"Refutación de objeciones",
"Sabiduría fundamental",
"Sabiduría Fundamental del camino medio",
"Sesenta razonamientos",
"Setenta vacuidades",
"Súplica de Yunkorkyong",
"Sutra de la esencia de la sabiduría",
"Sutra de la perfección de la sabiduría",
"Sutra de la esencia de la sabiduría",
"conciso",
"de cien mil versos",
"de ocho mil versos",
"de veinticinco mil versos",
"Sutra de las cuatro nobles verdades",
"Sutra del corazón",
"Sutra de la esencia de la sabiduría",
"Sutra del descenso a Lanka",
"Sutra de los diez planos",
"Sutra que discierne la intención",
"Adiestramiento de la mente en siete puntos",
"Carta amistosa",
"Comentario a la «Cognición válida»",
"Relatos de la vida de Buda",
"Sutra de la lámpara de la joya",
"Sutra del emplazamiento cercano de retentiva mental",
"Sutra del rey de las concentraciones",
"Sutras de la perfección de la sabiduría",
"Sutras del vinaya",
"Tesoro de fenomenología",
"Treinta y siete prácticas de los Hijos de los Vencedores",
"Tantra de Guhyasamayha",
"Tantra raíz de Heruka",
"Tantra raíz de Hevajra",




// BOOKS 
"Cómo transformar tu vida",
"Cómo comprender la mente",
"El camino gozoso de buena fortuna",
"El espejo del Dharma",
"Nuevo corazón de la sabiduría",
"Budismo moderno",
"Caminos y planos tántricos",
"Nueva guía del Paraíso de las Dakinis",
"Esencia del vajrayana",
"Las instrucciones orales del Mahamudra",
"Gran tesoro de méritos",
"Nuevo ocho pasos hacia la felicidad",
"Introducción al budismo",
"Cómo solucionar nuestros problemas humanos",
"Tesoro de contemplación",
"El voto del Bodhisatva",
"Compasión universal",
"Nuevo manual de meditación",
"Una vida con significado, una muerte gozosa",
"Océano de néctar",
"Gema del corazón",
"La luz clara del gozo",
"Mahamudra del tantra",
"Guía de las obras del Bodhisatva",

// BOOKLETS
"Adiestramiento de la mente en ocho estrofas",
"Asamblea de buena fortuna", 
"Budismo kadampa moderno", 
"Ceremonia de poua",
"Ceremonia del refugio mahayana y Ceremonia del voto del Bodhisatva",
"Ceremonia del voto pratimoksha para el laico",
"Cientos de Deidades de la Tierra Gozosa según el tantra del yoga supremo",
"Cómo rellenar y bendecir estatuas",
"Confesión de las caídas morales del Bodhisatva", 
"Sutra mahayana de los tres cúmulos superiores", 
"Destreza para enseñar",
"El camino de la compasión para el difunto",
"El camino de la compasión para el moribundo",
"El camino gozoso",
"El camino hacia la tierra pura",
"El camino rápido al gran gozo", 
"El cielo de Keajra",
"El melodioso tambor que vence en todas las direcciones",
"El modo de vida kadampa",
"Consejos de corazón de Atisha",
"Los tres aspectos principales del camino hacia la iluminación",
"El Tantra raíz de Heruka y Vajrayoguini",
"Tantra raíz conciso de Heruka",
"El yoga de Arya Tara, la Madre Iluminada", 
"El yoga de Avalokiteshvara de mil brazos", 
"El yoga de Buda Amitayus",
"El yoga de Buda Heruka",
"El yoga de Buda Maitreya", 
"El yoga de Buda Vajrapani",
"El yoga de la Gran Madre Prajnaparamita",
"El yoga de Tara Blanca, el Buda de Larga Vida",
"El yoga inconcebible extraordinario",
"Esencia de buena fortuna", 
"Esencia del vajrayana", 
"Gema del corazón",
"Gota de esencia de néctar",
"Joya preliminar para el retiro del mandala corporal de Heruka",
"La fiesta del gran gozo",
"La gema que colma todos los deseos",
"La gran liberación de la Madre", 
"La gran liberación del Padre", 
"La Gran Madre",
"Sutra de la esencia de la sabiduría",
"Sutra del corazón",
"La joya preliminar",
"La nueva esencia del vajrayana",
"Liberación del dolor",
"Los votos y compromisos del budismo kadampa",
"Manual para la práctica diaria de los votos del Bodhisatva y los votos tántricos",
"Meditación y recitación del Vajrasatva Solitario",
"Nuevo manual de ordenación", 
"Ofrenda al Guía Espiritual", 
"Lama Chopa",
"Ofrenda de fuego de Vajradaka",
"Ofrenda de fuego de Vajrayoguini",
"Ofrenda de fuego del mandala corporal de Heruka",
"Oración del Buda de la Medicina",
"Oración liberadora",
"Oraciones para meditar", 
"Oraciones por la paz en el mundo", 
"Oraciones sinceras",
"Poua concisa",
"Práctica concisa de Buda Amitayus", 
"Preliminares para el retiro de Vajrayoguini", 
"Rey del Dharma",
"Sadhana de Avalokiteshvara", 
"Sadhana de Samayavajra", 
"Sadhana del Buda de la Medicina",
"Súplica al sagrado Guía Espiritual venerable Gueshe Kelsang Gyatso de sus fieles discípulos",
"Tesoro de sabiduría", 
"Un viaje gozoso", 
"Una vida pura",
"Unión de No Más Aprendizaje",
"Yoga de la Dakini"
],    



C = myCodes.length,  c;      
app.findGrepPreferences = null;    
for ( c = 0; c < myCodes.length; c++) {         
    app.findGrepPreferences.findWhat = myCodes[c];         
    myFound = myDoc.findGrep();      
    var F = myFound.length,  f;

    var characterStyleItalic = app.documents[0].characterStyles.itemByName( "Italic" );
    var IndexSectionHead = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Section Head");   
    var IndexLevel01Roman = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 01 Roman");   
    var IndexLevel02Roman = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 02 Roman");   
    var IndexLevel03Roman = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 03 Roman");   
    var IndexLevel04Roman = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 04 Roman");   
     


    for ( f = 0; f < F; f++) {    
        if ((myFound[f].appliedParagraphStyle == IndexLevel01Roman ||
            myFound[f].appliedParagraphStyle == IndexLevel02Roman ||
            myFound[f].appliedParagraphStyle == IndexLevel03Roman ||
            myFound[f].appliedParagraphStyle == IndexLevel04Roman )){
            myFound[f].appliedCharacterStyle = characterStyleItalic;    // uncomment this line to use Character Style
          //myFound[f].appliedParagraphStyle = IndexSectionHead;       // uncomment this line to use Paragraph Style
        } else{}}
        

    for(i=1; i<=totalParagraphStyle1 ;i++){
        var IndexLevel01RomanTracking = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 01 Roman Tracking-"+i);
    for ( f = 0; f < F; f++) {    
        if (myFound[f].appliedParagraphStyle == IndexLevel01RomanTracking) { 
            myFound[f].appliedCharacterStyle = characterStyleItalic;    // uncomment this line to use Character Style
          //myFound[f].appliedParagraphStyle = IndexSectionHead;       // uncomment this line to use Paragraph Style
        } else{}}}


    
    for(i=1; i<=totalParagraphStyle2 ;i++){
        var IndexLevel02RomanTracking = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 02 Roman Tracking-"+i);
    for ( f = 0; f < F; f++) {    
        if (myFound[f].appliedParagraphStyle == IndexLevel02RomanTracking) { 
            myFound[f].appliedCharacterStyle = characterStyleItalic;    // uncomment this line to use Character Style
          //myFound[f].appliedParagraphStyle = IndexSectionHead;       // uncomment this line to use Paragraph Style
        } else{}}}



    for(i=1; i<=totalParagraphStyle3 ;i++){
        var IndexLevel03RomanTracking = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 03 Roman Tracking-"+i);
    for ( f = 0; f < F; f++) {    
        if (myFound[f].appliedParagraphStyle == IndexLevel01RomanTracking) { 
            myFound[f].appliedCharacterStyle = characterStyleItalic;    // uncomment this line to use Character Style
          //myFound[f].appliedParagraphStyle = IndexSectionHead;       // uncomment this line to use Paragraph Style       
        } else{}}}



    for(i=1; i<=totalParagraphStyle4 ;i++){
        var IndexLevel04RomanTracking = myDoc.paragraphStyleGroups.itemByName("INDEX").paragraphStyles.itemByName("Index Level 04 Roman Tracking-"+i);
    for ( f = 0; f < F; f++) {    
        if (myFound[f].appliedParagraphStyle == IndexLevel04RomanTracking) { 
            myFound[f].appliedCharacterStyle = characterStyleItalic;    // uncomment this line to use Character Style
          //myFound[f].appliedParagraphStyle = IndexSectionHead;       // uncomment this line to use Paragraph Style     
        } else{}}}

} 
//_____________________________________________________________________________________
//		 END APPLY PARAGRAPH OR CHARACTER STYLE ONLY IF MATCH  

