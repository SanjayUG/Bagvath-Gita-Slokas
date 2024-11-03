
const data = {
  chapters: [
    {
      chapter: 1,
      slokas: [
        {
          number: 1,
          sanskrit:
            "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
          transliteration:
            "dhritarashtra uvacha | dharmakshetre kurukshetre samaveta yuyutsavah | mamakah pandavaschaiva kimakurvata sanjaya ||",
          translation:
            "Dhritarashtra said: O Sanjaya, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
        },
        {
          number: 2,
          sanskrit:
            "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||",
          transliteration:
            "sanjaya uvacha | drishtva tu pandavanikam vyudham duryodhanastada | acharyamupasangamya raja vachanamabravit ||",
          translation:
            "Sanjaya said: O King, after observing the Pandava army arrayed in military formation, King Duryodhana approached his teacher Dronacharya and spoke the following words.",
        },
        {
          number: 3,
          sanskrit:
            "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||",
          transliteration:
            "pashayetam panduputranam acharya mahatim chamum | vyudham drupadaputrena tava shishyena dhimata ||",
          translation:
            "Behold, O teacher, this mighty army of the sons of Pandu, arrayed by your intelligent disciple, the son of Drupada.",
        },
        {
          number: 4,
          sanskrit:
            "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः ||",
          transliteration:
            "atra shura mahesvasa bhimarjunasama yudhi | yuyudhano viratashcha drupadashcha maharathah ||",
          translation:
            "Here in this army are many heroic bowmen equal in fighting to Bhima and Arjuna: great fighters like Yuyudhana, Virata, and Drupada.",
        },
        {
          number: 5,
          sanskrit:
            "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ||",
          transliteration:
            "drishtaketu chekitana kashirajascha viryavan | purujit kuntibhojascha shaibyashcha narapungavah ||",
          translation:
            "There are also great, heroic, powerful fighters like Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Shaibya, who are the best among men.",
        },
        {
          number: 6,
          sanskrit:
            "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् | सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ||",
          transliteration:
            "yudhamanyushcha vikranta uttamaujascha viryavan | saubhadro draupadeyashcha sarva eva maharathah ||",
          translation:
            "There are the mighty Yudhamanyu, the very powerful Uttamauja, Abhimanyu, and the sons of Draupadi—all great chariot warriors.",
        },
        {
          number: 7,
          sanskrit:
            "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम | नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ||",
          transliteration:
            "asmakam tu vishishta ye tan nibodha dwijottama | nayaka mama sainyasya samjnartham tan bravimi te ||",
          translation:
            "O best of Brahmanas, know also the names of those who are distinguished amongst ourselves, the leaders of my army. For your information, I shall mention them.",
        },
        {
          number: 8,
          sanskrit:
            "भवान्भीष्मश्च कर्णश्च कृपश्च सामितिञ्जयः | अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ||",
          transliteration:
            "bhavan bhishmascha karnashcha kripashcha samitimjayah | ashwatthama vikarnashcha saumadattis tathaiva cha ||",
          translation:
            "Yourself, Bhishma, Karna, Kripa, who is ever victorious in battle; Ashvatthama, Vikarna, and Jayadratha, the son of Somadatta.",
        },
        {
          number: 9,
          sanskrit:
            "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः | नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ||",
          transliteration:
            "anye cha bahavah shura madarthe tyaktajivitah | nanashastrapraharanah sarve yuddhavisharadah ||",
          translation:
            "And there are many other heroes who are prepared to lay down their lives for my sake, armed with various weapons, all well-skilled in warfare.",
        },
        {
          number: 10,
          sanskrit:
            "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ||",
          transliteration:
            "aparyaptam tad asmakaṃ balaṃ bhishmabhirakṣitam | paryaptam tvidam eteṣaṃ balaṃ bhimabhirakṣitam ||",
          translation:
            "Our strength is immeasurable, and we are perfectly protected by Grandfather Bhishma, whereas the strength of the Pandavas, carefully protected by Bhima, is limited.",
        },
        {
          number: 11,
          sanskrit:
            "अयनेषु च सर्वेषु यथाभागमवस्थिताः | भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ||",
          transliteration:
            "ayaneshu cha sarveshu yathabhagam avasthitah | bhishmam evabhirakshantu bhavantah sarva eva hi ||",
          translation:
            "Therefore, all of you must give full support to Grandfather Bhishma as you stand at your respective strategic points in the formations of the military phalanx.",
        },
        {
          number: 12,
          sanskrit:
            "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः | सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ||",
          transliteration:
            "tasya sanjanayan harṣaṃ kuruvṛddhaḥ pitāmahaḥ | siṃhanādaṃ vinadyoccaiḥ śaṅkhaṃ dadhmau pratāpavān ||",
          translation:
            "Then Bhishma, the grand old man of the Kurus, the glorious grandsire, blew his conch very loudly, making a sound like the roar of a lion, filling Duryodhana with joy.",
        },
        {
          number: 13,
          sanskrit:
            "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ||",
          transliteration:
            "tataḥ śaṅkhāśca bheryaśca paṇavānaka-gomukhāḥ | sahasaivābhyahanyanta sa śabdas tumulo ’bhavat ||",
          translation:
            "After that, conches, kettledrums, tabors, trumpets, and horns suddenly blared forth, and the sound was tumultuous.",
        },
        {
          number: 14,
          sanskrit:
            "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ | माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ||",
          transliteration:
            "tataḥ śvetair hayair yukte mahati syandane sthitau | mādhavaḥ pāṇḍavaścaiva divyau śaṅkhau pradadhmatuḥ ||",
          translation:
            "Then Madhava [Krishna] and the son of Pandu [Arjuna], seated in their magnificent chariot, yoked with white horses, blew their divine conches.",
        },
        {
          number: 15,
          sanskrit:
            "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः | पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ||",
          transliteration:
            "pāñcajanyaṃ hṛṣīkeśo devadattaṃ dhanañjayaḥ | pauṇḍraṃ dadhmau mahāśaṅkhaṃ bhīma-karmā vṛkodaraḥ ||",
          translation:
            "Hrishikesha [Krishna] blew the Panchajanya, and Arjuna blew the Devadatta; Bhima, the performer of Herculean deeds, blew the great conch Paundra.",
        },
        {
          number: 16,
          sanskrit:
            "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः | नकुलः सहदेवश्च सुघोषमणिपुष्पकौ ||",
          transliteration:
            "ananta-vijayaṃ rājā kuntī-putro yudhiṣṭhiraḥ | nakulaḥ sahadevaśca sughoṣa-maṇipuṣpakau ||",
          translation:
            "King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the conches named Sughosa and Manipushpaka.",
        },
        {
          number: 17,
          sanskrit:
            "काश्यश्च परमेष्वासः शिखण्डी च महारथः | धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः ||",
          transliteration:
            "kāśyaśca parameṣvāsaḥ śikhaṇḍī ca mahārathaḥ | dhṛṣṭadyumno virāṭaśca sātyakiś cāparājitaḥ ||",
          translation:
            "The king of Kashi, the great archer, the mighty warrior Shikhandi, Dhrishtadyumna, Virata, and the invincible Satyaki also blew their conches.",
        },
        {
          number: 18,
          sanskrit:
            "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते | सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक् ||",
          transliteration:
            "drupado draupadeyāśca sarvaśaḥ pṛthivīpate | saubhadraśca mahābāhuḥ śaṅkhān dadhmuḥ pṛthak-pṛthak ||",
          translation:
            "O King, Drupada, the sons of Draupadi, and the mighty-armed son of Subhadra, all blew their respective conches.",
        },
        {
          number: 19,
          sanskrit:
            "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् | नभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् ||",
          transliteration:
            "sa ghoṣo dhārtarāṣṭrāṇāṃ hṛdayāni vyadārayat | nabhaśca pṛthivīṃ caiva tumulo ’bhyanunādayan ||",
          translation:
            "The tumultuous sound echoed through the sky and the earth, shattering the hearts of the sons of Dhritarashtra.",
        },
        {
          number: 20,
          sanskrit:
            "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान् कपिध्वजः | प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः ||",
          transliteration:
            "atha vyavasthitān dṛṣṭvā dhārtarāṣṭrān kapi-dhvajaḥ | pravṛtte śastra-sampāte dhanurudyamya pāṇḍavaḥ ||",
          translation:
            "At that time, the son of Pandu, Arjuna, whose chariot bore the emblem of Hanuman, took up his bow as he saw the sons of Dhritarashtra arrayed in military formation.",
        },
        {
          number: 21,
          sanskrit:
            "हृषीकेशं तदा वाक्यमिदमाह महीपते | सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ||",
          transliteration:
            "hṛṣīkeśaṃ tadā vākyam idam āha mahīpate | senayor ubhayor madhye rathaṃ sthāpaya me ’cyuta ||",
          translation:
            "O King, Arjuna then spoke to Hrishikesha [Krishna]: 'O Infallible One, please place my chariot between the two armies.'",
        },
        {
          number: 22,
          sanskrit:
            "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् | कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे ||",
          transliteration:
            "yāvadetān nirīkṣe ’haṃ yoddhu-kāmān avasthitān | kair mayā saha yoddhavyam asmin raṇa-samudyame ||",
          translation:
            "I wish to see those who have come here to fight, wishing to please the evil-minded son of Dhritarashtra.",
        },
        {
          number: 23,
          sanskrit:
            "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागता: | धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ||",
          transliteration:
            "yotsyamānān avekṣe ’haṃ ya ete ’tra samāgatāḥ | dhārtarāṣṭrasya durbuddher yuddhe priya-cikīrṣavaḥ ||",
          translation:
            "I wish to see those who have come to this battlefield to fight, seeking to please the evil-minded son of Dhritarashtra.",
        },
        {
          number: 24,
          sanskrit:
            "सञ्जय उवाच | एवमुक्तो हृषीकेशो गुडाकेशेन भारत | सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ||",
          transliteration:
            "sañjaya uvāca | evam ukto hṛṣīkeśo guḍākeśena bhārata | senayor ubhayor madhye sthāpayitvā rathottamam ||",
          translation:
            "Sanjaya said: O Dhritarashtra, having spoken thus, Gudakesha [Arjuna], the conqueror of sleep, requested Hrishikesha [Krishna] to place his chariot in the midst of the armies.",
        },
        {
          number: 25,
          sanskrit:
            "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् | उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ||",
          transliteration:
            "bhīṣma-droṇa-pramukhataḥ sarveṣāṃ ca mahīkṣitām | uvāca pārtha paśyaitān samavetān kurūn iti ||",
          translation:
            "In front of Bhishma, Drona, and all the other kings of the earth, Krishna said, 'Behold, O Partha, all the Kurus assembled here.'",
        },
        {
          number: 26,
          sanskrit:
            "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान् | आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा ||",
          transliteration:
            "tatrāpaśyat sthitān pārthaḥ pitṝn atha pitāmahān | ācāryān mātulān bhrātṝn putrān pautrān sakhīṃs tathā ||",
          translation:
            "There, Arjuna saw his fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends.",
        },
        {
          number: 27,
          sanskrit:
            "श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि | तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् ||",
          transliteration:
            "śvaśurān suhṛdaścaiva senayor ubhayor api | tān samīkṣya sa kaunteyaḥ sarvān bandhūn avasthitān ||",
          translation:
            "He also saw fathers-in-law and well-wishers on both sides. Seeing all his relatives arrayed there, Arjuna, the son of Kunti, was overwhelmed with compassion.",
        },
        {
          number: 28,
          sanskrit: "कृपया परयाविष्टो विषीदन्निदमब्रवीत् |",
          transliteration: "kṛpayā parayāviṣṭo viṣīdann idam abravīt |",
          translation:
            "Arjuna was filled with deep compassion and sorrow, and he spoke the following words.",
        },
        {
          number: 29,
          sanskrit:
            "दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् | सीदन्ति मम गात्राणि मुखं च परिशुष्यति ||",
          transliteration:
            "dṛṣṭvemaṃ sva-janaṃ kṛṣṇa yuyutsuṃ samupasthitam | sīdanti mama gātrāṇi mukhaṃ ca pariśuṣyati ||",
          translation:
            "Seeing my own relatives, O Krishna, gathered here, eager to fight, my limbs weaken and my mouth becomes dry.",
        },
        {
          number: 30,
          sanskrit:
            "वेपथुश्च शरीरे मे रोमहर्षश्च जायते | गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते ||",
          transliteration:
            "vepathuśca śarīre me roma-harṣaśca jāyate | gāṇḍīvaṃ sraṃsate hastāt tvak caiva paridahyate ||",
          translation:
            "My whole body shudders; my hair stands on end, and my bow Gandiva slips from my hand. My skin is burning all over.",
        },
        {
          number: 31,
          sanskrit:
            "न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः | निमित्तानि च पश्यामि विपरीतानि केशव ||",
          transliteration:
            "na ca śaknomy avasthātuṃ bhramatīva ca me manaḥ | nimittāni ca paśyāmi viparītāni keśava ||",
          translation:
            "I am unable to stand here any longer. My mind is reeling, and I see adverse omens, O Kesava.",
        },
        {
          number: 32,
          sanskrit:
            "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च | किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ||",
          transliteration:
            "na kāṅkṣe vijayaṃ kṛṣṇa na ca rājyaṃ sukhāni ca | kiṃ no rājyena govinda kiṃ bhogair jīvitena vā ||",
          translation:
            "I do not desire victory, O Krishna, nor kingdom nor pleasures. Of what use is the kingdom, O Govinda, or enjoyment, or even life itself?",
        },
        {
          number: 33,
          sanskrit:
            "येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च | त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च ||",
          transliteration:
            "yeṣām arthe kāṅkṣitaṃ no rājyaṃ bhogāḥ sukhāni ca | ta ime ’vasthitā yuddhe prāṇāṃs tyaktvā dhanāni ca ||",
          translation:
            "Those for whose sake we desire kingdom, enjoyment, and pleasures are standing here in battle, ready to give up their lives and wealth.",
        },
        {
          number: 34,
          sanskrit:
            "आचार्याः पितरः पुत्रास्तथैव च पितामहाः | मातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा ||",
          transliteration:
            "ācāryāḥ pitaraḥ putrās tathaiva ca pitāmahāḥ | mātulāḥ śvaśurāḥ pautrāḥ śyālāḥ sambandhinas tathā ||",
          translation:
            "Teachers, fathers, sons, as well as grandfathers, uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives.",
        },
        {
          number: 35,
          sanskrit:
            "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन | अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ||",
          transliteration:
            "etān na hantum icchāmi ghnato ’pi madhusūdana | api trai-lokya-rājyasya hetoḥ kiṃ nu mahī-kṛte ||",
          translation:
            "O Madhusudana, even if they kill me, I do not wish to kill them, even for the sovereignty of the three worlds, let alone for this earth.",
        },
        {
          number: 36,
          sanskrit:
            "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन | पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः ||",
          transliteration:
            "nihatya dhārtarāṣṭrān naḥ kā prītiḥ syāj janārdana | pāpam evāśrayed asmān hatvaitān ātatāyinaḥ ||",
          translation:
            "What pleasure will we derive, O Janardana, from killing the sons of Dhritarashtra? Sin alone will be our gain if we slay these aggressors.",
        },
        {
          number: 37,
          sanskrit:
            "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान् | स्वजनं हि कथं हत्वा सुखिनः स्याम माधव ||",
          transliteration:
            "tasmān nārhā vayaṃ hantuṃ dhārtarāṣṭrān svabāndhavān | svajanaṃ hi kathaṃ hatvā sukhinaḥ syāma mādhava ||",
          translation:
            "Therefore, we should not kill the sons of Dhritarashtra, our relatives. How can we be happy after killing our own people, O Madhava?",
        },
        {
          number: 38,
          sanskrit:
            "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः | कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ||",
          transliteration:
            "yady apy ete na paśyanti lobhopahata-cetasaḥ | kula-kṣhaya-kṛitaṁ doṣhaṁ mitra-drohe cha pātakam ||",
          translation:
            "Though they, blinded by greed, do not see the sin in destroying their family or in treachery against friends.",
        },
        {
          number: 39,
          sanskrit:
            "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् | कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ||",
          transliteration:
            "kathaṁ na jñeyam asmābhiḥ pāpād asmān nivartitum | kula-kṣhaya-kṛitaṁ doṣhaṁ prapaśhyadbhir janārdana ||",
          translation:
            "Why should we, who can see the crime in killing our kindred, not turn away from this sin, O Janardana?",
        },
        {
          number: 40,
          sanskrit:
            "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः | धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ||",
          transliteration:
            "kula-kṣhaye praṇaśhyanti kula-dharmāḥ sanātanāḥ | dharme naṣhṭe kulaṁ kṛitsnam adharmo ’bhibhavaty uta ||",
          translation:
            "When a dynasty is destroyed, its traditions perish, and the rest of the family becomes involved in irreligion.",
        },
        {
          number: 41,
          sanskrit:
            "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः | स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ||",
          transliteration:
            "adharmābhibhavāt kṛiṣhṇa praduṣhyanti kula-striyaḥ | strīṣhu duṣhṭāsu vāṛṣhṇeya jāyate varṇa-saṅkaraḥ ||",
          translation:
            "With the preponderance of vice, O Krishna, the women of the family become corrupt; and with the degradation of womanhood, O descendant of Vrishni, comes unwanted progeny.",
        },
        {
          number: 42,
          sanskrit:
            "सङ्करो नरकायैव कुलघ्नानां कुलस्य च | पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ||",
          transliteration:
            "saṅkaro narakāyaiva kula-ghnānāṁ kulasya ca | patanti pitaro hyeṣhāṁ lupta-piṇḍodaka-kriyāḥ ||",
          translation:
            "An increase in unwanted children results in hellish life for both the family and the destroyers of the family. Deprived of sacrificial offerings, the ancestors of such corrupt families fall.",
        },
        {
          number: 43,
          sanskrit:
            "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः | उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ||",
          transliteration:
            "doṣhair etaiḥ kula-ghnānāṁ varṇa-saṅkara-kārakaiḥ | utsādyante jāti-dharmāḥ kula-dharmāś ca śāśvatāḥ ||",
          translation:
            "By the evil deeds of those who destroy the family and create unwanted progeny, all kinds of community projects and family welfare activities are devastated.",
        },
        {
          number: 44,
          sanskrit:
            "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन | नरकेऽनियतं वासो भवतीत्यनुशुश्रुम ||",
          transliteration:
            "utsanna-kula-dharmāṇāṁ manuṣhyāṇāṁ janārdana | narake ‘niyataṁ vāso bhavatīty anuśhuśruma ||",
          translation:
            "O Janardana, we have heard that those who destroy family traditions dwell in hell for an indefinite period.",
        },
        {
          number: 45,
          sanskrit:
            "अहो बत महत्पापं कर्तुं व्यवसिता वयम् | यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ||",
          transliteration:
            "aho bata mahat-pāpaṁ kartuṁ vyavasitā vayam | yad-rājya-sukha-lobhena hantuṁ sva-janam udyatāḥ ||",
          translation:
            "Alas! How strange it is that we are preparing to commit greatly sinful acts, driven by the desire to enjoy royal happiness, by killing our own kinsmen.",
        },
        {
          number: 46,
          sanskrit:
            "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः | धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ||",
          transliteration:
            "yadi mām apratīkāram aśhastraṁ śhastra-pāṇayaḥ | dhārtarāṣhṭrā raṇe hanyus tan me kṣhemataraṁ bhavet ||",
          translation:
            "If the sons of Dhritarashtra, with weapons in hand, kill me unarmed and unresisting on the battlefield, that would be better for me.",
        },
        {
          number: 47,
          sanskrit:
            "सञ्जय उवाच | एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् | विसृज्य सशरं चापं शोकसंविग्नमानसः ||",
          transliteration:
            "sanjaya uvāca | evam uktvā arjunaḥ saṅkhye rathopastha upāviśat | visṛijya sa-śaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ ||",
          translation:
            "Sanjaya said: Having spoken thus, Arjuna cast aside his bow and arrows, and sat down on the chariot, his mind overwhelmed with sorrow.",
        },
      ],
    },
    {
      chapter: 2,
      slokas: [
        {
          number: 1,
          sanskrit:
            "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||",
          transliteration:
            "sanjaya uvacha | drishtva tu pandavanikam vyudham duryodhanastada | acharyamupasangamya raja vachanamabravit ||",
          translation:
            "Sanjaya said: O King, after observing the Pandava army arrayed in military formation, King Duryodhana approached his teacher Dronacharya and spoke the following words.",
        },
        {
          number: 2,
          sanskrit:
            "दुर्योधन उवाच | पश्यैतां पाण्डु पुत्राणामाचार्य महतीं चमूम् | युयुत्सुं समुपेतां तव शिष्येभिरात्मभिः ||",
          transliteration:
            "duryodhana uvacha | pashyaitam pandu putranam acharya mahatim chamum | yuyutsum samupetam tava shishyebhiratmanih ||",
          translation:
            "Duryodhana said: Behold, O teacher, this mighty army of the sons of Pandu, arrayed for battle by the son of Pritha.",
        },
        {
          number: 3,
          sanskrit:
            "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुत्सवः सन्नद्धा तव शिष्येभिरात्मभिः ||",
          transliteration:
            "atra shura maheshuasa bhimarjuna sama yudhi | yuyutsavah sannaddha tava shishyebhiratmanih ||",
          translation:
            "Here in this army, there are many heroic bowmen equal in fighting to Bhima and Arjuna.",
        },
        {
          number: 4,
          sanskrit:
            "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्दनदश्चैव शैब्यः सउभद्रश्च ||",
          transliteration:
            "dhrishtaketu shekitanah kashiraja cha viryavan | purujit kuntanadashchaiva shaibya saubhadracha ||",
          translation:
            "There are also great heroes like Dhrishtaketu, Shekitan, the valiant king of Kashi, Purujit, Kuntibhoja, and the son of Subhadra.",
        },
        {
          number: 5,
          sanskrit: "अस्माकं तु विशिष्टा ये तान्नो त्वा स्मि सञ्जय ||",
          transliteration:
            "asmaakam tu vishishtaa ye taan no tvaam sannyaya ||",
          translation:
            "But, O Sanjaya, in our army, there are many distinguished warriors.",
        },
        {
          number: 6,
          sanskrit: "सञ्जय उवाच | एतां समिक्ष्य सञ्जयः कृतान्तं व्यूढनवम् ||",
          transliteration:
            "sanjaya uvacha | etam samikshya sanjaya krutantam vyudhanavam ||",
          translation:
            "Sanjaya said: After observing this army, Duryodhana, who was troubled, spoke to his teacher.",
        },
        {
          number: 7,
          sanskrit:
            "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
          transliteration:
            "dharmakshetra kurukshetra samaveta yuyutsavah | mamakah pandavaschaiva kimakurvata sanjaya ||",
          translation:
            "In this holy field of Kurukshetra, O Sanjaya, my sons and the sons of Pandu gathered to fight.",
        },
        {
          number: 8,
          sanskrit:
            "पश्यैतां पाण्डु पुत्राणामाचार्य महतीं चमूम् | युयुत्सुं समुपेतां तव शिष्येभिरात्मभिः ||",
          transliteration:
            "pashyaitam pandu putranam acharya mahatim chamum | yuyutsum samupetam tava shishyebhiratmanih ||",
          translation:
            "Behold, O teacher, this mighty army of the sons of Pandu, arrayed for battle by the son of Pritha.",
        },
        {
          number: 9,
          sanskrit:
            "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुत्सवः सन्नद्धा तव शिष्येभिरात्मभिः ||",
          transliteration:
            "atra shura maheshuasa bhimarjuna sama yudhi | yuyutsavah sannaddha tava shishyebhiratmanih ||",
          translation:
            "Here in this army, there are many heroic bowmen equal in fighting to Bhima and Arjuna.",
        },
        {
          number: 10,
          sanskrit:
            "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्दनदश्चैव शैब्यः सउभद्रश्च ||",
          transliteration:
            "dhrishtaketu shekitanah kashiraja cha viryavan | purujit kuntanadashchaiva shaibya saubhadracha ||",
          translation:
            "There are also great heroes like Dhrishtaketu, Shekitan, the valiant king of Kashi, Purujit, Kuntibhoja, and the son of Subhadra.",
        },
        {
          number: 11,
          sanskrit: "अस्माकं तु विशिष्टा ये तान्नो त्वा स्मि सञ्जय ||",
          transliteration:
            "asmaakam tu vishishtaa ye taan no tvaam sannyaya ||",
          translation:
            "But, O Sanjaya, in our army, there are many distinguished warriors.",
        },
        {
          number: 12,
          sanskrit: "सञ्जय उवाच | एतां समिक्ष्य सञ्जयः कृतान्तं व्यूढनवम् ||",
          transliteration:
            "sanjaya uvacha | etam samikshya sanjaya krutantam vyudhanavam ||",
          translation:
            "Sanjaya said: After observing this army, Duryodhana, who was troubled, spoke to his teacher.",
        },
        {
          number: 13,
          sanskrit:
            "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
          transliteration:
            "dharmakshetra kurukshetra samaveta yuyutsavah | mamakah pandavaschaiva kimakurvata sanjaya ||",
          translation:
            "In this holy field of Kurukshetra, O Sanjaya, my sons and the sons of Pandu gathered to fight.",
        },
        {
          number: 14,
          sanskrit:
            "पश्यैतां पाण्डु पुत्राणामाचार्य महतीं चमूम् | युयुत्सुं समुपेतां तव शिष्येभिरात्मभिः ||",
          transliteration:
            "pashyaitam pandu putranam acharya mahatim chamum | yuyutsum samupetam tava shishyebhiratmanih ||",
          translation:
            "Behold, O teacher, this mighty army of the sons of Pandu, arrayed for battle by the son of Pritha.",
        },
        {
          number: 15,
          sanskrit:
            "यदा तव शिष्येभिरात्मभिः | तव युयुत्सवः सन्नद्धा तव शिष्येभिरात्मभिः ||",
          transliteration:
            "yada tava shishyebhiratmanih | tava yuyutsavah sannaddha tava shishyebhiratmanih ||",
          translation:
            "When your students are prepared for battle, you can see them arrayed.",
        },
        {
          number: 16,
          sanskrit:
            "आचार्य महतीं चमूम् | युयुत्सुं समुपेतां तव शिष्येभिरात्मभिः ||",
          transliteration:
            "acharya mahatim chamum | yuyutsum samupetam tava shishyebhiratmanih ||",
          translation: "O teacher, see this mighty army ready for battle.",
        },
        {
          number: 17,
          sanskrit:
            "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
          transliteration:
            "dhritarashtra uvacha | dharmakshetra kurukshetra samaveta yuyutsavah | mamakah pandavaschaiva kimakurvata sanjaya ||",
          translation:
            "Dhritarashtra said: O Sanjaya, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
        },
        {
          number: 18,
          sanskrit:
            "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||",
          transliteration:
            "sanjaya uvacha | drishtva tu pandavanikam vyudham duryodhanastada | acharyamupasangamya raja vachanamabravit ||",
          translation:
            "Sanjaya said: O King, after observing the Pandava army arrayed in military formation, King Duryodhana approached his teacher Dronacharya and spoke the following words.",
        },
        {
          number: 19,
          sanskrit:
            "दुर्योधन उवाच | पश्यैतां पाण्डु पुत्राणामाचार्य महतीं चमूम | युयुत्सुं समुपेतां तव शिष्येभिरात्मभिः ||",
          transliteration:
            "duryodhana uvacha | pashyaitam pandu putranam acharya mahatim chamum | yuyutsum samupetam tava shishyebhiratmanih ||",
          translation:
            "Duryodhana said: Behold, O teacher, this mighty army of the sons of Pandu, arrayed for battle by the son of Pritha.",
        },
        {
          number: 20,
          sanskrit:
            "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुत्सवः सन्नद्धा तव शिष्येभिरात्मभिः ||",
          transliteration:
            "atra shura maheshuasa bhimarjuna sama yudhi | yuyutsavah sannaddha tava shishyebhiratmanih ||",
          translation:
            "Here in this army, there are many heroic bowmen equal in fighting to Bhima and Arjuna.",
        },
        {
          number: 21,
          sanskrit:
            "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्दनदश्चैव शैब्यः सउभद्रश्च ||",
          transliteration:
            "dhrishtaketu shekitanah kashiraja cha viryavan | purujit kuntanadashchaiva shaibya saubhadracha ||",
          translation:
            "There are also great heroes like Dhrishtaketu, Shekitan, the valiant king of Kashi, Purujit, Kuntibhoja, and the son of Subhadra.",
        },
        {
          number: 22,
          sanskrit: "अस्माकं तु विशिष्टा ये तान्नो त्वा स्मि सञ्जय ||",
          transliteration:
            "asmaakam tu vishishtaa ye taan no tvaam sannyaya ||",
          translation:
            "But, O Sanjaya, in our army, there are many distinguished warriors.",
        },
        {
          number: 23,
          sanskrit: "सञ्जय उवाच | एतां समिक्ष्य सञ्जयः कृतान्तं व्यूढनवम् ||",
          transliteration:
            "sanjaya uvacha | etam samikshya sanjaya krutantam vyudhanavam ||",
          translation:
            "Sanjaya said: After observing this army, Duryodhana, who was troubled, spoke to his teacher.",
        },
        {
          number: 24,
          sanskrit:
            "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
          transliteration:
            "dharmakshetra kurukshetra samaveta yuyutsavah | mamakah pandavaschaiva kimakurvata sanjaya ||",
          translation:
            "In this holy field of Kurukshetra, O Sanjaya, my sons and the sons of Pandu gathered to fight.",
        },
      ],
    }
  ],
};

export default data;
